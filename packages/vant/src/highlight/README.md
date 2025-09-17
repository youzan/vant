# Highlight

### Intro

Highlight the specified text content. Please upgrade `vant` to >= v4.8.0 before using this component.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Highlight } from 'vant';

const app = createApp();
app.use(Highlight);
```

## Usage

### Basic Usage

You can specify keywords to be highlighted with `keywords` and source text with `source-string`.

```html
<van-highlight :keywords="keywords" :source-string="text" />
```

```ts
export default {
  setup() {
    const text =
      'Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.';
    const keywords = 'questions';

    return {
      text,
      keywords,
    };
  },
};
```

### Multiple Keywords

If you need to specific more than one keywords, you can pass in `keywords` as an array.

```html
<van-highlight :keywords="keywords" :source-string="text" />
```

```ts
export default {
  setup() {
    const text =
      'Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.';
    const keywords = ['time', 'life', 'answer'];

    return {
      text,
      keywords,
    };
  },
};
```

### Custom Class

Set the `highlight-class` of the highlighted tag to customize the style.

```html
<van-highlight
  :keywords="keywords"
  :source-string="text"
  highlight-class="custom-class"
/>
```

```ts
export default {
  setup() {
    const text =
      'Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.';
    const keywords = 'life';

    return {
      text,
      keywords,
    };
  },
};
```

```css
.custom-class {
  color: red;
}
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| auto-escape | Whether to automatically escape | _boolean_ | `true` |
| case-sensitive | Is case sensitive | _boolean_ | `false` |
| highlight-class | Class name of the highlight element | _string_ | - |
| highlight-tag | HTML Tag of highlighted element | _string_ | `span` |
| keywords | Expected highlighted text | _string \| string[]_ | - |
| source-string | Source text | _string_ | - |
| tag | HTML Tag of root element | _string_ | `div` |
| unhighlight-class | Class name of the unhighlight element | _string_ | - |
| unhighlight-tag | HTML Tag of unhighlighted element | _string_ | `span` |

### Types

The component exports the following type definitions:

```ts
import type { HighlightProps, HighlightThemeVars } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-highlight-tag-color | _var(--van-primary-color)_ | Color of highlighted text |
