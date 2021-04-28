# Steps

### Intro

Used to show the various parts of the action flow and let the user know where the current action fits into the overall flow.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Step, Steps } from 'vant';

const app = createApp();
app.use(Step);
app.use(Steps);
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
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(1);
    return { active };
  },
};
```

### Custom Style

```html
<van-steps :active="active" active-icon="success" active-color="#38f">
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
| --- | --- | --- | --- |
| active | Active step | _number \| string_ | `0` |
| direction | Can be set to `vertical` | _string_ | `horizontal` |
| active-color | Active step color | _string_ | `#07c160` |
| inactive-color | Inactive step color | _string_ | `#969799` |
| active-icon | Active icon name | _string_ | `checked` |
| inactive-icon | Inactive icon name | _string_ | - |
| finish-icon `v3.0.7` | Finish icon name | _string_ | - |
| icon-prefix `v3.0.15` | Icon className prefix | _string_ | `van-icon` |

### Step Slots

| Name                 | Description          |
| -------------------- | -------------------- |
| active-icon          | Custom active icon   |
| inactive-icon        | Custom inactive icon |
| finish-icon `v3.0.7` | Custom finish icon   | _string_ | - |

### Steps Events

| Event | Description | Arguments |
| --- | --- | --- |
| click-step | Emitted when a step's title or icon is clicked | _index: number_ |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                             | Default Value   | Description |
| -------------------------------- | --------------- | ----------- |
| @step-text-color                 | `@gray-6`       | -           |
| @step-active-color               | `@green`        | -           |
| @step-process-text-color         | `@text-color`   | -           |
| @step-font-size                  | `@font-size-md` | -           |
| @step-line-color                 | `@border-color` | -           |
| @step-finish-line-color          | `@green`        | -           |
| @step-finish-text-color          | `@text-color`   | -           |
| @step-icon-size                  | `12px`          | -           |
| @step-circle-size                | `5px`           | -           |
| @step-circle-color               | `@gray-6`       | -           |
| @step-horizontal-title-font-size | `@font-size-sm` | -           |
| @steps-background-color          | `@white`        | -           |
