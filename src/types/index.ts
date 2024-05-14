import { TFolderAction } from './questions';

export type TTemplateType = 'frontend' | 'bundle' | 'demo' | undefined;
export type TSuffixLang = 'js' | 'ts' | '';
export type TTemplateSkeleton = 'clean' | 'skeleton';

export type TProjectConfig = {
    folderName: string; // Folder name 
    folderAction: TFolderAction; // Folder Action create | delete
    templateName: string;
    templateType: TTemplateType;
    sufix: TSuffixLang;
    lang: TSuffixLang;
    skeleton: TTemplateSkeleton;
}