<style>
.demo-popup {
  .van-button {
    margin: 10px 15px;
  }

  .van-popup-1 {
    width: 60%;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
  }

  .van-popup-2 {
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    padding: 20px;
  }

  .van-popup-3 {
    line-height: 50px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.701961);
    color: #fff;
  }

  .van-popup-4,
  .van-popup-5 {
    width: 100%;
    height: 100%;
  }
}
</style>

<script>
import MobileComputed from 'components/mobile-computed';
import Dialog from 'packages/dialog';

export default {
  mixins: [MobileComputed],

  data() {
    return {
      popupShow1: false,
      popupShow2: false,
      popupShow3: false,
      popupShow4: false,
      popupShow5: false
    }
  },

  watch: {
    popupShow3(val) {
      if (val) {
        setTimeout(() => {
          this.popupShow3 = false;
        }, 2000);
      }
    }
  },

  methods: {
    showDialog() {
      Dialog.confirm({
        title: 'confirm标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      }).then((action) => {
        console.log(action);
      }, (error) => {
        console.log(error);
      });
    }
  }
};
</script>

## Popup 弹出菜单

### 使用指南

如果你已经按照快速上手中引入了整个`vant`，以下**组件注册**就可以忽略了，因为你已经全局注册了`vant`中的全部组件。

#### 全局注册

你可以在全局注册`Popup`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Popup`组件了：

```js
import Vue from 'vue';
import { Popup } from 'vant';
import 'vant/lib/vant-css/popup.css';

Vue.component(Popup.name, Popup);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Popup`组件，这样只能在你注册的组件中使用`Popup`：

```js
import { Popup } from 'vant';
import 'vant/lib/vant-css/popup.css';

export default {
  components: {
    'van-popup': Popup
  }
};
```

### 代码演示

#### 基础用法

`popup`默认情况下是从中间弹出。

:::demo 基础用法
```html
<van-button @click="popupShow1 = true">从中间弹出popup</van-button>
<van-popup v-model="popupShow1" class="van-popup-1" :lock-on-scroll="true">
  从中间弹出popup
</van-popup>

<script>
export default {
  data() {
    return {
      popupShow1: false
    }
  }
};
</script>
```
:::

#### 从不同位置弹出菜单

可以设置`position`属性，`popup`即能从不同位置弹出，`position`的可选值有`top`，`bottom`，`right`，`left`。

:::demo 从不同位置弹出菜单
```html
<van-button @click="popupShow2 = true;">从下方弹出popup</van-button>
<van-popup v-model="popupShow2" position="bottom" class="van-popup-2">
  <van-button @click="showDialog">弹出dialog</van-button>
</van-popup>

<van-button @click="popupShow3 = true">从上方弹出popup</van-button>
<van-popup v-model="popupShow3" position="top" class="van-popup-3" :overlay="false">
  更新成功
</van-popup>

<van-button @click="popupShow4 = true">从右方弹出popup</van-button>
<van-popup v-model="popupShow4" position="right" class="van-popup-4" :overlay="false">
  <van-button @click.native="popupShow4 = false">关闭 popup</van-button>
</van-popup>


<van-button @click="popupShow5 = true">从左方弹出popup</van-button>
<van-popup v-model="popupShow5" position="left" class="van-popup-5" :overlay="false">
  <van-button @click.native="popupShow5 = false">关闭 popup</van-button>
</van-popup>

<script>
export default {
  data() {
    return {
      popupShow1: false,
      popupShow2: false,
      popupShow3: false,
      popupShow4: false
    }
  },

  watch: {
    popupShow2(val) {
      if (val) {
        setTimeout(() => {
          this.popupShow2 = false;
        }, 2000);
      }
    }
  }
};
</script>
```
:::

点击以下按钮查看手机端效果：

<van-button @click="mobileShow = true">点击查看手机端效果</van-button>
<mobile-popup v-model="mobileShow" :url="mobileUrl"></mobile-popup>

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| value | 利用`v-model`绑定当前组件是否显示 | `boolean`  | `false` | `true`, `false`  |
| overlay | 是否显示背景遮罩层 | `boolean`  | `true` | `true`, `false`  |
| lockOnScroll | 背景是否跟随滚动 | `boolean`  | `false` | `true`, `false`  |
| position | 弹出菜单位置 | `string`  |  | `top`, `bottom`, `right`, `left`  |
| closeOnClickOverlay | 点击遮罩层是否关闭弹出菜单 | `boolean`  | `true` | `true`, `false`  |
| transition | 弹出菜单的`transition` | `string`  | `popup-slide` |   |
