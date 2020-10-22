# Swipe 轮播

### 介绍

用于循环播放一组图片或内容。

### 引入

```js
import { createApp } from 'vue';
import { Swipe, SwipeItem } from 'vant';

const app = createApp();
app.use(Swipe);
app.use(SwipeItem);
```

## 代码演示

### 基础用法

每个 SwipeItem 代表一张轮播卡片，可以通过 `autoplay` 属性设置自动轮播的间隔。

```html
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
```

### 图片懒加载

当 Swipe 中含有图片时，可以配合 [Lazyload](#/zh-CN/lazyload) 组件实现图片懒加载。

```html
<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
```

```js
import { createApp } from 'vue';
import { Lazyload } from 'vant';

const app = createApp();
app.use(Lazyload);

export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
};
```

### 监听 change 事件

```html
<van-swipe @change="onChange">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
```

```js
import { Toast } from 'vant';

export default {
  methods: {
    onChange(index) {
      Toast('当前 Swipe 索引：' + index);
    },
  },
};
```

### 纵向滚动

设置 `vertical` 属性后滑块会纵向排列，此时需要指定滑块容器的高度。

```html
<van-swipe style="height: 200px;" vertical>
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
```

### 自定义滑块大小

滑块默认宽度为 `100%`，可以通过 `width` 属性设置单个滑块的宽度。纵向滚动模式下，可以通过 `height` 属性设置单个滑块的高度。

```html
<van-swipe :loop="false" :width="300">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
```

> 目前不支持在循环滚动模式下自定义滑块大小，因此需要将 loop 设置为 false。

### 自定义指示器

通过 `indicator` 插槽可以自定义指示器的样式。

```html
<van-swipe @change="onChange">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
  <template #indicator>
    <div class="custom-indicator">
      {{ current + 1 }}/4
    </div>
  </template>
</van-swipe>

<style>
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
</style>
```

```js
export default {
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
```

## API

### Swipe Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplay | 自动轮播间隔，单位为 ms | _number \| string_ | - |
| duration | 动画时长，单位为 ms | _number \| string_ | `500` |
| initial-swipe | 初始位置索引值 | _number \| string_ | `0` |
| width | 滑块宽度，单位为`px` | _number \| string_ | `auto` |
| height | 滑块高度，单位为`px` | _number \| string_ | `auto` |
| loop | 是否开启循环播放 | _boolean_ | `true` |
| show-indicators | 是否显示指示器 | _boolean_ | `true` |
| vertical | 是否为纵向滚动 | _boolean_ | `false` |
| touchable | 是否可以通过手势滑动 | _boolean_ | `true` |
| stop-propagation | 是否阻止滑动事件冒泡 | _boolean_ | `true` |
| lazy-render `v2.5.8` | 是否延迟渲染未展示的轮播 | _boolean_ | `false` |
| indicator-color | 指示器颜色 | _string_ | `#1989fa` |

### Swipe Events

| 事件名 | 说明                 | 回调参数            |
| ------ | -------------------- | ------------------- |
| change | 每一页轮播结束后触发 | index, 当前页的索引 |

### SwipeItem Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| click  | 点击时触发 | _event: Event_ |

### Swipe 方法

通过 ref 可以获取到 Swipe 实例并调用实例方法，详见[组件实例方法](#/zh-CN/quickstart#zu-jian-shi-li-fang-fa)。。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| prev `v2.4.2` | 切换到上一轮播 | - | - |
| next `v2.4.2` | 切换到下一轮播 | - | - |
| swipeTo | 切换到指定位置 | index: number, options: Options | void |
| resize | 外层元素大小变化后，可以调用此方法来触发重绘 | - | void |

### swipeTo Options 格式

| 名称      | 说明         | 类型      |
| --------- | ------------ | --------- |
| immediate | 是否跳过动画 | _boolean_ |

### Swipe Slots

| 名称      | 说明         |
| --------- | ------------ |
| default   | 轮播内容     |
| indicator | 自定义指示器 |

## 常见问题

### 滑动轮播时为什么触发了 click 事件？

这种情况通常是由于项目中引入了`fastclick`库导致的。`fastclick`的原理是通过 Touch 事件模拟出 click 事件，而 Swipe 内部默认会阻止 touchmove 事件冒泡，干扰了 fastclick 的判断，导致出现这个问题。

将 Swipe 组件的 stop-propagation 属性设置为 false 即可避免该问题。

### 在桌面端无法操作组件？

参见[在桌面端使用](#/zh-CN/quickstart#zai-zhuo-mian-duan-shi-yong)。

### Swipe 组件功能太少，无法实现复杂效果？

Vant 中的 Swipe 组件是比较轻量的，因此功能也比较基础。如果需要更复杂的轮播效果，推荐使用社区里一些优质的轮播库，比如 [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)。
