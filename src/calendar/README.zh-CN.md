# Calendar 日历

### 介绍

日历组件用于选择日期或日期区间，可以与 [弹出层](#/zh-CN/popup)、[单元格](#/zh-CN/cell)、[输入框](#/zh-CN/field) 等组件配合使用

### 引入

``` javascript
import Vue from 'vue';
import { Calendar } from 'vant';

Vue.use(Calendar);
```

## 代码演示

### 选择单个日期

下面演示了结合单元格、弹出层来使用日历组件的用法。

```html
<!-- 点击单元格后唤起日历组件 -->
<van-cell
  title="选择单个日期"
  :value="formattedDate"
  @click="showCalendar = true"
/>

<!-- 使用弹出层组件作为日历的容器 -->
<van-popup
  v-model="showCalendar"
  round
  closeable
  position="bottom"
  style="height: 80vh;"
>
  <van-calendar v-model="currentDate" />
</van-popup>
```

```js
export default {
  data() {
    return {
      // 当前选中的日期
      currentDate: null,
      showCalendar: false
    };
  },

  computed: {
    // 将 Date 格式化为 YYYY/MM/DD 的格式
    formattedDate() {
      const date = this.currentDate;
      if (date) {
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      }
    }
  }
}
```

### 选择日期区间

设置`type`为`range`后可以选择日期区间，此时`v-model`绑定的 currrentDate 为数组结构，数组第一项为开始时间，第二项为结束时间。

```html
<van-calendar
  v-model="currentDate"
  type="range"
  @select="onSelect"
/>
```

```js
export default {
  data() {
    return {
      currrentDate: []
    };
  },

  methods: {
    onSelect(date) {
      console.log('开始时间: ' + date[0]);
      console.log('结束时间: ' + date[1]);
    }
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前选中的日期 | *Date* | - | - |
| type | 选择类型，`single`表示选择单个日期，<br>`range`表示选择日期区间 | *string* | `single` | - |
| title | 日历标题 | *string* | `日期选择` | - |
| min-date | 最小日期 | *Date*  | 当前日期 | - |
| max-date | 最大日期 | *Date*  | 当前日期的六个月后 | - |
| row-height | 日期所在行的高度 | *number* | `64` | - |
| button-text | 确认按钮的文字 | *string* | `确定` | - |
| button-disabled-text | 确认按钮处于禁用状态时的文字 | *string* | `确定` | - |
| show-mark | 是否显示月份背景水印 | *boolean* | `true` | - |
| safe-area-inset-bottom | 是否开启底部安全区适配，[详细说明](#/zh-CN/quickstart#di-bu-an-quan-qu-gua-pei) | *boolean* | `true` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| select | 确认选择日期时触发 | value: Date \| Date[] |

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题 |
| footer | 自定义底部区域内容 |

### 方法

通过 [ref](https://cn.vuejs.org/v2/api/#ref) 可以获取到 Calendar 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
