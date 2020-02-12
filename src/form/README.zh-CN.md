# Form 表单

### 介绍

用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型

### 引入

```js
import Vue from 'vue';
import { Form } from 'vant';

Vue.use(Form);
```

## 代码演示

### 基础用法

在表单中，每个 [Field](#/zh-CN/field) 代表一个表单项，使用 Field 的`rules`属性可以定义校验规则

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
    <van-button round block type="info">提交</van-button>
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

在`rules`中，可以通过`validator`字段定义校验函数，校验函数返回`false`时表示校验不通过，返回`Promise`时表示异步校验

```html
<van-form @submit="onSubmit" @failed="onFailed">
  <van-field
    v-model="value"
    name="phone"
    label="手机号"
    :rules="rules"
    placeholder="手机号"
  />
  <div style="margin: 16px;">
    <van-button round block type="info">提交</van-button>
  </div>
</van-form>
```

```js
export default {
  data() {
    this.rules = [
      { required: true, message: '请输入手机号' },
      { validator: val => /1\d{10}/.test(val), message: '手机号格式错误' },
    ];
    return { value: '' };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
  },
};
```

### 表单项类型 - 开关

在表单中使用 [Switch](#/zh-CN/switch) 组件

```html
<van-field name="switch" label="开关">
  <van-switch v-model="switchChecked" slot="input" size="20" />
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

在表单中使用 [Checkbox](#/zh-CN/checkbox) 组件

```html
<van-field name="checkbox" label="复选框">
  <van-checkbox v-model="checkbox" slot="input" shape="square" />
</van-field>
<van-field name="checkboxGroup" label="复选框组">
  <van-checkbox-group
    v-model="checkboxGroup"
    slot="input"
    direction="horizontal"
  >
    <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
    <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
  </van-checkbox-group>
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

在表单中使用 [Radio](#/zh-CN/radio) 组件

```html
<van-field name="radio" label="单选框">
  <van-radio-group v-model="radio" direction="horizontal" slot="input">
    <van-radio name="1">单选框 1</van-radio>
    <van-radio name="2">单选框 2</van-radio>
  </van-radio-group>
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

在表单中使用 [Stepper](#/zh-CN/stepper) 组件

```html
<van-field name="stepper" label="步进器">
  <van-stepper v-model="stepper" slot="input" />
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

在表单中使用 [Rate](#/zh-CN/rate) 组件

```html
<van-field name="rate" label="评分">
  <van-rate v-model="rate" slot="input" />
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

在表单中使用 [Slider](#/zh-CN/slider) 组件

```html
<van-field name="slider" label="滑块">
  <van-slider v-model="slider" slot="input" />
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

在表单中使用 [Uploader](#/zh-CN/uploader) 组件

```html
<van-field name="uploader" label="文件上传">
  <van-uploader v-model="uploader" slot="input" />
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

在表单中使用 [Picker](#/zh-CN/picker) 组件

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
<van-popup v-model="showPicker" position="bottom">
  <van-picker
    show-toolbar
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

在表单中使用 [DatetimePicker](#/zh-CN/datetime-picker) 组件

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
<van-popup v-model="showPicker" position="bottom">
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

在表单中使用 [Area](#/zh-CN/area) 组件

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
<van-popup v-model="showArea" position="bottom">
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
      this.value = values.map(item => item.name).join('/');
      this.showArea = false;
    },
  },
};
```

### 表单项类型 - 日历

在表单中使用 [Calendar](#/zh-CN/calendar) 组件

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
| ---- | ---- | ---- | ------ |


### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |


### Slots

| 名称 | 说明 |
| ---- | ---- |

