# Create Phaser Game

![image](https://raw.githubusercontent.com/phaserjs/create-game/main/phaser-create-game.png)

One of the easiest ways to get started quickly with [Phaser](https://phaser.io) is by using our `create-phaser-game` app. This is a CLI tool that presents an interactive selection of official project templates and demo games. Just issue the command, answer some questions and the app will download and configure the right package for your needs.

Currently, we support all of the following frameworks and bundlers:

| Frameworks | Bundlers |
| --------- | ------- |
| Vue.js | Vite |
| React | Rollup |
| Angular | Parcel |
| Next.js | Webpack |
| SolidJS | ESBuild |
| Svelte | Import Map |

Most of these come in both JavaScript and TypeScript versions. The tool will present this option to you when available.

## Demo Games

As well as the frameworks and bundlers listed above, the app also includes 3 Demo games you can install. These are:

* Phaser's Revenge - A space action pixel-art game.
* Coin Clicker - Simply click the coins as quickly as you can.
* Memory Card Game - Match the pairs in this timeless puzzle.

These games are meant as demonstrations of using the Phaser game framework, so you can learn by example. If you already know what you want to build, you can select one of the templates instead.

## How to use

To create a new local game template interactively, use one of the following terminal commands:

```
npm create @phaserjs/game@latest
```

```
npx @phaserjs/create-game@latest
```

```
yarn create @phaserjs/game
```

```
pnpm create @phaserjs/game@latest
```

```
bunx create @phaserjs/game@latest
```

## First Time Users

If this is the first time you're using Phaser and you're not sure where to start, we recommend selecting the options: `Web Bundler` and then `Vite`.

## Pass a custom folder

You can optionally pass the project / folder name and skip that step of the tool by providing a parameter to the create command:

```
npm create @phaserjs/game@latest folder-name
```

If your folder name has spaces in it, don't forget to wrap it in quotes:

```
npm create @phaserjs/game@latest "folder name"
```

## After installation

The tool will then ask you a series of questions to allow you to select the correct template for your needs.

Once installed, check the `README.md` file in the newly created folder for further instructions on how to launch and configure the template.

---

![Phaser Studio](https://raw.githubusercontent.com/phaserjs/create-game/main/phaser-studio-128.png)

Created by [Phaser Studio](https://phaser.io) Inc.
