import prompts from "prompts";
import { existFolder, isValidFolderName, isClosedByUser, isCurrentDirectory } from "../utils";
import { TFolderAction, TProjectNameAction } from "../types/questions";
import { projectConfig } from "../projectConfig";
import { questionsText } from "../config/questionsText";

/**
 * Asks the user what to do if the folder already exists.
 * @returns A promise that resolves to a TFolderAction representing the user's choice.
 */
const askWhatDoIfFolderExists = async (): Promise<TFolderAction> => {
    const response = await prompts({
        type: 'select',
        name: 'action',
        message: questionsText.folderNameAction.action,
        validate: value => isValidFolderName(value) ? true : questionsText.folderNameAction.invalidName,
        choices: [
            { title: questionsText.folderNameAction.choices.create, value: 'create' },
            { title: questionsText.folderNameAction.choices.use, value: 'use' },
            { title: questionsText.folderNameAction.choices.delete, value: 'delete' },
        ],
    });

    isClosedByUser(response.action);

    return response.action;

}

/**
 * Prompts the user to enter a project name and returns an action object based on the user's input.
 * If a project name is provided as an argument, it checks if the folder exists and returns the corresponding action object.
 * @param name - Optional. The project name.
 * @returns A promise that resolves to a TProjectNameAction object.
 */
export const getFolderNameAction = async (name?: string): Promise<TProjectNameAction>  => {
    
    if (name === undefined) {

        const response = await prompts({
            type: 'text',
            name: 'folderName',
            initial: projectConfig.folderName,
            message: questionsText.folderNameAction.message,
            validate: value => isValidFolderName(value) ? true : questionsText.folderNameAction.invalidName,
        });

        const checkFolder = await existFolder(response.folderName);

        if (checkFolder) {
            const responseAskExists = await askWhatDoIfFolderExists();
            if (responseAskExists === 'delete') {

                return {
                    folderAction: 'delete',
                    folderName: response.folderName.trim()
                }

            } else {

                return {
                    folderAction: 'create',
                    folderName: (await getFolderNameAction()).folderName
                }

            }
        } else {

            isClosedByUser(response.folderName);

            return {
                folderAction: 'create',
                folderName: response.folderName.trim()
            }

        } 
    }

    else if (isCurrentDirectory(name)) {

        return {
            folderAction: 'use',
            folderName: name.trim()
        }
        
    }

    else {

        const checkFolder = await existFolder(name);

        if (checkFolder) {

            const response = await askWhatDoIfFolderExists();

            if (response === 'delete') {

                return {
                    folderAction: 'delete',
                    folderName: name.trim()
                }
                
            } 
  
            if (response === 'use') {

                return {
                    folderAction: 'use',
                    folderName: name.trim()
                }

            }

            else {

                return {
                    folderAction: 'create',
                    folderName: (await getFolderNameAction()).folderName
                }

            }

        } else {

            // TODO: Improve this message
            if (!isValidFolderName(name)) {
                throw new Error('Invalid folder name.');
            }

        }

        return {
            folderAction: 'create',
            folderName: name.trim()
        }

    }
}