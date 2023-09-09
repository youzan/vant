# NavBar 导航栏

### 介绍

为页面提供导航功能，常用于页面顶部。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { NavBar } from 'vant';

const app = createApp();
app.use(NavBar);
```

## 代码演示

### 基础用法

通过 `title` 属性设置导航栏标题。

```html
<van-nav-bar title="标题" />
```

### 返回上级

在导航栏实现返回上级功能。

```html
<van-nav-bar
  title="标题"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
```

```js
export default {
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
};
```

### 右侧按钮

在导航栏右侧添加可点击的按钮。

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
import { showToast } from 'vant';

export default {
  setup() {
    const onClickLeft = () => history.back();
    const onClickRight = () => showToast('按钮');
    return {
      onClickLeft,
      onClickRight,
    };
  },
};
```

### 使用插槽

可以通过插槽自定义导航栏两侧的内容。

```html
<van-nav-bar title="标题" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>
```

### 禁用按钮

通过 `left-disabled` 或 `right-disabled` 属性来禁用两侧的按钮。按钮被禁用时透明度降低，且无法点击。

```html
<van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  left-disabled
  right-disabled
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | `''` |
| left-text | 左侧文案 | _string_ | `''` |
| right-text | 右侧文案 | _string_ | `''` |
| left-disabled `v4.6.8` | 是否禁用左侧按钮，禁用时透明度降低，且无法点击 | _boolean_ | `false` |
| right-disabled `v4.6.8` | 是否禁用右侧按钮，禁用时透明度降低，且无法点击 | _boolean_ | `false` |
| left-arrow | 是否显示左侧箭头 | _boolean_ | `false` |
| border | 是否显示下边框 | _boolean_ | `true` |
| fixed | 是否固定在顶部 | _boolean_ | `false` |
| placeholder | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | _boolean_ | `false` |
| z-index | 导航栏 z-index | _number \| string_ | `1` |
| safe-area-inset-top | 是否开启[顶部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `false` |
| clickable | 是否开启两侧按钮的点击反馈 | _boolean_ | `true` |

### Slots

| 名称  | 说明               |
| ----- | ------------------ |
| title | 自定义标题         |
| left  | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |

### Events

| 事件名      | 说明               | 回调参数            |
| ----------- | ------------------ | ------------------- |
| click-left  | 点击左侧按钮时触发 | _event: MouseEvent_ |
| click-right | 点击右侧按钮时触发 | _event: MouseEvent_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { NavBarProps } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                           | 默认值                     | 描述 |
| ------------------------------ | -------------------------- | ---- |
| --van-nav-bar-height           | _46px_                     | -    |
| --van-nav-bar-background       | _var(--van-background-2)_  | -    |
| --van-nav-bar-arrow-size       | _16px_                     | -    |
| --van-nav-bar-icon-color       | _var(--van-primary-color)_ | -    |
| --van-nav-bar-text-color       | _var(--van-primary-color)_ | -    |
| --van-nav-bar-title-font-size  | _var(--van-font-size-lg)_  | -    |
| --van-nav-bar-title-text-color | _var(--van-text-color)_    | -    |
| --van-nav-bar-z-index          | _1_                        | -    |
