# CountDown 倒计时

### 引入

``` javascript
import { CountDown } from 'vant';

Vue.use(CountDown);
```

## 代码演示

### 基本用法

```html
<van-count-down :time="time" />
```

```js
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  }
}
```

### 自定义格式

```html
<van-count-down
  :time="time"
  format="DD 天 HH 时 mm 分 ss 秒"
/>
```

### 毫秒级精度

```html
<van-count-down
  millisecond
  :time="time"
  format="HH:mm:ss:SSS"
/>
```

### 自定义样式

```html
<van-count-down :time="time">
  <template v-slot="currentTime">
    <span class="item">{{ currentTime.hours }}</span>
    <span class="item">{{ currentTime.minutes }}</span>
    <span class="item">{{ currentTime.seconds }}</span>
  </template>
</van-count-down>

<style>
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
</style>
```

### 手动控制

```html
<van-count-down
  ref="countDown"
  millisecond
  :time="3000"
  :auto-start="false"
  format="ss:SSS"
  @finish="finished"
/>
<van-grid clickable>
  <van-grid-item text="开始" icon="play-circle-o" @click="start" />
  <van-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
  <van-grid-item text="重置" icon="replay" @click="reset" />
</van-grid>
```

```js
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
      this.$toast('倒计时结束');
    }
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| time | 倒计时时长，单位毫秒 | `Number` | - | - |
| format | 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒 | `String` | `HH:mm:ss` | - |
| auto-start | 是否自动开始倒计时 | `Boolean` | `true` | - |
| millisecond | 是否使用毫秒级精度 | `Boolean` | `false` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| finish | 倒计时结束时触发 | - |

### 方法

通过 ref 可以获取到 CountDown 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| start | - | - | 开始倒计时 |
| pause | - | - | 暂停倒计时 |
| reset | - | - | 重设倒计时，若设置了`auto-start`，重设后会自动开始 |
