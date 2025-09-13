# Avatar

### Intro

Used to represent users or things, supporting image, text, or icon display.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Avatar } from 'vant';

const app = createApp();
app.use(Avatar);
```

## Usage

### Basic Usage

Avatar supports three types: image, text, and icon.

```html
<van-avatar :src="avatarURL" />
<van-avatar text="U" />
<van-avatar icon="user-o" />
```

### Avatar Shape

Use the `shape` prop to set the avatar shape. Supports `round` and `square`, default is `round`.

```html
<van-avatar :src="avatarURL" shape="square" />
<van-avatar :src="avatarURL" shape="round" />
```

### Avatar Size

Use the `size` prop to set the avatar size. Supports preset sizes and custom numeric values.

```html
<!-- Preset sizes -->
<van-avatar :src="avatarURL" size="large" />
<van-avatar :src="avatarURL" size="medium" />
<van-avatar :src="avatarURL" size="normal" />
<van-avatar :src="avatarURL" size="small" />

<!-- Custom sizes -->
<van-avatar :src="avatarURL" size="80" />
<van-avatar :src="avatarURL" :size="60" />
```

### Custom Colors

Use the `bg-color` and `color` props to customize background and text colors.

```html
<van-avatar text="V" bg-color="#DC143C" color="#fff" />
<van-avatar text="A" bg-color="#228B22" color="#fff" />
<van-avatar text="N" bg-color="#1E90FF" color="#fff" />
<van-avatar text="T" bg-color="#8A2BE2" color="#fff" />
<van-avatar icon="user-o" bg-color="#EEEEEE" color="#7B8198" />
```

### Avatar with Badge

Use with Badge component to display badges on the top-right corner of the avatar.

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

### Avatar Group

Use AvatarGroup component to display multiple avatars with cascading effects.

```html
<!-- Basic Avatar Group -->
<van-avatar-group :max-count="4">
  <van-avatar :src="avatarURL" />
  <van-avatar :src="avatarURL2" />
  <van-avatar text="A" bg-color="#1E90FF" />
  <van-avatar text="B" bg-color="#228B22" />
  <van-avatar text="C" bg-color="#DC143C" />
  <van-avatar icon="user-o" bg-color="#8A2BE2" />
</van-avatar-group>

<!-- Left-up Cascading -->
<van-avatar-group :max-count="4" cascading="left-up">
  <van-avatar :src="avatarURL" />
  <van-avatar :src="avatarURL2" />
  <van-avatar text="A" bg-color="#1E90FF" />
  <van-avatar text="B" bg-color="#228B22" />
  <van-avatar text="C" bg-color="#DC143C" />
  <van-avatar icon="user-o" bg-color="#8A2BE2" />
</van-avatar-group>

<!-- Right-up Cascading -->
<van-avatar-group :max-count="4" cascading="right-up">
  <van-avatar :src="avatarURL" />
  <van-avatar :src="avatarURL2" />
  <van-avatar text="A" bg-color="#1E90FF" />
  <van-avatar text="B" bg-color="#228B22" />
  <van-avatar text="C" bg-color="#DC143C" />
  <van-avatar icon="user-o" bg-color="#8A2BE2" />
</van-avatar-group>
```

### Group Size and Shape

Use AvatarGroup's `size` and `shape` props to set the size and shape of avatars in the group uniformly. Individual avatar props have higher priority.

```html
<!-- Group Size -->
<van-avatar-group :max-count="4" size="small">
  <van-avatar :src="avatarURL" />
  <van-avatar :src="avatarURL2" />
  <van-avatar text="A" bg-color="#1E90FF" />
  <van-avatar text="B" bg-color="#228B22" />
  <van-avatar text="C" bg-color="#DC143C" />
</van-avatar-group>

<!-- Group Shape -->
<van-avatar-group :max-count="4" shape="square" collapseAvatar="Custom">
  <van-avatar :src="avatarURL" shape="round" />
  <van-avatar :src="avatarURL2" />
  <van-avatar text="A" bg-color="#1E90FF" shape="round" />
  <van-avatar text="B" bg-color="#228B22" />
  <van-avatar text="C" bg-color="#DC143C" />
</van-avatar-group>
```

### Custom Collapse Avatar

When the number of avatars exceeds the limit, you can customize the collapsed avatar display through the `collapse-avatar` slot.

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

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| src | Avatar image URL | _string_ | - |
| text | Avatar text content | _string_ | - |
| icon | Avatar icon name | _string_ | - |
| shape | Avatar shape, can be set to `round` `square` | _string_ | `round` |
| size | Avatar size, can be set to `large` `medium` `normal` `small`, also supports numeric values | _number \| string_ | `normal` |
| bg-color | Background color | _string_ | - |
| color | Text color | _string_ | `#fff` |
| alt | Alternative text for failed image loading | _string_ | - |

### AvatarGroup Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| max-count | Maximum number of avatars to display | _number \| string_ | - |
| cascading | Cascading relationship between images, can be set to `left-up` `right-up` | _string_ | `left-up` |
| shape | Shape, lower priority than Avatar.shape | _string_ | - |
| size | Size, lower priority than Avatar.size | _number \| string_ | - |
| collapse-avatar | Text content for collapsed element when avatar count exceeds limit | _string_ | - |

### Avatar Events

| Event | Description                      | Arguments      |
| ----- | -------------------------------- | -------------- |
| error | Emitted when image fails to load | _event: Event_ |
| click | Emitted when avatar is clicked   | -              |

### Avatar Slots

| Name    | Description           |
| ------- | --------------------- |
| default | Custom avatar content |

### AvatarGroup Slots

| Name            | Description                     | SlotProps               |
| --------------- | ------------------------------- | ----------------------- |
| default         | Avatar group content            | -                       |
| collapse-avatar | Custom collapsed avatar content | _{ restCount: number }_ |

### Types

The component exports the following type definitions:

```ts
import type {
  AvatarProps,
  AvatarSize,
  AvatarShape,
  AvatarGroupProps,
} from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

#### Avatar CSS Variables

| Name | Default Value | Description |
| --- | --- | --- |
| --van-avatar-size | _54px_ | Normal size |
| --van-avatar-size-large | _76px_ | Large size |
| --van-avatar-size-medium | _64px_ | Medium size |
| --van-avatar-size-small | _48px_ | Small size |
| --van-avatar-bg-color | _var(--van-gray-5)_ | Default background color |
| --van-avatar-text-color | _var(--van-white)_ | Default text color |
| --van-avatar-font-size | _20px_ | Normal font size |
| --van-avatar-font-size-large | _28px_ | Large font size |
| --van-avatar-font-size-medium | _24px_ | Medium font size |
| --van-avatar-font-size-small | _18px_ | Small font size |
| --van-avatar-font-weight | _var(--van-font-bold)_ | Font weight |
| --van-avatar-line-height | _1.2_ | Line height |
| --van-avatar-border-radius | _var(--van-radius-md)_ | Avatar border radius |

#### AvatarGroup CSS Variables

| Name                       | Default Value | Description             |
| -------------------------- | ------------- | ----------------------- |
| --van-avatar-group-overlap | _-12px_       | Avatar overlap distance |
