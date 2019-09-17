# Tab

### Install

``` javascript
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);
```

## Usage

### Basic Usage

The first tab is actived by default, you can set `v-model` to active specified tab.

```html
<van-tabs v-model="active">
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

### Match By Name

```html
<van-tabs v-model="activeName">
  <van-tab title="tab 1" name="a">content of tab 1</van-tab>
  <van-tab title="tab 2" name="b">content of tab 2</van-tab>
  <van-tab title="tab 3" name="c">content of tab 3</van-tab>
</van-tabs>
```

```js
export default {
  data() {
    return {
      activeName: 'a'
    };
  }
}
```

### Swipe Tabs

By default more than 4 tabs, you can scroll through the tabs. You can set `swipe-threshold` attribute to customize threshold number.

```html
<van-tabs>
  <van-tab v-for="index in 8" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

### Disabled Tab

You can set `disabled` attribute on the corresponding `van-tab`. 

```html
<van-tabs @disabled="onClickDisabled">
  <van-tab v-for="index in 3" :title="'tab' + index" :disabled="index === 2">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

```javascript
export default {
  methods: {
    onClickDisabled(name, title) {
      this.$toast(title + ' is disabled');
    }
  }
};
```

### Card Style

Tabs styled as cards.

```html
<van-tabs type="card">
  <van-tab v-for="index in 3" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

### Click Event

```html
<van-tabs @click="onClick">
  <van-tab v-for="index in 2" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

```javascript
export default {
  methods: {
    onClick(name, title) {
      this.$toast(title);
    }
  }
};
```

### Sticky

In sticky mode, the tab will be fixed to top when scroll to top

```html
<van-tabs v-model="active" sticky>
  <van-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </van-tab>
</van-tabs>
```

### Custom title

Use title slot to custom tab title

```html
<van-tabs v-model="active">
  <van-tab v-for="index in 2">
    <div slot="title">
      <van-icon name="more-o" />tab
    </div>
    content {{ index }}
  </van-tab>
</van-tabs>
```

### Switch Animation

Use `animated` props to change tabs with animation

```html
<van-tabs v-model="active" animated>
  <van-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </van-tab>
</van-tabs>
```

### Swipeable

In swipeable mode, you can switch tabs with swipe gestrue in the content

```html
<van-tabs v-model="active" swipeable>
  <van-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </van-tab>
</van-tabs>
```

## API

### Tabs Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| v-model | Index of active tab | *string \| number* | `0` | - |
| type | Can be set to `line` `card` | *string* | `line` | - |
| duration | Toggle tab's animation time | *number* | `0.3` | - | - |
| background | Background color | *string* | `white` | - |
| line-width | Width of tab line | *string \| number* | Width of active tab | - |
| line-height | Height of tab line | *string \| number* | `3px` | - |
| color | Tab color | *string* | `#ee0a24` | - |
| title-active-color | Title active color | *string* | - | - |
| title-inactive-color | Title inactive color | *string* | - | - |
| swipe-threshold | Set swipe tabs threshold | *number* | `4` | - | - |
| offset-top | Offset top when use sticky mode | *number* | `0` | - |
| animated | Whether to change tabs with animation | *boolean* | `false` | - |
| border | Whether to show border when `type="line"` | *boolean* | `true` | - |
| ellipsis | Whether to ellipsis too long title | *boolean* | `true` | - |
| sticky | Whether to use sticky mode | *boolean* | `false` | - |
| swipeable | Whether to switch tabs with swipe gestrue in the content | *boolean* | `false` | - |
| lazy-render | Whether to enable tab content lazy render | *boolean* | `true` | - |

### Tab Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| name | Identifier | *string \| number* | Index of tab | - |
| title | Title | *string* | - | - |
| disabled | Whether to disable tab | *boolean* | `false` | - |
| url | Link | *string* | - | 2.2.1 |
| to | Target route of the link, same as to of vue-router | *string \| object* | - | 2.2.1 |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` | 2.2.1 |

### Tabs Slots

| Name | Description |
|------|------|
| nav-left | Custom nav left content |
| nav-right | Custom nav right content |

### Tab Slots

| Name | Description |
|------|------|
| default | Content of tab |
| title | Custom tab title |

### Tabs Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click tab | name：name of current tab，title: tab title |
| change | Triggered when active tab changed | name：name of current tab，title: tab title |
| disabled | Triggered when click disabled tab | name：name of current tab, title: tab title |
| scroll | Triggered when tab scroll in sticky mode | object: { scrollTop, isFixed } |
