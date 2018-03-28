## Tab

### Install
``` javascript
import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);
```

### Usage

#### Basic Usage

By default, the first tab is actived. You can set `active` attribute on `van-tabs` to active specified tab.

```html
<van-tabs :active="active">
  <van-tab v-for="index in 4" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

```js
export default {
  data() {
    return {
      active: 2
    };
  }
}
```

#### Swipe Tabs

By default more than 4 tabs, you can scroll through the tabs. You can set `swipe-threshold` attribute to customize threshold number.

```html
<van-tabs>
  <van-tab v-for="index in 8" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

#### Disabled Tab

You can set `disabled` attribute on the corresponding `van-tab`. 

```html
<van-tabs @disabled="onClickDisabled">
  <van-tab v-for="index in 4" :title="'tab' + index" :disabled="index === 2">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

```javascript
export default {
  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + ' is disabled');
    }
  }
};
```

#### Card Style

Tabs styled as cards.

```html
<van-tabs type="card">
  <van-tab v-for="index in 4" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

#### Click Event

```html
<van-tabs @click="onClick">
  <van-tab v-for="index in 4" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

```javascript
export default {
  methods: {
    onClick(index, title) {
      this.$toast(title);
    }
  }
};
```

#### Sticky
In sticky mode, the tab will be fixed to top when scroll to top

```html
<van-tabs :active="active" sticky>
  <van-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </van-tab>
</van-tabs>
```

#### Custom title
Use title slot to custom tab title

```html
<van-tabs :active="active">
  <van-tab v-for="index in 2">
    <div slot="title">
      <van-icon name="more-o" />tab
    </div>
    content {{ index }}
  </van-tab>
</van-tabs>
```

#### Swipeable

In swipeable mode, you can switch tabs with swipe gestrue in the content

```html
<van-tabs :active="active" swipeable>
  <van-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </van-tab>
</van-tabs>
```

### Tabs API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| type | There are two style tabs, set this attribute to change tab style | `String` | `line` | `card` |
| active | Index of active tab | `String` `Number` | `0` | - |
| duration | Toggle tab's animation time | `Number` | `0.2` | - | - |
| swipe-threshold | Set swipe tabs threshold | `Number` | `4` | - | - |
| sticky | Whether to use sticky mode | `Boolean` | `false` | - |
| swipeable | Whether to switch tabs with swipe gestrue in the content | `Boolean` | `false` | - |

### Tab API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| title | Title | `String` | - | - |
| disabled | Whether to disable tab | `Boolean` | `false` | - |

### Tab Slot

| name | Description |
|-----------|-----------|
| - | Content |
| title | Custom tab |

### Tabs Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| click | Triggered when click tab | index：index of current tab，title: tab title |
| disabled | Triggered when click disabled tab | index：index of current tab, title: tab title |
