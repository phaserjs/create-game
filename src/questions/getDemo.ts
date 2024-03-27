import prompts from "prompts";
import { questionsText } from "../config/questionsText";
import { templatesList } from "../config/templatesList"
import { isClosedByUser } from "../utils";

export const getDemo = async () => {
    const demos = templatesList.demo;
    const demo = await prompts({
        type: 'select',
        name: 'value',
        message: questionsText.demo.message,
        choices: demos.map(d => ({ title: `${d.name} - ${d.description}`, value: d.templateName }))
    });

    isClosedByUser(demo);
    return demo.value;
}