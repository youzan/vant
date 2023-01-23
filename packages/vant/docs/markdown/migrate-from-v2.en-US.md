# Upgrade from v2 to v3

### Introduction

This document provides an upgrade guide from Vant 2 to Vant 3.

### Upgrade steps

#### 1. Upgrade to Vue 3

Vant 3 is developed based on Vue 3. Before using Vant 3, please upgrade the Vue in the project to version 3.0 or above.

#### 2. Handle incompatible changes

There are some incompatible changes from Vant 2 to Vant 3, please read the incompatible changes below carefully and deal with them in order.

## Incompatible changes

### Component renaming

The GoodsAction component is renamed to **ActionBar**.

```html
<!-- Vant 2 -->
<van-goods-action>
  <van-goods-action-icon text="icon" />
  <van-goods-action-button text="button" />
</van-goods-action>

<!-- Vant 3 -->
<van-action-bar>
  <van-action-bar-icon text="icon" />
  <van-action-bar-button text="button" />
</van-action-bar>
```

### Deprecated components

Vant v3 removed the SwitchCell component, you can use the Cell and Switch components instead.

```html
<!-- Vant 2 -->
<van-switch-cell title="title" v-model="checked" />

<!-- Vant 3 -->
<van-cell center title="title">
  <template #right-icon>
    <van-switch v-model="checked" size="24" />
  </template>
</van-cell>
```

### Popup components v-model changes

In order to adapt to Vue 3's v-model API usage changes, all components that provide v-model have some adjustments in usage. `v-model` for the following popup components has been renamed to `v-model:show`:

- ActionSheet
- Calendar
- Dialog
- Image Preview
- Notify
- Popover
- Popup -ShareSheet

```html
<!-- Vant 2 -->
<van-popup v-model="show" />

<!-- Vant 3 -->
<van-popup v-model:show="show" />
```

### Form component v-model internal value change

The prop corresponding to the following form component v-model is renamed to `modelValue`, and the event is renamed to `update:modelValue`:

-Checkbox

- CheckboxGroup -DatetimePicker -DropdownItem -Field -Radio
- RadioGroup -Search
- Stepper -Switch
- Sidebar
- Uploader

```html
<!-- Vant 2 -->
<van-field :value="value" @input="onInput" />

<!-- Vant 3 -->
<van-field :model-value="value" @update:model-value="onInput" />
```

### Other v-model tweaks

- Circle: `v-model` renamed to `v-model:currentRate`
- CouponList: `v-model` renamed to `v-model:code`
- List: `v-model` renamed to `v-model:loading`, `error.sync` renamed to `v-model:error`
- Tabs: `v-model` renamed to `v-model:active`
- TreeSelect: `active-id.sync` renamed to `v-model:active-id`
- TreeSelect: `main-active-index.sync` renamed to `v-model:main-active-index`

### Badge prop adjustment

In the previous version, we used the `info` prop to display the badge in the upper right corner of the icon. In order to better meet the naming habits of the community, we renamed this prop to badge, which affects the following components:

- Tab
- Icon
- GridItem
- TreeSelect
- TabbarItem
- SidebarItem
- GoodsActionIcon

At the same time, the Info component will also be renamed to Badge.

```html
<!-- Vant 2 -->
<van-icon info="5" />

<!-- Vant 3 -->
<van-icon badge="5" />
```

### Rename the get-container prop

Vue 3.0 added a new Teleport component, which provides the ability to render the component to any DOM position, and Vant 2 also provides similar capabilities through the `get-container` prop. For consistency with the official API, the `get-container` prop in Vant 3 will be renamed to `teleport`.

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

### API adjustments

#### Area

- The `change` event parameter is no longer passed to the component instance

#### Button

- The type corresponding to the blue button is adjusted from `info` to `primary`
- The type corresponding to the green button is adjusted from `primary` to `success`
- Default value of `native-type` changed from `submit` to `button`

#### Checkbox

- When used inside Cell, you now need to manually add `@click.stop` to prevent event bubbling

#### Dialog

- The `allow-html` prop is disabled by default.
- `before-close` prop usage adjustment, no longer pass in the done function, but return Promise to control.

#### DatetimePicker

- The `change` event parameter is no longer passed to the component instance

#### ImagePreview

- Remove the `async-close` prop, you can use the new `before-close` prop instead.

#### Picker

- The `change` event parameter is no longer passed to the component instance.
- The `allow-html` prop is turned off by default.
- The `show-toolbar` prop is enabled by default.
- Under cascade selection, the callback parameters returned by the `confirm` and `change` events will contain a complete option object.

#### Popover

- Default value of `trigger` prop adjusted to `click`.

#### Stepper

- The `async-change` prop is renamed to `before-change`, and the usage method is adjusted.

#### SwipeCell

- `detail` parameter of `open` event renamed to `name`.
- `on-close` prop renamed to `before-close`, and parameter structure adjusted.
- The `before-close` prop is no longer passed to the component instance.

#### Toast

- `mask` prop renamed to `overlay`.

#### TreeSelect

- `navclick` event renamed to `click-nav`.
- `itemclick` event renamed to `click-item`.

### Global methods

Global methods such as `$toast` and `$dialog` are provided by default in Vant 2, but Vue 3.0 no longer supports directly mounting methods on Vue's prototype chain, so starting from Vant 3.0, you must first pass `app.use` registers the component to the corresponding app.

```js
import { Toast, Dialog, Notify } from 'vant';

// Register components such as Toast to the app
app.use(Toast);
app.use(Dialog);
app.use(Notify);

// Subcomponents in the app can directly call methods such as $toast
export default {
  mounted() {
    this.$toast('prompt text');
  },
};
```
