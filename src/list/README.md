# List

### Intro

A list component to show items and control loading status.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

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
  v-model:loading="state.loading"
  :finished="state.finished"
  finished-text="Finished"
  @load="onLoad"
>
  <van-cell v-for="item in state.list" :key="item" :title="item" />
</van-list>
```

```js
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
    });

    const onLoad = () => {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          state.list.push(state.list.length + 1);
        }
        state.loading = false;

        if (state.list.length >= 40) {
          state.finished = true;
        }
      }, 1000);
    };

    return {
      state,
      onLoad,
    };
  },
};
```

### Error Info

```html
<van-list
  v-model:loading="state.loading"
  v-model:error="state.error"
  error-text="Request failed. Click to reload"
  @load="onLoad"
>
  <van-cell v-for="item in state.list" :key="item" :title="item" />
</van-list>
```

```js
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      list: [],
      error: false,
      loading: false,
    });

    const onLoad = () => {
      fetchSomeThing().catch(() => {
        state.error = true;
      });
    };

    return {
      state,
      onLoad,
    };
  },
};
```

### PullRefresh

```html
<van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
  <van-list
    v-model:loading="state.loading"
    :finished="state.finished"
    finished-text="Finished"
    @load="onLoad"
  >
    <van-cell v-for="item in state.list" :key="item" :title="item" />
  </van-list>
</van-pull-refresh>
```

```js
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    });

    const onLoad = () => {
      setTimeout(() => {
        if (state.refreshing) {
          state.list = [];
          state.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          state.list.push(state.list.length + 1);
        }
        state.loading = false;

        if (state.list.length >= 40) {
          state.finished = true;
        }
      }, 1000);
    };

    const onRefresh = () => {
      state.finished = false;
      state.loading = true;
      onLoad();
    };

    return {
      state,
      onLoad,
      onRefresh,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:loading | Whether to show loading info，the `load` event will not be Emitted when loading | _boolean_ | `false` |
| v-model:error | Whether loading is error，the `load` event will be Emitted only when error text clicked | _boolean_ | `false` |
| finished | Whether loading is finished，the `load` event will not be Emitted when finished | _boolean_ | `false` |
| offset | The load event will be Emitted when the distance between the scrollbar and the bottom is less than offset | _number \| string_ | `300` |
| loading-text | Loading text | _string_ | `Loading...` |
| finished-text | Finished text | _string_ | - |
| error-text | Error loaded text | _string_ | - |
| immediate-check | Whether to check loading position immediately after mounted | _boolean_ | `true` |
| direction | Scroll direction，can be set to `up` | _string_ | `down` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| load | Emitted when the distance between the scrollbar and the bottom is less than offset | - |

### Methods

Use [ref](https://v3.vuejs.org/guide/component-template-refs.html) to get List instance and call instance methods.

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

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                         | Default Value             | Description |
| ---------------------------- | ------------------------- | ----------- |
| --van-list-text-color        | _var(--van-gary-6)_       | -           |
| --van-list-text-font-size    | _var(--van-font-size-md)_ | -           |
| --van-list-text-line-height  | _50px_                    | -           |
| --van-list-loading-icon-size | _16px_                    | -           |
