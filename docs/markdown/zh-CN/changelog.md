## 更新日志

### [0.11.2](https://github.com/youzan/vant/tree/v0.11.2)
`2017-11-24`

**Improvements**
- Icon: 增加 7 个新图标 [\#351](https://github.com/youzan/vant/pull/351) [@w91](https://github.com/w91)

### [0.11.1](https://github.com/youzan/vant/tree/v0.11.1)
`2017-11-24`

**Improvements**
- Actionsheet: 更新关闭按钮样式 [\#340](https://github.com/youzan/vant/pull/340) [@chenjiahan](https://github.com/chenjiahan)
- Popup: 新增 overlayClass、overlayStyle 属性 [\#349](https://github.com/youzan/vant/pull/349) [\#343](https://github.com/youzan/vant/pull/343) [@mickeyinfoshan](https://github.com/mickeyinfoshan) [@chenjiahan](https://github.com/chenjiahan)
- Icon: 调整 unicode，避免展示特殊字符 [\#330](https://github.com/youzan/vant/pull/330) [@chenjiahan](https://github.com/chenjiahan)
- ImagePreview: 支持手动关闭 [\#346](https://github.com/youzan/vant/pull/346) [@chenjiahan](https://github.com/chenjiahan)
- Tabbar: 支持通过 slot-scope 判断 active 状态 [\#347](https://github.com/youzan/vant/pull/347) [@chuangbo](https://github.com/chuangbo)
- SubmitBar: 新增左侧内容 slot [\#345](https://github.com/youzan/vant/pull/345) [@chenjiahan](https://github.com/chenjiahan)
- 优化组件 staticClass 渲染效率 [\#337](https://github.com/youzan/vant/pull/337) [@chenjiahan](https://github.com/chenjiahan)
- 优化文字截取相关样式 [\#334](https://github.com/youzan/vant/pull/334) [@chenjiahan](https://github.com/chenjiahan)
- 优化按钮 css layer 及 GPU 开销 [\#336](https://github.com/youzan/vant/pull/336) [@deepkolos](https://github.com/deepkolos)

**Bug Fixes**
- 修复 SSR 过程中报错的问题 [\#344](https://github.com/youzan/vant/pull/344) [@chenjiahan](https://github.com/chenjiahan)
- 修复 DateTimePicker 接受非法参数时卡死的问题 [\#333](https://github.com/youzan/vant/pull/333) [@chenjiahan](https://github.com/chenjiahan)

### [0.11.0](https://github.com/youzan/vant/tree/v0.11.0)
`2017-11-17`

**Breaking changes**
- 组件支持国际化 [\#310](https://github.com/youzan/vant/pull/310) [@chenjiahan](https://github.com/chenjiahan)
- 移除部分无用的 props 及有效性检测 [\#323](https://github.com/youzan/vant/pull/323) [@chenjiahan](https://github.com/chenjiahan)

**Improvements**
- 新增 Pagination 组件 [\#327](https://github.com/youzan/vant/pull/327) [\#328](https://github.com/youzan/vant/pull/328) [@zgrong](https://github.com/zgrong) [@chenjiahan](https://github.com/chenjiahan)
- 新增 Locale 组件 [\#310](https://github.com/youzan/vant/pull/310) [@chenjiahan](https://github.com/chenjiahan)
- 新增国际化文档 [\#321](https://github.com/youzan/vant/pull/321) [@chenjiahan](https://github.com/chenjiahan)
- Icon: add-o 图标更正为圆角 [\#326](https://github.com/youzan/vant/pull/326) [@cookfront](https://github.com/cookfront)

### [0.10.9](https://github.com/youzan/vant/tree/v0.10.9) 
`2017-11-15`

**Improvements**
- Icon: 增加几个新 icons [\#315](https://github.com/youzan/vant/pull/315) [@cookfront](https://github.com/cookfront)

**Bug Fixes**
- Search: 修复 box-sizing 错误 [\#312](https://github.com/youzan/vant/pull/312) [@chenjiahan](https://github.com/chenjiahan)

### [0.10.8](https://github.com/youzan/vant/tree/v0.10.8)
`2017-11-11`

**Improvements**
- Tabbar: 支持 vue-router [\#305](https://github.com/youzan/vant/pull/305) [@chenjiahan](https://github.com/chenjiahan)
- Stepper: 新增 plus & minus 事件 [\#294](https://github.com/youzan/vant/pull/294) [@chenjiahan](https://github.com/chenjiahan)
- Progress: 新增 showPivot 属性 [\#300](https://github.com/youzan/vant/pull/300) [@chenjiahan](https://github.com/chenjiahan)
- Loading: 新增 spinner 类型 [\#297](https://github.com/youzan/vant/pull/297) [@chenjiahan](https://github.com/chenjiahan)
- Toast: 新增 mask 选项 [\#296](https://github.com/youzan/vant/pull/296) [@chenjiahan](https://github.com/chenjiahan)
- 新增 Tab 英文文档 [\#308](https://github.com/youzan/vant/pull/308) [@cookfront](https://github.com/cookfront)
- 新增 Toast 英文文档 [\#307](https://github.com/youzan/vant/pull/307) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- 修复 npm run dist 在 windows 下报错的问题 [\#301](https://github.com/youzan/vant/pull/301) [@zlkiarest](https://github.com/lkiarest)

### [0.10.7](https://github.com/youzan/vant/tree/v0.10.7)
`2017-11-08`

**Improvements**
- 修正了所有图标尺寸，保持大小统一 [\#292](https://github.com/youzan/vant/pull/292) [@chenjiahan](https://github.com/chenjiahan)
- ImagePreview 支持自定义初始位置 [\#286](https://github.com/youzan/vant/pull/286) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- 修复 Sku 滚动锁定问题 [\#291](https://github.com/youzan/vant/pull/291) [@w91](https://github.com/w91)
- 修复 Steps 超过四项时样式错误 [\#287](https://github.com/youzan/vant/pull/287) [@chenjiahan](https://github.com/chenjiahan)

### [0.10.6](https://github.com/youzan/vant/tree/v0.10.6)
`2017-11-06`

**Improvements**
- 新增 Swipe initialSwipe 属性 [\#279](https://github.com/youzan/vant/pull/279) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- 修复 Dialog 按钮文字未重置的问题 [\#278](https://github.com/youzan/vant/pull/278) [@chenjiahan](https://github.com/chenjiahan)
- 修复 Tab 动态生成问题 [\#284](https://github.com/youzan/vant/pull/284) [@cookfront](https://github.com/cookfront)
- 修复 NoticeBar 在页面返回时文字消失的问题 [\#280](https://github.com/youzan/vant/pull/280) [@chenjiahan](https://github.com/chenjiahan)

### [0.10.5](https://github.com/youzan/vant/tree/v0.10.5)
`2017-10-30`

**Improvements**
- Cell 支持 vue-router 路由跳转 [\#268](https://github.com/youzan/vant/pull/268) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- 修复 Tabbar 使用 icon slot 时 info prop 失效的问题 [\#269](https://github.com/youzan/vant/pull/269) [@chenjiahan](https://github.com/chenjiahan)
- 修复 Uploader input 类型错误 [\#265](https://github.com/youzan/vant/pull/265) [@chenjiahan](https://github.com/chenjiahan)

### [0.10.4](https://github.com/youzan/vant/tree/v0.10.4)
`2017-10-26`

**Improvements**
- 新增多个图标 [\#253](https://github.com/youzan/vant/pull/253) [@pangxie1991](https://github.com/pangxie1991)
- 新增定制主题文档 [\#251](https://github.com/youzan/vant/pull/251) [@chenjiahan](https://github.com/chenjiahan)
- 新增多个组件的按钮点击态提示 [\#248](https://github.com/youzan/vant/pull/248) [@chenjiahan](https://github.com/chenjiahan)
- NoticeBar：增加多个 props [\#254](https://github.com/youzan/vant/pull/254) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- 修复 Swipe 在某些情况下宽度计算错误的问题 [\#258](https://github.com/youzan/vant/pull/258) [@chenjiahan](https://github.com/chenjiahan)
- 修复 PullRefreash 父元素可滚动时无法正常运行的问题 [\#247](https://github.com/youzan/vant/pull/247) [@GeoffZhu](https://github.com/GeoffZhu)
- 修复 CouponList 空列表样式一直存在的问题 [\#246](https://github.com/youzan/vant/pull/246) [@chenjiahan](https://github.com/chenjiahan)


### [0.10.3](https://github.com/youzan/vant/tree/v0.10.3)
`2017-10-25`

**Improvements**
- 新增 Tabbar info 属性 [\#245](https://github.com/youzan/vant/pull/245) [@chenjiahan](https://github.com/chenjiahan)
- 新增 Toast position 属性 [\#244](https://github.com/youzan/vant/pull/244) [@chenjiahan](https://github.com/chenjiahan)
- 新增 Coupon showExchangeBar 属性 [\#243](https://github.com/youzan/vant/pull/243) [@chenjiahan](https://github.com/chenjiahan)
- 新增高阶组件英文文档 [\#236](https://github.com/youzan/vant/pull/236) [@Tinysymphony](https://github.com/Tinysymphony)
- 新增示例页面文档 [\#237](https://github.com/youzan/vant/pull/237) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- 修复 Address & Contact 列表底部遮挡问题 [\#230](https://github.com/youzan/vant/pull/230) [@chenjiahan](https://github.com/chenjiahan)
- 修复 popup 被依赖时未自动引入样式的问题 [\#231](https://github.com/youzan/vant/pull/231) [@chenjiahan](https://github.com/chenjiahan)
- 修复 PullRefresh touchcancel 事件名拼写错误 [\#239](https://github.com/youzan/vant/pull/239) [@GeoffZhu](https://github.com/GeoffZhu)

### [0.10.2](https://github.com/youzan/vant/tree/v0.10.2)
`2017-10-20`

**Improvements**
- Sku: sku-group slot 增加 event bus [\#226](https://github.com/youzan/vant/pull/226) [@w91](https://github.com/w91)
- 新增基础英文文档 [\#220](https://github.com/youzan/vant/pull/220) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- 修复组件间样式依赖分析遗漏的问题 [\#224](https://github.com/youzan/vant/pull/224) [@chenjiahan](https://github.com/chenjiahan)

### [0.10.1](https://github.com/youzan/vant/tree/v0.10.1)
`2017-10-18`

**Improvements**
- 升级 Vue 依赖至 2.5.0 版本 [@chenjiahan](https://github.com/chenjiahan)
- 新增 Tabs swipeThreshold 属性 [\#206](https://github.com/youzan/vant/pull/206) [@cookfront](https://github.com/cookfront)

**Bug Fixes**
- 修复 Swipe 组件 destroyed 时未清除 autoplay timer 的问题 [\#218](https://github.com/youzan/vant/pull/218) [@chenjiahan](https://github.com/chenjiahan)
- 修复 Tab 组件 slot text 文本换行问题 [\#217](https://github.com/youzan/vant/pull/217) [@cookfront](https://github.com/cookfront)
- 修复 TreeSelect 依赖路径错误 [\#216](https://github.com/youzan/vant/pull/216) [@chenjiahan](https://github.com/chenjiahan)
- 修复 Checkbox 在微信浏览器下的边框渲染错误 [\#214](https://github.com/youzan/vant/pull/214) [@chenjiahan](https://github.com/chenjiahan)
- 修复 Popup modal 层在某些情况下无法展示的问题 [\#211](https://github.com/youzan/vant/pull/211) [@chenjiahan](https://github.com/chenjiahan)
- 修复 Waterfall 重复绑定事件的问题 [@chenjiahan](https://github.com/chenjiahan)


### [0.10.0](https://github.com/youzan/vant/tree/v0.10.0)
`2017-10-13`

**Breaking changes**
- 移除 vant-css 中对 reset.css 的默认引用 [\#192](https://github.com/youzan/vant/issues/192) [\#196](https://github.com/youzan/vant/pull/196) [@chenjiahan](https://github.com/chenjiahan)
- 重写 Swipe 组件，调整部分 API [#174](https://github.com/youzan/vant/issues/174) [#180](https://github.com/youzan/vant/issues/180) [\#194](https://github.com/youzan/vant/pull/194) [\#200](https://github.com/youzan/vant/pull/200) [@chenjiahan](https://github.com/chenjiahan)
- 优化 Search 组件，修改原有结构 [\#198](https://github.com/youzan/vant/pull/198) [@pangxie1991](https://github.com/pangxie1991)

**Improvements**
- 新增 Tabbar 组件 [#157](https://github.com/youzan/vant/issues/157) [\#204](https://github.com/youzan/vant/pull/204) [@chenjiahan](https://github.com/chenjiahan)
- 新增表单相关组件英文文档 [\#199](https://github.com/youzan/vant/pull/199) [@chenjiahan](https://github.com/chenjiahan)
- 优化 Sku 样式 [\#205](https://github.com/youzan/vant/pull/205) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- 修复 ImagePreview 图片加载过程中跳动的问题 [\#201](https://github.com/youzan/vant/pull/201) [@chenjiahan](https://github.com/chenjiahan)
- 修复 Field 组件 type 为 textarea 且 display none 时高度计算错误的问题 [\#181](https://github.com/youzan/vant/issues/181) [@chenjiahan](https://github.com/chenjiahan)


### [0.9.12](https://github.com/youzan/vant/tree/v0.9.12) 
`2017-10-11`

**Bug Fixes**
- 修复 Search 样式问题 [\#191](https://github.com/youzan/vant/pull/191) ([pangxie1991](https://github.com/pangxie1991))

### [0.9.11](https://github.com/youzan/vant/tree/v0.9.11)
`2017-10-11`

**Improvements**
- 新增 Contribute 相关文档 [\#182](https://github.com/youzan/vant/pull/182) [@pangxie1991](https://github.com/pangxie1991)

**Bug Fixes**
- 修正 AddressEdit 组件姓名字段的键名为 name [\#187](https://github.com/youzan/vant/pull/187) [@chenjiahan](https://github.com/chenjiahan)
- 修复 Filed type 为 textarea 且 display none 时高度计算错误的问题 [\#188](https://github.com/youzan/vant/pull/188) [@chenjiahan](https://github.com/chenjiahan)
- 修复 windows 下项目编译失败的问题 [\#185](https://github.com/youzan/vant/pull/182) [@pangxie1991](https://github.com/pangxie1991)


### [0.9.10](https://github.com/youzan/vant/tree/v0.9.10)
`2017-10-09`

**Improvements**
- 新增 Contact 组件 [\#160](https://github.com/youzan/vant/pull/160) [@chenjiahan](https://github.com/chenjiahan)
- 新增 AddressEdit 组件 [\#147](https://github.com/youzan/vant/pull/147) [@chenjiahan](https://github.com/chenjiahan)
- 新增英文文档支持 [\#170](https://github.com/youzan/vant/pull/170) [@pangxie1991](https://github.com/pangxie1991)
- 去除 zan-utils 依赖 [\#168](https://github.com/youzan/vant/pull/168) [@w91](https://github.com/w91) [@chenjiahan](https://github.com/chenjiahan)
- 去除 transition 中冗余的兼容代码 [\#162](https://github.com/youzan/vant/pull/162) [@chenjiahan](https://github.com/chenjiahan)
- 使用 clean-css 代替 gulp-cssmin [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- 修复 Tab props 修改后未同步至父组件的问题 [\#148](https://github.com/youzan/vant/pull/148) [@chenjiahan](https://github.com/chenjiahan)
- 修复 Button active 状态下边框样式问题 [\#150](https://github.com/youzan/vant/issues/150) [@ZWkang](https://github.com/ZWkang)
- 修复 Stepper 组件输入框样式错误 [\#159](https://github.com/youzan/vant/pull/159) [@w91](https://github.com/w91)
- 修复 Waterfall 未显示时 disable 属性无法生效的问题 [\#166](https://github.com/youzan/vant/pull/166) [@pangxie1991](https://github.com/pangxie1991)
- 修复 vant-css 构建过程中未编译 calc 属性的问题  [@chenjiahan](https://github.com/chenjiahan)
- 修复 MacOS 下 npm run dev 报错的问题 [\#152](https://github.com/youzan/vant/issues/152) [@chenjiahan](https://github.com/chenjiahan)
- 修复文档在部分低版本浏览器路由失效的问题 [\#158](https://github.com/youzan/vant/pull/158) [@pangxie1991](https://github.com/pangxie1991)
- 修复文档中遗漏 SwipeItem 组件引入方式的问题 [\#167](https://github.com/youzan/vant/pull/167) [@OlafCheng](https://github.com/OlafCheng)

### [0.9.9](https://github.com/youzan/vant/tree/v0.9.9)
`2017-09-26`

**Improvements**
- Sku：支持禁用 Stepper [\#146](https://github.com/youzan/vant/pull/146) [@w91](https://github.com/w91)

**Bug Fixes**
- 修复 packages.json 中 license 标注错误 [\#144](https://github.com/youzan/vant/pull/144) [@airyland](https://github.com/airyland)
- 修复 Waterfall 滚动计算错误的问题 [\#145](https://github.com/youzan/vant/pull/145) [@pangxie1991](https://github.com/pangxie1991)


### [0.9.8](https://github.com/youzan/vant/tree/v0.9.8)
`2017-09-24`

**Improvements**
- 新增 AddressList 组件 [\#138](https://github.com/youzan/vant/pull/138) [@chenjiahan](https://github.com/chenjiahan)
- 优化 changelog 结构 [\#140](https://github.com/youzan/vant/pull/140) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- 修复 Sku 留言渲染错误 [\#142](https://github.com/youzan/vant/pull/142) [@w91](https://github.com/w91)

### [0.9.7](https://github.com/youzan/vant/tree/v0.9.7)
`2017-09-21`

**Improvements**
- Checkbox: 支持 shape 属性 [\#137](https://github.com/youzan/vant/pull/137) [@chenjiahan](https://github.com/chenjiahan)


### [0.9.6](https://github.com/youzan/vant/tree/v0.9.6) 
`2017-09-20`

**Improvements**
- Sku：移除大部分 Lodash 函数 [\#135](https://github.com/youzan/vant/pull/135) [@w91](https://github.com/w91)
- Icon：增加会员余额图标 [\#133](https://github.com/youzan/vant/pull/133) [@pangxie1991](https://github.com/pangxie1991)

**Bug Fixes**
- 修复 ImagePreview 滑动后无法展示图片的问题 [\#126](https://github.com/youzan/vant/issues/126) [@pangxie1991](https://github.com/pangxie1991)
- 修复 reset.css 编译失败的问题 [\#136](https://github.com/youzan/vant/pull/136) [@chenjiahan](https://github.com/chenjiahan)



### [0.9.4](https://github.com/youzan/vant/tree/v0.9.4) 
`2017-09-15`

**Improvements**
- Icon: 增加已完成图标 [\#129](https://github.com/youzan/vant/pull/129) [@cookfront](https://github.com/cookfront)

**Bug Fixes**
- 修复 Button 同时使用 disabled 和 bottomAction 属性时颜色错误的问题 [\#131](https://github.com/youzan/vant/pull/131) [@chenjiahan](https://github.com/chenjiahan)
- 修复 Button 不可用状态下 acitive 背景色错误的问题 [\#132](https://github.com/youzan/vant/pull/132) [@chenjiahan](https://github.com/chenjiahan)



### [0.9.3](https://github.com/youzan/vant/tree/v0.9.3) 
`2017-09-13`

**Improvements**
- 新增 PasswordInput 组件 [\#124](https://github.com/youzan/vant/pull/124) [@chenjiahan](https://github.com/chenjiahan)
- 新增 NumberKeyboard 组件 [\#122](https://github.com/youzan/vant/pull/122) [@chenjiahan](https://github.com/chenjiahan)
- 新增文档底部 issue 入口 [\#127](https://github.com/youzan/vant/issues/127) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- 修复部分组件样式依赖 reset.css 的问题 [\#128](https://github.com/youzan/vant/pull/128) [@chenjiahan](https://github.com/chenjiahan)


### [0.9.2](https://github.com/youzan/vant/tree/v0.9.2)
`2017-09-08`

**Breaking changes**
- 内置 van-hairline 类，用于添加 0.5px 边框 [\#110](https://github.com/youzan/vant/pull/110) [@chenjiahan](https://github.com/chenjiahan)
- Quantity：重命名为 Stepper [\#120](https://github.com/youzan/vant/pull/120) [@chenjiahan](https://github.com/chenjiahan)
- PayOrder 重命名为 SubmitBar [\#120](https://github.com/youzan/vant/pull/120) [@chenjiahan](https://github.com/chenjiahan)
- DeepSelect: 重命名为 TreeSelect [\#120](https://github.com/youzan/vant/pull/120) [@chenjiahan](https://github.com/chenjiahan)
- OrderCoupon: 拆分为 CouponList 和 CouponCell 组件 [\#120](https://github.com/youzan/vant/pull/120) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- 修复 Tabs 动画过渡效果 [\#111](https://github.com/youzan/vant/pull/111) [@cookfront](https://github.com/cookfront)
- 修复 Swipe 页数为一时指示器未隐藏的问题 [\#106](https://github.com/youzan/vant/pull/106) [@Raistlin916](https://github.com/Raistlin916)
- 修复 Toast 背景色值错误的问题 [\#118](https://github.com/youzan/vant/pull/118) [@chenjiahan](https://github.com/chenjiahan)
- 修复自动引入组件样式时未引入内部依赖组件样式的问题 [\#115](https://github.com/youzan/vant/pull/115) [@chenjiahan](https://github.com/chenjiahan)

**Improvements**
- 新增 Sku 组件 [\#123](https://github.com/youzan/vant/pull/123) [@w91](https://github.com/w91)
- 新增 Area 组件 [\#113](https://github.com/youzan/vant/pull/113) [@cookfront](https://github.com/cookfront)
- 新增 NavBar 组件 [\#121](https://github.com/youzan/vant/pull/121) [@chenjiahan](https://github.com/chenjiahan)
- 新增 PullRefresh 组件 [\#117](https://github.com/youzan/vant/pull/117) [@chenjiahan](https://github.com/chenjiahan)
- 新增 OrderCoupon 组件 [\#108](https://github.com/youzan/vant/pull/108) [@chenjiahan](https://github.com/chenjiahan)
- 优化文档加载速度 [\#107](https://github.com/youzan/vant/pull/107) [@chenjiahan](https://github.com/chenjiahan)
- 优化 Popup 文档 [\#109](https://github.com/youzan/vant/pull/109) [@cookfront](https://github.com/cookfront)
- Card：支持 num 和 price 属性 [\#112](https://github.com/youzan/vant/pull/112) [@chenjiahan](https://github.com/chenjiahan)
- Toast: 支持 loading 和 text 属性同时使用，优化渲染性能 [\#114](https://github.com/youzan/vant/pull/114) [@chenjiahan](https://github.com/chenjiahan)
- Toast：布局方式改为 Flex 布局 [\#114](https://github.com/youzan/vant/pull/114) [@chenjiahan](https://github.com/chenjiahan)

### [0.8.8](https://github.com/youzan/vant/tree/v0.8.8) 
`2017-09-01`

**Improvements**
- 新增 DeepSelect 组件 [\#103](https://github.com/youzan/vant/pull/103) [@Tinysymphony](https://github.com/Tinysymphony)
- 新增 GoodsAction 组件 [\#102](https://github.com/youzan/vant/pull/102) [@chenjiahan](https://github.com/chenjiahan)
- 新增 OrderGoods 组件 [\#99](https://github.com/youzan/vant/pull/99) [@chenjiahan](https://github.com/chenjiahan)
- 新增 PayOrder 组件 [\#98](https://github.com/youzan/vant/pull/98) [@chenjiahan](https://github.com/chenjiahan)
- 优化 Step、Loading、Tag、Badge 文档 [\#101](https://github.com/youzan/vant/pull/101) [@chenjiahan](https://github.com/chenjiahan)
- Checkbox: 支持 change 事件 [\#104](https://github.com/youzan/vant/pull/104) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- 修复 make init 命令报错的问题 [\#97](https://github.com/youzan/vant/pull/97) [@pangxie1991](https://github.com/pangxie1991)


### [0.8.7](https://github.com/youzan/vant/tree/v0.8.7) 
`2017-08-29`

**Improvements**
- 新增 NoticeBar 组件 [\#94](https://github.com/youzan/vant/pull/94) [@chenjiahan](https://github.com/chenjiahan)
- 新增 CellSwitch 组件 [\#95](https://github.com/youzan/vant/pull/95) [@chenjiahan](https://github.com/chenjiahan)
- Dialog: 支持通过组件的方式进行调用 [\#93](https://github.com/youzan/vant/pull/93) [@chenjiahan](https://github.com/chenjiahan)
- Progress: 简化 DOM 结构 [\#90](https://github.com/youzan/vant/pull/90) [@chenjiahan](https://github.com/chenjiahan)
- CellSwipe: 性能优化，补充单元测试 [\#91](https://github.com/youzan/vant/pull/91) [@chenjiahan](https://github.com/chenjiahan)

### [0.8.6](https://github.com/youzan/vant/tree/v0.8.6) 
`2017-08-24`

**Improvements**
- 去除对 merge 和 class 操作方法的依赖 [\#88](https://github.com/youzan/vant/pull/88) [@chenjiahan](https://github.com/chenjiahan)
- 目录结构简化，去除 index.js 文件 [\#87](https://github.com/youzan/vant/pull/87) [@chenjiahan](https://github.com/chenjiahan)
- Button: 精简部分样式 [\#86](https://github.com/youzan/vant/pull/86) [@chenjiahan](https://github.com/chenjiahan)
- Layout: 文档优化 [\#85](https://github.com/youzan/vant/pull/85) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- 修复 DatetimePicker 初始值错误的问题 [\#89](https://github.com/youzan/vant/pull/89) [@w91](https://github.com/w91)

### [0.8.5](https://github.com/youzan/vant/tree/v0.8.5) 
`2017-08-21`

**Breaking changes**
- 优化单个组件构建方式, 减少文件体积 [\#74](https://github.com/youzan/vant/pull/74) [@chenjiahan](https://github.com/chenjiahan)

**Improvements**
- 新增文档组件使用指南 [\#83](https://github.com/youzan/vant/pull/83) [@chenjiahan](https://github.com/chenjiahan)
- 新增文档加载动效 [\#83](https://github.com/youzan/vant/pull/83) [@chenjiahan](https://github.com/chenjiahan)
- Field：新增 icon slot [\#76](https://github.com/youzan/vant/pull/76) [@pangxie1991](https://github.com/pangxie1991)

**Bug Fixes**
- 修复 Popup 默认开启 preventScroll 导致无法局部滚动的问题 [\#84](https://github.com/youzan/vant/pull/84) [@chenjiahan](https://github.com/chenjiahan)
- 修复 Field autosize 高度错误的问题 [\#78](https://github.com/youzan/vant/pull/78) [@pangxie1991](https://github.com/pangxie1991)
- 修复 Dialog z-index 错误的问题  [\#77](https://github.com/youzan/vant/pull/77) [@chenjiahan](https://github.com/chenjiahan)


### [0.7.8](https://github.com/youzan/vant/tree/v0.7.8) 
`2017-08-10`

**Improvements**
- 新增 README 英文文档 [\#66](https://github.com/youzan/vant/pull/66) [@cookfront](https://github.com/cookfront)
- 新增 babel-plugin-import 使用教程 [\#71](https://github.com/youzan/vant/pull/71) [@chenjiahan](https://github.com/chenjiahan)
- 新增多个 Icon 类型 [\#69](https://github.com/youzan/vant/pull/69) [@cookfront](https://github.com/cookfront)

**Bug Fixes**
- 修复 Swipe 组件报错的问题 [\#70](https://github.com/youzan/vant/pull/70) [@Raistlin916](https://github.com/Raistlin916)
- 修复 DatetimePicker cancel 事件无法触发的问题 [\#45](https://github.com/youzan/vant/issues/45) [@chenjiahan](https://github.com/chenjiahan)
- 修复 utils 编译时未转成 ES5 的问题 [\#67](https://github.com/youzan/vant/pull/67) [@pangxie1991](https://github.com/pangxie1991)


### [0.7.2](https://github.com/youzan/vant/tree/v0.7.2) 
`2017-07-31`

**Breaking changes**
- 文档站点样式改版 [\#55](https://github.com/youzan/vant/pull/55) [@chenjiahan](https://github.com/chenjiahan)
- 支持 babel-plugin-import [\#62](https://github.com/youzan/vant/pull/62) [@chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**
- 修复 Popup 多层级 modal 未插入到正确的位置的问题 [\#63](https://github.com/youzan/vant/pull/63) [@cookfront](https://github.com/cookfront)
- 修复 Tabs 组件为空报错的问题 [\#61](https://github.com/youzan/vant/pull/61) [@cookfront](https://github.com/cookfront)

**Improvements**
- Switch：增加过渡动画效果 [\#59](https://github.com/youzan/vant/pull/59) [@BosenY](https://github.com/BosenY)
- Card：支持 centered 属性 [\#54](https://github.com/youzan/vant/pull/54) [@chenjiahan](https://github.com/chenjiahan)

### [0.6.6](https://github.com/youzan/vant/tree/v0.6.6) 
`2017-07-15`

**Improvements**
- Tabs：支持滑动 [\#52](https://github.com/youzan/vant/pull/52) [@cookfront](https://github.com/cookfront)
- Steps：新增 direction 和 activeColor 属性，支持竖向展示 [\#49](https://github.com/youzan/vant/pull/49) [@cookfront](https://github.com/cookfront)
- Card：支持 thumb slot [\#48](https://github.com/youzan/vant/pull/48) [@chenjiahan](https://github.com/chenjiahan)
- Field：支持 blur 事件，新增 icon slot [\#53](https://github.com/youzan/vant/pull/53) [@pangxie1991](https://github.com/pangxie1991)

### [0.6.2](https://github.com/youzan/vant/tree/v0.6.2) 
`2017-06-26`

**Improvements**
- Filed组件：支持 time类型 [\#43](https://github.com/youzan/vant/pull/43) [@cookfront](https://github.com/cookfront)

**Bug Fixes**
- 修复 Toast 样式问题 [\#42](https://github.com/youzan/vant/pull/42) [@cookfront](https://github.com/cookfront)
- 修复人民币符号在 iOS 下显示问题 [\#44](https://github.com/youzan/vant/pull/44) [@w91](https://github.com/w91)


### [0.6.0](https://github.com/youzan/vant/tree/v0.6.0) 
`2017-06-15`

**Improvements**
- 支持 SSR [\#40](https://github.com/youzan/vant/pull/40) [@cookfront](https://github.com/cookfront)
- 新增多个 Icon 类型 [\#40](https://github.com/youzan/vant/pull/40) [@cookfront](https://github.com/cookfront)
- 新增 CellSwipe 组件 [\#39](https://github.com/youzan/vant/pull/39) [@tsxuehu](https://github.com/tsxuehu)
- 新增 Search 组件微杂志样式 [\#38](https://github.com/youzan/vant/pull/38) [@cookfront](https://github.com/cookfront)

### [0.5.8](https://github.com/youzan/vant/tree/v0.5.8) 
`2017-05-25`

**Improvements**
- 新增多个 Icon 类型 [\#29](https://github.com/youzan/vant/pull/29) [@cookfront](https://github.com/cookfront)
- 新增打包后的 amd 模块名称 [\#28](https://github.com/youzan/vant/pull/28) [@pangxie1991](https://github.com/pangxie1991)
- 移除 postcss-reset 插件 [\#35](https://github.com/youzan/vant/pull/35) [@cookfront](https://github.com/cookfront)
- Picker：支持 title 属性 [\#30](https://github.com/youzan/vant/pull/30) [@pangxie1991](https://github.com/pangxie1991)

**Bug Fixes**
- 修复长按图片后隐藏的问题 [\#32](https://github.com/youzan/vant/pull/32) [@w91](https://github.com/w91)


### [0.5.4](https://github.com/youzan/vant/tree/v0.5.4) 
`2017-05-09`

**Bug Fixes**
- 修复 Cell 同时设置 title 和 label 时 value 不居中的问题 [\#26](https://github.com/youzan/vant/pull/26) [@cookfront](https://github.com/cookfront)
- 修复 Popup zIndex 类型错误 [\#24](https://github.com/youzan/vant/pull/24) [@cookfront](https://github.com/cookfront)
- 修复 Picker 状态更新错误 [\#23](https://github.com/youzan/vant/pull/23) [@cookfront](https://github.com/cookfront)

**Improvements**
- 新增 reset.css [\#27](https://github.com/youzan/vant/pull/27) [@cookfront](https://github.com/cookfront)
- Cell: 新增 right-icon slot [\#27](https://github.com/youzan/vant/pull/27) [@cookfront](https://github.com/cookfront)


### [0.5.2](https://github.com/youzan/vant/tree/v0.5.2) 
`2017-04-26`

**Improvements**
- 新增 Picker 组件测试用例 [\#20](https://github.com/youzan/vant/pull/20) [@cookfront](https://github.com/cookfront)
- 新增 Col & Row 组件测试用例 [\#16](https://github.com/youzan/vant/pull/16) [@w91](https://github.com/w91)
- 新增 Uploader 单元测试 [\#9](https://github.com/youzan/vant/pull/9) [@tsxuehu](https://github.com/tsxuehu)

**Bug Fixes**
- 修复 Webpack 打包错误 [\#21](https://github.com/youzan/vant/pull/21) [@cookfront](https://github.com/cookfront)
- 修复 Toast 关闭时未移除 Dom 节点的问题 [\#19](https://github.com/youzan/vant/pull/19) [@cookfront](https://github.com/cookfront)
- 修复组件样式问题 [\#5](https://github.com/youzan/vant/pull/5) [@cookfront](https://github.com/cookfront)
