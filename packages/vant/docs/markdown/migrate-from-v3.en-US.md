# Upgrade from v3 to v4

### Introduction

This document provides an upgrade guide from Vant 3 to Vant 4.

### Installing Vant 4

First you need to install Vant 4 and `@vant/compat`.

`@vant/compat` is a compatibility package that helps you to switch from Vant 3 to Vant 4.

```bash
# Install via npm
npm add vant@^4 @vant/compat@^1

# Install via yarn
yarn add vant@^4 @vant/compat@^1

# Install via pnpm
pnpm add vant@^4 @vant/compat@^1

# Install via Bun
bun add vant@^4 @vant/compat@^1
```

You can also change the version directly in the `dependencies` field of `package.json`, and you will need to reinstall the dependencies after the change.

```diff
{
   "dependencies": {
-    "vant": "^3.0.0",
+    "vant": "^4.0.0",
+    "@vant/compat": "^1.0.0",
   }
}
```

## Import method changes

### Remove babel-plugin-import

Starting from Vant 4.0, `babel-plugin-import` will no longer be supported, please remove the `babel-plugin-import` plugin that the project depends on.

Simply remove the following code in `babel.config.js`:

```diff
module.exports = {
  plugins: [
-    ['import', {
-      libraryName: 'vant',
-      libraryDirectory: 'es',
-      style: true
-    }, 'vant']
  ]
};
```

#### Benefits

The main benefits of removing `babel-plugin-import` are as follows:

- Instead of relying heavily on Babel compilation, projects can use modern compilation tools such as SWC and esbuild to improve compilation efficiency.
- No longer subject to the import restrictions of `babel-plugin-import`, you can import content other than Vant components, such as the new `showToast` method in Vant 4, or the `buttonProps` object:

```ts
import { showToast, buttonProps } from 'vant';
```

#### Import style on demand

Removing `babel-plugin-import` will not affect the JS size of the project, because Vant supports Tree Shaking to remove unnecessary JS code by default.

The way the CSS code is imported can be selected from the following two ways:

- Include Vant's style files in their entirety in the project:

```js
import 'vant/lib/index.css';
```

- Use the [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) plugin to import styles on demand, see [Quick Start](#/en-US/quickstart) for detailed usage.

## Component refactoring

### Introduction

In Vant 4, three components have been refactored, they are:

- `Area`
- `Picker`
- `DatetimePicker`

The reason for refactoring these three components is that in the previous version, the API design of the `Picker` component had some unreasonable designs, which caused people to often encounter problems when using it, such as:

- Picker columns data format definition is unreasonable, easy to cause misunderstanding
- The Picker data flow is not clear, exposing too many instance methods to operate on the data
- DatetimePicker logic is too complicated, bugs often occur in borderline scenarios

To solve the above problems, we have refactored the `Picker` component in the v4 version, and also refactored the `Area` and `DatetimePicker` components derived from `Picker`. If you use these three components in your project, please read the documentation carefully and upgrade.

### Picker component refactoring

#### Major changes

- Support binding the currently selected value through `v-model`, remove the `default-index` prop.
- Redefine the structure of the `columns` prop.
- Removed the instance methods for manipulating internal data, only the `confirm` method remains.
- Added `getSelectedOptions` instance method.
- Changed parameters of `confirm`, `cancel`, `change` events.
- Renamed `item-height` prop to `option-height`.
- Renamed `visible-item-count` prop to `visible-option-num`.

> Please refer to [Picker Component Documentation](#/en-US/picker) for detailed usage.

### DatetimePicker component refactoring

The DatetimePicker component is split into three subcomponents:

- [TimePicker](#/en-US/time-picker): Used for time selection, including hours, minutes, and seconds.
- [DatePicker](#/en-US/date-picker): Used for date selection, including year, month and day.
- [PickerGroup](#/en-US/picker-group): Used to combine multiple Picker selector components to select multiple values in one interaction.

At the same time, the TimePicker and DatePicker components are also refactored based on the new version of the Picker component, and some API designs are optimized.

#### Major changes

The following are the main API changes of TimePicker and DatePicker. For more details, please refer to [TimePicker](#/en-US/time-picker) and [DatePicker](#/en-US/date-picker) documentation.

- The value of `v-model` binding is adjusted to array format.
- Added `columns-type` prop to control option type and order.
- Remove `type` and `columns-order` props.
- Remove `getPicker` method.
- Adjust the parameters of `confirm`, `cancel`, `change` events to be consistent with the Picker component.

> Vant 4 no longer provides the old version of the DatetimePicker component. The PickerGroup component can be used to achieve more flexible and richer interactive effects. For specific usage, please refer to the [PickerGroup](#/en-US/picker-group) component documentation.

### Area component refactoring

The Area component is encapsulated based on the Picker component, so this upgrade also refactors the internal logic of the Area component and optimizes some APIs.

#### Major changes

- Support binding the currently selected value via `v-model`.
- Removed `reset` method, now can be reset by modifying `v-model`.
- Removed `is-oversea-code` prop.
- Adjust the parameters of `confirm`, `cancel`, `change` events to be consistent with the Picker component.
- Renamed `value` prop to `modelValue`.
- Renamed `item-height` prop to `option-height`.
- Renamed `visible-item-count` prop to `visible-option-num`.

> Please refer to [Area Component Documentation](#/en-US/area) for detailed usage.

## API tweaks

### Dialog calling method adjustment

In Vant 3, `Dialog` is a function, and calling the function can quickly evoke the global Dialog component, and `Dialog.Component` is the `Dialog` component object, which is different from the usage of most components, which can easily lead to mistake.

In order to be more intuitive, we adjusted the calling method of `Dialog` in Vant 4, renamed the `Dialog()` function to `showDialog()`, and let `Dialog` directly point to the component object.

```js
// Vant 3
Dialog(); // function call
Dialog.Component; // Component object

// Vant 4
showDialog(); // function call
Dialog; // component object
```

Since `Dialog` has become a component object, other methods mounted on `Dialog` have also been renamed. The mapping relationship between the old and new APIs is as follows:

```js
Dialog(); // -> showDialog()
Dialog.alert(); // -> showDialog()
Dialog.confirm(); // -> showConfirmDialog()
Dialog.close(); // -> closeDialog();
Dialog.setDefaultOptions(); // -> setDialogDefaultOptions()
Dialog.resetDefaultOptions(); // -> resetDialogDefaultOptions()
```

#### Migration

In order to facilitate the migration of old version code to v4, we provide a compatibility solution, you can use the `Dialog` object exported in `@vant/compat` to be compatible with the original code.

Reference the `Dialog` method from `@vant/compat`:

```js
import { Dialog } from '@vant/compat';

Dialog();
Dialog.close();
```

The `Dialog` exported in `@vant/compat` has exactly the same API and behavior as the `Dialog` in Vant 3, so you only need to modify the reference path of `Dialog`, and other codes can remain unchanged.

After the project is upgraded to Vant v4, it is recommended to gradually replace it with the new `showDialog` and other methods in iterations, and remove the `@vant/compat` package.

### Toast calling method adjustment

In Vant 4, the calling method of the `Toast` component has also been adjusted, which is consistent with the changes of the `Dialog` component:

```js
// Vant 3
Toast(); // function call

// Vant 4
showToast(); // function call
Toast; // component object
```

Other methods mounted on `Toast` have also been renamed, and the mapping relationship between the old and new APIs is as follows:

```js
Toast(); // -> showToast()
Toast.fail(); // -> showFailToast()
Toast.success(); // -> showSuccessToast()
Toast.loading(); // -> showLoadingToast()
Toast.clear(); // -> closeToast()
Toast.setDefaultOptions(); // -> setToastDefaultOptions()
Toast.resetDefaultOptions(); // -> resetToastDefaultOptions()
```

At the same time, Vant 4 will no longer globally register the `$toast` method on the `this` object, which means that `$toast` will not be accessible on the `this` object.

#### Migration

In order to facilitate code migration, we provide a compatibility solution, you can use the `Toast` object exported in `@vant/compat` to be compatible with the original code.

```js
import { Toast } from '@vant/compat';

Toast();
Toast.clear();
```

The `Toast` exported in `@vant/compat` has exactly the same API and behavior as `Toast` in Vant 3, so you only need to modify the reference path of `Toast`, and other codes can remain unchanged.

### Notify calling method adjustment

In Vant 4, the calling method of the `Notify` component has also been adjusted, which is consistent with the changes of the `Dialog` component:

```js
// Vant 3
Notify(); // function call
Notify.Component; // component object

// Vant 4
showNotify(); // function call
Notify; // component object
```

Other methods mounted on `Notify` have also been renamed, and the mapping relationship between the old and new APIs is as follows:

```js
Notify(); // -> showNotify()
Notify.clear(); // -> closeNotify()
Notify.setDefaultOptions(); // -> setNotifyDefaultOptions()
Notify.resetDefaultOptions(); // -> resetNotifyDefaultOptions()
```

At the same time, Vant 4 will no longer globally register the `$notify` method on the `this` object, which means that `$notify` will not be accessible on the `this` object.

#### Migration

In order to facilitate code migration, we provide a compatibility solution, you can use the `Notify` object exported in `@vant/compat` to be compatible with the original code.

```js
import { Notify } from '@vant/compat';

Notify();
Notify.clear();
```

`Notify` exported in `@vant/compat` has exactly the same API and behavior as `Notify` in Vant 3, so you only need to modify the reference path of `Notify`, and other codes can remain unchanged.

### ImagePreview calling method adjustment

In Vant 4, the calling method of the `ImagePreview` component has also been adjusted, which is consistent with the changes of the `Dialog` component:

```js
// Vant 3
ImagePreview(); // function call
ImagePreview.Component; // component object

// Vant 4
showImagePreview(); // function call
ImagePreview; // component object
```

#### Migration

In order to facilitate code migration, we provide a compatibility solution, you can use the `ImagePreview` object exported in `@vant/compat` to be compatible with the original code.

```js
import { ImagePreview } from '@vant/compat';

ImagePreview();
```

The `ImagePreview` exported in `@vant/compat` has exactly the same API and behavior as the `ImagePreview` in Vant 3, so you only need to modify the reference path of `ImagePreview`, and other codes can remain unchanged.

### Event naming adjustment

Starting from Vant 4, all events are named in **camelCase** officially recommended by Vue.

```js
// Vant 3
emit('click-input');

// Vant 4
emit('clickInput');
```

This change **does not affect the original template code**, Vue will automatically format the event name in the template, so you don't need to make any changes.

```html
<!-- The following code works as usual without any changes -->
<van-field @click-input="onClick" />
```

If you use the Vant component in JSX, you need to adjust the monitored event name to camel case format, the original dash format will no longer take effect, and the new monitoring method is more in line with JSX's own specifications:

```jsx
// Vant 3
<Field onClick-input={onClick} />

// Vant 4
<Field onClickInput={onClick} />
```

### Other API adjustments

In Vant 4.0 version, the following APIs have been updated incompatible:

#### AddressEdit

- Remove `show-postal` prop.
- Remove `postal-validator` prop.
- Parameter of `change-area` event changed to `PickerOption[]` type.
- Remove undocumented `getArea` instance method.

#### Popup

Some adjustments have been made to the CSS style of Popup. If you have added some custom CSS styles to the Popup component, please check if this update affects the UI in the project.

- Added `box-sizing: border-box` style by default.
- Changed the horizontal centering method when `position="center"`, to solve the problem that the width of the Popup cannot be adjusted correctly.

```less
// Vant 3
.van-popup --center {
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

// Vant 4
.van-popup --center {
  left: 0;
  right: 0;
  width: fit-content;
  max-width: calc(100vw - var(--van-padding-md) * 2);
  margin: 0 auto;
  transform: translateY(-50%);
}
```

#### Tabs

- Removed `click` and `disabled` events, please use `click-tab` event instead

## Style adjustments

### Uniform primary color

In the previous version, Vant components had two primary colors, some components used blue (#1989fa) as the primary color, and others used red (#ee0a24).

To keep the colour specification consistent,, we have unified the primary color in Vant 4, and all components use blue as the primary color.

The primary color of the following components has been changed from red to blue:

- AddressEdit
- AddressList
- Card
- Calendar
- Cascader
- ContactList
- ContactEdit
- CouponList
- Dialog
- DropdownMenu -IndexBar
- Sidebar -Steps
- Tabs
- TreeSelect

### Remove Less variables

Currently, Vant already supports theme customization capabilities based on CSS variables, which is more flexible than Less customization. Therefore, Vant 4 will no longer provide Less-based theme customization.

This means that Vant's npm package will no longer contain `.less` style source files, only the compiled `.css` style files will be provided.

If your project is using an old version of Less theme customization, please use the [ConfigProvider global configuration](#/en-US/config-provider) component to replace it.

### Simplify CSS variable names

With code size and usability in mind, we have simplified the names of some CSS variables, and used shorter words in the variable names to reduce the code size.

This upgrade includes the following variable name changes:

```less
animation-duration -> duration
animation-timing-function-enter -> ease-out
animation-timing-function-leave -> ease-in
background-color -> background
background-color-light -> background-2
border-radius -> radius
border-width-base -> border-width
box-shadow -> shadow
font-family -> font
font-weight-bold -> font-bold
price-integer-font -> price-font
text-link -> link
transition-duration -> duration
```

Due to the large number of CSS variables involved, it is recommended that you perform a global match and replace in the code repository.

For the `ConfigProvider` component, we have added the `ConfigProviderThemeVars` type definition to provide full type hints. In TypeScript code, you can use type hints to ensure that theme variables are substituted correctly.

```ts
import type { ConfigProviderThemeVars } from 'vant';

const themeVars: ConfigProviderThemeVars = {
  sliderBarHeight: '4px',
};
```
