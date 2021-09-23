# v-ellipsis-title 文字省略提示

有时文字采取过长省略方式。但省略的文字用户经常看不到，需要 title 提示。

该指令会自动判断 ellipsis 的状态省略文字。

## 示例

### 基本用法

``` html
<u-text display="block" wrap="ellipsis" v-ellipsis-title style="width: 120px; background: #f2f3f8;">天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为也，所以动心忍性，增益其所不能。</u-text>
```

### 手动指定文本

``` html
<u-text display="block" wrap="ellipsis" v-ellipsis-title="'出自战国孟子的《生于忧患，死于安乐》'" style="width: 120px; background: #f2f3f8;">天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为也，所以动心忍性，增益其所不能。</u-text>
```

## API

### Usage

| Params | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| value | String | | 默认为元素的 innerText，也可以手动指定文本 |
