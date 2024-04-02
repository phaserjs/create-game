import { TProjectConfig } from "./types";
import { TProjectNameAction } from "./types/questions";


// export const githubURL = "https://github.com/phaserjs/template-{template-name}/archive/refs/heads/main.zip";
export const githubURL = "https://phaser.io/r/create-game-template/template-{template-name}";

/**
 * Configuration object for the project. It will be used to create the project folder and download the template.
 */
export const projectConfig: TProjectConfig = {
    "folderName": "my-phaser-game",
    "folderAction": "create",
    "templateName": "phaser",
    "templateType": "frontend",
    "sufix": "",
    "lang": 'js',
    "skeleton": "clean"
};

export const setProjectFolderNameAction = (settings: TProjectNameAction) => {
    projectConfig.folderAction = settings.folderAction;
    projectConfig.folderName = settings.folderName;
}

export const setProjectTemplateType = (type: TProjectConfig['templateType']) => {
    projectConfig.templateType = type;
}

export const setProjectTemplateName = (name: TProjectConfig['templateName']) => {
    projectConfig.templateName = name;
}

export const setProjectTemplateSkeleton = (skeleton: TProjectConfig['skeleton']) => {
    projectConfig.skeleton = skeleton;
}

export const setProjectTemplateLangSufix = ({lang, sufix}: {lang: TProjectConfig['lang'], sufix: TProjectConfig['sufix'] }) => {
    projectConfig.sufix = sufix;
    projectConfig.lang = lang;
}
