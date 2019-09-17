# Progress

### Install

``` javascript
import Vue from 'vue';
import { Progress } from 'vant';

Vue.use(Progress);
```

## Usage

### Basic Usage

Use 'percentage' prop to set current progress

```html
<van-progress :percentage="50" />
```

### Stroke Width

```html
<van-progress :percentage="50" stroke-width="8" />
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
  color="#ee0a24"
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

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| inactive | Whether to be gray | *boolean* | `false` | - |
| percentage | Percentage | *number* | `0` | - |
| stroke-width | Stroke width | *string \| number* | `4px` | 2.2.1 |
| show-pivot | Whether to show text | *boolean* | `true` | - |
| color | Color | *string* | `#1989fa` | - |
| pivot-text | Text | *string* | percentage | - |
| pivot-color | Text background color | *string* | inherit progress color | - |
| text-color | Text color | *string* | `#fff` | - |
