## Panel

### Install
``` javascript
import { Panel } from 'vant';

Vue.use(Panel);
```

### Usage

#### Basic Usage

```html
<van-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
</van-panel>
```

#### Advanced Usage

```html
<van-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
  <div slot="footer">
    <van-button size="small">Button</van-button>
    <van-button size="small" type="danger">Button</van-button>
  </div>
</van-panel>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| icon | Left Icon | `String` | - |
| title | Title | `String` | - |
| desc | Description | `String` | - |
| status | Status | `String` | - |


### Slot

| name | Description |
|------|------|
| - | Default slot |
| header | Custom header |
| footer | Custom footer |
