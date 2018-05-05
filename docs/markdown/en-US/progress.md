## Progress

### Install
``` javascript
import { Progress } from 'vant';

Vue.use(Progress);
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
Use `pivot-text` to custom text，use `color` to custom bar color

```html
<van-progress pivot-text="Red" color="#ed5050" :percentage="26" />
<van-progress pivot-text="Orange" color="#f60" :percentage="46" />
<van-progress pivot-text="Yellow" color="#f09000" :percentage="66" />
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| inactive | Whether to be gray | `Boolean` | `false` |
| percentage | Percentage | `Number` | `false` |
| show-pivot | Whether to show text | `Boolean` | `true` |
| pivot-text | Text | `String` | percentage |
| color | Color | `String` | `#38f` |
| text-color | Text color | `String` | `#fff` |
