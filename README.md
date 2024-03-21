# Game creator

## How to use

```
> npm create @phaserjs/game@latest
```

Or
```
> npm create @phaserjs/game@latest folder-name
```

## How to publish the package to npm

- Install dependencies.
```bash
npm i
```

- Build.
```bash
> npm run build
```

- Publish.
```bash
> npm publish
```

## CONFIG FILES

The create-game's configuration files are located in the `src/config` folder.

### File: questionsText.ts

Here you can change the questions that the user will be asked when creating a new game.

You can use chalk to color the text.

### File: templateList.ts

Here you can change the templates that the user will be asked to choose from when creating a new game.

Litle description of JSON values:
- `url`: The url from download the template. We use {template-name} string to replace with the real template name.
- `frontend`: If the template is a frontend framework template (React, Vue, etc...).
- `bundle`: If the template is a only bundle template (vite, webpack, rollup, etc...).
- `demo`: If we want add more demos we can add it here (we need modify installDemostemplate function).
- `nonskeletonquestion`: Some templates don't need clean mode then we can add this template here to avoid ask the user about clean mode.
- `tstemplate`: Add the template name here if the template has only typescript version without -ts sufix (example svelte -> is ts but the template name is template-svelte).

## File: templatesFormat.json

Some templates have clean mode then we need to know what files we need to remove.
templatesFormat.json file is used to know what files we need to remove when the user select clean mode.

### JSON values:

Note: The replace strings are used to replace with the real values and his rules to replace are defined in the file utils/formatCleanTemplates.ts.

- `delete`: Array of files that we need to remove (for all templates` in clean mode).
- `clean`: Array of files that we need to remove (only for the selected template in clean mode).
    - We have some replace strings to replace with the real values:
        - `{ext}`: The file extension (ts/js) detected automatically by the user selection.
        - `{template-addstars}, {template-scale}, {template-import-eventbus}, {template-eventbus}, {template-import-scale} and {template-import-scale}`: replacement strings created for each JS/TS template that is in scaffolding/clean/generic/. The file utils/formatCleanTemplates.ts have rules to replace these strings with the real values.

The templates can have a unique clean mode and we can add it inside the `clean`.
For example react have this structure:
```json
{
    "clean": {
        ...
        "react": {
            "extensions": [
                {
                    "lang": "js",
                    "ext": "jsx"
                },
                {
                    "lang": "ts",
                    "ext": "tsx"
                }
            ],
            "replace": [
                {
                    "localscaffolding": "App.{ext}",
                    "output": "src/App.{ext}"
                }
            ]
        }
    }
}
```

The extensions value is used to know the real extension for each front-end framework template, for example react is jsx and tsx from js and ts respectively.

We can use this extension value to replace the real extension in the replace array. You can use the `{ext}` string to replace with the real extension.

Inside `replace` we have `localscaffolding` this is the route from the clean scaffold file is located. The base path (./scaffolding/) is automatically added by the function that cleans the files.

The `output` is the real route where the file is located in the template.
