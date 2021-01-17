# 更新日志

### 提示

当前文档为 Vant 3 的更新日志，如需查询 Vant 2 的更新内容，请访问 [Vant 2 更新日志](https://youzan.github.io/vant/#/zh-CN/changelog)。

### 介绍

Vant 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

**发布节奏**

- 修订号：每周发布，包含新特性和问题修复。
- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：发布时间不定，包含不兼容更新。

## 更新内容

### [v3.0.4](https://github.com/youzan/vant/compare/v3.0.3...v3.0.4)

`2021-01-17`

**Feature**

- Cascader: 新增 field-names 属性，用于自定义字段名 [#7933](https://github.com/youzan/vant/issues/7933)
- Cell: 支持在设置 is-link 时将 clickable 设置为 false 来禁用点击状态 [#7923](https://github.com/youzan/vant/issues/7923)
- DropdownItem: 支持传入数组或对象格式的 title-class [#7926](https://github.com/youzan/vant/issues/7926)
- Popup: 支持传入数组或对象格式的 overlay-class [#7924](https://github.com/youzan/vant/issues/7924)
- Toast: 新增 overlayClass 选项 [#7925](https://github.com/youzan/vant/issues/7925)
- Toast: 新增 overlayStyle 选项 [#7898](https://github.com/youzan/vant/issues/7898)

**Bug Fixes**

- AddressEdit: 修复无法调用 setAreaCode 方法的问题 [6a184f](https://github.com/youzan/vant/commit/6a184f8e930fea31035680dd44f40bc007aba4cd)
- Circle: 修复渐变色不生效的问题 [#7909](https://github.com/youzan/vant/issues/7909)
- NumberKeyboard: 修复 delete、extra-key 插槽不生效的问题 [52a0e5](https://github.com/youzan/vant/commit/52a0e5a8c70dcc07b87140e33318acefcbdd3ef9)
- Search: 修复控制台存在 update:modelValue warning 的问题 [#7872](https://github.com/youzan/vant/issues/7872)
- Swipe: 修复页面隐藏时未暂停自动轮播的问题 [1c428f](https://github.com/youzan/vant/commit/1c428f240cd44d3389510263dd7f03973cfbfa2b)

### [v3.0.3](https://github.com/youzan/vant/compare/v3.0.2...v3.0.3)

`2021-01-10`

**Feature**

- Field: 新增 autocomplate 属性 [#7877](https://github.com/youzan/vant/issues/7877)

**Bug Fixes**

- Area: 修复无法调用 getValues 方法的问题 [03c7b4](https://github.com/youzan/vant/commit/03c7b46b04d8c543f952cbf8399ec21ca39f979f)
- ImagePreview: 修复 close-on-popstate 属性不生效的问题 [#7880](https://github.com/youzan/vant/issues/7880)
- List: 修复更新 error 属性后未触发位置检查的问题 [b79c32](https://github.com/youzan/vant/commit/b79c32183f6159a663dad42f6189a939061f9f32)

### [v3.0.2](https://github.com/youzan/vant/compare/v3.0.1...v3.0.2)

`2021-01-02`

**Feature**

- Calendar: 新增 scrollToDate 方法 [#7847](https://github.com/youzan/vant/issues/7847)
- Form: 新增 disabled 属性 [#7830](https://github.com/youzan/vant/issues/7830)
- Form: 新增 readonly 属性 [#7830](https://github.com/youzan/vant/issues/7830)
- Loading: 新增 text-color 属性 [#7806](https://github.com/youzan/vant/issues/7806)
- Picker: 新增 columns-field-names 属性 [#7791](https://github.com/youzan/vant/issues/7791)
- NumberKeyboard: 新增 random-key-order 属性 [#7841](https://github.com/youzan/vant/issues/7841)

**Bug Fixes**

- Calendar: 修复 title 插槽不生效的问题 [#7826](https://github.com/youzan/vant/issues/7826)
- Calendar: 修复动态设置 defaultDate 不生效的问题 [#7815](https://github.com/youzan/vant/issues/7815)
- Popup: 修复组件销毁时未解除滚动锁定的问题 [#7835](https://github.com/youzan/vant/issues/7835)
- Stepper: 修复动态设置 modelValue 时未格式化的问题 [81494d](https://github.com/youzan/vant/commit/81494dfa13e6ab9a3f12995f481290d27d14ab7a)

### [v3.0.1](https://github.com/youzan/vant/compare/v3.0.0...v3.0.1)

`2020-12-27`

**Feature**

- Form: valdiate 方法支持校验多个表单项 [#7810](https://github.com/youzan/vant/issues/7810)
- Form: resetValidation 方法支持重置多个表单项 [#7811](https://github.com/youzan/vant/issues/7811)
- Stepper: 新增 show-input 属性，用于控制是否显示输入框 [#7812](https://github.com/youzan/vant/issues/7812)
- IndexBar: 新增 scrollTo 方法 [#7794](https://github.com/youzan/vant/issues/7794)

**Bug Fixes**

- Cascader: 修复动画闪烁的问题 [#7802](https://github.com/youzan/vant/issues/7802)
- CountDown: 修复 SSR 过程中内存泄露的问题 [#7808](https://github.com/youzan/vant/issues/7808)
- Image: 修复 SSR 时提示 DOM 不匹配的问题 [#7822](https://github.com/youzan/vant/issues/7822)
- Popup: 修复滚动穿透的问题 [#7738](https://github.com/youzan/vant/issues/7738)
- Stepper: 修复 change 事件重复触发的问题 [#7820](https://github.com/youzan/vant/issues/7820)
- Swipe: 修复 SSR 样式不正确的问题 [#7821](https://github.com/youzan/vant/issues/7821)
- Swipe: 修复在 keepalive 标签内使用时显示不正确的问题 [#7772](https://github.com/youzan/vant/issues/7772)

### [v3.0.0](https://github.com/youzan/vant/compare/v2.12.0...v3.0.0)

`2020-12-23`

**更新内容**

请参考 [Vant 3.0 正式发布：全面拥抱 Vue 3](https://github.com/youzan/vant/issues/7797)。

### [v3.0.0-rc.4](https://github.com/youzan/vant/compare/v2.12.0-beta.0...v3.0.0-rc.4)

`2020-12-21`

**New Component**

- 新增 Cascader 级联选择组件 [#7771](https://github.com/youzan/vant/pull/7771)

<img src="https://b.yzcdn.cn/vant/cascader_1221.png">

**Feature**

- Stepper: 新增 show-input 属性 [#7785](https://github.com/youzan/vant/issues/7785)
- uploader: 支持在 fileList 的选项中单独配置 `imageFit` `deletable` `previewSize` `beforeDelete` 字段 [#7731](https://github.com/youzan/vant/issues/7731)

**Types**

- Lazyload: 修复类型定义错误 [#7757](https://github.com/youzan/vant/issues/7757)

### [v3.0.0-rc.3](https://github.com/youzan/vant/compare/v2.11.2...v3.0.0-rc.3)

`2020-12-10`

**Breaking Change**

- Stepper: `async-change` 属性重命名为 `before-change`，并调整使用方法 [e026d2](https://github.com/youzan/vant/commit/e026d2d83f66bb25c66f805cf8085de70d8e009f)

**perf**

- Stepper: 优化代码包体积 [#7675](https://github.com/youzan/vant/issues/7675)

**Bug Fixes**

- Stepper: 修复禁用按钮仍然能点击的问题 [c27760](https://github.com/youzan/vant/commit/c277603160a7a17685dc532304b9a0c2444db959)
- Tabs: 修复动态设置 active 值无效的问题 [#7717](https://github.com/youzan/vant/issues/7717)
- 包含 `v2.11.3` 版本的所有改动和修复

### [v3.0.0-rc.2](https://github.com/youzan/vant/compare/v3.0.0-rc.1...v3.0.0-rc.2)

`2020-12-04`

**perf**

- 优化包体积大小 [#7675](https://github.com/youzan/vant/issues/7675)

**Bug Fixes**

- Lazyload: 修复未导出 ESModule 的问题 [#7685](https://github.com/youzan/vant/issues/7685)
- NumberKeyboard: 修复 hide-on-click-outside 属性不生效的问题 [#7668](https://github.com/youzan/vant/issues/7668) [#7667](https://github.com/youzan/vant/issues/7667)
- Uploader: 修复动态修改 status 不生效的问题 [#7681](https://github.com/youzan/vant/issues/7681)
- Types: 修复 teleport 类型定义错误的问题 [#7687](https://github.com/youzan/vant/issues/7687)
- 包含 `v2.11.2` 版本的所有改动和修复

### [v3.0.0-rc.1](https://github.com/youzan/vant/compare/v2.11.1...v3.0.0-rc.1)

`2020-12-01`

**Breaking Change**

- Popover: trigger 属性的默认值调整为 click [1699d9](https://github.com/youzan/vant/commit/1699d9927240373867f065355136fd27ac04b0e5)

**Feature**

- Lazyload: 适配 Vue 3 [d3ca40](https://github.com/youzan/vant/commit/d3ca404f98ffd572035d7048c949e8942b89fc55)
- 包含 `v2.11.1` 版本的所有改动和修复

**style**

- Circle: 新增 @circle-color Less 变量 [1a6cf6](https://github.com/youzan/vant/commit/1a6cf64f548bb19c6bd478db67f2e0a1d7c9a145)
- Circle: 新增 @circle-layer-color Less 变量 [65a5ed](https://github.com/youzan/vant/commit/65a5ed85537b7a406655bd39f7e4f5332d780a82)
- Circle: 新增 @circle-size Less 变量 [b57f7e](https://github.com/youzan/vant/commit/b57f7e9d9810ce95047334f0897899ebddaac6f3)
- IndexBar: 默认高亮颜色调整为红色 [65b680](https://github.com/youzan/vant/commit/65b6807a7e6b8a415b5f228c5d55426cd81a1dfa) [87b0a0](https://github.com/youzan/vant/commit/87b0a034958296a720409ded893e708081c35bc5)
- IndexBar: 右边距调整为 8px [aad055](https://github.com/youzan/vant/commit/aad055906484d8b6c38a9f84a768f09522b13a41)

**Bug Fixes**

- Image: 修复 lazy-load 属性不生效的问题 [0ba818](https://github.com/youzan/vant/commit/0ba8187bf540abc0c593c6571554f1b72e8d3e19)
- Lazyload: 修复类型定义错误的问题 [d0c4c2](https://github.com/youzan/vant/commit/d0c4c26d758f18ac3f33fc7d4867a98b731b129d)
- Popup: 修复 transition-appear 属性不生效的问题 [dd6930](https://github.com/youzan/vant/commit/dd6930533593a363e25f56717e5c17184ef6e867)

### [v3.0.0-beta.10](https://github.com/youzan/vant/compare/v3.0.0-beta.9...v3.0.0-beta.10)

`2020-11-22`

**Bug Fixes**

- Radio: 修复 Radio 无法操作的问题 [0f7c9a](https://github.com/youzan/vant/commit/0f7c9a317cc9a7219ec8431bae0658a5e84d43af)

### [v3.0.0-beta.9](https://github.com/youzan/vant/compare/v2.11.0...v3.0.0-beta.9)

`2020-11-22`

**New Component**

- 新增 [Popover 气泡弹出框](#/zh-CN/popover)组件 [#7579](https://github.com/youzan/vant/issues/7579)

![](https://img.yzcdn.cn/vant/component-preview-1122.png)

**Feature**

- Search: 新增 blur 方法 [d26282](https://github.com/youzan/vant/commit/d26282e54245a47075fed01baf6304e0d84559e0)
- Search: 新增 focus 方法 [2833bc](https://github.com/youzan/vant/commit/2833bc03f5243370e5a3aeece5b823fc2ebde64c)

**Bug Fixes**

- Checkbox: 修复 bind-group 属性不生效的问题 [#7447](https://github.com/youzan/vant/issues/7447)
- Badge: 修复无类型定义的问题 [c487b3](https://github.com/youzan/vant/commit/c487b394efa946f6fae5059f1e1a69be11a25a6e)
- 包含 `v2.11.0` 版本的所有改动和修复

### [v3.0.0-beta.8](https://github.com/youzan/vant/compare/v2.10.14...v3.0.0-beta.8)

`2020-11-15`

**Bug Fixes**

- ActionSheet: 修复选项禁用或加载时仍能点击的问题 [996598](https://github.com/youzan/vant/commit/996598686955b90bb5cf7589b5ca1589e17e2016)
- ActionSheet: 修复 callback 选项不生效的问题 [27b761](https://github.com/youzan/vant/commit/27b761f534186a6bfa2e8e54cc78ccb51ec48e25)
- Calendar: 修复 default-date 为 null 时渲染失败的问题 [#7519](https://github.com/youzan/vant/issues/7519)
- DatetimePicker: 修复 DOM 上渲染多余属性的问题 [ed332d](https://github.com/youzan/vant/commit/ed332daf319e2005995f279026a57d4f30a339f6)
- NoticeBar: 修复初始化逻辑执行多次的问题 [0712d9](https://github.com/youzan/vant/commit/0712d920634e7b70b77f49c71337172bf3ece470)
- Swipe: 修复在 lazy-render 模式下渲染失败的问题 [e06ba4](https://github.com/youzan/vant/commit/e06ba480a9ec02af8659616ff6ceb5155defddad)
- Swipe: 修复初始化逻辑执行多次的问题 [c94173](https://github.com/youzan/vant/commit/c9417341e0adb681db6108cf1383bab77ab90da9)
- Tabs: 修复初始化逻辑执行多次的问题 [599e81](https://github.com/youzan/vant/commit/599e817cd4f4239b4a93c75f34118731d47891b5)
- 包含 `v2.10.14` 版本的所有改动和修复

### [v3.0.0-beta.7](https://github.com/youzan/vant/compare/v2.10.13...v3.0.0-beta.7)

`2020-11-08`

**Bug Fixes**

- Calendar: 修复动态设置 minDate 和 maxDate 时展示错误的问题 [#7412](https://github.com/youzan/vant/issues/7412)
- DropdownMenu: 修复无法禁用 closeOnClickOutside 属性的问题 [#7473](https://github.com/youzan/vant/issues/7473)
- Uploader: 修复在 before-read 返回 true 无效的问题 [#7493](https://github.com/youzan/vant/issues/7493)
- Uploader: 修复在 delete 事件中无法获取 index 的问题 [#7481](https://github.com/youzan/vant/issues/7481)
- 包含 `v2.10.13` 版本的所有改动和修复

### [v3.0.0-beta.6](https://github.com/youzan/vant/compare/v2.10.12...v3.0.0-beta.6)

`2020-11-01`

**Bug Fixes**

- Swipe: 修复开启 lazy-render 且 loop 为 false 时渲染节点不正确的问题 [#7465](https://github.com/youzan/vant/issues/7465)
- Swipe: 修复开启 lazy-render 时子节点被重复挂载的问题 [#7466](https://github.com/youzan/vant/issues/7466)
- Tabs: 修复初始动画错误的问题 [49e877](https://github.com/youzan/vant/commit/49e87756c70b33e1a56620ebee3c0aa53fb9fc86)
- ActionBar: 修复类型定义不存在的问题 [#7440](https://github.com/youzan/vant/issues/7440) [#7442](https://github.com/youzan/vant/issues/7442)
- 包含 `v2.10.12` 版本的所有改动和修复

### [v3.0.0-beta.5](https://github.com/youzan/vant/compare/v2.10.11...v3.0.0-beta.5)

`2020-10-24`

**Bug Fixes**

- Swipe: 修复动态插入轮播时无法滚动的问题 [#7366](https://github.com/youzan/vant/issues/7366)
- Toast: 修复 forbidClick 属性不生效的问题 [#7396](https://github.com/youzan/vant/issues/7396)
- Toast: 修复 duration 变化未生效的问题 [#7394](https://github.com/youzan/vant/issues/7394)
- 包含 `v2.10.11` 版本的所有改动和修复

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
- 包含 `v2.10.10` 版本的所有改动和修复

### [v3.0.0-beta.3](https://github.com/youzan/vant/compare/v2.10.9...v3.0.0-beta.3)

`2020-10-03`

**breaking changes**

- Checkbox: 在 Cell 内部使用时，现在需要手动添加 `@click.stop` 来阻止事件冒泡 [#7023](https://github.com/youzan/vant/issues/7023)

**Feature**

- 新增 Badge 徽标组件 [#6573](https://github.com/youzan/vant/issues/6573)
- Tab: 增加滑动切换动画 [#1174](https://github.com/youzan/vant/issues/1174)
- 包含 `v2.10.9` 版本的所有改动和修复

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
- 包含 `v2.10.8` 版本的所有改动和修复

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
- 包含 `v2.10.7` 版本的所有改动和修复

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

> 详细改动请参考 [从 v2 升级](https://youzan.github.io/vant/v3/#/zh-CN/migrate-from-v2)。
