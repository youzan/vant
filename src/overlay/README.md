# Overlay

### Install

```js
import Vue from 'vue';
import { Overlay } from 'vant';

Vue.use(Overlay);
```

## Usage

### Basic Usage

```html
<van-button type="primary" text="Show Overlay" @click="show = true" />
<van-overlay :show="show" @click="show = false" />
```

```js
export default {
  data() {
    return {
      show: false
    }
  }
},
```

### Embedded Content

```html
<van-overlay :show="show" @click="show = false">
  <div class="wrapper" @click.stop>
    <div class="block" />
  </div>
</van-overlay>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| show | Whether to show overlay | _boolean_ | `false` |
| z-index | z-index | _number \| string_ | `1` |
| duration | Animation duration | _number \| string_ | `0.3` |
| class-name | ClassName | _string_ | - |
| custom-class `v2.2.5` | Custom style | _object_ | - |
| lock-scroll `v2.6.2` | Whether to lock background scroll | _boolean_ | `true` |

### Events

| Event | Description            | Arguments      |
| ----- | ---------------------- | -------------- |
| click | Triggered when clicked | _event: Event_ |

### Slots

| Name             | Description  |
| ---------------- | ------------ |
| default `v2.2.5` | Default slot |
