# Advanced Usage

## Browser adaptation

### Viewport Units

Vant uses `px` unit by default，you can use tools such as [postcss--px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) to transform `px` unit to viewport units (vw, vh, vmin, vmax).

#### PostCSS Config

PostCSS config example:

```js
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.4', 'iOS >= 8'],
    },
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
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
```

### Adapt to PC Browsers

Vant is a mobile-first component library, if you want to use Vant in PC browsers, you can use the [@vant/touch-emulator](https://github.com/youzan/vant/tree/dev/packages/vant-touch-emulator) module. This module will automatically convert the mouse events of the PC browser into the touch events of the mobile browser.

```bash
# Install
npm i @vant/touch-emulator -S
```

```js
// Just import this module, then Vant works in PC browser
import '@vant/touch-emulator';
```
