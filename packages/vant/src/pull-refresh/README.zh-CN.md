# PullRefresh 下拉刷新

### 介绍

用于提供下拉刷新的交互操作。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { PullRefresh } from 'vant';

const app = createApp();
app.use(PullRefresh);
```

## 代码演示

### 基础用法

下拉刷新时会触发 `refresh` 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 `v-model` 设置为 `false`，表示加载完成。

```html
<van-pull-refresh v-model="loading" @refresh="onRefresh">
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const count = ref(0);
    const loading = ref(false);
    const onRefresh = () => {
      setTimeout(() => {
        showToast('刷新成功');
        loading.value = false;
        count.value++;
      }, 1000);
    };

    return {
      count,
      loading,
      onRefresh,
    };
  },
};
```

### 成功提示

通过 `success-text` 可以设置刷新成功后的顶部提示文案。

```html
<van-pull-refresh
  v-model="isLoading"
  success-text="刷新成功"
  @refresh="onRefresh"
>
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>
```

### 自定义提示

通过插槽可以自定义下拉刷新过程中的提示内容。

```html
<van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
  <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
  <template #pulling="props">
    <img
      class="doge"
      src="https://fastly.jsdelivr.net/npm/@vant/assets/doge.png"
      :style="{ transform: `scale(${props.distance / 80})` }"
    />
  </template>

  <!-- 释放提示 -->
  <template #loosing>
    <img
      class="doge"
      src="https://fastly.jsdelivr.net/npm/@vant/assets/doge.png"
    />
  </template>

  <!-- 加载提示 -->
  <template #loading>
    <img
      class="doge"
      src="https://fastly.jsdelivr.net/npm/@vant/assets/doge-fire.jpeg"
    />
  </template>
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>

<style>
  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 是否处于加载中状态 | _boolean_ | - |
| pulling-text | 下拉过程提示文案 | _string_ | `下拉即可刷新...` |
| loosing-text | 释放过程提示文案 | _string_ | `释放即可刷新...` |
| loading-text | 加载过程提示文案 | _string_ | `加载中...` |
| success-text | 刷新成功提示文案 | _string_ | - |
| success-duration | 刷新成功提示展示时长(ms) | _number \| string_ | `500` |
| animation-duration | 动画时长 | _number \| string_ | `300` |
| head-height | 顶部内容高度 | _number \| string_ | `50` |
| pull-distance | 触发下拉刷新的距离 | _number \| string_ | 与 `head-height` 一致 |
| disabled | 是否禁用下拉刷新 | _boolean_ | `false` |

### Events

| 事件名  | 说明                   | 回调参数                               |
| ------- | ---------------------- | -------------------------------------- |
| refresh | 下拉刷新时触发         | -                                      |
| change  | 拖动时或状态改变时触发 | _{ status: string, distance: number }_ |

### Slots

| 名称    | 说明                 | 参数                   |
| ------- | -------------------- | ---------------------- |
| default | 自定义内容           | -                      |
| normal  | 非下拉状态时顶部内容 | -                      |
| pulling | 下拉过程中顶部内容   | _{ distance: number }_ |
| loosing | 释放过程中顶部内容   | _{ distance: number }_ |
| loading | 加载过程中顶部内容   | _{ distance: number }_ |
| success | 刷新成功提示内容     | -                      |

### 类型定义

组件导出以下类型定义：

```ts
import type { PullRefreshProps } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                 | 默认值                    | 描述 |
| ------------------------------------ | ------------------------- | ---- |
| --van-pull-refresh-head-height       | _50px_                    | -    |
| --van-pull-refresh-head-font-size    | _var(--van-font-size-md)_ | -    |
| --van-pull-refresh-head-text-color   | _var(--van-text-color-2)_ | -    |
| --van-pull-refresh-loading-icon-size | _16px_                    | -    |

## 常见问题

### PullRefresh 的内容未填满屏幕时，只有一部分区域可以下拉？

默认情况下，下拉区域的高度是和内容高度保持一致的，如果需要让下拉区域始终为全屏，可以给 PullRefresh 设置一个与屏幕大小相等的最小高度：

```html
<van-pull-refresh style="min-height: 100vh;" />
```

### PullRefresh 的触发条件是？

PullRefresh 的触发条件是「父级滚动元素的滚动条在顶部位置」。

- 如果最近一个可滚动的父级元素是 `window`，则要求 `window.pageYOffset === 0`。
- 如果最近一个可滚动的父级元素是 `Element`，则要求 `Element.scrollTop === 0`。

### 在桌面端无法操作组件？

参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。
