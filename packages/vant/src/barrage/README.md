# Barrage

### Intro

To realize the critical subtitle function when watching the video. Please upgrade `vant` to >= v4.4.0 before using this component.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Barrage } from 'vant';

const app = createApp();
app.use(Barrage);
```

## Usage

### Basic Usage

```html
<van-barrage v-model="list">
  <div class="video" style="width: 100%; height: 150px"></div>
</van-barrage>
<van-space style="margin-top: 10px">
  <van-button @click="add" type="primary" size="small"> barrage </van-button>
</van-space>
```

```ts
export default {
  setup() {
    const defaultList = [
      { id: 100, text: 'Lightweight' },
      { id: 101, text: 'Customizable' },
      { id: 102, text: 'Mobile' },
      { id: 103, text: 'Vue' },
      { id: 104, text: 'Library' },
      { id: 105, text: 'VantUI' },
      { id: 106, text: '666' },
    ];

    const list = ref([...defaultList]);
    const add = () => {
      list.value.push({ id: Math.random(), text: 'Barrage' });
    };
    return { list, add };
  },
};
```

### Imitate video barrage

```html
<van-barrage v-model="list" ref="barrage" :auto-play="false">
  <div class="video" style="width: 100%; height: 150px"></div>
</van-barrage>
<van-space style="margin-top: 10px">
  <van-button @click="add" type="primary" size="small" :disabled="!isPlay">
    barrage
  </van-button>
  <van-button @click="toggle()" size="small">
    {{ isPlay ? 'pause' : 'play' }}
  </van-button>
</van-space>
```

```ts
export default {
  setup() {
    const defaultList = [
      { id: 100, text: 'Lightweight' },
      { id: 101, text: 'Customizable' },
      { id: 102, text: 'Mobile' },
      { id: 103, text: 'Vue' },
      { id: 104, text: 'Library' },
      { id: 105, text: 'VantUI' },
      { id: 106, text: '666' },
    ];

    const list = ref([...defaultList]);
    const barrage = ref<BarrageInstance>();
    const add = () => {
      list.value.push({ id: Math.random(), text: 'Barrage' });
    };

    const [isPlay, toggle] = useToggle(false);

    watch(isPlay, () => {
      if (isPlay.value) barrage.value?.play();
      else barrage.value?.pause();
    });

    return { list, barrage, isPlay, toggle, add };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Barrage data | _BarrageItem[]_ | - |
| auto-play | Whether to play the bullet screen automatically | _boolean_ | `true` |
| rows | The number of lines of text | _number \| string_ | `4` |
| top | Spacing between the top of the barrage area, unit `px` | _number \| string_ | `10` |
| duration | Text animation duration, unit `ms` | _number \| string_ | `4000` |
| delay | Barrage animation delay, unit `ms` | _number_ | `300` |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html) to get Barrage instance and call instance methods.

| Name  | Description   | Attribute | Return value |
| ----- | ------------- | --------- | ------------ |
| play  | Play barrage  | -         | -            |
| pause | Pause barrage | -         | -            |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Default slot |

### Types

The component exports the following type definitions:

```ts
import type { BarrageProps, BarrageItem, BarrageInstance } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                    | Default Value      | Description |
| ----------------------- | ------------------ | ----------- |
| --van-barrage-font-size | _16px_             | -           |
| --van-barrage-space     | _10px_             | -           |
| --van-barrage-color     | _var(--van-white)_ | -           |
| --van-barrage-font      | _inherit_          | -           |
