## Collapse

### Install
``` javascript
import { Collapse, CollapseItem } from 'vant';

Vue.use(Collapse).use(CollapseItem);
```

### Usage

#### Basic Usage
Use `v-model` to control the name of active panels

```html
<van-collapse v-model="activeNames">
  <van-collapse-item title="Title1" name="1">Content</van-collapse-item>
  <van-collapse-item title="Title2" name="2">Content</van-collapse-item>
  <van-collapse-item title="Title3" name="3" disabled>Content</van-collapse-item>
</van-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

#### Accordion
In accordion mode, only one panel can be expanded at the same time.

```html
<van-collapse v-model="activeName" accordion>
  <van-collapse-item title="Title1" name="1">Content</van-collapse-item>
  <van-collapse-item title="Title2" name="2">Content</van-collapse-item>
  <van-collapse-item title="Title3" name="3">Content</van-collapse-item>
</van-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeName: '1'
    };
  }
};
```

#### Custom title

```html
<van-collapse v-model="activeNames">
  <van-collapse-item name="1">
    <div slot="title">Title1<van-icon name="question-o" /></div>
    Content
  </van-collapse-item>
  <van-collapse-item
    title="Title2"
    name="2"
    icon="shop-o"
  >
    Content
  </van-collapse-item>
</van-collapse>
```



### Collapse API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | names of current active panels | `Array | String | Number` | - |
| accordion | Whether to be accordion mode | `Boolean` | `false` |
| border | Whether to show outer border | `Boolean` | `true` |

### Collapse Event

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when switch panel | activeNames: `string | array` |

### CollapseItem API

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Name | `String | Number` | `index` |
| icon | Left Icon | `String` | - |
| size | Title size，can be set to `large` | `String` | - |
| title | Title | `String | Number` | - |
| value | Right text | `String | Number` | - |
| label | Description below the title | `String` | - |
| border | Whether to show inner border | `Boolean` | `true` |
| disabled | Whether to disabled collapse | `Boolean` | `false` |
| is-link | Whether to show link icon | `Boolean` | `true` |
| title-class | Title className | `String` | - |
| value-class | Value className | `String` | - |
| label-class | Label className | `String` | - |

### CollapseItem Slot

| name | Description |
|------|------|
| - | Content |
| value | Custom value |
| icon | Custom icon |
| title | Custom title |
| right-icon | Custom right icon |
