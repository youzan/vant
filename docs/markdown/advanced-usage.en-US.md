# Advanced Usage

### Intro

Through this chapter, you can learn about some advanced usages of Vant.

## Component Usage

### Component Registration

Vant supports multiple ways to register components:

#### Global Registration

```js
import Vue from 'vue';
import { Button } from 'vant';

// Method 1. via Vue.use
Vue.use(Button);

// Method 2. Register via Vue.component
Vue.component(Button.name, Button);
```

#### Local Registration

```js
import { Button } from 'vant';

export default {
  components: {
    [Button.name]: Button,
  },
};
```

> For more information, please refer to [Vue.js - Component Registration](https://vuejs.org/v2/guide/components-registration.html)。

## Browser adaptation

### Viewport Units

Vant uses `px` unit by default，you can use tools such as [postcss--px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) to transform `px` unit to viewport units (vw, vh, vmin, vmax).

#### PostCSS Config

PostCSS config example:

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
    },
  },
};
```

### Rem Unit

You can use tools such as `postcss-pxtorem` to transform `px` unit to `rem` unit.

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
- [lib-flexible](https://github.com/amfe/lib-flexible)

#### PostCSS Config

PostCSS config example:

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
```

### Custom rootValue

If the size of the design draft is 750 or other sizes, you can adjust the `rootValue` to:

```js
// postcss.config.js
module.exports = {
  plugins: {
    // postcss-pxtorem version >= 5.0.0
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
    },
  },
};
```

### Adapt to PC Browsers

Vant is a mobile-first component library, if you want to use Vant in PC browsers, you can use the [@vant/touch-emulator](https://github.com/vant-ui/vant/tree/dev/packages/vant-touch-emulator) module. This module will automatically convert the mouse events of the PC browser into the touch events of the mobile browser.

```bash
# Install
npm i @vant/touch-emulator -S
```

```js
// Just import this module, then Vant works in PC browser
import '@vant/touch-emulator';
```
