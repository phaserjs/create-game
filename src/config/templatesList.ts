export const templatesList = {
    "url": "https://github.com/phaserjs/template-{template-name}/archive/refs/heads/main.zip",
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
    "demo": [/* if we want to add more demos */],
    // Dont ask for clean/skeleton. There are templates that are only skeleton mode.
    "noskeletonquestion": [
        "importmap",
        "nextjs"
    ],
    // TS by default
    "tstemplates": [
        "angular",
        "svelte",
        "solid",
        "nextjs"
    ]
}