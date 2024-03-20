import fse from 'fs-extra';
import { getBaseURL } from './getBaseURL';
import { projectConfig } from '../projectConfig';
import TemplatesFormat from '../config/templatesFormat.json';

export const formatCleanTemplate = () => {
    if (projectConfig.skeleton === 'clean') {
        // const templateConfig = fse.readJsonSync(`${getBaseURL()}/config/templatesFormat.json`);

        if (projectConfig.skeleton === 'clean') {
            const { clean } = TemplatesFormat;

            // use clean.delete array to remove files and folders
            clean.delete.forEach((item) => {
                const itemFormatted = item.replace('{ext}', projectConfig.lang).replace('game/', (projectConfig.templateType === 'frontend') ? 'game/' : '');
                const path = `./${projectConfig.folderName}/${itemFormatted}`;
                fse.removeSync(path);
            });

            // use clean.add array to add files, localscaffolding get files from ./scaffolding
            clean.add.forEach((item) => {
                const localScaffolding = item.localscaffolding.replace('{ext}', projectConfig.lang);
                const outputFileFormat = item.output.replace('{ext}', projectConfig.lang).replace('game/', (projectConfig.templateType === 'frontend') ? 'game/' : '');

                const pathScalfolding = `${getBaseURL()}/scaffolding/clean/generic/${localScaffolding}`;
                const outputPath = `./${projectConfig.folderName}/${outputFileFormat}`;

                // Get file text from scaffolding
                let scaffolding = fse.readFileSync(pathScalfolding, 'utf8');

                // use item.format array to format the scaffolding text
                item.format.forEach((format) => {

                    scaffolding = scaffolding.replace(format.search, (projectConfig.templateType === 'frontend') ? format.frontendreplace : format.replace);

                });

                // Save the file
                fse.outputFileSync(outputPath, scaffolding);
            });

            // If is frontend search the templateName to get the correct data for replace
            if (projectConfig.templateType === 'frontend') {
                // @ts-ignore
                const frontEnd = clean[projectConfig.templateName];
                if (frontEnd !== undefined) {

                    const frontEndExtension = frontEnd.extensions.filter((ext: { lang: string }) => {
                        return ext.lang === projectConfig.lang;
                    })[0].ext;

                    frontEnd.replace.forEach((frontendReplace: { localscaffolding: string; output: string }) => {
                        const scaffoldingFile = frontendReplace.localscaffolding.replace('{ext}', frontEndExtension);
                        const fileOutput = frontendReplace.output.replace('{ext}', frontEndExtension);
                        const scaffoldingPath = `${getBaseURL()}/scaffolding/clean/${projectConfig.templateName}/${projectConfig.lang}/${scaffoldingFile}`;

                        const scaffolding = fse.readFileSync(scaffoldingPath, 'utf8');
                        const outputPath = `./${projectConfig.folderName}/${fileOutput}`;

                        fse.outputFileSync(outputPath, scaffolding);
                    });
                }
            }
        }

        return true;

    }

}