# Timer 计时器

### 介绍

用于实时展示正向计时数值，支持毫秒精度。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Timer } from 'vant';

const app = createApp();
app.use(Timer);
```

## 代码演示

### 基础用法

```html
<van-timer />
```

### 自定义格式

通过 `format` 属性设置计时文本的内容。

```html
<van-timer format="DD 天 HH 时 mm 分 ss 秒" />
```

### 毫秒级渲染

计时默认每秒渲染一次，设置 `millisecond` 属性可以开启毫秒级渲染。

```html
<van-timer millisecond format="HH:mm:ss:SS" />
```

### 限时计时

设置 `max-time` 后，到达上限会停止并触发 `finish`。

```html
<van-timer :time="0" :max-time="5000" @finish="onFinish" />
```

```js
import { showToast } from 'vant';

const onFinish = () => showToast('计时结束');
```

### 自定义样式

通过插槽自定义计时样式，`timeData` 对象格式见下方表格。

```html
<van-timer>
  <template #default="timeData">
    <span class="block">{{ timeData.hours }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.minutes }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.seconds }}</span>
  </template>
</van-timer>

<style>
  .colon {
    display: inline-block;
    margin: 0 4px;
    color: #1989fa;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #1989fa;
  }
</style>
```

### 手动控制

通过 ref 获取到组件实例后，可以调用 `start`、`pause`、`reset` 方法。

```html
<van-timer
  ref="timer"
  millisecond
  :auto-start="false"
  format="ss:SSS"
  @finish="onFinish"
/>
<van-grid clickable>
  <van-grid-item text="开始" icon="play-circle-o" @click="start" />
  <van-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
  <van-grid-item text="重置" icon="replay" @click="reset" />
</van-grid>
```

```js
import { showToast } from 'vant';

export default {
  setup() {
    const timer = ref(null);

    const start = () => {
      timer.value.start();
    };
    const pause = () => {
      timer.value.pause();
    };
    const reset = () => {
      timer.value.reset();
    };
    const onFinish = () => showToast('计时结束');

    return {
      start,
      pause,
      reset,
      onFinish,
      timer,
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| time | 初始时间，单位毫秒 | _number \| string_ | `0` |
| max-time | 最大时间，单位毫秒；`0` 表示不限制 | _number \| string_ | `0` |
| format | 时间格式 | _string_ | `HH:mm:ss` |
| auto-start | 是否自动开始计时 | _boolean_ | `true` |
| millisecond | 是否开启毫秒级渲染 | _boolean_ | `false` |

### format 格式

| 格式 | 说明         |
| ---- | ------------ |
| DD   | 天数         |
| HH   | 小时         |
| mm   | 分钟         |
| ss   | 秒数         |
| S    | 毫秒（1 位） |
| SS   | 毫秒（2 位） |
| SSS  | 毫秒（3 位） |

### Events

| 事件名 | 说明                 | 回调参数                   |
| ------ | -------------------- | -------------------------- |
| finish | 到达 max-time 时触发 | -                          |
| change | 计时变化时触发       | _currentTime: CurrentTime_ |

### Slots

| 名称    | 说明       | 参数                       |
| ------- | ---------- | -------------------------- |
| default | 自定义内容 | _currentTime: CurrentTime_ |

### CurrentTime 格式

| 名称         | 说明                   | 类型     |
| ------------ | ---------------------- | -------- |
| total        | 已计总时间（单位毫秒） | _number_ |
| days         | 天数                   | _number_ |
| hours        | 小时                   | _number_ |
| minutes      | 分钟                   | _number_ |
| seconds      | 秒数                   | _number_ |
| milliseconds | 毫秒                   | _number_ |

### 方法

通过 ref 可以获取到 Timer 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| start | 开始计时 | - | - |
| pause | 暂停计时 | - | - |
| reset | 重设计时，若 `auto-start` 为 `true`，重设后会自动开始计时 | - | - |

### 类型定义

组件导出以下类型定义：

```ts
import type { TimerProps, TimerInstance, TimerCurrentTime } from 'vant';
```

`TimerInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { TimerInstance } from 'vant';

const timerRef = ref<TimerInstance>();

timerRef.value?.start();
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                    | 默认值                      | 描述 |
| ----------------------- | --------------------------- | ---- |
| --van-timer-text-color  | _var(--van-text-color)_     | -    |
| --van-timer-font-size   | _var(--van-font-size-md)_   | -    |
| --van-timer-line-height | _var(--van-line-height-md)_ | -    |
