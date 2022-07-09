# 从 v3 升级到 v4

### 介绍

本文档提供了从 Vant 3 到 Vant 4 的升级指南。

## 组件重构

### Picker 组件重构

在之前的版本中，Picker 组件的 API 设计存在一些不合理的设计，比如：

- columns 数据格式定义不合理，容易产生误解
- 数据流不清晰，暴露了过多的实例方法来对数据进行操作

为了解决上述问题，我们在 v4 版本中对 Picker 组件进行了重构。

#### 主要变更

- 支持通过 `v-model` 绑定当前选中的值，移除 `default-index` 属性
- 重新定义了 `columns` 属性的结构
- 移除了操作内部数据的实例方法，仅保留 `confirm` 方法
- 新增 `getSelectedOptions` 实例方法
- 调整了 `confirm`、`cancel`、`change` 事件的参数
- 重命名 `item-height` 属性为 `option-height`
- 重命名 `visible-item-count` 属性为 `visible-option-num`

详细用法请参见 [Picker 组件文档](#/zh-CN/picker)。

### DatetimePicker 组件重构

DatetimePicker 组件被拆分为：

- TimePicker: 用于时间选择。
- DatePicker: 用于日期选择。

同时，这两个组件也基于新版 Picker 组件进行重构，并优化了部分 API 设计。

#### 主要变更

- `v-model` 绑定的值调整为数组格式
- 新增 `columns-type` 属性，用于控制选项类型和顺序
- 移除 `type` 属性和 `columns-order` 属性
- 移除 `getPicker` 方法
- 调整 `confirm`、`cancel`、`change` 事件的参数，与 Picker 组件保持一致

### Area 组件重构

Area 组件是基于 Picker 组件进行封装的，因此本次升级也对 Area 组件进行了内部逻辑的重构，并优化了部分 API 设计。

#### 主要变更

- 支持通过 `v-model` 绑定当前选中的值
- 移除 `reset` 方法，现在可以通过修改 `v-model` 来进行重置
- 移除 `is-oversea-code` 属性
- 调整 `confirm`、`cancel`、`change` 事件的参数，与 Picker 组件保持一致
- 重命名 `value` 属性为 `modelValue`
- 重命名 `item-height` 属性为 `option-height`
- 重命名 `visible-item-count` 属性为 `visible-option-num`

详细用法请参见 [Area 组件文档](#/zh-CN/area)。

## API 调整

### Dialog 调用方式调整

在 Vant 3 中，`Dialog` 是一个函数，调用函数可以快速唤起全局的弹窗组件，而 `Dialog.Component` 才是 `Dialog` 组件对象，这与大部分组件的用法存在差异，容易导致使用错误。

为了更符合直觉，我们在 Vant 4 中调整了 `Dialog` 的调用方式，将 `Dialog()` 函数重命名为 `showDialog()`。

```js
// Vant 3
Dialog(); // 函数调用
Dialog.Component; // 组件对象

// Vant 4
showDialog(); // 函数调用
Dialog; // 组件对象
```

`Dialog` 上挂载的其他方法也进行了重命名，新旧 API 的映射关系如下：

```js
Dialog(); // -> showDialog()
Dialog.alert(); // -> showDialog()
Dialog.confirm(); // -> showConfirmDialog()
Dialog.close(); // -> closeDialog();
Dialog.setDefaultOptions(); // -> setDialogDefaultOptions()
Dialog.resetDefaultOptions(); // -> resetDialogDefaultOptions()
```

同时，Vant 4 将不再在 `this` 对象上全局注册 `$dialog` 方法，这意味着 `this` 对象上将无法访问到 `$dialog`。

```js
export default {
  mounted() {
    // 无效代码
    this.$dialog.alert({
      message: '弹窗内容',
    });
  },
};
```

大多数场景下，推荐通过 `import` 引入对应的函数进行使用。

如果需要全局方法，可以手动在 `app` 对象上注册：

```js
import { showDialog } from 'vant';

// 注册 $dialog 方法
app.config.globalProperties.$dialog = showDialog;

// 添加 TS 类型定义
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dialog: typeof showDialog;
  }
}
```

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

```js
export default {
  mounted() {
    // 无效代码
    this.$notify({
      message: '内容',
    });
  },
};
```

如果需要全局方法，可以手动在 `app` 对象上注册：

```js
import { showNotify } from 'vant';

// 注册 $notify 方法
app.config.globalProperties.$notify = showNotify;

// 添加 TS 类型定义
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $notify: typeof showNotify;
  }
}
```

### ImagePreview 调用方式调整

Vant 4 中，`ImagePreview` 组件的调用方式也进行了调整，与 `ImagePreview` 组件的改动一致：

```js
// Vant 3
ImagePreview(); // 函数调用
ImagePreview.Component; // 组件对象

// Vant 4
showImagePreview(); // 函数调用
ImagePreview; // 组件对象
```

### 事件命名调整

从 Vant 4 开始，所有的事件均采用 Vue 官方推荐的**驼峰格式**进行命名。

```js
// Vant 3
emit('click-input');

// Vant 4
emit('clickInput');
```

这项改动**不影响原有的模板代码**，Vue 会自动在模板中对事件名进行格式转换：

```html
<!-- 以下代码可以照常运行，无须做任何更改 -->
<van-field @click-input="onClick" />
```

如果你在 JSX 中使用 Vant 组件，需要将监听的事件名调整为驼峰格式，新的监听方式更加符合 JSX 本身的规范：

```jsx
// Vant 3
<Field onClick-input={onClick} />

// Vant 4
<Field onClickInput={onClick} />
```

### 其他 API 调整

在 Vant 4.0 版本中，以下 API 进行了不兼容更新：

#### Tabs

- 移除了 `click` 和 `disabled` 事件，请使用 `click-tab` 事件代替

#### AddressEdit

- 移除 `show-postal` 属性
- 移除 `postal-validator` 属性
- `change-area` 事件的参数调整为 `PickerOption[]` 类型
- 移除未在文档中标注的 `getArea` 实例方法

## 样式变量调整

### 移除 Less 变量

目前 Vant 已经支持了基于 CSS 变量的主题定制能力，因此后续将不再提供基于 Less 的主题定制方式。

这意味着 Vant 的 npm 包中将不再会包含 `.less` 样式源文件，只会提供编译后的 `.css` 样式文件。

如果你的项目正在使用旧版的 Less 主题定制，请使用 [ConfigProvider 全局配置](#/zh-CN/config-provider) 组件进行替换。

### 简化 CSS 变量名

考虑到 **代码体积** 和 **使用便捷性**，我们对部分 CSS 变量的名称进行了简化，在变量名中使用更简短的单词，涉及以下变更：

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
