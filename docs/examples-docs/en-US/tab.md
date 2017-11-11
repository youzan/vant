<style>
.demo-tab {
  .van-tab__pane {
    background-color: #fff;
    padding: 20px;
  }

  .van-tabs--card .van-tab__pane {
    background-color: transparent;
  }

  .custom-tabwrap .van-tab-active {
    color: #20a0ff;
  }
  .custom-tabwrap .van-tabs-nav-bar {
    background: #20a0ff;
  }
  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
}
</style>

<script>
import { Toast } from 'packages/index';

export default {
  data() {
    return {
      active: 2
    };
  },
  mounted() {
    setTimeout(() => {
      this.active = 3;
    }, 1000);
  },
  methods: {
    onClickDisabled() {
      Toast('Disabled!');
    },

    handleTabClick(index) {
      alert(index);
    }
  }
};
</script>

## Tabs

### Install
``` javascript
import { Tab, Tabs } from 'vant';

Vue.component(Tab.name, Tab);
Vue.component(Tabs.name, Tabs);
```

### Usage

#### Basic Usage

By default, the first tab is actived.

:::demo Basic Usage
```html
<van-tabs>
  <van-tab title="tab 1">
    content of tab 1
  </van-tab>
  <van-tab title="tab 2">
    content of tab 2
  </van-tab>
  <van-tab title="tab 3">
    content of tab 3
  </van-tab>
  <van-tab title="tab 4">
    content of tab 4
  </van-tab>
</van-tabs>
```
:::

#### Active Specified tab

You can set `active` attribute on `van-tabs` to active specified tab.

:::demo Active Specified tab
```html
<van-tabs :active="active">
  <van-tab title="tab 1">
    content of tab 1
  </van-tab>
  <van-tab title="tab 2">
    content of tab 2
  </van-tab>
  <van-tab title="tab 3">
    content of tab 3
  </van-tab>
  <van-tab title="tab 4">
    content of tab 4
  </van-tab>
</van-tabs>

<script>
export default {
  data() {
    return {
      active: 2
    };
  }
}
</script>
```
:::

#### Tab duration time

You can use `duration` attribute to set tab duration time, the default time is `0.3s`.

:::demo Tab duration time
```html
<van-tabs :duration="0.6">
  <van-tab title="tab 1">
    content of tab 1
  </van-tab>
  <van-tab title="tab 2">
    content of tab 2
  </van-tab>
  <van-tab title="tab 3">
    content of tab 3
  </van-tab>
  <van-tab title="tab 4">
    content of tab 4
  </van-tab>
</van-tabs>
```
:::

#### Swipe Tabs

By default more than 4 tabs, you can scroll through the tabs. You can set `swipeThreshold` attribute to customize threshold number.

:::demo Swipe Tabs
```html
<van-tabs>
  <van-tab title="tab 1">
    content of tab 1
  </van-tab>
  <van-tab title="tab 2">
    content of tab 2
  </van-tab>
  <van-tab title="tab 3">
    content of tab 3
  </van-tab>
  <van-tab title="tab 4">
    content of tab 4
  </van-tab>
  <van-tab title="tab 5">
    content of tab 5
  </van-tab>
  <van-tab title="tab 6">
    content of tab 6
  </van-tab>
  <van-tab title="tab 7">
    content of tab 7
  </van-tab>
  <van-tab title="tab 8">
    content of tab 8
  </van-tab>
</van-tabs>
```
:::

#### Disabled Tab

You can set `disabled` attribute on the corresponding `van-tab`. 

:::demo Disabled Tab
```html
<van-tabs @disabled="onClickDisabled">
  <van-tab title="tab 1">
    content of tab 1
  </van-tab>
  <van-tab title="tab 2">
    content of tab 2
  </van-tab>
  <van-tab title="tab 3">
    content of tab 3
  </van-tab>
  <van-tab title="tab 4">
    content of tab 4
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
:::

#### Card Style

Tabs styled as cards.

:::demo Card Style
```html
<van-tabs type="card">
  <van-tab title="tab 1">
    content of tab 1
  </van-tab>
  <van-tab title="tab 2">
    content of tab 2
  </van-tab>
  <van-tab title="tab 3">
    content of tab 3
  </van-tab>
  <van-tab title="tab 4">
    content of tab 4
  </van-tab>
</van-tabs>
```
:::
<style>
  .custom-tabwrap .van-tab-active {
    color: #20a0ff;
  }
  .custom-tabwrap .van-tabs-nav-bar {
    background: #20a0ff;
  }
  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
</style>

#### Custom Style

You can set `css class` to customize tabs style.

:::demo Custom Style
```html
<van-tabs active="2" class="custom-tabwrap">
  <van-tab title="tab 1" class="custom-pane">
    content of tab 1
  </van-tab>
  <van-tab title="tab 2" class="custom-pane">
    content of tab 2
  </van-tab>
  <van-tab title="tab 3" class="custom-pane">
    content of tab 3
  </van-tab>
  <van-tab title="tab 4" class="custom-pane">
    content of tab 4
  </van-tab>
</van-tabs>

<style>
  .custom-tabwrap .van-tab-active {
    color: #20a0ff;
  }
  .custom-tabwrap .van-tabs-nav-bar {
    background: #20a0ff;
  }
  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
</style>
```
:::

#### Click Event

You can bind `click` event on `van-tabs`, the event handler function has one parameters: index of click tab.

:::demo Click Event
```html
<van-tabs @click="handleTabClick">
  <van-tab title="tab 1" class="custom-pane">
    content of tab 1
  </van-tab>
  <van-tab title="tab 2" class="custom-pane">
    content of tab 2
  </van-tab>
  <van-tab title="tab 3" class="custom-pane">
    content of tab 3
  </van-tab>
  <van-tab title="tab 4" class="custom-pane">
    content of tab 4
  </van-tab>
</van-tabs>
```

```javascript
export default {
  methods: {
    handleTabClick(index) {
      alert(index);
    }
  }
};
```
:::

### van-tabs API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| type | There are two style tabs, set this attribute to change tab style | `String` | `line` |     `line`, `card` |
| active | Index of active tab | `String`, `Number` | `0` | - |
| duration | Toggle tab's animation time | `Number` | `0.3` | - | - |
| swipeThreshold | Set swipe tabs threshold | `Number` | `4` | - | - |

### van-tab API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| title | Tab title | `String` | - | - |
| disabled | Whether disabled current tab | `Boolean` | `false` | - |

### van-tabs Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| click | Triggered when click tab | index：index of current tab |
| disabled | Triggered when click disabled tab | index：index of current tab |

