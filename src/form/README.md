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
<van-form validate-first @submit="onSubmit" @failed="onFailed">
  <van-field v-model="phone" name="phone" label="Phone" :rules="phoneRules" />
  <van-field v-model="code" name="code" label="Code" :rules="codeRules" />
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
    this.phoneRules = [
      { required: true, message: 'Phone is required' },
      { validator: this.phoneValidator, message: 'Incorrect phone' },
    ];
    this.codeRules = [
      { required: true, message: 'Code is required' },
      { validator: this.codeValidator, message: 'Incorrect code' },
    ];
    return {
      code: '',
      phone: '',
    };
  },
  methods: {
    phoneValidator(val) {
      return /1\d{10}/.test(val);
    },
    codeValidator(val) {
      return new Promise(resolve => {
        Toast.loading('Validating...');

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onSubmit(values) {
      console.log('submit', values);
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

### Field Type - Checkbox

```html
<van-field name="checkbox" label="Checkbox">
  <van-checkbox v-model="checkbox" slot="input" shape="square" />
</van-field>
<van-field name="checkboxGroup" label="CheckboxGroup">
  <van-checkbox-group
    v-model="checkboxGroup"
    slot="input"
    direction="horizontal"
  >
    <van-checkbox name="1" shape="square">Checkbox 1</van-checkbox>
    <van-checkbox name="2" shape="square">Checkbox 2</van-checkbox>
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

### Field Type - Radio

```html
<van-field name="radio" label="Radio">
  <van-radio-group v-model="radio" direction="horizontal" slot="input">
    <van-radio name="1">Radio 1</van-radio>
    <van-radio name="2">Radio 2</van-radio>
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

### Field Type - Stepper

```html
<van-field name="stepper" label="Stepper">
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

### Field Type - Rate

```html
<van-field name="rate" label="Rate">
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

### Field Type - Slider

```html
<van-field name="slider" label="Slider">
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

### Field Type - Uploader

```html
<van-field name="uploader" label="Uploader">
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
      this.value = values.map(item => item.name).join('/');
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
|------|------|------|------|
| label-width | Field label width | *number \| string* | `90px` |
| label-align | Field label align, can be set to `center` `right` | *string* | `left` |
| input-align | Field input align, can be set to `center` `right` | *string* | `left` |
| error-message-align | Error message align, can be set to `center` `right` | *string* | `left` |
| colon | Whether to display `:` after label | *boolean* | *false* |
| validate-first | Whether to stop the validation when a rule fails | *boolean* | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| submit | Triggered after submitting the form and validation passed | *values: object* |
| failed | Triggered after submitting the form and validation failed |  *errorInfo: { values: object, errors: object[] }* |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Form instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| submit | Submit form | - | - |
| validate | Validate form | *name?: string* | *Promise* |
| resetValidation | Reset validation | *name?: string* | - |

### Slots

| Name | Description |
| ---- | ----------- |
| default | Form content |
