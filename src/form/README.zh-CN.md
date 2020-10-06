# Form 表单

### 介绍

用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型，2.5 版本开始支持此组件。

### 引入

```js
import { createApp } from 'vue';
import { Form } from 'vant';

const app = createApp();
app.use(Form);
```

## 代码演示

### 基础用法

在表单中，每个 [Field 组件](#/zh-CN/field) 代表一个表单项，使用 Field 的 `rules` 属性定义校验规则。

```html
<van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
```

```js
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
```

### 校验规则

通过 `rules` 定义表单校验规则，可用字段见[下方表格](#/zh-CN/form#rule-shu-ju-jie-gou)。

```html
<van-form validate-first @failed="onFailed">
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
  <!-- 通过 validator 进行异步函数校验 -->
  <van-field
    v-model="value3"
    name="asyncValidator"
    placeholder="异步函数校验"
    :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      pattern: /\d{6}/,
    };
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading('验证中...');

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
  },
};
```

### 表单项类型 - 开关

在表单中使用 [Switch 组件](#/zh-CN/switch)。

```html
<van-field name="switch" label="开关">
  <template #input>
    <van-switch v-model="switchChecked" size="20" />
  </template>
</van-field>
```

```js
export default {
  data() {
    return {
      switchChecked: false,
    };
  },
};
```

### 表单项类型 - 复选框

在表单中使用 [Checkbox 组件](#/zh-CN/checkbox)。

```html
<van-field name="checkbox" label="复选框">
  <template #input>
    <van-checkbox v-model="checkbox" shape="square" />
  </template>
</van-field>
<van-field name="checkboxGroup" label="复选框组">
  <template #input>
    <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
      <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
      <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
    </van-checkbox-group>
  </template>
</van-field>
```

```js
export default {
  data() {
    return {
      checkbox: false,
      checkboxGroup: [],
    };
  },
};
```

### 表单项类型 - 单选框

在表单中使用 [Radio 组件](#/zh-CN/radio)。

```html
<van-field name="radio" label="单选框">
  <template #input>
    <van-radio-group v-model="radio" direction="horizontal">
      <van-radio name="1">单选框 1</van-radio>
      <van-radio name="2">单选框 2</van-radio>
    </van-radio-group>
  </template>
</van-field>
```

```js
export default {
  data() {
    return {
      radio: '1',
    };
  },
};
```

### 表单项类型 - 步进器

在表单中使用 [Stepper 组件](#/zh-CN/stepper)。

```html
<van-field name="stepper" label="步进器">
  <template #input>
    <van-stepper v-model="stepper" />
  </template>
</van-field>
```

```js
export default {
  data() {
    return {
      stepper: 1,
    };
  },
};
```

### 表单项类型 - 评分

在表单中使用 [Rate 组件](#/zh-CN/rate)。

```html
<van-field name="rate" label="评分">
  <template #input>
    <van-rate v-model="rate" />
  </template>
</van-field>
```

```js
export default {
  data() {
    return {
      rate: 3,
    };
  },
};
```

### 表单项类型 - 滑块

在表单中使用 [Slider 组件](#/zh-CN/slider)。

```html
<van-field name="slider" label="滑块">
  <template #input>
    <van-slider v-model="slider" />
  </template>
</van-field>
```

```js
export default {
  data() {
    return {
      slider: 50,
    };
  },
};
```

### 表单项类型 - 文件上传

在表单中使用 [Uploader 组件](#/zh-CN/uploader)。

```html
<van-field name="uploader" label="文件上传">
  <template #input>
    <van-uploader v-model="uploader" />
  </template>
</van-field>
```

```js
export default {
  data() {
    return {
      uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
    };
  },
};
```

### 表单项类型 - 选择器

在表单中使用 [Picker 组件](#/zh-CN/picker)。

```html
<van-field
  readonly
  clickable
  name="picker"
  :value="value"
  label="选择器"
  placeholder="点击选择城市"
  @click="showPicker = true"
/>
<van-popup v-model:show="showPicker" position="bottom">
  <van-picker
    :columns="columns"
    @confirm="onConfirm"
    @cancel="showPicker = false"
  />
</van-popup>
```

```js
export default {
  data() {
    return {
      value: '',
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      showPicker: false,
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
  },
};
```

### 表单项类型 - 时间选择器

在表单中使用 [DatetimePicker 组件](#/zh-CN/datetime-picker)。

```html
<van-field
  readonly
  clickable
  name="datetimePicker"
  :value="value"
  label="时间选择"
  placeholder="点击选择时间"
  @click="showPicker = true"
/>
<van-popup v-model:show="showPicker" position="bottom">
  <van-datetime-picker
    type="time"
    @confirm="onConfirm"
    @cancel="showPicker = false"
  />
</van-popup>
```

```js
export default {
  data() {
    return {
      value: '',
      showPicker: false,
    };
  },
  methods: {
    onConfirm(time) {
      this.value = time;
      this.showPicker = false;
    },
  },
};
```

### 表单项类型 - 省市区选择器

在表单中使用 [Area 组件](#/zh-CN/area)。

```html
<van-field
  readonly
  clickable
  name="area"
  :value="value"
  label="地区选择"
  placeholder="点击选择省市区"
  @click="showArea = true"
/>
<van-popup v-model:show="showArea" position="bottom">
  <van-area
    :area-list="areaList"
    @confirm="onConfirm"
    @cancel="showArea = false"
  />
</van-popup>
```

```js
export default {
  data() {
    return {
      value: '',
      showArea: false,
      areaList: {}, // 数据格式见 Area 组件文档
    };
  },
  methods: {
    onConfirm(values) {
      this.value = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/');
      this.showArea = false;
    },
  },
};
```

### 表单项类型 - 日历

在表单中使用 [Calendar 组件](#/zh-CN/calendar)。

```html
<van-field
  readonly
  clickable
  name="calendar"
  :value="value"
  label="日历"
  placeholder="点击选择日期"
  @click="showCalendar = true"
/>
<van-calendar v-model="showCalendar" @confirm="onConfirm" />
```

```js
export default {
  data() {
    return {
      value: '',
      showCalendar: false,
    };
  },
  methods: {
    onConfirm(date) {
      this.value = `${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar = false;
    },
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label-width | 表单项 label 宽度，默认单位为`px` | _number \| string_ | `6.2em` |
| label-align |  表单项 label 对齐方式，可选值为 `center` `right` | _string_ | `left` |
| input-align | 输入框对齐方式，可选值为 `center` `right` | _string_ | `left` |
| error-message-align | 错误提示文案对齐方式，可选值为 `center` `right` | _string_ | `left` |
| validate-trigger `v2.5.2` | 表单校验触发时机，可选值为 `onChange`、`onSubmit`，详见下表 | _string_ | `onBlur` |
| colon | 是否在 label 后面添加冒号 | _boolean_ | `false` |
| validate-first | 是否在某一项校验不通过时停止校验 | _boolean_ | `false` |
| scroll-to-error `v2.5.2` | 是否在提交表单且校验不通过时滚动至错误的表单项 | _boolean_ | `false` |
| show-error `v2.6.0` | 是否在校验不通过时标红输入框 | _boolean_ | `true` |
| show-error-message `v2.5.8` | 是否在校验不通过时在输入框下方展示错误提示 | _boolean_ | `true` |
| submit-on-enter `v2.8.3` | 是否在按下回车键时提交表单 | _boolean_ | `true` |

> 表单项的 API 参见：[Field 组件](#/zh-CN/field#api)

### Rule 数据结构

使用 Field 的`rules`属性可以定义校验规则，可选属性如下:

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| required | 是否为必选字段 | _boolean_ |
| message `v2.5.3` | 错误提示文案 | _string \| (value, rule) => string_ |
| validator `v2.5.3` | 通过函数进行校验 | _(value, rule) => boolean \| Promise_ |
| pattern `v2.5.3` | 通过正则表达式进行校验 | _RegExp_ |
| trigger `v2.5.2` | 本项规则的触发时机，可选值为 `onChange`、`onBlur` | _string_ |
| formatter `v2.5.3` | 格式化函数，将表单项的值转换后进行校验 | _(value, rule) => any_ |

### validate-trigger  可选值

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

通过 ref 可以获取到 Form 实例并调用实例方法，详见[组件实例方法](#/zh-CN/quickstart#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| submit | 提交表单，与点击提交按钮的效果等价 | - | - |
| validate | 验证表单，支持传入`name`来验证单个表单项 | _name?: string_ | _Promise_ |
| resetValidation | 重置表单项的验证提示，支持传入`name`来重置单个表单项 | _name?: string_ | - |
| scrollToField `v2.8.3` | 滚动到对应表单项的位置，默认滚动到顶部，第二个参数传 false 可滚动至底部 | _name: string, alignToTop: boolean_ | - |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 表单内容 |
