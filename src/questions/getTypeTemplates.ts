import prompts from "prompts";
import { questionsText } from "../config/questionsText";
import { TTemplateType } from "../types";
import { isClosedByUser } from "../utils";

/**
 * Retrieves the type template based on user selection.
 * @returns A promise that resolves to the selected template type.
 */
export const getTypeTemplate = async (): Promise<TTemplateType> => {
    const response = await prompts([
        {
            type: 'select',
            name: 'type',
            message: questionsText.typeTemplate.message,
            choices: [
                { title: questionsText.typeTemplate.choices.phaserEditor, value: 'phaser-editor'},
                { title: questionsText.typeTemplate.choices.demo, value: 'demo' },
                { title: questionsText.typeTemplate.choices.frontend, value: 'frontend' },
                { title: questionsText.typeTemplate.choices.bundle, value: 'bundle' },
            ],
        }
    ]);
    
    isClosedByUser(response.type);

    return response.type;
}
