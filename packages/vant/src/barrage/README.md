# Barrage

### Intro

To realize the critical subtitle function when watching the video.

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
<van-barrage :barrage-list="list" ref="barrage"></van-barrage>
<van-space style="margin-top: 10px">
  <van-button @click="barrage?.add('Barrage')" type="primary" size="small">
    barrage
  </van-button>
</van-space>
```

```ts
export default {
  setup() {
    const list = [
      '轻量',
      '可定制的',
      '移动端',
      'Vue',
      '组件库',
      'VantUI',
      '666',
    ];
    const barrage = ref<BarrageInstance>();
    return { list, barrage };
  },
};
```

### Imitate video barrage

```html
<van-barrage
  :barrage-list="list"
  ref="videoBarrage"
  :auto-play="false"
></van-barrage>
<van-space style="margin-top: 10px">
  <van-button
    @click="videoBarrage?.add('Barrage')"
    type="primary"
    size="small"
    :disabled="!isPlay"
  >
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
    const list = [
      '轻量',
      '可定制的',
      '移动端',
      'Vue',
      '组件库',
      'VantUI',
      '666',
    ];

    const videoBarrage = ref<BarrageInstance>();

    const [isPlay, toggle] = useToggle(false);

    watch(isPlay, () => {
      if (isPlay.value) videoBarrage.value?.play();
      else videoBarrage.value?.pause();
    });

    return { list, videoBarrage, isPlay, toggle };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| autoPlay | Whether to play the bullet screen automatically | _boolean_ | `true` |
| rows | The number of lines of text | _number \| string_ | `4` |
| top | Spacing between the top of the barrage area, unit `px` | _number \| string_ | `10` |
| speed | Speed of passing, unit `ms` | _number \| string_ | `4000` |
| delay | Barrage animation delay, unit `ms` | _number_ | `500` |
| barrageList | Barrage data | _string_ | `["Vant", "Nice"]` |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Default slot |

### Types

The component exports the following type definitions:

```ts
import type { BarrageProps, BarrageInstance } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-barrage-font-size | _16px_ | - |
| --van-barrage-space | _10px_ | - |
| --van-barrage-color | _var(--van-white)_ | - |
| --van-barrage-font | _-apple-system-font, Helvetica Neue, Arial, sans-serif_ | - |
