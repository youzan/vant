# Steps

### Install

```js
import Vue from 'vue';
import { Step, Steps } from 'vant';

Vue.use(Step);
Vue.use(Steps);
```

## Usage

### Basic Usage

```html
<van-steps :active="active">
  <van-step>Step1</van-step>
  <van-step>Step2</van-step>
  <van-step>Step3</van-step>
  <van-step>Step4</van-step>
</van-steps>
```

```js
export default {
  data() {
    return {
      active: 1
    };
  }
}
```

### Custom Style

```html
<van-steps
  :active="active"
  active-icon="success"
  active-color="#38f"
>
  <van-step>Step1</van-step>
  <van-step>Step2</van-step>
  <van-step>Step3</van-step>
  <van-step>Step4</van-step>
</van-steps>
```

### Vertical Steps

```html
<van-steps direction="vertical" :active="0">
  <van-step>
    <h3>【City】Status1</h3>
    <p>2016-07-12 12:40</p>
  </van-step>
  <van-step>
    <h3>【City】Status2</h3>
    <p>2016-07-11 10:00</p>
  </van-step>
  <van-step>
    <h3>【City】Status3</h3>
    <p>2016-07-10 09:30</p>
  </van-step>
</van-steps>
```

## API

### Steps Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| active | Active step | *number \| string* | `0` |
| direction | Can be set to `vertical` | *string* | `horizontal` |
| active-color | Active step color | *string* | `#07c160` |
| active-icon | Active icon name | *string* | `checked` |
| inactive-icon | Active icon name | *string* | - |

### Step Slots

| Name | Description |
|------|------|
| active-icon | Custom active icon |
| inactive-icon | Custom inactive icon |

### Steps Events

| Event | Description | Arguments |
|------|------|------|
| click-step `v2.5.9` | Triggered when a step's title or icon is clicked | *index: number* |
