import chalk from 'chalk';

export const questionsText = {
    cancelByUser: 'Canceled.',
    demo: {
        message: chalk.yellow('Select Demo Game:')
    },
    folderNameAction: {
        message: chalk.yellow('Enter Project Name:'),
        action: chalk.red('The folder already exists, what do you want to do?'),
        choices: {
            create: 'Choose another name',
            delete: 'Delete the folder'
        },
        invalidName: 'Invalid folder name. Please choose another name.'
    },
    typeTemplate: {
        message: chalk.yellow('Select Option:'),
        choices: {
            frontend: 'Client Framework (React, Vue, Angular, Next.js, Svelte or SolidJS)',
            bundle: 'Web Bundler (Vite, Webpack, ESBuild, Parcel, Rollup or ImportMap)',
            demo: 'Demo Game (Matching Pairs, Clicker, Shmup)'
        }
    },
    template: {
        message: chalk.yellow('Select Template:')
    },
    cleanOrSkeleton: {
        message: chalk.yellow('Minimal or Complete Project:'),
        choices: {
            clean: 'Minimal (Single Phaser Scene)',
            skeleton: 'Complete (Common Phaser Scene selection)'
        }
    },
    templateLangSufix: {
        message: chalk.yellow('Select Development Language:')
    },
    downloadTemplate: {
        spinner: {
            downloading: 'Downloading Template',
            downloadingFail: 'Error downloading {templateName} template',
            deleting: 'Deleting Project folder',
            deletingSuccess: chalk.blue('Project folder deleted'),
            deletingFail: chalk.red('Error deleting project folder'),
            succeed: chalk.yellow('Project Downloaded')
        }
    },
    welcomeMessage: `\no--------------------------------------------------o
|     Welcome to the Phaser Template Installer     |
|           Let´s start the installation           |
o--------------------------------------------------o\n`,
    endMessage: `\no---------------------------------------------------------o
|               Project created successfully              |
|                Thank you for using Phaser               |
|       Tell us about your game! - games@phaser.io        |
o---------------------------------------------------------o

${chalk.yellow('Next steps:')}
1. cd {folderName}
2. npm install
3. npm run dev

${chalk.cyan('Happy coding!')}`,
    recordData: `We anonymously record which template was selected to help guide development.\nIf you don't agree, press N to Quit. Otherwise, press Y.`
}
