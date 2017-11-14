## Panel

### Install
``` javascript
import { Panel } from 'vant';

Vue.component(Panel.name, Panel);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<van-panel title="Title" desc="Description" status="Status">
  <div>Panel Content</div>
</van-panel>
```
:::

#### Advanced Usage

:::demo Advanced Usage
```html
<van-panel title="Title" desc="Description" status="Status">
  <div>Panel Content</div>
  <div slot="footer">
    <van-button size="small">Button</van-button>
    <van-button size="small" type="danger">Button</van-button>
  </div>
</van-panel>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| title | Title | `String` | - | - |
| desc | Description | `String` | - | - |
| status | Status | `String` | - | - |


### Slot

| name | Description |
|-----------|-----------|
| - | Default slot |
| header | Custom header |
| footer | Custom footer |
