# Barrage 弹幕

### 介绍

实现观看视频时弹出的评论性字幕功能。请升级 `vant` 到 >= 4.4.0 版本来使用该组件。

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

可以通过 `v-model` 双向绑定弹幕数据，`Barrage` 会在组件区域内播放文字弹幕，使用数组数据 `push()` 可以发送弹幕文字。

```html
<van-barrage v-model="list">
  <div class="video" style="width: 100%; height: 150px"></div>
</van-barrage>
<van-space style="margin-top: 10px">
  <van-button @click="add" type="primary" size="small"> 弹幕 </van-button>
</van-space>
```

```ts
export default {
  setup() {
    const defaultList = [
      { id: 100, text: '轻量' },
      { id: 101, text: '可定制的' },
      { id: 102, text: '移动端' },
      { id: 103, text: 'Vue' },
      { id: 104, text: '组件库' },
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

### 模拟视频弹幕

设置 `auto-play` 为 `false` 属性后，需要使用 `play()` 进行弹幕播放，暂停可以使用 `pause()` 实现。

```html
<van-barrage v-model="list" ref="barrage" :auto-play="false">
  <div class="video" style="width: 100%; height: 150px"></div>
</van-barrage>
<van-space style="margin-top: 10px">
  <van-button @click="add" type="primary" size="small" :disabled="!isPlay">
    弹幕
  </van-button>
  <van-button @click="toggle()" size="small">
    {{ isPlay ? '暂停' : '开始' }}
  </van-button>
</van-space>
```

```ts
export default {
  setup() {
    const defaultList = [
      { id: 100, text: '轻量' },
      { id: 101, text: '可定制的' },
      { id: 102, text: '移动端' },
      { id: 103, text: 'Vue' },
      { id: 104, text: '组件库' },
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

| 参数      | 说明                              | 类型               | 默认值 |
| --------- | --------------------------------- | ------------------ | ------ |
| v-model   | 弹幕数据                          | _BarrageItem[]_    | -      |
| auto-play | 是否自动播放弹幕                  | _boolean_          | `true` |
| rows      | 弹幕文字行数                      | _number \| string_ | `4`    |
| top       | 弹幕文字区域顶部间距，单位 `px`   | _number \| string_ | `10`   |
| duration  | 弹幕文字滑过容器的时间，单位 `ms` | _number \| string_ | `4000` |
| delay     | 弹幕动画延时，单位 `ms`           | _number_           | `300`  |

### 方法

通过 ref 可以获取到 Barrage 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明     | 参数 | 返回值 |
| ------ | -------- | ---- | ------ |
| play   | 播放弹幕 | -    | -      |
| pause  | 暂停弹幕 | -    | -      |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 弹幕组件子元素 |

### 类型定义

组件导出以下类型定义：

```ts
import type { BarrageProps, BarrageItem, BarrageInstance } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                    | 默认值             | 描述 |
| ----------------------- | ------------------ | ---- |
| --van-barrage-font-size | _16px_             | -    |
| --van-barrage-space     | _10px_             | -    |
| --van-barrage-color     | _var(--van-white)_ | -    |
| --van-barrage-font      | _inherit_          | -    |
