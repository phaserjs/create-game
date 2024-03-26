import chalk from 'chalk';

export const questionsText = {
    cancelByUser: 'Canceled.',
    demo: {
        message: chalk.yellow('Select a demo:')
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
        message: chalk.yellow('Select Phaser Template:'),
        choices: {
            demo: 'Demo Game',
            frontend: 'Client Framework (React, Vue, Angular or SolidJS)',
            bundle: 'Web Bundler (Vite, Webpack, ESBuild, Parcel, Rollup or ImportMap)'
        }
    },
    template: {
        message: chalk.yellow('Select template:')
    },
    cleanOrSkeleton: {
        message: chalk.yellow('Select Minimal or Complete Template:'),
        choices: {
            clean: 'Minimal',
            skeleton: 'Complete'
        }
    },
    templateLangSufix: {
        message: chalk.yellow('Select Development Language:')
    },
    downloadTemplate: {
        spinner: {
            downloading: 'Downloading template',
            downloadingFail: 'Error downloading {templateName} template',
            deleting: 'Deleting project folder',
            deletingSuccess: chalk.blue('Project folder deleted'),
            deletingFail: chalk.red('Error deleting project folder'),
            succeed: chalk.yellow('Project downloaded')
        }
    },
    welcomeMessage: `\no--------------------------------------------------o
|     Welcome to the Phaser Template Installer     |
|             Let´s start the installation         |
o--------------------------------------------------o\n`,
    endMessage: `\no---------------------------------------------------------o
|               Project created successfully              |
|                Thank you for using Phaser               |
|       Tell us about your game! - games@phaser.io        |
o---------------------------------------------------------o

${chalk.yellow('Next steps:')}
1. cd {folderName}
2. npm install
3. npm dev

${chalk.cyan('Happy coding!')}`,
}
