# CountDown 倒计时

### 引入

```js
import Vue from 'vue';
import { CountDown } from 'vant';

Vue.use(CountDown);
```

## 代码演示

### 基础用法

`time`属性表示倒计时总时长，单位为毫秒

```html
<van-count-down :time="time" />
```

```js
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
    };
  },
};
```

### 自定义格式

通过`format`属性设置倒计时文本的内容

```html
<van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
```

### 毫秒级渲染

倒计时默认每秒渲染一次，设置`millisecond`属性可以开启毫秒级渲染

```html
<van-count-down millisecond :time="time" format="HH:mm:ss:SS" />
```

### 自定义样式

通过插槽自定义倒计时的样式，`timeData`对象格式见下方表格

```html
<van-count-down :time="time">
  <template v-slot="timeData">
    <span class="block">{{ timeData.hours }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.minutes }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.seconds }}</span>
  </template>
</van-count-down>

<style>
  .colon {
    display: inline-block;
    margin: 0 4px;
    color: #ee0a24;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #ee0a24;
  }
</style>
```

### 手动控制

通过 ref 获取到组件实例后，可以调用`start`、`pause`、`reset`方法

```html
<van-count-down
  ref="countDown"
  millisecond
  :time="3000"
  :auto-start="false"
  format="ss:SSS"
  @finish="finish"
/>
<van-grid clickable>
  <van-grid-item text="开始" icon="play-circle-o" @click="start" />
  <van-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
  <van-grid-item text="重置" icon="replay" @click="reset" />
</van-grid>
```

```js
import { Toast } from 'vant';

export default {
  methods: {
    start() {
      this.$refs.countDown.start();
    },
    pause() {
      this.$refs.countDown.pause();
    },
    reset() {
      this.$refs.countDown.reset();
    },
    finish() {
      Toast('倒计时结束');
    },
  },
};
```

## API

### Props

| 参数        | 说明                 | 类型               | 默认值     |
| ----------- | -------------------- | ------------------ | ---------- |
| time        | 倒计时时长，单位毫秒 | _number \| string_ | `0`        |
| format      | 时间格式             | _string_           | `HH:mm:ss` |
| auto-start  | 是否自动开始倒计时   | _boolean_          | `true`     |
| millisecond | 是否开启毫秒级渲染   | _boolean_          | `false`    |

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

| 事件名          | 说明             | 回调参数             |
| --------------- | ---------------- | -------------------- |
| finish          | 倒计时结束时触发 | -                    |
| change `v2.4.4` | 倒计时变化时触发 | _timeData: TimeData_ |

### Slots

| 名称    | 说明       | SlotProps            |
| ------- | ---------- | -------------------- |
| default | 自定义内容 | _timeData: TimeData_ |

### TimeData 格式

| 名称         | 说明     | 类型     |
| ------------ | -------- | -------- |
| days         | 剩余天数 | _number_ |
| hours        | 剩余小时 | _number_ |
| minutes      | 剩余分钟 | _number_ |
| seconds      | 剩余秒数 | _number_ |
| milliseconds | 剩余毫秒 | _number_ |

### 方法

通过 ref 可以获取到 CountDown 实例并调用实例方法，详见[组件实例方法](#/zh-CN/quickstart#zu-jian-shi-li-fang-fa)

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| start | 开始倒计时 | - | - |
| pause | 暂停倒计时 | - | - |
| reset | 重设倒计时，若`auto-start`为`true`，重设后会自动开始倒计时 | - | - |

## 常见问题

### 在 iOS 系统上倒计时不生效？

如果你遇到了在 iOS 上倒计时不生效的问题，请确认在创建 Date 对象时没有使用`new Date('2020-01-01')`这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是`new Date('2020/01/01')`。

对此问题的详细解释：[stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。
