<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# MEmitter 发送器

- [示例](#示例)

- [API]()
    - [Methods](#methods)

该 Mixin 集成了一些发送事件相关的方法。继承之后直接使用方法即可。

## 示例
``` vue
<template>
<div>这个例子中，该组件给上级添加了蓝色阴影。</div>
</template>
<script>
import { MEmitter } from 'cloud-ui.vusion';

export default {
    mixins: [MEmitter],
    mounted() {
        this.$contact('u-code-example', (codeExampleVM) => {
            codeExampleVM.$el.style.boxShadow = '0 2px 10px rgb(69, 124, 208)';
        });
    },
    destroyed() {
        this.$contact('u-code-example', (codeExampleVM) => {
            codeExampleVM.$el.style.boxShadow = '';
        });
    },
};
</script>
```

## API
Methods

#### $contact(condition, callback)

联系符合条件的上级组件。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| condition | string, Function\<$parent, boolean\> |  | 查找条件。如果为字符串，则根据上级组件的`name`是否与之相同来判断；如果为函数，传入上级组件实例，根据返回的布尔值判断。 |
| callback | Function\<$parent\> |  | 联系成功时的回调函数。 |

#### $dispatch(condition, eventName, ...args)

向符合条件的上级组件发送事件。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| condition | string, Function\<$parent, boolean\> |  | 查找条件。如果为字符串，则根据上级组件的`name`是否与之相同来判断；如果为函数，传入上级组件实例，根据返回的布尔值判断。 |
| eventName | string |  | 发送的事件名称。 |
| ...args | Array\<any\> |  | 发送的事件参数。 |

#### $broadcast(condition, eventName, ...args)

向下级组件广播事件。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| condition | string, Function\<$parent, boolean\> |  | 查找条件。如果为字符串，则根据上级组件的`name`是否与之相同来判断；如果为函数，传入上级组件实例，根据返回的布尔值判断。 |
| eventName | string |  | 发送的事件名称。 |
| ...args | Array\<any\> |  | 发送的事件参数。 |

#### $emitPrevent(name, $event, senderVM, ...args)

抛出一个包含`preventDefault`方法的事件。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| name | string |  | 事件名称 |
| $event | object |  | 事件对象 |
| senderVM | Vue |  | 发送事件的组件实例 |
| ...args | Array\<any\> |  | 其他参数 |

