import ora from "ora";
import { questionsText } from "../config/questionsText";

/**
 * Checks if the provided value is undefined and exits the process if it is.
 * @param toTest - The value to test.
 */
export const isClosedByUser = async (toTest: any) => {
    if(toTest === undefined) {
        const spinner = ora();
        spinner.fail(questionsText.cancelByUser);

        process.exit(0);
    }
}