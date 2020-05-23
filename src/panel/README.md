# Panel

### Deprecate Tip

The Panel component will be deprecated in version 3.0. Please use the Cell and Button components instead.

### Install

```js
import Vue from 'vue';
import { Panel } from 'vant';

Vue.use(Panel);
```

## Usage

### Basic Usage

```html
<van-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
</van-panel>
```

### Advanced Usage

```html
<van-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
  <template #footer>
    <van-button size="small">Button</van-button>
    <van-button size="small" type="danger">Button</van-button>
  </template>
</van-panel>
```

## API

### Props

| Attribute | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| icon      | Left Icon   | _string_ | -       |
| title     | Title       | _string_ | -       |
| desc      | Description | _string_ | -       |
| status    | Status      | _string_ | -       |

### Slots

| Name    | Description   |
| ------- | ------------- |
| default | Default slot  |
| header  | Custom header |
| footer  | Custom footer |
