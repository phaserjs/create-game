import { build } from 'esbuild';
import clean from 'esbuild-plugin-clean';
import { watch } from 'chokidar';

console.log('* Building...');

const builder = async () => {
    console.clear();

    try {
        const timerStart = Date.now();
        await build({
            color: true,
            entryPoints: ['./src/main.ts'],
            outfile: './phaser-creator/index.js',
            bundle: true,
            minify: false,
            sourcemap: true,
            plugins: [
                clean({
                    patterns: ['./phaser-creator/*']
                })
            ],
            tsconfig: './tsconfig.json',
            platform: 'node',
            logLevel: 'silent'
        });
        const timerEnd = Date.now();
        console.log(`* Built in ${timerEnd - timerStart}ms`);
        console.log('* Listening for changes...');
    } catch (error) {
        console.log('Error ', error);
    } finally {
        console.log('* Building complete');
    }
   
};

builder();

const watcher = watch('src/**/*.ts', { ignored: /(^|[\/\\])\../ });
watcher.on('change', async (event) => {
    builder();
    console.log(`- File changed: ${event}`);
});
