import { dirname } from "path";

/**
 * Returns the base URL of the current module.
 * @returns {string} The base URL.
 */
export const getBaseURL = () => {
    return dirname(require.main!.filename);
}