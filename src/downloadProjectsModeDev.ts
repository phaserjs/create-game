// This is used to download the projects in the mode of development. ONLY FOR DEVELOPMENT PURPOSES.
import path from 'path';
import AdmZip from 'adm-zip';
import ora from 'ora';
import fse from 'fs-extra';
import { projectConfig } from './projectConfig.js';
import { questionsText } from './config/questionsText.js';

export const downLoadProjectsModeDev = async () => {

    // Ora loading
    const spinner = ora(questionsText.downloadTemplate.spinner.downloading).start();
    
    // This url is a local url, it is used to download the templates from the local folder
    const zipUrl = './templates-test/template-' + projectConfig.templateName + ((projectConfig.sufix === 'ts') ? '-ts' : '') + '.zip';
    console.log("zipUrl: ", zipUrl)

    const zip = new AdmZip(zipUrl);

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