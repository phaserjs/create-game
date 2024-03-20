import prompts from 'prompts';
import { templatesList } from '../config/templatesList';
import { projectConfig } from '../projectConfig';
import { isClosedByUser } from '../utils/isClosedByUser';
import { questionsText } from '../config/questionsText';

export const getTemplateLangSufix = async () => {

    const templateList = templatesList[projectConfig.templateType];

    if (!templateList.includes(`template-${projectConfig.templateName}-ts` as never) ) {
        return {
            lang: templatesList.tstemplates.includes((projectConfig.templateName)) ? 'ts' : 'js',
            sufix: ''
        }
    } else {
        const lang = await prompts([
            {
                type: 'select',
                name: 'sufixLang',
                message: questionsText.templateLangSufix.message,
                choices: [
                    { title: 'TypeScript', value: 'ts' },
                    { title: 'JavaScript', value: 'js' },
                ],
            }
        ]);

        isClosedByUser(lang.sufixLang);

        return { lang: lang.sufixLang, sufix: lang.sufixLang }
    }


}