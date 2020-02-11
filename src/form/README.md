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
<van-form @submit="onSubmit" @failed="onFailed">
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
    <van-button round block type="info">Submit</van-button>
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
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
  },
}
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
  <van-uploader v-model="uploader" slot="input" multiple max-count="2" />
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

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|

### Events

| Event | Description | Arguments |

### Slots

| Name | Description |
|------|------|
