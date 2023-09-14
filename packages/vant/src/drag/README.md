# Drag

### Intro

Make the element draggable freely.

### 引入

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Drag } from 'vant';

const app = createApp();
app.use(Drag);
```

## Usage

### Basic Usage

You can drag and drop elements at will.

```html
<van-drag>
  <van-button type="primary">按钮</van-button>
</van-drag>
```

### Free Magnetic

Allow x and y drags to attach to the nearest side of the x axis.

```html
<van-drag magnetic="x">
  <van-button type="primary">按钮</van-button>
</van-drag>
```

### Boundary restrictions

Drag within a certain range.

```html
<div class="demo-boundary" ref="demoBoundaryRef"></div>
<van-drag :boundary="{ top, left: 0, bottom, right }">
  <van-button type="primary">按钮</van-button>
</van-drag>
</van-drag>
```

```js
const demoBoundaryRef = ref<HTMLDivElement>();
const top = computed(() => demoBoundaryRef.value?.getBoundingClientRect().top as number);
const right = computed(() => (demoBoundaryRef.value?.getBoundingClientRect().right as number) - 60);
const bottom = computed(() => (demoBoundaryRef.value?.getBoundingClientRect().bottom as number) - 44);
```

```css
<style lang="less">
.demo-boundary {
  position: absolute;
  top: 330px;
  left: 0px;
  width: 300px;
  height: 200px;
  border: 1px solid red;
  box-sizing: border-box;
}
</style>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| axis | Drag direction, `xy` stands for free drag | _'x' \| 'y' \| 'xy'_ | `y` |
| magnetic | Direction of automatic magnetic absorption | _'x' \| 'y'_ | - |
| boundary | Restricted boundary range | _{ top?: number \| string, bottom?: number \| string, left?: number \| string, right?: number \| string }_ | - |

| Event | Description | Arguments |
| --- | --- | --- |
| drag-start | Triggered when dragging starts | _MouseEvent_ |
| drag | Triggered during drag and drop | _MouseEvent_ |
| drag-end | Triggered at the end of drag and drop | _MouseEvent_ |
| offsetChange | Triggered when the position changes due to user dragging | _{x: string, y: string}_ |
