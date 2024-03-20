export const templatesList = {
    "url": "https://github.com/phaserjs/template-{template-name}/archive/refs/heads/main.zip",
    "frontend": [
        "template-importmap",
        "template-angular",
        "template-react",
        "template-react-ts",
        "template-solid",
        "template-svelte",
        "template-vue",
        "template-vue-ts"
    ],
    "bundle": [
        "template-webpack",
        "template-webpack-ts",
        "template-vite",
        "template-vite-ts",
        "template-esbuild",
        "template-esbuild-ts",
        "template-parcel",
        "template-parcel-ts",
        "template-rollup",
        "template-rollup-ts"
    ],
    "demo": [/* if we want to add more demos */],
    // Dont ask for clean/skeleton. There are templates that are only skeleton mode.
    "noskeletonquestion": [
        "importmap"
    ],
    // TS by default
    "tstemplates": [
        "angular",
        "svelte",
        "solid"
    ]
}