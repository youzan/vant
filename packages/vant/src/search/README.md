# Search

### Intro

Input box component for search scenarios.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Search } from 'vant';

const app = createApp();
app.use(Search);
```

## Usage

### Basic Usage

```html
<van-search v-model="value" placeholder="Placeholder" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value = ref('');
    return { value };
  },
};
```

### Listen to Events

`search` event will be Emitted when click the search button on the keyboard, `cancel` event will be Emitted when click the cancel button.

```html
<form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="Placeholder"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const value = ref('');
    const onSearch = (val) => showToast(val);
    const onCancel = () => showToast('Cancel');
    return {
      value,
      onSearch,
      onCancel,
    };
  },
};
```

> Tips: There will be a search button on the keyboard when Search is inside a form in iOS.

### Input Align

```html
<van-search v-model="value" input-align="center" placeholder="Placeholder" />
```

### Disabled

```html
<van-search v-model="value" disabled placeholder="Placeholder" />
```

### Custom Background Color

```html
<van-search
  v-model="value"
  shape="round"
  background="#4fc08d"
  placeholder="Placeholder"
/>
```

### Custom Action Button

Use `action` slot to custom right button, `cancel` event will no longer be Emitted when use this slot.

```html
<van-search
  v-model="value"
  show-action
  label="Address"
  placeholder="Placeholder"
  @search="onSearch"
>
  <template #action>
    <div @click="onClickButton">Search</div>
  </template>
</van-search>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const value = ref('');
    const onSearch = (val) => showToast(val);
    const onClickButton = () => showToast(value.value);
    return {
      value,
      onSearch,
      onClickButton,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Input value | _number \| string_ | - |
| label | Left side label | _string_ | - |
| name | As the identifier when submitting the form | _string_ | - |
| shape | Shape of field, can be set to `round` | _string_ | `square` |
| id | Input id, the for attribute of the label also will be set | _string_ | `van-search-n-input` |
| background | Background color of field | _string_ | `#f2f2f2` |
| maxlength | Max length of value | _number \| string_ | - |
| placeholder | Placeholder | _string_ | - |
| clearable | Whether to be clearable | _boolean_ | `true` |
| clear-icon | Clear icon name | _string_ | `clear` |
| clear-trigger | When to display the clear icon, `always` means to display the icon when value is not empty, `focus` means to display the icon when input is focused | _string_ | `focus` |
| autofocus | Whether to auto focus, unsupported in iOS | _boolean_ | `false` |
| show-action | Whether to show right action button | _boolean_ | `false` |
| action-text | Text of action button | _string_ | `Cancel` |
| disabled | Whether to disable field | _boolean_ | `false` |
| readonly | Whether to be readonly | _boolean_ | `false` |
| error | Whether to mark the input content in red | _boolean_ | `false` |
| error-message | Error message | _string_ | - |
| formatter | Input value formatter | _(val: string) => string_ | - |
| format-trigger | When to format value, can be set to `onBlur` | _string_ | `onChange` |
| input-align | Text align of field, can be set to `center` `right` | _string_ | `left` |
| left-icon | Left icon name | _string_ | `search` |
| right-icon | Right icon name | _string_ | - |
| autocomplete | [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute of native input element | _string_ | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| search | Emitted when confirming search | _value: string_ |
| update:model-value | Emitted when input value changed | _value: string_ |
| focus | Emitted when input is focused | _event: Event_ |
| blur | Emitted when input is blurred | _event: Event_ |
| click-input | Emitted when the input is clicked | _event: MouseEvent_ |
| click-left-icon | Emitted when the left icon is clicked | _event: MouseEvent_ |
| click-right-icon | Emitted when the right icon is clicked | _event: MouseEvent_ |
| clear | Emitted when the clear icon is clicked | _event: MouseEvent_ |
| cancel | Emitted when the cancel button is clicked | - |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html) to get Search instance and call instance methods.

| Name  | Description         | Attribute | Return value |
| ----- | ------------------- | --------- | ------------ |
| focus | Trigger input focus | -         | -            |
| blur  | Trigger input blur  | -         | -            |

### Types

The component exports the following type definitions:

```ts
import type { SearchProps, SearchShape, SearchInstance } from 'vant';
```

`SearchInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { SearchInstance } from 'vant';

const searchRef = ref<SearchInstance>();

searchRef.value?.focus();
```

### Slots

| Name       | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| left       | Custom left side content                                    |
| action     | Custom right button, displayed when `show-action` is `true` |
| label      | Custom Search label                                         |
| left-icon  | Custom left icon                                            |
| right-icon | Custom right icon                                           |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                            | Default Value                | Description |
| ------------------------------- | ---------------------------- | ----------- |
| --van-search-padding            | _10px var(--van-padding-sm)_ | -           |
| --van-search-background         | _var(--van-background-2)_    | -           |
| --van-search-content-background | _var(--van-gray-1)_          | -           |
| --van-search-input-height       | _34px_                       | -           |
| --van-search-label-padding      | _0 5px_                      | -           |
| --van-search-label-color        | _var(--van-text-color)_      | -           |
| --van-search-label-font-size    | _var(--van-font-size-md)_    | -           |
| --van-search-left-icon-color    | _var(--van-gray-6)_          | -           |
| --van-search-action-padding     | _0 var(--van-padding-xs)_    | -           |
| --van-search-action-text-color  | _var(--van-text-color)_      | -           |
| --van-search-action-font-size   | _var(--van-font-size-md)_    | -           |
