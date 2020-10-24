# 更新日志

### 提示

当前文档为 Vant 3.x 版本的更新日志，如需查询 Vant 2.0 的更新内容，请访问 [Vant 2.0 更新日志](https://youzan.github.io/vant/#/zh-CN/changelog)。

### 介绍

Vant 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

**发布节奏**

- 修订号：每周发布，包含新特性和问题修复。
- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：发布时间不定，包含不兼容更新。

### [v3.0.0-beta.5](https://github.com/youzan/vant/compare/v2.10.11...v3.0.0-beta.5)

`2020-10-24`

**Bug Fixes**

- Swipe: 修复动态插入轮播时无法滚动的问题 [#7366](https://github.com/youzan/vant/issues/7366)
- Toast: 修复 forbidClick 属性不生效的问题 [#7396](https://github.com/youzan/vant/issues/7396)
- Toast: 修复 duration 变化未生效的问题 [#7394](https://github.com/youzan/vant/issues/7394)
- 包含 `v2.10.11` 版本的所有改动

### [v3.0.0-beta.4](https://github.com/youzan/vant/compare/v2.10.10...v3.0.0-beta.4)

`2020-10-18`

**refactor**

- Layout: 默认使用 flex 布局，移除 type 属性 [f7a120](https://github.com/youzan/vant/commit/f7a1208a18f61eaa9dbec80db1c585f19229cd91)

**style**

- Stepper: 布局方式调整为 inline-block [e9c282](https://github.com/youzan/vant/commit/e9c28212358cd0317442051383b92d23441920c6)

**Bug Fixes**

- ContactList: 修复 select 事件重复触发的问题 [1dd408](https://github.com/youzan/vant/commit/1dd4083102272250637d6397bd98355d87d99bf5)
- Search: 修复布局错误的问题 [9cd48e](https://github.com/youzan/vant/commit/9cd48e0e333fc6f0a2f71b568b7e5b5ca2138bae)
- Image: 修复图片加载错误时仍会渲染图片节点的问题 [59fb1d](https://github.com/youzan/vant/commit/59fb1d4dfcdc99773642a63c62e6b08baa3fac30)
- Pagination: 修复 change 事件触发时机错误的问题 [346035](https://github.com/youzan/vant/commit/3460351ce396bb418408ddbfad462ddac8ef9477)
- Toast: 修复展示时会锁定滚动的问题 [a622ca](https://github.com/youzan/vant/commit/a622caa649baedac7cfe9614ded88e7ec1cd18e1)
- 包含 `v2.10.10` 版本的所有改动

### [v3.0.0-beta.3](https://github.com/youzan/vant/compare/v2.10.9...v3.0.0-beta.3)

`2020-10-03`

**breaking changes**

- Checkbox: 在 Cell 内部使用时，现在需要手动添加 `@click.stop` 来阻止事件冒泡 [#7023](https://github.com/youzan/vant/issues/7023)

**Feature**

- 新增 Badge 徽标组件 [#6573](https://github.com/youzan/vant/issues/6573)
- Tab: 增加滑动切换动画 [#1174](https://github.com/youzan/vant/issues/1174)
- 包含 `v2.10.9` 版本的所有改动

### [v3.0.0-beta.2](https://github.com/youzan/vant/compare/v3.0.0-beta.1...v3.0.0-beta.2)

`2020-09-28`

**Bug Fixes**

- 修复引入 Vant 时提示 'global is not defined' 的问题 [7007fc](https://github.com/youzan/vant/commit/7007fcf9eaea239f5e680068d59d8e9f8202ec3b)

### [v3.0.0-beta.1](https://github.com/youzan/vant/compare/v2.10.8...v3.0.0-beta.1)

`2020-09-28`

**breaking changes**

- DatetimePicker: change 事件的第一个参数调整为当前选中值 [058665](https://github.com/youzan/vant/commit/05866514dbdac098d8210f8b08e2fbc8d3479ada)

**refactor**

使用 Composition API 重构以下组件：

- AddressEdit [749e4a](https://github.com/youzan/vant/commit/749e4ae73b9c07265e81237493b5e7d37afc6255)
- Calendar [fc50e2](https://github.com/youzan/vant/commit/fc50e26416feb1cbc3d07de23cd39bf6ba57eefc)
- Checkbox [278ea6](https://github.com/youzan/vant/commit/278ea6a439b65c1bf1ce420ab7619858a739486c)
- ContactEdit [4f0921](https://github.com/youzan/vant/commit/4f0921cbdffe1f654ce75222027f8b85120ab67b)
- DatetimePicker [638842](https://github.com/youzan/vant/commit/6388423c9609e099565e51423271e333fab38a55)
- Field [00dbf2](https://github.com/youzan/vant/commit/00dbf2cc50c44d0ac45bc43daeaa91730b1a6e23)
- Form [92aac9](https://github.com/youzan/vant/commit/92aac941fc25e028a7631be301ed895edff53487)
- Radio [aafbcf](https://github.com/youzan/vant/commit/aafbcfcf04e7c0a4b4f5da83291e9b158f2503c3)
- Tabs [882e3e](https://github.com/youzan/vant/commit/882e3ef5e787e587909bde1064f5dabe3d66ad72)

**Feature**

- Locale: 新增德语语言包 [#7245](https://github.com/youzan/vant/issues/7245)
- Pagination: 新增多个插槽 [#7222](https://github.com/youzan/vant/issues/7222)

**Bug Fixes**

- Picker: 修复 setIndex 方法无效的问题 [d2a542](https://github.com/youzan/vant/commit/d2a54279766acca3981403c4fb9eb34d3d586643)
- Dialog: 修复最小高度错误的问题 [bf1f0f](https://github.com/youzan/vant/commit/bf1f0f57eb16e2308b388c4e2ccab46c65f76196)
- 包含 `v2.10.8` 版本的所有改动

### [v3.0.0-beta.0](https://github.com/youzan/vant/compare/v2.10.7...v3.0.0-beta.0)

`2020-09-18`

**breaking changes**

- Dialog: allow-html 属性的默认值调整为 false [02c7a7](https://github.com/youzan/vant/commit/02c7a75ee3d7725157b744bb710bd879f01a0065)
- Picker: allow-html 属性的默认值调整为 false [02c7a7](https://github.com/youzan/vant/commit/02c7a75ee3d7725157b744bb710bd879f01a0065)

**refactor**

使用 Composition API 重构以下组件：

- ImagePreview [6ab2b3](https://github.com/youzan/vant/commit/6ab2b3bf1f53dabf272ae3a6d663221236eab47c)
- Picker [85d0d4](https://github.com/youzan/vant/commit/85d0d423eb33567d74d029991509589237214cf8)
- Popup [946565](https://github.com/youzan/vant/commit/9465653f429d216bf0f34cb9cf26cc1f51b3e358)
- Swipe [39c68c](https://github.com/youzan/vant/commit/39c68c993a34f8cfb0de056f0da7edcd01bd6d4d)
- Uploader [595b06](https://github.com/youzan/vant/commit/595b062c34e34e48b5f8d730dc6b13221fcad841)

**Bug Fixes**

- AddressEdit: 修复 emits 未声明导致 warning 的问题 [1e6a12](https://github.com/youzan/vant/commit/1e6a120b2e48f7262062729260d362c96355eca6)
- AddressEdit: 修复点击省市区弹窗的蒙层时无法关闭的问题 [02e89a](https://github.com/youzan/vant/commit/02e89a73c57af1e59429ab320c2a13395abc0520)
- Field: 修复在 iOS 上中文输入过程中触发 input 事件的问题 [#7035](https://github.com/youzan/vant/issues/7035)
- 包含 `v2.10.7` 版本的所有改动

### [v3.0.0-alpha.5](https://github.com/youzan/vant/compare/v2.10.6...v3.0.0-alpha.5)

`2020-09-13`

**breaking changes**

- Button: native-type 属性的默认值调整为 button [df8059](https://github.com/youzan/vant/commit/df8059eb015f2804433a7306c208a5909a4d46ac)

**refactor**

使用 Composition API 重构以下组件：

- DatetimePicker [60e087](https://github.com/youzan/vant/commit/60e08767b313e90b13c6a4a3246a113367ed09a5)
- DropdownItem [cd5f5b](https://github.com/youzan/vant/commit/cd5f5bb65544676279e486790761c38a2a9f0fc1)
- Grid [38740b](https://github.com/youzan/vant/commit/38740b6c1c783d49a2201b24ba51121576e4c643)
- IndexBar [f94c8c](https://github.com/youzan/vant/commit/f94c8ccbb93f4783814832a9363d663fb4986f10)
- NumberKeyboard [14c1d4](https://github.com/youzan/vant/commit/14c1d4ea771cd9f01cb282493e57303ced897fa9)
- PullRefresh [9f632f](https://github.com/youzan/vant/commit/9f632f151e3028adfd376f8ad166bf9d8af356fc)
- Stepper [a7c285](https://github.com/youzan/vant/commit/a7c28548fcefe48a2ffa95bb0423dee0a48f8e16)
- SwipeCell [b17c67](https://github.com/youzan/vant/commit/b17c67ab53652a361185934cb4119eca23622d9a)

**Feature**

- Button: 新增 icon-position 属性 [#7174](https://github.com/youzan/vant/issues/7174)
- slider: 新增 range 属性，支持范围选择 [#7175](https://github.com/youzan/vant/issues/7175)
- TabbarItem: 新增 @tabbar-item-active-background-color 变量 [#7162](https://github.com/youzan/vant/issues/7162)

**Bug Fixes**

- Sticky: 修复组件销毁时报错的问题 [#7169](https://github.com/youzan/vant/issues/7169)

### [v3.0.0-alpha.4](https://github.com/youzan/vant/compare/v2.10.5...v3.0.0-alpha.4)

`2020-09-06`

**breaking changes**

- Dialog: `before-close` 属性用法调整，不再传入 done 函数，而是通过返回 Promise 来控制
- SwipeCell: `before-close` 属性不再传入组件实例
- ImagePreview: 移除 `async-close` 属性，新增 `before-close` 属性

**refactor**

使用 Composition API 重构以下组件：

- Coupon [ec5a75](https://github.com/youzan/vant/commit/ec5a759f684531e7c5ab751d1d746d0e65d26279)
- Dialog [2b8284](https://github.com/youzan/vant/commit/2b8284a227b6d483685cfa3a70e01774491a2ff9)
- NumberKeyboard [f735b2](https://github.com/youzan/vant/commit/f735b24a4b71176ce5c214af69b7afc99deab85f)
- Pagination [1cd918](https://github.com/youzan/vant/commit/1cd918395805f57a60f2cce1f5174b480cfd70f2)

**Bug Fixes**

- Tag: 修复 color 属性不生效的问题 [4b6da2](https://github.com/youzan/vant/commit/4b6da2aab6acae95977579094bc5707345f3d3e9)
- 修复在 TSX 中使用组件时提示类型错误的问题 [#7076](https://github.com/youzan/vant/issues/7076)
- 修复全量引入组件时提示类型错误的问题 [#7056](https://github.com/youzan/vant/issues/7056)

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
