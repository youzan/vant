# Divider

### Intro

Separate content into multiple areas.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Divider } from 'vant';

const app = createApp();
app.use(Divider);
```

## Usage

### Basic Usage

```html
<van-divider />
```

### With Text

```html
<van-divider>Text</van-divider>
```

### Content Position

```html
<van-divider content-position="left">Text</van-divider>
<van-divider content-position="right">Text</van-divider>
```

### Dashed

```html
<van-divider dashed>Text</van-divider>
```

### Custom Style

```html
<van-divider
  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
>
  Text
</van-divider>
```

### Vertical

```html
<van-divider vertical />
Text
<van-divider vertical dashed />
Text
<van-divider vertical :hairline="false" />
Text
<van-divider vertical :style="{ borderColor: '#1989fa' }" />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| dashed | Whether to use dashed border | _boolean_ | `false` |
| hairline | Whether to use hairline | _boolean_ | `true` |
| content-position | Content position, can be set to `left` `right` | _string_ | `center` |
| vertical `v4.4.0` | Whether to use vertical | _boolean_ | `false` |

### Slots

| Name    | Description |
| ------- | ----------- |
| default | content     |

### Types

The component exports the following type definitions:

```ts
import type { DividerProps, DividerContentPosition } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                              | Default Value             | Description |
| --------------------------------- | ------------------------- | ----------- |
| --van-divider-margin              | _var(--van-padding-md) 0_ | -           |
| --van-divider-vertical-margin     | _0 var(--van-padding-xs)_ | -           |
| --van-divider-text-color          | _var(--van-text-color-2)_ | -           |
| --van-divider-font-size           | _var(--van-font-size-md)_ | -           |
| --van-divider-line-height         | _24px_                    | -           |
| --van-divider-border-color        | _var(--van-border-color)_ | -           |
| --van-divider-content-padding     | _var(--van-padding-md)_   | -           |
| --van-divider-content-left-width  | _10%_                     | -           |
| --van-divider-content-right-width | _10%_                     | -           |
