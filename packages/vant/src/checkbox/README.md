# Checkbox

### Intro

A group of options for multiple choices.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Checkbox, CheckboxGroup } from 'vant';

const app = createApp();
app.use(Checkbox);
app.use(CheckboxGroup);
```

## Usage

### Basic Usage

```html
<van-checkbox v-model="checked">Checkbox</van-checkbox>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref(true);
    return {
      checked,
    };
  },
};
```

### Disabled

```html
<van-checkbox v-model="checked" disabled>Checkbox</van-checkbox>
```

### Custom Shape

```html
<van-checkbox v-model="checked" shape="square">Checkbox</van-checkbox>
```

### Custom Color

```html
<van-checkbox v-model="checked" checked-color="#ee0a24">Checkbox</van-checkbox>
```

### Custom Icon Size

```html
<van-checkbox v-model="checked" icon-size="24px">Checkbox</van-checkbox>
```

### Custom Icon

Use icon slot to custom icon.

```html
<van-checkbox v-model="checked">
  customize icon
  <template #icon="props">
    <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
  </template>
</van-checkbox>

<style>
  .img-icon {
    height: 20px;
  }
</style>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref(true);
    return {
      checked,
      activeIcon:
        'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
      inactiveIcon:
        'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png',
    };
  },
};
```

### Left Label

Set `label-position` prop to `'left'` to adjust the label position to the left of the Checkbox.

```html
<van-checkbox v-model="checked" label-position="left">Checkbox</van-checkbox>
```

### Disable Label Click

```html
<van-checkbox v-model="checked" label-disabled>Checkbox</van-checkbox>
```

### Checkbox Group

When Checkboxes are inside a CheckboxGroup, the checked checkboxes's name is an array and bound with CheckboxGroup by v-model.

```html
<van-checkbox-group v-model="checked">
  <van-checkbox name="a">Checkbox a</van-checkbox>
  <van-checkbox name="b">Checkbox b</van-checkbox>
</van-checkbox-group>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref(['a', 'b']);
    return { checked };
  },
};
```

### Horizontal

```html
<van-checkbox-group v-model="checked" direction="horizontal">
  <van-checkbox name="a">Checkbox a</van-checkbox>
  <van-checkbox name="b">Checkbox b</van-checkbox>
</van-checkbox-group>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref([]);
    return { checked };
  },
};
```

### Maximum amount of checked options

```html
<van-checkbox-group v-model="checked" :max="2">
  <van-checkbox name="a">Checkbox a</van-checkbox>
  <van-checkbox name="b">Checkbox b</van-checkbox>
  <van-checkbox name="c">Checkbox c</van-checkbox>
</van-checkbox-group>
```

### Toggle All

```html
<van-checkbox-group v-model="checked" ref="checkboxGroup">
  <van-checkbox name="a">Checkbox a</van-checkbox>
  <van-checkbox name="b">Checkbox b</van-checkbox>
  <van-checkbox name="c">Checkbox c</van-checkbox>
</van-checkbox-group>

<van-button type="primary" @click="checkAll">Check All</van-button>
<van-button type="primary" @click="toggleAll">Toggle All</van-button>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref([]);
    const checkboxGroup = ref(null);

    const checkAll = () => {
      checkboxGroup.value.toggleAll(true);
    }
    const toggleAll = () => {
      checkboxGroup.value.toggleAll();
    },

    return {
      checked,
      checkAll,
      toggleAll,
      checkboxGroup,
    };
  },
};
```

### Inside a Cell

```html
<van-checkbox-group v-model="checked">
  <van-cell-group inset>
    <van-cell
      v-for="(item, index) in list"
      clickable
      :key="item"
      :title="`Checkbox ${item}`"
      @click="toggle(index)"
    >
      <template #right-icon>
        <van-checkbox
          :name="item"
          :ref="el => checkboxRefs[index] = el"
          @click.stop
        />
      </template>
    </van-cell>
  </van-cell-group>
</van-checkbox-group>
```

```js
import { ref, onBeforeUpdate } from 'vue';

export default {
  setup() {
    const checked = ref([]);
    const checkboxRefs = ref([]);
    const toggle = (index) => {
      checkboxRefs.value[index].toggle();
    };

    onBeforeUpdate(() => {
      checkboxRefs.value = [];
    });

    return {
      list: ['a', 'b'],
      toggle,
      checked,
      checkboxRefs,
    };
  },
};
```

## API

### Checkbox Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Check status | _boolean_ | `false` |
| name | Checkbox name, usually a unique string or number | _any_ | - |
| shape | Can be set to `square` | _string_ | `round` |
| disabled | Disable checkbox | _boolean_ | `false` |
| label-disabled | Whether to disable label click | _boolean_ | `false` |
| label-position | Can be set to `left` | _string_ | `right` |
| icon-size | Icon size | _number \| string_ | `20px` |
| checked-color | Checked color | _string_ | `#1989fa` |
| bind-group | Whether to bind with CheckboxGroup | _boolean_ | `true` |

### CheckboxGroup Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Names of all checked checkboxes | _any[]_ | - |
| disabled | Whether to disable all checkboxes | _boolean_ | `false` |
| max | Maximum amount of checked options | _number \| string_ | `0`(Unlimited) |
| direction | Direction, can be set to `horizontal` | _string_ | `vertical` |
| icon-size | Icon size of all checkboxes | _number \| string_ | `20px` |
| checked-color | Checked color of all checkboxes | _string_ | `#1989fa` |

### Checkbox Events

| Event  | Description                          | Parameters          |
| ------ | ------------------------------------ | ------------------- |
| change | Emitted when value changed           | _checked: boolean_  |
| click  | Emitted when the checkbox is clicked | _event: MouseEvent_ |

### CheckboxGroup Events

| Event  | Description                | Parameters     |
| ------ | -------------------------- | -------------- |
| change | Emitted when value changed | _names: any[]_ |

### Checkbox Slots

| Name    | Description  | SlotProps                                 |
| ------- | ------------ | ----------------------------------------- |
| default | Custom label | -                                         |
| icon    | Custom icon  | _{ checked: boolean, disabled: boolean }_ |

### CheckboxGroup Methods

Use [ref](https://v3.vuejs.org/guide/component-template-refs.html) to get CheckboxGroup instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| toggleAll | Toggle check status of all checkboxes | _options?: boolean \| object_ | - |

### toggleAll Usage

```js
import { ref } from 'vue';
import type { CheckboxGroupInstance } from 'vant';

const checkboxGroupRef = ref<CheckboxGroupInstance>();

// Toggle all
checkboxGroup.value?.toggleAll();
// Select all
checkboxGroup.value?.toggleAll(true);
// Unselect all
checkboxGroup.value?.toggleAll(false);

// Toggle all, skip disabled
checkboxGroup.value?.toggleAll({
  skipDisabled: true,
});
// Select all, skip disabled
checkboxGroup.value?.toggleAll({
  checked: true,
  skipDisabled: true,
});
```

### Checkbox Methods

Use [ref](https://v3.vuejs.org/guide/component-template-refs.html) to get Checkbox instance and call instance methods.

| Name   | Description         | Attribute           | Return value |
| ------ | ------------------- | ------------------- | ------------ |
| toggle | Toggle check status | _checked?: boolean_ | -            |

### Types

The component exports the following type definitions:

```ts
import type {
  CheckboxProps,
  CheckboxShape,
  CheckboxInstance,
  CheckboxLabelPosition,
  CheckboxGroupProps,
  CheckboxGroupInstance,
  CheckboxGroupDirection,
  CheckboxGroupToggleAllOptions,
} from 'vant';
```

`CheckboxInstance` and `CheckboxGroupInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { CheckboxInstance, CheckboxGroupInstance } from 'vant';

const checkboxRef = ref<CheckboxInstance>();
const checkboxGroupRef = ref<CheckboxGroupInstance>();

checkboxRef.value?.toggle();
checkboxGroupRef.value?.toggleAll();
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-checkbox-size | _20px_ | - |
| --van-checkbox-border-color | _var(--van-gray-5)_ | - |
| --van-checkbox-duration | _var(--van-duration-fast)_ | - |
| --van-checkbox-label-margin | _var(--van-padding-xs)_ | - |
| --van-checkbox-label-color | _var(--van-text-color)_ | - |
| --van-checkbox-checked-icon-color | _var(--van-primary-color)_ | - |
| --van-checkbox-disabled-icon-color | _var(--van-gray-5)_ | - |
| --van-checkbox-disabled-label-color | _var(--van-text-color-3)_ | - |
| --van-checkbox-disabled-background | _var(--van-border-color)_ | - |
