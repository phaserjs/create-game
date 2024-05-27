import path from 'path';

export const isCurrentDirectory = (inputPath: string) => {

    const normalizedPath = path.normalize(inputPath);
    const currentDirectory = path.resolve('.');
    const inputAbsolutePath = path.resolve(normalizedPath);
    return inputAbsolutePath === currentDirectory;

  }