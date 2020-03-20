# Panel

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

| Attribute | Description | Type | Default |
|------|------|------|------|
| icon | Left Icon | *string* | - |
| title | Title | *string* | - |
| desc | Description | *string* | - |
| status | Status | *string* | - |

### Slots

| Name | Description |
|------|------|
| default | Default slot |
| header | Custom header |
| footer | Custom footer |
