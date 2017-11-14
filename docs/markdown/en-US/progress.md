## Progress

### Install
``` javascript
import { Progress } from 'vant';

Vue.component(Progress.name, Progress);
```

### Usage

#### Basic Usage
Use 'percentage' prop to set current progress

:::demo Basic Usage
```html
<van-progress :percentage="0"></van-progress>
<van-progress :percentage="46"></van-progress>
<van-progress :percentage="100"></van-progress>
```
:::


#### Inactive

:::demo Inactive
```html
<van-progress inactive :percentage="0"></van-progress>
<van-progress inactive :percentage="46"></van-progress>
<van-progress inactive :percentage="100"></van-progress>
```
:::


#### Custom Style
Use `pivot-text` to custom text，use `color` to custom bar color

:::demo Custom Style
```html
<van-progress pivot-text="Red" color="#ed5050" :percentage="26"></van-progress>
<van-progress pivot-text="Orange" color="#f60" :percentage="46"></van-progress>
<van-progress pivot-text="Yellow" color="#f09000" :percentage="66"></van-progress>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| inactive | Whether to be gray | `Boolean` | `false` | - |
| percentage | Percentage | `Number` | `false` | `0-100` |
| showPivot | Whether to show text | `Boolean` | `true` | - |
| pivotText | Text | `String` | percentage | - |
| color | Color | `String` | `#38f` | hexvalue |
| textColor | Text color | `String` | `#fff` | hexvalue |
