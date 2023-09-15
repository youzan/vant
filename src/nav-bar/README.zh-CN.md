# NavBar 导航栏

### 引入

```js
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);
```

## 代码演示

### 基础用法

```html
<van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
```

```js
import { Toast } from 'vant';

export default {
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
};
```

### 使用插槽

通过插槽自定义导航栏两侧的内容。

```html
<van-nav-bar title="标题" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | `''` |
| left-text | 左侧文案 | _string_ | `''` |
| right-text | 右侧文案 | _string_ | `''` |
| left-arrow | 是否显示左侧箭头 | _boolean_ | `false` |
| border | 是否显示下边框 | _boolean_ | `true` |
| fixed | 是否固定在顶部 | _boolean_ | `false` |
| placeholder `v2.5.9` | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | _boolean_ | `false` |
| z-index | 导航栏 z-index | _number \| string_ | `1` |
| safe-area-inset-top `v2.10.13` | 是否开启[顶部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `false` |

### Slots

| 名称  | 说明               |
| ----- | ------------------ |
| title | 自定义标题         |
| left  | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |

### Events

| 事件名      | 说明               | 回调参数 |
| ----------- | ------------------ | -------- |
| click-left  | 点击左侧按钮时触发 | -        |
| click-right | 点击右侧按钮时触发 | -        |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                      | 默认值          | 描述 |
| ------------------------- | --------------- | ---- |
| @nav-bar-height           | `46px`          | -    |
| @nav-bar-background-color | `@white`        | -    |
| @nav-bar-arrow-size       | `16px`          | -    |
| @nav-bar-icon-color       | `@blue`         | -    |
| @nav-bar-text-color       | `@blue`         | -    |
| @nav-bar-title-font-size  | `@font-size-lg` | -    |
| @nav-bar-title-text-color | `@text-color`   | -    |
| @nav-bar-z-index          | `1`             | -    |
