# 从 v3 升级

### 介绍

本文档提供了从 Vant 3 到 Vant 4 的升级指南。

## 不兼容更新

### 主题定制方式调整

不再支持基于 Less 变量进行主题定制，请使用 [ConfigProvider 全局配置](#/zh-CN/config-provider) 组件进行主题配置。

### API 调整

#### Picker

- `default` 插槽重命名为 `toolbar`
- 移除了 `value-key` 属性，使用 `columnsFieldNames` 属性代替

### Tabs

- 移除了 `click` 和 `disabled` 事件，使用 `click-tab` 事件代替
