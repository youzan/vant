# List

### Intro

A list component to show items and control loading status.

### Install

```js
import { createApp } from 'vue';
import { List } from 'vant';

const app = createApp();
app.use(List);
```

## Usage

### Basic Usage

```html
<van-list
  v-model:loading="loading"
  :finished="finished"
  finished-text="Finished"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
```

```js
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
```

### Error Info

```html
<van-list
  v-model:loading="loading"
  v-model:error="error"
  error-text="Request failed. Click to reload"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
```

```js
export default {
  data() {
    return {
      list: [],
      error: false,
      loading: false,
    };
  },
  methods: {
    onLoad() {
      fetchSomeThing().catch(() => {
        this.error = true;
      });
    },
  },
};
```

### PullRefresh

```html
<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="Finished"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item" :title="item" />
  </van-list>
</van-pull-refresh>
```

```js
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:loading | Whether to show loading info，the `load` event will not be triggered when loading | _boolean_ | `false` |
| finished | Whether loading is finished，the `load` event will not be triggered when finished | _boolean_ | `false` |
| error | Whether loading is error，the `load` event will be triggered only when error text clicked, the `sync` modifier is needed | _boolean_ | `false` |
| offset | The load event will be triggered when the distance between the scrollbar and the bottom is less than offset | _number \| string_ | `300` |
| loading-text | Loading text | _string_ | `Loading...` |
| finished-text | Finished text | _string_ | - |
| error-text | Error loaded text | _string_ | - |
| immediate-check | Whether to check loading position immediately after mounted | _boolean_ | `true` |
| direction | Scroll direction，can be set to `up` | _string_ | `down` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| load | Triggered when the distance between the scrollbar and the bottom is less than offset | - |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get List instance and call instance methods.

| Name  | Description           | Attribute | Return value |
| ----- | --------------------- | --------- | ------------ |
| check | Check scroll position | -         | -            |

### Slots

| Name     | Description          |
| -------- | -------------------- |
| default  | List content         |
| loading  | Custom loading tips  |
| finished | Custom finished tips |
| error    | Custom error tips    |
