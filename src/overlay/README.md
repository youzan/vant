# Overlay

### Install

``` javascript
import Vue from 'vue';
import { Overlay } from 'vant';

Vue.use(Overlay);
```

## Usage

### Basic Usage

```html
<van-button
  type="primary"
  text="Show Overlay"
  @click="show = true"
/>

<van-overlay
  :show="show"
  @click="show = false"
/>
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

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| show | Whether to show overlay | *boolean* | `false` | - |
| z-index | z-index | *string \| number* | `1` | - |
| duration | Animation duration | *string \| number* | `0.3` | - |
| class-name | ClassName | *string* | - | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |
