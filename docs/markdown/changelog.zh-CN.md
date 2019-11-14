# 更新日志

### 介绍

Vant 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

**发布节奏**

- 修订号：每周发布，包含新特性和问题修复。
- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：发布时间不定，包含不兼容更新，预计下一个主版本会与 Vue 3.0 同期发布。

### [v2.2.13](https://github.com/youzan/vant/tree/v2.2.13)
`2019-11-14`

**Features**

- Area: 新增 swipe-duration 属性 [\#5014](https://github.com/youzan/vant/pull/5014)
- Swipe: 新增 stop-propagation 属性 [\#4972](https://github.com/youzan/vant/pull/4972)
- Toast: 新增 overlay 选项 [\#4969](https://github.com/youzan/vant/pull/4969)
- Toast: 新增 clickOnClickOverlay 选项 [\#4967](https://github.com/youzan/vant/pull/4967)
- SwipeCell: 新增 opened 事件 [\#4986](https://github.com/youzan/vant/pull/4986)
- ActionSheet: 新增 close-icon 属性 [\#5016](https://github.com/youzan/vant/pull/5016)
- DropdownItem: 新增 title 插槽 [\#4975](https://github.com/youzan/vant/pull/4975)
- DatetimePicker: 新增 swipe-duration 属性 [\#5015](https://github.com/youzan/vant/pull/5015)

**Bug Fixes**

- 修复 Tab name 设置为 0 时无法正确匹配的问题 [\#5017](https://github.com/youzan/vant/pull/5017)
- 修复 Indexbar 隐藏时可能出现锚点位置错误的问题 [\#5012](https://github.com/youzan/vant/pull/5012)
- 修复 Indexbar 设置 sticky-offset-top 后可能出现锚点位置错误的问题 [\#5012](https://github.com/youzan/vant/pull/5012)
- 修复 DatetimePicker 使用 filter 并返回空数组时无法切换时间的问题 [\#4973](https://github.com/youzan/vant/pull/4973)
- 修复 DateTimePicker 动态设置 max-hour 并小于 v-model 绑定的时间时出现错误的问题 [\#5006](https://github.com/youzan/vant/pull/5006)
- 修复 ImagePreview 类型中定义缺少 swipeDuration 选项的问题 [\#4968](https://github.com/youzan/vant/pull/4968)


### [v2.2.12](https://github.com/youzan/vant/tree/v2.2.12)
`2019-11-07`

**Features**

- Stepper: 新增 name 属性 [\#4931](https://github.com/youzan/vant/pull/4931)
- Uploader: 新增 deletable 属性 [\#4925](https://github.com/youzan/vant/pull/4925)

**Bug Fixes**

- 修复 Sku 内容最小高度错误的问题 [\#4942](https://github.com/youzan/vant/pull/4942)
- 修复 List 在初始化时可能同时触发两次 load 事件的问题 [\#4953](https://github.com/youzan/vant/pull/4953)
- 修复 @border-color 变量无法定制某些组件边框颜色的问题 [\#4939](https://github.com/youzan/vant/pull/4939)


### [v2.2.11](https://github.com/youzan/vant/tree/v2.2.11)
`2019-11-04`

**Features**

- Switch: 新增 click 事件 [\#4915](https://github.com/youzan/vant/pull/4915)
- Switch: size 属性支持 number 类型 [\#4913](https://github.com/youzan/vant/pull/4913)
- Toast: 默认持续时间由 3 秒调整为 2 秒 [\#4886](https://github.com/youzan/vant/pull/4886)
- Uploader: 新增 closeImagePreview 方法 [\#4901](https://github.com/youzan/vant/pull/4901)

**Bug Fixes**

- 修复 Button 加载图标颜色不正确的问题 [\#4868](https://github.com/youzan/vant/pull/4868)
- 修复 CountDown 在销毁时未清除定时器的问题 [\#4918](https://github.com/youzan/vant/pull/4918)
- 修复 CountDown 在 keep-alive 状态下未暂停定时器的问题 [\#4919](https://github.com/youzan/vant/pull/4919)
- 修复 Grid 使用 icon 插槽时 info、dot 属性不生效的问题 [\#4902](https://github.com/youzan/vant/pull/4902)


### [v2.2.10](https://github.com/youzan/vant/tree/v2.2.10)
`2019-10-27`

**Features**

- Icon: 新增 font-display: auto 样式 [\#4831](https://github.com/youzan/vant/pull/4831)
- Popup: 新增 close-on-popstate 属性 [\#4845](https://github.com/youzan/vant/pull/4845)
- Picker: 新增 swipe-duration 属性 [\#4816](https://github.com/youzan/vant/pull/4816)
- Toast: 支持针对指定类型的 Toast 修改默认配置 [\#4848](https://github.com/youzan/vant/pull/4848)

**Bug Fixes**

- 修复 Uploader 文件预览圆角样式错误的问题 [\#4846](https://github.com/youzan/vant/pull/4846)
- 修复 DatetimePicker 同时使用 min-date 和 filter 时初始值错误的问题 [\#4837](https://github.com/youzan/vant/pull/4837)


### [v2.2.9](https://github.com/youzan/vant/tree/v2.2.9)
`2019-10-20`

**Features**

- Tag: 新增 closeable 属性 [\#4763](https://github.com/youzan/vant/pull/4763)
- Loading: 新增若干个 Less 变量 [\#4781](https://github.com/youzan/vant/pull/4781)
- Progress: 新增若干个 Less 变量 [\#4790](https://github.com/youzan/vant/pull/4790)
- Progress: 新增 track-color 属性 [\#4789](https://github.com/youzan/vant/pull/4789)
- Toast: 新增 @toast-loading-icon-color 变量 [\#4782](https://github.com/youzan/vant/pull/4782)
- Picker: 新增 @picker-loading-icon-color 变量 [\#4787](https://github.com/youzan/vant/pull/4787)
- ImagePreview: 新增 cover 插槽 [\#4766](https://github.com/youzan/vant/pull/4766)

**Bug Fixes**

- 修复 Tag 圆角不够圆的问题 [\#4762](https://github.com/youzan/vant/pull/4762)
- 修复 Sku 重置时不触发 sku-selected 事件的问题 [\#4755](https://github.com/youzan/vant/pull/4755)
- 修复 ImagePreview 点击索引时会关闭预览的问题 [\#4764](https://github.com/youzan/vant/pull/4764)
- 修复 AddressEdit 设置 area-placeholder 后无法选择海外地址的问题 [\#4769](https://github.com/youzan/vant/pull/4769)


### [v2.2.8](https://github.com/youzan/vant/tree/v2.2.8)
`2019-10-17`

**Features**

- Slider: 优化点击区域 [\#4701](https://github.com/youzan/vant/pull/4701)
- Slider: 增加过渡动画 [\#4700](https://github.com/youzan/vant/pull/4700)
- Dialog: 更新圆角样式 [\#4730](https://github.com/youzan/vant/pull/4730)
- Uploader: 更新删除图标样式，添加图片圆角样式 [\#4712](https://github.com/youzan/vant/pull/4712)
- Field: 新增 show-word-limit 属性 [\#4721](https://github.com/youzan/vant/pull/4721)
- ActionSheet: 新增 description 属性 [\#4691](https://github.com/youzan/vant/pull/4691)
- Stepper: 设置 decimal-length 属性后会在输入过程中进行校验 [\#4747](https://github.com/youzan/vant/pull/4747)
- 新增渐变色相关的 Less 变量 [\#4752](https://github.com/youzan/vant/pull/4752)
- 新增多行文字省略的内置样式 [\#4690](https://github.com/youzan/vant/pull/4690)

**Bug Fixes**

- 修复 Slider 宽度异常的问题 [\#4699](https://github.com/youzan/vant/pull/4699)
- 修复 Rate 由于 inline-block 导致的错误高度 [\#4693](https://github.com/youzan/vant/pull/4693)
- 修复 AddressEdit 省市区未选择完全时能够保存的问题 [\#4724](https://github.com/youzan/vant/pull/4724)


### [v2.2.7](https://github.com/youzan/vant/tree/v2.2.7)
`2019-10-11`

**Features**

- Dialog: 新增 width 属性 [\#4687](https://github.com/youzan/vant/pull/4687)
- Dialog: 新增 overlay-class 属性 [\#4683](https://github.com/youzan/vant/pull/4683)
- Dialog: 新增 overlay-style 属性 [\#4682](https://github.com/youzan/vant/pull/4682)
- Uploader: 新增 file 类型的 result-type [\#4680](https://github.com/youzan/vant/pull/4680)
- TreeSelect: 新增 className 选项 [\#4671](https://github.com/youzan/vant/pull/4671)

**Bug Fixes**

- 修复 Dialog 可能出现文字模糊的问题 [\#4686](https://github.com/youzan/vant/pull/4686)
- 修复 Stepper 的 step 值很小时无法生效的问题 [\#4675](https://github.com/youzan/vant/pull/4675)
- 修复 DatetimePicker 动态修改时间范围时, confirm 事件无法获取到正确结果的问题 [\#4676](https://github.com/youzan/vant/pull/4676)
- 修复 Field 同时设置 error 和 disabled 属性时文字颜色错误的问题 [\#4666](https://github.com/youzan/vant/pull/4666)


### [v2.2.6](https://github.com/youzan/vant/tree/v2.2.6)
`2019-10-08`

**Features**

- Grid: 新增 icon-size 属性 [\#4656](https://github.com/youzan/vant/pull/4656)
- Toast: 新增 transition 属性 [\#4638](https://github.com/youzan/vant/pull/4638)
- Dialog: 新增 transition 属性 [\#4636](https://github.com/youzan/vant/pull/4636)
- Dialog: 新增 open、close 事件 [\#4633](https://github.com/youzan/vant/pull/4633)
- Dialog: 新增 opened、closed 事件 [\#4634](https://github.com/youzan/vant/pull/4634)
- NumberKeyboard: 新增 extra-key 插槽 [\#4644](https://github.com/youzan/vant/pull/4644)
- CheckboxGroup: 新增 toggleAll 方法 [\#4640](https://github.com/youzan/vant/pull/4640)

**Bug Fixes**

- 修复 GoodsAction 圆角错误的问题 [\#4653](https://github.com/youzan/vant/pull/4653)
- 修复 Tabs 类型为 card 时上边距错误的问题 [\#4658](https://github.com/youzan/vant/pull/4658)
- 修复 AddressList input 事件重复触发的问题 [\#4659](https://github.com/youzan/vant/pull/4659)
- 修复 NumberKeyboard 在 Vue 2.6 下的兼容问题 [\#4632](https://github.com/youzan/vant/pull/4632)


### [v2.2.5](https://github.com/youzan/vant/tree/v2.2.5)
`2019-09-28`

**Features**

- Picker: 新增 columns-top 插槽 [\#4607](https://github.com/youzan/vant/pull/4607)
- Picker: 新增 columns-bottom 插槽 [\#4607](https://github.com/youzan/vant/pull/4607)
- Overlay: 新增 default 插槽 [\#4571](https://github.com/youzan/vant/pull/4571)
- Overlay: 新增 custom-style 属性 [\#4572](https://github.com/youzan/vant/pull/4572)
- Checkbox: 新增 bind-group 属性 [\#4600](https://github.com/youzan/vant/pull/4600)
- DropdownItem: 新增 get-container 属性 [\#4611](https://github.com/youzan/vant/pull/4611)
- Area: 新增 columns-placeholder 属性 [\#4580](https://github.com/youzan/vant/pull/4580)
- AddressEdit: 新增 area-columns-placeholder 属性 [\#4584](https://github.com/youzan/vant/pull/4584)

**Bug Fixes**

- 修复 Overlay 未添加 TypeScript 定义的问题 [\#4601](https://github.com/youzan/vant/pull/4601)
- 修复 Swipe swipeTo 方法在某些边界情况下过渡动画不正确的问题 [\#4570](https://github.com/youzan/vant/pull/4570)
- 修复 Uploader 预览 URL 相同的图片时索引错误的问题 [\#4577](https://github.com/youzan/vant/pull/4577)


### [v2.2.4](https://github.com/youzan/vant/tree/v2.2.4) [已废弃]
`2019-09-28` 🇨🇳

**Tips**

- 本版本存在样式丢失问题，请使用 2.2.5 版本


### [v2.2.3](https://github.com/youzan/vant/tree/v2.2.3)
`2019-09-24`

**Features**

- Cell: 优化无障碍访问 [\#4519](https://github.com/youzan/vant/pull/4519)
- Popup: 优化无障碍访问 [\#4516](https://github.com/youzan/vant/pull/4516)
- Search: 优化无障碍访问 [\#4522](https://github.com/youzan/vant/pull/4522)
- Picker: 优化无障碍访问 [\#4521](https://github.com/youzan/vant/pull/4521)
- GridItem: 优化无障碍访问 [\#4517](https://github.com/youzan/vant/pull/4517)
- ActionSheet: 优化无障碍访问 [\#4525](https://github.com/youzan/vant/pull/4525)
- Sku: 新增 previewImgUrl 字段 [\#4562](https://github.com/youzan/vant/pull/4562)
- RadioGroup: 新增 icon-size 属性 [\#4529](https://github.com/youzan/vant/pull/4529)
- RadioGroup: 新增 checked-color 属性 [\#4532](https://github.com/youzan/vant/pull/4532)
- CheckboxGroup: 新增 icon-size 属性 [\#4530](https://github.com/youzan/vant/pull/4530)
- CheckboxGroup: 新增 checked-color 属性 [\#4531](https://github.com/youzan/vant/pull/4531)
- ActionSheet: 默认开启 round 属性 [\#4542](https://github.com/youzan/vant/pull/4542)
- ActionSheet: 默认开启 safe-area-inset-bottom 属性 [\#4524](https://github.com/youzan/vant/pull/4524)
- NumberKeyboard: 默认开启 safe-area-inset-bottom 属性 [\#4544](https://github.com/youzan/vant/pull/4544)


### [v2.2.2](https://github.com/youzan/vant/tree/v2.2.2)
`2019-09-19`

**Features**

- Dialog: 优化文字换行 [\#4506](https://github.com/youzan/vant/pull/4506)
- Search: 新增 action-text 属性 [\#4501](https://github.com/youzan/vant/pull/4501)
- Popup: 新增 close-icon-position 属性 [\#4507](https://github.com/youzan/vant/pull/4507)
- Uploader: 回调函数增加 index 参数 [\#4460](https://github.com/youzan/vant/pull/4460)
- GoodsActionButton: 加大按钮高度 [\#4461](https://github.com/youzan/vant/pull/4461)
- AddressList: 新增 @address-list-item-radio-icon-color 变量 [\#4481](https://github.com/youzan/vant/pull/4481)

**Bug Fixes**

- 修复 Field 禁用状态在 safari 上文字颜色过浅的问题 [\#4508](https://github.com/youzan/vant/pull/4508)
- 修复 DatetimePicker 选项为纯文字时陷入死循环的问题 [\#4485](https://github.com/youzan/vant/pull/4485)
- 修复 ImagePreview 手势缩放时可能出现缩放比例异常的问题 [\#4477](https://github.com/youzan/vant/pull/4477)


### [v2.2.1](https://github.com/youzan/vant/tree/v2.2.1)
`2019-09-12`

**Features**

- Icon: 新增 dot 属性 [\#4425](https://github.com/youzan/vant/pull/4425)
- Icon: 新增 down、wap-home 图标 [\#4404](https://github.com/youzan/vant/pull/4404)
- GridItem: 新增 dot 属性 [\#4426](https://github.com/youzan/vant/pull/4426)
- GridItem: 新增 info 属性 [\#4424](https://github.com/youzan/vant/pull/4424)
- TreeSelect: 新增 dot 选项 [\#4433](https://github.com/youzan/vant/pull/4433)
- Tab: 新增 to、url、replace 属性 [\#4422](https://github.com/youzan/vant/pull/4422)
- Progress: 新增 stroke-width 属性 [\#4397](https://github.com/youzan/vant/pull/4397)
- Popup: 新增 safe-area-inset-bottom 属性 [\#4419](https://github.com/youzan/vant/pull/4419)
- Stepper: 新增 decimal-length 属性 [\#4443](https://github.com/youzan/vant/pull/4443)
- Sku: 新增 stock-threshold 属性 [\#4444](https://github.com/youzan/vant/pull/4444)
- Sku: 新增 safe-area-inset-bottom 属性 [\#4428](https://github.com/youzan/vant/pull/4428)
- SidebarItem: 新增 dot 属性 [\#4432](https://github.com/youzan/vant/pull/4432)
- Sku: 优化样式细节 [\#4437](https://github.com/youzan/vant/pull/4437)
- Circle: 优化文本样式 [\#4401](https://github.com/youzan/vant/pull/4401)

**Bug Fixes**

- 修复 Sku 按钮位置可能错误的问题 [\#4427](https://github.com/youzan/vant/pull/4427)
- 修复 Uploader 删除时会触发 click-preview 事件的问题 [\#4407](https://github.com/youzan/vant/pull/4407)
- 修复 Progress 文字位置不准确的问题 [\#4396](https://github.com/youzan/vant/pull/4396)


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
