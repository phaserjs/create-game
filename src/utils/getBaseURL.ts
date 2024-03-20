import { dirname } from "path";

export const getBaseURL = () => {
    return dirname(require.main!.filename);
}