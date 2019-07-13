# Progress

### Install

``` javascript
import { Progress } from 'vant';

Vue.use(Progress);
```

## Usage

### Basic Usage

Use 'percentage' prop to set current progress

```html
<van-progress :percentage="50" />
```


### Inactive

```html
<van-progress inactive :percentage="50" />
```


### Custom Style

Use `pivot-text` to custom text，use `color` to custom bar color

```html
<van-progress
  pivot-text="Orange"
  color="#f2826a"
  :percentage="25"
/>

<van-progress
  pivot-text="Red"
  color="#f44"
  :percentage="50"
/>

<van-progress
  :percentage="75"
  pivot-text="Purple"
  pivot-color="#7232dd"
  color="linear-gradient(to right, #be99ff, #7232dd)"
/>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| inactive | Whether to be gray | `boolean` | `false` |
| percentage | Percentage | `number` | `0` |
| show-pivot | Whether to show text | `boolean` | `true` |
| color | Color | `string` | `#1989fa` |
| pivot-text | Text | `string` | percentage |
| pivot-color | Text background color | `string` | inherit progress color |
| text-color | Text color | `string` | `#fff` |
