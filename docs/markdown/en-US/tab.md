## Tabs

### Install
``` javascript
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
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

By default more than 4 tabs, you can scroll through the tabs. You can set `swipeThreshold` attribute to customize threshold number.

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
    onClickDisabled() {
      Toast('Disabled!');
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

You can bind `click` event on `van-tabs`, the event handler function has one parameters: index of click tab.

```html
<van-tabs @click="handleTabClick">
  <van-tab v-for="index in 4" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

```javascript
export default {
  methods: {
    handleTabClick(index) {
      Toast(index);
    }
  }
};
```

#### Sticky
In sticky mode, the tab will be fixed to top when scroll to top

```html
<van-tabs :active="active" sticky>
  <van-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

### Tabs API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| type | There are two style tabs, set this attribute to change tab style | `String` | `line` | `card` |
| active | Index of active tab | `String` `Number` | `0` | - |
| duration | Toggle tab's animation time | `Number` | `0.2` | - | - |
| swipeThreshold | Set swipe tabs threshold | `Number` | `4` | - | - |

### Tab API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| title | Tab title | `String` | - | - |
| disabled | Whether disabled current tab | `Boolean` | `false` | - |

### Tabs Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| click | Triggered when click tab | index：index of current tab |
| disabled | Triggered when click disabled tab | index：index of current tab |

