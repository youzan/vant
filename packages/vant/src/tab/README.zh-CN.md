# Tab 标签页

### 介绍

选项卡组件，用于在不同的内容区域之间进行切换。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Tab, Tabs } from 'vant';

const app = createApp();
app.use(Tab);
app.use(Tabs);
```

## 代码演示

### 基础用法

通过 `v-model:active` 绑定当前激活标签对应的索引值，默认情况下启用第一个标签。

```html
<van-tabs v-model:active="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};
```

### 通过名称匹配

在标签指定 `name` 属性的情况下，`v-model:active` 的值为当前标签的 `name`（此时无法通过索引值来匹配标签）。

```html
<van-tabs v-model:active="activeName">
  <van-tab title="标签 1" name="a">内容 1</van-tab>
  <van-tab title="标签 2" name="b">内容 2</van-tab>
  <van-tab title="标签 3" name="c">内容 3</van-tab>
</van-tabs>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const activeName = ref('b');
    return { activeName };
  },
};
```

### 标签栏滚动

标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。

```html
<van-tabs v-model:active="active">
  <van-tab v-for="index in 8" :title="'标签 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

### 禁用标签

设置 `disabled` 属性即可禁用标签。

```html
<van-tabs v-model:active="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2" disabled>内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
</van-tabs>
```

### 样式风格

`Tab` 支持两种样式风格：`line` 和`card`，默认为 `line` 样式，可以通过 `type` 属性切换样式风格。

```html
<van-tabs v-model:active="active" type="card">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
</van-tabs>
```

### 点击事件

点击标签页时，会触发 `click-tab` 事件。

```html
<van-tabs v-model:active="active" @click-tab="onClickTab">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
</van-tabs>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const active = ref(0);
    const onClickTab = ({ title }) => showToast(title);
    return {
      active,
      onClickTab,
    };
  },
};
```

### 粘性布局

通过 `sticky` 属性可以开启粘性布局，粘性布局下，标签页滚动到顶部时会自动吸顶。

```html
<van-tabs v-model:active="active" sticky>
  <van-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

> Tips: 如果页面顶部有其他内容，可以通过 offset-top 属性设置吸顶时与顶部的距离。

### 收缩布局

通过 `shrink` 属性可以开启收缩布局，开启后，所有的标签会向左侧收缩对齐。

```html
<van-tabs v-model:active="active" shrink>
  <van-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

### 自定义标签

通过 `title` 插槽可以自定义标签内容。

```html
<van-tabs v-model:active="active">
  <van-tab v-for="index in 2">
    <template #title> <van-icon name="more-o" />选项 </template>
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

### 切换动画

通过 `animated` 属性可以开启切换标签内容时的转场动画。

```html
<van-tabs v-model:active="active" animated>
  <van-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

### 滑动切换

通过 `swipeable` 属性可以开启滑动切换标签页。

```html
<van-tabs v-model:active="active" swipeable>
  <van-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

### 滚动导航

通过 `scrollspy` 属性可以开启滚动导航模式，该模式下，内容将会平铺展示。

```html
<van-tabs v-model:active="active" scrollspy sticky>
  <van-tab v-for="index in 8" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

### 异步切换

通过 `before-change` 属性可以在切换标签前执行特定的逻辑。

```html
<van-tabs v-model:active="active" :before-change="beforeChange">
  <van-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    const beforeChange = (index) => {
      // 返回 false 表示阻止此次切换
      if (index === 1) {
        return false;
      }

      // 返回 Promise 来执行异步逻辑
      return new Promise((resolve) => {
        // 在 resolve 函数中返回 true 或 false
        resolve(index !== 3);
      });
    };

    return {
      beforeChange,
    };
  },
};
```

> Tips: 通过手势滑动不会触发 before-change 属性。

### 隐藏标题栏

通过将 `showHeader` 属性设置为 `false`，可以不渲染 Tabs 的标题栏。在这种情况下，你可以通过一些自定义组件来控制 Tabs 的 `active` 属性。

```html
<van-tabs v-model:active="active" :show-header="false">
  <van-tab v-for="index in 4"> 内容 {{ index }} </van-tab>
</van-tabs>
```

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:active | 绑定当前选中标签的标识符 | _number \| string_ | `0` |
| type | 样式风格类型，可选值为 `card` | _string_ | `line` |
| color | 标签主题色 | _string_ | `#1989fa` |
| background | 标签栏背景色 | _string_ | `white` |
| duration | 动画时间，单位秒，设置为 0 可以禁用动画 | _number \| string_ | `0.3` |
| line-width | 底部条宽度，默认单位 `px` | _number \| string_ | `40px` |
| line-height | 底部条高度，默认单位 `px` | _number \| string_ | `3px` |
| animated | 是否开启切换标签内容时的转场动画 | _boolean_ | `false` |
| border | 是否显示标签栏外边框，仅在 `type="line"` 时有效 | _boolean_ | `false` |
| ellipsis | 是否省略过长的标题文字 | _boolean_ | `true` |
| sticky | 是否使用粘性布局 | _boolean_ | `false` |
| shrink | 是否开启左侧收缩布局 | _boolean_ | `false` |
| swipeable | 是否开启手势左右滑动切换 | _boolean_ | `false` |
| lazy-render | 是否开启延迟渲染（首次切换到标签时才触发内容渲染） | _boolean_ | `true` |
| scrollspy | 是否开启滚动导航 | _boolean_ | `false` |
| show-header `v4.7.3` | 是否显示标题栏 | _boolean_ | `true` |
| offset-top | 粘性布局下吸顶时与顶部的距离，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `0` |
| swipe-threshold | 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 | _number \| string_ | `5` |
| title-active-color | 标题选中态颜色 | _string_ | - |
| title-inactive-color | 标题默认态颜色 | _string_ | - |
| before-change | 切换标签前的回调函数，返回 `false` 可阻止切换，支持返回 Promise | _(name: number \| string) => boolean \| Promise\<boolean\>_ | - |

### Tab Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | - |
| disabled | 是否禁用标签 | _boolean_ | `false` |
| dot | 是否在标题右上角显示小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| name | 标签名称，作为匹配的标识符 | _number \| string_ | 标签的索引值 |
| url | 点击后跳转的链接地址 | _string_ | - |
| to | 点击后跳转的目标路由对象，等同于 Vue Router 的 [to 属性](https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to) | _string \| object_ | - |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |
| title-style | 自定义标题样式 | _string \| Array \| object_ | - |
| title-class | 自定义标题类名 | _string \| Array \| object_ | - |
| show-zero-badge | 当 badge 为数字 0 时，是否展示徽标 | _boolean_ | `true` |

### Tabs Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click-tab | 点击标签时触发 | _{ name: string \| number, title: string, event: MouseEvent, disabled: boolean }_ |
| change | 当前激活的标签改变时触发 | _name: string \| number, title: string_ |
| rendered | 标签内容首次渲染时触发（仅在开启延迟渲染后触发） | _name: string \| number, title: string_ |
| scroll | 滚动时触发，仅在 sticky 模式下生效 | _{ scrollTop: number, isFixed: boolean }_ |

> 提示：click 和 disabled 事件已废弃，请使用 click-tab 事件代替。

### Tabs 方法

通过 ref 可以获取到 Tabs 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| resize | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 | - | - |
| scrollTo | 滚动到指定的标签页，在滚动导航模式下可用 | _name: string \| number_ | - |

### 类型定义

组件导出以下类型定义：

```ts
import type { TabProps, TabsType, TabsProps, TabsInstance } from 'vant';
```

`TabsInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { TabsInstance } from 'vant';

const tabsRef = ref<TabsInstance>();

tabsRef.value?.scrollTo(0);
```

### Tabs Slots

| 名称       | 说明           |
| ---------- | -------------- |
| nav-left   | 标签栏左侧内容 |
| nav-right  | 标签栏右侧内容 |
| nav-bottom | 标签栏下方内容 |

### Tab Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 标签页内容 |
| title   | 自定义标题 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                          | 默认值                      | 描述 |
| ----------------------------- | --------------------------- | ---- |
| --van-tab-text-color          | _var(--van-gray-7)_         | -    |
| --van-tab-active-text-color   | _var(--van-text-color)_     | -    |
| --van-tab-disabled-text-color | _var(--van-text-color-3)_   | -    |
| --van-tab-font-size           | _var(--van-font-size-md)_   | -    |
| --van-tab-line-height         | _var(--van-line-height-md)_ | -    |
| --van-tabs-default-color      | _var(--van-primary-color)_  | -    |
| --van-tabs-line-height        | _44px_                      | -    |
| --van-tabs-card-height        | _30px_                      | -    |
| --van-tabs-nav-background     | _var(--van-background-2)_   | -    |
| --van-tabs-bottom-bar-width   | _40px_                      | -    |
| --van-tabs-bottom-bar-height  | _3px_                       | -    |
| --van-tabs-bottom-bar-color   | _var(--van-primary-color)_  | -    |

## 常见问题

### 组件从隐藏状态切换到显示状态时，底部条位置错误？

Tabs 组件在挂载时，会获取自身的宽度，并计算出底部条的位置。如果组件一开始处于隐藏状态，则获取到的宽度永远为 0，因此无法展示底部条位置。

#### 解决方法

方法一，如果是使用 `v-show` 来控制组件展示的，则替换为 `v-if` 即可解决此问题：

```html
<!-- Before -->
<van-tabs v-show="show" />
<!-- After -->
<van-tabs v-if="show" />
```

方法二，调用组件的 resize 方法来主动触发重绘：

```html
<van-tabs v-show="show" ref="tabs" />
```

```js
this.$refs.tabs.resize();
```
