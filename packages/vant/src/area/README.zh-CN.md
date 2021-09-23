# Area 省市区选择

### 介绍

省市区三级联动选择，通常与[弹出层](#/zh-CN/popup)组件配合使用。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Area } from 'vant';

const app = createApp();
app.use(Area);
```

## 代码演示

### 基础用法

初始化省市区组件时，需要通过 `area-list` 属性传入省市区数据。

```html
<van-area title="标题" :area-list="areaList" />
```

### areaList 格式

areaList 为对象结构，包含 `province_list`、`city_list`、`county_list` 三个 key。

每项以地区码作为 key，省市区名字作为 value。地区码为 6 位数字，前两位代表省份，中间两位代表城市，后两位代表区县，以 0 补足 6 位。比如北京的地区码为 `11`，以 0 补足 6 位，为 `110000`。

示例数据如下：

```js
const areaList = {
  province_list: {
    110000: '北京市',
    120000: '天津市',
  },
  city_list: {
    110100: '北京市',
    120100: '天津市',
  },
  county_list: {
    110101: '东城区',
    110102: '西城区',
    // ....
  },
};
```

### @vant/area-data

Vant 官方提供了一份默认的省市区数据，可以通过 [@vant/area-data](https://github.com/youzan/vant/tree/dev/packages/vant-area-data) 引入：

```bash
yarn add @vant/area-data
```

```ts
import { areaList } from '@vant/area-data';

export default {
  setup() {
    return { areaList };
  },
};
```

### 选中省市区

如果想选中某个省市区，需要传入一个 `value` 属性，绑定对应的地区码。

```html
<van-area title="标题" :area-list="areaList" value="110101" />
```

### 配置显示列

可以通过 `columns-num` 属性配置省市区显示的列数，默认情况下会显示省市区，当你设置为 `2`，则只会显示省市选择。

```html
<van-area title="标题" :area-list="areaList" :columns-num="2" />
```

### 配置列占位提示文字

可以通过 `columns-placeholder` 属性配置每一列的占位提示文字。

```html
<van-area
  title="标题"
  :area-list="areaList"
  :columns-placeholder="['请选择', '请选择', '请选择']"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中项对应的地区码 | _string_ | - |
| title | 顶部栏标题 | _string_ | - |
| confirm-button-text | 确认按钮文字 | _string_ | `确认` |
| cancel-button-text | 取消按钮文字 | _string_ | `取消` |
| area-list | 省市区数据，格式见下方 | _object_ | - |
| columns-placeholder | 列占位提示文字 | _string[]_ | `[]` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法切换选项 | _boolean_ | `false` |
| item-height | 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `44` |
| columns-num | 显示列数，3-省市区，2-省市，1-省 | _number \| string_ | `3` |
| visible-item-count | 可见的选项个数 | _number \| string_ | `6` |
| swipe-duration | 快速滑动时惯性滚动的时长，单位 `ms` | _number \| string_ | `1000` |
| is-oversea-code | 根据地区码校验海外地址，海外地址会划分至单独的分类 | _() => boolean_ | - |

### Events

| 事件    | 说明               | 回调参数                       |
| ------- | ------------------ | ------------------------------ |
| confirm | 点击完成按钮时触发 | _result: ConfirmResult_        |
| cancel  | 点击取消按钮时触发 | -                              |
| change  | 选项改变时触发     | 所有列选中值，当前列对应的索引 |

### ConfirmResult 格式

confirm 事件返回的数据整体为一个数组，数组每一项对应一列选项中被选中的数据。

```js
[
  {
    code: '110000',
    name: '北京市',
  },
  {
    code: '110100',
    name: '北京市',
  },
  {
    code: '110101',
    name: '东城区',
  },
];
```

### Slots

| 名称             | 说明                   | 参数 |
| ---------------- | ---------------------- | ---- |
| toolbar `v3.1.2` | 自定义整个顶部栏的内容 | -    |
| title            | 自定义标题内容         | -    |
| confirm `v3.1.2` | 自定义确认按钮内容     | -    |
| cancel `v3.1.2`  | 自定义取消按钮内容     | -    |
| columns-top      | 自定义选项上方内容     | -    |
| columns-bottom   | 自定义选项下方内容     | -    |

### 方法

通过 ref 可以获取到 Area 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| reset | 根据地区码重置所有选项，若不传地区码，则重置到第一项 | _code?: string_ | - |

### 类型定义

组件导出以下类型定义：

```ts
import type { AreaProps, AreaList, AreaInstance, AreaColumnOption } from 'vant';
```

`AreaInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { AreaInstance } from 'vant';

const areaRef = ref<AreaInstance>();

areaRef.value?.reset();
```

## 常见问题

### 在桌面端无法操作组件？

参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。
