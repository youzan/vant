# 从 v3 升级到 v4

### 介绍

本文档提供了从 Vant 3 到 Vant 4 的升级指南。

### 安装 Vant 4

首先你需要安装 Vant 4 以及 `@vant/compat`。

`@vant/compat` 是一个兼容包，可以帮助你从 Vant 3 过渡到 Vant 4。

```bash
# 通过 npm 安装
npm add vant@^4 @vant/compat@^1

# 通过 yarn 安装
yarn add vant@^4 @vant/compat@^1

# 通过 pnpm 安装
pnpm add vant@^4 @vant/compat@^1

# 通过 Bun 安装
bun add vant@^4 @vant/compat@^1
```

你也可以直接修改 `package.json` 的 `dependencies` 字段中的版本号，修改完成后需要重新安装依赖。

```diff
{
  "dependencies": {
-    "vant": "^3.0.0",
+    "vant": "^4.0.0",
+    "@vant/compat": "^1.0.0",
  }
}
```

## 调整按需引入方式

### 移除 babel-plugin-import

从 Vant 4.0 开始，将不再支持 `babel-plugin-import`，请移除项目中依赖的 `babel-plugin-import` 插件。

只需要删除 `babel.config.js` 中的以下代码即可：

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

#### 收益

移除 `babel-plugin-import` 主要带来以下收益：

- 不再强依赖 Babel 编译，项目可以使用 SWC、esbuild 等现代编译工具，进而提升编译效率。
- 不再受到 `babel-plugin-import` 的 import 限制，可以从 Vant 中导入除组件以外的内容，比如 Vant 4 中新增的 `showToast` 方法，或是 `buttonProps` 对象：

```ts
import { showToast, buttonProps } from 'vant';
```

#### 样式引入方案

移除 `babel-plugin-import` 对项目的 JS 体积不会有影响，因为 Vant 默认支持通过 Tree Shaking 来移除不需要的 JS 代码。

而 CSS 代码的引入方式可以从以下两种方式中进行选择：

- 在项目中全量引入 Vant 的样式文件：

```js
import 'vant/lib/index.css';
```

- 通过 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 插件实现按需引入样式，详细用法参见 [快速上手](#/zh-CN/quickstart)。

## 组件重构

### 介绍

在 Vant 4 中，一共有三个组件被完全重构，它们是：

- `Area`
- `Picker`
- `DatetimePicker`

这三个组件之所以被重构，是因为在之前的版本中，`Picker` 组件的 API 设计存在一些不合理的设计，导致大家在使用时经常遇到问题，比如：

- Picker columns 数据格式定义不合理，容易产生误解
- Picker 数据流不清晰，暴露了过多的实例方法来对数据进行操作
- DatetimePicker 逻辑过于复杂，经常在边界场景下出现 bug

为了解决上述问题，我们在 v4 版本中对 `Picker` 组件进行了重构，同时也重构了基于 `Picker` 派生出的 `Area` 和 `DatetimePicker` 组件。如果你的项目中使用了这三个组件，请仔细阅读文档并进行升级。

### Picker 组件重构

#### 主要变更

- 支持通过 `v-model` 绑定当前选中的值，移除 `default-index` 属性
- 重新定义了 `columns` 属性的结构
- 移除了操作内部数据的实例方法，仅保留 `confirm` 方法
- 新增 `getSelectedOptions` 实例方法
- 调整了 `confirm`、`cancel`、`change` 事件的参数
- 重命名 `item-height` 属性为 `option-height`
- 重命名 `visible-item-count` 属性为 `visible-option-num`

> 详细用法请参见 [Picker 组件文档](#/zh-CN/picker)。

### DatetimePicker 组件重构

DatetimePicker 组件被拆分为三个子组件：

- [TimePicker](#/zh-CN/time-picker): 用于时间选择，包括时、分、秒。
- [DatePicker](#/zh-CN/date-picker): 用于日期选择，包括年、月、日。
- [PickerGroup](#/zh-CN/picker-group): 用于结合多个 Picker 选择器组件，在一次交互中完成多个值的选择。

同时，TimePicker 和 DatePicker 组件也基于新版 Picker 组件进行重构，并优化了部分 API 设计。

#### 主要变更

以下是 TimePicker 和 DatePicker 的主要 API 变化，更多细节请参考 [TimePicker](#/zh-CN/time-picker) 和 [DatePicker](#/zh-CN/date-picker) 文档。

- `v-model` 绑定的值调整为数组格式
- 新增 `columns-type` 属性，用于控制选项类型和顺序
- 移除 `type` 属性和 `columns-order` 属性
- 移除 `getPicker` 方法
- 调整 `confirm`、`cancel`、`change` 事件的参数，与 Picker 组件保持一致

> Vant 4 不再提供旧版的 DatetimePicker 组件，使用 PickerGroup 组件可以实现更灵活、更丰富的交互效果，具体用法请参考 [PickerGroup](#/zh-CN/picker-group) 组件文档。

### Area 组件重构

Area 组件是基于 Picker 组件进行封装的，因此本次升级也对 Area 组件进行了内部逻辑的重构，并优化了部分 API。

#### 主要变更

- 支持通过 `v-model` 绑定当前选中的值
- 移除 `reset` 方法，现在可以通过修改 `v-model` 来进行重置
- 移除 `is-oversea-code` 属性
- 调整 `confirm`、`cancel`、`change` 事件的参数，与 Picker 组件保持一致
- 重命名 `value` 属性为 `modelValue`
- 重命名 `item-height` 属性为 `option-height`
- 重命名 `visible-item-count` 属性为 `visible-option-num`

> 详细用法请参见 [Area 组件文档](#/zh-CN/area)。

## API 调整

### Dialog 调用方式调整

在 Vant 3 中，`Dialog` 是一个函数，调用函数可以快速唤起全局的弹窗组件，而 `Dialog.Component` 才是 `Dialog` 组件对象，这与大部分组件的用法存在差异，容易导致使用错误。

为了更符合直觉，我们在 Vant 4 中调整了 `Dialog` 的调用方式，将 `Dialog()` 函数重命名为 `showDialog()`，并让 `Dialog` 直接指向组件对象。

```js
// Vant 3
Dialog(); // 函数调用
Dialog.Component; // 组件对象

// Vant 4
showDialog(); // 函数调用
Dialog; // 组件对象
```

由于 `Dialog` 变为了组件对象，`Dialog` 上挂载的其他方法也进行了重命名，新旧 API 的映射关系如下：

```js
Dialog(); // -> showDialog()
Dialog.alert(); // -> showDialog()
Dialog.confirm(); // -> showConfirmDialog()
Dialog.close(); // -> closeDialog();
Dialog.setDefaultOptions(); // -> setDialogDefaultOptions()
Dialog.resetDefaultOptions(); // -> resetDialogDefaultOptions()
```

#### 兼容方案

为了便于旧版本代码迁移至 v4，我们提供了兼容方案，你可以使用 `@vant/compat` 中导出的 `Dialog` 对象来兼容原有代码。

从 `@vant/compat` 中引用 `Dialog` 方法：

```js
import { Dialog } from '@vant/compat';

Dialog();
Dialog.close();
```

`@vant/compat` 中导出的 `Dialog` 与 Vant 3 中的 `Dialog` 拥有完全一致的 API 和行为，因此你只需要修改 `Dialog` 的引用路径，其他代码可以保持不变。

在项目完成升级到 Vant v4 后，建议在迭代中逐步替换为新的 `showDialog` 等方法，并移除 `@vant/compat` 包。

### Toast 调用方式调整

Vant 4 中，`Toast` 组件的调用方式也进行了调整，与 `Dialog` 组件的改动一致：

```js
// Vant 3
Toast(); // 函数调用

// Vant 4
showToast(); // 函数调用
Toast; // 组件对象
```

`Toast` 上挂载的其他方法也进行了重命名，新旧 API 的映射关系如下：

```js
Toast(); // -> showToast()
Toast.fail(); // -> showFailToast()
Toast.success(); // -> showSuccessToast()
Toast.loading(); // -> showLoadingToast()
Toast.clear(); // -> closeToast()
Toast.setDefaultOptions(); // -> setToastDefaultOptions()
Toast.resetDefaultOptions(); // -> resetToastDefaultOptions()
```

同时，Vant 4 将不再在 `this` 对象上全局注册 `$toast` 方法，这意味着 `this` 对象上将无法访问到 `$toast`。

#### 兼容方案

为了便于代码迁移，我们提供了兼容方案，你可以使用 `@vant/compat` 中导出的 `Toast` 对象来兼容原有代码。

```js
import { Toast } from '@vant/compat';

Toast();
Toast.clear();
```

`@vant/compat` 中导出的 `Toast` 与 Vant 3 中的 `Toast` 拥有完全一致的 API 和行为，因此你只需要修改 `Toast` 的引用路径，其他代码可以保持不变。

### Notify 调用方式调整

Vant 4 中，`Notify` 组件的调用方式也进行了调整，与 `Dialog` 组件的改动一致：

```js
// Vant 3
Notify(); // 函数调用
Notify.Component; // 组件对象

// Vant 4
showNotify(); // 函数调用
Notify; // 组件对象
```

`Notify` 上挂载的其他方法也进行了重命名，新旧 API 的映射关系如下：

```js
Notify(); // -> showNotify()
Notify.clear(); // -> closeNotify()
Notify.setDefaultOptions(); // -> setNotifyDefaultOptions()
Notify.resetDefaultOptions(); // -> resetNotifyDefaultOptions()
```

同时，Vant 4 将不再在 `this` 对象上全局注册 `$notify` 方法，这意味着 `this` 对象上将无法访问到 `$notify`。

#### 兼容方案

为了便于代码迁移，我们提供了兼容方案，你可以使用 `@vant/compat` 中导出的 `Notify` 对象来兼容原有代码。

```js
import { Notify } from '@vant/compat';

Notify();
Notify.clear();
```

`@vant/compat` 中导出的 `Notify` 与 Vant 3 中的 `Notify` 拥有完全一致的 API 和行为，因此你只需要修改 `Notify` 的引用路径，其他代码可以保持不变。

### ImagePreview 调用方式调整

Vant 4 中，`ImagePreview` 组件的调用方式也进行了调整，与 `Dialog` 组件的改动一致：

```js
// Vant 3
ImagePreview(); // 函数调用
ImagePreview.Component; // 组件对象

// Vant 4
showImagePreview(); // 函数调用
ImagePreview; // 组件对象
```

#### 兼容方案

为了便于代码迁移，我们提供了兼容方案，你可以使用 `@vant/compat` 中导出的 `ImagePreview` 对象来兼容原有代码。

```js
import { ImagePreview } from '@vant/compat';

ImagePreview();
```

`@vant/compat` 中导出的 `ImagePreview` 与 Vant 3 中的 `ImagePreview` 拥有完全一致的 API 和行为，因此你只需要修改 `ImagePreview` 的引用路径，其他代码可以保持不变。

### 事件命名调整

从 Vant 4 开始，所有的事件均采用 Vue 官方推荐的**驼峰格式**进行命名。

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

### 其他 API 调整

在 Vant 4.0 版本中，以下 API 进行了不兼容更新：

#### AddressEdit

- 移除 `show-postal` 属性
- 移除 `postal-validator` 属性
- `change-area` 事件的参数调整为 `PickerOption[]` 类型
- 移除未在文档中标注的 `getArea` 实例方法

#### Popup

Popup 的 CSS 样式进行了一定调整，如果你在 Popup 组件上添加了一些自定义的 CSS 样式，请确认本次升级是否对项目中的 UI 产生影响。

- 默认添加了 `box-sizing: border-box` 样式
- 调整了 `position="center"` 时的水平居中方式，以解决弹窗宽度无法正确自适应的问题：

```less
// Vant 3
.van-popup--center {
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

// Vant 4
.van-popup--center {
  left: 0;
  right: 0;
  width: fit-content;
  max-width: calc(100vw - var(--van-padding-md) * 2);
  margin: 0 auto;
  transform: translateY(-50%);
}
```

#### Tabs

- 移除了 `click` 和 `disabled` 事件，请使用 `click-tab` 事件代替

## 样式调整

### 主色调统一

在之前的版本中，Vant 组件有两种主色调，部分组件采用蓝色（#1989fa）作为主色调，另一部分则采用红色（#ee0a24）。

为了保持色彩规范的一致性，我们在 Vant 4 中对主色调进行统一，所有组件均采用蓝色作为主色调。

以下组件的主色调由红色调整为蓝色：

- AddressEdit
- AddressList
- Card
- Calendar
- Cascader
- ContactList
- ContactEdit
- CouponList
- Dialog
- DropdownMenu
- IndexBar
- Sidebar
- Steps
- Tabs
- TreeSelect

### 移除 Less 变量

目前 Vant 已经支持了基于 CSS 变量的主题定制能力，相较于 Less 定制更加灵活。因此，Vant 4 将不再提供基于 Less 的主题定制方式。

这意味着 Vant 的 npm 包中将不再会包含 `.less` 样式源文件，只会提供编译后的 `.css` 样式文件。

如果你的项目正在使用旧版的 Less 主题定制，请使用 [ConfigProvider 全局配置](#/zh-CN/config-provider) 组件进行替换。

### 简化 CSS 变量名

考虑到 **代码体积** 和 **使用便捷性**，我们对部分 CSS 变量的名称进行了简化，在变量名中使用了更简短的单词，以减小代码体积。

本次升级涉及以下变量名变更：

```less
animation-duration               ->  duration
animation-timing-function-enter  ->  ease-out
animation-timing-function-leave  ->  ease-in
background-color                 ->  background
background-color-light           ->  background-2
border-radius                    ->  radius
border-width-base                ->  border-width
box-shadow                       ->  shadow
font-family                      ->  font
font-weight-bold                 ->  font-bold
price-integer-font               ->  price-font
text-link                        ->  link
transition-duration              ->  duration
```

由于涉及的 CSS 变量较多，建议在代码仓库中进行全局匹配和替换。

对于 `ConfigProvider` 组件，我们新增了 `ConfigProviderThemeVars` 类型定义，提供完整的类型提示。在 TypeScript 代码中，你可以通过类型提示来确保主题变量被正确替换。

```ts
import type { ConfigProviderThemeVars } from 'vant';

const themeVars: ConfigProviderThemeVars = {
  sliderBarHeight: '4px',
};
```
