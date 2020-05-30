# Form

### Install

```js
import Vue from 'vue';
import { Form } from 'vant';

Vue.use(Form);
```

## Usage

### Basic Usage

```html
<van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="Username"
    label="Username"
    placeholder="Username"
    :rules="[{ required: true, message: 'Username is required' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="Password"
    label="Password"
    placeholder="Password"
    :rules="[{ required: true, message: 'Password is required' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      Submit
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

### Validate Rules

```html
<van-form validate-first @failed="onFailed">
  <van-field
    v-model="value1"
    name="pattern"
    placeholder="USe pattern"
    :rules="[{ pattern, message: 'Error message' }]"
  />
  <van-field
    v-model="value2"
    name="validator"
    placeholder="Use validator"
    :rules="[{ validator, message: 'Error message' }]"
  />
  <van-field
    v-model="value3"
    name="asyncValidator"
    placeholder="Use async validator"
    :rules="[{ validator: asyncValidator, message: 'Error message' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      Submit
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
    validator(val) {
      return /1\d{10}/.test(val);
    },
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading('Validating...');

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

### Field Type - Switch

```html
<van-field name="switch" label="Switch">
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

### Field Type - Checkbox

```html
<van-field name="checkbox" label="Checkbox">
  <template #input>
    <van-checkbox v-model="checkbox" shape="square" />
  </template>
</van-field>
<van-field name="checkboxGroup" label="CheckboxGroup">
  <template #input>
    <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
      <van-checkbox name="1" shape="square">Checkbox 1</van-checkbox>
      <van-checkbox name="2" shape="square">Checkbox 2</van-checkbox>
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

### Field Type - Radio

```html
<van-field name="radio" label="Radio">
  <template #input>
    <van-radio-group v-model="radio" direction="horizontal">
      <van-radio name="1">Radio 1</van-radio>
      <van-radio name="2">Radio 2</van-radio>
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

### Field Type - Stepper

```html
<van-field name="stepper" label="Stepper">
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

### Field Type - Rate

```html
<van-field name="rate" label="Rate">
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

### Field Type - Slider

```html
<van-field name="slider" label="Slider">
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

### Field Type - Uploader

```html
<van-field name="uploader" label="Uploader">
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

### Field Type - Picker

```html
<van-field
  readonly
  clickable
  name="picker"
  :value="value"
  label="Picker"
  placeholder="Select city"
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
      columns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
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

### Field Type - DatetimePicker

```html
<van-field
  readonly
  clickable
  name="datetimePicker"
  :value="value"
  label="Datetime Picker"
  placeholder="Select time"
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

### Field Type - Area

```html
<van-field
  readonly
  clickable
  name="area"
  :value="value"
  label="Area Picker"
  placeholder="Select area"
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
      areaList: {},
    };
  },
  methods: {
    onConfirm(values) {
      this.value = values.map((item) => item.name).join('/');
      this.showArea = false;
    },
  },
};
```

### Field Type - Calendar

```html
<van-field
  readonly
  clickable
  name="calendar"
  :value="value"
  label="Calendar"
  placeholder="Select date"
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

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| label-width | Field label width | _number \| string_ | `90px` |
| label-align | Field label align, can be set to `center` `right` | _string_ | `left` |
| input-align | Field input align, can be set to `center` `right` | _string_ | `left` |
| error-message-align | Error message align, can be set to `center` `right` | _string_ | `left` |
| validate-trigger `v2.5.2` | When to validate the form，can be set to `onChange`、`onSubmit` | _string_ | `onBlur` |
| colon | Whether to display colon after label | _boolean_ | `false` |
| validate-first | Whether to stop the validation when a rule fails | _boolean_ | `false` |
| scroll-to-error `v2.5.2` | Whether to scroll to the error field when validation failed | _boolean_ | `false` |
| show-error `v2.6.0` | Whether to highlight input when validation failed | _boolean_ | `true` |
| show-error-message `v2.5.8` | Whether to show error message when validation failed | _boolean_ | `true` |
| submit-on-enter `v2.8.3` | Whether to submit form on enter | _boolean_ | `true` |

### Data Structure of Rule

| Key | Description | Type |
| --- | --- | --- |
| required | Whether to be a required field | _boolean_ |
| message `v2.5.3` | Error message | _string \| (value, rule) => string_ |
| validator `v2.5.3` | Custom validator | _(value, rule) => boolean \| Promise_ |
| pattern `v2.5.3` | Regex pattern | _RegExp_ |
| trigger `v2.5.2` | When to validate the form，can be set to `onChange`、`onBlur` | _string_ |
| formatter `v2.5.3` | Format value before validate | _(value, rule) => any_ |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| submit | Triggered after submitting the form and validation passed | _values: object_ |
| failed | Triggered after submitting the form and validation failed | _errorInfo: { values: object, errors: object[] }_ |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Form instance and call instance methods

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| submit | Submit form | - | - |
| validate | Validate form | _name?: string_ | _Promise_ |
| resetValidation | Reset validation | _name?: string_ | - |
| scrollToField `v2.8.3` | Scroll to field | _name: string, alignToTop: boolean_ | - |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Form content |
