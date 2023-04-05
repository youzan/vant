# Watermark

### Intro

Add specific text or patterns on the page as watermarks, which can be used to prevent information theft. Please upgrade `vant` to >= v4.2.0 before using this component.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Watermark } from 'vant';

const app = createApp();
app.use(Watermark);
```

## Usage

### Basic Usage

```html
<!-- text watermark -->
<van-watermark content="Vant" />

<!-- image watermark -->
<van-watermark image="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
```

### Custom Gap

Use `gapX` `gapY` attributes to control the gap between two watermark slice.

```html
<van-watermark
  image="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
  :gap-x="20"
  :gap-y="10"
/>
```

### Custom Opacity

Use `opacity` attribute to control the entirety opacity.

```html
<van-watermark
  image="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
  :opacity="0.5"
/>
```

### Custom Rotate

Use `rotate` attribute to control the rotate of watermark. Default value is `-22`.

```html
<van-watermark
  image="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
  rotate="22"
/>
```

### Display Range

Use the `fullPage` attribute to control the display range of the watermark.

```html
<van-watermark
  :full-page="true"
  content="vant watermark"
  font-color="rgba(0, 0, 0, 0.15)"
>
</van-watermark>
```

### HTML Watermark

Use the `default slot` to pass HTML directly. Inline styles are supported, and self-closing tags are not supported.

```html
<van-watermark :width="150">
  <div style="background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%)">
    <p style="mix-blend-mode: difference; color: #fff">Vant watermark</p>
  </div>
</van-watermark>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| width | Watermark width | _number_ | `100` |
| height | Watermark height | _number_ | `100` |
| zIndex | Watermark's z-index | _number_ | `100` |
| content | Text watermark content | _string_ | - |
| image | Image watermark content. If `content` and `image` are passed at the same time, use the `image` watermark first | _string_ | - |
| fullPage | Whether to display the watermark in full screen | _boolean_ | `true` |
| gapX | Horizontal spacing between watermarks | _number_ | `0` |
| gapY | Vertical spacing between watermarks | _number_ | `0` |
| fontColor | Color of text watermark | _string_ | `#dcdee0` |
| opacity | opacity of watermark | _number_ | `1` |

### Slots

| Attribute | Description |
| --- | --- |
| default | Content of HTML watermark. Inline styles are supported, and self-closing tags are not supported. This slot is invalid if `content` or `image` props is passed |

### Types

The component exports the following type definitions:

```ts
import type { WaterProps } from 'vant';
```
