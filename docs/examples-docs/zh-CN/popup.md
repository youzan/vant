<style>
.demo-popup {
  .van-button {
    margin: 10px 0 10px 15px;
  }

  .van-popup {
    width: 60%;
    padding: 20px;
    border-radius: 5px;
    box-sizing: border-box;

    &--bottom {
      width: 100%;
      height: 200px;
    }

    &--top {
      color: #fff;
      width: 100%;
      border-radius: 0;
      line-height: 20px;
      background-color: rgba(0, 0, 0, 0.8);
    }

    &--left,
    &--right {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

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

## Popup 弹出层

### 使用指南
``` javascript
import { Popup } from 'vant';

Vue.component(Popup.name, Popup);
```

### 代码演示

#### 基础用法
`popup`默认从中间弹出

:::demo 基础用法
```html
<van-button @click="show1 = true">弹出 Popup</van-button>
<van-popup v-model="show1">内容</van-popup>
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

#### 弹出位置
通过`position`属性设置 Popup 弹出位置

:::demo 弹出位置
```html
<van-button @click="show2 = true;">底部弹出</van-button>
<van-popup v-model="show2" position="bottom">
  <van-button @click="showDialog">弹出 Dialog</van-button>
</van-popup>

<van-button @click="show3 = true">顶部弹出</van-button>
<van-popup v-model="show3" position="top" :overlay="false">
  更新成功
</van-popup>

<van-button @click="show4 = true">右侧弹出</van-button>
<van-popup v-model="show4" position="right" :overlay="false">
  <van-button @click="show4 = false">关闭弹层</van-button>
</van-popup>
```

```javascript
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false
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

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前组件是否显示 | `Boolean` | `false` | - |
| overlay | 是否显示背景遮罩层 | `Boolean` | `true` | - |
| lockOnScroll | 背景是否跟随滚动 | `Boolean` | `false` | - |
| position | 弹出层位置 | `String` | - | `top` `bottom` `right` `left` |
| closeOnClickOverlay | 点击遮罩层是否关闭弹出层 | `Boolean` | `true` | - |
| transition | 弹出层的`transition` | `String` | `popup-slide` | |
| preventScroll | 是否防止滚动穿透 | `Boolean` | `false` | - |
