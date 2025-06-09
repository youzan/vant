# Form 表单

### 介绍

用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型，需要与 [Field 输入框](#/zh-CN/field) 组件搭配使用。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Form, Field, CellGroup } from 'vant';

const app = createApp();
app.use(Form);
app.use(Field);
app.use(CellGroup);
```

## 代码演示

### 基础用法

在表单中，每个 [Field 组件](#/zh-CN/field) 代表一个表单项，使用 Field 的 `rules` 属性定义校验规则。

```html
<van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="username"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="password"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const onSubmit = (values) => {
      console.log('submit', values);
    };

    return {
      username,
      password,
      onSubmit,
    };
  },
};
```

### 校验规则

通过 `rules` 定义表单校验规则，所有可用字段见[下方表格](#/zh-CN/form#rule-shu-ju-jie-gou)。

```html
<van-form @failed="onFailed">
  <van-cell-group inset>
    <!-- 通过 pattern 进行正则校验 -->
    <van-field
      v-model="value1"
      name="pattern"
      placeholder="正则校验"
      :rules="[{ pattern, message: '请输入正确内容' }]"
    />
    <!-- 通过 validator 进行函数校验 -->
    <van-field
      v-model="value2"
      name="validator"
      placeholder="函数校验"
      :rules="[{ validator, message: '请输入正确内容' }]"
    />
    <!-- 通过 validator 返回错误提示 -->
    <van-field
      v-model="value3"
      name="validatorMessage"
      placeholder="校验函数返回错误提示"
      :rules="[{ validator: validatorMessage }]"
    />
    <!-- 通过 validator 进行异步函数校验 -->
    <van-field
      v-model="value4"
      name="asyncValidator"
      placeholder="异步函数校验"
      :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
```

```js
import { ref } from 'vue';
import { closeToast, showLoadingToast } from 'vant';

export default {
  setup() {
    const value1 = ref('');
    const value2 = ref('');
    const value3 = ref('abc');
    const value4 = ref('');
    const pattern = /\d{6}/;

    // 校验函数返回 true 表示校验通过，false 表示不通过
    const validator = (val) => /1\d{10}/.test(val);

    // 校验函数可以直接返回一段错误提示
    const validatorMessage = (val) => `${val} 不合法，请重新输入`;

    // 校验函数可以返回 Promise，实现异步校验
    const asyncValidator = (val) =>
      new Promise((resolve) => {
        showLoadingToast('验证中...');

        setTimeout(() => {
          closeToast();
          resolve(val === '1234');
        }, 1000);
      });

    const onFailed = (errorInfo) => {
      console.log('failed', errorInfo);
    };

    return {
      value1,
      value2,
      value3,
      value4,
      pattern,
      onFailed,
      validator,
      asyncValidator,
    };
  },
};
```

### 表单项类型 - 开关

在表单中使用 [Switch 组件](#/zh-CN/switch)。

```html
<van-field name="switch" label="开关">
  <template #input>
    <van-switch v-model="checked" />
  </template>
</van-field>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref(false);
    return { checked };
  },
};
```

### 表单项类型 - 复选框

在表单中使用 [Checkbox 组件](#/zh-CN/checkbox)。

```html
<van-field name="checkbox" label="复选框">
  <template #input>
    <van-checkbox v-model="checked" shape="square" />
  </template>
</van-field>
<van-field name="checkboxGroup" label="复选框组">
  <template #input>
    <van-checkbox-group v-model="groupChecked" direction="horizontal">
      <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
      <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
    </van-checkbox-group>
  </template>
</van-field>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref(false);
    const groupChecked = ref([]);
    return {
      checked,
      groupChecked,
    };
  },
};
```

### 表单项类型 - 单选框

在表单中使用 [Radio 组件](#/zh-CN/radio)。

```html
<van-field name="radio" label="单选框">
  <template #input>
    <van-radio-group v-model="checked" direction="horizontal">
      <van-radio name="1">单选框 1</van-radio>
      <van-radio name="2">单选框 2</van-radio>
    </van-radio-group>
  </template>
</van-field>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref('1');
    return { checked };
  },
};
```

### 表单项类型 - 步进器

在表单中使用 [Stepper 组件](#/zh-CN/stepper)。

```html
<van-field name="stepper" label="步进器">
  <template #input>
    <van-stepper v-model="value" />
  </template>
</van-field>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value = ref(1);
    return { value };
  },
};
```

### 表单项类型 - 评分

在表单中使用 [Rate 组件](#/zh-CN/rate)。

```html
<van-field name="rate" label="评分">
  <template #input>
    <van-rate v-model="value" />
  </template>
</van-field>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value = ref(3);
    return { value };
  },
};
```

### 表单项类型 - 滑块

在表单中使用 [Slider 组件](#/zh-CN/slider)。

```html
<van-field name="slider" label="滑块">
  <template #input>
    <van-slider v-model="value" />
  </template>
</van-field>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value = ref(50);
    return { value };
  },
};
```

### 表单项类型 - 文件上传

在表单中使用 [Uploader 组件](#/zh-CN/uploader)。

```html
<van-field name="uploader" label="文件上传">
  <template #input>
    <van-uploader v-model="value" />
  </template>
</van-field>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value = ref([
      { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
    ]);
    return { value };
  },
};
```

### 表单项类型 - 选择器

在表单中使用 [Picker 组件](#/zh-CN/picker)。

```html
<van-field
  v-model="result"
  is-link
  readonly
  name="picker"
  label="选择器"
  placeholder="点击选择城市"
  @click="showPicker = true"
/>
<van-popup v-model:show="showPicker" destroy-on-close position="bottom">
  <van-picker
    :columns="columns"
    :model-value="pickerValue"
    @confirm="onConfirm"
    @cancel="showPicker = false"
  />
</van-popup>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const result = ref('');
    const pickerValue = ref([]);
    const showPicker = ref(false);
    const columns = [
      { text: '杭州', value: 'Hangzhou' },
      { text: '宁波', value: 'Ningbo' },
      { text: '温州', value: 'Wenzhou' },
      { text: '绍兴', value: 'Shaoxing' },
      { text: '湖州', value: 'Huzhou' },
    ];

    const onConfirm = ({ selectedValues, selectedOptions }) => {
      result.value = selectedOptions[0]?.text;
      pickerValue.value = selectedValues;
      showPicker.value = false;
    };

    return {
      result,
      pickerValue,
      columns,
      onConfirm,
      showPicker,
    };
  },
};
```

### 表单项类型 - 日期选择器

在表单中使用 [DatePicker 组件](#/zh-CN/date-picker)。

```html
<van-field
  v-model="result"
  is-link
  readonly
  name="datePicker"
  label="时间选择"
  placeholder="点击选择时间"
  @click="showPicker = true"
/>
<van-popup v-model:show="showPicker" destroy-on-close position="bottom">
  <van-date-picker
    :model-value="pickerValue"
    @confirm="onConfirm"
    @cancel="showPicker = false"
  />
</van-popup>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const result = ref('');
    const showPicker = ref(false);
    const pickerValue = ref([]);
    const onConfirm = ({ selectedValues }) => {
      result.value = selectedValues.join('/');
      pickerValue.value = selectedValues;
      showPicker.value = false;
    };

    return {
      result,
      pickerValue,
      onConfirm,
      showPicker,
    };
  },
};
```

### 表单项类型 - 省市区选择器

在表单中使用 [Area 组件](#/zh-CN/area)。

```html
<van-field
  v-model="result"
  is-link
  readonly
  name="area"
  label="地区选择"
  placeholder="点击选择省市区"
  @click="showArea = true"
/>
<van-popup v-model:show="showArea" destroy-on-close position="bottom">
  <van-area
    :area-list="areaList"
    :model-value="pickerValue"
    @confirm="onConfirm"
    @cancel="showArea = false"
  />
</van-popup>
```

```js
import { ref } from 'vue';
import { areaList } from '@vant/area-data';

export default {
  setup() {
    const result = ref('');
    const showArea = ref(false);
    const pickerValue = ref('');
    const onConfirm = ({ selectedValues, selectedOptions }) => {
      pickerValue.value = selectedValues.length
        ? selectedValues[selectedValues.length - 1]
        : '';
      showArea.value = false;
      result.value = selectedOptions.map((item) => item.text).join('/');
    };

    return {
      result,
      areaList,
      pickerValue,
      showArea,
      onConfirm,
    };
  },
};
```

### 表单项类型 - 日历

在表单中使用 [Calendar 组件](#/zh-CN/calendar)。

```html
<van-field
  v-model="result"
  is-link
  readonly
  name="calendar"
  label="日历"
  placeholder="点击选择日期"
  @click="showCalendar = true"
/>
<van-calendar v-model:show="showCalendar" @confirm="onConfirm" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const result = ref('');
    const showCalendar = ref(false);
    const onConfirm = (date) => {
      result.value = `${date.getMonth() + 1}/${date.getDate()}`;
      showCalendar.value = false;
    };

    return {
      result,
      onConfirm,
      showCalendar,
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label-width | 表单项 label 宽度，默认单位为`px` | _number \| string_ | `6.2em` |
| label-align | 表单项 label 对齐方式，可选值为 `center` `right` `top` | _string_ | `left` |
| input-align | 输入框对齐方式，可选值为 `center` `right` | _string_ | `left` |
| error-message-align | 错误提示文案对齐方式，可选值为 `center` `right` | _string_ | `left` |
| validate-trigger | 表单校验触发时机，可选值为 `onChange`、`onSubmit`，支持通过数组同时设置多个值，具体用法见下方表格 | _string \| string[]_ | `onBlur` |
| colon | 是否在 label 后面添加冒号 | _boolean_ | `false` |
| disabled | 是否禁用表单中的所有输入框 | _boolean_ | `false` |
| readonly | 是否将表单中的所有输入框设置为只读状态 | _boolean_ | `false` |
| required `v4.7.3` | 是否显示表单必填星号 | _boolean \| 'auto'_ | `null` |
| validate-first | 是否在某一项校验不通过时停止校验 | _boolean_ | `false` |
| scroll-to-error | 是否在提交表单且校验不通过时滚动至错误的表单项 | _boolean_ | `false` |
| scroll-to-error-position `v4.9.2` | 滚动至错误的表单项时的位置，可选值为 `center` \| `end` \| `nearest` \| `start` | _string_ | - |
| show-error | 是否在校验不通过时标红输入框 | _boolean_ | `false` |
| show-error-message | 是否在校验不通过时在输入框下方展示错误提示 | _boolean_ | `true` |
| submit-on-enter | 是否在按下回车键时提交表单 | _boolean_ | `true` |

> 表单项的 API 参见：[Field 组件](#/zh-CN/field#api)

### Rule 数据结构

使用 Field 的 `rules` 属性可以定义校验规则，可选属性如下:

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| required | 是否为必选字段，当值为空值时（空字符串、空数组、`false`、`undefined`、`null` ），校验不通过 | _boolean_ |
| message | 错误提示文案，可以设置为一个函数来返回动态的文案内容 | _string \| (value, rule) => string_ |
| validator | 通过函数进行校验，可以返回一个 Promise 来进行异步校验 | _(value, rule) => boolean \| string \| Promise_ |
| pattern | 通过正则表达式进行校验，正则无法匹配表示校验不通过 | _RegExp_ |
| trigger | 设置本项规则的触发时机，优先级高于 Form 组件设置的 `validate-trigger` 属性，可选值为 `onChange`、`onBlur`、`onSubmit` | _string \| string[]_ |
| formatter | 格式化函数，将表单项的值转换后进行校验 | _(value, rule) => any_ |
| validateEmpty | 设置 `validator` 和 `pattern` 是否要对空值进行校验，默认值为 `true`，可以设置为 `false` 来禁用该行为 | _boolean_ |

### validate-trigger 可选值

通过 `validate-trigger` 属性可以自定义表单校验的触发时机。

| 值       | 描述                                 |
| -------- | ------------------------------------ |
| onSubmit | 仅在提交表单时触发校验               |
| onBlur   | 在提交表单和输入框失焦时触发校验     |
| onChange | 在提交表单和输入框内容变化时触发校验 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| submit | 提交表单且验证通过后触发 | _values: object_ |
| failed | 提交表单且验证不通过后触发 | _errorInfo: { values: object, errors: object[] }_ |

### 方法

通过 ref 可以获取到 Form 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| submit | 提交表单，与点击提交按钮的效果等价 | - | - |
| getValues | 获取所有表单项当前的值 | - | _Record<string, unknown>_ |
| validate | 验证表单，支持传入一个或多个 `name` 来验证单个或部分表单项，不传入 `name` 时，会验证所有表单项 | _name?: string \| string[]_ | _Promise\<void\>_ |
| resetValidation | 重置表单项的验证提示，支持传入一个或多个 `name` 来重置单个或部分表单项，不传入 `name` 时，会重置所有表单项 | _name?: string \| string[]_ | - |
| getValidationStatus | 获取所有表单项的校验状态，状态包括 `passed`、`failed`、`unvalidated` | - | _Record\<string, FieldValidationStatus\>_ |
| scrollToField | 滚动到对应表单项的位置，默认滚动到顶部，第二个参数传 false 可滚动至底部 | _name: string, alignToTop: boolean_ | - |

### 类型定义

组件导出以下类型定义：

```ts
import type { FormProps, FormInstance } from 'vant';
```

`FormInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { FormInstance } from 'vant';

const formRef = ref<FormInstance>();

formRef.value?.submit();
```

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 表单内容 |

## 常见问题

### 如何自定义表单项？

Vant 支持在 Form 组件中插入自定义的表单项，具体用法参见 [useCustomFieldValue](#/zh-CN/use-custom-field-value)。
