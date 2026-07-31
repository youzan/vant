# Timer

### Intro

Used to display the elapsed time in real time, and precision supports milliseconds.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Timer } from 'vant';

const app = createApp();
app.use(Timer);
```

## Usage

### Basic Usage

```html
<van-timer />
```

### Custom Format

```html
<van-timer format="DD Day, HH:mm:ss" />
```

### Millisecond

```html
<van-timer millisecond format="HH:mm:ss:SS" />
```

### Max Time

Set `max-time` to stop timing when the limit is reached and emit `finish`.

```html
<van-timer :time="0" :max-time="5000" @finish="onFinish" />
```

```js
import { showToast } from 'vant';

const onFinish = () => showToast('Finished');
```

### Custom Style

```html
<van-timer>
  <template #default="timeData">
    <span class="block">{{ timeData.hours }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.minutes }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.seconds }}</span>
  </template>
</van-timer>

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
<van-timer
  ref="timer"
  millisecond
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
    const timer = ref(null);

    const start = () => {
      timer.value.start();
    };
    const pause = () => {
      timer.value.pause();
    };
    const reset = () => {
      timer.value.reset();
    };
    const onFinish = () => showToast('Finished');

    return {
      start,
      pause,
      reset,
      onFinish,
      timer,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| time | Initial time, unit milliseconds | _number \| string_ | `0` |
| max-time | Max time, unit milliseconds; `0` means unlimited | _number \| string_ | `0` |
| format | Time format | _string_ | `HH:mm:ss` |
| auto-start | Whether to auto start counting | _boolean_ | `true` |
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

| Event  | Description                           | Arguments                  |
| ------ | ------------------------------------- | -------------------------- |
| finish | Emitted when max-time is reached      | -                          |
| change | Emitted when the elapsed time changed | _currentTime: CurrentTime_ |

### Slots

| Name    | Description    | SlotProps                  |
| ------- | -------------- | -------------------------- |
| default | Custom Content | _currentTime: CurrentTime_ |

### CurrentTime Structure

| Name         | Description                           | Type     |
| ------------ | ------------------------------------- | -------- |
| total        | Total elapsed time, unit milliseconds | _number_ |
| days         | Elapsed days                          | _number_ |
| hours        | Elapsed hours                         | _number_ |
| minutes      | Elapsed minutes                       | _number_ |
| seconds      | Elapsed seconds                       | _number_ |
| milliseconds | Elapsed milliseconds                  | _number_ |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html) to get Timer instance and call instance methods.

| Name  | Description    | Attribute | Return value |
| ----- | -------------- | --------- | ------------ |
| start | Start counting | -         | -            |
| pause | Pause counting | -         | -            |
| reset | Reset counting | -         | -            |

### Types

The component exports the following type definitions:

```ts
import type { TimerProps, TimerInstance, TimerCurrentTime } from 'vant';
```

`TimerInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { TimerInstance } from 'vant';

const timerRef = ref<TimerInstance>();

timerRef.value?.start();
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                    | Default Value               | Description |
| ----------------------- | --------------------------- | ----------- |
| --van-timer-text-color  | _var(--van-text-color)_     | -           |
| --van-timer-font-size   | _var(--van-font-size-md)_   | -           |
| --van-timer-line-height | _var(--van-line-height-md)_ | -           |
