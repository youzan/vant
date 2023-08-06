# List 列表

### 介绍

瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { List } from 'vant';

const app = createApp();
app.use(List);
```

## 代码演示

### 基础用法

List 组件通过 `loading` 和 `finished` 两个变量控制加载状态，当组件滚动到底部时，会触发 `load` 事件并将 `loading` 设置成 `true`。此时可以发起异步操作并更新数据，数据更新完毕后，将 `loading` 设置成 `false` 即可。若数据已全部加载完毕，则直接将 `finished` 设置成 `true` 即可。

```html
<van-list
  v-model:loading="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1);
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };

    return {
      list,
      onLoad,
      loading,
      finished,
    };
  },
};
```

### 错误提示

若列表数据加载失败，将 `error` 设置成 `true` 即可显示错误提示，用户点击错误提示后会重新触发 load 事件。

```html
<van-list
  v-model:loading="loading"
  v-model:error="error"
  error-text="请求失败，点击重新加载"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const list = ref([]);
    const error = ref(false);
    const loading = ref(false);
    const onLoad = () => {
      fetchSomeThing().catch(() => {
        error.value = true;
      });
    };

    return {
      list,
      error,
      onLoad,
      loading,
    };
  },
};
```

### 下拉刷新

List 组件可以与 [PullRefresh](#/zh-CN/pull-refresh) 组件结合使用，实现下拉刷新的效果。

```html
<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item" :title="item" />
  </van-list>
</van-pull-refresh>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);

    const onLoad = () => {
      setTimeout(() => {
        if (refreshing.value) {
          list.value = [];
          refreshing.value = false;
        }

        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1);
        }
        loading.value = false;

        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };

    const onRefresh = () => {
      // 清空列表数据
      finished.value = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      loading.value = true;
      onLoad();
    };

    return {
      list,
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing,
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:loading | 是否处于加载状态，加载过程中不触发 `load` 事件 | _boolean_ | `false` |
| v-model:error | 是否加载失败，加载失败后点击错误提示可以重新触发 `load` 事件 | _boolean_ | `false` |
| finished | 是否已加载完成，加载完成后不再触发 `load` 事件 | _boolean_ | `false` |
| offset | 滚动条与底部距离小于 offset 时触发 `load` 事件 | _number \| string_ | `300` |
| loading-text | 加载过程中的提示文案 | _string_ | `加载中...` |
| finished-text | 加载完成后的提示文案 | _string_ | - |
| error-text | 加载失败后的提示文案 | _string_ | - |
| immediate-check | 是否在初始化时立即执行滚动位置检查 | _boolean_ | `true` |
| disabled | 是否禁用滚动加载 | _boolean_ | `false` |
| direction | 滚动触发加载的方向，可选值为 `up` | _string_ | `down` |
| scroller `v4.6.4` | 指定需要监听滚动事件的节点，默认为最近的父级滚动节点 | _Element_ | - |

### Events

| 事件名 | 说明                               | 回调参数 |
| ------ | ---------------------------------- | -------- |
| load   | 滚动条与底部距离小于 offset 时触发 | -        |

### 方法

通过 ref 可以获取到 List 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| check | 检查当前的滚动位置，若已滚动至底部，则会触发 load 事件 | - | - |

### 类型定义

组件导出以下类型定义：

```ts
import type { ListProps, ListInstance, ListDirection } from 'vant';
```

`ListInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { ListInstance } from 'vant';

const listRef = ref<ListInstance>();

listRef.value?.check();
```

### Slots

| 名称     | 说明                       |
| -------- | -------------------------- |
| default  | 列表内容                   |
| loading  | 自定义底部加载中提示       |
| finished | 自定义加载完成后的提示文案 |
| error    | 自定义加载失败后的提示文案 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                         | 默认值                    | 描述 |
| ---------------------------- | ------------------------- | ---- |
| --van-list-text-color        | _var(--van-text-color-2)_ | -    |
| --van-list-text-font-size    | _var(--van-font-size-md)_ | -    |
| --van-list-text-line-height  | _50px_                    | -    |
| --van-list-loading-icon-size | _16px_                    | -    |

## 常见问题

### List 的运行机制是什么？

List 会监听浏览器的滚动事件并计算列表的位置，当列表底部与可视区域的距离小于 `offset` 时，List 会触发一次 `load` 事件。

### 为什么 List 初始化后会立即触发 load 事件？

List 初始化后会触发一次 load 事件，用于加载第一屏的数据，这个特性可以通过 `immediate-check` 属性关闭。

### 为什么会连续触发 load 事件？

如果一次请求加载的数据条数较少，导致列表内容无法铺满当前屏幕，List 会继续触发 `load` 事件，直到内容铺满屏幕或数据全部加载完成。

因此你需要调整每次获取的数据条数，理想情况下每次请求获取的数据条数应能够填满一屏高度。

### loading 和 finished 分别是什么含义？

`List` 有以下三种状态，理解这些状态有助于你正确地使用 `List` 组件：

- 非加载中，`loading` 为 `false`，此时会根据列表滚动位置判断是否触发 `load` 事件（列表内容不足一屏幕时，会直接触发）。
- 加载中，`loading` 为 `true`，表示正在发送异步请求，此时不会触发 `load` 事件。
- 加载完成，`finished` 为 `true`，此时不会触发 `load` 事件。

在每次请求完毕后，需要手动将 `loading` 设置为 `false`，表示加载结束。

### 使用 float 布局后一直触发加载？

若 List 的内容使用了 float 布局，可以在容器上添加 `van-clearfix` 类名来清除浮动，使得 List 能正确判断元素位置。

```html
<van-list>
  <div class="van-clearfix">
    <div class="float-item" />
    <div class="float-item" />
    <div class="float-item" />
  </div>
</van-list>
```

### 在 html、body 上设置 overflow 后一直触发加载？

如果在 html 和 body 标签上设置了 `overflow-x: hidden` 样式，会导致 List 一直触发加载。

```css
html,
body {
  overflow-x: hidden;
}
```

这个问题的原因是当元素设置了 `overflow-x: hidden` 样式时，该元素的 `overflow-y` 会被浏览器设置为 `auto`，而不是默认值 `visible`，导致 List 无法正确地判断滚动容器。解决方法是去除该样式，或者在 html 和 body 标签上添加 `height: 100%` 样式。

### direction 属性设置为 up 后一直触发加载？

设置 `direction` 属性为 up 后，当滚动条处于页面顶部时，就会触发 List 组件的加载。

因此在使用该属性时，建议在每次数据加载完成后，将滚动条滚动至页面底部或非顶部的位置。
