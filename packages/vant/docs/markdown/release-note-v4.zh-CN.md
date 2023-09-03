# 4.0 版本介绍

### 引言

历经一年的迭代，Vant 4.0 版本已正式发布，这是 Vant 自 2017 年开源以来发布的第四个重要版本。

在本次迭代中，Vant 支持了深色模式，增加五个新组件，改善工具函数 API 并重构 Picker 等组件，同时继续在轻量化和易用性方面做出改进。

### 支持深色模式

**Vant 4.0 支持切换所有组件为深色模式。**

只需要把 [ConfigProvider 组件](https://vant-ui.github.io/vant/#/zh-CN/config-provider)的 `theme` 属性设置为 `dark`，即可切换为深色模式，将页面上的所有 Vant 组件变成深色风格。

```html
<van-config-provider theme="dark">
  <!-- child components -->
</van-config-provider>
```

![](https://user-images.githubusercontent.com/7237365/205472724-6c9ee0df-df10-4f9b-84b6-081576bdcea9.png)

同时，Vant 4.0 文档也已支持切换为深色模式：

![](https://user-images.githubusercontent.com/7237365/205472729-fefc9053-1866-4812-8b97-ee0ba5d47230.png)

### 几个新组件

**Vant 4.0 包含以下新组件：**

- [BackTop 回到顶部](https://vant-ui.github.io/vant/#/zh-CN/back-top)：返回页面顶部的操作按钮。
- [TimePicker 时间选择器](https://vant-ui.github.io/vant/#/zh-CN/time-picker)：用于时间选择，包括时、分、秒。
- [DatePicker 日期选择器](https://vant-ui.github.io/vant/#/zh-CN/date-picker)：用于日期选择，包括年、月、日。
- [PickerGroup 选择器组](https://vant-ui.github.io/vant/#/zh-CN/picker-group)：用于结合多个 Picker 选择器组件，在一次交互中完成多个值的选择。
- [Skeleton 骨架屏子组件](https://vant-ui.github.io/vant/#/zh-CN/skeleton)：通过 SkeletonTitle、SkeletonImage、SkeletonAvatar 等子组件来自定义骨架屏。

其中，TimePicker 和 DatePicker 由旧版的 DatetimePicker 组件拆分而来，DatetimePicker 组件不再提供。你可以通过 PickerGroup 来实现同时选择日期和时间的交互效果。

![](https://user-images.githubusercontent.com/7237365/205474243-14e0a87c-dcfa-4229-9a16-f6ebf910b621.png)

### 保持轻量

**Vant 4.0 的安装体积降低 30%，包体积保持轻量。**

随着 npm 生态的发展，node_modules 正在吞噬我们的磁盘空间。为了缓解 node_modules 黑洞、加快安装速度，我们对 Vant 的 npm 依赖和构建产物进行了优化。

相较于 Vant 3.6.2 版本，Vant 4.0.0 版本的安装体积由 7MB 下降至 5MB。作为对比，社区中主流组件库的安装体积普遍在 15MB ~ 80MB。你可以通过 [packagephobia](https://packagephobia.com/result?p=vant) 来查询 npm 包的安装体积。

![](https://user-images.githubusercontent.com/7237365/205470714-e1828299-4df2-40f4-b7cc-f65971fe4567.png)

在包体积上，本次更新依然加量不加价，Minified + Gzipped 后的体积保持在 70KB 以下：

![](https://user-images.githubusercontent.com/7237365/205474583-f2d8226f-e089-42d7-8326-3c874dcf1784.png)

### 统一主色调

**Vant 4.0 统一了所有组件的主色调。**

在之前的版本中，Vant 组件有两种主色调，部分组件采用蓝色 `#1989fa` 作为主色调，另一部分则采用红色 `#ee0a24`。

为了保持色彩规范的一致性，我们在 Vant 4 中对主色调进行统一，所有组件均采用蓝色作为主色调。

![](https://user-images.githubusercontent.com/7237365/205472726-a0552833-f99d-447a-acce-051ec7ebdbe1.png)

统一主色调后，主题定制会变得更加容易。比如，你可以覆盖 `--van-primary-color` 这个 CSS 变量，将所有组件的主色调设置为绿色：

```css
:root {
  --van-primary-color: #07c160;
}
```

### 按需引入方式调整

**Vant 4.0 不再使用 babel-plugin-import 实现按需引入。**

在早期，组件库大多使用 `babel-plugin-import` 实现按需引入，这意味着组件库会强依赖 Babel 编译。从 Vant 4.0 开始，将不再支持 `babel-plugin-import`，主要带来以下收益：

- 不再强依赖 Babel 编译，项目可以使用 SWC、esbuild 等现代编译工具，进而提升编译效率。

![](https://user-images.githubusercontent.com/7237365/205478241-dba3c4ed-152c-4892-9e74-1a0d978be314.png)

- 不再受到 `babel-plugin-import` 的 import 限制，可以从 Vant 中导入除组件以外的内容，比如 Vant 4 中新增的 `showToast` 方法，或是 `buttonProps` 对象：

```ts
import { showToast, buttonProps } from 'vant';
```

在包体积方面，移除 `babel-plugin-import` 对项目的 JS 体积不会有影响，因为 Vant 默认支持通过 Tree Shaking 来移除不需要的 JS 代码，而 CSS 代码可以通过 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 插件实现按需引入，详细用法请参考 [「快速上手」](https://vant-ui.github.io/vant/#/zh-CN/quickstart)。

### 样式变量类型提示

**Vant 4.0 提供了样式变量的类型提示。**

Vant 提供了 700 多个样式变量，你可以通过 CSS 代码或 `ConfigProvider` 组件修改这些样式变量。在 Vant 4.0 中，我们新增了 `ConfigProviderThemeVars` 类型，以提供样式变量的类型提示。

因此在编写 TypeScript 代码时，你可以通过类型提示来补全主题变量名称：

![](https://user-images.githubusercontent.com/7237365/205478960-c284e272-a394-4098-ad0f-eda72e74f9f7.png)

### Picker 组件重构

**Vant 4.0 重构了 Picker 组件，以及基于 Picker 的 Area 和 DatetimePicker 组件。**

在之前的版本中，`Picker` 组件的 API 设计不够合理，导致大家在使用时经常遇到问题，比如：

- Picker 的 columns 数据格式不合理，容易产生误解。
- Picker 的数据流不清晰，暴露了过多的实例方法来对数据进行操作。
- DatetimePicker 的逻辑过于复杂，经常在边界场景下出现 bug。

为了解决上述问题，我们在 Vant 4.0 中对 `Picker` 组件进行了重构，同时也重构了基于 `Picker` 派生出的 `Area` 和 `DatetimePicker` 组件。

如果你的项目中使用了这三个组件，请阅读 [「升级指南」](https://vant-ui.github.io/vant/#/zh-CN/migrate-from-v3) 进行升级。

### 组件工具函数调整

**Vant 4.0 调整了组件工具函数的用法，使其更符合直觉。**

Vant 3 提供了一些组件工具函数，比如调用 `Dialog()` 函数，可以快速唤起全局的弹窗组件，而 `Dialog.Component` 才是 `Dialog` 对应的组件对象。

```ts
// 函数调用
Dialog({ message: 'Hello World!' });

// 组件注册
app.use('van-dialog', Dialog.Component);
```

以上 API 设计导致 Dialog 等支持工具函数的组件与常规组件存在用法差异，容易被误用；同时也导致 `unplugin-vue-components` 无法自动引入 Dialog 等组件。

为了更符合直觉，我们在 Vant 4 中调整了组件工具函数的调用方式，受影响的函数包括 `Dialog()`、`Toast()`、`Notify()` 和 `ImagePreview()`。以 Dialog 为例，我们将 `Dialog()` 函数重命名为 `showDialog()`，并让 `Dialog` 直接指向组件对象。

```ts
// 函数调用
showDialog({ message: 'Hello World!' });

// 组件注册
app.use('van-dialog', Dialog);
```

为了便于存量代码迁移至 Vant 4.0，我们提供了兼容方案，你可以使用 `@vant/compat` 中导出的 `Dialog()` 函数来兼容原有代码。

```js
import { Dialog } from '@vant/compat';

Dialog({ message: 'Hello World!' });
```

`@vant/compat` 中导出的 `Dialog()` 与 Vant 3 中的 `Dialog()` 拥有完全一致的 API 和行为，因此在升级时，你只需要修改它的引用路径，其余代码可以保持不变。在项目完成升级到 Vant 4.0 后，建议在迭代中逐步替换为新的 `showDialog()` 等方法，并移除 `@vant/compat` 包。

### 事件命名调整

**Vant 4.0 将事件名改为驼峰格式。**

从 Vant 4 开始，所有的事件均采用 Vue 官方推荐的驼峰格式进行命名。

```js
// Vant 3
emit('click-input');

// Vant 4
emit('clickInput');
```

这项改动**不影响原有的模板代码**，Vue 会自动在模板中对事件名进行格式转换，因此你无须做任何更改。

```html
<!-- 以下代码可以照常运行，无须做任何更改 -->
<van-field @click-input="onClick" />
```

如果你在 JSX 中使用 Vant 组件，需要将监听的事件名调整为驼峰格式，原有的中划线格式将不再生效，新的监听方式更加符合 JSX 本身的规范：

```jsx
// Vant 3
<Field onClick-input={onClick} />

// Vant 4
<Field onClickInput={onClick} />
```

### 移除 Less 变量

**Vant 4.0 不再支持通过 Less 变量定制主题。**

目前 Vant 已经支持基于 CSS 变量的主题定制，相较于 Less 定制更加灵活。因此，Vant 4 将不再提供基于 Less 的主题定制。这意味着 Vant 的 npm 包中将不再会包含 `.less` 样式源文件，仅会提供编译后的 `.css` 样式文件。

如果你的项目正在使用旧版的 Less 主题定制，请使用 [ConfigProvider 全局配置](#/zh-CN/config-provider) 进行替换。

### Vant Cli 5.0

**本次更新同步发布了 Vant Cli 5.0 版本。**

[Vant Cli](https://github.com/youzan/vant/tree/main/packages/vant-cli) 是 Vant 底层的组件库构建工具，本次更新内容有：

- 升级 Vite 到 3.0 版本，并对相关的 Vite 插件进行升级。
- 不再默认安装 `stylelint` 和 `@vant/stylelint-config` 依赖，需要的话可以自行安装：

```bash
npm add stylelint@13 @vant/stylelint-config
```

- 不再默认安装 `gh-pages` 依赖，请按照如下方式更新 package.json：

```diff
- "release:site": "pnpm build:site && gh-pages -d site-dist",
+ "release:site": "pnpm build:site && npx gh-pages -d site-dist",
```

### 版本信息

**目前 [Vant 官网](https://vant-ui.github.io/vant/) 和 npm latest 标签均已指向 Vant 4.0。**

我们为 Vant 4.0 准备了完整的升级指南，请阅读 [从 v3 升级到 v4](https://vant-ui.github.io/vant/#/zh-CN/migrate-from-v3) 进行升级。

同时，Vant 3.x 也会进入维护状态，后续 Vant 各个版本的维护状态如下：

| 名称   | 框架  | 发布时间  | 维护状态                                |
| ------ | ----- | --------- | --------------------------------------- |
| Vant 4 | Vue 3 | `2022.12` | 持续迭代新功能                          |
| Vant 3 | Vue 3 | `2020.12` | 停止迭代新功能，bug 会被处理和修复      |
| Vant 2 | Vue 2 | `2019.06` | 停止迭代新功能，重要 bug 会被处理和修复 |
| Vant 1 | Vue 2 | `2018.03` | 停止维护，不再接受 PR                   |

### 最后

感谢在 Vant 4.0 迭代期间做出贡献的朋友们，感谢所有使用 Vant 的开发者，愿大家在开源的道路上步履不停。

![](https://user-images.githubusercontent.com/7237365/205481230-fdd89482-86ad-40c8-b81f-4af0789f8488.png)
