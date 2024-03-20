/**
 * Specifies the action to take if a folder already exists.
 * - 'create': Create a new folder.
 * - 'delete': Delete the existing folder.
 */
export type TFolderAction = 'create' | 'delete';

/**
 * Represents the name of a project.
 */
/**
 * Represents a project name with a folder action.
 */
export type TProjectNameAction = {
    /**
     * The name of the project.
     */
    folderName: string;

    /**
     * The folder action associated with the project.
     */
    folderAction: TFolderAction;
}
