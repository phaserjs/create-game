import Minimist from 'minimist';
import { projectConfig, setProjectFolderNameAction, setProjectTemplateLangSufix, setProjectTemplateName, setProjectTemplateSkeleton, setProjectTemplateType } from './projectConfig';
import { getFolderNameAction, getTypeTemplate } from './questions';
import { getTemplate } from './questions/getTemplate';

import { getTemplateCleanSkeleton } from './questions/getTemplateCleanSkeleton';
import { getTemplateLangSufix } from './questions/getTemplateLangSufix';
import { installDemoTemplate } from './installDemoTemplate';
import { downLoadProject } from './downloadProject';
import { questionsText } from './config/questionsText';
import { formatCleanTemplate, existTemplate } from './utils';



(async () => {

    console.log(questionsText.welcomeMessage);

    const argv = Minimist(process.argv.slice(2));

    // const { template } = argv;

    // TODO: Make the template system by cli, when the user does --template react check that there is already a template set and automatically set the: templateName, templateType, sufix, lang. Ask for clean or scaffold
    // console.log("Exist template: ", existTemplate(template));

    const folderNameAction = await getFolderNameAction(argv._[0]);
    setProjectFolderNameAction(folderNameAction)

    // 1. Ask for the type of template
    const templateType = await getTypeTemplate();
    setProjectTemplateType(templateType);


    if (templateType === 'demo') {
        installDemoTemplate();
    }
    if (templateType === 'frontend' || templateType === 'bundle') {

        const template = await getTemplate(templateType);
        setProjectTemplateName(template);

        // Get sleketon or clean
        const templateSkeleton = await getTemplateCleanSkeleton(template);
        setProjectTemplateSkeleton(templateSkeleton);

        const templateLangSufix = await getTemplateLangSufix();
        setProjectTemplateLangSufix(templateLangSufix);
    }

    await downLoadProject();

    if (projectConfig.skeleton === 'clean') {
        await formatCleanTemplate();
    }

    console.log(questionsText.endMessage.replace('{folderName}', projectConfig.folderName));

})()