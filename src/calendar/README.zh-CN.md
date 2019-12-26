# Calendar 日历

### 介绍

日历组件用于选择日期或日期区间

### 引入

``` javascript
import Vue from 'vue';
import { Calendar } from 'vant';

Vue.use(Calendar);
```

## 代码演示

### 选择单个日期

下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发`confirm`事件

```html
<van-cell title="选择单个日期" :value="date" @click="show = true" />

<van-calendar v-model="show" @confirm="onConfirm" />
```

```js
export default {
  data() {
    return {
      // 当前选中的日期
      date: '',
      show: false
    };
  },

  methods: {
    formatDate() {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    }
  }
}
```

### 选择日期区间

设置`type`为`range`后可以选择日期区间，此时`confirm`事件返回的 date 为数组结构，数组第一项为开始时间，第二项为结束时间。

```html
<van-cell title="选择日期区间" :value="date" @click="show = true" />

<van-calendar v-model="show" type="range" @confirm="onConfirm" />
```

```js
export default {
  data() {
    return {
      show: false,
      date: []
    };
  },
  methods: {
    onConfirm(date) {
      this.show = false;
      this.date = date;
    }
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 是否显示日历弹窗 | *boolean* | `false` | - |
| type | 选择类型，`single`表示选择单个日期，<br>`range`表示选择日期区间 | *string* | `single` | - |
| title | 日历标题 | *string* | `日期选择` | - |
| min-date | 最小日期 | *Date*  | 当前日期 | - |
| max-date | 最大日期 | *Date*  | 当前日期的六个月后 | - |
| default-date | 默认选中的日期 | *Date \| Date[]* | 今天 | - |
| row-height | 日期所在行的高度 | *number* | `64` | - |
| poppable | 是否以弹层的形式展示日历 | *boolean* | `true` | - |
| show-mark | 是否显示月份背景水印 | *boolean* | `true` | - |
| show-confirm | 是否展示确认按钮 | *boolean* | `false` | - |
| safe-area-inset-bottom | 是否开启底部安全区适配，[详细说明](#/zh-CN/quickstart#di-bu-an-quan-qu-gua-pei) | *boolean* | `true` | - |
| confirm-text | 确认按钮的文字 | *string* | `确定` | - |
| confirm-disabled-text | 确认按钮处于禁用状态时的文字 | *string* | `确定` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| select | 点击任意日期时触发 | value: Date \| Date[] |
| confirm | 日期选择完成后触发，若`show-confirm`为`true`，则点击确认按钮后触发 | value: Date \| Date[] |

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题 |
| footer | 自定义底部区域内容 |

### 方法

通过 [ref](https://cn.vuejs.org/v2/api/#ref) 可以获取到 Calendar 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
