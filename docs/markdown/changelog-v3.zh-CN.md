# 更新日志

### 提示

当前文档为 Vant 3.x 版本的更新日志，如需查询 Vant 2.0 的更新内容，请访问 [Vant 2.0 更新日志](https://youzan.github.io/vant/#/zh-CN/changelog)。

### 介绍

Vant 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

**发布节奏**

- 修订号：每周发布，包含新特性和问题修复。
- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：发布时间不定，包含不兼容更新。

### [v3.0.0-alpha.3](https://github.com/youzan/vant/compare/v3.0.0-alpha.2...v3.0.0-alpha.3)

`2020-09-01`

**Feature**

- ActionSheet: 新增 description 插槽 [#7068](https://github.com/youzan/vant/issues/7068)
- Toast: 使用 composition api 重构 [44aaa4](https://github.com/youzan/vant/commit/44aaa471879ac79b7baee0e07c92d7a71ff7f530)

**Types**

- 修复使用 app.use 注册组件时提示类型错误的问题 [#7056](https://github.com/youzan/vant/issues/7056)
- 修复 $toast、$dialog 类型不存在的问题 [0acbc6](https://github.com/youzan/vant/commit/0acbc6ec21588686b41f6387d2fdf642ae2c024e)

**Bug Fixes**

- Dialog: 修复 Dialog.close 不生效的问题 [476e16](https://github.com/youzan/vant/commit/476e16ff2d22a5da3ab8b57a6c7789610b008e22)
- Toast: 修复设置 toast.message 不生效的问题 [dac7fe](https://github.com/youzan/vant/commit/dac7feb919cfc4c3c1b8dc544431eb5547414604)

### [v3.0.0-alpha.2](https://github.com/youzan/vant/compare/v3.0.0-alpha.1...v3.0.0-alpha.2)

`2020-08-28`

**Bug Fixes**

- 修复使用 `yarn add vant@next` 安装失败的问题

### [v3.0.0-alpha.1](https://github.com/youzan/vant/compare/v2.10.3...v3.0.0-alpha.1)

`2020-08-28`

**refactor**

使用 Composition API 重构以下组件：

- ActionBar
- AddressList
- Area
- Badge
- Button
- Circle
- Col
- Collapse
- CountDown
- Image
- Row
- List
- Loading
- NavBar
- NoticeBar
- Progress
- Rate
- Sidebar
- Slider
- Steps
- Sticky
- Tabbar

**Bug Fixes**

- Rate: 修复控制台报 emit warning 提示的问题 [c32fba](https://github.com/youzan/vant/commit/c32fba0f1e7afa657c69c233d644c1994963a638)
- Button: 修复 click 事件参数丢失的问题 [cea272](https://github.com/youzan/vant/commit/cea2724321daf693a1dd36dd6923c4d28585895a)
- CellGroup: 修复 attrs 继承错误的问题 [8f978a](https://github.com/youzan/vant/commit/8f978addd49b7d2a5e6fcce0c952fcb05145ad1d)
- Dialog: 修复部分弹窗相关属性不生效的问题 [af94c9](https://github.com/youzan/vant/commit/af94c92614b78e999e5377208e2c3c3672480210)
- Image: 修复 loading 图标和 error 图标不展示的问题 [c720ee](https://github.com/youzan/vant/commit/c720eea83170b36e1b2f4eb8bdaff400e88bf714)

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
