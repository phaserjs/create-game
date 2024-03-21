import path from 'path';
import { templatesList } from './config/templatesList.js';
import AdmZip from 'adm-zip';
import fetch from 'node-fetch';
import ora from 'ora';
import fse from 'fs-extra';
import { projectConfig } from './projectConfig.js';
import { questionsText } from './config/questionsText.js';

export const downLoadProject = async () => {

    

    // Ora loading
    const spinner = ora(questionsText.downloadTemplate.spinner.downloading).start();

    const zipUrl = templatesList.url.replace('{template-name}', projectConfig.templateName + ((projectConfig.sufix === 'ts') ? '-ts' : ''));

    // Download from github and wait until it's done
    const res = await fetch(zipUrl);
    if (!res.ok) {
        spinner.fail(questionsText.downloadTemplate.spinner.downloadingFail.replace('{templateName}', projectConfig.templateName));
        process.exit(1);
    }

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const zip = new AdmZip(buffer);

    if (projectConfig.folderAction === 'delete') {
        spinner.text = questionsText.downloadTemplate.spinner.deleting;
        try {
            const deletePath = path.join(`./${projectConfig.folderName}/`);
            fse.removeSync(deletePath);
            spinner.succeed(questionsText.downloadTemplate.spinner.deletingSuccess);
        } catch (err) {
            console.error(err);
            spinner.fail(questionsText.downloadTemplate.spinner.deletingFail);
            return false;
        }
    }

    zip.getEntries().forEach(entry => {
            // Construye la ruta de destino basándote en la estructura del archivo ZIP
            // Puedes modificar esto para ajustar cómo y dónde quieres guardar los archivos
            const fileName = entry.entryName;
            const destPath = path.join(`./${projectConfig.folderName}`, `${fileName.substring(fileName.indexOf("/") + 1)}`);
    
            // Si la entrada es un directorio, crea el directorio en el sistema de archivos
            if (entry.isDirectory) {
                fse.ensureDirSync(destPath);
            } else {
                const fileContent = zip.readFile(entry); // Provide a default value if zip.readFile(entry) returns null
                if (fileContent !== null) {
                    fse.outputFileSync(destPath, fileContent);
                }
            }
    });
    
    spinner.succeed(questionsText.downloadTemplate.spinner.succeed);
}