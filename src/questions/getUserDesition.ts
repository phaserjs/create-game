import prompts from "prompts";
import { isClosedByUser } from "../utils";
import { questionsText } from "../config/questionsText";

export const getUserDesition = async (): Promise<boolean> => {
    console.log('');
    const response = await prompts([
        {
            type: 'confirm',
            name: 'askForData',
            message: questionsText.recordData,
            initial: true,
            active: 'yes',
            inactive: 'no',
        }
    ]);
    
    isClosedByUser(response.askForData);

    if (response.askForData === false) {
        isClosedByUser(undefined);
    }

    return response.askForData;
}