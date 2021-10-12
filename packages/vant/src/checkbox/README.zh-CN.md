# Checkbox 复选框

### 介绍

在一组备选项中进行多选。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Checkbox, CheckboxGroup } from 'vant';

const app = createApp();
app.use(Checkbox);
app.use(CheckboxGroup);
```

## 代码演示

### 基础用法

通过 `v-model` 绑定复选框的勾选状态。

```html
<van-checkbox v-model="checked">复选框</van-checkbox>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref(true);
    return { checked };
  },
};
```

### 禁用状态

通过设置 `disabled` 属性可以禁用复选框。

```html
<van-checkbox v-model="checked" disabled>复选框</van-checkbox>
```

### 自定义形状

将 `shape` 属性设置为 `square`，复选框的形状会变成方形。

```html
<van-checkbox v-model="checked" shape="square">复选框</van-checkbox>
```

### 自定义颜色

通过 `checked-color` 属性设置选中状态的图标颜色。

```html
<van-checkbox v-model="checked" checked-color="#ee0a24">复选框</van-checkbox>
```

### 自定义大小

通过 `icon-size` 属性可以自定义图标的大小。

```html
<van-checkbox v-model="checked" icon-size="24px">复选框</van-checkbox>
```

### 自定义图标

通过 `icon` 插槽自定义图标，可以通过 `slotProps` 判断是否为选中状态.

```html
<van-checkbox v-model="checked">
  自定义图标
  <template #icon="props">
    <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
  </template>
</van-checkbox>

<style>
  .img-icon {
    height: 20px;
  }
</style>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref(true);
    return {
      checked,
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
    };
  },
};
```

### 禁用文本点击

设置 `label-disabled` 属性后，点击图标以外的内容不会触发复选框切换。

```html
<van-checkbox v-model="checked" label-disabled>复选框</van-checkbox>
```

### 复选框组

复选框可以与复选框组一起使用，复选框组通过 `v-model` 数组绑定复选框的勾选状态。

```html
<van-checkbox-group v-model="checked">
  <van-checkbox name="a">复选框 a</van-checkbox>
  <van-checkbox name="b">复选框 b</van-checkbox>
</van-checkbox-group>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref(['a', 'b']);
    return { checked };
  },
};
```

### 水平排列

将 `direction` 属性设置为 `horizontal` 后，复选框组会变成水平排列。

```html
<van-checkbox-group v-model="checked" direction="horizontal">
  <van-checkbox name="a">复选框 a</van-checkbox>
  <van-checkbox name="b">复选框 b</van-checkbox>
</van-checkbox-group>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref([]);
    return { checked };
  },
};
```

### 限制最大可选数

通过 `max` 属性可以限制复选框组的最大可选数。

```html
<van-checkbox-group v-model="checked" :max="2">
  <van-checkbox name="a">复选框 a</van-checkbox>
  <van-checkbox name="b">复选框 b</van-checkbox>
  <van-checkbox name="c">复选框 c</van-checkbox>
</van-checkbox-group>
```

### 全选与反选

通过 `CheckboxGroup` 实例上的 `toggleAll` 方法可以实现全选与反选。

```html
<van-checkbox-group v-model="checked" ref="checkboxGroup">
  <van-checkbox name="a">复选框 a</van-checkbox>
  <van-checkbox name="b">复选框 b</van-checkbox>
  <van-checkbox name="c">复选框 c</van-checkbox>
</van-checkbox-group>

<van-button type="primary" @click="checkAll">全选</van-button>
<van-button type="primary" @click="toggleAll">反选</van-button>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref([]);
    const checkboxGroup = ref(null);

    const checkAll = () => {
      checkboxGroup.value.toggleAll(true);
    }
    const toggleAll = () => {
      checkboxGroup.value.toggleAll();
    },

    return {
      checked,
      checkAll,
      toggleAll,
      checkboxGroup,
    };
  },
};
```

### 搭配单元格组件使用

搭配单元格组件使用时，需要再引入 `Cell` 和 `CellGroup` 组件，并通过 `Checkbox` 实例上的 toggle 方法触发切换。

```html
<van-checkbox-group v-model="checked">
  <van-cell-group>
    <van-cell
      v-for="(item, index) in list"
      clickable
      :key="item"
      :title="`复选框 ${item}`"
      @click="toggle(index)"
    >
      <template #right-icon>
        <van-checkbox
          :name="item"
          :ref="el => checkboxRefs[index] = el"
          @click.stop
        />
      </template>
    </van-cell>
  </van-cell-group>
</van-checkbox-group>
```

```js
import { ref, onBeforeUpdate } from 'vue';

export default {
  setup() {
    const checked = ref([]);
    const checkboxRefs = ref([]);
    const toggle = (index) => {
      checkboxRefs.value[index].toggle();
    };

    onBeforeUpdate(() => {
      checkboxRefs.value = [];
    });

    return {
      list: ['a', 'b'],
      toggle,
      checked,
      checkboxRefs,
    };
  },
};
```

## API

### Checkbox Props

| 参数           | 说明                      | 类型               | 默认值    |
| -------------- | ------------------------- | ------------------ | --------- |
| v-model        | 是否为选中状态            | _boolean_          | `false`   |
| name           | 标识符                    | _any_              | -         |
| shape          | 形状，可选值为 `square`   | _string_           | `round`   |
| disabled       | 是否禁用复选框            | _boolean_          | `false`   |
| label-disabled | 是否禁用复选框文本点击    | _boolean_          | `false`   |
| label-position | 文本位置，可选值为 `left` | _string_           | `right`   |
| icon-size      | 图标大小，默认单位为 `px` | _number \| string_ | `20px`    |
| checked-color  | 选中状态颜色              | _string_           | `#1989fa` |
| bind-group     | 是否与复选框组绑定        | _boolean_          | `true`    |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 所有选中项的标识符 | _any[]_ | - |
| disabled | 是否禁用所有复选框 | _boolean_ | `false` |
| max | 最大可选数，`0` 为无限制 | _number \| string_ | `0` |
| direction | 排列方向，可选值为 `horizontal` | _string_ | `vertical` |
| icon-size | 所有复选框的图标大小，默认单位为 `px` | _number \| string_ | `20px` |
| checked-color | 所有复选框的选中状态颜色 | _string_ | `#1989fa` |

### Checkbox Events

| 事件名 | 说明                     | 回调参数            |
| ------ | ------------------------ | ------------------- |
| change | 当绑定值变化时触发的事件 | _checked: boolean_  |
| click  | 点击复选框时触发         | _event: MouseEvent_ |

### CheckboxGroup Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| change | 当绑定值变化时触发的事件 | _names: any[]_ |

### Checkbox Slots

| 名称    | 说明       | 参数                                      |
| ------- | ---------- | ----------------------------------------- |
| default | 自定义文本 | -                                         |
| icon    | 自定义图标 | _{ checked: boolean, disabled: boolean }_ |

### CheckboxGroup 方法

通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toggleAll | 切换所有复选框，传 `true` 为选中，`false` 为取消选中，不传参为取反 | _options?: boolean \| object_ | - |

### toggleAll 方法示例

```js
const { checkboxGroup } = this.$refs;

// 全部反选
checkboxGroup.toggleAll();
// 全部选中
checkboxGroup.toggleAll(true);
// 全部取消
checkboxGroup.toggleAll(false);

// 全部反选，并跳过禁用的复选框
checkboxGroup.toggleAll({
  skipDisabled: true,
});
// 全部选中，并跳过禁用的复选框
checkboxGroup.toggleAll({
  checked: true,
  skipDisabled: true,
});
```

### Checkbox 方法

通过 ref 可以获取到 Checkbox 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toggle | 切换选中状态，传 `true` 为选中，`false` 为取消选中，不传参为取反 | _checked?: boolean_ | - |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  CheckboxProps,
  CheckboxShape,
  CheckboxInstance,
  CheckboxLabelPosition,
  CheckboxGroupProps,
  CheckboxGroupInstance,
  CheckboxGroupDirection,
  CheckboxGroupToggleAllOptions,
} from 'vant';
```

`CheckboxInstance` 和 `CheckboxGroupInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { CheckboxInstance, CheckboxGroupInstance } from 'vant';

const checkboxRef = ref<CheckboxInstance>();
const checkboxGroupRef = ref<CheckboxGroupInstance>();

checkboxRef.value?.toggle();
checkboxGroupRef.value?.toggleAll();
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-checkbox-size | _20px_ | - |
| --van-checkbox-border-color | _var(--van-gray-5)_ | - |
| --van-checkbox-transition-duration | _var(--van-animation-duration-fast)_ | - |
| --van-checkbox-label-margin | _var(--van-padding-xs)_ | - |
| --van-checkbox-label-color | _var(--van-text-color)_ | - |
| --van-checkbox-checked-icon-color | _var(--van-primary-color)_ | - |
| --van-checkbox-disabled-icon-color | _var(--van-gray-5)_ | - |
| --van-checkbox-disabled-label-color | _var(--van-gray-5)_ | - |
| --van-checkbox-disabled-background-color | _var(--van-border-color)_ | - |
