/**
 * Checks if a folder name is valid.
 * 
 * @param name - The folder name to validate.
 * @returns `true` if the folder name is valid, `false` otherwise.
 */
export const isValidFolderName = (name: string): boolean => {
    const invalidChars = /[<>:"\/\\|?*]/;
    const reservedNames = new Set(['CON', 'PRN', 'AUX', 'NUL', 'COM1', 'LPT1']);
    const maxLength = 255;
    if (invalidChars.test(name)) return false;
    if (name.length === 0 || name.length > maxLength) return false;
    if (reservedNames.has(name.toUpperCase())) return false;
    if (name.trim().length !== name.length) return false;
    if (name === '.' || name === '..' || name.startsWith('/') || name.startsWith('\\')) return false;
    return true;
}
