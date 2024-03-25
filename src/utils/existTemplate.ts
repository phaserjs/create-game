import { templatesList } from "../config/templatesList";

/**
 * Checks if a template with the given name exists.
 * @param templateName - The name of the template to check.
 * @returns A boolean indicating whether the template exists.
 */
export const existTemplate = (templateName: string) => {
    templateName = templateName.replace(/-js$/, '');
    return Object.values(templatesList).some(category => category.includes(templateName as never));
}