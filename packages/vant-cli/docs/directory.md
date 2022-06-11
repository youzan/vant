# Directory Structure

## Source Code Directory

The basic directory structure of the component library based on Vant CLI is as follows:

```
project
├─ src                # component library source code
│   ├─ button        # button source code
│   └─ dialog        # dialog source code
│
├─ docs               # static doc directory
│   ├─ home.md       # documentation site home
│   └─ changelog.md  # changelog
│
├─ vant.config.mjs    # Vant CLI config file
├─ package.json
└─ README.md
```

The directories for individual components are as follows:

```
button
├─ demo             # component demo directory
│   └─ index.vue   # component demo
├─ index.vue        # component source code
└─ README.md        # component doc
```

When writing SFC, the corresponding JS and CSS files will be generated after bundle process, and the CSS file will be automatically imported into the JS file.

If you need to separate JS and CSS to implement functions such as theme customization, you need to use separate JS and CSS files when writing code, as shown below:

```
button
├─ demo             # component demo directory
│   └─ index.vue   # component demo entry
├─ index.js         # component entry
├─ index.less       # component style，support scss and less
└─ README.md        # component doc
```

When using this directory structure, the developer of the component library needs to import the JS and CSS files respectively.

Theme customization can be achieved by importing style source files (less or scss) and modifying style variables.

## Output Directory

Running the `build` command will generate production code in the `es` and `lib` directories with the following structure:

```
project
├─ es                   # ESM Directory
│   ├─ button          # button component directory
│   ├─ dialog          # dialog component directory
│   └─ index.js        # All component files entry (ESModule)
│
└─ lib                  # Commonjs directory
    ├─ button           # button component library
    ├─ dialog           # dialog component library
    ├─ index.js         # All component files entry (Commonjs)
    ├─ index.less       # All component styles entry(Uncompiled)
    ├─ index.css        # Bundle component styles for CDN
    ├─ [name].js        # Bundle script for UMD
    ├─ [name].es.js     # Bundle script for ESM
    ├─ [name].min.js    # Bundle and minified script for UMD
    └─ [name].es.min.js # Bundle and minified script for ESM
```

The compiled directory of a single component is as follows:

```
button
├─ index.js         # Bundle script file
├─ index.css        # Bundle CSS file
├─ index.less       # Uncompiled CSS file, less or scss
└─ style            # Style entry on demand directory
    ├─ index.js     # Compiled styles on demand
    └─ less.js      # Uncompiled styles on demand, for theme customization
```

### Generate type definition

When the component library is written in TS and the `tsconfig.declaration.json` file exists in the root directory, Vant CLI will automatically generate the `.d.ts` type declaration file.

The format of `tsconfig.declaration.json` is as follows:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "declaration": true,
    "declarationDir": ".",
    "emitDeclarationOnly": true
  },
  "include": ["es/**/*", "lib/**/*"],
  "exclude": ["node_modules", "**/test/**/*", "**/demo/**/*"]
}
```

Please add the `typings` field in `package.json` after generate type declaration:

```json
{
  "typings": "lib/index.d.ts"
}
```
