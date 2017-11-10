<script>
export default {
  data() {
    return {
      active: 0
    };
  },

  methods: {
    nextStep() {
      this.active = ++this.active % 4;
    }
  }
}
</script>

## Steps

### Install
``` javascript
import { Step, Steps } from 'vant';

Vue.component(Step.name, Step);
Vue.component(Steps.name, Steps);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<van-steps :active="active">
  <van-step>Step1</van-step>
  <van-step>Step2</van-step>
  <van-step>Step3</van-step>
  <van-step>Step4</van-step>
</van-steps>

<van-button @click="nextStep">Next</van-button>
```

```javascript
export default {
  data() {
    return {
      active: 0
    };
  },

  methods: {
    nextStep() {
      this.active = ++this.active % 4;
    }
  }
}
```
:::

#### Description

:::demo Description
```html
<van-steps
  :active="active"
  icon="logistics"
  icon-class="steps-success"
  title="Title"
  description="Description"
>
  <van-step>Step1</van-step>
  <van-step>Step2</van-step>
  <van-step>Step3</van-step>
  <van-step>Step4</van-step>
</van-steps>
```
:::

#### Vertical Steps

:::demo Vertical Steps
```html
<van-steps direction="vertical" :active="0" active-color="#f60">
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
:::

#### Advanced Usage

:::demo Advanced Usage
```html
<van-steps :active="active" title="Title">
  <van-icon slot="icon" name="location"></van-icon>
  <p slot="message-extra">Some text</p>
  <van-step>Step1</van-step>
  <van-step>Step2</van-step>
  <van-step>Step3</van-step>
  <van-step>Step4</van-step>  
</van-steps>
```
:::

### Steps API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| active | Active step | `Number` | 0 | - |
| icon | Action step icon | `String` | - | - |
| iconClass | Icon class | `String` | - | - |
| title | Title | `String` | - | - |
| description | Description | `String` | - | - |
| direction | Direction | `String` | `horizontal` | `vertical` |
| activeColor | Active step color | `String` | `#06bf04` | - |

### Steps Slot

| Name | Description |
|-----------|-----------|
| icon | Custom icon |
| message-extra | Extra content |
