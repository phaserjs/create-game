import prompts from 'prompts';
import { templatesList } from '../config/templatesList';
import { isClosedByUser } from '../utils';
import { questionsText } from '../config/questionsText';

/**
 * Retrieves the template or skeleton type based on the provided template.
 * If the template is included in the `noskeletonquestion` list, it returns 'skeleton'.
 * Otherwise, it prompts the user to select a template or skeleton type.
 * @param template - The template to check.
 * @returns A Promise that resolves to the selected template or skeleton type.
 */
export const getTemplateCleanSkeleton = async (template: string) => {

    if (templatesList.noskeletonquestion.includes(template)) {
        return 'skeleton';
    } else {
        const templateOrSkeleton = await prompts([
            {
                type: 'select',
                name: 'type',
                message: questionsText.cleanOrSkeleton.message,
                choices: [
                    { title: questionsText.cleanOrSkeleton.choices.skeleton, value: 'skeleton' },
                    { title: questionsText.cleanOrSkeleton.choices.clean, value: 'clean' }
                ],
            }
        ]);
        isClosedByUser(templateOrSkeleton.type);
        return templateOrSkeleton.type;
    }
}