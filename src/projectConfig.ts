import { TProjectConfig } from "./types";
import { TProjectNameAction } from "./types/questions";

export const projectConfig: TProjectConfig = {
    "folderName": "my-phaser-game",
    "folderAction": "create", // create | delete
    "templateName": "phaser", // phaser | react | vue | svelte etc...
    "templateType": "frontend", // frontend | bundle | demo | undefined
    "sufix": "", // js | ts | '' - the sufix lang is used to get the template url like react-ts
    "lang": 'js', // js | ts -> This is used to get the default template lang, a template could don't have sufix but can have ts like default lang (svelte)
    "skeleton": "clean" // clean | skeleton
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
