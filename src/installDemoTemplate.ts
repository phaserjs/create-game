import ora from 'ora';
import fse from 'fs-extra';
import path from 'path';
import { projectConfig } from './projectConfig';
import { getBaseURL } from './utils';
import { questionsText } from './config/questionsText';
import { templatesList } from './config/templatesList';

export const installDemoTemplate = () => {

    // copy demo template from ./scaffolding/demo and paste id with change the folder demo to the project name
    const spinner = ora('Installing demo template').start();

    // Delete the project folder if it exists
    if (projectConfig.folderAction === 'delete') {
        spinner.text = 'Deleting project folder';
        try {
            const deletePath = path.join(`./${projectConfig.folderName}/`);
            fse.removeSync(deletePath);
            spinner.succeed(questionsText.downloadTemplate.spinner.deletingSuccess);
        } catch (err) {
            console.error(err);
            spinner.fail(questionsText.downloadTemplate.spinner.deletingFail);
            process.exit(1);
            return false;
        }
    }

    const url = templatesList.demo.find(d => d.templateName === projectConfig.templateName)?.url;

    const demoPath = `${getBaseURL()}/${url}`;
    const projectPath = `./${projectConfig.folderName}`;
    fse.copySync(demoPath, projectPath);
    spinner.stop();
}