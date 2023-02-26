# PullRefresh

### Intro

Used to provide interactive operations for pull-down refresh.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { PullRefresh } from 'vant';

const app = createApp();
app.use(PullRefresh);
```

## Usage

### Basic Usage

The `refresh` event will be Emitted when pull refresh, you should set `v-model` to `false` to reset loading status after process refresh event.

```html
<van-pull-refresh v-model="loading" @refresh="onRefresh">
  <p>Refresh Count: {{ count }}</p>
</van-pull-refresh>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const count = ref(0);
    const loading = ref(false);
    const onRefresh = () => {
      setTimeout(() => {
        showToast('Refresh Success');
        loading.value = false;
        count.value++;
      }, 1000);
    };

    return {
      count,
      loading,
      onRefresh,
    };
  },
};
```

### Success Tip

Use `success-text` to set the success prompt after the refresh is successful

```html
<van-pull-refresh
  v-model="isLoading"
  success-text="Refresh success"
  @refresh="onRefresh"
>
  <p>Refresh Count: {{ count }}</p>
</van-pull-refresh>
```

### Custom Tips

Use slots to custom tips.

```html
<van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
  <template #pulling="props">
    <img
      class="doge"
      src="https://fastly.jsdelivr.net/npm/@vant/assets/doge.png"
      :style="{ transform: `scale(${props.distance / 80})` }"
    />
  </template>

  <template #loosing>
    <img
      class="doge"
      src="https://fastly.jsdelivr.net/npm/@vant/assets/doge.png"
    />
  </template>

  <template #loading>
    <img
      class="doge"
      src="https://fastly.jsdelivr.net/npm/@vant/assets/doge-fire.jpeg"
    />
  </template>
  <p>Refresh Count: {{ count }}</p>
</van-pull-refresh>

<style>
  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }
</style>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Loading status | _boolean_ | - |
| pulling-text | Text to show when pulling | _string_ | `Pull to refresh...` |
| loosing-text | Text to show when loosing | _string_ | `Loose to refresh...` |
| loading-text | Text to show when loading | _string_ | `Loading...` |
| success-text | Text to show when loading success | _string_ | - |
| success-duration | Success text display duration(ms) | _number \| string_ | `500` |
| animation-duration | Animation duration | _number \| string_ | `300` |
| head-height | Height of head | _number \| string_ | `50` |
| pull-distance | The distance to trigger the pull refresh | _number \| string_ | same as `head-height` |
| disabled | Whether to disable pull refresh | _boolean_ | `false` |

### Events

| Event | Description | Parameters |
| --- | --- | --- |
| refresh | Emitted after pulling refresh | - |
| change | Emitted when draging or status changed | _{ status: string, distance: number }_ |

### Slots

| Name    | Description                           | SlotProps              |
| ------- | ------------------------------------- | ---------------------- |
| default | Default slot                          | -                      |
| normal  | Content of head when at normal status | -                      |
| pulling | Content of head when at pulling       | _{ distance: number }_ |
| loosing | Content of head when at loosing       | _{ distance: number }_ |
| loading | Content of head when at loading       | _{ distance: number }_ |
| success | Content of head when succeed          | -                      |

### Types

The component exports the following type definitions:

```ts
import type { PullRefreshProps } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-pull-refresh-head-height | _50px_ | - |
| --van-pull-refresh-head-font-size | _var(--van-font-size-md)_ | - |
| --van-pull-refresh-head-text-color | _var(--van-text-color-2)_ | - |
| --van-pull-refresh-loading-icon-size | _16px_ | - |
