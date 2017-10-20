<script>
import Dialog from 'packages/dialog';

export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false
    }
  },

  watch: {
    show3(val) {
      if (val) {
        setTimeout(() => {
          this.show3 = false;
        }, 2000);
      }
    }
  },

  methods: {
    showDialog() {
      Dialog.confirm({
        title: 'confirm标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      })
    }
  }
};
</script>

## Popup

### Install
``` javascript
import { Popup } from 'vant';

Vue.component(Popup.name, Popup);
```

### Usage

#### Basic Usage
Popup is located in the middle of the screen by default

:::demo Basic Usage
```html
<van-button @click="show1 = true">Show Popup</van-button>
<van-popup v-model="show1">Content</van-popup>
```

```javascript
export default {
  data() {
    return {
      show1: false
    }
  }
};
```
:::

#### Different Position
Use `position` prop to set popup display position

:::demo Different Position
```html
<van-button @click="show2 = true;">From Bottom</van-button>
<van-popup v-model="show2" position="bottom">
  <van-button @click="showDialog">Show Dialog</van-button>
</van-popup>

<van-button @click="show3 = true">From Top</van-button>
<van-popup v-model="show3" position="top" :overlay="false">Content</van-popup>

<van-button @click="show4 = true">From Right</van-button>
<van-popup v-model="show4" position="right" :overlay="false">
  <van-button @click="show4 = false">Close</van-button>
</van-popup>
```

```javascript
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false
    }
  },

  watch: {
    show2(val) {
      if (val) {
        setTimeout(() => {
          this.show2 = false;
        }, 2000);
      }
    }
  }
};
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| v-model | Whether to show popup | `Boolean` | `false` | - |
| overlay | Whether to show overlay | `Boolean` | `true` | - |
| lockOnScroll | Lock body scroll | `Boolean` | `false` | - |
| position | Position | `String` | - | `top` `bottom` `right` `left` |
| closeOnClickOverlay | Close popup when click overlay | `Boolean` | `true` | - |
| transition | Transition | `String` | `popup-slide` | - |
| preventScroll | Prevent background scroll | `Boolean` | `false` | - |
