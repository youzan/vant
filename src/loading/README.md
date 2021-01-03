# Loading

### Install

```js
import Vue from 'vue';
import { Loading } from 'vant';

Vue.use(Loading);
```

## Usage

### Type

```html
<van-loading />

<van-loading type="spinner" />
```

### Color

```html
<van-loading color="#1989fa" />

<van-loading type="spinner" color="#1989fa" />
```

### Size

```html
<van-loading size="24" />

<van-loading type="spinner" size="24px" />
```

### Text

```html
<van-loading size="24px">Loading...</van-loading>
```

### Vertical

```html
<van-loading size="24px" vertical>Loading...</van-loading>
```

### Text Color

use `color` or `text-color` to change text color.

```html
<!-- the color of text and icon will be changed -->
<van-loading color="#0094ff" />

<!-- only change text color -->
<van-loading text-color="#0094ff" />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| color | Loading color | _string_ | `#c9c9c9` |
| type | Can be set to `spinner` | _string_ | `circular` |
| size | Icon size | _number \| string_ | `30px` |
| text-size | Text font size | _number \| string_ | `14px` |
| text-color `v2.12.2` | Text color | _string_ | `#c9c9c9` |
| vertical | Whether to arrange icons and text content vertically | _boolean_ | `false` |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Loading text |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                                | Default Value   | Description |
| ----------------------------------- | --------------- | ----------- |
| @loading-text-color                 | `@gray-6`       | -           |
| @loading-text-font-size             | `@font-size-md` | -           |
| @loading-spinner-color              | `@gray-5`       | -           |
| @loading-spinner-size               | `30px`          | -           |
| @loading-spinner-animation-duration | `0.8s`          | -           |
