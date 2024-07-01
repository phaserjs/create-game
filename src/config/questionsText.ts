import chalk from 'chalk';
import { version } from '../../package.json';
import { getPackageManagerName } from '../utils/getPackageManagerName';

const centerWelcomeMessage = (txt: string, totalWidth: number) => {
    const fieldWidth = totalWidth - 2;
    
    if (fieldWidth < txt.length) {
        throw new Error("The total width is too small for the txt string.");
    }
    
    const spacesNeeded = fieldWidth - txt.length;
    const leftPadding = Math.floor(spacesNeeded / 2);
    const rightPadding = spacesNeeded - leftPadding;

    const centeredTxt = ' '.repeat(leftPadding) + txt + ' '.repeat(rightPadding);
    
    return `${centeredTxt}`;
}

export const questionsText = {
    cancelByUser: 'Canceled.',
    demo: {
        message: chalk.yellow('Select Demo Game:')
    },
    helpMessage: `
${chalk.bold('Usage:')} ${chalk.cyan('npm create @phaserjs/game@latest [folder-name]')}

${chalk.bold('Options:')}
    ${chalk.yellow('--help')}            Show this message and exit
    ${chalk.yellow('--version')}         Print version info and exit

${chalk.bold('Examples:')}
    # Pass a custom folder
    > ${chalk.yellow('npm create @phaserjs/game@latest folder-name')}

    # If your folder name has spaces in it, don't forget to wrap it in quotes:
    > ${chalk.yellow('npm create @phaserjs/game@latest "folder name"')}

    # If you want to install into the current folder, use a period instead of a folder name:
    > ${chalk.yellow('npm create @phaserjs/game@latest .')}

For more information about templates please read the ${chalk.underline('README.md')} file inside of each template.
`,
    folderNameAction: {
        message: chalk.yellow('Enter Project Name:'),
        action: chalk.red('The folder already exists, what do you want to do?'),
        choices: {
            create: 'Choose another name',
            use: 'Use the current folder',
            delete: 'Delete the folder'
        },
        invalidName: 'Invalid folder name. Please choose another name.'
    },
    typeTemplate: {
        message: chalk.yellow('Select Option:'),
        choices: {
            frontend: 'Client Framework (React, Next.js, Vue, Angular, Svelte or SolidJS)',
            bundle: 'Web Bundler (Vite, Bun, Webpack, Remix, ESBuild, Parcel, Rollup or ImportMap)',
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
    welcomeMessage: `\no----------------------------------------------------o
|${centerWelcomeMessage("Welcome to the Phaser Template Installer", 54)}|
|${centerWelcomeMessage("Let´s start the installation", 54)}|
|${centerWelcomeMessage(`v${version}`, 54)}|
o----------------------------------------------------o\n`,
    endMessage: `\no----------------------------------------------------------o
|${centerWelcomeMessage("Project created successfully", 60)}|
|${centerWelcomeMessage("Thank you for using Phaser", 60)}|
|${centerWelcomeMessage("Tell us about your game! - games@phaser.io", 60)}|
o----------------------------------------------------------o

${chalk.yellow('Next steps:')}
1. cd {folderName}
2. ${getPackageManagerName()} install
3. ${getPackageManagerName()} run dev

${chalk.cyan('Happy coding!')}`,
    recordData: `We anonymously record which template was selected to help guide development.\nIf you don't agree, press N to Quit. Otherwise, press Y.`
}
