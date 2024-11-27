export const templatesList = {
    "frontend": [
        "react",
        "react-ts",
        "nextjs",
        "vue",
        "vue-ts",
        "angular",
        "svelte",
        "solid"
    ],
    "bundle": [
        "vite",
        "vite-ts",
        "bun",
        "webpack",
        "webpack-ts",
        "remix",
        "importmap",
        "esbuild",
        "esbuild-ts",
        "parcel",
        "parcel-ts",
        "rollup",
        "rollup-ts"
    ],
    "middleware": [
        {
            templateName: "phaser-rune-multiplayer-tic-tac-toe",
            name: "Rune Multiplayer Tic Tac Toe",
            description: "Phaser+Rune Multiplayer Tic-Tac-Toe",
            url: "https://phaser.io/r/create-game-rune"
        },
        {
            templateName: "discord-template",
            name: "Phaser Discord Game Templates",
            description: "Discord Activities",
            url: "https://phaser.io/r/create-game-template/discord-template"
        },
        {
            templateName: "discord-multiplayer-template",
            name: "Phaser Discord Multiplayer Game Templates",
            description: "Discord Activities Multiplayer",
            url: "https://phaser.io/r/create-game-template/discord-multiplayer-template"
        },
        {
            templateName: "template-rapier",
            name: "Rapier",
            description: "Easily use the Rapier physics library with Phaser 3",
            url: "https://phaser.io/r/create-game-template/template-rapier"
        }
    ],
    "demo": [
        /* if we want to add more demos */
        {
            templateName: "phasers-revenge",
            name: "Phaser's Revenge",
            description: "Space Action Pixel Art Game",
            url: "./scaffolding/demo/phasers-revenge"
        },
        {
            templateName: "coin-clicker",
            name: "Coin Clicker",
            description: "Clicker Game",
            url: "./scaffolding/demo/coin-clicker"
        },
        {
            templateName: "memory-card-game",
            name: "Memory Card Game",
            description: "Pair Matching Game",
            url: "./scaffolding/demo/memory-card-game"
        },
        
    ],
    // Dont ask for clean/skeleton. There are templates that are only skeleton mode.
    "noskeletonquestion": [
        "importmap",
        "rapier"
    ],
    // TS by default, this is necessary to avoid asking for the language
    "tstemplates": [
        "angular",
        "svelte",
        "solid",
        "nextjs",
        "bun",
        "remix"
    ]
}