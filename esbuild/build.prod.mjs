import { build } from 'esbuild';
import clean from 'esbuild-plugin-clean';

const builder = async () => {
    await build({
        entryPoints: ['./src/main.ts'],
        outfile: './phaser-creator/index.js',
        bundle: true,
        minify: true,
        sourcemap: false,
        plugins: [
            clean({
                patterns: ['./phaser-creator/*']
            })
        ],
        tsconfig: './tsconfig.json',
        platform: 'node'
    });
};

builder();