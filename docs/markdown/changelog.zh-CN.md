# 更新日志

### 提示

当前文档为 Vant 2 的更新日志，如需查询 Vant 3 的更新内容，请访问 [Vant 3 更新日志](https://vant-ui.github.io/vant/v3/#/zh-CN/changelog)。

### 介绍

Vant 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

**发布节奏**

- 修订号：每周发布，包含新特性和问题修复。
- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：无固定发布时间，包含不兼容更新。

**Vant 2 维护提示**

目前 Vant 3 已经发布超过 18 个月。对于 Vant 2，我们会将维护投入降低至最小范围，这意味着：

- 不再主动迭代新的功能。
- 致命 bug 依然会被处理和修复。
- 非致命 bug 或兼容性等问题将不在官方团队的处理范围内。
- 欢迎来自社区的 Pull Request 进行代码贡献。

## 更新内容

### [v2.12.50](https://github.com/vant-ui/vant/compare/v2.12.49...v2.12.50)

`2022-09-17`

**Bug Fixes**

- Uploader: 修复点击预览大图时会展示上传失败的图片的问题 [#11044](https://github.com/vant-ui/vant/issues/11044)
- ImagePreview: 修复缺少 onScale 类型定义的问题 [#11057](https://github.com/vant-ui/vant/issues/11057)

### [v2.12.49](https://github.com/vant-ui/vant/compare/v2.12.48...v2.12.49)

`2022-09-05`

**Bug Fixes**

- Locale: 修复读取 i18n 文案时可能获取到 JS 原生方法的问题 [#11010](https://github.com/vant-ui/vant/issues/11010)
- Locale: 修复 Vietnamese 越南语中不准确的翻译 [#10889](https://github.com/vant-ui/vant/issues/10889)

### [v2.12.48](https://github.com/vant-ui/vant/compare/v2.12.47...v2.12.48)

`2022-06-25`

**Feature**

- Steps: 新增 center 属性 [#10617](https://github.com/vant-ui/vant/issues/10617)

**Bug Fixes**

- Dialog: 修复点击按钮后会导致表单提交的问题 [#10570](https://github.com/vant-ui/vant/issues/10570)
- List: 修复检测滚动容器时忽略了 `overflow: overlay` 样式的问题 [#10743](https://github.com/vant-ui/vant/issues/10743)

### [v2.12.47](https://github.com/vant-ui/vant/compare/v2.12.46...v2.12.47)

`2022-04-07`

**Feature**

- Locale: 新增 vi-VN 越南语 [#10477](https://github.com/vant-ui/vant/issues/10477)

### [v2.12.46](https://github.com/vant-ui/vant/compare/v2.12.45...v2.12.46)

`2022-03-30`

**Bug Fixes**

- TabBar: 修复个别情况下路由匹配不正确的问题 [#10447](https://github.com/vant-ui/vant/issues/10447)

### [v2.12.45](https://github.com/vant-ui/vant/compare/v2.12.44...v2.12.45)

`2022-03-18`

**Bug Fixes**

- Sku: 修复特殊情况下 skuTree 为空数组时导致的语法报错问题 [#10390](https://github.com/vant-ui/vant/issues/10390)

**Feature**

- Dialog: 添加 entry/esc 键盘事件 [#10359](https://github.com/vant-ui/vant/issues/10359)

### [v2.12.44](https://github.com/vant-ui/vant/compare/v2.12.43...v2.12.44)

`2022-02-14`

**Bug Fixes**

- Sku: 修复 Email 正则表达式导致的潜在安全问题 [#10295](https://github.com/vant-ui/vant/issues/10295)

### [v2.12.43](https://github.com/vant-ui/vant/compare/v2.12.39...v2.12.43)

`2022-02-10`

**Feature**

- Cascader: 新增 show-header 属性 [#10201](https://github.com/vant-ui/vant/issues/10201)
- CollapseItem: 新增 lazy-render 属性 [#10279](https://github.com/vant-ui/vant/issues/10279)

**Bug Fixes**

- Icon: 修复使用图片作为图标时水平未对齐的问题 [#10224](https://github.com/vant-ui/vant/issues/10224)

### [v2.12.42](https://github.com/vant-ui/vant/compare/v2.12.41...v2.12.42)

`2022-02-07`

**Feature**

- Vant 2 对应的 npm tag 切换为 `latest-v2` [d84d2d](https://github.com/vant-ui/vant/commit/d84d2d68345bb619ab2544136ca3c763611c729d)

### [v2.12.39](https://github.com/vant-ui/vant/compare/v2.12.38...v2.12.39)

`2022-01-15`

**Bug Fixes**

- DatetimePicker: 修复边界情况下可能报错的问题 [#10186](https://github.com/vant-ui/vant/issues/10186)
- ImagePreview: 修复快速缩放导致预览关闭的问题 [#10191](https://github.com/vant-ui/vant/issues/10191)
- NavBar: 修复在 safari 上占位元素高度错误的问题 [#10190](https://github.com/vant-ui/vant/issues/10190)
- Tabbar: 修复在 safari 上占位元素高度错误的问题 [#10185](https://github.com/vant-ui/vant/issues/10185)

### [v2.12.38](https://github.com/vant-ui/vant/compare/v2.12.37...v2.12.38)

`2022-01-10`

**Feature**

- Slider: 新增 left-button、right-button 插槽 [#10053](https://github.com/vant-ui/vant/issues/10053)

**Bug Fixes**

- PullRefresh: 修复在个别浏览器上会触发原生回弹效果的问题 [#10090](https://github.com/vant-ui/vant/issues/10090)

### [v2.12.37](https://github.com/vant-ui/vant/compare/v2.12.36...v2.12.37)

`2021-12-14`

**Feature**

- ImagePreview: 新增 overlayStyle 选项 [#10043](https://github.com/vant-ui/vant/issues/10043)

**Bug Fixes**

- DatetimePicker: 修复调用 Picker 实例方法后日期未正确更新的问题 [#10028](https://github.com/vant-ui/vant/issues/10028)

### [v2.12.36](https://github.com/vant-ui/vant/compare/v2.12.35...v2.12.36)

`2021-12-05`

**Bug Fixes**

- Calendar: 修复在 Dialog 内使用时出现日期空白的问题 [#9845](https://github.com/vant-ui/vant/issues/9845) [#9939](https://github.com/vant-ui/vant/issues/9939)
- Uploader: 修复图片预览卡顿的问题 [#7307](https://github.com/vant-ui/vant/issues/7307) [#9953](https://github.com/vant-ui/vant/issues/9953)

### [v2.12.35](https://github.com/vant-ui/vant/compare/v2.12.34...v2.12.35)

`2021-11-27`

**Bug Fixes**

- DatetimePicker: 修复未使用 v-model 时 confirm 抛出的值可能出错的问题 [#9938](https://github.com/vant-ui/vant/issues/9938)
- Swipe: 修复 iOS 系统下圆角失效的问题 [#9933](https://github.com/vant-ui/vant/issues/9933) [#9931](https://github.com/vant-ui/vant/issues/9931)

### [v2.12.34](https://github.com/vant-ui/vant/compare/v2.12.33...v2.12.34)

`2021-11-24`

**Feature**

- Tabbar: route 模式支持匹配子路由 [#9173](https://github.com/vant-ui/vant/issues/9173) [#9921](https://github.com/vant-ui/vant/issues/9921)

**Bug Fixes**

- Swipe: 修复开始滑动时未阻止 touchmove 事件行为的问题 [#9918](https://github.com/vant-ui/vant/issues/9918)

### [v2.12.33](https://github.com/vant-ui/vant/compare/v2.12.32...v2.12.33)

`2021-11-16`

**Bug Fixes**

- Picker: 修复 SSR 报错的问题 [#9875](https://github.com/vant-ui/vant/issues/9875)

### [v2.12.32](https://github.com/vant-ui/vant/compare/v2.12.31...v2.12.32)

`2021-11-15`

**Feature**

- NoticeBar: 新增 reset 方法 [#9864](https://github.com/vant-ui/vant/issues/9864)
- Picker: 支持在桌面端通过鼠标滚轮进行滚动 [#9713](https://github.com/vant-ui/vant/issues/9713)

**Bug Fixes**

- Field: 修复点击 readonly 的输入框后会触发表单验证的问题 [#9863](https://github.com/vant-ui/vant/issues/9863)
- Switch: 修复全局设置 font-size 时样式错误的问题 [#9841](https://github.com/vant-ui/vant/issues/9841)
- Tabbar: 修复 before-change 属性在路由模式下不生效的问题 [#9855](https://github.com/vant-ui/vant/issues/9855)

### [v2.12.31](https://github.com/vant-ui/vant/compare/v2.12.30...v2.12.31)

`2021-10-30`

**Bug Fixes**

- Field: 修复 textarea 在聚焦和失焦时未重新计算高度的问题 [#9718](https://github.com/vant-ui/vant/issues/9718)
- Progress: 修复窗口高度变化时进度条长度错误的问题 [#9757](https://github.com/vant-ui/vant/issues/9757)
- 修复 VueConstructor 类型定义冲突的问题 [#9750](https://github.com/vant-ui/vant/issues/9750)

### [v2.12.30](https://github.com/vant-ui/vant/compare/v2.12.29...v2.12.30)

`2021-10-14`

**Feature**

- Sku: 支持在留言下方定义描述文案 [#9651](https://github.com/vant-ui/vant/issues/9651)

### [v2.12.29](https://github.com/vant-ui/vant/compare/v2.12.28...v2.12.29)

`2021-09-22`

**Bug Fixes**

- Tabs: 修复多个 Tabs 组件同时存在时动画失效的问题 [#9542](https://github.com/vant-ui/vant/issues/9542)

### [v2.12.28](https://github.com/vant-ui/vant/compare/v2.12.27...v2.12.28)

`2021-09-20`

**Feature**

- Icons: 新增 shield-o、guide-o 图标 [fc2406](https://github.com/vant-ui/vant/commit/fc2406ee2849af989b151b31f9de138213fadf23)

**Bug Fixes**

- Radio: 修复 icon ref 可能为 undefined 导致报错的问题 [#9504](https://github.com/vant-ui/vant/issues/9504)

### [v2.12.27](https://github.com/vant-ui/vant/compare/v2.12.27-beta.0...v2.12.27)

`2021-09-06`

**Feature**

- Sku: 新增 custom-upload 配置项 [#9389](https://github.com/vant-ui/vant/issues/9389)

**Bug Fixes**

- Field: 修复 field-error-message-font-size 样式变量名称 [#9393](https://github.com/vant-ui/vant/issues/9393)
- Popup: 修复内存泄露问题 [#9336](https://github.com/vant-ui/vant/issues/9336)

### [v2.12.26](https://github.com/vant-ui/vant/compare/v2.12.25...v2.12.26)

`2021-08-15`

**Feature**

- Uploader: 新增 click-upload 事件 [#9260](https://github.com/vant-ui/vant/issues/9260)
- Uploader: 新增 readonly 属性 [#9257](https://github.com/vant-ui/vant/issues/9257)

**Bug Fixes**

- Field: 修复 Textarea 内容较多时，输入会导致页面滚动到顶部的问题 [#9207](https://github.com/vant-ui/vant/issues/9207)
- Rate: 修复星星较多时无法自动换行的问题 [#9193](https://github.com/vant-ui/vant/issues/9193)
- Tabs: 修复 card 类型内边距错误的问题 [#9169](https://github.com/vant-ui/vant/issues/9169)

### [v2.12.25](https://github.com/vant-ui/vant/compare/v2.12.24...v2.12.25)

`2021-07-25`

**Feature**

- Cascader: 新增 option 插槽 [#9111](https://github.com/vant-ui/vant/issues/9111)
- CellGroup: 新增 inset 属性 [#9055](https://github.com/vant-ui/vant/issues/9055)

### [v2.12.24](https://github.com/vant-ui/vant/compare/v2.12.23...v2.12.24)

`2021-07-13`

**Bug Fixes**

- DatetimePicker: 修复设置 filter 属性时可能出现当前日期不正确的问题 [#9009](https://github.com/vant-ui/vant/issues/9009)
- Step: 修复 z-index 层级问题 [#9004](https://github.com/vant-ui/vant/issues/9004)

### [v2.12.23](https://github.com/vant-ui/vant/compare/v2.12.22...v2.12.23)

`2021-07-06`

**Bug Fixes**

- DatetimePicker: 修复设置 max-date、max-hour 等属性时可能导致当前日期不正确的问题 [#8977](https://github.com/vant-ui/vant/issues/8977)
- Stepper: 修复开启 async-change 且 blur 后输入值不正确的问题 [#8936](https://github.com/vant-ui/vant/issues/8936)
- Toast: 修复长单词换行问题 [#8966](https://github.com/vant-ui/vant/issues/8966)

### [v2.12.22](https://github.com/vant-ui/vant/compare/v2.12.21...v2.12.22)

`2021-06-22`

**Feature**

- Calendar: 新增 top-info、bottom-info 插槽 [#8847](https://github.com/vant-ui/vant/issues/8847)

**Bug Fixes**

- Slider: 修复设置 step 属性时，输入值格式化错误的问题 [#8894](https://github.com/vant-ui/vant/issues/8894)

### [v2.12.21](https://github.com/vant-ui/vant/compare/v2.12.20...v2.12.21)

`2021-06-03`

**Feature**

- Button: 新增 icon 插槽 [#8784](https://github.com/vant-ui/vant/issues/8784)
- CouponList: 新增 list-footer、disabled-list-footer 插槽 [#8797](https://github.com/vant-ui/vant/issues/8797)
- Locale: 新增 French 法语语言包 [#8795](https://github.com/vant-ui/vant/issues/8795)

**Bug Fixes**

- CellGroup: 修复在 `v-for` 循环内使用时渲染异常的问题 [#8787](https://github.com/vant-ui/vant/issues/8787)
- Collapse: 修复在 safari 上可能出现渲染异常的问题 [#8788](https://github.com/vant-ui/vant/issues/8788)
- List: 移除无效的 @list-icon-margin-right 变量 [#8758](https://github.com/vant-ui/vant/issues/8758)
- NoticeBar: 修复在 Popup 内嵌套使用时无法正常播放的问题 [#8791](https://github.com/vant-ui/vant/issues/8791)
- Tabs: 修复在 Popup 内嵌套使用时底部条位置错误的问题 [#8792](https://github.com/vant-ui/vant/issues/8792)

### [v2.12.20](https://github.com/vant-ui/vant/compare/v2.12.19...v2.12.20)

`2021-05-23`

**Feature**

- Uploader: max-size 属性支持函数格式 [#8745](https://github.com/vant-ui/vant/issues/8745)

**Bug Fixes**

- Button: 修复 loading 状态下点击按钮会提交表单的问题 [#8735](https://github.com/vant-ui/vant/issues/8735)
- 修复函数式组件未继承 `key` 的问题 [#8718](https://github.com/vant-ui/vant/issues/8718)

### [v2.12.19](https://github.com/vant-ui/vant/compare/v2.12.18...v2.12.19)

`2021-05-17`

**Feature**

- NoticeBar: speed 属性的默认值由 50 调整为 60 [a48663](https://github.com/vant-ui/vant/commit/a486630fe3fe10d8854c03817214dba82b70229e)
- Dependencies: 不再锁死 @vant/icons 的版本号 [#8714](https://github.com/vant-ui/vant/issues/8714)

### [v2.12.18](https://github.com/vant-ui/vant/compare/v2.12.17...v2.12.18)

`2021-05-10`

**Bug Fixes**

- CouponList: 修复时间为字符串格式时展示错误的问题 [c5b4d1](https://github.com/vant-ui/vant/commit/c5b4d1a66372b94420146f9a640aee31f402889a)

### [v2.12.17](https://github.com/vant-ui/vant/compare/v2.12.16...v2.12.17)

`2021-05-08`

**Feature**

- CouponList: 支持通过 customValidPeriod 字段自定义有效期 [#8679](https://github.com/vant-ui/vant/issues/8679)

### [v2.12.16](https://github.com/vant-ui/vant/compare/v2.12.15...v2.12.16)

`2021-05-03`

**Feature**

- Steps: 新增 icon-prefix 属性 [#8630](https://github.com/vant-ui/vant/issues/8630)

**Bug Fixes**

- DatetimePicker: 修复动态设置 mindate 或 maxdate 时可能导致日期错误的问题 [#8640](https://github.com/vant-ui/vant/issues/8640)

### [v2.12.15](https://github.com/vant-ui/vant/compare/v2.12.14...v2.12.15)

`2021-04-25`

**Bug Fixes**

- Calendar: 修正繁体中文语言包 [#8569](https://github.com/vant-ui/vant/issues/8569)
- Tag: 修复使用 plain 和 color 属性时边框颜色不正确的问题 [#8602](https://github.com/vant-ui/vant/issues/8602)
- Uploader: 修复使用插槽时 scoped 样式不生效的问题 [#8613](https://github.com/vant-ui/vant/issues/8613)

### [v2.12.14](https://github.com/vant-ui/vant/compare/v2.12.13...v2.12.14)

`2021-04-18`

**Feature**

- sku: 商品属性默认选中交互逻辑修改 [#8559](https://github.com/vant-ui/vant/issues/8559)
- sku: 支持商品属性必选配置 [#8558](https://github.com/vant-ui/vant/issues/8558)

**Bug Fixes**

- Calendar: 修复在某些下副标题更新不正确的问题 [#8513](https://github.com/vant-ui/vant/issues/8513)
- ShareSheet: 修复 duration 属性不生效的问题 [#8542](https://github.com/vant-ui/vant/issues/8542)

### [v2.12.13](https://github.com/vant-ui/vant/compare/v2.12.12...v2.12.13)

`2021-04-11`

**Feature**

- Sticky: 新增 change 事件 [#8479](https://github.com/vant-ui/vant/issues/8479)

### [v2.12.12](https://github.com/vant-ui/vant/compare/v2.12.11...v2.12.12)

`2021-04-05`

**Bug Fixes**

- 修复 Webstorm 下组件标签提示不正确的问题 [#8450](https://github.com/vant-ui/vant/issues/8450)

### [v2.12.11](https://github.com/vant-ui/vant/compare/v2.12.10...v2.12.11)

`2021-03-30`

**Bug Fixes**

- Field: 修复在个别情况下错误地清除错误提示的问题 [#8412](https://github.com/vant-ui/vant/issues/8412)
- Tabs: 修复在 safari 上左滑退出页面时手势判断错误的问题 [#8387](https://github.com/vant-ui/vant/issues/8387)

### [v2.12.10](https://github.com/vant-ui/vant/compare/v2.12.9...v2.12.10)

`2021-03-19`

**Bug Fixes**

- Utils: 修复 deepClone 未正确深拷贝的问题 [#8326](https://github.com/vant-ui/vant/issues/8326)
- Swipe: 修复添加 scale 动画时宽度计算错误的问题 [#8329](https://github.com/vant-ui/vant/issues/8329)

### [v2.12.9](https://github.com/vant-ui/vant/compare/v2.12.8...v2.12.9)

`2021-03-09`

**Feature**

- AddressList: 新增 tag 插槽 [#8311](https://github.com/vant-ui/vant/issues/8311)

### [v2.12.8](https://github.com/vant-ui/vant/compare/v2.12.7...v2.12.8)

`2021-03-07`

**Feature**

- ImagePreview: 新增 transition 属性 [#8273](https://github.com/vant-ui/vant/issues/8273)
- PullRefresh: 新增 pull-distance 属性 [#8279](https://github.com/vant-ui/vant/issues/8279)
- Locale: 新增 th-TH 泰语 [#8247](https://github.com/vant-ui/vant/issues/8247)

**Bug Fixes**

- ActionSheet: 修复返回页面时可能错误地重新打开的问题 [#8271](https://github.com/vant-ui/vant/issues/8271)
- ImagePreview: 修复第一次打开时动画缺失的问题 [#8274](https://github.com/vant-ui/vant/issues/8274)
- Stepper: 修复在 iOS14 下禁用时输入框文字不可见的问题 [#8278](https://github.com/vant-ui/vant/issues/8278)

### [v2.12.7](https://github.com/vant-ui/vant/compare/v2.12.6...v2.12.7)

`2021-02-28`

**Feature**

- Step: 新增 finish-icon 插槽 [#8240](https://github.com/vant-ui/vant/issues/8240)
- Steps: 新增 finish-icon 属性 [#8237](https://github.com/vant-ui/vant/issues/8237)

**Bug Fixes**

- DatetimePicker: 修复 v-model 为 null 时初始值不正确的问题 [#7832](https://github.com/vant-ui/vant/issues/7832)
- Empty: 修复 linearGradient id 可能导致冲突的问题 [#8011](https://github.com/vant-ui/vant/issues/8011)
- GoodsActionIcon: 修复控制台存在 info 属性 warning 的问题 [#8040](https://github.com/vant-ui/vant/issues/8040)
- Tabs: 修复 v-model 值为 0 时激活标签可能不正确的问题 [#8087](https://github.com/vant-ui/vant/issues/8087)

### [v2.12.6](https://github.com/vant-ui/vant/compare/v2.12.5...v2.12.6)

`2021-01-26`

**Feature**

- Icons: 新增 wechat 图标, 重命名原 wechat 图标为 wechat-pay [b3cd8c](https://github.com/vant-ui/vant/commit/b3cd8c14aea9e542a9de4ba9999e50c3ecbf3b3c)

**Bug Fixes**

- 修复部分地区无法访问 CDN 静态资源的问题 [#8000](https://github.com/vant-ui/vant/issues/8000)

**perf**

- Sku: 优化图标加载性能 [#7992](https://github.com/vant-ui/vant/issues/7992)

### [v2.12.5](https://github.com/vant-ui/vant/compare/v2.12.4...v2.12.5)

`2021-01-24`

**Feature**

- Calendar: reset 方法支持重置到指定日期 [#7943](https://github.com/vant-ui/vant/issues/7943)
- ImagePreview: 在调用 swipeTo 方法后自动重置缩放状态 [#7974](https://github.com/vant-ui/vant/issues/7974)
- ImagePreview: swipe-duration 属性的默认值调整为 300ms [#7973](https://github.com/vant-ui/vant/issues/7973)
- ShareSheet: 新增 wechat-moments 朋友圈图标 [4f94dd](https://github.com/vant-ui/vant/commit/4f94dd3260fedd0c67b8b542c106119dd1ca7b37)

**style**

- ShareSheet: 更新 qrcode 图标 [335510](https://github.com/vant-ui/vant/commit/33551062e3e946107b05841ddd3914ab996600ce)

### [v2.12.4](https://github.com/vant-ui/vant/compare/v2.12.3...v2.12.4)

`2021-01-17`

**Feature**

- Cascader: 新增 field-names 属性，用于自定义字段名 [#7932](https://github.com/vant-ui/vant/issues/7932)
- Cell: 支持在设置 is-link 时将 clickable 设置为 false 来禁用点击状态 [#7922](https://github.com/vant-ui/vant/issues/7922)

**Bug Fixes**

- Circle: 修复渐变色不生效的问题 [#7910](https://github.com/vant-ui/vant/issues/7910) [#7897](https://github.com/vant-ui/vant/issues/7897)
- Field: 修复类型为 number 时可以输入点号开头的问题 [#7921](https://github.com/vant-ui/vant/issues/7921)

### [v2.12.3](https://github.com/vant-ui/vant/compare/v2.12.2...v2.12.3)

`2021-01-09`

**Bug Fixes**

- Col: 适配 less 4.0 [d8a81b](https://github.com/vant-ui/vant/commit/d8a81b26d8d867e810e54a40ea0d647bb6af3bee)

### [v2.12.2](https://github.com/vant-ui/vant/compare/v2.12.1...v2.12.2)

`2021-01-02`

**Feature**

- Calendar: 新增 scrollToDate 方法 [#7847](https://github.com/vant-ui/vant/issues/7847)
- Form: 新增 disabled 属性 [#7829](https://github.com/vant-ui/vant/issues/7829)
- Form: 新增 readonly 属性 [#7829](https://github.com/vant-ui/vant/issues/7829)
- Loading: 新增 text-color 属性 [#7846](https://github.com/vant-ui/vant/issues/7846)
- IndexBar: 新增 scrollTo 方法 [#7845](https://github.com/vant-ui/vant/issues/7845)
- NumberKeyboard: 新增 random-key-order 属性 [#7841](https://github.com/vant-ui/vant/issues/7841)

### [v2.12.1](https://github.com/vant-ui/vant/compare/v2.12.0...v2.12.1)

`2020-12-26`

**Feature**

- Form: valdiate 方法支持校验多个表单项 [#7810](https://github.com/vant-ui/vant/issues/7810)
- Form: resetValidation 方法支持重置多个表单项 [#7811](https://github.com/vant-ui/vant/issues/7811)
- Stepper: 新增 show-input 属性，用于控制是否显示输入框 [#7812](https://github.com/vant-ui/vant/issues/7812)

**Bug Fixes**

- CountDown: 修复 SSR 过程中内存泄露的问题 [#7808](https://github.com/vant-ui/vant/issues/7808)
- Image: 修复 SSR 时提示 DOM 不匹配的问题 [#7822](https://github.com/vant-ui/vant/issues/7822)
- Stepper: 修复 change 事件重复触发的问题 [#7820](https://github.com/vant-ui/vant/issues/7820)
- Swipe: 修复 SSR 样式不正确的问题 [#7821](https://github.com/vant-ui/vant/issues/7821)

### [v2.12.0](https://github.com/vant-ui/vant/compare/v2.11.3...v2.12.0)

`2020-12-23`

**New Component**

- 新增 Cascader 级联选择组件 [#7771](https://github.com/vant-ui/vant/pull/7771)

<img src="https://b.yzcdn.cn/vant/cascader_1221.png">

**Feature**

- uploader: 支持在 fileList 的选项中单独配置 `imageFit` `deletable` `previewSize` `beforeDelete` 字段 [#7776](https://github.com/vant-ui/vant/issues/7776)

**Bug Fixes**

- Tab: 修复动态修改标题后标签栏的滚动位置不正确的问题 [c919e9](https://github.com/vant-ui/vant/commit/c919e9dedaae8ecde8be944032e26474829c1253)

### [v2.11.3](https://github.com/vant-ui/vant/compare/v2.11.2...v2.11.3)

`2020-12-18`

**Feature**

- Sku: 新增 disable-soldout-sku 属性 [#7759](https://github.com/vant-ui/vant/issues/7759)
- Icon: 新增 delete-o、sort、font、font-o、revoke 图标 [#7760](https://github.com/vant-ui/vant/issues/7760)

### [v2.11.2](https://github.com/vant-ui/vant/compare/v2.11.1...v2.11.2)

`2020-12-10`

**style**

- Circle: 新增 @circle-color Less 变量 [1a6cf6](https://github.com/vant-ui/vant/commit/1a6cf64f548bb19c6bd478db67f2e0a1d7c9a145)
- Circle: 新增 @circle-layer-color Less 变量 [65a5ed](https://github.com/vant-ui/vant/commit/65a5ed85537b7a406655bd39f7e4f5332d780a82)
- Circle: 新增 @circle-size Less 变量 [b57f7e](https://github.com/vant-ui/vant/commit/b57f7e9d9810ce95047334f0897899ebddaac6f3)
- IndexBar: 默认高亮颜色调整为红色 [65b680](https://github.com/vant-ui/vant/commit/65b6807a7e6b8a415b5f228c5d55426cd81a1dfa) [87b0a0](https://github.com/vant-ui/vant/commit/87b0a034958296a720409ded893e708081c35bc5)
- IndexBar: 右边距调整为 8px [aad055](https://github.com/vant-ui/vant/commit/aad055906484d8b6c38a9f84a768f09522b13a41)

**Bug Fixes**

- Popover: 修复在企业微信内边框位置错误的问题 [#7702](https://github.com/vant-ui/vant/issues/7702)
- Stepper: 修复在 iOS 下禁用输入框时，点击输入框会导致页面下滑的问题 [#7701](https://github.com/vant-ui/vant/issues/7701)

### [v2.11.1](https://github.com/vant-ui/vant/compare/v2.11.0...v2.11.1)

`2020-11-26`

**Feature**

- CheckboxGroup: toggleAll 方法新增 skipDisabled 选项，用于跳过禁用的复选框 [#7644](https://github.com/vant-ui/vant/issues/7644)
- DatetimePicker: 支持 Picker 的所有插槽 [#7645](https://github.com/vant-ui/vant/issues/7645)
- Popover: 新增 trigger 属性，用于控制弹出层的触发时机 [#7646](https://github.com/vant-ui/vant/issues/7646)
- Popover: 优化无障碍访问 [#7624](https://github.com/vant-ui/vant/issues/7624)
- ShareSheet: 新增小程序码图标 [#7635](https://github.com/vant-ui/vant/issues/7635)

**style**

- NavBar: 修复当 border 为 false 时 z-index 不生效的问题 [#7612](https://github.com/vant-ui/vant/issues/7612)
- Popover: 优化 cursor 样式 [#7623](https://github.com/vant-ui/vant/issues/7623)

**Bug Fixes**

- Button: 修复图标按钮和非图标按钮无法垂直对齐的问题 [#7636](https://github.com/vant-ui/vant/issues/7636)
- Popover: 修复在 nuxt.js 上编译报错的问题 [f3ad7e](https://github.com/vant-ui/vant/commit/f3ad7ed1a77cd2f19001489ea64df0d61429ce33)

### [v2.11.0](https://github.com/vant-ui/vant/compare/v2.10.14...v2.11.0)

`2020-11-22`

**New Component**

- 新增 [Badge 徽标](#/zh-CN/badge)组件 [#7602](https://github.com/vant-ui/vant/issues/7602)
- 新增 [Popover 气泡弹出框](#/zh-CN/popover)组件 [#7579](https://github.com/vant-ui/vant/issues/7579)

![](https://img01.yzcdn.cn/vant/component-preview-1122.png)

**Feature**

- Popup: 新增 click-close-icon 事件 [#7599](https://github.com/vant-ui/vant/issues/7599)

**Bug Fixes**

- ActionSheet: 修复在 iOS 10 以下版本时选项高度不正确的问题 [#7578](https://github.com/vant-ui/vant/issues/7578)

### [v2.10.14](https://github.com/vant-ui/vant/compare/v2.10.13...v2.10.14)

`2020-11-15`

**Feature**

- ImagePreview: index 插槽新增 index 参数 [#7552](https://github.com/vant-ui/vant/issues/7552)
- Popup: 新增 transition-appear 属性 [#7525](https://github.com/vant-ui/vant/issues/7525)
- Skeleton: 新增 @skeleton-avatar-size less 变量 [#7556](https://github.com/vant-ui/vant/issues/7556)
- Skeleton: 新增 @skeleton-title-width less 变量 [#7557](https://github.com/vant-ui/vant/issues/7557)

**Bug Fixes**

- Calendar: 修复 month-show 事件触发时机不正确的问题 [#7565](https://github.com/vant-ui/vant/issues/7565)
- Calendar: 修复初始化时 lazy-render 不生效的问题 [#7564](https://github.com/vant-ui/vant/issues/7564)
- IndexBar: 修复在 Popup 内使用时锚点无法吸顶的问题 [#7559](https://github.com/vant-ui/vant/issues/7559)
- NavBar: 修复 safe-area-inset-top 属性未能正确生效的问题 [#7534](https://github.com/vant-ui/vant/issues/7534)
- Skeleton: 修复 avatar-size 属性传入 number 类型时报错的问题 [#7555](https://github.com/vant-ui/vant/issues/7555)
- Sticky: 修复某些情况下无法正确吸顶的问题 [#7561](https://github.com/vant-ui/vant/issues/7561)
- Swipe: 修复宽度为小数时漏边的问题 [#7562](https://github.com/vant-ui/vant/issues/7562)

### [v2.10.13](https://github.com/vant-ui/vant/compare/v2.10.12...v2.10.13)

`2020-11-08`

**Feature**

- Icon: 现在会默认使用 base64 图标，而不是 CDN 上的 iconfont [e0ad65](https://github.com/vant-ui/vant/commit/e0ad65e69fbcfb9ef69b25d2c1bce322577aad11)
- NavBar: 新增 safe-area-inset-top 属性，用于开启 iOS 顶部安全区适配 [be25a4](https://github.com/vant-ui/vant/commit/be25a478dfbc599cdb27ba09d2d72858037c1700)
- Sticky: offset-top 属性支持使用 vh 单位 [#7498](https://github.com/vant-ui/vant/issues/7498)

**Bug Fixes**

- NavBar: 修复按钮文字不居中的问题 [#7515](https://github.com/vant-ui/vant/issues/7515)
- NoticeBar: 修复在 iOS14 上无法重复播放的问题 [#7516](https://github.com/vant-ui/vant/issues/7516)
- Picker: 修复级联模式下选项禁用时二级选项错误的问题 [#7499](https://github.com/vant-ui/vant/issues/7499)
- Picker: 修复禁用所有选项时默认展示的选项不为第一项的问题 [#7504](https://github.com/vant-ui/vant/issues/7504)
- Swipe: 修复开启 lazy-render 且 loop 为 false 时渲染节点不正确的问题 [#7465](https://github.com/vant-ui/vant/issues/7465)
- Swipe: 修复开启 lazy-render 时子节点被重复挂载的问题 [#7466](https://github.com/vant-ui/vant/issues/7466)
- Switch: 修复按钮 z-index 层级过高的问题 [#7497](https://github.com/vant-ui/vant/issues/7497)
- Toast: 修复 onClose 选项可以被重复触发的问题 [#7496](https://github.com/vant-ui/vant/issues/7496)

### [v2.10.12](https://github.com/vant-ui/vant/compare/v2.10.11...v2.10.12)

`2020-10-31`

**Feature**

- Image: 新增 icon-prefix 属性 [#7457](https://github.com/vant-ui/vant/issues/7457)
- Progress: 新增 resize 属性 [#5161](https://github.com/vant-ui/vant/issues/5161)
- SubmitBar: 新增 button 插槽，用于自定义按钮 [#7458](https://github.com/vant-ui/vant/issues/7458)

**style**

- ActionSheet: 当选项较多时，取消按钮现在会固定在底部 [#7401](https://github.com/vant-ui/vant/issues/7401)
- Popup: 圆角弹窗的圆角大小从 20px 调整为 16px [#7421](https://github.com/vant-ui/vant/issues/7421)
- Sidebar: 修复文本为长数字时无法自动换行的问题 [#7456](https://github.com/vant-ui/vant/issues/7456)

**Bug Fixes**

- GridItem: 修复使用 badge 属性时会在控制台抛出 warning 的问题 [#7433](https://github.com/vant-ui/vant/issues/7433)
- Picker: 修复在 safari 上动画弹出过程中遮罩层闪烁的问题 [#7460](https://github.com/vant-ui/vant/issues/7460)
- Tabs: 修复在个别情况下错误地抛出 change 事件的问题 [#7461](https://github.com/vant-ui/vant/issues/7461)
- Tabs: 修复动态插入时 active 值可能错误的问题 [#7445](https://github.com/vant-ui/vant/issues/7445)

### [v2.10.11](https://github.com/vant-ui/vant/compare/v2.10.11...v2.10.11)

`2020-10-24`

**Feature**

- Empty: 新增 image-size 属性，用于设置图片大小 [#7389](https://github.com/vant-ui/vant/issues/7389)
- Picker: 新增 option 插槽，用于自定义选项 [#7380](https://github.com/vant-ui/vant/issues/7380)
- Picker: 新增 cancel 插槽，用于自定义取消按钮 [#7377](https://github.com/vant-ui/vant/issues/7377)
- Picker: 新增 confirm 插槽，用于自定义确定按钮 [#7377](https://github.com/vant-ui/vant/issues/7377)

**Bug Fixes**

- Dialog: 修复将 closeOnPopstate 设置为 false 时不生效的问题 [#7357](https://github.com/vant-ui/vant/issues/7357)
- NavBar: 修复左右文字为空时会渲染空节点的问题 [#7376](https://github.com/vant-ui/vant/issues/7376)
- Image: 修复 SSR 时会渲染加载中节点的问题 [#7383](https://github.com/vant-ui/vant/issues/7383)
- Revert "Field: 占位文字的颜色调整为 gray-6" [#7192](https://github.com/vant-ui/vant/issues/7192) [#7375](https://github.com/vant-ui/vant/issues/7375)

### [v2.10.10](https://github.com/vant-ui/vant/compare/v2.10.9...v2.10.10)

`2020-10-18`

**Feature**

- Icons: 新增 minus 减号图标 [40e26f](https://github.com/vant-ui/vant/commit/40e26f97d1144d0dd0810075af8616676459ced3)
- IndexBar: 新增 change 事件 [#7296](https://github.com/vant-ui/vant/issues/7296)

**Improvement**

- 增加 info 属性的废弃提示 [#7352](https://github.com/vant-ui/vant/issues/7352) [#7347](https://github.com/vant-ui/vant/issues/7347)
- SwitchCell: 增加组件废弃提示 [#7350](https://github.com/vant-ui/vant/issues/7350)
- Toast: 新增 mask 选项的废弃提示 [#7342](https://github.com/vant-ui/vant/issues/7342)
- TreeSelect: 增加 navclick 和 itemclick 事件的废弃提示 [#7351](https://github.com/vant-ui/vant/issues/7351)

**Bug Fixes**

- Calendar: 修复在大屏幕上日期展示不全的问题 [#7355](https://github.com/vant-ui/vant/issues/7355)
- Tabs: 修复部分标签页内容为空且开启 animated 时展示错误的问题 [#7354](https://github.com/vant-ui/vant/issues/7354)
- Field: 修复 label-align 为 right 时 label 只能展示五个字的问题 [#7349](https://github.com/vant-ui/vant/issues/7349)
- GridItem: 修复文字未正确换行的问题 [#7292](https://github.com/vant-ui/vant/issues/7292)
- Icon: 修复 after-sale 和 cash-back-record 图标在真机上不完整的问题 [#7328](https://github.com/vant-ui/vant/issues/7328)
- Picker: 修复加载图标的 z-index 错误的问题 [14cd28](https://github.com/vant-ui/vant/commit/14cd2863cc75d4f7328ddcf19808b9f6eec38fa4)
- Row: 修复开启 flex 模式时未能正确换行的问题 [#7332](https://github.com/vant-ui/vant/issues/7332)

### [v2.10.9](https://github.com/vant-ui/vant/compare/v2.10.8...v2.10.9)

`2020-10-01`

**Feature**

- Locale: 新增德语语言包 [#7245](https://github.com/vant-ui/vant/issues/7245)
- CollapseItem: 新增 toggle 方法，用于主动控制面板展开或收起 [#7281](https://github.com/vant-ui/vant/issues/7281)
- Pagination: 新增 page、prev-text、next-text 插槽 [#7222](https://github.com/vant-ui/vant/issues/7222)
- Tab: 当标签页内容为空时，不再渲染空的 `van-tab-pane` 节点 [#7238](https://github.com/vant-ui/vant/issues/7238)

**Bug Fixes**

- Swipe: 修复 prev、next 方法缺少类型定义的问题 [#7270](https://github.com/vant-ui/vant/issues/7270)
- Button: 修复在 v-for 中渲染时 ref 不正确的问题 [#7237](https://github.com/vant-ui/vant/issues/7237)
- Field: 修复设置 maxlength 后在中间输入时截断结果不正确的问题 [#7284](https://github.com/vant-ui/vant/issues/7284)
- @vant/markdown-vetur: 修复 Windows 系统下的兼容问题 [#7277](https://github.com/vant-ui/vant/issues/7277) [#7287](https://github.com/vant-ui/vant/issues/7287)

### [v2.10.8](https://github.com/vant-ui/vant/compare/v2.10.7...v2.10.8)

`2020-09-21`

**Feature**

- SidebarItem: 新增 title 插槽 [#7220](https://github.com/vant-ui/vant/issues/7220)

**Bug Fixes**

- Calendar: 修复月份标题展示错误的问题 [#7205](https://github.com/vant-ui/vant/issues/7205)
- CouponCell: 修复金额为 0 时取值逻辑错误的问题 [#7196](https://github.com/vant-ui/vant/issues/7196)
- Field: 修复在 iOS 14 上禁用时文字颜色过浅的问题 [#7206](https://github.com/vant-ui/vant/issues/7206)
- List: 修复个别情况下第一个子元素的 scoped 样式不生效的问题 [#7202](https://github.com/vant-ui/vant/issues/7202)
- Swipe: 修复宽度为小数时无法禁用循环滚动的问题 [#7208](https://github.com/vant-ui/vant/issues/7208)
- Swipe: 修复指示器切换时渐变动画闪烁的问题 [#7207](https://github.com/vant-ui/vant/issues/7207)

### [v2.10.7](https://github.com/vant-ui/vant/compare/v2.10.6...v2.10.7)

`2020-09-17`

**Feature**

- Slider: 新增 range 属性，用于开启双滑块模式 [#7176](https://github.com/vant-ui/vant/issues/7176)
- Button: 新增 icon-position 属性，用于指定图标位置 [#7174](https://github.com/vant-ui/vant/issues/7174)

**Style**

- Dialog: 优化无标题弹窗的最小高度 [#7191](https://github.com/vant-ui/vant/issues/7191)
- Field: 占位文字的颜色调整为 gray-6 [#7192](https://github.com/vant-ui/vant/issues/7192)
- TabbarItem: 新增 @tabbar-item-active-background-color less 变量 [#7162](https://github.com/vant-ui/vant/issues/7162)

**Bug Fixes**

- Calendar: 修复使用 rem 布局时内容跳动的问题 [#7190](https://github.com/vant-ui/vant/issues/7190)
- ImagePreview: 修复在个别场景下图片滑动范围错误的问题 [#7142](https://github.com/vant-ui/vant/issues/7142)
- NoticeBar: 修复在 safari 浏览器上返回时无法滚动的问题 [#7167](https://github.com/vant-ui/vant/issues/7167)
- NumberKeyboard: 修复 extra-key 包含多个字符时被截断的问题 [#7150](https://github.com/vant-ui/vant/issues/7150)
- NumberKeyboard: 修复 extra-key 插槽内无法触发 click 事件的问题 [#7193](https://github.com/vant-ui/vant/issues/7193)
- Tabs: 修复 offset-top 属性包含单位时切换标签后滚动位置错误的问题 [#7143](https://github.com/vant-ui/vant/issues/7143)
- Tag: 修复标签文字在小米手机上不居中的问题 [#7151](https://github.com/vant-ui/vant/issues/7151)

### [v2.10.6](https://github.com/vant-ui/vant/compare/v2.10.5...v2.10.6)

`2020-09-08`

**Bug Fixes**

- Calendar: 修复 readonly 属性在多选模式下无效的问题 [#7127](https://github.com/vant-ui/vant/issues/7127)
- CouponCell: 修复金额取值逻辑错误的问题 [#7123](https://github.com/vant-ui/vant/issues/7123)
- List: 修复第一个子元素的 scoped 样式无效的问题 [#7128](https://github.com/vant-ui/vant/issues/7128)

### [v2.10.5](https://github.com/vant-ui/vant/compare/v2.10.4...v2.10.5)

`2020-09-06`

**Feature**

- ActionSheet: 新增 closeable 属性 [#7099](https://github.com/vant-ui/vant/issues/7099)
- Area: 新增 readonly 属性 [#7106](https://github.com/vant-ui/vant/issues/7106)
- Calendar: 新增 readonly 属性 [#7115](https://github.com/vant-ui/vant/issues/7115)
- Calendar: 支持将默认选中的日期设置为空 [#7116](https://github.com/vant-ui/vant/issues/7116)
- DatetimePicker: 新增 readonly 属性 [#7107](https://github.com/vant-ui/vant/issues/7107)
- Picker: 新增 readonly 属性 [#7105](https://github.com/vant-ui/vant/issues/7105)

**Bug Fixes**

- Field: 修复 digit 类型可以输入负号的问题 [#7114](https://github.com/vant-ui/vant/issues/7114)
- Form: 修复 name 重复时 scrollToError 位置错误的问题 [#7102](https://github.com/vant-ui/vant/issues/7102)
- Form: 修复个别情况下校验状态错误的问题 [#7103](https://github.com/vant-ui/vant/issues/7103)
- Toast: 修复重复调用时无法清除的问题 [#7100](https://github.com/vant-ui/vant/issues/7100)

### [v2.10.4](https://github.com/vant-ui/vant/compare/v2.10.3...v2.10.4)

`2020-09-03`

**Feature**

- 设计资源：新增 Axure 元件库，感谢 [@axure-tczy](https://github.com/axure-tczy) 同学提供资源
- ActionSheet: 新增 description 插槽 [#7068](https://github.com/vant-ui/vant/issues/7068)
- Icon: 新增 share-o 图标 [ea6324](https://github.com/vant-ui/vant/commit/ea6324234beae3bc4a700c59523a7091add49480)
- Tabbar: 新增 before-change 属性 [#7081](https://github.com/vant-ui/vant/issues/7081)

**Bug Fixes**

- Calendar: 修复 row-height 对选中的日期不生效的问题 [#7046](https://github.com/vant-ui/vant/issues/7046)
- Field: 修复表单项的值为 0 会导致 required 校验不通过的问题 [#7050](https://github.com/vant-ui/vant/issues/7050)
- Icon: 修复 calendar-o 图标名称拼写错误 [#7080](https://github.com/vant-ui/vant/issues/7080)

### [v2.10.3](https://github.com/vant-ui/vant/compare/v2.10.2...v2.10.3)

`2020-08-25`

**Feature**

- Uploader: 新增 preview-cover 插槽的 index 参数 [#7036](https://github.com/vant-ui/vant/issues/7036)

**Style**

- Search: 左侧内边距调整为 12px [#7014](https://github.com/vant-ui/vant/issues/7014)
- Tabs: 底部条宽度固定为 40px [#7002](https://github.com/vant-ui/vant/issues/7002)
- Toast: 调整顶部展示/底部展示时的位置 [#7044](https://github.com/vant-ui/vant/issues/7044)

**Bug Fixes**

- Calendar: 修复使用 rem 单位时滚动条跳动的问题 [#7037](https://github.com/vant-ui/vant/issues/7037)
- Toast: 修复使用 get-container 属性可能导致 Toast 无法展示的问题 [#7032](https://github.com/vant-ui/vant/issues/7032)

### [v2.10.2](https://github.com/vant-ui/vant/compare/v2.10.1...v2.10.2)

`2020-08-12`

**Feature**

- Tab: 新增 @tab-line-height less 变量 [#6985](https://github.com/vant-ui/vant/issues/6985)

**Bug Fixes**

- Sku: 适配 sku.list 为空导致报错的问题 [#6991](https://github.com/vant-ui/vant/issues/6991)

### [v2.10.1](https://github.com/vant-ui/vant/compare/v2.10.0...v2.10.1)

`2020-08-10`

**Feature**

- Button: 新增 loading 插槽 [#6966](https://github.com/vant-ui/vant/issues/6966)
- Locale: 新增挪威语语言包 [#6962](https://github.com/vant-ui/vant/issues/6962)

**Style**

- ContactList: 适配 iOS 底部安全区 [#6970](https://github.com/vant-ui/vant/issues/6970)
- TabbarItem: 图标大小扩大为 22px [#6972](https://github.com/vant-ui/vant/issues/6972)

**Bug Fixes**

- AddressEdit: 修复在 safari 上左侧文字换行的问题 [#6969](https://github.com/vant-ui/vant/issues/6969)
- ContactEdit: 修复在 safari 上左侧文字换行的问题 [#6969](https://github.com/vant-ui/vant/issues/6969)
- Icon: 修复徽标数字不居中的问题 [#6975](https://github.com/vant-ui/vant/issues/6975) [#6952](https://github.com/vant-ui/vant/issues/6952)

### [v2.10.0](https://github.com/vant-ui/vant/compare/v2.9.4...v2.10.0)

`2020-08-07`

**Feature**

- AddressEdit: 新增 tel-maxlength 属性 [#6869](https://github.com/vant-ui/vant/issues/6869)
- Calendar: 默认开启 close-on-popstate 属性 [#6874](https://github.com/vant-ui/vant/issues/6874)
- Dialog: 默认开启 close-on-popstate 属性 [#6873](https://github.com/vant-ui/vant/issues/6873)
- Dialog: 新增 theme 属性，用于展示圆角按钮风格的弹窗 [#6921](https://github.com/vant-ui/vant/issues/6921)
- DropdownMenu: 新增 @dropdown-menu-box-shadow 变量 [6d0c54](https://github.com/vant-ui/vant/commit/6d0c54e8f4e9c1c9982778df8a36c7ac3fc2f905)
- Icon: 新增 back-top 图标 [#6931](https://github.com/vant-ui/vant/issues/6931)
- Icon: 新增 photo-fail 图标 [#6883](https://github.com/vant-ui/vant/issues/6883)
- ImagePreview: 默认开启 close-on-popstate 属性 [#6875](https://github.com/vant-ui/vant/issues/6875)
- NumberKeyboard: 新增 get-container 属性 [#6870](https://github.com/vant-ui/vant/issues/6870)

**Style**

- 新增 line-height 相关 LESS 变量 [#6862](https://github.com/vant-ui/vant/issues/6862)
- ActionSheet: 加载图标大小调整为 22px [#6847](https://github.com/vant-ui/vant/issues/6847)
- ActionSheet: 取消按钮文字颜色调整为 @gray-7 [#6846](https://github.com/vant-ui/vant/issues/6846)
- ActionSheet: 标题栏高度调整为 48px [#6856](https://github.com/vant-ui/vant/issues/6856)
- Cell: 图标与文字的间距调整为 4px [#6844](https://github.com/vant-ui/vant/issues/6844)
- CouponCell: 优化金额与符号的间隔 [#6888](https://github.com/vant-ui/vant/issues/6888)
- Dialog: 确认按钮的默认颜色调整为红色 [#6921](https://github.com/vant-ui/vant/issues/6921)
- DropdownMenu: 默认选中态颜色调整为红色 [#6863](https://github.com/vant-ui/vant/issues/6863)
- Field: 图标与文字的间距调整为 4px [#6849](https://github.com/vant-ui/vant/issues/6849)
- Image: 更新加载图标和错误图标 [#6890](https://github.com/vant-ui/vant/issues/6890)
- NumberKeyboard: 增加底部空白区域 [#6938](https://github.com/vant-ui/vant/issues/6938)
- NumberKeyboard: 调整按键高度为 28px [#6899](https://github.com/vant-ui/vant/issues/6899)
- NumberKeyboard: 标题栏高度调整为 40px [#6845](https://github.com/vant-ui/vant/issues/6845)
- Picker: 默认可见的选项个数调整为 6 个 [#6827](https://github.com/vant-ui/vant/issues/6827)
- Sidebar: 宽度调整为 80px [#6861](https://github.com/vant-ui/vant/issues/6861)
- Sku: 优化价格符号位置，与下方文案对齐 [#6911](https://github.com/vant-ui/vant/issues/6911)
- Tag: 更新文字大小和标签大小 [#6828](https://github.com/vant-ui/vant/issues/6828)
- Tab: 在横向滚动模式下默认不截断标题的文字 [bc0e45](https://github.com/vant-ui/vant/commit/bc0e45687a76f49355efa7fb2403184746575012)
- Tab: 移除默认边框 [69ac60](https://github.com/vant-ui/vant/commit/69ac602bc21b445fb88783303d00bd65e4dc5ae2)
- Tab: 优化标签间距 [90e678](https://github.com/vant-ui/vant/commit/90e678756aecddee2beb522e38017c68f616b387) [8027f4](https://github.com/vant-ui/vant/commit/8027f46f3ff33b200cf022e5f9a2693293a1bb16)
- Toast: 更新背景色 [#6848](https://github.com/vant-ui/vant/issues/6848)
- Toast: 图标大小调整为 36px [#6857](https://github.com/vant-ui/vant/issues/6857)

**Bug Fixes**

- AddressEdit: 修复个别情况下按钮渲染错误的问题 [#6942](https://github.com/vant-ui/vant/issues/6942)
- Calendar: 修复初始化日历时页面滚动条位置错误的问题 [#6926](https://github.com/vant-ui/vant/issues/6926)
- Field: 修复 rule 的 message 为空时无法重置表单状态的问题 [#6867](https://github.com/vant-ui/vant/issues/6867)
- Icon: 修复图片图标加载过程中高度异常的问题 [#6858](https://github.com/vant-ui/vant/issues/6858)
- ImagePreview: 修复 iOS 下旋转屏幕时布局错误的问题 [#6825](https://github.com/vant-ui/vant/issues/6825)
- Info: 修复 badge 的数字在 iOS 上不居中的问题 [#6952](https://github.com/vant-ui/vant/issues/6952)
- NumberKeyboard: 修复在低版本 safari 上按键高度错误的问题 [#6937](https://github.com/vant-ui/vant/issues/6937)
- Picker: 修复 defaultIndex 在个别情况下取值逻辑错误的问题 [#6948](https://github.com/vant-ui/vant/issues/6948)
- Sku: 修复价格较长时顶部图片的宽度被压缩的问题 [#6949](https://github.com/vant-ui/vant/issues/6949)

### [v2.9.4](https://github.com/vant-ui/vant/compare/v2.9.3...v2.9.4)

`2020-07-29`

**Feature**

- ShareSheet: 新增 className 选项，用于自定义选项的类名 [#6886](https://github.com/vant-ui/vant/issues/6886)
- Sku: 优化日期选择范围 [#6879](https://github.com/vant-ui/vant/issues/6879)

**Bug Fixes**

- Popup: 修复在个别情况下滚动锁定无法解除的问题 [#6892](https://github.com/vant-ui/vant/issues/6892)
- Stepper: 修复在 safari 上快速点击按钮时会导致页面滚动的问题 [#6882](https://github.com/vant-ui/vant/issues/6882)

### [v2.9.3](https://github.com/vant-ui/vant/compare/v2.9.2...v2.9.3)

`2020-07-19`

**Feature**

- Tabs: 新增 before-change 属性，用于在切换标签前执行校验逻辑 [#6817](https://github.com/vant-ui/vant/issues/6817)
- Sticky: offset-top 属性支持传入 vw 单位 [#6816](https://github.com/vant-ui/vant/issues/6816)
- Picker: item-height 属性支持传入 vw 单位 [#6816](https://github.com/vant-ui/vant/issues/6816)
- Sku: 新增对手机号留言的格式化处理 [19e0d0](https://github.com/vant-ui/vant/commit/19e0d0df0e52cb9b683aef1f7f09d9c4ae425b97)
- Tab: 新增 scrollTo 方法，用于在滚动导航模式下滚动到特定位置 [#6800](https://github.com/vant-ui/vant/issues/6800)
- Uploader: 新增 preview-options 属性，用于自定义全屏图片预览的配置项 [#6810](https://github.com/vant-ui/vant/issues/6810)

**Bug Fixes**

- Calendar: 修复在个别情况下内容渲染失败的问题 [#6812](https://github.com/vant-ui/vant/issues/6812)
- ImagePreview: 修复在个别情况下图片错位的问题 [#6811](https://github.com/vant-ui/vant/issues/6811)
- NumberKeyboard: 修复在旧版本 iOS 上按键内容不居中的问题 [#6804](https://github.com/vant-ui/vant/issues/6804)
- Slider: 修复垂直模式下滑动动画失效的问题 [#6786](https://github.com/vant-ui/vant/issues/6786)

### [v2.9.2](https://github.com/vant-ui/vant/compare/v2.9.1...v2.9.2)

`2020-07-14`

**Feature**

- Calendar: 新增 first-day-of-week 属性 [#6468](https://github.com/vant-ui/vant/issues/6468)
- DatetimePicker: 新增 columns-order 属性 [#6672](https://github.com/vant-ui/vant/issues/6672) [#6768](https://github.com/vant-ui/vant/issues/6768)

**Bug Fixes**

- Tab: 修复标签禁用时仍会触发路由跳转的问题 [#6782](https://github.com/vant-ui/vant/issues/6782)
- Sku: 修复留言区域 label 颜色不一致的问题 [#6771](https://github.com/vant-ui/vant/issues/6771)
- Sku: 修复留言区域 label 里包含较长的单词时未自动换行的问题 [#6777](https://github.com/vant-ui/vant/issues/6777)

### [v2.9.1](https://github.com/vant-ui/vant/compare/v2.9.0...v2.9.1)

`2020-07-12`

**Feature**

- DatetimePicker: 新增 datehour 类型，用于选择年月日和小时 [#6732](https://github.com/vant-ui/vant/issues/6732)
- Field: 新增 clear-trigger 属性，用于控制清除按钮展示时机 [#6699](https://github.com/vant-ui/vant/issues/6699)
- Search: 新增 clear-trigger 属性，用于控制清除按钮展示时机 [#6700](https://github.com/vant-ui/vant/issues/6700)
- Uploader: 新增 preview-cover 插槽，用于自定义覆盖在预览区域上方的内容 [#6707](https://github.com/vant-ui/vant/issues/6707)
- ShareSheet: 新增 click-overlay 事件，在点击遮罩层时触发 [#6765](https://github.com/vant-ui/vant/issues/6765)
- Stepper: 新增 allow-empty 属性，用于控制是否允许输入空值 [#6759](https://github.com/vant-ui/vant/issues/6759)
- Steps: 新增 inactive-color 属性，用于设置未激活状态颜色 [#6758](https://github.com/vant-ui/vant/issues/6758)
- SubmitBar: 新增 button-color 属性，用于设置按钮颜色 [#6757](https://github.com/vant-ui/vant/issues/6757)
- Sku: 优化留言栏时间选择交互 [8d29e5](https://github.com/vant-ui/vant/commit/8d29e5c8c6df278800865596f285c17029150963) [7343e5](https://github.com/vant-ui/vant/commit/7343e55409900635a0e39063edb9f67493048a54)

**Style**

- ActionSheet: 标题和二级标题调整为上下排列 [#6756](https://github.com/vant-ui/vant/issues/6756)
- Uploader: 移除上传区域和图片预览的圆角 [#6748](https://github.com/vant-ui/vant/issues/6748)
- Uploader: 更新删除按钮样式 [#6750](https://github.com/vant-ui/vant/issues/6750)

**Bug Fixes**

- Calendar: 修复个别情况下日历标题不更新的问题 [#6723](https://github.com/vant-ui/vant/issues/6723)
- Checkbox: 修复动态设置 bind-group 时不生效的问题 [#6730](https://github.com/vant-ui/vant/issues/6730)
- Field: 修复在 iOS 下 label 文字超过 5 个时会换行的问题 [#6743](https://github.com/vant-ui/vant/issues/6743)
- Image: 修复 SSR 时 LazyLoad 属性存在内存泄露的问题 [#6721](https://github.com/vant-ui/vant/issues/6721)
- ImagePreview: 修复屏幕大小变化时图片宽高比展示错误的问题 [#6760](https://github.com/vant-ui/vant/issues/6760)
- ImagePreview: 修复 swipeTo 方法类型定义错误 [#6727](https://github.com/vant-ui/vant/issues/6727)
- Picker: 修复惯性滚动过程中点击选项会导致选中结果错误的问题 [#6724](https://github.com/vant-ui/vant/issues/6724)
- Popup: 修复 lock-scroll 在个别场景下不生效的问题 [#6698](https://github.com/vant-ui/vant/issues/6698)

### [v2.9.0](https://github.com/vant-ui/vant/compare/v2.8.7...v2.9.0)

`2020-07-03`

**Feature**

- Sku: 新增大图预览模式，可以通过 largeImageMode 选项开启 [#6598](https://github.com/vant-ui/vant/issues/6598)
- Sku: 新增 lazy-load 属性，用于控制是否开启大图懒加载 [#6598](https://github.com/vant-ui/vant/issues/6598)
- Sku: 新增 show-header-image 属性，用于控制是否显示头部图片 [#6598](https://github.com/vant-ui/vant/issues/6598)
- Sku: 默认开启 close-on-click-overlay 属性 [#6631](https://github.com/vant-ui/vant/issues/6631)
- Icon: 新增 enlarge 扩大图标 [1c97b1](https://github.com/vant-ui/vant/commit/1c97b1837f3f16f339773133b5e78b8a200c57f5)
- Image: 新增 default 默认插槽 [#6613](https://github.com/vant-ui/vant/issues/6613)
- ImagePreview: 新增 swipeTo 方法 [#6596](https://github.com/vant-ui/vant/issues/6596)
- ImagePreview: 新增 get-container 属性 [39b5be](https://github.com/vant-ui/vant/commit/39b5beeac0d4a7e74866cb92eb9e4644872cf41a)
- NoticeBar: 优化重新开始滚动的间隔 [022196](https://github.com/vant-ui/vant/commit/02219625fb94384865b79cf27ecea5ae0c4f3bb0)
- TreeSelect: 新增 selected-icon 属性 [#6615](https://github.com/vant-ui/vant/issues/6615)

**Style**

- Button: 调整 small 和 mini 按钮的样式，移除最小宽度限制 [#6371](https://github.com/vant-ui/vant/issues/6371)
- Cell: 内侧边框增加 16px 的右边距 [#6686](https://github.com/vant-ui/vant/issues/6686)
- ActionSheet: 顶部描述文字的颜色调整为 gray-6 [#6586](https://github.com/vant-ui/vant/issues/6586)
- AddressEdit: 省市区弹窗调整为圆角样式 [#6584](https://github.com/vant-ui/vant/issues/6584)
- AddressEdit: 表单文本宽度调整为 4em [#6591](https://github.com/vant-ui/vant/issues/6591)
- ContactEdit: 表单文本宽度调整为 4em [a77ebe](https://github.com/vant-ui/vant/commit/a77ebe11d722a3f242ef8e4125bb94629a56b81f)
- Field: 左侧文本颜色调整为 gray-7 [#6581](https://github.com/vant-ui/vant/issues/6581)
- Field: 左侧文本宽度调整为 6em [#6589](https://github.com/vant-ui/vant/issues/6589) [#6583](https://github.com/vant-ui/vant/issues/6583)
- ImagePreview: 调整页码位置，与关闭图标对齐 [#6650](https://github.com/vant-ui/vant/issues/6650)
- Picker: 优化选项禁用时的光标效果 [#6579](https://github.com/vant-ui/vant/issues/6579)
- Rate: 默认图标颜色由黄色调整为红色 [#6373](https://github.com/vant-ui/vant/issues/6373)
- Uploader: 更新上传失败提示图标 [#6653](https://github.com/vant-ui/vant/issues/6653)

**Bug Fixes**

- Field: 修复左侧文本中较长的英文单词无法换行的问题 [#6590](https://github.com/vant-ui/vant/issues/6590)
- ImagePreview: 修复在 safari 浏览器上长按图标时缩放效果异常的问题 [#6660](https://github.com/vant-ui/vant/issues/6660)
- ImagePreview: 修复图片缩放时可能出现位置错误的问题 [#6656](https://github.com/vant-ui/vant/issues/6656)
- NumberKeyboard: 修复在 iOS 系统下存在点击延迟的问题 [#6667](https://github.com/vant-ui/vant/issues/6667)
- Picker: 修复在级联模式下无法禁用选项的问题 [#6580](https://github.com/vant-ui/vant/issues/6580)
- Picker: 修复开启 rem 转换时可能出现选项偏移的问题 [#6663](https://github.com/vant-ui/vant/issues/6663)
- Stepper: 修复个别情况下按钮禁用状态计算错误的问题 [#6652](https://github.com/vant-ui/vant/issues/6652)

### [v2.8.7](https://github.com/vant-ui/vant/compare/v2.8.6...v2.8.7)

`2020-06-19`

**Feature**

- Dialog: 新增 allow-html 属性，用于控制是否允许渲染 HTML 内容 [#6568](https://github.com/vant-ui/vant/issues/6568)
- Field: 新增 format-trigger 属性，用于控制 formatter 触发时机 [#6566](https://github.com/vant-ui/vant/issues/6566)
- Form: 允许在 rules 中不传入 message 字段 [#6536](https://github.com/vant-ui/vant/issues/6536)
- Sticky: 支持 offset-top 属性传入 rem 单位 [#6556](https://github.com/vant-ui/vant/issues/6556)

**Style**

- Field: 移除字数统计到达上限时的红色高亮效果 [#6545](https://github.com/vant-ui/vant/issues/6545)
- Picker: 新增 @picker-option-height LESS 变量 [#6571](https://github.com/vant-ui/vant/issues/6571)

**Bug Fixes**

- Field: 修复展示 null 的问题 [#6542](https://github.com/vant-ui/vant/issues/6542)
- ImagePreview: 修复放大时拖拽区域过大的问题 [#6574](https://github.com/vant-ui/vant/issues/6574)
- NoticeBar: 修复在部分情况下无法重新播放的问题 [e8bd24](https://github.com/vant-ui/vant/commit/e8bd24265d6e36ed61ea353108d57d75602d2f08)

### [v2.8.6](https://github.com/vant-ui/vant/compare/v2.8.5...v2.8.6)

`2020-06-13`

**Feature**

- Stepper: 新增 placeholder 属性 [#6519](https://github.com/vant-ui/vant/issues/6519)
- Picker: 选项高度支持配置 rem 单位 [#6462](https://github.com/vant-ui/vant/issues/6462)
- NoticeBar: 支持在内容较短时开启滚动播放 [7b0546](https://github.com/vant-ui/vant/commit/7b0546dbba7425988ae2b4d1765fe20e907c893f)

**Style**

- Field: 更新禁用状态下的文本颜色 [#6534](https://github.com/vant-ui/vant/issues/6534)

**Bug Fixes**

- Calendar: 修复范围选择时无法快捷选择同一天的问题 [#6504](https://github.com/vant-ui/vant/issues/6504)
- CollapseItem: 修复无法通过 border 属性隐藏内边框的问题 [#6533](https://github.com/vant-ui/vant/issues/6533)
- Field: 修复 v-model 绑定值变化时 formatter 函数没生效的问题 [#6490](https://github.com/vant-ui/vant/issues/6490)
- ImagePreview: 修复在 iOS 上放大后图片变模糊的问题 [#6496](https://github.com/vant-ui/vant/issues/6496)
- Picker: 修复级联选择时 defaultIndex 在个别情况下取值错误的问题 [#6473](https://github.com/vant-ui/vant/issues/6473)
- Tabbar: 修复使用 vue-router 3.3 以上版本时出现重复路由提示的问题 [#6474](https://github.com/vant-ui/vant/issues/6474)

### [v2.8.5](https://github.com/vant-ui/vant/compare/v2.8.4...v2.8.5)

`2020-06-04`

**Feature**

- Notify: 支持组件调用 [#6453](https://github.com/vant-ui/vant/issues/6453)
- Skeleton: 新增 round 属性，用于展示圆角风格 [#6441](https://github.com/vant-ui/vant/issues/6441)
- ShareSheet: 支持在 option 中配置 description 属性 [#6460](https://github.com/vant-ui/vant/issues/6460)
- DropdownItem: 新增 lazy-render 属性，由于控制是否开启延迟渲染 [#6454](https://github.com/vant-ui/vant/issues/6454)

**Bug Fixes**

- Popup: 修复重复弹出时遮罩层 z-index 未正确更新的问题 [#6429](https://github.com/vant-ui/vant/issues/6429)
- Button: 修复设置 loading 时无法与其他按钮垂直对齐的问题 [#6413](https://github.com/vant-ui/vant/issues/6413) [#6414](https://github.com/vant-ui/vant/issues/6414)
- NoticeBar: 修复在 keep-alive 内重新渲染时无法正确滚动的问题 [d21420](https://github.com/vant-ui/vant/commit/d21420b7d2357c4c0b47bc0f38b48e57d7fd9b81)
- Field: 修复 value 为 null 且开启 show-word-limit 时出现报错的问题 [#6419](https://github.com/vant-ui/vant/issues/6419)

### [v2.8.4](https://github.com/vant-ui/vant/compare/v2.8.3...v2.8.4)

`2020-05-28`

**Feature**

- AddressList: 增加底部安全区适配 [#6355](https://github.com/vant-ui/vant/issues/6355)
- DatetimePicker: 新增 month-day 类型，用于选择月份和日期 [#6395](https://github.com/vant-ui/vant/issues/6395)
- Popup: 现在每个弹层会单独创建一个遮罩层，而不是共用一个遮罩层 [#6357](https://github.com/vant-ui/vant/issues/6357)

**Style**

- ActionSheet: subname 的颜色调整为 gray-6 [e54c11](https://github.com/vant-ui/vant/commit/e54c11d55244e65246df7eddd7751983dbc4d331)
- ActionSheet: 移除选项之间的分隔线 [8db218](https://github.com/vant-ui/vant/commit/8db218e9c0ca6905491a019cf983a0269f3aea8c)
- Cell: 降低边框选择器的 CSS 优先级，便于覆盖样式 [#6359](https://github.com/vant-ui/vant/issues/6359)
- Collapse: 调整边框与左右两侧的边距 [#6361](https://github.com/vant-ui/vant/issues/6361)
- Collapse: 内容的字号增大为 14px [#6358](https://github.com/vant-ui/vant/issues/6358)

**Bug Fixes**

- Area: 修复区列表为空时未默认选中第一个城市的问题 [#6356](https://github.com/vant-ui/vant/issues/6356)
- Field: 修复设置 error 为 false 无法禁用错误提示颜色的问题 [#6382](https://github.com/vant-ui/vant/issues/6382)
- GoodsAction: 修复只有一个按钮时圆角大小错误的问题 [#6347](https://github.com/vant-ui/vant/issues/6347)
- Sidebar: 修复 v-model 绑定的值变化时不会触发 change 事件的问题 [#6383](https://github.com/vant-ui/vant/issues/6383)

### [v2.8.3](https://github.com/vant-ui/vant/compare/v2.8.2...v2.8.3)

`2020-05-21`

**Feature**

- Form: 新增 submit-on-enter 属性，用于控制回车时是否提交表单 [#6336](https://github.com/vant-ui/vant/issues/6336)
- Form: 优化 scrollToField 方法，支持通过传参来控制滚动位置 [#6335](https://github.com/vant-ui/vant/issues/6335)
- Field: 调整 placeholder 的色值为 @gray-5 [#6304](https://github.com/vant-ui/vant/issues/6304)
- Field: 使用 digit 类型时，只能在第一位输入减号 [#6303](https://github.com/vant-ui/vant/issues/6303)
- Picker: 优化 methods 的类型定义，支持泛型 [#6315](https://github.com/vant-ui/vant/issues/6315)

**Bug Fixes**

- Button: 修复在低版本 iOS 下按钮文字不居中的问题 [#6325](https://github.com/vant-ui/vant/issues/6325)
- Calendar: 修复范围选择到同一天时 color 属性不生效的问题 [#6331](https://github.com/vant-ui/vant/issues/6331)

### [v2.8.2](https://github.com/vant-ui/vant/compare/v2.8.1...v2.8.2)

`2020-05-17`

**Feature**

- Field: 新增 extra 插槽 [#6290](https://github.com/vant-ui/vant/issues/6290)
- Grid: 新增 direction 属性 [#6256](https://github.com/vant-ui/vant/issues/6256)
- Calendar: 新增 month-show 事件 [#6292](https://github.com/vant-ui/vant/issues/6292)
- NumberKeyboard: 支持定义两个 extra-key [#6276](https://github.com/vant-ui/vant/issues/6276)
- Stepper: 新增 theme 属性，用于展示圆角风格步进器 [#6282](https://github.com/vant-ui/vant/issues/6282)

**Style**

- Rate: 更新禁用状态下的图标颜色 [#6253](https://github.com/vant-ui/vant/issues/6253)
- Sku: 优化内部分割线的布局 [#6272](https://github.com/vant-ui/vant/issues/6272)
- Sku: 价格符号由居中对齐调整为底对齐 [#6274](https://github.com/vant-ui/vant/issues/6274)
- NoticeBar: 图标宽度由 22px 调整为 24px [#6280](https://github.com/vant-ui/vant/issues/6280)

**Bug Fixes**

- Field: 修复 textarea 无法通过回车换行的问题 [#6263](https://github.com/vant-ui/vant/issues/6263)
- NoticeBar: 修复 replay 事件只能触发一次的问题，内部动画机制由 animation 调整为 transition [#6293](https://github.com/vant-ui/vant/issues/6293)

### [v2.8.1](https://github.com/vant-ui/vant/compare/v2.8.1-beta.0...v2.8.1)

`2020-05-09`

**Feature**

- Calendar: 新增 lazy-render 属性，用于控制是否开启延迟渲染 [#6245](https://github.com/vant-ui/vant/issues/6245)
- Field: 新增 click-input 事件，在点击输入框时触发 [#6239](https://github.com/vant-ui/vant/issues/6239)
- Sku: 新增 sku-reset 事件，在规格重置时触发 [#6220](https://github.com/vant-ui/vant/issues/6220)
- GoodsActionButton: 适配系统字体放大 [b1dcf3](https://github.com/vant-ui/vant/commit/b1dcf36263ae7a19197f2c162e67f220dd171047)

**Bug Fixes**

- Button: 修复文字在部分机型上不居中的问题 [8c53db](https://github.com/vant-ui/vant/commit/8c53db040dd0dfff60eca1ac284d98f13b4e4ce6)
- Field: 修复回车键会触发表单提交的问题 [#6240](https://github.com/vant-ui/vant/issues/6240)
- Step: 修复 active-color 属性对小圆点颜色不生效的问题 [#6229](https://github.com/vant-ui/vant/issues/6229)
- Stepper: 修复输入负数时格式化错误的问题 [#6238](https://github.com/vant-ui/vant/issues/6238)
- Stepper: 修复个别情况下会展示 NaN 的问题 [7327a4](https://github.com/vant-ui/vant/commit/7327a481d18271393e25b17d4402dad6d336bb3a)
- Stepper: 修复设置 disable-input 属性后在部分浏览器上仍会触发 focus 事件的问题 [c6024b](https://github.com/vant-ui/vant/commit/c6024b18b4191a3a56db0bed1ababa48420c0946)

### [v2.8.0](https://github.com/vant-ui/vant/compare/v2.7.1...v2.8.0)

`2020-05-05`

**适配系统字体放大**

 部分手机用户会使用<b>系统或微信提供的字体放大功能</b>，开启该功能后，组件的 font-size 和 line-height 会等比例放大，导致部分组件出现样式偏移的问题，在 2.8.0 版本中，我们针对这个场景进行了适配，使得所有组件在字体缩放后仍保持正确的布局，改动涉及以下组件：

- ActionSheet [#6175](https://github.com/vant-ui/vant/issues/6175)
- Checkbox [#6168](https://github.com/vant-ui/vant/issues/6168)
- NavBar [7effb7](https://github.com/vant-ui/vant/commit/7effb7cf6cf59a8db1eb77fa16692712de4a18ba)
- NoticeBar [#6177](https://github.com/vant-ui/vant/issues/6177)
- NumberKeyboard [#6179](https://github.com/vant-ui/vant/issues/6179)
- Pagination [#6178](https://github.com/vant-ui/vant/issues/6178)
- PasswordInput [#6176](https://github.com/vant-ui/vant/issues/6176)
- Picker [#6174](https://github.com/vant-ui/vant/issues/6174) [#6205](https://github.com/vant-ui/vant/issues/6205)
- Radio [#6173](https://github.com/vant-ui/vant/issues/6173)
- Tab [#6209](https://github.com/vant-ui/vant/issues/6209)

**Style**

- Button: 使用 flex 进行内容居中，display 由 inline-block 调整为 inline-flex [#6180](https://github.com/vant-ui/vant/issues/6180)
- Picker: 优化顶部操作栏的样式，调整操作按钮颜色 [#6214](https://github.com/vant-ui/vant/issues/6214)
- CouponList: 新增 @coupon-list-close-button-height 样式变量 [18a0c5](https://github.com/vant-ui/vant/commit/18a0c545ec881eb296ba6cc11dfaa12febd79e5c)

**Feature**

- Calendar: 新增 unselect 事件，在取消选中时触发 [#6198](https://github.com/vant-ui/vant/issues/6198)
- Calendar: 支持在多选模式下使用 max-range 属性 [#6202](https://github.com/vant-ui/vant/issues/6202)
- Field: 新增 colon 属性，用于配置是否显示冒号 [#6195](https://github.com/vant-ui/vant/issues/6195)
- Locale: 新增罗马尼亚语配置文件 [#6193](https://github.com/vant-ui/vant/issues/6193)
- ShareSheet: 优化无障碍访问 [#6208](https://github.com/vant-ui/vant/issues/6208)

**Bug Fixes**

- Layout: 修复设置 gutter 属性后间距错误的问题 [#6197](https://github.com/vant-ui/vant/issues/6197) [#6143](https://github.com/vant-ui/vant/issues/6143)
- NoticeBar: 修复动态修改 scrollable 属性后未正确生效的问题 [#6190](https://github.com/vant-ui/vant/issues/6190)
- ShareSheet: 修复在部分浏览器上底部间距错误的问题 [#6207](https://github.com/vant-ui/vant/issues/6207)
- Tab: 修复文字截断时无法正确展示徽标的问题 [#6209](https://github.com/vant-ui/vant/issues/6209)

### [v2.7.1](https://github.com/vant-ui/vant/compare/v2.7.0...v2.7.1)

`2020-04-28`

**Bug Fixes**

- 修复 NavBar 图标不居中的问题 [#6147](https://github.com/vant-ui/vant/issues/6147)

### [v2.7.0](https://github.com/vant-ui/vant/compare/v2.6.3...v2.7.0)

`2020-04-28`

**Style**

- NumberKeyboard: 升级组件样式 [#6149](https://github.com/vant-ui/vant/issues/6149) [#6151](https://github.com/vant-ui/vant/issues/6151) [3188b4](https://github.com/vant-ui/vant/commit/3188b4d25bb6e60ed5de930ec8947929a7577dd3)

<img src="https://b.yzcdn.cn/vant/keyboard-style-04281448.png" style="width: 600px; height: 394px;">

- 新增全局默认字体 [#6126](https://github.com/vant-ui/vant/issues/6126)
- DropdownMenu: 增加阴影效果 [7db744](https://github.com/vant-ui/vant/commit/7db74490956ec9d4c742a885e436dc6915f1f9dc)
- Sidebar: 优化左侧选中条的样式 [a31032](https://github.com/vant-ui/vant/commit/a31032e0d63956b2e9f0c75c8a85ca662fe42545)
- Toast: 圆角大小由 4px 调整为 8px [2364c4](https://github.com/vant-ui/vant/commit/2364c4f526912433abf5ee2f36e2148beea7140b)
- TreeSelect: 选中态的图标从 checked 更换为 success 图标 [5b72e4](https://github.com/vant-ui/vant/commit/5b72e4339347a710620bf630f1bc8ee09511d63c)

**Feature**

- NoticeBar: 新增 start 方法 [#6069](https://github.com/vant-ui/vant/issues/6069)
- ImagePreview: 双击缩放的间隔从 300 毫秒调整为 250 毫秒 [#6136](https://github.com/vant-ui/vant/issues/6136)
- NumberKeyboard: 新增左下角默认的键盘图标，点击后收起键盘 [#6152](https://github.com/vant-ui/vant/issues/6152)
- NumberKeyboard: 新增 close-button-loading 属性，用于展示加载中状态 [#6158](https://github.com/vant-ui/vant/issues/6158)
- uploader: 多选时自动过滤超出大小限制的图片 [#6150](https://github.com/vant-ui/vant/issues/6150)

**Bug Fixes**

- Layout: 修复设置 gutter 后元素宽度溢出屏幕的问题 [#6143](https://github.com/vant-ui/vant/issues/6143)
- Tab: 修复子组件顺序错误的问题 [#6140](https://github.com/vant-ui/vant/issues/6140)
- Uploader: 修复动态修改 file.message 未触发视图更新的问题 [#6142](https://github.com/vant-ui/vant/issues/6142)
- NavBar: 修复设置顶部内边距后两侧按钮定位错误的问题 [#6147](https://github.com/vant-ui/vant/issues/6147)
- types: 修复在 TSX 中使用组件时提示类型错误的问题 [#6148](https://github.com/vant-ui/vant/issues/6148)

### [v2.6.3](https://github.com/vant-ui/vant/compare/v2.6.2...v2.6.3)

`2020-04-20`

**Bug Fixes**

- Tab: 修复在部分浏览器上可能出现顺序错乱的问题 [#6100](https://github.com/vant-ui/vant/issues/6100)
- Tab: 修复动态插入标签时可能出现渲染错误的问题 [#6101](https://github.com/vant-ui/vant/issues/6101)

### [v2.6.2](https://github.com/vant-ui/vant/compare/v2.6.1...v2.6.2)

`2020-04-18`

**Feature**

- Empty: 支持在离线环境下使用 network 图片 [#6055](https://github.com/vant-ui/vant/issues/6055)
- NoticeBar: 新增 replay 事件，在每次滚动结束时触发 [#6079](https://github.com/vant-ui/vant/issues/6079)
- Overlay: 新增 lock-scroll 属性，用于控制是否锁定背景滚动 [#6082](https://github.com/vant-ui/vant/issues/6082)
- Uploader: 新增 lazy-load 属性，用于开启图片懒加载 [#6083](https://github.com/vant-ui/vant/issues/6083)

**Bug Fixes**

- Checkbox: 修复在 click 事件的回调中获取到的 value 未改变的问题 [#6066](https://github.com/vant-ui/vant/issues/6066)
- Picker: 修复级联模式下使用 setColumnValues 方法导致报错的问题 [#6080](https://github.com/vant-ui/vant/issues/6080)
- Slider: 修复在垂直模式下使用 bar-height 后样式错误的问题 [#6065](https://github.com/vant-ui/vant/issues/6065)
- Swipe: 修复元素隐藏且触发 resize 事件后渲染错误的问题 [#6084](https://github.com/vant-ui/vant/issues/6084)

### [v2.6.1](https://github.com/vant-ui/vant/compare/v2.6.0...v2.6.1)

`2020-04-14`

**Feature**

- AddressEdit: 新增 area-placeholder 属性 [#6023](https://github.com/vant-ui/vant/issues/6023)
- ImagePreview: 支持通过局部注册的方式使用 [#6031](https://github.com/vant-ui/vant/issues/6031)

**Bug Fixes**

- Calendar: 修复 default-date 默认值为 min-date 而不是今天的问题 [#6025](https://github.com/vant-ui/vant/issues/6025) [#6028](https://github.com/vant-ui/vant/issues/6028)
- 修复部分组件在 SSR 时报错 `Cannot read property 'children' of null` 的问题 [#6046](https://github.com/vant-ui/vant/issues/6046)

### [v2.6.0](https://github.com/vant-ui/vant/compare/v2.5.9...v2.6.0)

`2020-04-09`

**Feature**

- 新增 ShareSheet 分享面板组件，用于进行分享操作 [#6019](https://github.com/vant-ui/vant/issues/6019)
- 新增 Empty 空状态组件，作为空状态时的占位提示 [#6010](https://github.com/vant-ui/vant/issues/6010)

<img src="https://img01.yzcdn.cn/vant/component-preview-2.6.png" style="width: 540px;">

**Feature**

- Form: 新增 show-error 属性，用于控制展示错误提示 [#5941](https://github.com/vant-ui/vant/issues/5941)
- Tabbar: 新增 placeholder 属性，用于在吸底时生成占位元素 [#5979](https://github.com/vant-ui/vant/issues/5979)
- Sku: 默认开启底部安全区适配 [#5960](https://github.com/vant-ui/vant/issues/5960)
- SubmitBar: 默认开启底部安全区适配 [#5956](https://github.com/vant-ui/vant/issues/5956)
- GoodsAction: 默认开启底部安全区适配 [#5955](https://github.com/vant-ui/vant/issues/5955)
- Tabbar: 固定在底部时默认开启底部安全区适配 [#5968](https://github.com/vant-ui/vant/issues/5968)
- Swipe: 允许一次滚动多页轮播 [#5953](https://github.com/vant-ui/vant/issues/5953)
- Calendar: 设置 max-range 后，选择超出范围时会自动选择到最大范围 [#5992](https://github.com/vant-ui/vant/issues/5992)

**Improvement**

- NavBar: 优化点击反馈效果 [#5949](https://github.com/vant-ui/vant/issues/5949)
- Popup: 优化退场动画效果 [#5954](https://github.com/vant-ui/vant/issues/5954)
- Picker: 优化惯性滑动速率 [#5951](https://github.com/vant-ui/vant/issues/5951)
- Swipe: 优化滚动手势体验，滑动较慢时会回弹到原位置 [#6003](https://github.com/vant-ui/vant/issues/6003)
- TreeSelect: 更新左侧栏背景色，增强区分度 [#5991](https://github.com/vant-ui/vant/issues/5991)

**Bug Fixes**

- Button: 修复 icon-prefix 属性不生效的问题 [#5947](https://github.com/vant-ui/vant/issues/5947)
- Calendar: 修复 keep-alive 时可能出现渲染空白的问题 [#5978](https://github.com/vant-ui/vant/issues/5978)
- Form: 修复动态插入 Field 时校验顺序错误的问题 [b8dea3](https://github.com/vant-ui/vant/commit/b8dea3c13b7dbf6533169653c493a3156c07f1d4)
- NavBar: 修复图标在部分机型上不居中的问题 [#5948](https://github.com/vant-ui/vant/issues/5948)
- Stepper: 修复 disable-input 属性在低版本 safari 上不生效的问题 [#5976](https://github.com/vant-ui/vant/issues/5976)

### [v2.5.9](https://github.com/vant-ui/vant/compare/v2.5.8...v2.5.9)

`2020-03-31`

**Feature**

- AddressEdit: 新增 click-area 事件 [#5939](https://github.com/vant-ui/vant/issues/5939)
- NavBar: 新增 placeholder 属性 [#5938](https://github.com/vant-ui/vant/issues/5938)
- Steps: 新增 click-step 事件 [#5937](https://github.com/vant-ui/vant/issues/5937)

**Bug Fixes**

- NumberKeyboard: 修复 show-delete-key 属性不生效的问题 [#5935](https://github.com/vant-ui/vant/issues/5935)
- Toast: 修复在部分机型上高度错误的问题 [#5931](https://github.com/vant-ui/vant/issues/5931)
- Sticky: 修复 SSR 时访问 window 对象导致报错的问题 [#5958](https://github.com/vant-ui/vant/issues/5958)

### [v2.5.8](https://github.com/vant-ui/vant/compare/v2.5.7...v2.5.8)

`2020-03-27`

**Feature**

- 新增 Webstorm 的 web-types.json 定义文件，提供智能提示 [#5900](https://github.com/vant-ui/vant/issues/5900)
- Form: 新增 show-error-message 属性 [#5927](https://github.com/vant-ui/vant/issues/5927)
- ImagePreview: 开启延迟渲染，提高渲染性能 [#5879](https://github.com/vant-ui/vant/issues/5879)
- Swipe: 新增 lazy-render 属性 [365f2b](https://github.com/vant-ui/vant/commit/365f2b16f7d9592f92413e206439585468a8a1c7)

**Improvement**

- Circle: 优化文字边距 [10f32d](https://github.com/vant-ui/vant/commit/10f32d6619199e99ff743cb5425db1e54e495fd0)
- Sidebar: 新增 overflow-y: auto 样式 [#5921](https://github.com/vant-ui/vant/issues/5921)
- Swipe: 调整为 flex 布局 [f701de](https://github.com/vant-ui/vant/commit/f701de9e58db5f88a582e3277c97a0c9ca99eec4)

**Bug Fixes**

- Calendar: 修复 multiple 模式下 default-date 格式错误的问题 [#5907](https://github.com/vant-ui/vant/issues/5907)
- PullRefresh: 修复内部元素高度未填满容器的问题 [#5878](https://github.com/vant-ui/vant/issues/5878)
- Sticky: 修复切换显示状态时可能出现定位错误的问题 [#5888](https://github.com/vant-ui/vant/issues/5888)
- Swipe: 修复屏幕 resize 后可能导致轮播位置错误的问题 [#5922](https://github.com/vant-ui/vant/issues/5922)

### [v2.5.7](https://github.com/vant-ui/vant/compare/v2.5.6...v2.5.7)

`2020-03-20`

**Bug Fixes**

- Locale: 修复日语配置文件命名错误的问题 [e8c88a](https://github.com/vant-ui/vant/commit/e8c88a380217eb48cef8aa7dc29d378a1031120a)

### [v2.5.6](https://github.com/vant-ui/vant/compare/v2.5.5...v2.5.6)

`2020-03-20`

**Feature**

- Calendar: 新增 allow-same-day 属性 [#5688](https://github.com/vant-ui/vant/issues/5688)
- GoodsAction: 新增 badge 属性 [0dea9e](https://github.com/vant-ui/vant/commit/0dea9e2cb1562decc07ef4467d085247b91924fd)
- GridItem: 新增 badge 属性 [db94b2](https://github.com/vant-ui/vant/commit/db94b20c8258ebb31bac99ea1f0c918d62de1059)
- Icon: 新增 badge 属性 [575577](https://github.com/vant-ui/vant/commit/575577ed58a1e6daa36ffba7db8054556aa0d24d)
- ImagePreview: 新增 closed 事件 [5b279a](https://github.com/vant-ui/vant/commit/5b279ab0dc862c0a3257d18fe17d04ed8dd8c1dd)
- locale: 新增日语配置文件 [#5853](https://github.com/vant-ui/vant/issues/5853) [#5854](https://github.com/vant-ui/vant/issues/5854)
- SidebarItem: 新增 badge 属性 [01482f](https://github.com/vant-ui/vant/commit/01482f20bc2150a7e4667fac062b4f129b0ac0c1)
- Tab: 新增 badge 属性 [214b13](https://github.com/vant-ui/vant/commit/214b13b8fff411a401fe6ccfc9eb979a51df7461)
- TabbarItem: 新增 badge 属性 [d61cbd](https://github.com/vant-ui/vant/commit/d61cbdd086c9050fa467803be676a1eb14d50f16)
- TreeSelect: 新增 badge 选项 [0cc7a3](https://github.com/vant-ui/vant/commit/0cc7a305287f43314910f893092c09004cef5349)
- Uploader: 新增 chooseFile 方法 [#5818](https://github.com/vant-ui/vant/issues/5818)
- Uploader: 新增 show-upload 属性 [66c0b3](https://github.com/vant-ui/vant/commit/66c0b3c1b7d101f242071cf90e5c0b2b899edbdd)
- Uploader: 支持在 before-read 中返回修改后的文件对象 [#5813](https://github.com/vant-ui/vant/issues/5813)

**Bug Fixes**

- Calendar: 修复在 Form 内使用时错误触发表单提交的问题 [#5873](https://github.com/vant-ui/vant/issues/5873)
- Field: 修复通过插槽使用 Uploader 时上传图片未展示的问题 [#5868](https://github.com/vant-ui/vant/issues/5868)
- ImagePreview: 修复上次调用结果未清除的问题 [7fcfc5](https://github.com/vant-ui/vant/commit/7fcfc5f3270d3507a002247c53a29da211f1ecb6)
- Picker: 修复 setValues、setIndexes 等方法未触发多列联动更新的问题 [#5807](https://github.com/vant-ui/vant/issues/5807)
- Toast: 修复设置 forbidClick 后未锁定滚动的问题 [df8777](https://github.com/vant-ui/vant/commit/df877751b3497eb6477797ee1a52933067e57676)

### [v2.5.5](https://github.com/vant-ui/vant/compare/v2.5.4...v2.5.5)

`2020-03-11`

**Feature**

- Calendar: 新增 show-title 属性 [#5779](https://github.com/vant-ui/vant/issues/5779)
- Calendar: 新增 show-subtitle 属性 [#5779](https://github.com/vant-ui/vant/issues/5779)
- Field: 优化虚拟键盘，type="number" 调起数字键盘 [e89baa](https://github.com/vant-ui/vant/commit/e89baa12ae24dbd27466bd6ec694074ab99acf5d)
- Stepper: 优化虚拟键盘，调起数字键盘 [58e74a](https://github.com/vant-ui/vant/commit/58e74a9e8bfc36f69103c6a301170c5f6ada03dd)
- GoodsActionIcon: 新增 dot 属性 [b983ac](https://github.com/vant-ui/vant/commit/b983ac08919056e1095767d1deb3f78e5274b41c)

**Bug Fixes**

- AddressEdit: 修复 showDetail 为 false 时仍然会校验地址的问题 [#5803](https://github.com/vant-ui/vant/issues/5803)
- Calendar: 修复在 multiple 模式下 color 属性不生效的问题 [#5786](https://github.com/vant-ui/vant/issues/5786)
- Field: 修复 button 插槽可能导致表单校验失败的问题 [#5785](https://github.com/vant-ui/vant/issues/5785)
- GoodsActionIcon: 修复使用 icon 插槽时 info 属性不生效的问题 [#5788](https://github.com/vant-ui/vant/issues/5788)
- Stepper: 修复在 Form 中使用时必须输入整数的问题 [#5792](https://github.com/vant-ui/vant/issues/5792)
- Sticky: 修复 Sticky 切换显隐导致位置错误的问题 [41e5c0](https://github.com/vant-ui/vant/commit/41e5c035dcf75c1f1d4c04673d3db255e439d452)

### [v2.5.4](https://github.com/vant-ui/vant/compare/v2.5.3...v2.5.4)

`2020-03-08`

**Feature**

- Calendar: 新增 multiple 类型 [#5705](https://github.com/vant-ui/vant/issues/5705)
- Field: 输入框增加 `line-height: inherit` 样式 [#5737](https://github.com/vant-ui/vant/issues/5737)
- Search: 新增 left 插槽 [#5771](https://github.com/vant-ui/vant/issues/5771)
- Uploader: 新增 upload-icon 属性 [b3b46c](https://github.com/vant-ui/vant/commit/b3b46cde45f885b746a2a633e5fc0e87e1881abe)
- Uploader: 圆角大小由 4px 调整为 8px [c67918](https://github.com/vant-ui/vant/commit/c6791841f4b06e699a684da0243526147438d852)
- Uploader: 优化上传区域样式 [bd4e64](https://github.com/vant-ui/vant/commit/bd4e64190e63eea30c342ea5255d8603a70385f9)

**Bug Fixes**

- Calendar: 修复 poppable 为 false 无法自动定位到当前日期的问题 [#5760](https://github.com/vant-ui/vant/issues/5760)
- DropdownMenu: 修复个别情况下 scrollIntoView 报错的问题 [#5770](https://github.com/vant-ui/vant/issues/5770)
- Tabs: 修复 scrollspy 在自定义的滚动容器中无法跳转的问题 [0993b3](https://github.com/vant-ui/vant/commit/0993b394b16fdbf92bdf02d39090e631bba1f471)
- Tabs: 修复 scrollspy 开启时在 safari 上可能出现标签弹回的问题 [#5727](https://github.com/vant-ui/vant/issues/5727)
- TimePicker: 修复动态设置 min-date 时可能出现选中项错误的问题 [#5767](https://github.com/vant-ui/vant/issues/5767)

**Types**

- Form: 修复缺少 scrollToField 方法类型定义的问题 [df4439](https://github.com/vant-ui/vant/commit/df4439e9f6759a446b522652233703601093e99d)
- ImagePreview: 修复缺少 closeable 选项类型定义的问题 [d5438d](https://github.com/vant-ui/vant/commit/d5438dfe0dc9df22e94881b57def33207eca44e6)
- Toast: 修复缺少 iconPrefix 选项类型定义的问题 [3237e5](https://github.com/vant-ui/vant/commit/3237e56561e1b6b80ea3431f3b8a9f30f61d4b08)

### [v2.5.3](https://github.com/vant-ui/vant/compare/v2.5.2...v2.5.3)

`2020-02-28`

**Feature**

- ActionSheet: 新增 close-on-popstate 属性 [#5716](https://github.com/vant-ui/vant/issues/5716)
- Area: 新增 columns-top、columns-bottom 属性 [#5719](https://github.com/vant-ui/vant/issues/5719)
- Area: 新增 title 插槽 [#5719](https://github.com/vant-ui/vant/issues/5719)
- Button: 新增 icon-prefix 属性 [#5666](https://github.com/vant-ui/vant/issues/5666)
- Cell: 新增 icon-prefix 属性 [#5666](https://github.com/vant-ui/vant/issues/5666)
- Field: 新增 icon-prefix 属性 [#5666](https://github.com/vant-ui/vant/issues/5666)
- Form: validator 新增 rule 参数 [#5704](https://github.com/vant-ui/vant/issues/5704)
- Form: 支持将 message 定义为函数 [#5704](https://github.com/vant-ui/vant/issues/5704)
- Form: 支持在 rule 中定义 pattern [#5700](https://github.com/vant-ui/vant/issues/5700)
- Form: 支持在 rule 中定义 formatter [d87835](https://github.com/vant-ui/vant/commit/d878354ebf8eedf849764480c11a90c4cdd2fbe3)
- GridItem: 新增 icon-prefix 属性 [#5666](https://github.com/vant-ui/vant/issues/5666)
- Rate: 新增 icon-prefix 属性 [#5666](https://github.com/vant-ui/vant/issues/5666)
- TabbarItem: 新增 icon-prefix 属性 [#5666](https://github.com/vant-ui/vant/issues/5666)

**Bug Fixes**

- Calendar: 修复隐藏状态下 scrollIntoView 函数报错的问题 [#5708](https://github.com/vant-ui/vant/issues/5708)
- DatetimePicker: 修复 getPicker 方法无法调用的问题 [#5710](https://github.com/vant-ui/vant/issues/5710)
- Popup: 修复 close-on-popstate 在 keep-alive 下无效的问题 [f07077](https://github.com/vant-ui/vant/commit/f070773b42b86dd98d1f3989651e735895db78ee)

### [v2.5.2](https://github.com/vant-ui/vant/compare/v2.5.1...v2.5.2)

`2020-02-21`

**Feature**

- Calendar: 新增 close、closed 事件 [556f33](https://github.com/vant-ui/vant/commit/556f335cc224a40ab27bda863a67601c36339ea9)
- Calendar: 新增 open、opened 事件 [a83082](https://github.com/vant-ui/vant/commit/a83082f599362456d85864904cb5f47b44138e43)
- Form: 新增 scroll-to-error 属性 [#5680](https://github.com/vant-ui/vant/issues/5680)
- Form: 新增 validate-trigger 属性 [c08db7](https://github.com/vant-ui/vant/commit/c08db724a3ed6440da5d5faebfa08561312f4d3a)
- Form: 新增 scrollToField 方法 [#5680](https://github.com/vant-ui/vant/issues/5680)
- Sku: 新增 preview-on-click-image 属性 [#5684](https://github.com/vant-ui/vant/issues/5684)
- Sku: 新增 sku-header-image-extra 插槽 [#5696](https://github.com/vant-ui/vant/issues/5696)

**Bug Fixes**

- Swipe: 修复容器宽度为小数时在部分安卓设备上出现换行的问题 [02afe7](https://github.com/vant-ui/vant/commit/02afe720c6aaeeb58036cde3072b6373e3b9254f)

### [v2.5.1](https://github.com/vant-ui/vant/compare/v2.5.1-beta.0...v2.5.1)

`2020-02-18`

**Feature**

- Sku: 新增 initialMessages 字段
- Calendar: 在调用 reset 方法后自动定位到当前月份 [407b7d](https://github.com/vant-ui/vant/commit/407b7ded43bc87c98605444dbbb829f5f05744b6)
- Calendar: 在修改 default-date 属性后自动定位到当前月份 [#5664](https://github.com/vant-ui/vant/issues/5664)

**Bug Fixes**

- Calendar: 修复在个别情况下日历渲染为空白的问题 [#5640](https://github.com/vant-ui/vant/issues/5640)
- Calendar: 修复在单选情况下使用 max-range 属性导致报错的问题 [79d2c3](https://github.com/vant-ui/vant/commit/79d2c344f9ee9945b09434b35cbe63a3816410ad)
- Form: 修复 error-message-align 属性类型定义报错的问题 [#5674](https://github.com/vant-ui/vant/issues/5674)
- Swipe: 修复在隐藏状态下触发浏览器缩放时元素宽度错误的问题 [#5678](https://github.com/vant-ui/vant/issues/5678)

### [v2.5.0](https://github.com/vant-ui/vant/compare/v2.4.7...v2.5.0)

`2020-02-15`

**New Component**

- 新增 [Form 表单](#/zh-CN/form)组件

**Feature**

- Field: 新增 name 属性 [f3398d](https://github.com/vant-ui/vant/commit/f3398dc2cdd1191613b97454b4725275458bde1b)
- Field: 新增 rules 属性 [0ed7aa](https://github.com/vant-ui/vant/commit/0ed7aaac88f769549b688259b8e6e1050a10cb99)
- AddressEdit: 新增 disable-area 属性 [#5630](https://github.com/vant-ui/vant/issues/5630)
- AddressList: 新增 item-bottom 插槽 [#5629](https://github.com/vant-ui/vant/issues/5629)
- RadioGroup: 新增 direction 属性 [4dd41b](https://github.com/vant-ui/vant/commit/4dd41b23decbaf86c8812e0afcc1d72773f223f6)
- CheckboxGroup: 新增 direction 属性 [153902](https://github.com/vant-ui/vant/commit/15390241d8d4252a828aa0e9d8c61377ba07512a)
- ImagePreview: 新增 scale 事件 [#5658](https://github.com/vant-ui/vant/issues/5658)
- ImagePreview: 新增 closeable 属性 [#5654](https://github.com/vant-ui/vant/issues/5654)

**Style**

- Field: input 插槽的内容默认在垂直方向居中 [03c826](https://github.com/vant-ui/vant/commit/03c826c4d44efd95a5ee509b5f183d8ded574fd7)
- Field: 优化 label-position 为 right 时的右边距 [2d6445](https://github.com/vant-ui/vant/commit/2d64458776df87625db9e8b07d83a7044a2bcf53)
- Uploader: 优化禁用态上传区域颜色 [#5628](https://github.com/vant-ui/vant/issues/5628)

**Bug Fixes**

- Calendar: 修复特定情况下未正确渲染日历内容的问题 [#5640](https://github.com/vant-ui/vant/issues/5640)
- Dialog: 修复 Dialog.Component 类型定义错误的问题 [#5646](https://github.com/vant-ui/vant/issues/5646)
- Field: 修复子元素文字颜色错误的问题 [e17a4a](https://github.com/vant-ui/vant/commit/e17a4a24993822b0f35114dacbbb3bebc5b51a60)
- Picker: 修复未触发弹性滚动时 change 事件不生效的问题 [#5662](https://github.com/vant-ui/vant/issues/5662)
- Tabs: 修复自定义滚动容器时 scrollspy 属性无效的问题 [#5637](https://github.com/vant-ui/vant/issues/5637)
- Calendar: 修复底部按钮会触发表单提交的问题 [e93fcb](https://github.com/vant-ui/vant/commit/e93fcb0603b988a2ffb5b1651588f7e4ad8aa92d)

### [v2.4.7](https://github.com/vant-ui/vant/compare/v2.4.7-beta.0...v2.4.7)

`2020-02-06`

**Feature**

- Calendar: 优化无障碍访问 [2124cc](https://github.com/vant-ui/vant/commit/2124cc5261be4a7d666cf6f70d4295309f3705d9)
- Field: 字数统计达到上限时高亮展示 [61093e](https://github.com/vant-ui/vant/commit/61093ef00f2dc421eb94ec7690093c1d565a296c)
- Sku: 新增 sku-actions-top 插槽 [#5617](https://github.com/vant-ui/vant/issues/5617)
- Uploader: 支持展示上传中状态 [#5625](https://github.com/vant-ui/vant/issues/5625)
- Uploader: 支持展示上传失败状态 [#5624](https://github.com/vant-ui/vant/issues/5624)

**Style**

- ActionSheet: 新增 @action-sheet-close-icon-active-color 变量 [265bfe](https://github.com/vant-ui/vant/commit/265bfeaac756e05803858062ab1ece2092a08e17)
- Popup: 新增 @popup-close-icon-active-color 变量 [660b03](https://github.com/vant-ui/vant/commit/660b0399512d3deddcdfb99af5cff1674617c515)

**Bug Fixes**

- Calendar: 修复选中日期 className 属性未生效的问题 [0b7c56](https://github.com/vant-ui/vant/commit/0b7c567a78c85fbf1c3d59fcd3ce76c691040ff1)
- Popup: 修复使用 get-container 属性后 destroy 时抛出错误的问题

### [v2.4.6](https://github.com/vant-ui/vant/compare/v2.4.5...v2.4.6)

`2020-02-01`

**Bug Fixes**

- Picker: 修复更新 columns 数据不生效的问题 [#5614](https://github.com/vant-ui/vant/issues/5614)

### [v2.4.5](https://github.com/vant-ui/vant/compare/v2.4.4...v2.4.5)

`2020-02-01`

**Feature**

- Picker: 支持级联选择 [#4247](https://github.com/vant-ui/vant/issues/4247)
- Slider: 新增 button-size 属性 [1e9b8c](https://github.com/vant-ui/vant/commit/1e9b8c846674562d56ab638a0982baab4bb6870e)
- 优化 props 类型，原有 number 类型的 props 现在支持传入 string

**Style**

- DropdownItem: 新增 @dropdown-item-z-index 变量 [6f4c6f](https://github.com/vant-ui/vant/commit/6f4c6f5aa6614559cfc24bc361e68c9c938bbb61)
- IndexBar: 新增 @index-anchor-z-index 变量 [89ee8e](https://github.com/vant-ui/vant/commit/89ee8e38723dadb2daa6ee31c325cdd2ad03ba99)
- IndexBar: 新增 @index-bar-sidebar-z-index 变量 [89ee8e](https://github.com/vant-ui/vant/commit/89ee8e38723dadb2daa6ee31c325cdd2ad03ba99)
- IndexBar: 新增 @index-bar-index-active-color 变量 [0011db](https://github.com/vant-ui/vant/commit/0011db75365b60699ae140d85e54b9e477f46a22)
- Notify: 新增 @notify-text-color 变量 [9dcf57](https://github.com/vant-ui/vant/commit/9dcf57c65f5e046318e953f2e8ce87918b1cb312)
- Overlay: 新增 @overlay-z-index 变量 [95d19f](https://github.com/vant-ui/vant/commit/95d19f70d1c90efc752074ff764b07787d89cf1e)
- Rate: 新增 @rate-icon-disabled-color 变量 [8b8471](https://github.com/vant-ui/vant/commit/8b8471945c4313735a5fe59402212f37a31acfea)
- Rate: 新增 @rate-icon-full-color 变量 [5c804c](https://github.com/vant-ui/vant/commit/5c804cf920b75c5bdf962fa49eae31363783f32f)
- Rate: 新增 @rate-icon-void-color 变量 [f90015](https://github.com/vant-ui/vant/commit/f90015efe7619af055b9ebd4c8be7da1f17b8da0)
- Slider: 新增 @slider-bar-height 变量 [a5819c](https://github.com/vant-ui/vant/commit/a5819c286e06469bc41e8aa9e0ed44cc21625dad)
- Search: 新增 @search-content-background-color 变量 [ea7419](https://github.com/vant-ui/vant/commit/ea74194990314bd1ff1e8237c221be92fdb8ae37)
- Step: 新增 @step-active-color 变量 [9e7a68](https://github.com/vant-ui/vant/commit/9e7a6874141fa05f0158ca8006c268d0a3d92679)
- Tabbar: 新增 @tabbar-z-index 变量 [0441f7](https://github.com/vant-ui/vant/commit/0441f7ba098aca24b797de29d10af8f47cf32d15)
- NavBar: 新增 @nav-bar-z-index 变量 [a2d870](https://github.com/vant-ui/vant/commit/a2d870ad8ee4912226ec8871cc4c2d56ef870902)
- NumberKeyboard: 新增 @number-keyboard-z-index 变量 [760938](https://github.com/vant-ui/vant/commit/760938962399e0589b4a258ff29e7fe2f3ba90f1)

**Bug Fixes**

- ImagePreview: 修复双击缩放时 max-zoom 属性不生效的问题 [1baa60](https://github.com/vant-ui/vant/commit/1baa60f2244b4605dc82f6dcf564671f5c623023)
- Popup: 修复 position 为 center 时 duration 属性不生效的问题 [44072e](https://github.com/vant-ui/vant/commit/44072e8c3f548cff78401780213ab7ef213372c3)
- Step: 修复 active-color 未改变分隔线颜色的问题 [cfadce](https://github.com/vant-ui/vant/commit/cfadcefb0a1c29dfb1d940fbb7add746595158bd)

### [v2.4.4](https://github.com/vant-ui/vant/compare/v2.4.3...v2.4.4) 🐭

`2020-01-24`

**Feature**

- Card: 优化图片拉伸模式 [e766d5](https://github.com/vant-ui/vant/commit/e766d5d5743e7f492b3601ce4010b8524fb2b016)
- Calendar: 新增 get-contaienr 属性 [#5609](https://github.com/vant-ui/vant/issues/5609)
- Calendar: 新增 close-on-popstate 属性 [2b82dc](https://github.com/vant-ui/vant/commit/2b82dcc3dd2dba678aba5e0533e0ff6af7c55b11)
- CountDown: 新增 change 事件 [#5599](https://github.com/vant-ui/vant/issues/5599)
- GoodsActionButton: 新增 icon 属性 [b83bed](https://github.com/vant-ui/vant/commit/b83bed3b6c41d0896386b3c4b6380c9568bd3ef2)

**Bug Fixes**

- Sku: 修复 get-container 属性不能为 string 类型的问题 [#5608](https://github.com/vant-ui/vant/issues/5608)

### [v2.4.3](https://github.com/vant-ui/vant/compare/v2.4.3-beta.0...v2.4.3)

`2020-01-19`

**Feature**

- Swipe: 页面隐藏时暂停自动轮播 [113157](https://github.com/vant-ui/vant/commit/11315787ec980767973a3fded50fb5858e51e298)
- Stepper: 新增 long-press 属性 [2f3ec6](https://github.com/vant-ui/vant/commit/2f3ec6a3d48a9d56f8127d27d51c3337f6e72cab)
- Calendar: 新增 max-range、range-prompt 属性 [#5583](https://github.com/vant-ui/vant/issues/5583)
- ImagePreview: 新增 @image-preview-index-text-shadow 变量 [e2f302](https://github.com/vant-ui/vant/commit/e2f30242eaaebd36d9816e2746fe6c44323e6aca)

**Improvement**

- Icon: 更新 share 图标 [2f77ac](https://github.com/vant-ui/vant/commit/2f77acfc6cef23ea664defc38c4cd806ceca1ee4)
- Field: 优化 readonly 状态下的光标类型 [60173d](https://github.com/vant-ui/vant/commit/60173dd6bc004339333c50218d7c6b2f6c1bc07b)
- Stepper: 优化 disable-input 状态下的输入框颜色 [959eca](https://github.com/vant-ui/vant/commit/959eca136c4ca6a39e22d36512db74b93ad100c6)

**Bug Fixes**

- GoodsAction: 修复未设置容器高度的问题 [#5593](https://github.com/vant-ui/vant/issues/5593)

**Types**

- Calendar: 新增类型定义 [dac60c](https://github.com/vant-ui/vant/commit/dac60c8a37d3b2b3686dc25c1c34b4029a963d1b)
- Toast: 修复 setDefaultOptions 方法参数定义错误 [#5582](https://github.com/vant-ui/vant/issues/5582)

### [v2.4.2](https://github.com/vant-ui/vant/compare/v2.4.2-beta.1...v2.4.2)

`2020-01-14`

**Feature**

- Sku: 新增 properties 属性 [#5525](https://github.com/vant-ui/vant/issues/5525)
- Field: 新增 digit 类型 [#5524](https://github.com/vant-ui/vant/issues/5524)
- Field: 新增 formatter 属性 [#5534](https://github.com/vant-ui/vant/issues/5534)
- Image: 新增 error-icon 属性 [#5470](https://github.com/vant-ui/vant/issues/5470)
- Image: 新增 loading-icon 属性 [#5469](https://github.com/vant-ui/vant/issues/5469)
- Swipe: 新增 prev、next 方法 [#5548](https://github.com/vant-ui/vant/issues/5548)
- GoodsAcitonIcon: 新增 color 属性 [#5576](https://github.com/vant-ui/vant/issues/5576)

**Improvement**

- AddressList: 优化样式细节 [#5507](https://github.com/vant-ui/vant/issues/5507)
- AddressEdit: 优化错误提示展示方式 [#5479](https://github.com/vant-ui/vant/issues/5479)
- ActionSheet: 优化关闭按钮样式 [#5574](https://github.com/vant-ui/vant/issues/5574)
- CouponList: 优化样式细节 [#5501](https://github.com/vant-ui/vant/issues/5501)
- Calendar: 弹出时自动滚动到当前选中的日期 [#5526](https://github.com/vant-ui/vant/issues/5526)
- ImagePreview: 优化图片加载失败提示样式 [#5570](https://github.com/vant-ui/vant/issues/5570)
- 优化所有组件的光标类型 [c1a535](https://github.com/vant-ui/vant/commit/c1a535b0dd9470f8eb526e86aa59cf6dec022f3a)

**Bug Fixes**

- Button: 修复加载状态下仍会有点击反馈的问题 [0a70d3](https://github.com/vant-ui/vant/commit/0a70d344124ef756a73ea9edfee07303f394d880)
- Card: 修复图片圆角样式未生效的问题 [#5480](https://github.com/vant-ui/vant/issues/5480)
- Calendar: 修复选中的日期无法展示提示信息的问题 [#5536](https://github.com/vant-ui/vant/issues/5536)
- Checkbox: 修复设置 label-disabled 后空白区域仍然可以点击的问题 [3d10d4](https://github.com/vant-ui/vant/commit/3d10d42fccadd1b9df46860d758a91f7825073e9)
- CouponList: 修复点击反馈区域错误的问题 [#5521](https://github.com/vant-ui/vant/issues/5521)
- Field: 修复 type 为 number 时在 iOS 上仍然能输入非数字字符的问题 [#5520](https://github.com/vant-ui/vant/issues/5520)
- ImagePreview: 修复在桌面端使用时无法拖拽的问题 [#4487](https://github.com/vant-ui/vant/issues/4487)
- Picker: 修复点击事件偶尔会丢失的问题 [5cbb9e](https://github.com/vant-ui/vant/commit/5cbb9e29989ac58d44a4ec503cbb984269c8f18e)
- PullRefresh:修复 head-height 属性未正确设置高度的问题 [028747](https://github.com/vant-ui/vant/commit/028747c35471f33e8c2b0baa6fb8915510daac22)
- Tabs: 修复容器设置 fixed 布局时无法渲染底部条的问题 [#5496](https://github.com/vant-ui/vant/issues/5496)

### [v2.4.1](https://github.com/vant-ui/vant/compare/v2.4.0...v2.4.1)

`2020-01-02`

**Feature**

- ContactEdit: 优化错误提示展示方式 [#5437](https://github.com/vant-ui/vant/issues/5437)
- CouponCell: 优先展示 value 字段的数值 [#5438](https://github.com/vant-ui/vant/issues/5438)

**Bug Fixes**

- Calendar: 修复日期对应的星期数展示错误的问题 [#5452](https://github.com/vant-ui/vant/issues/5452)
- List: 修复 direction 为 up 时加载事件触发时机错误的问题 [#5439](https://github.com/vant-ui/vant/issues/5439)

### [v2.4.0](https://github.com/vant-ui/vant/compare/v2.3.3...v2.4.0)

`2020-01-01`

**New Component**

- 新增 Calendar 日历组件

![](https://img01.yzcdn.cn/vant/calendar-12282.png)

**Feature**

- List: 新增 error 插槽 [e9a938](https://github.com/vant-ui/vant/commit/e9a938820232194ad5f62b2b6588fa5d604016ae)
- List: 新增 finished 插槽 [8a0705](https://github.com/vant-ui/vant/commit/8a0705d7610890c0da47e9e7eb0ef5665a3dca0d)
- Picker: 新增 confirm 方法 [5eb2a4](https://github.com/vant-ui/vant/commit/5eb2a4012ae3e9d90a29a924ae454e54408b1235)
- PullRefresh: 新增 success 插槽 [56e450](https://github.com/vant-ui/vant/commit/56e450f29e67a5e66b26cf9937c458270f462bdc)
- CouponList: 更新底部按钮样式 [#5368](https://github.com/vant-ui/vant/issues/5368)
- DatetimePicker: 新增 getPicker 方法 [1dc1fe](https://github.com/vant-ui/vant/commit/1dc1feae40b8ca11df980aa1d5ecf108151938e4)
- TreeSelect: 新增 @tree-select-item-selected-size 变量 [373159](https://github.com/vant-ui/vant/commit/37315975203f28d36634d9ad8388a7f4dc8a44ea)
- Image: 新增 @image-loading-icon-size、@image-error-icon-size 变量 [d7ae8c](https://github.com/vant-ui/vant/commit/d7ae8c5a26dcb6b7b79b4ca7a2ed3842673c2ea0)

**Compatibility**

在之前的版本中，有较多同学反馈在 iOS 10 ~ 11 上会偶现组件无法操作的情况，该问题的原因是 Vue 2.6.x 版本在绑定事件时存在事件无法冒泡的兼容性问题。[相关 issue](https://github.com/vant-ui/vant/issues/3015)

从 2.4 版本开始，我们通过手动绑定事件的方式来规避这个问题，涉及以下组件：

- Area
- DatetimePicker
- ImagePreview
- Rate
- Slider
- Swipe
- SwipeCell
- NumberKeyboard
- Picker
- PullRefresh

**Bug Fixes**

- Icon: 修复 medel-o 图标不展示的问题 [7b905a](https://github.com/vant-ui/vant/commit/7b905a6de85b895e2226c35875ee3633c2ae7e79)
- ImagePreview: 修复 close 事件重复触发的问题 [#5410](https://github.com/vant-ui/vant/issues/5410)
- PullRefresh: 修复下拉到顶部时可能不触发下拉刷新的问题 [e00058](https://github.com/vant-ui/vant/commit/e00058b681d8796feaaaa4a9f2c4083a18b61fe9)
- Tag: 修复动态设置 closeable 时动画错误的问题 [fe6e2f](https://github.com/vant-ui/vant/commit/fe6e2f29ba289206138fe17df046a55000b218ad)
- Tag: 修复 close 时会触发 click 事件的问题 [#5351](https://github.com/vant-ui/vant/issues/5351)
- Toast: 修复同时存在多个 Toast 时 forbidClick 可能失效的问题 [#5398](https://github.com/vant-ui/vant/issues/5398)
- Picker: 修复在桌面端使用时拖动后回弹的问题 [#5430](https://github.com/vant-ui/vant/issues/5430)
- Stepper: 修复在 safari 上禁用时文字颜色不正确的问题 [#5428](https://github.com/vant-ui/vant/issues/5428)
- IndexBar: 修复 IndexAnchor 没有父容器时定位错误的问题 [#5429](https://github.com/vant-ui/vant/issues/5429)

**Types**

- AddressEdit: 新增 setAddressDetail 方法的类型定义 [#5352](https://github.com/vant-ui/vant/issues/5352)
- Area: 新增 reset 方法的类型定义 [#5353](https://github.com/vant-ui/vant/issues/5353)
- Checkbox: 新增 toggle 方法的类型定义 [#5354](https://github.com/vant-ui/vant/issues/5354)
- CountDown: 新增 start、end、reset 方法的类型定义 [0438bd](https://github.com/vant-ui/vant/commit/0438bdbc97a81ad8b7de18ef8784d9907ce641c6)
- DropdownItem: 新增 toggle 方法的类型定义 [5c1883](https://github.com/vant-ui/vant/commit/5c1883f77c36d5026c60c873197dab98d4ca42f5)
- Field: 新增 focus、blur 方法的类型定义 [0b5c8e](https://github.com/vant-ui/vant/commit/0b5c8e5f3df570292e8599e7c2ff997fbee120ce)
- List: 新增 check 方法的类型定义 [285bce](https://github.com/vant-ui/vant/commit/285bce677c8997d55515a760f4d12b05349ebd3f)
- Picker: 新增 getValues 等方法的类型定义 [46d2b0](https://github.com/vant-ui/vant/commit/46d2b094477b52a96e85d18ec6fc42051a832e10)
- Sku: 新增 methods types [d2bb9f](https://github.com/vant-ui/vant/commit/d2bb9fa81b401e429296003e4c2ec8c0e544d2af)
- Swipe: 新增 swipeTo、resize 方法的类型定义 [a1831b](https://github.com/vant-ui/vant/commit/a1831b86387f1127325b9952d2d18349d41dc5c7)
- SwipeCell: 新增 open、close 方法的类型定义 [9a9676](https://github.com/vant-ui/vant/commit/9a9676d6af7d29ac2221761ad680cecd4e929a39)
- Tabs: 新增 resize 方法的类型定义 [3c526e](https://github.com/vant-ui/vant/commit/3c526ec1a26b5a38bc6a6ba2ded7a3db94bbcced)
- Uploader: 新增 closeImagePreview 方法的类型定义 [cf191e](https://github.com/vant-ui/vant/commit/cf191e09cbc8093bb72f5d1e9381b263cdf9f0d2)

### [v2.3.3](https://github.com/vant-ui/vant/tree/v2.3.3)

`2019-12-21`

**Bug Fixes**

- 修复 babel-plugin-import 按需引入部分组件时编译报错的问题

### [v2.3.2](https://github.com/vant-ui/vant/tree/v2.3.2)

`2019-12-20`

**Bug Fixes**

- 修复 Area 未自动引入依赖的 Picker 样式的问题
- 修复 DatetimePicker 未自动引入依赖的 Picker 样式的问题
- 修复 CountDown 在特定情况下内部计时器未清除的问题 [\#5340](https://github.com/vant-ui/vant/pull/5340)
- 修复 ImagePreview 在特定情况下会重复 onClose 回调的问题 [\#5341](https://github.com/vant-ui/vant/pull/5341)

### [v2.3.1](https://github.com/vant-ui/vant/tree/v2.3.1)

`2019-12-20`

**Bug Fixes**

- 修复全量引入组件时，入口文件中存在未编译的 ES6 代码的问题

### [v2.3.0](https://github.com/vant-ui/vant/tree/v2.3.0)

`2019-12-20`

**Style**

在 2.3.0 版本中，我们对业务组件的样式进行了全新升级，涉及以下组件：

- AddressEdit
- Card
- CouponList
- ContactList
- ContactCard
- ContactEdit
- SubmitBar

![](https://b.yzcdn.cn/vant/style-update-2.3.0-2.png)

**Features**

- 内部构建流程升级，使用 [@vant/cli](https://github.com/vant-ui/vant/tree/dev/packages/vant-cli) 进行构建
- AddressList: 新增 default-tag-text 属性 [\#5106](https://github.com/vant-ui/vant/pull/5106)
- Card: 新增 price-top 插槽 [\#5134](https://github.com/vant-ui/vant/pull/5134)
- Checkbox: 优化 toggleAll 性能 [\#5285](https://github.com/vant-ui/vant/pull/5285)
- Circle: 新增 stroke-linecap 属性 [\#5087](https://github.com/vant-ui/vant/pull/5087)
- CouponList: 新增 show-count 属性 [\#5139](https://github.com/vant-ui/vant/pull/5139)
- ContactList: 新增 default-tag-text 属性 [\#5089](https://github.com/vant-ui/vant/pull/5089)
- ContactCard: 新增 show-set-default 属性 [\#5083](https://github.com/vant-ui/vant/pull/5083)
- ContactCard: 新增 set-default-label 属性 [\#5083](https://github.com/vant-ui/vant/pull/5083)
- CountDown: 支持 SS 和 S 格式 [\#5154](https://github.com/vant-ui/vant/pull/5154)
- Sku: 新增 new startSaleNum 属性 [\#5105](https://github.com/vant-ui/vant/pull/5105)
- Sku: 新增 resetSelectedSku 方法 [\#5318](https://github.com/vant-ui/vant/pull/5318)
- SubmitBar: 新增 text-align 属性 [\#5130](https://github.com/vant-ui/vant/pull/5130)
- SwipeCell: 新增 open 事件 [\#5324](https://github.com/vant-ui/vant/pull/5324)
- SwipeCell: 新增 before-close 属性 [\#5320](https://github.com/vant-ui/vant/pull/5320)
- Tab: 新增 dot 属性 [\#5272](https://github.com/vant-ui/vant/pull/5272)
- Tab: 新增 info 属性 [\#5274](https://github.com/vant-ui/vant/pull/5274)
- Tab: 新增 rendered 事件 [\#5315](https://github.com/vant-ui/vant/pull/5315)
- Tab: 新增 scrollspy 属性 [\#5273](https://github.com/vant-ui/vant/pull/5273)
- Toast: 完善 TS 类型定义 [\#5086](https://github.com/vant-ui/vant/pull/5086)

**Bug Fixes**

- 修复 ActionSheet 按钮会提交表单的问题 [\#5181](https://github.com/vant-ui/vant/pull/5181)
- 修复 Card 在未使用 price 属性的情况下 bottom 插槽不生效的问题 [\#5116](https://github.com/vant-ui/vant/pull/5116)
- 修复 Dialog 快速点击按钮时可能重复触发 before-close 的问题 [\#5267](https://github.com/vant-ui/vant/pull/5267)
- 修复 DropdownMenu 在页面滚动时菜单位置错误的问题 [\#5313](https://github.com/vant-ui/vant/pull/5313)
- 修复 Icon medal 图标名称拼写错误的问题 [\#5242](https://github.com/vant-ui/vant/pull/5242)
- 修复 NumberKeyboard 在隐藏状态下也会触发 blur 事件的问题 [\#5110](https://github.com/vant-ui/vant/pull/5110)
- 修复 Picker 按钮会提交表单的问题 [\#5182](https://github.com/vant-ui/vant/pull/5182)
- 修复 Popup 在 activated 后未重新打开的问题 [\#5286](https://github.com/vant-ui/vant/pull/5286)
- 修复 Switch size 属性未定义 Number 类型的问题 [\#5229](https://github.com/vant-ui/vant/pull/5229)
- 修复 SubmitBar 价格为整数时显示错误的问题 [\#5224](https://github.com/vant-ui/vant/pull/5224)
- 修复 Sku 重置时未校验数量的问题 [\#5231](https://github.com/vant-ui/vant/pull/5231)
- 修复 Sku 步进器可能输入小数的问题 [\#5202](https://github.com/vant-ui/vant/pull/5202)
- 修复 Sku 步进器事件可能抛出小数的问题 [\#5210](https://github.com/vant-ui/vant/pull/5210)
- 修复 Stepper 按钮会提交表单的问题 [\#5183](https://github.com/vant-ui/vant/pull/5183)
- 修复 Stepper 在 max、min 属性变化时未更新输入框值的问题 [\#5257](https://github.com/vant-ui/vant/pull/5257)
- 修复 TreeSelect 事件触发顺序错误的问题 [\#5153](https://github.com/vant-ui/vant/pull/5153)
- 修复 TouchEmulator 在 Firefox 上的兼容性问题 [\#5118](https://github.com/vant-ui/vant/pull/5118)
- 修复 Uploader 重复上传同张图片时不会触发 oversize 事件的问题 [\#5177](https://github.com/vant-ui/vant/pull/5177)
- 修复主题定制时使用低版本 Less 会报错的问题 [\#5157](https://github.com/vant-ui/vant/pull/5157)

### [v2.2.16](https://github.com/vant-ui/vant/tree/v2.2.16)

`2019-12-03`

**Features**

- Stepper: 新增 disable-plus 属性 [\#5180](https://github.com/vant-ui/vant/pull/5180)
- Stepper: 新增 disable-minus 属性 [\#5180](https://github.com/vant-ui/vant/pull/5180)

### [v2.2.15](https://github.com/vant-ui/vant/tree/v2.2.15)

`2019-11-28`

**Bug Fixes**

- 修复 List 组件在部分情况下加载状态未重置的问题

### [v2.2.14](https://github.com/vant-ui/vant/tree/v2.2.14)

`2019-11-22`

**Features**

- Tabs: 新增 title-style 属性 [\#5048](https://github.com/vant-ui/vant/pull/5048)
- Tabs: 新增 resize 方法 [\#5071](https://github.com/vant-ui/vant/pull/5071)
- Swipe: 新增 resize 方法 [\#5070](https://github.com/vant-ui/vant/pull/5070)

**Bug Fixes**

- 修复 Cell value 过长时不换行的问题 [\#5029](https://github.com/vant-ui/vant/pull/5029)
- 修复 SwipeCell 在桌面端无法使用的问题 [\#5077](https://github.com/vant-ui/vant/pull/5077)
- 修复 Field 在 Safari 下输入换行符时字数统计错误的问题 [\#5049](https://github.com/vant-ui/vant/pull/5049)
- 修复 Tabbar 设置 safe-area-inset-bottom 后可能出现样式错位的问题 [\#5079](https://github.com/vant-ui/vant/pull/5079)
- 修复 DropdownMenu 使用 get-container 属性时点击后会立即关闭的问题 [\#5047](https://github.com/vant-ui/vant/pull/5047)

### [v2.2.13](https://github.com/vant-ui/vant/tree/v2.2.13)

`2019-11-14`

**Features**

- Area: 新增 swipe-duration 属性 [\#5014](https://github.com/vant-ui/vant/pull/5014)
- Swipe: 新增 stop-propagation 属性 [\#4972](https://github.com/vant-ui/vant/pull/4972)
- Toast: 新增 overlay 选项 [\#4969](https://github.com/vant-ui/vant/pull/4969)
- Toast: 新增 clickOnClickOverlay 选项 [\#4967](https://github.com/vant-ui/vant/pull/4967)
- SwipeCell: 新增 opened 事件 [\#4986](https://github.com/vant-ui/vant/pull/4986)
- ActionSheet: 新增 close-icon 属性 [\#5016](https://github.com/vant-ui/vant/pull/5016)
- DropdownItem: 新增 title 插槽 [\#4975](https://github.com/vant-ui/vant/pull/4975)
- DatetimePicker: 新增 swipe-duration 属性 [\#5015](https://github.com/vant-ui/vant/pull/5015)

**Bug Fixes**

- 修复 Tab name 设置为 0 时无法正确匹配的问题 [\#5017](https://github.com/vant-ui/vant/pull/5017)
- 修复 Indexbar 隐藏时可能出现锚点位置错误的问题 [\#5012](https://github.com/vant-ui/vant/pull/5012)
- 修复 Indexbar 设置 sticky-offset-top 后可能出现锚点位置错误的问题 [\#5012](https://github.com/vant-ui/vant/pull/5012)
- 修复 DatetimePicker 使用 filter 并返回空数组时无法切换时间的问题 [\#4973](https://github.com/vant-ui/vant/pull/4973)
- 修复 DateTimePicker 动态设置 max-hour 并小于 v-model 绑定的时间时出现错误的问题 [\#5006](https://github.com/vant-ui/vant/pull/5006)
- 修复 ImagePreview 类型中定义缺少 swipeDuration 选项的问题 [\#4968](https://github.com/vant-ui/vant/pull/4968)

### [v2.2.12](https://github.com/vant-ui/vant/tree/v2.2.12)

`2019-11-07`

**Features**

- Stepper: 新增 name 属性 [\#4931](https://github.com/vant-ui/vant/pull/4931)
- Uploader: 新增 deletable 属性 [\#4925](https://github.com/vant-ui/vant/pull/4925)

**Bug Fixes**

- 修复 Sku 内容最小高度错误的问题 [\#4942](https://github.com/vant-ui/vant/pull/4942)
- 修复 List 在初始化时可能同时触发两次 load 事件的问题 [\#4953](https://github.com/vant-ui/vant/pull/4953)
- 修复 @border-color 变量无法定制某些组件边框颜色的问题 [\#4939](https://github.com/vant-ui/vant/pull/4939)

### [v2.2.11](https://github.com/vant-ui/vant/tree/v2.2.11)

`2019-11-04`

**Features**

- Switch: 新增 click 事件 [\#4915](https://github.com/vant-ui/vant/pull/4915)
- Switch: size 属性支持 number 类型 [\#4913](https://github.com/vant-ui/vant/pull/4913)
- Toast: 默认持续时间由 3 秒调整为 2 秒 [\#4886](https://github.com/vant-ui/vant/pull/4886)
- Uploader: 新增 closeImagePreview 方法 [\#4901](https://github.com/vant-ui/vant/pull/4901)

**Bug Fixes**

- 修复 Button 加载图标颜色不正确的问题 [\#4868](https://github.com/vant-ui/vant/pull/4868)
- 修复 CountDown 在销毁时未清除定时器的问题 [\#4918](https://github.com/vant-ui/vant/pull/4918)
- 修复 CountDown 在 keep-alive 状态下未暂停定时器的问题 [\#4919](https://github.com/vant-ui/vant/pull/4919)
- 修复 Grid 使用 icon 插槽时 info、dot 属性不生效的问题 [\#4902](https://github.com/vant-ui/vant/pull/4902)

### [v2.2.10](https://github.com/vant-ui/vant/tree/v2.2.10)

`2019-10-27`

**Features**

- Icon: 新增 font-display: auto 样式 [\#4831](https://github.com/vant-ui/vant/pull/4831)
- Popup: 新增 close-on-popstate 属性 [\#4845](https://github.com/vant-ui/vant/pull/4845)
- Picker: 新增 swipe-duration 属性 [\#4816](https://github.com/vant-ui/vant/pull/4816)
- Toast: 支持针对指定类型的 Toast 修改默认配置 [\#4848](https://github.com/vant-ui/vant/pull/4848)

**Bug Fixes**

- 修复 Uploader 文件预览圆角样式错误的问题 [\#4846](https://github.com/vant-ui/vant/pull/4846)
- 修复 DatetimePicker 同时使用 min-date 和 filter 时初始值错误的问题 [\#4837](https://github.com/vant-ui/vant/pull/4837)

### [v2.2.9](https://github.com/vant-ui/vant/tree/v2.2.9)

`2019-10-20`

**Features**

- Tag: 新增 closeable 属性 [\#4763](https://github.com/vant-ui/vant/pull/4763)
- Loading: 新增若干个 Less 变量 [\#4781](https://github.com/vant-ui/vant/pull/4781)
- Progress: 新增若干个 Less 变量 [\#4790](https://github.com/vant-ui/vant/pull/4790)
- Progress: 新增 track-color 属性 [\#4789](https://github.com/vant-ui/vant/pull/4789)
- Toast: 新增 @toast-loading-icon-color 变量 [\#4782](https://github.com/vant-ui/vant/pull/4782)
- Picker: 新增 @picker-loading-icon-color 变量 [\#4787](https://github.com/vant-ui/vant/pull/4787)
- ImagePreview: 新增 cover 插槽 [\#4766](https://github.com/vant-ui/vant/pull/4766)

**Bug Fixes**

- 修复 Tag 圆角不够圆的问题 [\#4762](https://github.com/vant-ui/vant/pull/4762)
- 修复 Sku 重置时不触发 sku-selected 事件的问题 [\#4755](https://github.com/vant-ui/vant/pull/4755)
- 修复 ImagePreview 点击索引时会关闭预览的问题 [\#4764](https://github.com/vant-ui/vant/pull/4764)
- 修复 AddressEdit 设置 area-placeholder 后无法选择海外地址的问题 [\#4769](https://github.com/vant-ui/vant/pull/4769)

### [v2.2.8](https://github.com/vant-ui/vant/tree/v2.2.8)

`2019-10-17`

**Features**

- Slider: 优化点击区域 [\#4701](https://github.com/vant-ui/vant/pull/4701)
- Slider: 增加过渡动画 [\#4700](https://github.com/vant-ui/vant/pull/4700)
- Dialog: 更新圆角样式 [\#4730](https://github.com/vant-ui/vant/pull/4730)
- Uploader: 更新删除图标样式，添加图片圆角样式 [\#4712](https://github.com/vant-ui/vant/pull/4712)
- Field: 新增 show-word-limit 属性 [\#4721](https://github.com/vant-ui/vant/pull/4721)
- ActionSheet: 新增 description 属性 [\#4691](https://github.com/vant-ui/vant/pull/4691)
- Stepper: 设置 decimal-length 属性后会在输入过程中进行校验 [\#4747](https://github.com/vant-ui/vant/pull/4747)
- 新增渐变色相关的 Less 变量 [\#4752](https://github.com/vant-ui/vant/pull/4752)
- 新增多行文字省略的内置样式 [\#4690](https://github.com/vant-ui/vant/pull/4690)

**Bug Fixes**

- 修复 Slider 宽度异常的问题 [\#4699](https://github.com/vant-ui/vant/pull/4699)
- 修复 Rate 由于 inline-block 导致的错误高度 [\#4693](https://github.com/vant-ui/vant/pull/4693)
- 修复 AddressEdit 省市区未选择完全时能够保存的问题 [\#4724](https://github.com/vant-ui/vant/pull/4724)

### [v2.2.7](https://github.com/vant-ui/vant/tree/v2.2.7)

`2019-10-11`

**Features**

- Dialog: 新增 width 属性 [\#4687](https://github.com/vant-ui/vant/pull/4687)
- Dialog: 新增 overlay-class 属性 [\#4683](https://github.com/vant-ui/vant/pull/4683)
- Dialog: 新增 overlay-style 属性 [\#4682](https://github.com/vant-ui/vant/pull/4682)
- Uploader: 新增 file 类型的 result-type [\#4680](https://github.com/vant-ui/vant/pull/4680)
- TreeSelect: 新增 className 选项 [\#4671](https://github.com/vant-ui/vant/pull/4671)

**Bug Fixes**

- 修复 Dialog 可能出现文字模糊的问题 [\#4686](https://github.com/vant-ui/vant/pull/4686)
- 修复 Stepper 的 step 值很小时无法生效的问题 [\#4675](https://github.com/vant-ui/vant/pull/4675)
- 修复 DatetimePicker 动态修改时间范围时, confirm 事件无法获取到正确结果的问题 [\#4676](https://github.com/vant-ui/vant/pull/4676)
- 修复 Field 同时设置 error 和 disabled 属性时文字颜色错误的问题 [\#4666](https://github.com/vant-ui/vant/pull/4666)

### [v2.2.6](https://github.com/vant-ui/vant/tree/v2.2.6)

`2019-10-08`

**Features**

- Grid: 新增 icon-size 属性 [\#4656](https://github.com/vant-ui/vant/pull/4656)
- Toast: 新增 transition 属性 [\#4638](https://github.com/vant-ui/vant/pull/4638)
- Dialog: 新增 transition 属性 [\#4636](https://github.com/vant-ui/vant/pull/4636)
- Dialog: 新增 open、close 事件 [\#4633](https://github.com/vant-ui/vant/pull/4633)
- Dialog: 新增 opened、closed 事件 [\#4634](https://github.com/vant-ui/vant/pull/4634)
- NumberKeyboard: 新增 extra-key 插槽 [\#4644](https://github.com/vant-ui/vant/pull/4644)
- CheckboxGroup: 新增 toggleAll 方法 [\#4640](https://github.com/vant-ui/vant/pull/4640)

**Bug Fixes**

- 修复 GoodsAction 圆角错误的问题 [\#4653](https://github.com/vant-ui/vant/pull/4653)
- 修复 Tabs 类型为 card 时上边距错误的问题 [\#4658](https://github.com/vant-ui/vant/pull/4658)
- 修复 AddressList input 事件重复触发的问题 [\#4659](https://github.com/vant-ui/vant/pull/4659)
- 修复 NumberKeyboard 在 Vue 2.6 下的兼容问题 [\#4632](https://github.com/vant-ui/vant/pull/4632)

### [v2.2.5](https://github.com/vant-ui/vant/tree/v2.2.5)

`2019-09-28`

**Features**

- Picker: 新增 columns-top 插槽 [\#4607](https://github.com/vant-ui/vant/pull/4607)
- Picker: 新增 columns-bottom 插槽 [\#4607](https://github.com/vant-ui/vant/pull/4607)
- Overlay: 新增 default 插槽 [\#4571](https://github.com/vant-ui/vant/pull/4571)
- Overlay: 新增 custom-style 属性 [\#4572](https://github.com/vant-ui/vant/pull/4572)
- Checkbox: 新增 bind-group 属性 [\#4600](https://github.com/vant-ui/vant/pull/4600)
- DropdownItem: 新增 get-container 属性 [\#4611](https://github.com/vant-ui/vant/pull/4611)
- Area: 新增 columns-placeholder 属性 [\#4580](https://github.com/vant-ui/vant/pull/4580)
- AddressEdit: 新增 area-columns-placeholder 属性 [\#4584](https://github.com/vant-ui/vant/pull/4584)

**Bug Fixes**

- 修复 Overlay 未添加 TypeScript 定义的问题 [\#4601](https://github.com/vant-ui/vant/pull/4601)
- 修复 Swipe swipeTo 方法在某些边界情况下过渡动画不正确的问题 [\#4570](https://github.com/vant-ui/vant/pull/4570)
- 修复 Uploader 预览 URL 相同的图片时索引错误的问题 [\#4577](https://github.com/vant-ui/vant/pull/4577)

### [v2.2.4](https://github.com/vant-ui/vant/tree/v2.2.4) [已废弃]

`2019-09-28` 🇨🇳

**Tips**

- 本版本存在样式丢失问题，请使用 2.2.5 版本

### [v2.2.3](https://github.com/vant-ui/vant/tree/v2.2.3)

`2019-09-24`

**Features**

- Cell: 优化无障碍访问 [\#4519](https://github.com/vant-ui/vant/pull/4519)
- Popup: 优化无障碍访问 [\#4516](https://github.com/vant-ui/vant/pull/4516)
- Search: 优化无障碍访问 [\#4522](https://github.com/vant-ui/vant/pull/4522)
- Picker: 优化无障碍访问 [\#4521](https://github.com/vant-ui/vant/pull/4521)
- GridItem: 优化无障碍访问 [\#4517](https://github.com/vant-ui/vant/pull/4517)
- ActionSheet: 优化无障碍访问 [\#4525](https://github.com/vant-ui/vant/pull/4525)
- Sku: 新增 previewImgUrl 字段 [\#4562](https://github.com/vant-ui/vant/pull/4562)
- RadioGroup: 新增 icon-size 属性 [\#4529](https://github.com/vant-ui/vant/pull/4529)
- RadioGroup: 新增 checked-color 属性 [\#4532](https://github.com/vant-ui/vant/pull/4532)
- CheckboxGroup: 新增 icon-size 属性 [\#4530](https://github.com/vant-ui/vant/pull/4530)
- CheckboxGroup: 新增 checked-color 属性 [\#4531](https://github.com/vant-ui/vant/pull/4531)
- ActionSheet: 默认开启 round 属性 [\#4542](https://github.com/vant-ui/vant/pull/4542)
- ActionSheet: 默认开启 safe-area-inset-bottom 属性 [\#4524](https://github.com/vant-ui/vant/pull/4524)
- NumberKeyboard: 默认开启 safe-area-inset-bottom 属性 [\#4544](https://github.com/vant-ui/vant/pull/4544)

### [v2.2.2](https://github.com/vant-ui/vant/tree/v2.2.2)

`2019-09-19`

**Features**

- Dialog: 优化文字换行 [\#4506](https://github.com/vant-ui/vant/pull/4506)
- Search: 新增 action-text 属性 [\#4501](https://github.com/vant-ui/vant/pull/4501)
- Popup: 新增 close-icon-position 属性 [\#4507](https://github.com/vant-ui/vant/pull/4507)
- Uploader: 回调函数增加 index 参数 [\#4460](https://github.com/vant-ui/vant/pull/4460)
- GoodsActionButton: 加大按钮高度 [\#4461](https://github.com/vant-ui/vant/pull/4461)
- AddressList: 新增 @address-list-item-radio-icon-color 变量 [\#4481](https://github.com/vant-ui/vant/pull/4481)

**Bug Fixes**

- 修复 Field 禁用状态在 safari 上文字颜色过浅的问题 [\#4508](https://github.com/vant-ui/vant/pull/4508)
- 修复 DatetimePicker 选项为纯文字时陷入死循环的问题 [\#4485](https://github.com/vant-ui/vant/pull/4485)
- 修复 ImagePreview 手势缩放时可能出现缩放比例异常的问题 [\#4477](https://github.com/vant-ui/vant/pull/4477)

### [v2.2.1](https://github.com/vant-ui/vant/tree/v2.2.1)

`2019-09-12`

**Features**

- Icon: 新增 dot 属性 [\#4425](https://github.com/vant-ui/vant/pull/4425)
- Icon: 新增 down、wap-home 图标 [\#4404](https://github.com/vant-ui/vant/pull/4404)
- GridItem: 新增 dot 属性 [\#4426](https://github.com/vant-ui/vant/pull/4426)
- GridItem: 新增 info 属性 [\#4424](https://github.com/vant-ui/vant/pull/4424)
- TreeSelect: 新增 dot 选项 [\#4433](https://github.com/vant-ui/vant/pull/4433)
- Tab: 新增 to、url、replace 属性 [\#4422](https://github.com/vant-ui/vant/pull/4422)
- Progress: 新增 stroke-width 属性 [\#4397](https://github.com/vant-ui/vant/pull/4397)
- Popup: 新增 safe-area-inset-bottom 属性 [\#4419](https://github.com/vant-ui/vant/pull/4419)
- Stepper: 新增 decimal-length 属性 [\#4443](https://github.com/vant-ui/vant/pull/4443)
- Sku: 新增 stock-threshold 属性 [\#4444](https://github.com/vant-ui/vant/pull/4444)
- Sku: 新增 safe-area-inset-bottom 属性 [\#4428](https://github.com/vant-ui/vant/pull/4428)
- SidebarItem: 新增 dot 属性 [\#4432](https://github.com/vant-ui/vant/pull/4432)
- Sku: 优化样式细节 [\#4437](https://github.com/vant-ui/vant/pull/4437)
- Circle: 优化文本样式 [\#4401](https://github.com/vant-ui/vant/pull/4401)

**Bug Fixes**

- 修复 Sku 按钮位置可能错误的问题 [\#4427](https://github.com/vant-ui/vant/pull/4427)
- 修复 Uploader 删除时会触发 click-preview 事件的问题 [\#4407](https://github.com/vant-ui/vant/pull/4407)
- 修复 Progress 文字位置不准确的问题 [\#4396](https://github.com/vant-ui/vant/pull/4396)

### [v2.2.0](https://github.com/vant-ui/vant/tree/v2.2.0)

`2019-09-06`

**Features**

- Style: 更新基础红色为 #ee0a24 [\#4368](https://github.com/vant-ui/vant/pull/4368)
- Rate: 新增 touchable 属性 [\#4361](https://github.com/vant-ui/vant/pull/4361)
- Rate: 布局调整为 inline-block [\#4334](https://github.com/vant-ui/vant/pull/4334)
- Rate: 优化手势滑动的流畅度 [\#4336](https://github.com/vant-ui/vant/pull/4336)
- Popup: 新增 closeable 属性 [\#4362](https://github.com/vant-ui/vant/pull/4362)
- Popup: 新增 close-icon 属性 [\#4366](https://github.com/vant-ui/vant/pull/4366)
- Sidebar: 移除了内外边框 [\#4382](https://github.com/vant-ui/vant/pull/4382)
- SidebarItem 新增 disabled 属性 [\#4325](https://github.com/vant-ui/vant/pull/4325)
- TreeSelect: 新增 max 属性 [\#4323](https://github.com/vant-ui/vant/pull/4323)
- TreeSelect: 支持通过 info 展示徽标 [\#4384](https://github.com/vant-ui/vant/pull/4384)
- Uploader: 新增 close-preview 事件 [\#4376](https://github.com/vant-ui/vant/pull/4376)
- ImagePreview: 新增图片加载过程的提示 [\#4378](https://github.com/vant-ui/vant/pull/4378)

**Bug Fixes**

- 修复 Field 在 Safari 浏览器上样式异常的问题 [\#4380](https://github.com/vant-ui/vant/pull/4380)
- 修复 Button 在 color 属性中传入渐变色时边框颜色错误的问题 [\#4342](https://github.com/vant-ui/vant/pull/4342)
- 修复 Dialog 关闭时未重置按钮加载状态的问题 [\#4352](https://github.com/vant-ui/vant/pull/4352)
- 修复 Slider 初始值超出范围时展示错误的问题 [\#4337](https://github.com/vant-ui/vant/pull/4337)
- 修复 Sidebar 徽标位置错误的问题 [\#4324](https://github.com/vant-ui/vant/pull/4324)
- 修复 DropdownItem 选项选中态颜色丢失的问题 [\#4330](https://github.com/vant-ui/vant/pull/4330)
- 修复 NumberKeyboard 在 iphoneX 上右侧按钮位置错误的问题 [\#4304](https://github.com/vant-ui/vant/pull/4304)
- 修复 ImagePreview 在关闭后未重置图片缩放状态的问题 [\#4319](https://github.com/vant-ui/vant/pull/4319)
- 修复 ImagePreview 在某些情况下页码不正确的问题 [\#4320](https://github.com/vant-ui/vant/pull/4320)

### [v2.1.8](https://github.com/vant-ui/vant/tree/v2.1.8)

`2019-08-29`

**Features**

- Picker: 新增 allow-html 属性 [\#4278](https://github.com/vant-ui/vant/pull/4278)
- PasswordInput: 新增 focused 属性 [\#4279](https://github.com/vant-ui/vant/pull/4279)
- GoodsActionButton: 新增 color 属性 [\#4255](https://github.com/vant-ui/vant/pull/4255)
- Button: color 属性支持传入 linear-gradient 渐变色 [\#4252](https://github.com/vant-ui/vant/pull/4252)

**Bug Fixes**

- 修复 Circle stroke-width 超过 60 时样式错误的问题 [\#4256](https://github.com/vant-ui/vant/pull/4256)
- 修复 Picker 滑动暂停时位置错误的问题 [\#4277](https://github.com/vant-ui/vant/pull/4277)
- 修复 Picker 滑动结束时触发点击会跳动的问题 [\#4273](https://github.com/vant-ui/vant/pull/4273)

### [v2.1.7](https://github.com/vant-ui/vant/tree/v2.1.7)

`2019-08-26`

**Bug Fixes**

- 修复 RadioGroup 设置 disabled 属性后仍能切换的问题 [\#4242](https://github.com/vant-ui/vant/pull/4242)
- 修复 CheckboxGroup 设置 disabled 属性后仍能切换的问题 [\#4242](https://github.com/vant-ui/vant/pull/4242)

### [v2.1.6](https://github.com/vant-ui/vant/tree/v2.1.6)

`2019-08-26`

**Features**

- Tag: 新增 warning 类型 [\#4232](https://github.com/vant-ui/vant/pull/4232)
- Image: 新增 radius 属性 [\#4230](https://github.com/vant-ui/vant/pull/4230)
- Notify: 新增 type 属性 [\#4237](https://github.com/vant-ui/vant/pull/4237)
- CellGroup: 新增 title 插槽 [\#4227](https://github.com/vant-ui/vant/pull/4227)
- Sku: 支持动态设置 initial-sku 属性 [\#4214](https://github.com/vant-ui/vant/pull/4214)
- Sku: 支持预览更高层级的规格类目图片 [\#4236](https://github.com/vant-ui/vant/pull/4236)
- Locale: 支持西班牙语 [\#4235](https://github.com/vant-ui/vant/pull/4235)

**Bug Fixes**

- 修复 Tabbar 在 route 模式下选中样式错误的问题 [\#4229](https://github.com/vant-ui/vant/pull/4229)
- 修复 NumberKeyboard 使用 title 属性时按钮位置错误的问题 [\#4228](https://github.com/vant-ui/vant/pull/4228)
- 修复 IndexBar 在 sticky 模式下锚点位置可能超出元素边界的问题 [\#4218](https://github.com/vant-ui/vant/pull/4218)

### [v2.1.5](https://github.com/vant-ui/vant/tree/v2.1.5)

`2019-08-23`

**Features**

- Toast: 新增 closeOnClick 选项 [\#4192](https://github.com/vant-ui/vant/pull/4192)
- Uploader: 新增 image-fit 属性 [\#4189](https://github.com/vant-ui/vant/pull/4189)
- Uploader: 新增 click-preview 事件 [\#4206](https://github.com/vant-ui/vant/pull/4206)
- Uploader: 新增 preview-full-image 属性 [\#4205](https://github.com/vant-ui/vant/pull/4205)
- DropdownMenu: 新增 @dropdown-menu-title-active-text-color less 变量 [\#4208](https://github.com/vant-ui/vant/pull/4208)

**Bug Fixes**

- 修复 Area 无法选中部分海外地址的问题 [\#4195](https://github.com/vant-ui/vant/pull/4195)
- 修复 IndexBar 在局部滚动容器内计算错误的问题 [\#4184](https://github.com/vant-ui/vant/pull/4184)
- 修复 NumberKeyboard 按键边框颜色错误的问题 [\#4183](https://github.com/vant-ui/vant/pull/4183)

### [v2.1.4](https://github.com/vant-ui/vant/tree/v2.1.4)

`2019-08-21`

**Features**

- Col: 新增 click 事件 [\#4169](https://github.com/vant-ui/vant/pull/4169)
- Row: 新增 click 事件 [\#4170](https://github.com/vant-ui/vant/pull/4170)
- Area: 新增 is-oversea-code 属性 [\#4163](https://github.com/vant-ui/vant/pull/4163)
- Circle: 支持渐变色 [\#4157](https://github.com/vant-ui/vant/pull/4157)
- Circle: 支持传入 number 类型的 size 属性 [\#4160](https://github.com/vant-ui/vant/pull/4160)
- Tabbar: 支持通过 to.name 匹配路由 [\#4148](https://github.com/vant-ui/vant/pull/4148)
- Sku: 页面返回时自动关闭图片预览 [\#4152](https://github.com/vant-ui/vant/pull/4152)
- Uploader: 页面返回时自动关闭图片预览 [\#4151](https://github.com/vant-ui/vant/pull/4151)
- Uploader: 图片预览支持更多图片格式 [\#4140](https://github.com/vant-ui/vant/pull/4140)
- TreeSelect: 支持多选 [\#4130](https://github.com/vant-ui/vant/pull/4130)
- TreeSelect: 支持在 active-id 属性上使用 sync 修饰符 [\#4133](https://github.com/vant-ui/vant/pull/4133)
- TreeSelect: 支持在 main-active-index 属性上使用 sync 修饰符 [\#4132](https://github.com/vant-ui/vant/pull/4132)

**Bug Fixes**

- 修复 Sku 部分文案不支持国际化修改的问题 [\#4172](https://github.com/vant-ui/vant/pull/4172)
- 修复 Field 按钮在 Firefox 上宽度变小的问题 [\#4144](https://github.com/vant-ui/vant/pull/4144)
- 修复 Tabbar 触发 vue-router 路由重复跳转提示的问题 [\#4147](https://github.com/vant-ui/vant/pull/4147)
- 修复 Picker 样式可能被重复引入的 base 样式覆盖的问题 [\#4136](https://github.com/vant-ui/vant/pull/4136)

### [v2.1.3](https://github.com/vant-ui/vant/tree/v2.1.3)

`2019-08-15`

**Features**

- Sku: 支持国际化 [\#4123](https://github.com/vant-ui/vant/pull/4123)
- Button: 新增 color 属性 [\#4124](https://github.com/vant-ui/vant/pull/4124)
- Uploader: 新增 before-delete 属性 [\#4118](https://github.com/vant-ui/vant/pull/4118)
- Collapse: 新增 value 属性类型错误时的提示 [\#4122](https://github.com/vant-ui/vant/pull/4122)
- TreeSelect: 新增 content 插槽 [\#4105](https://github.com/vant-ui/vant/pull/4105)
- TreeSelect: 支持 string 类型的 height 属性 [\#4107](https://github.com/vant-ui/vant/pull/4107)
- NumberKeyboard: 优化点击体验 [\#4116](https://github.com/vant-ui/vant/pull/4116)

**Bug Fixes**

- 修复 DropdownMenu 嵌套在 NavBar 内时样式错误的问题 [\#4098](https://github.com/vant-ui/vant/pull/4098)
- 修复 Tab 动态插入标签页时下划线位置未更新的问题 [\#4091](https://github.com/vant-ui/vant/pull/4091)
- 修复 Icon service-o 图标不完整的问题 [\#4088](https://github.com/vant-ui/vant/pull/4088)
- 修复 Icon gift-o、refund-o 图标不完整的问题 [\#4089](https://github.com/vant-ui/vant/pull/4089)
- 修复 Slider 位置未改变时也会触发 change 事件的问题 [\#4087](https://github.com/vant-ui/vant/pull/4087)

### [v2.1.2](https://github.com/vant-ui/vant/tree/v2.1.2)

`2019-08-10`

**Features**

- ActionSheet: 新增 color 选项 [\#4073](https://github.com/vant-ui/vant/pull/4073)
- AddressEdit: 新增 postal-validator 属性 [\#4067](https://github.com/vant-ui/vant/pull/4067)
- Stepper: 新增 show-plus、show-minus 属性 [\#4056](https://github.com/vant-ui/vant/pull/4056)
- Icon: 新增 warning、good-job、good-job-o 图标 [\#4038](https://github.com/vant-ui/vant/pull/4038)
- Icon: 新增 smile、music、thumb-circle、phone-circle 图标 [\#4048](https://github.com/vant-ui/vant/pull/4048)
- Picker: 优化事件冒泡 [\#4043](https://github.com/vant-ui/vant/pull/4043)
- Field: 优化图标点击区域 [\#4058](https://github.com/vant-ui/vant/pull/4058)
- Divider: 优化无障碍访问 [\#4069](https://github.com/vant-ui/vant/pull/4069)
- List: 优化底部文字大小 [\#4077](https://github.com/vant-ui/vant/pull/4077)
- Image: img 标签继承圆角 [\#4032](https://github.com/vant-ui/vant/pull/4032)
- Uploader: 支持 isImage 标记 [\#4072](https://github.com/vant-ui/vant/pull/4072)
- DropdownMenu: 新增多个 Less 变量 [\#4071](https://github.com/vant-ui/vant/pull/4071)
- 支持在 module 类型的 script 标签中引入 CDN 包 [\#4080](https://github.com/vant-ui/vant/pull/4080)

**Bug Fixes**

- 修复 Sticky 在局部滚动容器内位置错误的问题 [\#4055](https://github.com/vant-ui/vant/pull/4055)

### [v2.1.1](https://github.com/vant-ui/vant/tree/v2.1.1)

`2019-08-02`

**Bug Fixes**

- 修复 DatetimePicker 事件无法触发的问题 [\#4027](https://github.com/vant-ui/vant/pull/4027)
- 修复 Popup 设置 z-index 顺序错误的问题 [\#4026](https://github.com/vant-ui/vant/pull/4026)

### [v2.1.0](https://github.com/vant-ui/vant/tree/v2.1.0)

`2019-08-01` 🇨🇳

**Features**

- Sku: UI 升级，采用更圆润的视觉风格 [\#3875](https://github.com/vant-ui/vant/pull/3875) [\#3922](https://github.com/vant-ui/vant/pull/3922)
- GoodsAction: UI 升级，采用更圆润的视觉风格 [\#3967](https://github.com/vant-ui/vant/pull/3967)
- Sku: 新增 price-tag 属性 [\#3875](https://github.com/vant-ui/vant/pull/3875)
- Sku: 新增 hide-selected-text 属性 [\#3875](https://github.com/vant-ui/vant/pull/3875)
- Sku: 新增 sku-header-origin-price 插槽 [\#3958](https://github.com/vant-ui/vant/pull/3958)
- Dialog: 新增 title 插槽 [\#3985](https://github.com/vant-ui/vant/pull/3985)
- Dialog: 优化垂直居中位置 [\#3905](https://github.com/vant-ui/vant/pull/3905)
- Uploader: 新增多个 less 变量 [\#3907](https://github.com/vant-ui/vant/pull/3907)
- ActionSheet: 新增多个 less 变量 [\#3908](https://github.com/vant-ui/vant/pull/3908)
- AddressList: 新增 click-item 事件 [\#3942](https://github.com/vant-ui/vant/pull/3942)
- CouponList: 新增 empty-image 属性 [\#3941](https://github.com/vant-ui/vant/pull/3941)
- ImagePreview: 新增 swipe-duration 属性 [\#3963](https://github.com/vant-ui/vant/pull/3963)
- SwipeCell: 新增 stop-propagation 属性 [\#3952](https://github.com/vant-ui/vant/pull/3952)

**Bug Fixes**

- 修复 Tabs 在特定情况下出现下划线位置错误的问题 [\#3961](https://github.com/vant-ui/vant/pull/3961)
- 修复 AddressList 点击空白区域时无法选中的问题 [\#3909](https://github.com/vant-ui/vant/pull/3909)
- 修复 IndexBar 在 index-list 变化时未更新高亮选项的问题 [\#3943](https://github.com/vant-ui/vant/pull/3943)
- 修复 ImagePreview 图片较长时遮挡索引的问题 [\#4002](https://github.com/vant-ui/vant/pull/4002)
- 修复 ImagePreview onClose 和 onChange 选项未被重置的问题 [\#3960](https://github.com/vant-ui/vant/pull/3960)
- 修复 Radio 和 Checkbox 点击中间空白区域时无法选中的问题 [\#4007](https://github.com/vant-ui/vant/pull/4007)
- 修复 SwipeCell 在打开的情况下阻止事件冒泡的问题 [\#3982](https://github.com/vant-ui/vant/pull/3982)
- 修复 Tabs 在 sticky 模式下滚动回到顶部时存在 1 像素偏差的问题 [\#3949](https://github.com/vant-ui/vant/pull/3949)
- 修复 DatetimePicker 使用 formatter 且为 time 类型时 confirm 事件参数错误的问题 [\#3969](https://github.com/vant-ui/vant/pull/3969)

### [v2.0.9](https://github.com/vant-ui/vant/tree/v2.0.9)

`2019-07-19`

**Features**

- 新增 Sticky 粘性布局组件 [\#3888](https://github.com/vant-ui/vant/pull/3888)
- Grid: 优化文字换行 [\#3897](https://github.com/vant-ui/vant/pull/3897)
- Toast: 优化图片图标展示 [\#3895](https://github.com/vant-ui/vant/pull/3895)
- Image: 新增 round 属性 [\#3838](https://github.com/vant-ui/vant/pull/3838)
- Image: 新增 show-error 属性 [\#3896](https://github.com/vant-ui/vant/pull/3896)
- Image: 新增 show-loading 属性 [\#3893](https://github.com/vant-ui/vant/pull/3893)
- Toast: 新增 iconPrefix 选项 [\#3872](https://github.com/vant-ui/vant/pull/3872)
- Uploader: 支持预览网络图片 [\#3899](https://github.com/vant-ui/vant/pull/3899)
- ActionSheet: 新增 round 属性 [\#3874](https://github.com/vant-ui/vant/pull/3874)
- TreeSelect: 新增 click-nav、click-item 事件 [\#3892](https://github.com/vant-ui/vant/pull/3892)

**Bug Fixes**

- 修复 SwipeCell 与 Swipe 嵌套时无法使用的问题 [\#3898](https://github.com/vant-ui/vant/pull/3898)
- 修复 Dialog closeOnPopstate 无法被禁用的问题 [\#3868](https://github.com/vant-ui/vant/pull/3868)
- 修复 DropdownMenu toggle 方法无法打开菜单的问题 [\#3876](https://github.com/vant-ui/vant/pull/3876)

### [v2.0.8](https://github.com/vant-ui/vant/tree/v2.0.8)

`2019-07-16`

**Features**

- Sku: 支持自定义留言占位文本 [\#3864](https://github.com/vant-ui/vant/pull/3864)
- DropdownMenu: 新增 icon 选项 [\#3855](https://github.com/vant-ui/vant/pull/3855)
- DropdownMenu: 标题过长时自动截断 [\#3847](https://github.com/vant-ui/vant/pull/3847)
- ImagePreview: 支持双击缩放手势 [\#3839](https://github.com/vant-ui/vant/pull/3839)

**Bug Fixes**

- 修复 Tab 点击事件参数丢失的问题 [\#3866](https://github.com/vant-ui/vant/pull/3866)
- 修复 List 在 body 标签添加滚动样式时异常的问题 [\#3844](https://github.com/vant-ui/vant/pull/3844)
- 修复 IndexBar 在某些情况下 active 锚点失效的问题 [\#3832](https://github.com/vant-ui/vant/pull/3832)

### [v2.0.7](https://github.com/vant-ui/vant/tree/v2.0.7)

`2019-07-11`

**Features**

- 新增 CountDown 倒计时组件 [\#3805](https://github.com/vant-ui/vant/pull/3805)
- Popup: 新增 round 属性 [\#3781](https://github.com/vant-ui/vant/pull/3781)
- IndexBar: 新增 sticky-offset-top 属性 [\#3791](https://github.com/vant-ui/vant/pull/3791)
- PullRefresh: 新增 distance 插槽参数 [\#3829](https://github.com/vant-ui/vant/pull/3829)
- Swipe: swipeTo 方法新增 immediate 参数 [\#3821](https://github.com/vant-ui/vant/pull/3821)
- Slider: bar-height 属性支持 number 类型 [\#3794](https://github.com/vant-ui/vant/pull/3794)
- DropdownMenu: 新增 close-on-click-outside 属性 [\#3824](https://github.com/vant-ui/vant/pull/3824)

**Bug Fixes**

- 修复 Popup 蒙层在某些情况下遮挡元素的问题 [\#3831](https://github.com/vant-ui/vant/pull/3831)
- 修复 Stepper 在 iOS 12 下滚动位置错误的问题 [\#3804](https://github.com/vant-ui/vant/pull/3804)
- 修复 Dialog closeOnPopstate 方法缺少类型定义的问题 [\#3789](https://github.com/vant-ui/vant/pull/3789)
- 修复 DatetimePicker 使用 filter 属性且为 time 类型时 confirm 事件参数错误的问题 [\#3816](https://github.com/vant-ui/vant/pull/3816)

### [v2.0.6](https://github.com/vant-ui/vant/tree/v2.0.6)

`2019-07-05`

**Features**

- 新增 Divider 分割线组件 [\#3755](https://github.com/vant-ui/vant/pull/3755)
- Tab: 新增 name 属性 [\#3762](https://github.com/vant-ui/vant/pull/3762)
- Sku: 新增 add-cart-text 属性 [\#3725](https://github.com/vant-ui/vant/pull/3725)

**Bug Fixes**

- 修复 Grid gutter 属性不能传入 String 类型的问题 [\#3741](https://github.com/vant-ui/vant/pull/3741)
- 修复 Swipe 使用 width 属性后出现空白区域的问题 [\#3751](https://github.com/vant-ui/vant/pull/3751)
- 修复 PullRefresh 同步修改 loading 时状态错误的问题 [\#3719](https://github.com/vant-ui/vant/pull/3719)
- 修复 Collapse 在 safari 浏览器上渲染内容较多时高度错误的问题 [\#3723](https://github.com/vant-ui/vant/pull/3723)

### [v2.0.5](https://github.com/vant-ui/vant/tree/v2.0.5)

`2019-07-02`

**Features**

- Stepper: 支持长按手势 [\#3711](https://github.com/vant-ui/vant/pull/3711)
- Stepper: 新增 button-size 属性 [\#3714](https://github.com/vant-ui/vant/pull/3714)
- Dialog: 新增 close-on-popstate 属性 [\#3709](https://github.com/vant-ui/vant/pull/3709)

**Bug Fixes**

- 修复 postcss 配置对 vant 不生效的问题

### [v2.0.4](https://github.com/vant-ui/vant/tree/v2.0.4) 🇨🇳

`2019-07-01`

**Features**

- 新增 Grid、GridItem 组件 [\#3669](https://github.com/vant-ui/vant/pull/3669) [\#3682](https://github.com/vant-ui/vant/pull/3682) [\#3683](https://github.com/vant-ui/vant/pull/3683)
- Field: 新增 arrow-direction 属性 [\#3679](https://github.com/vant-ui/vant/pull/3679)
- Sidebar: 新增 to、replace 属性 [\#3696](https://github.com/vant-ui/vant/pull/3696)
- Sidebar: 支持通过 v-model 绑定当前项索引 [\#3698](https://github.com/vant-ui/vant/pull/3698)
- IndexBar: 新增选中状态的类名，用于定制样式 [\#3692](https://github.com/vant-ui/vant/pull/3692)
- Uploader: 支持 Number 类型的 name 属性 [\#3681](https://github.com/vant-ui/vant/pull/3681)
- SwipeCell: 新增 name 属性 [\#3680](https://github.com/vant-ui/vant/pull/3680)
- AddressEdit: 新增 detail-maxlength 属性 [\#3707](https://github.com/vant-ui/vant/pull/3707)
- GoodsActionIcon: 新增 icon 插槽 [\#3705](https://github.com/vant-ui/vant/pull/3705)

**Bug Fixes**

- 修复 Collapse 在 safari 浏览器上动画可能闪烁的问题 [\#3686](https://github.com/vant-ui/vant/pull/3686)
- 修复 Picker 在低版本 Android 机器上的兼容性问题 [\#3688](https://github.com/vant-ui/vant/pull/3688)

### [v2.0.3](https://github.com/vant-ui/vant/tree/v2.0.3)

`2019-06-27`

**Features**

- ActionSheet: 新增 duration 属性 [\#3608](https://github.com/vant-ui/vant/pull/3608)
- ActionSheet: 新增 open、opened 事件 [\#3639](https://github.com/vant-ui/vant/pull/3639)
- ActionSheet: 新增 close、closed 事件 [\#3639](https://github.com/vant-ui/vant/pull/3639)
- ImagePreview: 新增 onChange 选项 [\#3630](https://github.com/vant-ui/vant/pull/3630)
- Popup: 优化蒙层动画时长 [\#3610](https://github.com/vant-ui/vant/pull/3610)
- Uploader: 支持点击查看大图 [\#3603](https://github.com/vant-ui/vant/pull/3603)
- Uploader: 支持预览非图片文件 [\#3604](https://github.com/vant-ui/vant/pull/3604)
- Stepper: 新增多个 Less 变量 [\#3599](https://github.com/vant-ui/vant/pull/3599)
- Icon: 更新 checked、comment、comment-o 图标 [\#3615](https://github.com/vant-ui/vant/pull/3615)

**Bug Fixes**

- 修复 Icon 传入图片时被拉伸的问题 [\#3667](https://github.com/vant-ui/vant/pull/3667)
- 修复 ImagePreview 滚动穿透问题 [\#3645](https://github.com/vant-ui/vant/pull/3645)
- 修复 Tab 使用 title slot 时可能报错的问题 [\#3631](https://github.com/vant-ui/vant/pull/3631)
- 修复 vetur 插件自动补全组件属性不生效的问题 [\#3617](https://github.com/vant-ui/vant/pull/3617)

### [v2.0.2](https://github.com/vant-ui/vant/tree/v2.0.2)

`2019-06-21`

**Features**

- Picker: 优化滚动速率 [\#3556](https://github.com/vant-ui/vant/pull/3556)
- Card: 新增 click-thumb 事件 [\#3586](https://github.com/vant-ui/vant/pull/3586)
- CouponList: 新增 enabled-title、disabled-title 属性 [\#3578](https://github.com/vant-ui/vant/pull/3578)
- Slider: 支持传入任意范围的 min、max 值 [\#3566](https://github.com/vant-ui/vant/pull/3566)
- Uploader: 支持 before-read 属性返回 Promise [\#3572](https://github.com/vant-ui/vant/pull/3572)
- NumberKeyboard: 支持 v-model 绑定输入值 [\#3531](https://github.com/vant-ui/vant/pull/3531)
- NumberKeyboard: 新增 maxlength 属性 [\#3532](https://github.com/vant-ui/vant/pull/3532)
- 新增 sideEffects 配置以支持 tree shaking [\#3530](https://github.com/vant-ui/vant/pull/3530)

**Bug Fixes**

- 修复 Sku 图片预览可能报错的问题 [\#3569](https://github.com/vant-ui/vant/pull/3569)
- 修复 Button 在 safari 浏览器上存在外边距的问题 [\#3577](https://github.com/vant-ui/vant/pull/3577)
- 修复 Toast clear 方法类型定义缺少参数的问题 [\#3542](https://github.com/vant-ui/vant/pull/3542)

### [v2.0.1](https://github.com/vant-ui/vant/tree/v2.0.1)

`2019-06-15`

**Features**

- Toast: 新增 icon 属性 [\#3485](https://github.com/vant-ui/vant/pull/3485)
- DropdownMenu: 新增 direction 属性 [\#3490](https://github.com/vant-ui/vant/pull/3490)
- NumberKeyboard: 新增 delete 属性 [\#3499](https://github.com/vant-ui/vant/pull/3499)
- Icon: 使用 Image 组件优化图片布局 [\#3515](https://github.com/vant-ui/vant/pull/3515)
- Tab: 支持 string 类型的 line-width 和 line-height [\#3514](https://github.com/vant-ui/vant/pull/3514)

**Bug Fixes**

- 修复 Image 组件 TS 定义缺失的问题 [\#3520](https://github.com/vant-ui/vant/pull/3520)
- 修复 SwitchCell 加载图标偏移的问题 [\#3501](https://github.com/vant-ui/vant/pull/3501)
- 修复 Locale 函数类型文案无法修改的问题 [\#3498](https://github.com/vant-ui/vant/pull/3498)
- 修复 Toast 在 multiple 模式下没有淡出动画的问题 [\#3504](https://github.com/vant-ui/vant/pull/3504)

### [v2.0.0](https://github.com/vant-ui/vant/tree/v2.0.0)

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

![](https://img01.yzcdn.cn/public_files/2019/06/10/141ac9b67c06be0811c86c4c1c571c9d.png)

#### 新文档

文档方面，我们重新设计了文档站点，用<b>卡片</b>的方式组织段落，更加直观。对一些较为复杂的组件，我们对示例进行细粒度的拆分，添加更多的用法介绍，以帮助大家更快地上手使用。

此外，文档站点也支持了<b>搜索</b>和<b>版本切换</b>。

![](https://img01.yzcdn.cn/public_files/2019/06/10/63b666fa52493402c87db6146a715341.png)

#### 样式定制

移动端 UI 风格多变，对组件的可定制性要求较高。从 2.0 版本开始，Vant 中的所有组件都支持通过 <b>Less 变量</b>进行样式定制。同时我们新增了较多样式相关的 Props，便于快速定制组件风格。

![](https://img01.yzcdn.cn/public_files/2019/06/11/9a066c1a212264c7ae56065e1f13d317.png)

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

- 移除在 1.0 版本废弃的 Waterfall 组件，请使用`List`组件代替，或使用独立的[@vant/waterfall](https://github.com/vant-ui/vant/tree/dev/packages/vant-waterfall)包。

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

对于 Vant v1 版本，后续会进入维护期，跟进问题修复，但不再引入功能性改动。

![](https://img01.yzcdn.cn/public_files/2019/06/11/4e7202acbfc399622e428eb1485e1591.png)
