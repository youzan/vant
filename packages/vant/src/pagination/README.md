# Pagination

### Intro

When the amount of data is too much, use pagination to separate the data, and load only one page at a time.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Pagination } from 'vant';

const app = createApp();
app.use(Pagination);
```

## Usage

### Basic Usage

```html
<van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentPage = ref(1);
    return { currentPage };
  },
};
```

### Simple mode

```html
<van-pagination v-model="currentPage" :page-count="12" mode="simple" />
```

### Show ellipses

```html
<van-pagination
  v-model="currentPage"
  :total-items="125"
  :show-page-size="3"
  force-ellipses
/>
```

### Custom Button

```html
<van-pagination v-model="currentPage" :total-items="50" :show-page-size="5">
  <template #prev-text>
    <van-icon name="arrow-left" />
  </template>
  <template #next-text>
    <van-icon name="arrow" />
  </template>
  <template #page="{ text }">{{ text }}</template>
</van-pagination>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Current page number | _number_ | - |
| mode | Mode, can be set to `simple` `multi` | _string_ | `multi` |
| prev-text | Previous text | _string_ | `Previous` |
| next-text | Next text | _string_ | `Next` |
| total-items | Total items | _number \| string_ | `0` |
| items-per-page | Item number per page | _number \| string_ | `10` |
| page-count | The total number of pages, if not set, will be calculated based on `total-items` and `items-per-page` | _number \| string_ | `-` |
| show-page-size | Count of page size to show | _number \| string_ | `5` |
| force-ellipses | Whether to show ellipses | _boolean_ | `false` |
| show-prev-button `v4.2.1` | Whether to show prev button | _boolean_ | `true` |
| show-next-button `v4.2.1` | Whether to show next button | _boolean_ | `true` |

### Events

| Event  | Description                       | Arguments |
| ------ | --------------------------------- | --------- |
| change | Emitted when current page changed | -         |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| page | Custom pagination item | _{ number: number, text: string, active: boolean }_ |
| prev-text | Custom prev text | - |
| next-text | Custom next text | - |

### Types

The component exports the following type definitions:

```ts
import type { PaginationMode, PaginationProps } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-pagination-height | _40px_ | - |
| --van-pagination-font-size | _var(--van-font-size-md)_ | - |
| --van-pagination-item-width | _36px_ | - |
| --van-pagination-item-default-color | _var(--van-primary-color)_ | - |
| --van-pagination-item-disabled-color | _var(--van-gray-7)_ | - |
| --van-pagination-item-disabled-background | _var(--van-background)_ | - |
| --van-pagination-background | _var(--van-background-2)_ | - |
| --van-pagination-desc-color | _var(--van-gray-7)_ | - |
| --van-pagination-disabled-opacity | _var(--van-disabled-opacity)_ | - |
