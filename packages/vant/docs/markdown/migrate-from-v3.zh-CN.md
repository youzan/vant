# 从 v3 升级

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

DatetimePicker 组件被拆分为了三个组件：

- TimePicker: 用于时间选择。
- DatePicker: 用于日期选择。
- DatetimePicker: 用于同时选择日期和时间。

### Area 组件重构

Area 组件是基于 Picker 组件进行封装的，因此本次升级也对 Area 组件进行了内部逻辑的重构，并优化了部分 API 设计。

#### 主要变更

- 支持通过 `v-model` 绑定当前选中的值
- 移除 `reset` 方法，现在可以通过修改 `v-model` 来进行重置
- 移除 `is-oversea-code` 属性
- 调整所有事件的参数，与 Picker 组件保持一致
- 重命名 `value` 属性我 `modelValue`
- 重命名 `item-height` 属性为 `option-height`
- 重命名 `visible-item-count` 属性为 `visible-option-num`

详细用法请参见 [Area 组件文档](#/zh-CN/area)。

## API 调整

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

- `change-area` 事件的参数调整为 `PickerOption[]` 类型
- 移除未在文档中标注的 `getArea` 实例方法

## 样式变量调整

### 移除 Less 变量

目前 Vant 已经支持了基于 CSS 变量的主题定制能力，因此后续将不再提供基于 Less 的主题定制方式。

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
