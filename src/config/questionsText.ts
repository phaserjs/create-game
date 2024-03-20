import chalk from 'chalk';

export const questionsText = {
    cancelByUser: 'User closed the process',
    folderNameAction: {
        message: chalk.yellow('What is your project name?'),
        action: chalk.red('The folder already exists, what do you want to do?'),
        choices: {
            create: 'Choose another name',
            delete: 'Delete the folder'
        },
        invalidName: 'Invalid folder name. Please choose another name.'
    },
    typeTemplate: {
        message: chalk.yellow('Select type template:'),
        choices: {
            demo: 'Demo Game',
            frontend: 'Client Framework (React, Vue, etc...)',
            bundle: 'Bundler'
        }
    },
    template: {
        message: chalk.yellow('Select template:')
    },
    cleanOrSkeleton: {
        message: chalk.yellow('Select clean or skeleton template:')
    },
    templateLangSufix: {
        message: chalk.yellow('Select the language:')
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
| 🚀  Welcome to the Phaser template installer 🚀  |
|           Let´s start the installation           |
o--------------------------------------------------o\n`,
    endMessage: `\no---------------------------------------------------------o
|               Project created successfully              |
|               Thank you for using phaserjs              |
|    🚀  Tell us about your game! - games@phaser.io 🚀    |
o---------------------------------------------------------o

${chalk.yellow('Next steps:')}
1. cd {folderName}
2. npm install
3. npm dev

${chalk.cyan('Happy coding!')}`,
}