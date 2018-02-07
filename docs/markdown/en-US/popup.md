## Popup

### Install
``` javascript
import { Popup } from 'vant';

Vue.use(Popup);
```

### Usage

#### Basic Usage
Popup is located in the middle of the screen by default

```html
<van-popup v-model="show">Content</van-popup>
```

```javascript
export default {
  data() {
    return {
      show: false
    }
  }
};
```

#### Position
Use `position` prop to set popup display position

```html
<van-popup v-model="show" position="top" :overlay="false">
  Content
</van-popup>
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| v-model | Whether to show popup | `Boolean` | `false` | - |
| overlay | Whether to show overlay | `Boolean` | `true` | - |
| lock-on-scroll | Lock body scroll | `Boolean` | `false` | - |
| position | Position | `String` | - | `top` `bottom` `right` `left` |
| overlay-class | Custom overlay class | `String` | `` | - |
| overlay-style | Custom overlay style | `Object` | - | - |
| close-on-click-overlay | Close popup when click overlay | `Boolean` | `true` | - |
| transition | Transition | `String` | `popup-slide` | - |
| prevent-scroll | Prevent background scroll | `Boolean` | `false` | - |
| get-container | Return the mount node for Popup | `Function` | - | `() => HTMLElement` |
