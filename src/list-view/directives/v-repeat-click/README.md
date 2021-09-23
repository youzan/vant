# v-repeat-click 重复点击

浏览器原生的 click 事件在点击元素时，只能触发一次。

该指令实现了在按下元素时，能够重复调用方法。常见示例比如 [UNumberInput](../../components/u-number-input) 的上下点击按钮。

初始会有一个等待时长。

## 示例

``` vue
<template>
<div>
    <u-button v-repeat-click="onClick">Click Me!</u-button> {{ count }}
</div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        onClick() {
            this.count++;
        },
    },
};
</script>
```

## API

### Usage

| Params | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| value | Function | | 需要调用的方法 |
| arg | Number | `400` | 初始点击等待时长（毫秒） |

### Modifiers

| Modifier | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| self | Boolean | `false` | 同 Vue 指令的 Modifier |
| stop | Boolean | `false` | 同 Vue 指令的 Modifier |
| prevent | Boolean | `false` | 同 Vue 指令的 Modifier |
| capture | Boolean | `false` | 同 Vue 指令的 Modifier |
| once | Boolean | `false` | 同 Vue 指令的 Modifier |
| passive | Boolean | `false` | 同 Vue 指令的 Modifier |
