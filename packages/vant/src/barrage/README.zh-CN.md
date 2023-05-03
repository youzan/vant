# Barrage 弹幕

### 介绍

实现观看视频时弹出的评论性字幕功能。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Barrage } from 'vant';

const app = createApp();
app.use(Barrage);
```

## 代码演示

### 基础用法

设置 `barrage-list` 属性后，`Barrage` 会在组件区域内播放文字弹幕，使用 `add()` 可以发送弹幕文字。

```html
<van-barrage :barrage-list="list" ref="barrage">
  <div class="video" style="width: 100%; height: 150px"></div>
</van-barrage>
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

### 模拟视频弹幕

设置 `auto-play` 为 `false` 属性后，需要使用 `play()` 进行弹幕播放，暂停可以使用 `pause()` 实现。

```html
<van-barrage :barrage-list="list" ref="videoBarrage" :auto-play="false">
  <div class="video" style="width: 100%; height: 150px"></div>
</van-barrage>
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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| auto-play | 是否自动播放弹幕 | _boolean_ | `true` |
| rows | 弹幕文字行数 | _number \| string_ | `4` |
| top | 弹幕文字区域顶部间距，单位 `px` | _number \| string_ | `10` |
| speed | 文字滑过容器的时间，单位 `ms` | _number \| string_ | `4000` |
| delay | 弹幕动画延时，单位 `ms` | _number_ | `500` |
| barrageList | 弹幕数据 | _string[]_ | `["Vant", "Nice"]` |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 弹幕组件子元素 |

### 类型定义

组件导出以下类型定义：

```ts
import type { BarrageProps, BarrageInstance } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-barrage-font-size | _16px_ | - |
| --van-barrage-space | _10px_ | - |
| --van-barrage-color | _var(--van-white)_ | - |
| --van-barrage-font | _-apple-system-font, Helvetica Neue, Arial, sans-serif_ | - |
