# Collapse

### Install

```js
import Vue from 'vue';
import { Collapse, CollapseItem } from 'vant';

Vue.use(Collapse);
Vue.use(CollapseItem);
```

## Usage

### Basic Usage

Use `v-model` to control the name of active panels

```html
<van-collapse v-model="activeNames">
  <van-collapse-item title="Title1" name="1">Content</van-collapse-item>
  <van-collapse-item title="Title2" name="2">Content</van-collapse-item>
  <van-collapse-item title="Title3" name="3" disabled>Content</van-collapse-item>
</van-collapse>
```

```js
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

### Accordion

In accordion mode, only one panel can be expanded at the same time.

```html
<van-collapse v-model="activeName" accordion>
  <van-collapse-item title="Title1" name="1">Content</van-collapse-item>
  <van-collapse-item title="Title2" name="2">Content</van-collapse-item>
  <van-collapse-item title="Title3" name="3">Content</van-collapse-item>
</van-collapse>
```

```js
export default {
  data() {
    return {
      activeName: '1'
    };
  }
};
```

### Custom title

```html
<van-collapse v-model="activeNames">
  <van-collapse-item name="1">
    <template #title>
      <div>Title1 <van-icon name="question-o" /></div>
    </template>
    Content
  </van-collapse-item>
  <van-collapse-item title="Title2" name="2" icon="shop-o">
    Content
  </van-collapse-item>
</van-collapse>
```

```js
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

## API

### Collapse Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Names of current active panels | accordion mode： *number \| string*<br>non-accordion mode：*(number \| string)[]* | - |
| accordion | Whether to be accordion mode | *boolean* | `false` |
| border | Whether to show outer border | *boolean* | `true` |

### Collapse Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when switch panel | activeNames |

### CollapseItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Name | *number \| string* | `index` |
| icon | Left Icon | *string* | - |
| size | Title size，can be set to `large` | *string* | - |
| title | Title | *number \| string* | - |
| value | Right text | *number \| string* | - |
| label | Description below the title | *string* | - |
| border | Whether to show inner border | *boolean* | `true` |
| disabled | Whether to disabled collapse | *boolean* | `false` |
| is-link | Whether to show link icon | *boolean* | `true` |
| title-class | Title className | *string* | - |
| value-class | Value className | *string* | - |
| label-class | Label className | *string* | - |

### CollapseItem Slots

| Name | Description |
|------|------|
| default | Content |
| value | Custom value |
| icon | Custom icon |
| title | Custom title |
| right-icon | Custom right icon |
