## 占位符格式器 PlaceholderFormatter

用于排除传入空数据或异常数据时，出现`NaN`或`[Object object]`等不友好的体验。

### 基本用法

``` vue
<template>
<div>
    <div>字符串 abc 显示为：{{ formattedString }}</div>
    <div>数字 12 显示为：{{ formattedNumber }}</div>
    <div>NaN 显示为：{{ formattedNaN }}</div>
    <div>Object 显示为：{{ formattedObject }}</div>
    <div>Array 显示为：{{ formattedArray }}</div>
</div>
</template>
<script>
import { utils } from 'cloud-ui.vusion';

export default {
    data() {
        return {
            formattedString: utils.placeholderFormatter.format('abc'),
            formattedNumber: utils.placeholderFormatter.format(12),
            formattedNaN: utils.placeholderFormatter.format(NaN),
            formattedObject: utils.placeholderFormatter.format({}),
            formattedArray: utils.placeholderFormatter.format([]),
        };
    },
};
</script>
```

### 自定义

也可以创建自定义的占位符格式器。

``` vue
<template>
<div>
    <div>字符串 abc 显示为：{{ formattedString }}</div>
    <div>数字 12 显示为：{{ formattedNumber }}</div>
    <div>NaN 显示为：{{ formattedNaN }}</div>
    <div>Object 显示为：{{ formattedObject }}</div>
    <div>Array 显示为：{{ formattedArray }}</div>
</div>
</template>
<script>
import { utils } from 'cloud-ui.vusion';

const placeholderFormatter = new utils.PlaceholderFormatter('加载失败');

export default {
    data() {
        return {
            formattedString: placeholderFormatter.format('abc'),
            formattedNumber: placeholderFormatter.format(12),
            formattedNaN: placeholderFormatter.format(NaN),
            formattedObject: placeholderFormatter.format({}),
            formattedArray: placeholderFormatter.format([]),
        };
    },
};
</script>
```

### Params

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| value | Any | | 待格式化的值 |
| placeholder | String | `'-'` | 占位符 |

## 日期格式器 DateFormatter

用于将`Date`对象或日期字符串转换为指定的格式。

### 基本用法

``` vue
<template>
<div>
    <div><code>new Date()</code> 显示为：{{ formattedDate }}</div>
    <div><code>'2018-08-08'</code> 显示为：{{ formattedString }}</div>
</div>
</template>
<script>
import { utils } from 'cloud-ui.vusion';

export default {
    data() {
        return {
            formattedDate: utils.dateFormatter.format(new Date()),
            formattedString: utils.dateFormatter.format('2018-08-08'),
        };
    },
};
</script>
```

### Params

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| value | Date, String | | 待格式化的值。可以为日期对象或有效的字符串 |
| pattern | String | `'YYYY-MM-DD HH:mm:ss'` | 格式化模板 |

## 数字格式器 NumberFormatter

可将数字转换为指定格式。

### 基本用法

``` vue
<template>
<div>
    <div>20 按<code>'0000'</code>格式显示为：{{ formattedNumber }}</div>
    <div>1234 按<code>'$ #,##0.00'</code>格式显示为：{{ formattedCurrency }}</div>
</div>
</template>
<script>
import { utils } from 'cloud-ui.vusion';

export default {
    data() {
        return {
            formattedNumber: utils.numberFormatter.format(20, '0000'),
            formattedCurrency: utils.numberFormatter.format(1234, '$ #,##0.00'),
        };
    },
};
</script>
```

### Params

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| value | Number, String | | 待格式化的值。可以为数字或有效的字符串 |
| pattern | String | `'0'` | 格式化模板 |
