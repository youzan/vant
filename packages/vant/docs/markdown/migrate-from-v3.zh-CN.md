# 从 v3 升级

### 介绍

本文档提供了从 Vant 3 到 Vant 4 的升级指南。

### 为什么会有 Vant 4.0 ？

为了支持 **暗色模式**，我们对 Vant 中的 **样式变量** 进行了一些不兼容更新，因此发布了新的大版本。

如果你的项目没有使用主题定制，那样式变量的调整对你没有任何影响，只需要花几分钟去适配 API 调整，即可完成升级。

如果你的项目使用了主题定制，请完整阅读此文档，并进行迁移。

### API 调整

4.0 版本对少量 API 进行了不兼容调整：

#### Picker

- `default` 插槽重命名为 `toolbar`
- 移除了 `value-key` 属性，使用 `columnsFieldNames` 属性代替

#### Tabs

- 移除了 `click` 和 `disabled` 事件，使用 `click-tab` 事件代替

## 样式变量调整

### 移除 Less 变量

目前 Vant 已经支持了基于 CSS 变量的主题定制能力，因此后续将不再提供 Less 变量。

如果你的项目正在使用 Less 变量进行主题定制，请使用 [ConfigProvider 全局配置](#/zh-CN/config-provider) 组件进行替换。

### 简化 CSS 变量名

考虑到 **代码体积** 和 **使用便捷性**，我们对部分 CSS 变量的名称进行了简化，在变量名中使用更简短的单词，涉及以下变更：

```less
animation-duration               ->  duration
animation-timing-function-enter  ->  ease-out
animation-timing-function-leave  ->  ease-in
background-color                 ->  background
border-radius                    ->  radius
border-width-base                ->  border-width
box-shadow                       ->  shadow
font-family                      ->  font
font-weight-bold                 ->  font-bold
price-integer-font               ->  price-font
text-link                        ->  link
transition-duration              ->  duration
```
