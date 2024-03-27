export const templatesList = {
    "frontend": [
        "importmap",
        "angular",
        "react",
        "react-ts",
        "solid",
        "svelte",
        "vue",
        "vue-ts",
        "nextjs"
    ],
    "bundle": [
        "webpack",
        "webpack-ts",
        "vite",
        "vite-ts",
        "esbuild",
        "esbuild-ts",
        "parcel",
        "parcel-ts",
        "rollup",
        "rollup-ts"
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
        "importmap"
    ],
    // TS by default
    "tstemplates": [
        "angular",
        "svelte",
        "solid",
        "nextjs"
    ]
}