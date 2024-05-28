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
yarn create @phaserjs/game
```

```
pnpm create @phaserjs/game@latest
```

```
bun create @phaserjs/game@latest
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

If you want to install into the current folder, use a period instead of a folder name:

```
npm create @phaserjs/game@latest .
```

## After installation

The tool will then ask you a series of questions to allow you to select the correct template for your needs.

Once installed, check the `README.md` file in the newly created folder for further instructions on how to launch and configure the template.

---

## Join the Phaser Community!

We love to see what developers like you create with Phaser! It really motivates us to keep improving. So please join our community and show-off your work 😄

**Visit:** The [Phaser website](https://phaser.io) and follow on [Phaser Twitter](https://twitter.com/phaser_)<br />
**Play:** Some of the amazing games [#madewithphaser](https://twitter.com/search?q=%23madewithphaser&src=typed_query&f=live)<br />
**Learn:** [API Docs](https://newdocs.phaser.io), [Support Forum](https://phaser.discourse.group/) and [StackOverflow](https://stackoverflow.com/questions/tagged/phaser-framework)<br />
**Discord:** Join us on [Discord](https://discord.gg/phaser)<br />
**Code:** 2000+ [Examples](https://labs.phaser.io)<br />
**Read:** The [Phaser World](https://phaser.io/community/newsletter) Newsletter<br />

![Phaser Studio](https://raw.githubusercontent.com/phaserjs/create-game/main/phaser-studio-128.png)

Created by [Phaser Studio Inc](mailto:support@phaser.io). Powered by coffee, anime, pixels and love.

The Phaser logo and characters are &copy; 2011 - 2024 Phaser Studio Inc.

All rights reserved.
