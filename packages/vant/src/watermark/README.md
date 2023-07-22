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

### Text Watermark

Use the `content` prop to set the text of the watermark.

```html
<van-watermark content="Vant" />
```

### Image Watermark

Use the `image` prop to set the watermark image, and use `opacity` prop to adjust the transparency of the watermark.

```html
<van-watermark
  image="https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png"
  opacity="0.2"
/>
```

### Custom Gap

Use `gap-x` `gap-y` prop to control the gap between watermark items.

```html
<van-watermark
  image="https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png"
  :gap-x="30"
  :gap-y="10"
  opacity="0.2"
/>
```

### Custom Rotate

Use `rotate` prop to control the rotate of watermark. The default value is `-22`.

```html
<van-watermark
  image="https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png"
  rotate="22"
  opacity="0.2"
/>
```

### Display Range

Use the `full-page` prop to control the display range of the watermark.

```html
<van-watermark
  image="https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png"
  opacity="0.2"
  :full-page="true"
/>
```

### HTML Watermark

Use the `content` slot to pass HTML as watermark. Only supports inline styles, and self-closing tags are not supported.

```html
<van-watermark :width="150">
  <template #content>
    <div style="background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%)">
      <p style="mix-blend-mode: difference; color: #fff">Vant watermark</p>
    </div>
  </template>
</van-watermark>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| width | Watermark width | _number_ | `100` |
| height | Watermark height | _number_ | `100` |
| z-index | Watermark's z-index | _number \| string_ | `100` |
| content | Text watermark content | _string_ | - |
| image | Image watermark content. If `content` and `image` are passed at the same time, use the `image` watermark first | _string_ | - |
| rotate | Watermark rotation angle | _number \| string_ | `-22` |
| full-page | Whether to display the watermark in full screen | _boolean_ | `true` |
| gap-x | Horizontal spacing between watermarks | _number_ | `0` |
| gap-y | Vertical spacing between watermarks | _number_ | `0` |
| text-color | Color of text watermark | _string_ | `#dcdee0` |
| opacity | Opacity of watermark | _number \| string_ | - |

### Slots

| Attribute | Description |
| --- | --- |
| content | Content of HTML watermark. Only supports inline styles, and self-closing tags are not supported. The priority is higher than `content` or `image` props |

### Types

The component exports the following type definitions:

```ts
import type { WaterProps } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                    | Default Value | Description             |
| ----------------------- | ------------- | ----------------------- |
| --van-watermark-z-index | _100_         | z-index of root element |
