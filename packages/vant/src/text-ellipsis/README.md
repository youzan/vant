# TextEllipsis

### Intro

Display ellipsis for long text and support for expanding or collapsing text. Please upgrade `vant` to >= v4.1.0 before using this component.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { TextEllipsis } from 'vant';

const app = createApp();
app.use(TextEllipsis);
```

## Usage

### Basic Usage

Show one rows by default.

```html
<van-text-ellipsis :content="text" />
```

```js
export default {
  setup() {
    const text =
      'Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.';
    return { text };
  },
};
```

### Expand/Collapse

Support Expand/Collapse.

```html
<van-text-ellipsis
  :content="text"
  expand-text="expand"
  collapse-text="collapse"
/>
```

```js
export default {
  setup() {
    const text =
      "The fleeting time of one's life is everything that belongs to a person. Only this thing truly belongs to you. Everything else is just a momentary pleasure or misfortune, which will soon be gone with the passing of time.";
    return { text };
  },
};
```

### Customize rows

Display the number of `rows` by setting rows.

```html
<van-text-ellipsis
  rows="3"
  :content="text"
  expand-text="expand"
  collapse-text="collapse"
/>
```

```js
export default {
  setup() {
    const text =
      "That day, I turned twenty-one. In the golden age of my life, I was full of dreams. I wanted to love, to eat, and to instantly transform into one of these clouds, part alight, part darkened. It was only later that I understood life is but a slow, drawn-out process of getting your balls crushed. Day by day, you get older. Day by day, your dreams fade. In the end you are no different from a crushed ox. But I hadn't foreseen any of it on my twenty-first birthday. I thought I would be vigorous forever, and that nothing could ever crush me.";
    return { text };
  },
};
```

## API

### Props

| Attribute     | Description              | Type               | Default |
| ------------- | ------------------------ | ------------------ | ------- |
| rows          | Number of rows displayed | _number \| string_ | `1`     |
| content       | The text displayed       | _string_           | -       |
| expand-text   | Expand operation text    | _string_           | -       |
| collapse-text | Collapse operation text  | _string_           | -       |
| dots `v4.2.0` | Text content of ellipsis | _string_           | `'...'` |

### Events

| Event        | Description                             | Arguments           |
| ------------ | --------------------------------------- | ------------------- |
| click-action | Emitted when Expand/Collapse is clicked | _event: MouseEvent_ |

### Types

The component exports the following type definitions:

```ts
import type { TextEllipsisProps, TextEllipsisThemeVars } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                             | Default Value     | Description          |
| -------------------------------- | ----------------- | -------------------- |
| --van-text-ellipsis-action-color | _var(--van-blue)_ | Color of action text |
| --van-text-ellipsis-line-height  | _1.6_             | Line height of text  |
