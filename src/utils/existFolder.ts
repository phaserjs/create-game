import { existsSync } from 'fs-extra';

export const existFolder = async (folderName: string) => {
    return await existsSync(`./${folderName}`);
}