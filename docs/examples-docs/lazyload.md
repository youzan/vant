<style>
.demo-lazyload {
  .lazy-img {
    display: block;
    width: 100%;
    height: auto;
  }

  .lazy-background {
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>

<script>
export default {
  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/upload_files/2016/01/27/Fo2dFWjXYzWDR9Jaa1AEqk1jt7e0',
        'https://img.yzcdn.cn/upload_files/2016/01/27/FkyhiZfVE8tx-4qjxR2VeiqsSZYL',
        'https://img.yzcdn.cn/upload_files/2016/01/27/FpWD3kX18w8qjM6faH-4JqOWHsF4',
        'https://img.yzcdn.cn/upload_files/2016/09/08/9ff28d555e5760fa830344f12efa0087.jpg',
        'https://img.yzcdn.cn/upload_files/2016/11/13/FlZIeSgbSANSPkmUHttMjoIgY3cv.jpg',
        'https://img.yzcdn.cn/upload_files/2016/12/12/FuxgsGPRnupGu_eaMuaR8W0DuSKp.jpeg'
      ],
      backgroundImageList: [
        'https://img.yzcdn.cn/upload_files/2016/01/27/Fo2dFWjXYzWDR9Jaa1AEqk1jt7e0',
        'https://img.yzcdn.cn/upload_files/2016/01/27/FkyhiZfVE8tx-4qjxR2VeiqsSZYL'
      ],
      componentImageList: [
        'https://img.yzcdn.cn/upload_files/2017/03/09/FvkZahKoq1vkxLQFdVWeLf2UCqDz.png',
        'https://img.yzcdn.cn/upload_files/2017/03/09/Fk0rpe_svu9d5Xk3MUCWd1QeMXOu.png'
      ]
    };
  },

  methods: {
    handleComponentShow() {
      console.log('component show');
    }
  }
}
</script>

## Lazyload 图片懒加载

### 使用指南

`Lazyload`是`Vue`指令，所以需要使用它必须将它注册到`Vue`的指令中。

```js
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload, options);
```

### 代码演示

#### 基础用法

比如商品详情页很多图片的情况需要对图片进行懒加载，只需将`v-lazy`指令的值设置为你需要懒加载的图片。

:::demo 基础用法
```html
<ul class="image-list" ref="container">
  <li v-for="(img, index) in imageList" :key="index">
    <img class="lazy-img" v-lazy="img">
  </li>
</ul>

<script>
export default {
  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/upload_files/2016/01/27/Fo2dFWjXYzWDR9Jaa1AEqk1jt7e0',
        'https://img.yzcdn.cn/upload_files/2016/01/27/FkyhiZfVE8tx-4qjxR2VeiqsSZYL',
        'https://img.yzcdn.cn/upload_files/2016/01/27/FpWD3kX18w8qjM6faH-4JqOWHsF4',
        'https://img.yzcdn.cn/upload_files/2016/09/08/9ff28d555e5760fa830344f12efa0087.jpg',
        'https://img.yzcdn.cn/upload_files/2016/11/13/FlZIeSgbSANSPkmUHttMjoIgY3cv.jpg',
        'https://img.yzcdn.cn/upload_files/2016/12/12/FuxgsGPRnupGu_eaMuaR8W0DuSKp.jpeg'
      ]
    };
  }
}
</script>
```
:::

#### 背景图懒加载

和图片懒加载不同的背景图懒加载需要使用`v-lazy:background-image`，值设置为背景图片的地址。还有一个需要注意的是你需要设置容器的样式，否则高度不会撑开。

:::demo 背景图懒加载
```html
<ul class="image-list" ref="container">
  <li v-for="(img, index) in backgroundImageList" :key="index">
    <div class="lazy-background" v-lazy:background-image="img"></div>
  </li>
</ul>

<script>
export default {
  data() {
    return {
      backgroundImageList: [
        'https://img.yzcdn.cn/upload_files/2016/01/27/Fo2dFWjXYzWDR9Jaa1AEqk1jt7e0',
        'https://img.yzcdn.cn/upload_files/2016/01/27/FkyhiZfVE8tx-4qjxR2VeiqsSZYL'
      ]
    };
  }
}
</script>
```
:::

#### 懒加载模块

懒加载模块需要使用到`lazy-component`，将需要懒加载的内容放在`lazy-component`中即可。

:::demo 懒加载模块
```html
<lazy-component @show="handleComponentShow">
  <ul class="image-list">
    <li v-for="(img, index) in componentImageList" :key="index">
      <img class="lazy-img" v-lazy="img">
    </li>
  </ul>
</lazy-component>

<script>
export default {
  data() {
    return {
      componentImageList: [
        'https://img.yzcdn.cn/upload_files/2017/03/09/FvkZahKoq1vkxLQFdVWeLf2UCqDz.png',
        'https://img.yzcdn.cn/upload_files/2017/03/09/Fk0rpe_svu9d5Xk3MUCWd1QeMXOu.png'
      ]
    };
  },

  methods: {
    handleComponentShow() {
      console.log('component show');
    }
  }
}
</script>
```
:::

### Options

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| loading | 加载时的图片 | `string`  |  |   |
| error | 错误时的图片 | `string`  |  |   |
| preload | 预加载高度的比例 | `string`  |  |   |
| attempt | 尝试次数 | `number`  | `3` |   |
| listenEvents | 监听的事件 | `Array`  | `['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove']` |   |
| adapter | 适配器 | `Object`  |  |   |
| filter | 图片url过滤 | `Object`  |  |   |
| lazyComponent | 是否能懒加载模块 | `boolean`  | `false` |   |
