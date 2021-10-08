# 更新日志

### 提示

当前文档为 Vant 3 的更新日志，如需查询 Vant 2 的更新内容，请访问 [Vant 2 更新日志](https://youzan.github.io/vant/#/zh-CN/changelog)。

### 介绍

Vant 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

**发布节奏**

- 修订号：每周发布，包含新特性和问题修复。
- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：无固定的发布时间，包含不兼容更新和重大功能更新。

## 更新内容

### [v3.2.5](https://github.com/youzan/vant/compare/v3.2.4...v3.2.5)

`2021-10-08`

**Feature**

- Field: 新增 error-message 插槽 [#9634](https://github.com/youzan/vant/issues/9634)

**Performance**

- 移除 CustomEvent polyfill [#9589](https://github.com/youzan/vant/issues/9589)
- 移除 passive event polyfill [#9590](https://github.com/youzan/vant/issues/9590)

**Types**

- Button: 新增 ButtonNativeType、ButtonIconPosition 类型 [#9604](https://github.com/youzan/vant/issues/9604)
- Skeleton: 新增 SkeletonAvatarShape 类型 [#9605](https://github.com/youzan/vant/issues/9605)

**Bug Fixes**

- Toast: 修复同步调用 Toast.clear 不生效的问题 [a48caa](https://github.com/youzan/vant/commit/a48caa7c98f88d9c87de3f9e9f208771c1c98ab5)
- 修复全量引入时，useCustomFieldValue 不生效的问题 [#9642](https://github.com/youzan/vant/issues/9642) [#9455](https://github.com/youzan/vant/issues/9455)

### [v3.2.4](https://github.com/youzan/vant/compare/v3.2.3...v3.2.4)

`2021-09-26`

**Feature**

- Icon: 新增 guide-o 图标 [c5f45a](https://github.com/youzan/vant/commit/c5f45a5c134bf9d789c943b247c620a1a2391d03)
- Search: 新增 autocomplete 属性 [#9553](https://github.com/youzan/vant/issues/9553)
- Search: 新增 name 属性 [#9563](https://github.com/youzan/vant/issues/9563)

**Performance**

- Lazyload: 移除生产环境的 log 信息 [33d7aa](https://github.com/youzan/vant/commit/33d7aa8f1aee38576f1a0b3549560edd7b5fe0ed)
- Lazyload: 移除 edge 15 polyfill [00b156](https://github.com/youzan/vant/commit/00b1568887321cf452ed4b8872fe99f089a74b22)
- @vant/use: 移除 raf polyfill [#9544](https://github.com/youzan/vant/issues/9544)

**Types**

- 导出部分组件的 props 类型 [a3380f](https://github.com/youzan/vant/commit/a3380f08c06f5fd32443e9b033e3d8a29c1f726a)
- 修复 $toast、$dialog、$notify 类型缺失的问题 [#9556](https://github.com/youzan/vant/issues/9556)
- Popover: PopoverAction 类型支持扩展字段 [#9554](https://github.com/youzan/vant/issues/9554)

**Bug Fixes**

- Collapse: 修复 wrapper ref 可能为空导致报错的问题 [#9505](https://github.com/youzan/vant/issues/9505)
- CouponList: 修复错误的滚动条样式 [#9480](https://github.com/youzan/vant/issues/9480)
- Radio: 修复 icon ref 可能为空导致报错的问题 [#9503](https://github.com/youzan/vant/issues/9503)
- Tabs: 修复多个 Tabs 组件同时存在时动画失效的问题 [#9543](https://github.com/youzan/vant/issues/9543)

### [v3.2.3](https://github.com/youzan/vant/compare/v3.2.2...v3.2.3)

`2021-09-12`

**Bug Fixes**

- Button: 修复无法通过 CSS 变量设置渐变背景色的问题 [#9454](https://github.com/youzan/vant/issues/9454)
- Calendar: 日历组件已经禁用部分日期依然可以选择日期区间的问题 [#9361](https://github.com/youzan/vant/issues/9361)
- Field: 修复全局设置 user-select: none 时 IOS 下无法输入的问题 [#9418](https://github.com/youzan/vant/issues/9418)
- FIeld: 修复 field-error-message-font-size 变量名称错误的问题 [#9394](https://github.com/youzan/vant/issues/9394)
- Popup: 修复在 keep-alive 下激活时无法开启自动轮播的问题 [#9452](https://github.com/youzan/vant/issues/9452)
- Theme: 移除了内部 less import 的波浪号 [a7ab2f](https://github.com/youzan/vant/commit/a7ab2f8049b7c18d2a2f74aeac26f72dfbadaf6f)
- slider: 修复双滑块情况下，传入空数组无法滑动的问题 [#9409](https://github.com/youzan/vant/issues/9409)
- Uploader: 修复 --van-uploader-delete-icon-size 变量未正确生效的问题 [#9453](https://github.com/youzan/vant/issues/9453)

### [v3.2.2](https://github.com/youzan/vant/compare/v3.2.1...v3.2.2)

`2021-09-02`

**Feature**

- Field: 新增 id 属性 [#9347](https://github.com/youzan/vant/issues/9347)
- Field: 新增 `van-field__error` 类名 [#9327](https://github.com/youzan/vant/issues/9327)
- Field: label 现在会使用原生 `label` 标签 [#9346](https://github.com/youzan/vant/issues/9346)
- Popover: 新增 show-arrow 属性 [#9372](https://github.com/youzan/vant/issues/9372)
- Progress: 新增过渡动画效果 [ba4ff5](https://github.com/youzan/vant/commit/ba4ff58af6ccf67e255bf43ef905677dc64596a3)
- Search: 新增 id 属性 [#9349](https://github.com/youzan/vant/issues/9349)
- Tab: 新增 show-zero-badge 属性 [#9343](https://github.com/youzan/vant/issues/9343)
- Locale: 精简一部分国际化文本配置 [#9329](https://github.com/youzan/vant/issues/9329)

**Bug Fixes**

- AddressEdit: 移除了无效的样式变量 [#9364](https://github.com/youzan/vant/issues/9364)
- Progress: 修复在 v-show 内使用时无法正确渲染的问题 [841e09](https://github.com/youzan/vant/commit/841e09d0529961058ecb63ed26f018cf3a66a3bf)
- Progress: 修复 percentage 属性缺少默认值的问题 [8ac597](https://github.com/youzan/vant/commit/8ac597dc3d2316d34f866dcfd7e1646c695da180)
- 修复动画相关的 CSS 变量不生效的问题 [#9337](https://github.com/youzan/vant/issues/9337)

### [v3.2.1](https://github.com/youzan/vant/compare/v3.2.0...v3.2.1)

`2021-08-22`

**Feature**

- Circle: 新增 start-position 属性 [#9305](https://github.com/youzan/vant/issues/9305)
- Slider: 新增 reverse 属性 [#9308](https://github.com/youzan/vant/issues/9308)
- NumberKeyboard: 新增 van-number-keyboard-key-background-color CSS 变量 [#9303](https://github.com/youzan/vant/issues/9303)
- PasswordInput: add password-input-text-color CSS 变量 [#9304](https://github.com/youzan/vant/issues/9304)

**Bug Fixes**

- Calendar: 修复 month-show 事件缺少 title 参数的问题 [#9275](https://github.com/youzan/vant/issues/9275)
- Dialog: 修复 beforeClose 重复触发的问题 [#9283](https://github.com/youzan/vant/issues/9283) [#9291](https://github.com/youzan/vant/issues/9291)
- Field: 修复 FieldInstance 类型未导出的问题 [#9254](https://github.com/youzan/vant/issues/9254)
- Rate: 修复 count 属性传入字符串类型时展示错误的问题 [#9307](https://github.com/youzan/vant/issues/9307)
- TreeSelect: 修复 CSS 负数变量不生效导致样式错误的问题 [#9306](https://github.com/youzan/vant/issues/9306)

### [v3.2.0](https://github.com/youzan/vant/compare/v3.1.5...v3.2.0)

`2021-08-12`

**Feature**

- Form: 新增 useCustomFieldValue 方法，用于自定义表单项 [#9200](https://github.com/youzan/vant/issues/9200)
- Button: loading-size 属性支持 number 类型 [#9177](https://github.com/youzan/vant/issues/9177)
- Style: 新增 van-safe-area-bottom 样式类 [#9205](https://github.com/youzan/vant/issues/9205)

**Types**

- AddressEdit: 新增 AddressEditInstance 类型 [#9197](https://github.com/youzan/vant/issues/9197)
- Area: 新增 AreaInstance 类型 [#9195](https://github.com/youzan/vant/issues/9195)
- Calendar: 新增 CalendarInstance 类型 [#9165](https://github.com/youzan/vant/issues/9165)
- Checkbox: 新增 CheckboxInstance 类型 [#9140](https://github.com/youzan/vant/issues/9140)
- CheckboxGroup: 新增 CheckboxGroupInstance 类型 [#9142](https://github.com/youzan/vant/issues/9142)
- CollapseItem: 新增 CollapseItemInstance 类型 [#9194](https://github.com/youzan/vant/issues/9194)
- CountDown: 新增 CountDownInstance 类型 [#9153](https://github.com/youzan/vant/issues/9153)
- DatetimePicker: 新增 DatetimePickerInstance 类型 [#9208](https://github.com/youzan/vant/issues/9208)
- DropdownItem: 新增 DropdownItemInstance 类型 [#9214](https://github.com/youzan/vant/issues/9214)
- Field: 新增 FieldInstance 类型 [#9166](https://github.com/youzan/vant/issues/9166)
- Form: 新增 FormInstance 类型 [#9139](https://github.com/youzan/vant/issues/9139)
- ImagePreview: 新增 ImagePreviewInstance 类型 [#9216](https://github.com/youzan/vant/issues/9216)
- IndexBar: 新增 IndexBarInstance 类型 [#9246](https://github.com/youzan/vant/issues/9246)
- List: 新增 ListInstance 类型 [#9159](https://github.com/youzan/vant/issues/9159)
- NoticeBar: 新增 NoticeBarInstance 类型 [#9245](https://github.com/youzan/vant/issues/9245)
- Picker: 新增 PickerInstance 类型 [#9183](https://github.com/youzan/vant/issues/9183)
- Progress: 新增 ProgressInstance 类型 [#9247](https://github.com/youzan/vant/issues/9247)
- Search: 新增 SearchInstance 类型 [#9181](https://github.com/youzan/vant/issues/9181)
- Swipe: 新增 SwipeInstance 类型 [#9158](https://github.com/youzan/vant/issues/9158)
- SwipeCell: 新增 SwipeCellInstance 类型 [#9179](https://github.com/youzan/vant/issues/9179)
- Tabs: 新增 TabsInstance 类型 [#9174](https://github.com/youzan/vant/issues/9174)
- Uploader: 新增 UploaderInstance 类型 [#9164](https://github.com/youzan/vant/issues/9164)

**Bug Fixes**

- Badge: 修复 offset 为负数时不生效的问题 [#9199](https://github.com/youzan/vant/issues/9199)
- Image: 修复圆角数值不正确的问题 [#9163](https://github.com/youzan/vant/issues/9163)
- Field: 修复 Textarea 内容较多时，输入会导致页面滚动到顶部的问题 [#9206](https://github.com/youzan/vant/issues/9206)
- Notify: 修复默认选项被错误覆盖的问题 [#9138](https://github.com/youzan/vant/issues/9138)
- Rate: 修复星星较多时无法自动换行的问题 [#9192](https://github.com/youzan/vant/issues/9192)
- Tabs: 修复 card 类型内边距错误的问题 [#9168](https://github.com/youzan/vant/issues/9168)
- Toast: 修复某些情况下 message 无法更新的问题 [#9196](https://github.com/youzan/vant/issues/9196)

### [v3.1.5](https://github.com/youzan/vant/compare/v3.1.4...v3.1.5)

`2021-07-26`

**Feature**

- AddressEdit: 新增 address-edit-button-font-size 样式变量 [#9113](https://github.com/youzan/vant/issues/9113)
- Icon: 新增 shield-o 图标 [#9082](https://github.com/youzan/vant/issues/9082)
- Locale: 新增 Russian 俄罗斯语言包 [#9088](https://github.com/youzan/vant/issues/9088)
- Toast: 优化不可点击状态下的光标展示 [#9116](https://github.com/youzan/vant/issues/9116)
- Uploader: 新增 click-upload 事件 [#9119](https://github.com/youzan/vant/issues/9119)
- Uploader: 新增 readonly 属性 [#9118](https://github.com/youzan/vant/issues/9118)

**Bug Fixes**

- Icon: 修复 invitation 图标名称拼写错误 [#9096](https://github.com/youzan/vant/issues/9096)
- NumberKeyboard: 修复点击外部时会触发 close 事件的问题 [#9108](https://github.com/youzan/vant/issues/9108)
- Search: 修复左侧图标颜色不正确的问题 [#9100](https://github.com/youzan/vant/issues/9100)
- Tabbar: 修复 tabbar-item-icon-margin-bottom 样式变量名称 [#9101](https://github.com/youzan/vant/issues/9101)

### [v3.1.4](https://github.com/youzan/vant/compare/v3.1.3...v3.1.4)

`2021-07-19`

**Feature**

- ActionSheet: 新增 before-close 属性 [#9068](https://github.com/youzan/vant/issues/9068)
- Cascader: 新增 option 插槽 [#9036](https://github.com/youzan/vant/issues/9036)
- Cascader: 优化光标展示 [#9032](https://github.com/youzan/vant/issues/9032)
- Popup: 新增 before-close 属性 [#9067](https://github.com/youzan/vant/issues/9067)
- ShareSheet: 新增 before-close 属性 [#9068](https://github.com/youzan/vant/issues/9068)
- Tabs: 新增 click-tab 事件 [#9037](https://github.com/youzan/vant/issues/9037)

**Bug Fixes**

- Field: 修复 label-align 为 right 时 required 标记位置错误的问题 [#9035](https://github.com/youzan/vant/issues/9035)
- List: 修复在 Tabs 内嵌套使用时，切换 Tabs 不触发 load 事件的问题 [#9022](https://github.com/youzan/vant/issues/9022)
- Popup: 修复某些情况下未正确触发 open、close 事件的问题 [#9065](https://github.com/youzan/vant/issues/9065)

### [v3.1.3](https://github.com/youzan/vant/compare/v3.1.2...v3.1.3)

`2021-07-11`

**Feature**

- Calendar: 新增 click-subtitle 事件 [#8981](https://github.com/youzan/vant/issues/8981)
- Calendar: 新增 subtitle 插槽 [#8980](https://github.com/youzan/vant/issues/8980)
- ConfigProvider: 新增 icon-prefix 属性 [#8986](https://github.com/youzan/vant/issues/8986)
- Slider: 新增 drag 事件参数 [#8990](https://github.com/youzan/vant/issues/8990)
- Slider: 新增 left-button、right-button 插槽 [#8989](https://github.com/youzan/vant/issues/8989)
- touch-emulator: 支持通过白名单排除节点 [#8984](https://github.com/youzan/vant/issues/8984)

**Bug Fixes**

- Step: 修复 z-index 过高问题 [#9003](https://github.com/youzan/vant/issues/9003)

### [v3.1.2](https://github.com/youzan/vant/compare/v3.1.1...v3.1.2)

`2021-07-03`

**Feature**

- Area: 新增 toolbar、confirm、cancel 插槽 [#8969](https://github.com/youzan/vant/issues/8969)
- Calendar: 优化日期较多时的加载性能 [#8955](https://github.com/youzan/vant/issues/8955)
- Cascader: 新增 disabled 选项 [#8952](https://github.com/youzan/vant/issues/8952)
- ConfigProvider: 新增 tag 属性 [#8967](https://github.com/youzan/vant/issues/8967)
- Picker: 新增 toolbar 插槽，将 default 插槽标记为废弃 [#8968](https://github.com/youzan/vant/issues/8968)
- Picker: 允许 Option 的值为 number 类型 [#8951](https://github.com/youzan/vant/issues/8951)
- Picker: 新增 picker-option-padding CSS 变量 [#8947](https://github.com/youzan/vant/issues/8947)

**Bug Fixes**

- Toast: 修复文字换行问题 [#8965](https://github.com/youzan/vant/issues/8965)

### [v3.1.1](https://github.com/youzan/vant/compare/v3.1.0...v3.1.1)

`2021-06-27`

**Feature**

- Cell: 新增 value 插槽，将 default 插槽标记为废弃 [#8933](https://github.com/youzan/vant/issues/8933)
- CollapseItem: 新增 label 插槽 [#8934](https://github.com/youzan/vant/issues/8934)
- NoticeBar: 新增 reset 方法 [#8917](https://github.com/youzan/vant/issues/8917)
- Tabs: 新增 nav-bottom 插槽 [#8915](https://github.com/youzan/vant/issues/8915)

### [v3.1.0](https://github.com/youzan/vant/compare/v3.1.0-beta.0...v3.1.0)

`2021-06-22`

**New Component**

- 新增 [ConfigProvider](#/zh-CN/config-provider) 组件，用于主题定制 [#8854](https://github.com/youzan/vant/issues/8854)

**Feature**

- 所有组件支持 CSS 变量 [aef257](https://github.com/youzan/vant/commit/aef2579a95da7c8b528ba7062b227fea698a0487) [fe1cba](https://github.com/youzan/vant/commit/fe1cba97b796eba7e9b5dca0ce4ab0d1de95715c)
- 新增 primary-color 等样式变量 [#8861](https://github.com/youzan/vant/issues/8861)
- Checkbox: icon 插槽新增 disabled 参数 [#8839](https://github.com/youzan/vant/issues/8839)
- Cascader: 新增 className 选项 [#8882](https://github.com/youzan/vant/issues/8882)
- Cascader: 新增 color 选项 [#8883](https://github.com/youzan/vant/issues/8883)
- CellGroup: 新增 inset 属性 [#8885](https://github.com/youzan/vant/issues/8885)
- GridItem: 新增 reverse 属性 [#8878](https://github.com/youzan/vant/issues/8878)
- IndexBar: 新增 teleport 属性 [#8820](https://github.com/youzan/vant/issues/8820)

**Bug Fixes**

- Dialog: 修复 message 作为函数时返回 HTML 字符串无效的问题 [#8872](https://github.com/youzan/vant/issues/8872)
- Slider: 修复设置 step 属性时，输入值格式化错误的问题 [#8893](https://github.com/youzan/vant/issues/8893)

### [v3.0.18](https://github.com/youzan/vant/compare/v3.0.17...v3.0.18)

`2021-06-03`

**Feature**

- Button: 新增 icon 插槽 [#8783](https://github.com/youzan/vant/issues/8783)
- CouponList: 新增 list-footer、disabled-list-footer 插槽 [#8801](https://github.com/youzan/vant/issues/8801)
- Locale: 新增 French 法语语言包 [#8795](https://github.com/youzan/vant/issues/8795)
- Popup: 新增 icon-prefix 属性 [#8793](https://github.com/youzan/vant/issues/8793)
- Popup: 新增 overlay-content 插槽 [#8794](https://github.com/youzan/vant/issues/8794)

**Bug Fixes**

- Collapse: 修复在 safari 上可能出现渲染异常的问题 [#8788](https://github.com/youzan/vant/issues/8788)
- NoticeBar: 修复在 Popup 内嵌套使用时播放异常的问题 [#8789](https://github.com/youzan/vant/issues/8789)
- List: 移除未使用的 @list-icon-margin-right 变量 [#8759](https://github.com/youzan/vant/issues/8759)
- @vant/touch-emulator: 修复 SSR 时报错的问题 [#8767](https://github.com/youzan/vant/issues/8767)

### [v3.0.17](https://github.com/youzan/vant/compare/v3.0.16...v3.0.17)

`2021-05-23`

**Feature**

- ActionBarIcon: 新增 icon-prefix 属性 [#8748](https://github.com/youzan/vant/issues/8748)
- Calendar: 新增 over-range 事件 [#8739](https://github.com/youzan/vant/issues/8739)
- Calendar: 新增 show-range-prompt 属性 [#8739](https://github.com/youzan/vant/issues/8739)
- Calendar: 新增 top-info、bottom-info 插槽 [#8716](https://github.com/youzan/vant/issues/8716)
- GridItem: 新增 icon-color 属性 [#8753](https://github.com/youzan/vant/issues/8753)
- NoticeBar: 默认 speed 由 50 调整为 60 [#8694](https://github.com/youzan/vant/issues/8694)
- Popover: 新增 icon-prefix 属性 [#8703](https://github.com/youzan/vant/issues/8703)
- Toast: 新增不同类型 Toast 的 transition 过渡效果 [#8743](https://github.com/youzan/vant/issues/8743)
- Uploader: max-size 属性支持函数格式 [#8744](https://github.com/youzan/vant/issues/8744)

**Bug Fixes**

- Button: 修复 tsx 下使用时缺少 onClick 类型定义的问题 [#8665](https://github.com/youzan/vant/issues/8665)
- Calendar: 修复默认日期不正确的问题 [#8696](https://github.com/youzan/vant/issues/8696)
- DatetimePicker: 修复动态设置 minDate、maxDate 时异常的问题 [#8658](https://github.com/youzan/vant/issues/8658)
- List: 修复在开启 animated 的 Tabs 下使用时加载异常的问题 [#8741](https://github.com/youzan/vant/issues/8741)
- Tabs: 修复滚动事件监听不正确的问题 [#8734](https://github.com/youzan/vant/issues/8734)
- Toast: 修复多次调用时持续时间不正确的问题 [#8742](https://github.com/youzan/vant/issues/8742)

### [v3.0.16](https://github.com/youzan/vant/compare/v3.0.15...v3.0.16)

`2021-05-03`

**Feature**

- Swipe: 新增 indicator 插槽的 active 参数 [#8645](https://github.com/youzan/vant/issues/8645)
- Cascader: 新增 @cascader-header-padding less 变量 [#8626](https://github.com/youzan/vant/issues/8626)
- Steps: 新增 icon-prefix 属性 [#8631](https://github.com/youzan/vant/issues/8631)
- 导出更多类型定义 [#8652](https://github.com/youzan/vant/issues/8652)

**Bug Fixes**

- Stepper: 修复 blur 事件触发时机 [#8620](https://github.com/youzan/vant/issues/8620)
- SubmitBar: 修复 @submit-bar-price-font-size 变量不生效的问题 [#8639](https://github.com/youzan/vant/issues/8639)
- Swipe: 修复在 Popup 内时展示可能不正确的问题 [#8643](https://github.com/youzan/vant/issues/8643)
- Tabs: 修复在 Popup 内时展示可能不正确的问题 [#8642](https://github.com/youzan/vant/issues/8642)

### [v3.0.15](https://github.com/youzan/vant/compare/v2.12.14-test...v3.0.15)

`2021-04-25`

**Feature**

- Cascader: 新增 click-tab 事件 [#8606](https://github.com/youzan/vant/issues/8606)

**Bug Fixes**

- Tab: 修复 SSR 时报错的问题 [#8603](https://github.com/youzan/vant/issues/8603)
- Rate: 修复点击半星时未正确选中的问题 [#8580](https://github.com/youzan/vant/issues/8580)
- Tag: 修复使用 color 和 plain 属性时边框颜色错误的问题 [#8601](https://github.com/youzan/vant/issues/8601)

### [v3.0.14](https://github.com/youzan/vant/compare/v3.0.13...v3.0.14)

`2021-04-18`

**Feature**

- Badge: offset 属性支持传入任意单位 [35edb7](https://github.com/youzan/vant/commit/35edb72b5cd519d4e75443acaa0a63db16695d2d)
- Rate: 支持在 readonly 时渲染任意小数结果 [#8528](https://github.com/youzan/vant/issues/8528)

**Bug Fixes**

- ContactList: 修复 nodes 类型错误 [0b764b](https://github.com/youzan/vant/commit/0b764b63470b09f5654d267c8d07a20bc2d31536)

### [v3.0.13](https://github.com/youzan/vant/compare/v3.0.12...v3.0.13)

`2021-04-11`

**Feature**

- ActionBar: 新增 @action-bar-icon-background-color 样式变量 [#8474](https://github.com/youzan/vant/issues/8474)
- Popover: 升级依赖的 @popperjs/core 到 2.9.2 版本 [0d1323](https://github.com/youzan/vant/commit/0d132337d5d263957a7993d60e47a18efec7313e)
- perf: 优化包体积 [ba3e6d](https://github.com/youzan/vant/commit/ba3e6d56a0bc7ae3acc25b1380f054da3b9b020f)

**Types**

- Popup: 修复 PopupCloseIconPosition 类型错误 [15d901](https://github.com/youzan/vant/commit/15d901ad6aace3826881cb3c6e0499f75b71df80)
- Search: 修复在 tsx 下部分 props 不存在的问题 [#8485](https://github.com/youzan/vant/issues/8485)
- Stepper: 优化 theme 属性类型定义 [#8489](https://github.com/youzan/vant/issues/8489)

**Bug Fixes**

- Field: 修复 autofocus 属性不生效的问题 [#8488](https://github.com/youzan/vant/issues/8488)

### [v3.0.12](https://github.com/youzan/vant/compare/v3.0.11...v3.0.12)

`2021-04-05`

**Feature**

- CollapseItem: 新增 readonly 属性 [#8445](https://github.com/youzan/vant/issues/8445)
- Field: 新增 clear-icon 属性 [#8438](https://github.com/youzan/vant/issues/8438)
- Search: 新增 clear-icon 属性 [#8439](https://github.com/youzan/vant/issues/8439)
- Search: 新增 error-message 属性 [#8442](https://github.com/youzan/vant/issues/8442)
- Search: 新增 formatter、format-trigger 属性 [#8441](https://github.com/youzan/vant/issues/8441)

**Bug Fixes**

- 修复 Webstorm 下组件标签提示不正确的问题 [#8450](https://github.com/youzan/vant/issues/8450)

### [v3.0.11](https://github.com/youzan/vant/compare/v3.0.10...v3.0.11)

`2021-03-30`

**Feature**

- Cascader: 新增 swipeable 属性 [#8383](https://github.com/youzan/vant/issues/8383)
- Dialog: 新增 footer 插槽 [#8382](https://github.com/youzan/vant/issues/8382)
- Dialog: 支持在 message 中传入 render 函数 [#8420](https://github.com/youzan/vant/issues/8420)
- Image: 新增 icon-size 属性 [#8395](https://github.com/youzan/vant/issues/8395)
- Row: 新增 wrap 属性 [#8393](https://github.com/youzan/vant/issues/8393)

**Bug Fixes**

- Field: 修复在个别情况下错误地清除错误提示的问题 [#8409](https://github.com/youzan/vant/issues/8409)
- Sticky: 修复在 SSR 时提示 Element 不存在的问题 [#8407](https://github.com/youzan/vant/issues/8407)
- Tabs: 修复在 safari 上左滑退出页面时手势判断错误的问题 [#8388](https://github.com/youzan/vant/issues/8388)

### [v3.0.10](https://github.com/youzan/vant/compare/v3.0.9...v3.0.10)

`2021-03-19`

**Feature**

- ActionSheet: 新增 cancel 插槽 [#8333](https://github.com/youzan/vant/issues/8333)
- Badge: 新增 show-zero 属性 [#8381](https://github.com/youzan/vant/issues/8381)
- Cascader: 新增 close-icon 属性 [#8334](https://github.com/youzan/vant/issues/8334)
- Popover: 新增 close-on-click-overlay 属性 [#8351](https://github.com/youzan/vant/issues/8351)
- Popover: 新增 duration 属性 [#8355](https://github.com/youzan/vant/issues/8355)
- Popover: 新增 overlay-class 属性 [#8353](https://github.com/youzan/vant/issues/8353)
- Popover: 新增 overlay-style 属性 [#8354](https://github.com/youzan/vant/issues/8354)
- ShareSheet: 新增 cancel 插槽 [#8335](https://github.com/youzan/vant/issues/8335)
- Sticky: 新增 change event [#8374](https://github.com/youzan/vant/issues/8374)
- Tag: close 事件新增 event 参数 [#8337](https://github.com/youzan/vant/issues/8337)
- Toast: 新增 iconSize 选项 [#8338](https://github.com/youzan/vant/issues/8338)

**Feature**

- ContactList: 新增 @contact-list-item-radio-icon-color Less 变量 [#8322](https://github.com/youzan/vant/issues/8322)
- Coupon: 新增 @coupon-corner-checkbox-icon-color Less 变量 [#8323](https://github.com/youzan/vant/issues/8323)
- List: 新增 @list-loading-icon-size Less 变量 [#8365](https://github.com/youzan/vant/issues/8365)
- Loading: 新增 @button-loading-icon-size Less 变量 [465bf0](https://github.com/youzan/vant/commit/465bf07095c58e8292b23ef0c64be1550aa9d430)
- PullRefresh: 新增 @pull-refresh-loading-icon-size Less 变量 [#8366](https://github.com/youzan/vant/issues/8366)

**Bug Fixes**

- Popover: 修复 close-on-click-outside 属性不生效的问题 [#8352](https://github.com/youzan/vant/issues/8352)
- Swipe: 修复添加 scale 动画时宽度计算错误的问题 [#8330](https://github.com/youzan/vant/issues/8330)

### [v3.0.9](https://github.com/youzan/vant/compare/v3.0.8...v3.0.9)

`2021-03-08`

**Feature**

- AddressList: 新增 tag 插槽 [#8292](https://github.com/youzan/vant/issues/8292)

**Bug Fixes**

- 修复主题定制不生效的问题 [#8301](https://github.com/youzan/vant/issues/8301)
- 修复在 TS 下使用 app.use 注册组件报错的问题 [#8308](https://github.com/youzan/vant/issues/8308)

### [v3.0.8](https://github.com/youzan/vant/compare/v3.0.7...v3.0.8)

`2021-03-07`

**Types**

- 完善所有组件的类型定义 [#8264](https://github.com/youzan/vant/issues/8264)

**Feature**

- ImagePreview: 新增 transition 属性 [#8275](https://github.com/youzan/vant/issues/8275)
- ImagePreview: 新增 overlay-style 属性 [#8276](https://github.com/youzan/vant/issues/8276)
- Locale: 新增 th-TH 泰语 [#8297](https://github.com/youzan/vant/issues/8297)
- PullRefresh: 新增 pull-distance 属性 [#8280](https://github.com/youzan/vant/issues/8280)
- Button: 新增若干个 Less 变量 [#8281](https://github.com/youzan/vant/issues/8281)

**Bug Fixes**

- ActionSheet: 修复返回页面时可能错误地重新打开的问题 [#8272](https://github.com/youzan/vant/issues/8272)
- Stepper: 修复在 iOS14 下禁用时输入框文字不可见的问题 [#8277](https://github.com/youzan/vant/issues/8277)
- Swipe: 修复动态插入轮播图时渲染错误的问题 [#8288](https://github.com/youzan/vant/issues/8288)

### [v3.0.7](https://github.com/youzan/vant/compare/v3.0.6...v3.0.7)

`2021-02-28`

**Feature**

- Notify: 新增 lockScroll 选项 [#8168](https://github.com/youzan/vant/issues/8168)
- Popup: click-overlay 事件新增 `Event` 参数 [#8107](https://github.com/youzan/vant/issues/8107)
- ShareSheet: 新增 overlay-style 属性 [#8225](https://github.com/youzan/vant/issues/8225)
- ShareSheet: 新增 overlay-class 属性 [#8225](https://github.com/youzan/vant/issues/8225)
- Step: 新增 finish-icon 插槽 [#8241](https://github.com/youzan/vant/issues/8241)
- Steps: 新增 finish-icon 属性 [#8103](https://github.com/youzan/vant/issues/8103)
- Uploader: 新增 @uploader-mask-text-color 样式变量 [#8064](https://github.com/youzan/vant/issues/8064)

**perf**

- 包体积优化：调整适配的浏览器版本，与 Vue 3 保持一致 [#8227](https://github.com/youzan/vant/issues/8227)

**Bug Fixes**

- ActionSheet: 修复 safe-area-inset-bottom 属性不生效的问题 [#8085](https://github.com/youzan/vant/issues/8085)
- DateTimePicker: 修复 v-model 为 null 时初始值不正确的问题 [#8193](https://github.com/youzan/vant/issues/8193)
- Form: 修复提交表单时可能滚动到错误的表单项的问题 [#8159](https://github.com/youzan/vant/issues/8159)
- ImagePreview: 修复第二次调用时可能出现渲染不正确的问题 [#8060](https://github.com/youzan/vant/issues/8060)
- IndexBar: 修复初始化时激活的锚点未正确渲染的问题 [#8164](https://github.com/youzan/vant/issues/8164)
- Popup: 修复动态设置 lock-scroll 属性不生效的问题 [#8169](https://github.com/youzan/vant/issues/8169)
- Swipe: 修复初始化时 active 值可能错误的问题 [#8061](https://github.com/youzan/vant/issues/8061)
- SwipeCell: 修复点击外部时 click 事件参数不正确的问题 [#8108](https://github.com/youzan/vant/issues/8108)
- Tabbar: 修复 name 为 0 时激活的选项可能不正确的问题 [#8125](https://github.com/youzan/vant/issues/8125)
- Tabs: 修复 v-model 为 0 时激活的标签页可能不正确的问题 [#8074](https://github.com/youzan/vant/issues/8074)
- Toast: 修复 SSR 时可能报错的问题 [#8214](https://github.com/youzan/vant/issues/8214)

### [v3.0.6](https://github.com/youzan/vant/compare/v3.0.5...v3.0.6)

`2021-01-31`

**Feature**

- Area: 支持超过 6 位的地区码 [#8001](https://github.com/youzan/vant/issues/8001)
- Form: show-error 属性的默认值调整为 false [#8016](https://github.com/youzan/vant/issues/8016)
- Form: 支持在 validator 中返回错误提示 [#8052](https://github.com/youzan/vant/issues/8052)
- NumberKeyboard: 新增 blur-on-close 属性 [#8033](https://github.com/youzan/vant/issues/8033)
- Popover: 新增 click-overlay 事件 [#8050](https://github.com/youzan/vant/issues/8050)
- Popover: 支持在 action 选项对象中配置 color 字段 [#8049](https://github.com/youzan/vant/issues/8049)
- Sticky: 新增 position、offset-bottom 属性 [#7979](https://github.com/youzan/vant/issues/7979)

**Bug Fixes**

- Button: 修复加载状态下会触发表单提交的问题 [#8018](https://github.com/youzan/vant/issues/8018)
- Calendar: 修复无法使用 scrollToDate 方法的问题 [#7983](https://github.com/youzan/vant/issues/7983)
- Empty: 修复 linearGradient id 可能导致冲突的问题 [#8013](https://github.com/youzan/vant/issues/8013)
- Toast: 修复 closeOnClickOverlay 设置为 true 不生效的问题 [#8044](https://github.com/youzan/vant/issues/8044)

### [v3.0.5](https://github.com/youzan/vant/compare/v3.0.4...v3.0.5)

`2021-01-24`

**Feature**

- Badge: 新增 offset 属性 [e0b463](https://github.com/youzan/vant/commit/e0b463630108b5031a02a8afcd0c141a7fdbac9e)
- Calendar: reset 方法支持重置到指定日期 [#7966](https://github.com/youzan/vant/issues/7966)
- Icons: 新增 wechat 图标, 重命名原 wechat 图标为 wechat-pay [b3cd8c](https://github.com/youzan/vant/commit/b3cd8c14aea9e542a9de4ba9999e50c3ecbf3b3c)
- ImagePreview: 调用 swipeTo 方法后自动重置缩放状态 [#7972](https://github.com/youzan/vant/issues/7972)
- ImagePreview: 调整 swipeDuration 的默认值为 300ms [#7970](https://github.com/youzan/vant/issues/7970)
- ShareSheet: 新增 wechat-moments 朋友圈图标 [ca66fb](https://github.com/youzan/vant/commit/ca66fbca36c5c839e3a294d465b0fc2bd7bf5039)
- Slider: 新增 readonly 属性 [4cd991](https://github.com/youzan/vant/commit/4cd991dfec01bd5342cb59b750d0dfa5901b8dc8)

**style**

- ShareSheet: 更新 qrcode 图标 [32a08b](https://github.com/youzan/vant/commit/32a08bb6807d9d38027e03eef376d82b6eab282e)
- TreeSelect: 新增右侧选项点击反馈 [bada31](https://github.com/youzan/vant/commit/bada315fb3b0fbdf30c663170c867bbbc274687c)

**Bug Fixes**

- Calendar: 修复调用 reset 方法时未重置到默认日期的问题 [#7967](https://github.com/youzan/vant/issues/7967)
- Dialog: 修复切换 allowHtml 时 message 渲染不正确的问题 [#7968](https://github.com/youzan/vant/issues/7968)
- ImagePreview: 修复 scale 事件的 index 参数为 undefined 的问题 [#7971](https://github.com/youzan/vant/issues/7971)

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
