import prompts from "prompts";
import { questionsText } from "../config/questionsText";
import { templatesList } from "../config/templatesList"
import { isClosedByUser } from "../utils";

const cleanDemoNames = (demo: string) => {
    // Replace ' and space with -
    return demo.trim().replaceAll("'", "").replaceAll(" ", "-").toLowerCase();
};

export const getDemo = async () => {
    const demos = templatesList.demo;
    const demo = await prompts({
        type: 'select',
        name: 'value',
        message: questionsText.demo.message,
        choices: demos.map(d => ({ title: d, value: cleanDemoNames(d) }))
    });

    isClosedByUser(demo);
    return demo.value;
}