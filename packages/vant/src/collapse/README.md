# Collapse

### Intro

Place a group of content in multiple collapsible panels, click the title of the panel to expand or contract its content.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Collapse, CollapseItem } from 'vant';

const app = createApp();
app.use(Collapse);
app.use(CollapseItem);
```

## Usage

### Basic Usage

Use `v-model` to control the name of active panels.

```html
<van-collapse v-model="activeNames">
  <van-collapse-item title="Title1" name="1">
    The code is written for people to see and can be run on a machine.
  </van-collapse-item>
  <van-collapse-item title="Title2" name="2">
    Technology is nothing more than the common soul of those who develop it.
  </van-collapse-item>
  <van-collapse-item title="Title3" name="3">
    The frequency of people swearing during code reading is the only measure of
    code quality.
  </van-collapse-item>
</van-collapse>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const activeNames = ref(['1']);
    return { activeNames };
  },
};
```

### Accordion

In accordion mode, only one panel can be expanded at the same time.

```html
<van-collapse v-model="activeName" accordion>
  <van-collapse-item title="Title1" name="1">
    The code is written for people to see and can be run on a machine.
  </van-collapse-item>
  <van-collapse-item title="Title2" name="2">
    Technology is nothing more than the common soul of those who develop it.
  </van-collapse-item>
  <van-collapse-item title="Title3" name="3">
    The frequency of people swearing during code reading is the only measure of
    code quality.
  </van-collapse-item>
</van-collapse>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const activeName = ref('1');
    return { activeName };
  },
};
```

### Disabled

Use the `disabled` prop to disable CollapseItem.

```html
<van-collapse v-model="activeNames">
  <van-collapse-item title="Title1" name="1">
    The code is written for people to see and can be run on a machine.
  </van-collapse-item>
  <van-collapse-item title="Title2" name="2" disabled>
    Technology is nothing more than the common soul of those who develop it.
  </van-collapse-item>
  <van-collapse-item title="Title3" name="3" disabled>
    The frequency of people swearing during code reading is the only measure of
    code quality.
  </van-collapse-item>
</van-collapse>
```

### Custom title

Using `title` slot to custom title.

```html
<van-collapse v-model="activeNames">
  <van-collapse-item name="1">
    <template #title>
      <div>Title1 <van-icon name="question-o" /></div>
    </template>
    The code is written for people to see and can be run on a machine.
  </van-collapse-item>
  <van-collapse-item title="Title2" name="2" icon="shop-o">
    Technology is nothing more than the common soul of those who develop it.
  </van-collapse-item>
</van-collapse>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const activeNames = ref(['1']);
    return { activeNames };
  },
};
```

### Toggle All

Using `toggleAll` method to toggle all items.

```html
<van-collapse v-model="activeNames" ref="collapse">
  <van-collapse-item title="Title1" name="1">
    The code is written for people to see and can be run on a machine.
  </van-collapse-item>
  <van-collapse-item title="Title2" name="2">
    Technology is nothing more than the common soul of those who develop it.
  </van-collapse-item>
  <van-collapse-item title="Title3" name="3">
    The frequency of people swearing during code reading is the only measure of
    code quality.
  </van-collapse-item>
</van-collapse>

<van-button type="primary" @click="openAll">Open All</van-button>
<van-button type="primary" @click="toggleAll">Toggle All</van-button>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const activeNames = ref(['1']);
    const collapse = ref(null);

    const openAll = () => {
      collapse.value.toggleAll(true);
    }
    const toggleAll = () => {
      collapse.value.toggleAll();
    },

    return {
      activeNames,
      openAll,
      toggleAll,
      collapse,
    };
  },
};
```

> Tips: The toggleAll method cannot be used in accordion mode.

## API

### Collapse Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Names of current active panels | accordion mode: _number \| string_<br>non-accordion mode: _(number \| string)[]_ | - |
| accordion | Whether to be accordion mode | _boolean_ | `false` |
| border | Whether to show outer border | _boolean_ | `true` |

### Collapse Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Emitted when switching panel | _activeNames: string \| number \| Array<string \| number>_ |

### CollapseItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | Name | _number \| string_ | `index` |
| icon | Left Icon | _string_ | - |
| size | Title size, can be set to `large` | _string_ | - |
| title | Title | _number \| string_ | - |
| value | Right text | _number \| string_ | - |
| label | Description below the title | _string_ | - |
| border | Whether to show inner border | _boolean_ | `true` |
| disabled | Whether to disabled collapse | _boolean_ | `false` |
| readonly | Whether to be readonly | _boolean_ | `false` |
| is-link | Whether to show link icon | _boolean_ | `true` |
| lazy-render | Whether to lazy render util opened | _boolean_ | `true` |
| title-class | Title className | _string_ | - |
| value-class | Value className | _string_ | - |
| label-class | Label className | _string_ | - |

### Collapse Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html) to get Collapse instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| toggleAll | Toggle the expanded status of all collapses | _options?: boolean \| object_ | - |

### toggleAll Usage

```js
import { ref } from 'vue';
import type { CollapseInstance } from 'vant';

const collapseRef = ref<CollapseInstance>();

// Toggle all
collapseRef.value?.toggleAll();
// Expand all
collapseRef.value?.toggleAll(true);
// UnExpand all
collapseRef.value?.toggleAll(false);

// Toggle all, skip disabled
collapseRef.value?.toggleAll({
  skipDisabled: true,
});
// Expand all, skip disabled
collapseRef.value?.toggleAll({
  expanded: true,
  skipDisabled: true,
});
```

### CollapseItem Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html) to get CollapseItem instance and call instance methods.

| Name   | Description            | Attribute           | Return value |
| ------ | ---------------------- | ------------------- | ------------ |
| toggle | Toggle expanded status | _expanded: boolean_ | -            |

### Types

The component exports the following type definitions:

```ts
import type {
  CollapseProps,
  CollapseItemProps,
  CollapseItemInstance,
  CollapseToggleAllOptions,
} from 'vant';
```

`CollapseItemInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { CollapseItemInstance } from 'vant';

const collapseItemRef = ref<CollapseItemInstance>();

collapseItemRef.value?.toggle();
```

### CollapseItem Slots

| Name       | Description              |
| ---------- | ------------------------ |
| default    | Content                  |
| title      | Custom header title      |
| value      | Custom header value      |
| label      | Custom header label      |
| icon       | Custom header left icon  |
| right-icon | Custom header right icon |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-collapse-item-duration | _var(--van-duration-base)_ | - |
| --van-collapse-item-content-padding | _var(--van-padding-sm) var(--van-padding-md)_ | - |
| --van-collapse-item-content-font-size | _var(--van-font-size-md)_ | - |
| --van-collapse-item-content-line-height | _1.5_ | - |
| --van-collapse-item-content-text-color | _var(--van-text-color-2)_ | - |
| --van-collapse-item-content-background | _var(--van-background-2)_ | - |
| --van-collapse-item-title-disabled-color | _var(--van-text-color-3)_ | - |
