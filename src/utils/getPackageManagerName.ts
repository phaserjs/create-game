export const getPackageManagerName = () => {
    
    const isYarn = !!process.env.npm_execpath && process.env.npm_execpath.includes('yarn');
    const isBun = !!process.env.BUN_ENV;
    const isPnpm = !!process.env.npm_execpath && process.env.npm_execpath.includes('pnpm');

    let runner = 'npm';

    if (isYarn) {
        runner = 'yarn';
    } else if (isBun) {
        runner = 'bun';
    }
    else if (isPnpm) {
        runner = 'pnpm';
    }

    return runner;

}