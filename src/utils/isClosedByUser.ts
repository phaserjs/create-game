import ora from "ora";
import { questionsText } from "../config/questionsText";

export const isClosedByUser = async (toTest: any) => {
    if(toTest === undefined) {
        const spinner = ora();
        spinner.fail(questionsText.cancelByUser);

        process.exit(0);
    }
}