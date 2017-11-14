## NoticeBar

### Install
``` javascript
import { NoticeBar } from 'vant';

Vue.component(NoticeBar.name, NoticeBar);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<van-notice-bar
  text="Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily."
  left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
/>
```
:::

#### Disable scroll

:::demo Disable scroll
```html
<van-notice-bar :scrollable="false">
  Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.
</van-notice-bar>
```
:::

#### Mode

:::demo Mode
```html
<van-notice-bar mode="closeable">
  Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.
</van-notice-bar>

<van-notice-bar mode="link">
  Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.
</van-notice-bar>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| mode | Mode | String | `''` | `closeable` `link` |
| delay | Animation delay (s) | Number | `1` | - |
| speed | Scroll speed (px) | Number | `50` | - |
| scrollable | Whether to scroll content | Boolean | `true` | - |
| leftIcon | Image url of left icon | String | - | - |
| color | Text color | String | `#f60` | - |
| background | Background color | String | `#fff7cc` | - |


### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| click | Triggered when click notice bar | - |
