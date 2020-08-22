# 更新日志

### 提示

当前文档为 Vant 3.x 版本的更新日志，如需查询 Vant 2.0 的更新内容，请访问 [Vant 2.0 更新日志](https://youzan.github.io/vant/#/zh-CN/changelog)。

### 介绍

Vant 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

**发布节奏**

- 修订号：每周发布，包含新特性和问题修复。
- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：发布时间不定，包含不兼容更新。

### v3.0.0-alpha.0

`2020-08-22`

**主要改动**

- 完成 Vue 3 适配
- 调整部分组件的 v-model 和 prop.sync 用法，以适配 v-model 语法变更
- 调整部分组件的 prop 和 event 用法
- 重命名所有组件的 info 属性为 badge
- 重命名所有组件的 get-container 属性为 teleport
- 废弃 SwitchCell 组件
- 废弃个别 API

**已知问题**

- Lazyload、Panel 和 Sku 组件暂未完成 Vue 3 适配

> 详细改动请参考 [从 v2 升级](https://youzan.github.io/vant/next/#/zh-CN/migrate-from-v2)。
