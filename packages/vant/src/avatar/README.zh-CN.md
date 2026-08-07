# Avatar 头像

### 介绍

用来代表用户或事物，支持图片、文本或图标展示。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Avatar } from 'vant';

const app = createApp();
app.use(Avatar);
```

## 代码演示

### 基础用法

头像支持三种类型：图片、文本和图标。

```html
<van-avatar :src="avatarURL" />
<van-avatar text="U" />
<van-avatar icon="user-o" />
```

### 头像形状

通过 `shape` 属性可以设置头像形状，支持 `round` 圆形和 `square` 方形，默认为圆形。

```html
<van-avatar :src="avatarURL" shape="square" />
<van-avatar :src="avatarURL" shape="round" />
```

### 头像尺寸

通过 `size` 属性可以设置头像尺寸，支持预设尺寸和自定义数值。

```html
<!-- 预设尺寸 -->
<van-avatar :src="avatarURL" size="large" />
<van-avatar :src="avatarURL" size="medium" />
<van-avatar :src="avatarURL" size="normal" />
<van-avatar :src="avatarURL" size="small" />

<!-- 自定义尺寸 -->
<van-avatar :src="avatarURL" size="80" />
<van-avatar :src="avatarURL" :size="60" />
```

### 自定义颜色

通过 `bg-color` 和 `color` 属性可以自定义背景色和文字颜色。

```html
<van-avatar text="V" bg-color="#DC143C" color="#fff" />
<van-avatar text="A" bg-color="#228B22" color="#fff" />
<van-avatar text="N" bg-color="#1E90FF" color="#fff" />
<van-avatar text="T" bg-color="#8A2BE2" color="#fff" />
<van-avatar icon="user-o" bg-color="#EEEEEE" color="#7B8198" />
```

### 带徽记的头像

结合 Badge 组件使用，可以在头像右上角显示徽记。

```html
<van-badge content="10" position="top-left">
  <van-avatar :src="avatarURL" shape="square" />
</van-badge>

<van-badge :content="20">
  <van-avatar :src="avatarURL" shape="square" />
</van-badge>

<van-badge dot>
  <van-avatar :src="avatarURL" shape="square" />
</van-badge>

<van-badge dot>
  <van-avatar text="A" shape="square" />
</van-badge>
```

### 头像组

使用 AvatarGroup 组件可以将多个头像组合展示，支持层叠效果。

```html
<!-- 基础头像组 -->
<van-avatar-group :max-count="4">
  <van-avatar :src="avatarURL" />
  <van-avatar :src="avatarURL2" />
  <van-avatar text="A" bg-color="#1E90FF" />
  <van-avatar text="B" bg-color="#228B22" />
  <van-avatar text="C" bg-color="#DC143C" />
  <van-avatar icon="user-o" bg-color="#8A2BE2" />
</van-avatar-group>

<!-- 左侧叠层 -->
<van-avatar-group :max-count="4" cascading="left-up">
  <van-avatar :src="avatarURL" />
  <van-avatar :src="avatarURL2" />
  <van-avatar text="A" bg-color="#1E90FF" />
  <van-avatar text="B" bg-color="#228B22" />
  <van-avatar text="C" bg-color="#DC143C" />
  <van-avatar icon="user-o" bg-color="#8A2BE2" />
</van-avatar-group>

<!-- 右侧叠层 -->
<van-avatar-group :max-count="4" cascading="right-up">
  <van-avatar :src="avatarURL" />
  <van-avatar :src="avatarURL2" />
  <van-avatar text="A" bg-color="#1E90FF" />
  <van-avatar text="B" bg-color="#228B22" />
  <van-avatar text="C" bg-color="#DC143C" />
  <van-avatar icon="user-o" bg-color="#8A2BE2" />
</van-avatar-group>
```

### 组尺寸和组形状

通过 AvatarGroup 的 `size` 和 `shape` 属性可以统一设置组内头像的尺寸和形状，子头像的属性优先级更高。

```html
<!-- 组尺寸 -->
<van-avatar-group :max-count="4" size="small">
  <van-avatar :src="avatarURL" />
  <van-avatar :src="avatarURL2" />
  <van-avatar text="A" bg-color="#1E90FF" />
  <van-avatar text="B" bg-color="#228B22" />
  <van-avatar text="C" bg-color="#DC143C" />
</van-avatar-group>

<!-- 组形状 -->
<van-avatar-group :max-count="4" shape="square" collapseAvatar="自定义">
  <van-avatar :src="avatarURL" shape="round" />
  <van-avatar :src="avatarURL2" />
  <van-avatar text="A" bg-color="#1E90FF" shape="round" />
  <van-avatar text="B" bg-color="#228B22" />
  <van-avatar text="C" bg-color="#DC143C" />
</van-avatar-group>
```

### 自定义折叠头像

当头像数量超出限制时，可以通过 `collapse-avatar` 插槽自定义折叠头像的展示。

```html
<van-avatar-group :max-count="4" cascading="right-up" size="45">
  <van-avatar :src="avatarURL" />
  <van-avatar :src="avatarURL2" />
  <van-avatar text="A" bg-color="#1E90FF" />
  <van-avatar text="B" bg-color="#228B22" />
  <van-avatar text="C" bg-color="#DC143C" />
  <van-avatar icon="user-o" bg-color="#8A2BE2" />
  <template #collapseAvatar="{ restCount }">
    <van-avatar :text="`+${restCount}`" bg-color="#CCCCCC" />
  </template>
</van-avatar-group>
```

## API

### Avatar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 头像图片链接 | _string_ | - |
| text | 头像文字内容 | _string_ | - |
| icon | 头像图标名称 | _string_ | - |
| shape | 头像形状，可选值为 `round` `square` | _string_ | `round` |
| size | 头像尺寸，可选值为 `large` `medium` `normal` `small`，也支持数值 | _number \| string_ | `normal` |
| bg-color | 背景颜色 | _string_ | - |
| color | 文字颜色 | _string_ | `#fff` |
| alt | 图片加载失败替代文本 | _string_ | - |

### AvatarGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| max-count | 显示的最大头像个数 | _number \| string_ | - |
| cascading | 图片之间的层叠关系，可选值为 `left-up` `right-up` | _string_ | `left-up` |
| shape | 形状，优先级低于 Avatar.shape | _string_ | - |
| size | 尺寸，优先级低于 Avatar.size | _number \| string_ | - |
| collapse-avatar | 头像数量超出时的折叠元素内容文本 | _string_ | - |

### Avatar Events

| 事件名 | 说明               | 回调参数       |
| ------ | ------------------ | -------------- |
| error  | 图片加载失败时触发 | _event: Event_ |
| click  | 点击头像时触发     | -              |

### Avatar Slots

| 名称    | 描述           |
| ------- | -------------- |
| default | 自定义头像内容 |

### AvatarGroup Slots

| 名称            | 描述               | 参数                    |
| --------------- | ------------------ | ----------------------- |
| default         | 头像组内容         | -                       |
| collapse-avatar | 自定义折叠头像内容 | _{ restCount: number }_ |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  AvatarProps,
  AvatarSize,
  AvatarShape,
  AvatarGroupProps,
} from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

#### Avatar 样式变量

| 名称                          | 默认值                 | 描述         |
| ----------------------------- | ---------------------- | ------------ |
| --van-avatar-size             | _54px_                 | 普通尺寸     |
| --van-avatar-size-large       | _76px_                 | 大号尺寸     |
| --van-avatar-size-medium      | _64px_                 | 中号尺寸     |
| --van-avatar-size-small       | _48px_                 | 小号尺寸     |
| --van-avatar-bg-color         | _var(--van-gray-5)_    | 默认背景色   |
| --van-avatar-text-color       | _var(--van-white)_     | 默认文字颜色 |
| --van-avatar-font-size        | _20px_                 | 普通字体大小 |
| --van-avatar-font-size-large  | _28px_                 | 大号字体大小 |
| --van-avatar-font-size-medium | _24px_                 | 中号字体大小 |
| --van-avatar-font-size-small  | _18px_                 | 小号字体大小 |
| --van-avatar-font-weight      | _var(--van-font-bold)_ | 文字粗细     |
| --van-avatar-line-height      | _1.2_                  | 行高         |
| --van-avatar-border-radius    | _var(--van-radius-md)_ | 头像圆角     |

#### AvatarGroup 样式变量

| 名称                       | 默认值  | 描述         |
| -------------------------- | ------- | ------------ |
| --van-avatar-group-overlap | _-12px_ | 头像重叠距离 |
