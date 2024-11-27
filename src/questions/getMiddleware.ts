import prompts from "prompts";
import { questionsText } from "../config/questionsText";
import { templatesList } from "../config/templatesList"
import { isClosedByUser } from "../utils";

export const getMiddleware = async () => {
    const middeware_group = templatesList.middleware;

    const third = await prompts({
        type: 'select',
        name: 'value',
        message: questionsText.third.message,
        choices: middeware_group.map(d => ({ title: `${d.name} - ${d.description}`, value: d.templateName }))
    });

    isClosedByUser(third.value);

    return third.value;
}