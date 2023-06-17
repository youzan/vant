# CountDown

### Intro

Used to display the countdown value in real time, and precision supports milliseconds.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { CountDown } from 'vant';

const app = createApp();
app.use(CountDown);
```

## Usage

### Basic Usage

```html
<van-count-down :time="time" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const time = ref(30 * 60 * 60 * 1000);
    return { time };
  },
};
```

### Custom Format

```html
<van-count-down :time="time" format="DD Day, HH:mm:ss" />
```

### Millisecond

```html
<van-count-down millisecond :time="time" format="HH:mm:ss:SS" />
```

### Custom Style

```html
<van-count-down :time="time">
  <template #default="timeData">
    <span class="block">{{ timeData.hours }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.minutes }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.seconds }}</span>
  </template>
</van-count-down>

<style>
  .colon {
    display: inline-block;
    margin: 0 4px;
    color: #1989fa;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #1989fa;
  }
</style>
```

### Manual Control

```html
<van-count-down
  ref="countDown"
  millisecond
  :time="3000"
  :auto-start="false"
  format="ss:SSS"
  @finish="onFinish"
/>
<van-grid clickable :column-num="3">
  <van-grid-item text="Start" icon="play-circle-o" @click="start" />
  <van-grid-item text="Pause" icon="pause-circle-o" @click="pause" />
  <van-grid-item text="Reset" icon="replay" @click="reset" />
</van-grid>
```

```js
import { showToast } from 'vant';

export default {
  setup() {
    const countDown = ref(null);

    const start = () => {
      countDown.value.start();
    };
    const pause = () => {
      countDown.value.pause();
    };
    const reset = () => {
      countDown.value.reset();
    };
    const onFinish = () => showToast('Finished');

    return {
      start,
      pause,
      reset,
      onFinish,
      countDown,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| time | Total time, unit milliseconds | _number \| string_ | `0` |
| format | Time format | _string_ | `HH:mm:ss` |
| auto-start | Whether to auto start count down | _boolean_ | `true` |
| millisecond | Whether to enable millisecond render | _boolean_ | `false` |

### Available formats

| Format | Description           |
| ------ | --------------------- |
| DD     | Day                   |
| HH     | Hour                  |
| mm     | Minute                |
| ss     | Second                |
| S      | Millisecond, 1-digit  |
| SS     | Millisecond, 2-digits |
| SSS    | Millisecond, 3-digits |

### Events

| Event  | Description                      | Arguments                  |
| ------ | -------------------------------- | -------------------------- |
| finish | Emitted when count down finished | -                          |
| change | Emitted when count down changed  | _currentTime: CurrentTime_ |

### Slots

| Name    | Description    | SlotProps                  |
| ------- | -------------- | -------------------------- |
| default | Custom Content | _currentTime: CurrentTime_ |

### CurrentTime Structure

| Name         | Description                   | Type     |
| ------------ | ----------------------------- | -------- |
| total        | Total time, unit milliseconds | _number_ |
| days         | Remain days                   | _number_ |
| hours        | Remain hours                  | _number_ |
| minutes      | Remain minutes                | _number_ |
| seconds      | Remain seconds                | _number_ |
| milliseconds | Remain milliseconds           | _number_ |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html) to get CountDown instance and call instance methods.

| Name  | Description      | Attribute | Return value |
| ----- | ---------------- | --------- | ------------ |
| start | Start count down | -         | -            |
| pause | Pause count down | -         | -            |
| reset | Reset count down | -         | -            |

### Types

The component exports the following type definitions:

```ts
import type {
  CountDownProps,
  CountDownInstance,
  CountDownCurrentTime,
} from 'vant';
```

`CountDownInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { CountDownInstance } from 'vant';

const countDownRef = ref<CountDownInstance>();

countDownRef.value?.start();
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                         | Default Value               | Description |
| ---------------------------- | --------------------------- | ----------- |
| --van-count-down-text-color  | _var(--van-text-color)_     | -           |
| --van-count-down-font-size   | _var(--van-font-size-md)_   | -           |
| --van-count-down-line-height | _var(--van-line-height-md)_ | -           |
