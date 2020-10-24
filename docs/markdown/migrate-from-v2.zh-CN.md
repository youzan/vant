# 从 v2 升级

### 介绍

本文档提供了从 Vant 2 到 Vant 3 的升级指南。

### 升级步骤

#### 1. 升级 Vue 3

Vant 3 是基于 Vue 3 开发的，在使用 Vant 3 前，请将项目中的 Vue 升级到 3.0 以上版本。

#### 2. 处理不兼容更新

Vant 2 到 Vant 3 存在一些不兼容更新，请仔细阅读下方的不兼容更新内容，并依次处理。

## 不兼容更新

### 组件命名调整

GoodsAction 商品导航组件重命名为 **ActionBar 行动栏**。

```html
<!-- Vant 2 -->
<van-goods-action>
  <van-goods-action-icon text="图标" />
  <van-goods-action-button text="按钮" />
</van-goods-action>

<!-- Vant 3 -->
<van-action-bar>
  <van-action-bar-icon text="图标" />
  <van-action-bar-button text="按钮" />
</van-action-bar>
```

### 废弃组件

移除 SwitchCell 组件，可以直接使用 Cell 和 Switch 组件代替。

```html
<!-- Vant 2 -->
<van-switch-cell title="标题" v-model="checked" />

<!-- Vant 3 -->
<van-cell center title="标题">
  <template #right-icon>
    <van-switch v-model="checked" size="24" />
  </template>
</van-cell>
```

### 弹窗型组件 v-model 变更

为了适配 Vue 3 的 v-model API 用法变更，所有提供 v-model 属性的组件在用法上有一定调整。以下弹窗类组件的 `v-model` 被重命名为 `v-model:show`：

- ActionSheet
- Calendar
- Dialog
- ImagePreview
- Notify
- Popup
- ShareSheet

```html
<!-- Vant 2 -->
<van-popup v-model="show" />

<!-- Vant 3 -->
<van-popup v-model:show="show" />
```

### 表单型组件 v-model 内部值变更

以下表单型组件 v-model 对应的 prop 重命名为 `modelValue`，event 重命名为 `update:modelValue`：

- Checkbox
- CheckboxGroup
- DatetimePicker
- DropdownItem
- Field
- Radio
- RadioGroup
- Search
- Stepper
- Switch
- Sidebar
- Uploader

```html
<!-- Vant 2 -->
<van-field :value="value" @input="onInput" />

<!-- Vant 3 -->
<van-field :model-value="value" @update:model-value="onInput" />
```

### 其他 v-model 调整

- Circle: `v-model` 重命名为 `v-model:currentRate`
- CouponList: `v-model` 重命名为 `v-model:code`
- List: `v-model` 重命名为 `v-model:loading`，`error.sync` 重命名为 `v-model:error`
- Tabs: `v-model` 重命名为 `v-model:active`
- TreeSelect: `active-id.sync` 重命名为 `v-model:active-id`
- TreeSelect: `main-active-index.sync` 重命名为 `v-model:main-active-index`

### 徽标属性命名调整

在之前的版本中，我们通过 info 属性来展示图标右上角的徽标信息，为了更符合社区的命名习惯，我们将这个属性重命名为 badge，影响以下组件：

- Tab
- Icon
- GridItem
- TreeSelect
- TabbarItem
- SidebarItem
- GoodsActionIcon

同时内部使用的 Info 组件也会重命名为 Badge。

```html
<!-- Vant 2 -->
<van-icon info="5" />

<!-- Vant 3 -->
<van-icon badge="5" />
```

### 重命名 get-container 属性

Vue 3.0 中增加了 `Teleport` 组件，提供将组件渲染到任意 DOM 位置的能力，Vant 2.x 也通过 `get-container` 属性提供了类似的能力。为了与官方的 API 保持一致，Vant 中的 `get-container` 属性将重命名为 `teleport`。

```html
<!-- Vant 2 -->
<template>
  <van-popup get-container="body" />
  <van-popup :get-container="getContainer" />
</template>
<script>
  export default {
    methods: {
      getContainer() {
        return document.querySelector('#container');
      },
    },
  };
</script>

<!-- Vant 3 -->
<template>
  <van-popup teleport="body" />
  <van-popup :teleport="container" />
</template>
<script>
  export default {
    beforeCreate() {
      this.container = document.querySelector('#container');
    },
  };
</script>
```

### API 调整

#### Area

- `change` 事件参数不再传入组件实例

#### Button

- 蓝色按钮对应的类型由 `info` 调整为 `primary`
- 绿色按钮对应的类型由 `primary` 调整为 `success`
- `native-type` 的默认值由 `submit` 调整为 `button`

#### Checkbox

- 在 Cell 内部使用时，现在需要手动添加 `@click.stop` 来阻止事件冒泡

#### Dialog

- 默认关闭 `allow-html` 属性
- `before-close` 属性用法调整，不再传入 done 函数，而是通过返回 Promise 来控制

#### DatetimePicker

- `change` 事件参数不再传入组件实例

#### ImagePreview

- 移除 `async-close` 属性，可以使用新增的 `before-close` 属性代替

#### Picker

- `change` 事件参数不再传入组件实例
- 默认关闭 `allow-html` 属性
- 默认开启 `show-toolbar` 属性
- 级联选择下，`confirm`、`change` 事件返回的回调参数将包含为完整的选项对象。

#### SwipeCell

- `open` 事件的 `detail` 参数重命名为 `name`
- `on-close` 属性重命名为 `before-close`，并调整参数结构
- `before-close` 属性不再传入组件实例

#### Toast

- `mask` 属性重命名为 `overlay`

#### TreeSelect

- `navclick` 事件重命名为 `click-nav`
- `itemclick` 事件重命名为 `click-item`

### 注册全局方法

Vant 2.x 中默认提供了 `$toast`、`$dialog` 等全局方法，但 Vue 3.0 不再支持直接在 Vue 的原型链上挂载方法，因此从 Vant 3.0 开始，使用全局方法前必须先通过 `app.use` 将组件注册到对应的 app 上。

```js
import { Toast, Dialog, Notify } from 'vant';

// 将 Toast 等组件注册到 app 上
app.use(Toast);
app.use(Dialog);
app.use(Notify);

// app 内的子组件可以直接调用 $toast 等方法
export default {
  mounted() {
    this.$toast('提示文案');
  },
};
```
