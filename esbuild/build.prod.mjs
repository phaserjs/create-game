import { build } from 'esbuild';
import clean from 'esbuild-plugin-clean';

const builder = async () => {
    await build({
        entryPoints: ['./src/main.ts'],
        outfile: './dist/phasercreator.js',
        bundle: true,
        minify: true,
        sourcemap: false,
        plugins: [
            clean({
                patterns: ['./dist/*']
            })
        ],
        tsconfig: './tsconfig.json',
        platform: 'node'
    });
};

builder();