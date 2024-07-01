export const getPackageManagerName = () => {
    const isYarn = !!process.env.npm_execpath && process.env.npm_execpath.includes('yarn');
    const isBun = !!process.env.npm_execpath && process.env.npm_execpath.includes('bun');
    const isPnpm = !!process.env.npm_execpath && process.env.npm_execpath.includes('pnpm');
    const isCnpm = !!process.env.npm_execpath && process.env.npm_execpath.includes('cnpm');
    const isJspm = !!process.env.npm_execpath && process.env.npm_execpath.includes('jspm');
    const isEntropic = !!process.env.npm_execpath && process.env.npm_execpath.includes('entropic');
    const isVolta = !!process.env.npm_execpath && process.env.npm_execpath.includes('volta');
    const isBower = !!process.env.npm_execpath && process.env.npm_execpath.includes('bower');
    const isSpm = !!process.env.npm_execpath && process.env.npm_execpath.includes('spm');
    const isComponent = !!process.env.npm_execpath && process.env.npm_execpath.includes('component');
    const isIed = !!process.env.npm_execpath && process.env.npm_execpath.includes('ied');
    const isVerdaccio = !!process.env.npm_execpath && process.env.npm_execpath.includes('verdaccio');

    let runner = 'npm';

    if (isYarn) {
        runner = 'yarn';
    } else if (isBun) {
        runner = 'bun';
    } else if (isPnpm) {
        runner = 'pnpm';
    } else if (isCnpm) {
        runner = 'cnpm';
    } else if (isJspm) {
        runner = 'jspm';
    } else if (isEntropic) {
        runner = 'entropic';
    } else if (isVolta) {
        runner = 'volta';
    } else if (isBower) {
        runner = 'bower';
    } else if (isSpm) {
        runner = 'spm';
    } else if (isComponent) {
        runner = 'component';
    } else if (isIed) {
        runner = 'ied';
    } else if (isVerdaccio) {
        runner = 'verdaccio';
    }

    return runner;
}