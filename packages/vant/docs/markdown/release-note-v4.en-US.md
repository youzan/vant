# 4.0 Release Note

### Introduction

After a year of iterations, Vant 4.0 has been officially released, which is the fourth major version of Vant since it was open-sourced in 2017.

In this iteration, Vant supports the dark mode, adds five new components, improves the utility function API, and refactors components such as Picker, while continuing to make improvements in lightweighting and usability.

### Dark mode support

**Vant 4.0 supports switching all components to dark mode.**

Simply set the `theme` attribute of the [ConfigProvider component](https://vant-ui.github.io/vant/#/en-US/config-provider) to `dark` to switch to dark mode, which will switch all Vant components on the page to a dark style.

```html
<van-config-provider theme="dark">
  <!-- child components -->
</van-config-provider>
```

![](https://user-images.githubusercontent.com/7237365/205472724-6c9ee0df-df10-4f9b-84b6-081576bdcea9.png)

At the same time, the Vant 4.0 document also supports switching to dark mode:

![](https://user-images.githubusercontent.com/7237365/205472729-fefc9053-1866-4812-8b97-ee0ba5d47230.png)

### Several new components

**Vant 4.0 contains the following new components:**

- [BackTop](https://vant-ui.github.io/vant/#/en-US/back-top): Used to back to the top of the page.
- [TimePicker](https://vant-ui.github.io/vant/#/en-US/time-picker): Used for time selection, including hours, minutes, and seconds.
- [DatePicker](https://vant-ui.github.io/vant/#/en-US/time-picker): Used for date selection, including year, month, and day.
- [PickerGroup](https://vant-ui.github.io/vant/#/en-US/picker-group): Used to combine multiple Picker components, allow users to select multiple value.
- [SkeletonItems](https://vant-ui.github.io/vant/#/en-US/skeleton): Customize the skeleton through subcomponents such as SkeletonTitle, SkeletonImage, and SkeletonAvatar.

Among them, TimePicker and DatePicker are split from the old DatetimePicker component, and the DatetimePicker component is removed. You can use PickerGroup to get the interactive effect of selecting the date and time at the same time.

![](https://user-images.githubusercontent.com/7237365/205474243-14e0a87c-dcfa-4229-9a16-f6ebf910b621.png)

### Keep it lightweight

**Vant 4.0 has a 30% reduction in installation size, keeping bundle size lightweight.**

As the npm ecosystem grows, node_modules are eating up our disk space. To alleviate the node_modules black hole and speed up installation, we have optimized Vant's npm dependencies and build outputs.

Compared with Vant 3.6.2, the installation size of Vant 4.0.0 has been reduced from 7MB to 5MB. In contrast, the installation size of mainstream component libraries in the community is generally between 15MB and 80MB. You can check the installation size of npm packages through [packagephobia](https://packagephobia.com/result?p=vant).

![](https://user-images.githubusercontent.com/7237365/205470714-e1828299-4df2-40f4-b7cc-f65971fe4567.png)

In terms of bundle size, this update still increases the size without increasing the price, and the size after Minified + Gzipped remains below 70KB:

![](https://user-images.githubusercontent.com/7237365/205474583-f2d8226f-e089-42d7-8326-3c874dcf1784.png)

### Unify the primary color

**Vant 4.0 unifies the primary color of all components.**

In the previous version, Vant components had two primary colors, some components used blue `#1989fa` as their primary color, and others used red `#ee0a24`.

To keep the color specification consistent, we have unified the primary color in Vant 4, and all components use blue as the primary color.

![](https://user-images.githubusercontent.com/7237365/205472726-a0552833-f99d-447a-acce-051ec7ebdbe1.png)

Now that the primary color is unified, theme customization becomes easier. For example, you can override the `--van-primary-color` CSS variable to set the primary color of all components to green:

```css
:root {
  --van-primary-color: #07c160;
}
```

### Import method adjustment as needed

**Vant 4.0 no longer uses babel-plugin-import for on-demand import.**

In the early days, most component libraries used `babel-plugin-import` to achieve on-demand import, which means that component libraries will strongly rely on Babel compilation. Starting from Vant 4.0, `babel-plugin-import` is no longer supported, which has the following main advantages:

- Instead of relying heavily on Babel compilation, projects can use modern compilation tools such as SWC and esbuild to improve compilation efficiency.

![](https://user-images.githubusercontent.com/7237365/205478241-dba3c4ed-152c-4892-9e74-1a0d978be314.png)

- No longer subject to the import restrictions of `babel-plugin-import`, you can import content other than Vant components, such as the new `showToast` method in Vant 4, or the `buttonProps` object:

```ts
import { showToast, buttonProps } from 'vant';
```

In terms of bundle size, removing `babel-plugin-import` will not affect on the JS size of the project, because Vant supports tree shaking by default to remove unnecessary JS code by default, and CSS code can be imported on demand via [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components). For detailed usage, please refer to ["Quick Start"](https://vant-ui.github.io/vant/#/en-US/quickstart).

### Style variable type hints

**Vant 4.0 provides type hints for style variables.**

Vant provides more than 700 style variables, which you can modify through CSS code or `ConfigProvider` component. In Vant 4.0, we have added the `ConfigProviderThemeVars` type to provide type hints for style variables.

So when writing TypeScript code, you can use type hints to complete theme variable names:

![](https://user-images.githubusercontent.com/7237365/205478960-c284e272-a394-4098-ad0f-eda72e74f9f7.png)

### Picker component refactoring

**Vant 4.0 refactored the Picker component, as well as the Picker-based Area and DatetimePicker components.**

In the previous version, the API design of the `Picker` component was not sensible enough, causing people to often encounter problems when using it, such as:

- The columns data format of Picker is unreasonable, which is easy to cause misunderstanding.
- The data flow of Picker is not clear, exposing too many instance methods to operate on the data.
- The logic of DatetimePicker is too complex, and bugs often occur in borderline scenarios.

To solve the above problems, we refactored the `Picker` component in Vant 4.0, and also refactored the `Area` and `DatetimePicker` components derived from `Picker`.

If these three components are used in your project, please read the ["Upgrade Guide"](https://vant-ui.github.io/vant/#/en-US/migrate-from-v3) to upgrade.

### Component Utils Adjustment

**Vant 4.0 adjusts the usage of component utility functions to be more intuitive.**

Vant 3 provides some component utils, such as calling the `Dialog()` function, which can quickly invoke the global Dialog component, and `Dialog.Component` is the component object corresponding to `Dialog`.

```ts
// function call
Dialog({ message: 'Hello World!' });

// component registration
app.use('van-dialog', Dialog.Component);
```

The above API design leads to usage differences between Dialog and other components, and is easily abused; it also prevents `unplugin-vue-components` from automatically importing Dialog and other components.

To be more intuitive, we have adjusted the calling method of component utils in Vant 4. The affected functions include `Dialog()`, `Toast()`, `Notify()` and `ImagePreview()`. Taking Dialog as an example, we rename the `Dialog()` function to `showDialog()`, and let `Dialog` directly point to the component object.

```ts
// function call
showDialog({ message: 'Hello World!' });

// component registration
app.use('van-dialog', Dialog);
```

To facilitate the migration of existing code to Vant 4.0, we provide a compatibility solution. You can use the `Dialog()` function exported from `@vant/compat` to be compatible with the original code.

```js
import { Dialog } from '@vant/compat';

Dialog({ message: 'Hello World!' });
```

The `Dialog()` exported in `@vant/compat` has exactly the same API and behavior as `Dialog()` in Vant 3, so when upgrading, you only need to change its reference path, and the rest of the code can remain constant. After upgrading the project to Vant 4.0, it is recommended to gradually replace it with the new `showDialog()` and other methods in iterations, and remove the `@vant/compat` package.

### Event naming adjustment

**Vant 4.0 changes the event name to camel case.**

Starting from Vant 4, all events are named in camelCase format recommended by Vue.

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

If you are using the Vant component in JSX, you will need to change the event name to camel case, the original dash format will no longer take effect, and the new monitoring method is more in line with JSX's own specifications:

```jsx
// Vant 3
<Field onClick-input={onClick} />

// Vant 4
<Field onClickInput={onClick} />
```

### Remove Less variables

**Vant 4.0 no longer supports theme customization via Less variables.**

Currently Vant already supports theme customization based on CSS variables, which is more flexible than Less customization. Therefore, Vant 4 will no longer provide Less-based theme customization. This means that Vant's npm package will no longer contain `.less` style source files, only the compiled `.css` style files will be provided.

If your project is using an old version of Less theme customization, please use [ConfigProvider global configuration](#/en-US/config-provider) to replace it.

### Vant Cli 5.0

**This update also releases Vant Cli 5.0.**

[Vant Cli](https://github.com/youzan/vant/tree/main/packages/vant-cli) is the underlying component library construction tool of Vant. The content of this update includes:

- Upgrade Vite to version 3.0, and upgrade related Vite plugins.
- The `stylelint` and `@vant/stylelint-config` dependencies are no longer installed by default, you can install them yourself if needed:

```bash
npm add stylelint@13 @vant/stylelint-config
```

- The `gh-pages` dependency is no longer installed by default, please update package.json as follows:

```diff
- "release:site": "pnpm build:site && gh-pages -d site-dist",
+ "release:site": "pnpm build:site && npx gh-pages -d site-dist",
```

### Version Information

**Currently both [Vant official website](https://vant-ui.github.io/vant/) and npm latest tag point to Vant 4.0.**

We have prepared a complete upgrade guide for Vant 4.0, please read [Upgrade from v3 to v4](https://vant-ui.github.io/vant/#/en-US/migrate-from-v3) to upgrade.

At the same time, Vant 3.x will also enter the maintenance status, and the maintenance status of each version of Vant is as follows:

| Name | Framework | Release Date | Maintenance Status |
| --- | --- | --- | --- |
| Vant 4 | Vue 3 | `2022.12` | Continuously adding new features |
| Vant 3 | Vue 3 | `2020.12` | No more new features, bugs will be fixed |
| Vant 2 | Vue 2 | `2019.06` | No more new features, critical bugs will be fixed |
| Vant 1 | Vue 2 | `2018.03` | End of maintenance, no PRs accepted |

### Finally

Thanks to all the friends who contributed to the development of Vant 4.0, thanks to all developers who use Vant, and hope that everyone will keep walking on the road of open source.

![](https://user-images.githubusercontent.com/7237365/205481230-fdd89482-86ad-40c8-b81f-4af0789f8488.png)
