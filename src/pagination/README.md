# Pagination

### Install

```js
import Vue from 'vue';
import { Pagination } from 'vant';

Vue.use(Pagination);
```

## Usage

### Basic Usage

```html
<van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
```

```js
export default {
  data() {
    return {
      currentPage: 1,
    };
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

### Events

| Event  | Description                       | Arguments |
| ------ | --------------------------------- | --------- |
| change | Emitted when current page changed | -         |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| page `v2.10.9` | Custom pagination item | _{ number: number, text: string, active: boolean }_ |
| prev-text `v2.10.9` | Custom prev text | `-` |
| next-text `v2.10.9` | Custom next text | `-` |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @pagination-height | `40px` | - |
| @pagination-font-size | `@font-size-md` | - |
| @pagination-item-width | `36px` | - |
| @pagination-item-default-color | `@blue` | - |
| @pagination-item-disabled-color | `@gray-7` | - |
| @pagination-item-disabled-background-color | `@background-color` | - |
| @pagination-background-color | `@white` | - |
| @pagination-desc-color | `@gray-7` | - |
| @pagination-disabled-opacity | `@disabled-opacity` | - |
