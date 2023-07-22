# Sliding for verifying

### Intro

Used for swipe verification

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Verify } from 'vant';

const app = createApp();
app.use(Verify);
```

## Usage

### Default slide effect

Introduce components for direct use.

```html
<van-verify />
```

### Customize track colors

Set the slide track color via the `track-color` property, whose default value is `#1989FA`.

```html
<van-verify trackColor="pink" />
```

### Customize the hint text

Set the hint text via the `text` property, whose default value is `slide validation`.

```html
<van-verify text="Slide the slider to verify" />
```

### Customize the validation success accent color

Set the accent color after successful validation via the `sucess-color` property, whose default value is `#07C160`.

```html
<van-verify success-color="#FAAB0C" />
```

### Customize the validation success text color

Set the text color after successful validation via the `success-text-color` property, whose default value is `#F7F8FA`.

```html
<van-verify success-text-color="#161618" />
```

### Customize the validation success prompt text

Set the text prompt content after success through the `success-text-content` property, whose defaults is `validation successful`.

```html
<van-verify success-text-content="Yeah! Validation verification" />
```

### Customize the maximum number of failures allowed

The maximum number of failures allowed via `max-incorrect-times`, defaulting to `3`.

```html
<van-verify :max-incorrect-times="1" />
```

### Custom callback functions

Set the result after validation processing succeeds or fails by setting `success-func` and `fail-func`.

```html
<van-verify
  :success-func="()=>{ console.log('Validation succeeded') }"
  :fail-func="()=>{console.log('Validation failed')}"
></van-verify>
```

### Turn animation effects on / off

Turn on/off animation effects by setting `is-animation`, and turn on animation effects by default.

```html
<van-verify :is-animation="false"></van-verify>
```

### Customize the slider image content

Define the slider pattern content through the `default` and `successSlot` slots, you can insert icons, pictures and other information into it, where the `default` slot is the picture content when the slider does not reach the end point, and `sucessSlot` is the slider picture content when sliding to the end.

```html
<van-verify>
  <template #default>
    <Icon name="arrow" />
  </template>
  <template #successSlot>
    <Icon name="success" />
  </template>
</van-verify>
```

```html
<van-verify>
  <template #default>
    <img src="https://fastly.jsdelivr.net/npm/@vant/assets/logo.png" alt="" />
  </template>
  <template #successSlot>
    <img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="" />
  </template>
</van-verify>
```

## API

### Props

| Attribute | Description | Types | Default |
| --- | --- | --- | --- |
| track-color | Track color | _string_ | `#1989FA` |
| text | Hint text | _string_ | `Swipe to verify` |
| sucess-color | Verify the success accent color | _string_ | `#07C160` |
| success-text-color | Verify the success accent color | _string_ | `#F7F8FA` |
| success-text-content | Verify the success prompt text | _string_ | `Validation succeeded` |
| max-incorrect-times | Maximum number of failures allowed | _number_ | `3` |
| success-func | Validation success callback function | _funciton_ | - |
| fail-func | Verify the failed callback function | _funciton_ | - |
| is-animation | Turn animation effects on/off | _boolean_ | `true` |

### Slots

| Name        | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| default     | The image content when the slider does not reach the end point |
| successSlot | The image content of the slider as it reaches the end          |

### Types

The component exports the following type definitions:

```ts
import type { sliderVerifyProps } from 'vant';
```
