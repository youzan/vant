# 更新日志

### [v2.2.0](https://github.com/youzan/vant/tree/v2.2.0)
`2019-09-06`

**Features**

- Style: 更新基础红色为 #ee0a24 [\#4368](https://github.com/youzan/vant/pull/4368)
- Rate: 新增 touchable 属性 [\#4361](https://github.com/youzan/vant/pull/4361)
- Rate: 布局调整为 inline-block [\#4334](https://github.com/youzan/vant/pull/4334)
- Rate: 优化手势滑动的流畅度 [\#4336](https://github.com/youzan/vant/pull/4336)
- Popup: 新增 closeable 属性 [\#4362](https://github.com/youzan/vant/pull/4362)
- Popup: 新增 close-icon 属性 [\#4366](https://github.com/youzan/vant/pull/4366)
- Sidebar: 移除了内外边框 [\#4382](https://github.com/youzan/vant/pull/4382)
- SidebarItem 新增 disabled 属性 [\#4325](https://github.com/youzan/vant/pull/4325)
- TreeSelect: 新增 max 属性 [\#4323](https://github.com/youzan/vant/pull/4323)
- TreeSelect: 支持通过 info 展示徽标 [\#4384](https://github.com/youzan/vant/pull/4384)
- Uploader: 新增 close-preview 事件 [\#4376](https://github.com/youzan/vant/pull/4376)
- ImagePreview: 新增图片加载过程的提示 [\#4378](https://github.com/youzan/vant/pull/4378)

**Bug Fixes**

- 修复 Field 在 Safari 浏览器上样式异常的问题 [\#4380](https://github.com/youzan/vant/pull/4380)
- 修复 Button 在 color 属性中传入渐变色时边框颜色错误的问题 [\#4342](https://github.com/youzan/vant/pull/4342)
- 修复 Dialog 关闭时未重置按钮加载状态的问题 [\#4352](https://github.com/youzan/vant/pull/4352)
- 修复 Slider 初始值超出范围时展示错误的问题 [\#4337](https://github.com/youzan/vant/pull/4337)
- 修复 Sidebar 徽标位置错误的问题 [\#4324](https://github.com/youzan/vant/pull/4324)
- 修复 DropdownItem 选项选中态颜色丢失的问题 [\#4330](https://github.com/youzan/vant/pull/4330)
- 修复 NumberKeyboard 在 iphoneX 上右侧按钮位置错误的问题 [\#4304](https://github.com/youzan/vant/pull/4304)
- 修复 ImagePreview 在关闭后未重置图片缩放状态的问题 [\#4319](https://github.com/youzan/vant/pull/4319)
- 修复 ImagePreview 在某些情况下页码不正确的问题 [\#4320](https://github.com/youzan/vant/pull/4320)


### [v2.1.8](https://github.com/youzan/vant/tree/v2.1.8)
`2019-08-29`

**Features**

- Picker: 新增 allow-html 属性 [\#4278](https://github.com/youzan/vant/pull/4278)
- PasswordInput: 新增 focused 属性 [\#4279](https://github.com/youzan/vant/pull/4279)
- GoodsActionButton: 新增 color 属性 [\#4255](https://github.com/youzan/vant/pull/4255)
- Button: color 属性支持传入 linear-gradient 渐变色 [\#4252](https://github.com/youzan/vant/pull/4252)

**Bug Fixes**

- 修复 Circle stroke-width 超过 60 时样式错误的问题 [\#4256](https://github.com/youzan/vant/pull/4256)
- 修复 Picker 滑动暂停时位置错误的问题 [\#4277](https://github.com/youzan/vant/pull/4277)
- 修复 Picker 滑动结束时触发点击会跳动的问题 [\#4273](https://github.com/youzan/vant/pull/4273)


### [v2.1.7](https://github.com/youzan/vant/tree/v2.1.7)
`2019-08-26`

**Bug Fixes**

- 修复 RadioGroup 设置 disabled 属性后仍能切换的问题 [\#4242](https://github.com/youzan/vant/pull/4242)
- 修复 CheckboxGroup 设置 disabled 属性后仍能切换的问题 [\#4242](https://github.com/youzan/vant/pull/4242)


### [v2.1.6](https://github.com/youzan/vant/tree/v2.1.6)
`2019-08-26`

**Features**

- Tag: 新增 warning 类型 [\#4232](https://github.com/youzan/vant/pull/4232)
- Image: 新增 radius 属性 [\#4230](https://github.com/youzan/vant/pull/4230)
- Notify: 新增 type 属性 [\#4237](https://github.com/youzan/vant/pull/4237)
- CellGroup: 新增 title 插槽 [\#4227](https://github.com/youzan/vant/pull/4227)
- Sku: 支持动态设置 initial-sku 属性 [\#4214](https://github.com/youzan/vant/pull/4214)
- Sku: 支持预览更高层级的规格类目图片 [\#4236](https://github.com/youzan/vant/pull/4236)
- Locale: 支持西班牙语 [\#4235](https://github.com/youzan/vant/pull/4235)

**Bug Fixes**

- 修复 Tabbar 在 route 模式下选中样式错误的问题 [\#4229](https://github.com/youzan/vant/pull/4229)
- 修复 NumberKeyboard 使用 title 属性时按钮位置错误的问题 [\#4228](https://github.com/youzan/vant/pull/4228)
- 修复 IndexBar 在 sticky 模式下锚点位置可能超出元素边界的问题 [\#4218](https://github.com/youzan/vant/pull/4218)


### [v2.1.5](https://github.com/youzan/vant/tree/v2.1.5)
`2019-08-23`

**Features**

- Toast: 新增 closeOnClick 选项 [\#4192](https://github.com/youzan/vant/pull/4192)
- Uploader: 新增 image-fit 属性 [\#4189](https://github.com/youzan/vant/pull/4189)
- Uploader: 新增 click-preview 事件 [\#4206](https://github.com/youzan/vant/pull/4206)
- Uploader: 新增 preview-full-image 属性 [\#4205](https://github.com/youzan/vant/pull/4205)
- DropdownMenu: 新增 @dropdown-menu-title-active-text-color less 变量 [\#4208](https://github.com/youzan/vant/pull/4208)

**Bug Fixes**

- 修复 Area 无法选中部分海外地址的问题 [\#4195](https://github.com/youzan/vant/pull/4195)
- 修复 IndexBar 在局部滚动容器内计算错误的问题 [\#4184](https://github.com/youzan/vant/pull/4184)
- 修复 NumberKeyboard 按键边框颜色错误的问题 [\#4183](https://github.com/youzan/vant/pull/4183)


### [v2.1.4](https://github.com/youzan/vant/tree/v2.1.4)
`2019-08-21`

**Features**

- Col: 新增 click 事件 [\#4169](https://github.com/youzan/vant/pull/4169)
- Row: 新增 click 事件 [\#4170](https://github.com/youzan/vant/pull/4170)
- Area: 新增 is-oversea-code 属性 [\#4163](https://github.com/youzan/vant/pull/4163)
- Circle: 支持渐变色 [\#4157](https://github.com/youzan/vant/pull/4157)
- Circle: 支持传入 number 类型的 size 属性 [\#4160](https://github.com/youzan/vant/pull/4160)
- Tabbar: 支持通过 to.name 匹配路由 [\#4148](https://github.com/youzan/vant/pull/4148)
- Sku: 页面返回时自动关闭图片预览 [\#4152](https://github.com/youzan/vant/pull/4152)
- Uploader: 页面返回时自动关闭图片预览 [\#4151](https://github.com/youzan/vant/pull/4151)
- Uploader: 图片预览支持更多图片格式 [\#4140](https://github.com/youzan/vant/pull/4140)
- TreeSelect: 支持多选 [\#4130](https://github.com/youzan/vant/pull/4130)
- TreeSelect: 支持在 active-id 属性上使用 sync 修饰符 [\#4133](https://github.com/youzan/vant/pull/4133)
- TreeSelect: 支持在 main-active-index 属性上使用 sync 修饰符 [\#4132](https://github.com/youzan/vant/pull/4132)

**Bug Fixes**

- 修复 Sku 部分文案不支持国际化修改的问题 [\#4172](https://github.com/youzan/vant/pull/4172)
- 修复 Field 按钮在 Firefox 上宽度变小的问题 [\#4144](https://github.com/youzan/vant/pull/4144)
- 修复 Tabbar 触发 vue-router 路由重复跳转提示的问题 [\#4147](https://github.com/youzan/vant/pull/4147)
- 修复 Picker 样式可能被重复引入的 base 样式覆盖的问题 [\#4136](https://github.com/youzan/vant/pull/4136)


### [v2.1.3](https://github.com/youzan/vant/tree/v2.1.3)
`2019-08-15`

**Features**

- Sku: 支持国际化 [\#4123](https://github.com/youzan/vant/pull/4123)
- Button: 新增 color 属性 [\#4124](https://github.com/youzan/vant/pull/4124)
- Uploader: 新增 before-delete 属性 [\#4118](https://github.com/youzan/vant/pull/4118)
- Collapse: 新增 value 属性类型错误时的提示 [\#4122](https://github.com/youzan/vant/pull/4122)
- TreeSelect: 新增 content 插槽 [\#4105](https://github.com/youzan/vant/pull/4105)
- TreeSelect: 支持 string 类型的 height 属性 [\#4107](https://github.com/youzan/vant/pull/4107)
- NumberKeyboard: 优化点击体验 [\#4116](https://github.com/youzan/vant/pull/4116)

**Bug Fixes**

- 修复 DropdownMenu 嵌套在 NavBar 内时样式错误的问题 [\#4098](https://github.com/youzan/vant/pull/4098)
- 修复 Tab 动态插入标签页时下划线位置未更新的问题 [\#4091](https://github.com/youzan/vant/pull/4091)
- 修复 Icon service-o 图标不完整的问题 [\#4088](https://github.com/youzan/vant/pull/4088)
- 修复 Icon gift-o、refund-o 图标不完整的问题 [\#4089](https://github.com/youzan/vant/pull/4089)
- 修复 Slider 位置未改变时也会触发 change 事件的问题 [\#4087](https://github.com/youzan/vant/pull/4087)


### [v2.1.2](https://github.com/youzan/vant/tree/v2.1.2)
`2019-08-10`

**Features**

- ActionSheet: 新增 color 选项 [\#4073](https://github.com/youzan/vant/pull/4073)
- AddressEdit: 新增 postal-validator 属性 [\#4067](https://github.com/youzan/vant/pull/4067)
- Stepper: 新增 show-plus、show-minus 属性 [\#4056](https://github.com/youzan/vant/pull/4056)
- Icon: 新增 warning、good-job、good-job-o 图标 [\#4038](https://github.com/youzan/vant/pull/4038)
- Icon: 新增 smile、music、thumb-circle、phone-circle 图标 [\#4048](https://github.com/youzan/vant/pull/4048)
- Picker: 优化事件冒泡 [\#4043](https://github.com/youzan/vant/pull/4043)
- Field: 优化图标点击区域 [\#4058](https://github.com/youzan/vant/pull/4058)
- Divider: 优化无障碍访问 [\#4069](https://github.com/youzan/vant/pull/4069)
- List: 优化底部文字大小 [\#4077](https://github.com/youzan/vant/pull/4077)
- Image: img 标签继承圆角 [\#4032](https://github.com/youzan/vant/pull/4032)
- Uploader: 支持 isImage 标记 [\#4072](https://github.com/youzan/vant/pull/4072)
- DropdownMenu: 新增多个 Less 变量 [\#4071](https://github.com/youzan/vant/pull/4071)
- 支持在 module 类型的 script 标签中引入 CDN 包 [\#4080](https://github.com/youzan/vant/pull/4080)

**Bug Fixes**

- 修复 Sticky 在局部滚动容器内位置错误的问题 [\#4055](https://github.com/youzan/vant/pull/4055)


### [v2.1.1](https://github.com/youzan/vant/tree/v2.1.1)
`2019-08-02`

**Bug Fixes**

- 修复 DatetimePicker 事件无法触发的问题 [\#4027](https://github.com/youzan/vant/pull/4027)
- 修复 Popup 设置 z-index 顺序错误的问题 [\#4026](https://github.com/youzan/vant/pull/4026)


### [v2.1.0](https://github.com/youzan/vant/tree/v2.1.0)
`2019-08-01` 🇨🇳

**Features**

- Sku: UI 升级，采用更圆润的视觉风格 [\#3875](https://github.com/youzan/vant/pull/3875) [\#3922](https://github.com/youzan/vant/pull/3922)
- GoodsAction: UI 升级，采用更圆润的视觉风格 [\#3967](https://github.com/youzan/vant/pull/3967)
- Sku: 新增 price-tag 属性 [\#3875](https://github.com/youzan/vant/pull/3875)
- Sku: 新增 hide-selected-text 属性 [\#3875](https://github.com/youzan/vant/pull/3875)
- Sku: 新增 sku-header-origin-price 插槽 [\#3958](https://github.com/youzan/vant/pull/3958)
- Dialog: 新增 title 插槽 [\#3985](https://github.com/youzan/vant/pull/3985)
- Dialog: 优化垂直居中位置 [\#3905](https://github.com/youzan/vant/pull/3905)
- Uploader: 新增多个 less 变量 [\#3907](https://github.com/youzan/vant/pull/3907)
- ActionSheet: 新增多个 less 变量 [\#3908](https://github.com/youzan/vant/pull/3908)
- AddressList: 新增 click-item 事件 [\#3942](https://github.com/youzan/vant/pull/3942)
- CouponList: 新增 empty-image 属性 [\#3941](https://github.com/youzan/vant/pull/3941)
- ImagePreview: 新增 swipe-duration 属性 [\#3963](https://github.com/youzan/vant/pull/3963)
- SwipeCell: 新增 stop-propagation 属性 [\#3952](https://github.com/youzan/vant/pull/3952)

**Bug Fixes**

- 修复 Tabs 在特定情况下出现下划线位置错误的问题 [\#3961](https://github.com/youzan/vant/pull/3961)
- 修复 AddressList 点击空白区域时无法选中的问题 [\#3909](https://github.com/youzan/vant/pull/3909)
- 修复 IndexBar 在 index-list 变化时未更新高亮选项的问题 [\#3943](https://github.com/youzan/vant/pull/3943)
- 修复 ImagePreview 图片较长时遮挡索引的问题 [\#4002](https://github.com/youzan/vant/pull/4002)
- 修复 ImagePreview onClose 和 onChange 选项未被重置的问题 [\#3960](https://github.com/youzan/vant/pull/3960)
- 修复 Radio 和 Checkbox 点击中间空白区域时无法选中的问题 [\#4007](https://github.com/youzan/vant/pull/4007)
- 修复 SwipeCell 在打开的情况下阻止事件冒泡的问题 [\#3982](https://github.com/youzan/vant/pull/3982)
- 修复 Tabs 在 sticky 模式下滚动回到顶部时存在 1 像素偏差的问题 [\#3949](https://github.com/youzan/vant/pull/3949)
- 修复 DatetimePicker 使用 formatter 且为 time 类型时 confirm 事件参数错误的问题 [\#3969](https://github.com/youzan/vant/pull/3969)


### [v2.0.9](https://github.com/youzan/vant/tree/v2.0.9)
`2019-07-19`

**Features**

- 新增 Sticky 粘性布局组件 [\#3888](https://github.com/youzan/vant/pull/3888)
- Grid: 优化文字换行 [\#3897](https://github.com/youzan/vant/pull/3897)
- Toast: 优化图片图标展示 [\#3895](https://github.com/youzan/vant/pull/3895)
- Image: 新增 round 属性 [\#3838](https://github.com/youzan/vant/pull/3838)
- Image: 新增 show-error 属性 [\#3896](https://github.com/youzan/vant/pull/3896)
- Image: 新增 show-loading 属性 [\#3893](https://github.com/youzan/vant/pull/3893)
- Toast: 新增 iconPrefix 选项 [\#3872](https://github.com/youzan/vant/pull/3872)
- Uploader: 支持预览网络图片 [\#3899](https://github.com/youzan/vant/pull/3899)
- ActionSheet: 新增 round 属性 [\#3874](https://github.com/youzan/vant/pull/3874)
- TreeSelect: 新增 click-nav、click-item 事件 [\#3892](https://github.com/youzan/vant/pull/3892)

**Bug Fixes**

- 修复 SwipeCell 与 Swipe 嵌套时无法使用的问题 [\#3898](https://github.com/youzan/vant/pull/3898)
- 修复 Dialog closeOnPopstate 无法被禁用的问题 [\#3868](https://github.com/youzan/vant/pull/3868)
- 修复 DropdownMenu toggle 方法无法打开菜单的问题 [\#3876](https://github.com/youzan/vant/pull/3876)


### [v2.0.8](https://github.com/youzan/vant/tree/v2.0.8)
`2019-07-16`

**Features**

- Sku: 支持自定义留言占位文本 [\#3864](https://github.com/youzan/vant/pull/3864)
- DropdownMenu: 新增 icon 选项 [\#3855](https://github.com/youzan/vant/pull/3855)
- DropdownMenu: 标题过长时自动截断 [\#3847](https://github.com/youzan/vant/pull/3847)
- ImagePreview: 支持双击缩放手势 [\#3839](https://github.com/youzan/vant/pull/3839)

**Bug Fixes**

- 修复 Tab 点击事件参数丢失的问题 [\#3866](https://github.com/youzan/vant/pull/3866)
- 修复 List 在 body 标签添加滚动样式时异常的问题 [\#3844](https://github.com/youzan/vant/pull/3844)
- 修复 IndexBar 在某些情况下 active 锚点失效的问题 [\#3832](https://github.com/youzan/vant/pull/3832)


### [v2.0.7](https://github.com/youzan/vant/tree/v2.0.7)
`2019-07-11`

**Features**

- 新增 CountDown 倒计时组件 [\#3805](https://github.com/youzan/vant/pull/3805)
- Popup: 新增 round 属性 [\#3781](https://github.com/youzan/vant/pull/3781)
- IndexBar: 新增 sticky-offset-top 属性 [\#3791](https://github.com/youzan/vant/pull/3791)
- PullRefresh: 新增 distance 插槽参数 [\#3829](https://github.com/youzan/vant/pull/3829)
- Swipe: swipeTo 方法新增 immediate 参数 [\#3821](https://github.com/youzan/vant/pull/3821)
- Slider: bar-height 属性支持 number 类型 [\#3794](https://github.com/youzan/vant/pull/3794)
- DropdownMenu: 新增 close-on-click-outside 属性 [\#3824](https://github.com/youzan/vant/pull/3824)

**Bug Fixes**

- 修复 Popup 蒙层在某些情况下遮挡元素的问题 [\#3831](https://github.com/youzan/vant/pull/3831)
- 修复 Stepper 在 iOS 12 下滚动位置错误的问题 [\#3804](https://github.com/youzan/vant/pull/3804)
- 修复 Dialog closeOnPopstate 方法缺少类型定义的问题 [\#3789](https://github.com/youzan/vant/pull/3789)
- 修复 DatetimePicker 使用 filter 属性且为 time 类型时 confirm 事件参数错误的问题 [\#3816](https://github.com/youzan/vant/pull/3816)


### [v2.0.6](https://github.com/youzan/vant/tree/v2.0.6)
`2019-07-05`

**Features**

- 新增 Divider 分割线组件 [\#3755](https://github.com/youzan/vant/pull/3755)
- Tab: 新增 name 属性 [\#3762](https://github.com/youzan/vant/pull/3762)
- Sku: 新增 add-cart-text 属性 [\#3725](https://github.com/youzan/vant/pull/3725)

**Bug Fixes**

- 修复 Grid gutter 属性不能传入 String 类型的问题 [\#3741](https://github.com/youzan/vant/pull/3741)
- 修复 Swipe 使用 width 属性后出现空白区域的问题 [\#3751](https://github.com/youzan/vant/pull/3751)
- 修复 PullRefresh 同步修改 loading 时状态错误的问题 [\#3719](https://github.com/youzan/vant/pull/3719)
- 修复 Collapse 在 safari 浏览器上渲染内容较多时高度错误的问题 [\#3723](https://github.com/youzan/vant/pull/3723)


### [v2.0.5](https://github.com/youzan/vant/tree/v2.0.5)
`2019-07-02`

**Features**

- Stepper: 支持长按手势 [\#3711](https://github.com/youzan/vant/pull/3711)
- Stepper: 新增 button-size 属性 [\#3714](https://github.com/youzan/vant/pull/3714)
- Dialog: 新增 close-on-popstate 属性 [\#3709](https://github.com/youzan/vant/pull/3709)

**Bug Fixes**

- 修复 postcss 配置对 vant 不生效的问题


### [v2.0.4](https://github.com/youzan/vant/tree/v2.0.4) 🇨🇳
`2019-07-01`

**Features**

- 新增 Grid、GridItem 组件 [\#3669](https://github.com/youzan/vant/pull/3669) [\#3682](https://github.com/youzan/vant/pull/3682) [\#3683](https://github.com/youzan/vant/pull/3683)
- Field: 新增 arrow-direction 属性 [\#3679](https://github.com/youzan/vant/pull/3679)
- Sidebar: 新增 to、replace 属性 [\#3696](https://github.com/youzan/vant/pull/3696)
- Sidebar: 支持通过 v-model 绑定当前项索引 [\#3698](https://github.com/youzan/vant/pull/3698)
- IndexBar: 新增选中状态的类名，用于定制样式 [\#3692](https://github.com/youzan/vant/pull/3692)
- Uploader: 支持 Number 类型的 name 属性 [\#3681](https://github.com/youzan/vant/pull/3681)
- SwipeCell: 新增 name 属性 [\#3680](https://github.com/youzan/vant/pull/3680)
- AddressEdit: 新增 detail-maxlength 属性 [\#3707](https://github.com/youzan/vant/pull/3707)
- GoodsActionIcon: 新增 icon 插槽 [\#3705](https://github.com/youzan/vant/pull/3705)

**Bug Fixes**

- 修复 Collapse 在 safari 浏览器上动画可能闪烁的问题 [\#3686](https://github.com/youzan/vant/pull/3686)
- 修复 Picker 在低版本 Android 机器上的兼容性问题 [\#3688](https://github.com/youzan/vant/pull/3688)


### [v2.0.3](https://github.com/youzan/vant/tree/v2.0.3)
`2019-06-27`

**Features**

- ActionSheet: 新增 duration 属性 [\#3608](https://github.com/youzan/vant/pull/3608)
- ActionSheet: 新增 open、opened 事件 [\#3639](https://github.com/youzan/vant/pull/3639)
- ActionSheet: 新增 close、closed 事件 [\#3639](https://github.com/youzan/vant/pull/3639)
- ImagePreview: 新增 onChange 选项 [\#3630](https://github.com/youzan/vant/pull/3630)
- Popup: 优化蒙层动画时长 [\#3610](https://github.com/youzan/vant/pull/3610)
- Uploader: 支持点击查看大图 [\#3603](https://github.com/youzan/vant/pull/3603)
- Uploader: 支持预览非图片文件 [\#3604](https://github.com/youzan/vant/pull/3604)
- Stepper: 新增多个 Less 变量 [\#3599](https://github.com/youzan/vant/pull/3599)
- Icon: 更新 checked、comment、comment-o 图标 [\#3615](https://github.com/youzan/vant/pull/3615)

**Bug Fixes**

- 修复 Icon 传入图片时被拉伸的问题 [\#3667](https://github.com/youzan/vant/pull/3667)
- 修复 ImagePreview 滚动穿透问题 [\#3645](https://github.com/youzan/vant/pull/3645)
- 修复 Tab 使用 title slot 时可能报错的问题 [\#3631](https://github.com/youzan/vant/pull/3631)
- 修复 vetur 插件自动补全组件属性不生效的问题 [\#3617](https://github.com/youzan/vant/pull/3617)


### [v2.0.2](https://github.com/youzan/vant/tree/v2.0.2)
`2019-06-21`

**Features**

- Picker: 优化滚动速率 [\#3556](https://github.com/youzan/vant/pull/3556)
- Card: 新增 click-thumb 事件 [\#3586](https://github.com/youzan/vant/pull/3586)
- CouponList: 新增 enabled-title、disabled-title 属性 [\#3578](https://github.com/youzan/vant/pull/3578)
- Slider:  支持传入任意范围的 min、max 值 [\#3566](https://github.com/youzan/vant/pull/3566)
- Uploader: 支持 before-read 属性返回 Promise [\#3572](https://github.com/youzan/vant/pull/3572)
- NumberKeyboard: 支持 v-model 绑定输入值 [\#3531](https://github.com/youzan/vant/pull/3531)
- NumberKeyboard: 新增 maxlength 属性 [\#3532](https://github.com/youzan/vant/pull/3532)
- 新增 sideEffects 配置以支持 tree shaking [\#3530](https://github.com/youzan/vant/pull/3530)

**Bug Fixes**

- 修复 Sku 图片预览可能报错的问题 [\#3569](https://github.com/youzan/vant/pull/3569)
- 修复 Button 在 safari 浏览器上存在外边距的问题 [\#3577](https://github.com/youzan/vant/pull/3577)
- 修复 Toast clear 方法类型定义缺少参数的问题 [\#3542](https://github.com/youzan/vant/pull/3542)


### [v2.0.1](https://github.com/youzan/vant/tree/v2.0.1)
`2019-06-15`

**Features**

- Toast: 新增 icon 属性 [\#3485](https://github.com/youzan/vant/pull/3485)
- DropdownMenu: 新增 direction 属性 [\#3490](https://github.com/youzan/vant/pull/3490)
- NumberKeyboard: 新增 delete 属性 [\#3499](https://github.com/youzan/vant/pull/3499)
- Icon: 使用 Image 组件优化图片布局 [\#3515](https://github.com/youzan/vant/pull/3515)
- Tab: 支持 string 类型的 line-width 和 line-height [\#3514](https://github.com/youzan/vant/pull/3514)

**Bug Fixes**

- 修复 Image 组件 TS 定义缺失的问题 [\#3520](https://github.com/youzan/vant/pull/3520)
- 修复 SwitchCell 加载图标偏移的问题 [\#3501](https://github.com/youzan/vant/pull/3501)
- 修复 Locale 函数类型文案无法修改的问题 [\#3498](https://github.com/youzan/vant/pull/3498)
- 修复 Toast 在 multiple 模式下没有淡出动画的问题 [\#3504](https://github.com/youzan/vant/pull/3504)


### [v2.0.0](https://github.com/youzan/vant/tree/v2.0.0)
`2019-06-12`

#### 主要变动

- 增加四个新组件
- 增加数十个 API
- 优化无障碍访问
- 全新的卡片风格文档，支持文档搜索
- 所有组件支持通过`less`变量自定义样式
- 调整了部分不合理的命名，废弃少量 API

#### 新组件

在 2.0 版本中，我们引入了社区中呼声最高的四个组件，分别是：

- <b>Image 图片</b>，类似于小程序原生的 Image 标签，支持多种图片裁剪模式
- <b>IndexBar 索引栏</b>，通讯录中的字母索引栏，用于长列表快速索引
- <b>Skeleton 骨架屏</b>，在待加载区域展示的占位区块，提供界面加载过程中的过渡效果
- <b>DropdownMenu 下拉菜单</b>，用于列表的分类选择、筛选及排序

![](https://img.yzcdn.cn/public_files/2019/06/10/141ac9b67c06be0811c86c4c1c571c9d.png)

#### 新文档

文档方面，我们重新设计了文档站点，用<b>卡片</b>的方式组织段落，更加直观。对一些较为复杂的组件，我们对示例进行细粒度的拆分，添加更多的用法介绍，以帮助大家更快地上手使用。

此外，文档站点也支持了<b>搜索</b>和<b>版本切换</b>。

![](https://img.yzcdn.cn/public_files/2019/06/10/63b666fa52493402c87db6146a715341.png)

#### 样式定制

移动端 UI 风格多变，对组件的可定制性要求较高。从 2.0 版本开始，Vant 中的所有组件都支持通过 <b>Less 变量</b>进行样式定制。同时我们新增了较多样式相关的 Props，便于快速定制组件风格。

![](https://img.yzcdn.cn/public_files/2019/06/11/9a066c1a212264c7ae56065e1f13d317.png)

#### 更轻量

轻量化是 Vant 的核心开发理念之一。在过去一年多时间里，我们新增了若干个组件和数百项功能，而<b>代码包体积从 1.0 版本的 169kb 降低到了 2.0 版本的 161kb</b>（45kb gzipped），平均每个组件体积下降 13%，这主要得益于组件内部逻辑的重构和复用。

在未来的 Vue 3.0 版本中，会提供 Function-based API 这一更优的逻辑复用方式，预计能帮助 Vant 进一步优化代码包体积。

#### 不兼容更新

2.0 版本中包含少量不兼容更新，主要是调整命名和移除个别属性。对于正在使用 1.x 版本的项目，请按照下方的列表依次检查，大部分项目可以<b>无痛升级</b>。

##### Actionsheet

- 重命名为`ActionSheet`

##### Button

- 移除`bottom-action`属性，请使用`square`和`size`代替

##### Field

- 移除`on-icon-click`属性，请使用`click-right-icon`事件代替
- `icon`属性重命名为`right-icon`
- `icon`插槽重命名为`right-icon`
- `click-icon`事件重命名为`click-right-icon`

##### GoodsAction

- `GoodsActionBigBtn`重命名为`GoodsActionButton`
- `GoodsActionMiniBtn`重命名为`GoodsActionIcon`
- `GoodsActionBigBtn`移除`primary`属性，请使用`type`属性代替

##### Step

- 移除`icon`属性
- 移除`title`属性
- 移除`icon-class`属性
- 移除`description`属性
- 移除`message-extra`插槽

##### Badge

- `BadgeGroup`重命名为`Sidebar`
- `Badge`重命名为`SlidebarItem`

##### Loading

- 移除`circle`类型
- 移除`gradient-circle`类型

##### Checkbox

- 调整为`flex`布局，可能对原有布局产生影响

##### Radio

- 调整为`flex`布局，可能对原有布局产生影响

##### Waterfall

- 移除在 1.0 版本废弃的 Waterfall 组件，请使用`List`组件代替，或使用独立的[@vant/waterfall](https://github.com/youzan/vant/tree/dev/packages/vant-waterfall)包。

---

#### 无障碍访问

对以下组件增加了无障碍访问的支持：

- Accordion
- Checkbox
- Dialog
- DropdownMenu
- GoodsAction
- List
- NoticeBar
- NumberKeyboard
- Radio
- Rate
- Stepper
- Tab
- Slider
- Switch

#### 新特性

##### ActionSheet

- 新增`lock-scroll`属性
- 新增`click-overlay`事件
- 新增`close-on-click-action`属性
- 支持同时使用`title`和`actions`属性

##### Area

- 支持`reset`方法传入`code`参数

##### Button

- 新增`icon`属性
- 新增`loading-type`属性

##### Checkbox

- 新增`icon-size`属性

##### DatetimePicker

- 新增`filter`属性

##### Field

- 新增`input`插槽
- 新增`click`事件
- 新增`clickable`属性
- 新增`label-class`属性
- 优化输入体验，输入法拼写过程中不再会触发`v-model`更新

##### GoodsActionButton

- 新增`type`属性

##### Icon

- 支持`Number`类型的`size`属性

##### ImagePreview

- 新增`close-on-popstate`属性

##### List

- 优化滚动判断逻辑

##### Loading

- 新增`default`插槽
- 新增`vertical`属性
- 新增`text-size`属性
- 支持`Number`类型的`size`属性

##### Notify

- 新增`onClick`选项
- 新增`onClose`选项
- 新增`onOpened`选项

##### NoticeBar

- 新增`left-icon`插槽
- 新增`right-icon`插槽

##### PasswordInput

- 新增`gutter`属性

##### Picker

- 支持惯性滚动
- 新增`toolbar-position`属性

##### Popup

- 新增`click`事件
- 新增`duration`属性

##### Radio

- 新增`icon-size`属性

##### Rate

- 新增`gutter`属性
- 支持`String`类型的`size`属性

##### Search

- 新增`clearable`属性
- 新增`left-icon`属性
- 新增`right-icon`属性
- 新增`right-icon`插槽
- 优化输入体验，输入法拼写过程中不再会触发`v-model`更新

##### Slider

- 新增`drag-start`事件
- 新增`drag-end`事件

##### Steps

- 新增`inactive-icon`属性
- 新增`inactive-icon`插槽

##### Stepper

- 支持`Number`类型的`input-width`属性

##### SubmitBar

- 新增`tip-icon`属性
- 新增`suffix-label`属性

##### SwipeCell

- 支持自动计算`left-width`和`right-width`

##### Switch

- 加载图标颜色现在会跟随背景色变化

##### SwitchCell

- 新增`border`属性
- 新增`cell-size`属性

##### Sku

- 新增`preview-open`事件
- 新增`preview-close`事件

##### Tab

- 新增`border`属性
- 优化`animated`动画性能
- 修复开启`animated`后高度错误的问题

##### Tabbar

- 新增`route`属性
- 新增`border`属性
- 新增`inactive-color`属性

##### TabbarItem

- 新增`name`属性

##### Toast

- 新增`onOpened`选项

##### Uploader

- 新增上传区域默认样式
- 新增`delete`事件
- 新增`upload-text`属性
- 新增`max-count`属性
- 新增`preview-size`属性
- 新增`preview-image`属性
- 支持通过`v-model`绑定文件列表
- `oversize`事件增加`detail`参数

---

#### 后续计划

我们计划在今年下半年推出 <b>VantWeapp 1.0 版本</b>，目标是对标 Vant 2.0 版本，将大部分新组件和新功能同步到小程序端。

同时，Vant 3.0 版本也在酝酿当中，不出意外的话，<b>3.0 版本会基于 Vue 3.0 实现，并争取和 Vue 3.0 同期发布</b>。

对于 Vant 1.x 版本，后续会进入维护期，跟进问题修复，但不再引入功能性改动。

![](https://img.yzcdn.cn/public_files/2019/06/11/4e7202acbfc399622e428eb1485e1591.png)
