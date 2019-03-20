## NoticeBar

### Install
``` javascript
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);
```

### Usage

#### Basic Usage

```html
<van-notice-bar
  text="Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily."
  left-icon="volume-o"
/>
```

#### Mode

```html
<van-notice-bar mode="closeable">
  Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.
</van-notice-bar>

<van-notice-bar mode="link">
  Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.
</van-notice-bar>
```

#### Disable scroll

```html
<van-notice-bar :scrollable="false">
  Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.
</van-notice-bar>
```

#### Wrapable

```html
<van-notice-bar wrapable :scrollable="false">
  Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.
</van-notice-bar>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| mode | Mode, can be set to `closeable` `link` | `String` | `''` |
| text | Notice text content | `String` | `''` | - |
| delay | Animation delay (s) | `Number` | `1` |
| speed | Scroll speed (px/s) | `Number` | `50` |
| scrollable | Whether to scroll content | `Boolean` | `true` |
| wrapable | Whether to enable text wrap | `Boolean` | `false` | - |
| left-icon | Left Icon | `String` | - |
| color | Text color | `String` | `#f60` |
| background | Background color | `String` | `#fff7cc` |

### Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click NoticeBar | - |
| click | Triggered when closed | - |

### Slot

| Name | Description |
|------|------|
| - | Notice text content
