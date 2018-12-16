## Steps

### Install
``` javascript
import { Step, Steps } from 'vant';

Vue.use(Step).use(Steps);
```

### Usage

#### Basic Usage

```html
<van-steps :active="active">
  <van-step>Step1</van-step>
  <van-step>Step2</van-step>
  <van-step>Step3</van-step>
  <van-step>Step4</van-step>
</van-steps>
```

```javascript
export default {
  data() {
    return {
      active: 1
    };
  }
}
```

#### Vertical Steps

```html
<van-steps direction="vertical" :active="0" active-color="#f44">
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

### Steps API

| Attribute | Description | Type | Default |
|------|------|------|------|
| active | Active step | `Number` | 0 |
| icon | Action step icon | `String` | - |
| icon-class | Icon class | `String` | - |
| title | Title | `String` | - |
| description | Description | `String` | - |
| direction | Can be set to `horizontal` `vertical` | `String` | `horizontal` |
| active-color | Active step color | `String` | `#4b0` |

### Steps Slot

| Name | Description |
|------|------|
| icon | Custom icon |
| message-extra | Extra content |
