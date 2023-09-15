# Calendar 日历

### 介绍

日历组件用于选择日期或日期区间，2.4 版本开始支持此组件。

### 引入

```js
import Vue from 'vue';
import { Calendar } from 'vant';

Vue.use(Calendar);
```

## 代码演示

### 选择单个日期

下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发 `confirm` 事件。

```html
<van-cell title="选择单个日期" :value="date" @click="show = true" />
<van-calendar v-model="show" @confirm="onConfirm" />
```

```js
export default {
  data() {
    return {
      date: '',
      show: false,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
};
```

### 选择多个日期

设置 `type` 为 `multiple` 后可以选择多个日期，此时 `confirm` 事件返回的 date 为数组结构，数组包含若干个选中的日期。

```html
<van-cell title="选择多个日期" :value="text" @click="show = true" />
<van-calendar v-model="show" type="multiple" @confirm="onConfirm" />
```

```js
export default {
  data() {
    return {
      text: '',
      show: false,
    };
  },
  methods: {
    onConfirm(date) {
      this.show = false;
      this.text = `选择了 ${date.length} 个日期`;
    },
  },
};
```

### 选择日期区间

设置 `type` 为 `range` 后可以选择日期区间，此时 `confirm` 事件返回的 date 为数组结构，数组第一项为开始时间，第二项为结束时间。

```html
<van-cell title="选择日期区间" :value="date" @click="show = true" />
<van-calendar v-model="show" type="range" @confirm="onConfirm" />
```

```js
export default {
  data() {
    return {
      date: '',
      show: false,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },
  },
};
```

> Tips: 默认情况下，日期区间的起止时间不能为同一天，可以通过设置 allow-same-day 属性来允许选择同一天。

### 快捷选择

将 `show-confirm` 设置为 `false` 可以隐藏确认按钮，这种情况下选择完成后会立即触发 `confirm` 事件。

```html
<van-calendar v-model="show" :show-confirm="false" />
```

### 自定义颜色

通过 `color` 属性可以自定义日历的颜色，对选中日期和底部按钮生效。

```html
<van-calendar v-model="show" color="#1989fa" />
```

### 自定义日期范围

通过 `min-date` 和 `max-date` 定义日历的范围。

```html
<van-calendar v-model="show" :min-date="minDate" :max-date="maxDate" />
```

```js
export default {
  data() {
    return {
      show: false,
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2010, 0, 31),
    };
  },
};
```

### 自定义按钮文字

通过 `confirm-text` 设置按钮文字，通过 `confirm-disabled-text` 设置按钮禁用时的文字。

```html
<van-calendar
  v-model="show"
  type="range"
  confirm-text="完成"
  confirm-disabled-text="请选择结束时间"
/>
```

### 自定义日期文案

通过传入 `formatter` 函数来对日历上每一格的内容进行格式化。

```html
<van-calendar v-model="show" type="range" :formatter="formatter" />
```

```js
export default {
  methods: {
    formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (month === 5) {
        if (date === 1) {
          day.topInfo = '劳动节';
        } else if (date === 4) {
          day.topInfo = '青年节';
        } else if (date === 11) {
          day.text = '今天';
        }
      }

      if (day.type === 'start') {
        day.bottomInfo = '入住';
      } else if (day.type === 'end') {
        day.bottomInfo = '离店';
      }

      return day;
    },
  },
};
```

### 自定义弹出位置

通过 `position` 属性自定义弹出层的弹出位置，可选值为 `top`、`left`、`right`。

```html
<van-calendar v-model="show" :round="false" position="right" />
```

### 日期区间最大范围

选择日期区间时，可以通过 `max-range` 属性来指定最多可选天数，选择的范围超过最多可选天数时，会弹出相应的提示文案。

```html
<van-calendar type="range" :max-range="3" :style="{ height: '500px' }" />
```

### 自定义周起始日

通过 `first-day-of-week` 属性设置一周从哪天开始。

```html
<van-calendar first-day-of-week="1" />
```

### 平铺展示

将 `poppable` 设置为 `false`，日历会直接展示在页面内，而不是以弹层的形式出现。

```html
<van-calendar
  title="日历"
  :poppable="false"
  :show-confirm="false"
  :style="{ height: '500px' }"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type `v2.5.4` | 选择类型:<br>`single`表示选择单个日期，<br>`multiple`表示选择多个日期，<br>`range`表示选择日期区间 | _string_ | `single` |
| title | 日历标题 | _string_ | `日期选择` |
| color | 主题色，对底部按钮和选中日期生效 | _string_ | `#ee0a24` |
| min-date | 可选择的最小日期 | _Date_ | 当前日期 |
| max-date | 可选择的最大日期 | _Date_ | 当前日期的六个月后 |
| default-date | 默认选中的日期，`type` 为 `multiple` 或 `range` 时为数组，传入 `null` 表示默认不选择 | _Date \| Date[] \| null_ | 今天 |
| row-height | 日期行高 | _number \| string_ | `64` |
| formatter | 日期格式化函数 | _(day: Day) => Day_ | - |
| poppable | 是否以弹层的形式展示日历 | _boolean_ | `true` |
| lazy-render `v2.8.1` | 是否只渲染可视区域的内容 | _boolean_ | `true` |
| show-mark | 是否显示月份背景水印 | _boolean_ | `true` |
| show-title `v2.5.5` | 是否展示日历标题 | _boolean_ | `true` |
| show-subtitle `v2.5.5` | 是否展示日历副标题（年月） | _boolean_ | `true` |
| show-confirm | 是否展示确认按钮 | _boolean_ | `true` |
| readonly `v2.10.5` | 是否为只读状态，只读状态下不能选择日期 | _boolean_ | `false` |
| confirm-text | 确认按钮的文字 | _string_ | `确定` |
| confirm-disabled-text | 确认按钮处于禁用状态时的文字 | _string_ | `确定` |
| first-day-of-week `v2.9.2` | 设置周起始日 | _0-6_ | `0` |

### Poppable Props

当 Calendar 的 `poppable` 为 `true` 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 是否显示日历弹窗 | _boolean_ | `false` |
| position | 弹出位置，可选值为 `top` `right` `left` | _string_ | `bottom` |
| round | 是否显示圆角弹窗 | _boolean_ | `true` |
| close-on-popstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |
| get-container | 指定挂载的节点，[用法示例](#/zh-CN/popup#zhi-ding-gua-zai-wei-zhi) | _string \| () => Element_ | - |

### Range Props

当 Calendar 的 `type` 为 `range` 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| max-range | 日期区间最多可选天数 | _number \| string_ | 无限制 |
| range-prompt | 范围选择超过最多可选天数时的提示文案 | _string_ | `选择天数不能超过 xx 天` |
| allow-same-day `v2.5.6` | 是否允许日期范围的起止时间为同一天 | _boolean_ | `false` |

### Multiple Props

当 Calendar 的 `type` 为 `multiple` 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| max-range `v2.7.2` | 日期最多可选天数 | _number \| string_ | 无限制 |
| range-prompt | 选择超过最多可选天数时的提示文案 | _string_ | `选择天数不能超过 xx 天` |

### Day 数据结构

日历中的每个日期都对应一个 Day 对象，通过`formatter`属性可以自定义 Day 对象的内容

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| date | 日期对应的 Date 对象 | _Date_ |
| type | 日期类型，可选值为`selected`、`start`、`middle`、`end`、`disabled` | _string_ |
| text | 中间显示的文字 | _string_ |
| topInfo | 上方的提示信息 | _string_ |
| bottomInfo | 下方的提示信息 | _string_ |
| className | 额外类名 | _string_ |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 点击并选中任意日期时触发 | _value: Date \| Date[]_ |
| confirm | 日期选择完成后触发，若`show-confirm`为`true`，则点击确认按钮后触发 | _value: Date \| Date[]_ |
| open `v2.5.2` | 打开弹出层时触发 | - |
| close `v2.5.2` | 关闭弹出层时触发 | - |
| opened `v2.5.2` | 打开弹出层且动画结束后触发 | - |
| closed `v2.5.2` | 关闭弹出层且动画结束后触发 | - |
| unselect `v2.7.2` | 当日历组件的 `type` 为 `multiple` 时，取消选中日期时触发 | _value: Date_ |
| month-show `v2.8.2` | 当某个月份进入可视区域时触发 | _{ date: Date, title: string }_ |

### Slots

| 名称                   | 说明                     | 参数       |
| ---------------------- | ------------------------ | ---------- |
| title                  | 自定义标题               | -          |
| footer                 | 自定义底部区域内容       | -          |
| top-info `v2.12.22`    | 自定义日期上方的提示信息 | _day: Day_ |
| bottom-info `v2.12.22` | 自定义日期下方的提示信息 | _day: Day_ |

### 方法

通过 ref 可以获取到 Calendar 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| reset | 将选中的日期重置到指定日期，未传参时会重置到默认日期 | _date?: Date \| Date[]_ | - |
| scrollToDate `v2.12.2` | 滚动到某个日期 | _date: Date_ | - |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| @calendar-background-color | `@white` | - |
| @calendar-popup-height | `80%` | - |
| @calendar-header-box-shadow | `0 2px 10px rgba(125, 126, 128, 0.16)` | - |
| @calendar-header-title-height | `44px` | - |
| @calendar-header-title-font-size | `@font-size-lg` | - |
| @calendar-header-subtitle-font-size | `@font-size-md` | - |
| @calendar-weekdays-height | `30px` | - |
| @calendar-weekdays-font-size | `@font-size-sm` | - |
| @calendar-month-title-font-size | `@font-size-md` | - |
| @calendar-month-mark-color | `fade(@gray-2, 80%)` | - |
| @calendar-month-mark-font-size | `160px` | - |
| @calendar-day-height | `64px` | - |
| @calendar-day-font-size | `@font-size-lg` | - |
| @calendar-range-edge-color | `@white` | - |
| @calendar-range-edge-background-color | `@red` | - |
| @calendar-range-middle-color | `@red` | - |
| @calendar-range-middle-background-opacity | `0.1` | - |
| @calendar-selected-day-size | `54px` | - |
| @calendar-selected-day-color | `@white` | - |
| @calendar-info-font-size | `@font-size-xs` | - |
| @calendar-info-line-height | `@line-height-xs` | - |
| @calendar-selected-day-background-color | `@red` | - |
| @calendar-day-disabled-color | `@gray-5` | - |
| @calendar-confirm-button-height | `36px` | - |
| @calendar-confirm-button-margin | `7px 0` | - |

## 常见问题

### 在 iOS 系统上初始化组件失败？

如果你遇到了在 iOS 上无法渲染组件的问题，请确认在创建 Date 对象时没有使用`new Date('2020-01-01')`这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是`new Date('2020/01/01')`。

对此问题的详细解释：[stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。
