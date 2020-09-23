# Badge

### Install

```js
import Vue from 'vue';
import { Badge } from 'vant';

Vue.use(Badge);
```

## Usage

### Basic Usage

```html
<van-badge :count="10">
  <a href="#" class="avatar"></a>
</van-badge>
```

### MaxCount

```html
<van-badge :count="10" :max-count="60">
  <a href="#" class="avatar"></a>
</van-badge>
```

### Offset

```html
<van-badge :count="10" :offset="[10, 10]">
  <a href="#" class="avatar"></a>
</van-badge>
```

### Dot

```html
<van-badge dot>
  <van-icon name="chat-o" />
</van-badge>
```

### Standalone

```html
<van-badge :count="12" />
<van-badge :count="101" />
<van-badge dot />
```

### ShowZero

```html
<van-badge :count="0">
  <a href="#" class="avatar"></a>
</van-badge>
<van-badge :count="0" show-zero>
  <a href="#" class="avatar"></a>
</van-badge>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| count | show count number | _number_ | - |
| dot | red badge | _boolean_ | `false` |
| max-count | max count number | _number_ | `99` |
| offset | Custom badge offset, like [top, right] | _number[]_ | - |
| show-zero | display value `0` | _boolean_ | `false` |
