import prompts from 'prompts';
import { TTemplateType } from '../types';
import { templatesList } from '../config/templatesList';
import { cleanTemplatesList, isClosedByUser } from '../utils';
import { questionsText } from '../config/questionsText';

/**
 * Retrieves a template based on the specified template type.
 * @param templateType - The type of template to retrieve.
 * @returns The selected template.
 */
export const getTemplate = async (templateType: TTemplateType) => {
    const templateList = templatesList[templateType];
    const templates = cleanTemplatesList(templateList);

    const response = await prompts([
        {
            type: 'select',
            name: 'template',
            message: questionsText.template.message,
            choices: templates.map((t) => {
                return { title: t, value: t };
            }),
        }
    ]);

    isClosedByUser(response.template);

    return response.template;
}