# PullRefresh

### Install

```js
import Vue from 'vue';
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
```

## Usage

### Basic Usage

The `refresh` event will be triggered when pull refresh, you should set `v-model` to `false` to reset loading status after process refresh event.

```html
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <p>Refresh Count: {{ count }}</p>
</van-pull-refresh>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      count: 0,
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('Refresh Success');
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  }
}
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

Use slots to custom tips

```html
<van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
  <template #pulling="props">
    <img
      class="doge"
      src="https://img.yzcdn.cn/vant/doge.png"
      :style="{ transform: `scale(${props.distance / 80})` }"
    />
  </template>

  <template #loosing>
    <img
      class="doge"
      src="https://img.yzcdn.cn/vant/doge.png"
    />
  </template>  

  <template #loading>
    <img
      class="doge"
      src="https://img.yzcdn.cn/vant/doge-fire.jpg"
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
|------|------|------|------|
| v-model | Loading status | *boolean* | - |
| pulling-text | Text to show when pulling | *string* | `Pull to refresh...` |
| loosing-text | Text to show when loosing | *string* | `Loose to refresh...` |
| loading-text | Text to show when loading | *string* | `Loading...` |
| success-text | Text to show when loading success | *string* | - |
| success-duration | Success text display duration(ms) | *number \| string* | `500` |
| animation-duration | Animation duration | *number \| string* | `300` |
| head-height `v2.4.2` | Height of head | *number \| string* | `50` |
| disabled | Whether to disable pull refresh | *boolean* | `false` |

### Events

| Event | Description | Parameters |
|------|------|------|
| refresh | Triggered when pull refresh | - |

### Slots

| Name | Description | SlotProps |
|------|------|------|
| default | Default slot | - |
| normal | Content of head when at normal status | - |
| pulling | Content of head when at pulling | { distance } |
| loosing | Content of head when at loosing | { distance } |
| loading | Content of head when at loading | { distance } |
| success | Content of head when succeed | - |
