``` vue
<template>
<div>
    <div>当前日期为：{{ $n(100, 'currency', 'zh-CN') }}</div>
</div>
</template>
<script>
import { utils } from 'cloud-ui.vusion';

export default {
    i18n: {
        locale: 'zh-CN', // 设置地区
        messages: {
            cn: {
                car: 'car | cars',
                message: {
                    hello: 'hello world',
                },
            },
            ja: {
                message: {
                    hello: 'こんにちは、世界',
                },
            },
        },
    },
    filters: {
        date: utils.dateFormatter.format,
    },
    data() {
        return {
            now: new Date(),
        };
    },
};
</script>
```



格式器的一般形式是一个包含`format(value, ...settings)`方法的类。

``` js
class SomeFormatter {
    format(value, ...settings) {
        ...
        return result;
    }
}
```

数据在经过某些格式器格式化之后，信息没有丢失，仍然可以转换成原始数据。这类格式器称为可逆格式器，它们还包含`parse(value, ...settings)`方法。

``` js
class SomeFormatter {
    format(value, ...settings) {
        // ...
        return result;
    }

    parse(value, ...settings) {
        // ...
        return result;
    }
}
```

### 用于过滤器

除了直接当方法调用来转换数据，格式器最常见的用法是可以配置成 Vue 的过滤器，很方便地在模板中使用。

``` vue
<template>
<div>
    <div>当前日期为：{{ now | date('YYYY-MM-DD') }}</div>
</div>
</template>
<script>
import { utils } from 'cloud-ui.vusion';

export default {
    filters: {
        date: utils.dateFormatter.format,
    },
    data() {
        return {
            now: new Date(),
        };
    },
};
</script>
```
