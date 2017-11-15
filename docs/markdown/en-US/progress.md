## Progress

### Install
``` javascript
import { Progress } from 'vant';

Vue.component(Progress.name, Progress);
```

### Usage

#### Basic Usage
Use 'percentage' prop to set current progress

```html
<van-progress :percentage="0" />
<van-progress :percentage="46" />
<van-progress :percentage="100" />
```


#### Inactive

```html
<van-progress inactive :percentage="0" />
<van-progress inactive :percentage="46" />
<van-progress inactive :percentage="100" />
```


#### Custom Style
Use `pivotText` to custom text，use `color` to custom bar color

```html
<van-progress pivotText="Red" color="#ed5050" :percentage="26" />
<van-progress pivotText="Orange" color="#f60" :percentage="46" />
<van-progress pivotText="Yellow" color="#f09000" :percentage="66" />
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| inactive | Whether to be gray | `Boolean` | `false` | - |
| percentage | Percentage | `Number` | `false` | `0-100` |
| showPivot | Whether to show text | `Boolean` | `true` | - |
| pivotText | Text | `String` | percentage | - |
| color | Color | `String` | `#38f` | hexvalue |
| textColor | Text color | `String` | `#fff` | hexvalue |
