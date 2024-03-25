import { existsSync } from 'fs-extra';

/**
 * Checks if a folder with the specified name exists.
 * @param folderName - The name of the folder to check.
 * @returns A promise that resolves to a boolean indicating whether the folder exists.
 */
export const existFolder = async (folderName: string) => {
    return await existsSync(`./${folderName}`);
}