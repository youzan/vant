<style>
@component-namespace demo {
  @b swipe {
    .zan-swipe {
      height: 200px;

      img {
        width: 100%;
      }
    }
  }
}
</style>

<script>
export default {
  methods: {
    handlePageEnd(page, index) {
      console.log(page, index);
    }
  }
};
</script>

## Swipe 轮播

### 使用指南

如果你已经按照[快速上手](/vue/component/quickstart)中引入了整个`ZanUI`，以下**组件注册**就可以忽略了，因为你已经全局注册了`ZanUI`中的全部组件。

#### 全局注册

你可以在全局注册`Swipe`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Swipe`组件了：

```js
import Vue from 'vue';
import { Swipe, SwipeItem } from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/swipe.css';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Swipe`组件，这样只能在你注册的组件中使用`Swipe`：

```js
import { Swipe, SwipeItem } from '@youzan/zanui-vue';

export default {
  components: {
    'zan-swipe': Swipe,
    'zam-swipe-item': SwipeItem
  }
};
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<zan-swipe>
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
</zan-swipe>
```
:::

#### 自动轮播

需要设置`auto-play`属性为`true`，即会自动轮播。

:::demo 自动轮播
```html
<zan-swipe auto-play @pagechange:end="handlePageEnd">
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
</zan-swipe>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| autoPlay | 是否自动轮播 | `boolean`  |    `false`     |    `true`, `false`      |
| showIndicators | 是否显示指示器 | `boolean`  |   `true`       |   `true`, `false`       |

### 事件

| 事件名       | 说明      | 参数 |
|-----------|-----------|-----------|
| `pagechange:end` | 每一页轮播结束后触发 | `(elem, currIndex)`：`elem`为触发页当前的DOM节点 |
