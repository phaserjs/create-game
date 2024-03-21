/*
    Input: [
        "importmap",
        "angular",
        "react",
        "react-ts",
        "solid",
        "svelte"
    ]
    output: [
        "importmap",
        "angular",
        "react",
        "solid",
        "svelte"
*/

const onlyUnique = (value: string, index: number, array: Array<any>) => {
    return array.indexOf(value) === index;
}

/**
 * Removes the suffix '-ts' from each template in the given list.
 * @param templateList - The list of templates to clean.
 * @returns The cleaned list of templates.
 */
export const cleanTemplatesList = (templateList: Array<any>) => {
    
    const cleanTemplate = templateList.map((template) => {
        return template.replace('-ts', '');
    }).filter(onlyUnique);

    return cleanTemplate;
}