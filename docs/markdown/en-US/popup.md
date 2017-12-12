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
| lockOnScroll | Lock body scroll | `Boolean` | `false` | - |
| position | Position | `String` | - | `top` `bottom` `right` `left` |
| overlayClass | Custom overlay class | `String` | `` | - |
| overlayStyle | Custom overlay style | `Object` | - | - |
| closeOnClickOverlay | Close popup when click overlay | `Boolean` | `true` | - |
| transition | Transition | `String` | `popup-slide` | - |
| preventScroll | Prevent background scroll | `Boolean` | `false` | - |
