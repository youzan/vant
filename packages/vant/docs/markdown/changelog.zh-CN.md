# 更新日志

### 提示

当前文档为 Vant 4 的更新日志，其他版本请参考：

- [Vant 2 更新日志](https://vant-ui.github.io/vant/v2/#/zh-CN/changelog)
- [Vant 3 更新日志](https://vant-ui.github.io/vant/v3/#/zh-CN/changelog)

### 介绍

Vant 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

**发布节奏**

- 修订号：每周发布，包含新特性和问题修复。
- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：无固定的发布时间，包含不兼容更新和重大功能更新。

## 更新内容

### [v4.0.11](https://github.com/vant-ui/vant/compare/v4.0.10...v4.0.11)

`2023-02-20`

**Feature**

- 新增 [vant-nuxt](https://github.com/vant-ui/vant-nuxt) 包，作为官方的 Nuxt Module [#11588](https://github.com/vant-ui/vant/issues/11588)
- BackTop: 新增 z-index 属性以及相关 CSS 变量 [#11582](https://github.com/vant-ui/vant/issues/11582)
- Picker: 支持在 option 插槽中获取选项的 index [#11594](https://github.com/vant-ui/vant/issues/11594)
- @vant/use: 支持注销 useEventListener [#11540](https://github.com/vant-ui/vant/issues/11540)

**Bug Fixes**

- PickerGroup: 修复 confirm 事件参数不正确的问题 [#11566](https://github.com/vant-ui/vant/issues/11566)
- PickerGroup: 修复 Tab 的下划线样式错误问题 [#11547](https://github.com/vant-ui/vant/issues/11547)
- PickerGroup: 修复部分插槽不可用的问题 [#11564](https://github.com/vant-ui/vant/issues/11564)
- Popover: 修复 placement 为 `*-start/end` 时箭头位置错误的问题 [#11584](https://github.com/vant-ui/vant/issues/11584)
- Popover: 修复动画会导致组件位置错误的问题 [#11568](https://github.com/vant-ui/vant/issues/11568)
- Space: 修复 SSR 时出现缺少 Text 报错的问题 [#11549](https://github.com/vant-ui/vant/issues/11549)

### [v4.0.10](https://github.com/vant-ui/vant/compare/v4.0.9...v4.0.10)

`2023-02-02`

**Bug Fixes**

- DatePicker: 修复 change 事件中日期参数不正确的问题 [#11529](https://github.com/vant-ui/vant/issues/11529)
- Slider: 修复双滑块模式下无法正确拖动的问题 [#11526](https://github.com/vant-ui/vant/issues/11526) [#11534](https://github.com/vant-ui/vant/issues/11534)

### [v4.0.9](https://github.com/vant-ui/vant/compare/v4.0.8...v4.0.9)

`2023-01-26`

**Feature**

- BackTop: 新增 immediate 属性 [#11515](https://github.com/vant-ui/vant/issues/11515)
- Calendar: 新增 month-title 插槽 [#11500](https://github.com/vant-ui/vant/issues/11500)
- Cascader: 新增 useCascaderAreaData 方法 [#11518](https://github.com/vant-ui/vant/issues/11518)
- ImagePreview: 支持在缩放图片后滑动至其他图片 [#11505](https://github.com/vant-ui/vant/issues/11505)
- Locale: 新增 Esperanto 世界语 [#11520](https://github.com/vant-ui/vant/issues/11520)
- Locale: 新增 useCurrentLang 方法 [#11517](https://github.com/vant-ui/vant/issues/11517)
- Swipe: 新增 drag-start, drag-end 事件 [#11502](https://github.com/vant-ui/vant/issues/11502)

**Bug Fixes**

- ImagePreview: 修复切换图片过程中可以触发图片缩放的问题 [#11504](https://github.com/vant-ui/vant/issues/11504)
- Locale: 修复意大利语翻译问题 [#11519](https://github.com/vant-ui/vant/issues/11519)
- Swipe: 修复多指操作时滑动位置被错误重置的问题 [#11503](https://github.com/vant-ui/vant/issues/11503)

### [v4.0.8](https://github.com/vant-ui/vant/compare/v4.0.7...v4.0.8)

`2023-01-15`

**Feature**

- PickerGroup: 新增 next-step-text 属性 [#11487](https://github.com/vant-ui/vant/issues/11487)

**Bug Fixes**

- Picker: 调整确认按钮的颜色为 primary color [#11479](https://github.com/vant-ui/vant/issues/11479)
- NumberKeyboard: 调整确认按钮的颜色为 primary color [#11479](https://github.com/vant-ui/vant/issues/11479)
- Icons: 增加 woff 格式来兼容个别 webview 环境 [#11485](https://github.com/vant-ui/vant/issues/11485)
- Picker: 修复标题文字可能不居中的问题 [#11489](https://github.com/vant-ui/vant/issues/11489)
- Skeleton: 修复全量引入组件时不会自动注册 Skeleton 子组件的问题 [#11470](https://github.com/vant-ui/vant/issues/11470) [#11469](https://github.com/vant-ui/vant/issues/11469)
- Tabs: 修复动态插入 Tab 时在个别情况下顺序错误的问题 [#11462](https://github.com/vant-ui/vant/issues/11462)

### [v4.0.7](https://github.com/vant-ui/vant/compare/v4.0.6...v4.0.7)

`2023-01-02`

**Bug Fixes**

- Icons: 修复 delete / delete-o 图标存在多余黑点的问题 [#11441](https://github.com/vant-ui/vant/issues/11441)
- Icons: 移除多余的 woff/ttf 格式声明 [#11442](https://github.com/vant-ui/vant/issues/11442)
- ImagePreview：修复 teleport 属性不生效的问题 [#11429](https://github.com/vant-ui/vant/issues/11429)
- Locale: 修复 ru-RU 中的 "Calendar" 拼写错误 [#11425](https://github.com/vant-ui/vant/issues/11425)
- Swipe: 修复在 keep-alive 内使用时可能渲染空白的问题 [#11437](https://github.com/vant-ui/vant/issues/11437)

### [v4.0.6](https://github.com/vant-ui/vant/compare/v4.0.5...v4.0.6)

`2022-12-26`

**Bug Fixes**

- 修复升级 vite v4 导致构建产物不全的问题 [#11423](https://github.com/vant-ui/vant/issues/11423)

### [v4.0.5](https://github.com/vant-ui/vant/compare/v4.0.4...v4.0.5)

`2022-12-25`

**Feature**

- Locale: 新增 Dutch 荷兰语 [#11419](https://github.com/vant-ui/vant/issues/11419)
- Locale: 新增 Mongolian 蒙古语 [#11418](https://github.com/vant-ui/vant/issues/11418)

**Bug Fixes**

- Badge: 修复 offset 属性部分情况下导致样式错误的问题 [#11400](https://github.com/vant-ui/vant/issues/11400)
- Form: 修复事件参数中可能出现 key 为 undefined 的问题 [#11410](https://github.com/vant-ui/vant/issues/11410)
- Picker: 修复深色模式下加载状态样式错误的问题 [#11405](https://github.com/vant-ui/vant/issues/11405)

### [v4.0.4](https://github.com/vant-ui/vant/compare/v4.0.3...v4.0.4)

`2022-12-23`

**Bug Fixes**

- Field: 修复使用 formatter 时光标位置可能错误的问题 [#11360](https://github.com/vant-ui/vant/issues/11360)
- Image: 修复 load 事件未正确触发导致 ImagePreview 报错的问题 [#11406](https://github.com/vant-ui/vant/issues/11406)

### [v4.0.3](https://github.com/vant-ui/vant/compare/v4.0.2...v4.0.3)

`2022-12-13`

**Bug Fixes**

- Field: 修复动态设置空的 label 不生效的问题 [#11373](https://github.com/vant-ui/vant/issues/11373)
- ImagePreview: 修复图片可能加载失败的问题 [#11376](https://github.com/vant-ui/vant/issues/11376)

### [v4.0.2](https://github.com/vant-ui/vant/compare/v4.0.1...v4.0.2)

`2022-12-03`

**Bug Fixes**

- Field: 修复使用 formatter 时光标位置错误的问题 [#11348](https://github.com/vant-ui/vant/issues/11348)
- Image: 修复在 Nuxt 3 下图片可能无法展示的问题 [128972](https://github.com/vant-ui/vant/commit/128972a75329d4b14028d00cd23dac66038e2d4c)
- NavBar: 修复屏幕旋转时 placeholder 未自动适配高度的问题 [#11351](https://github.com/vant-ui/vant/issues/11351)

### [v4.0.1](https://github.com/vant-ui/vant/compare/v4.0.0...v4.0.1)

`2022-12-01`

**Feature**

- Picker: 新增 selectedIndexes 作为事件入参 [#11329](https://github.com/vant-ui/vant/issues/11329)

**Bug Fixes**

- Field: 修复未选中时修改绑定的值会导致键盘弹出的问题 [#11333](https://github.com/vant-ui/vant/issues/11333)

### [v4.0.0](https://github.com/vant-ui/vant/compare/v4.0.0-rc.9...v4.0.0)

`2022-11-26`

> 完整内容请移步：[「4.0 更新介绍」](https://vant-ui.github.io/vant/#/zh-CN/release-note-v4)

**Feature**

- List: 新增 disabled 属性 [#11307](https://github.com/vant-ui/vant/issues/11307)
- BackTop: 支持动态设置 target 属性 [#11311](https://github.com/vant-ui/vant/issues/11311)
- BackTop: 支持通过 CSS 变量修改组件位置 [#11312](https://github.com/vant-ui/vant/issues/11312)
- BackTop: 重命名 visibility-height 属性为 offset [#11309](https://github.com/vant-ui/vant/issues/11309)

**Bug Fixes**

- Field: 修复格式化值后，光标位置错误的问题 [#11308](https://github.com/vant-ui/vant/issues/11308)

### [v4.0.0-rc.9](https://github.com/vant-ui/vant/compare/v4.0.0-rc.8...v4.0.0-rc.9)

`2022-11-24`

**Bug Fixes**

- Cell: 修复 arrow-direction 设置为 right 不显示的问题 [#11279](https://github.com/vant-ui/vant/issues/11279)
- Style: 修复 body 标签上的 normalize 样式未生效的问题 [#11287](https://github.com/vant-ui/vant/issues/11287)

### [v4.0.0-rc.8](https://github.com/vant-ui/vant/compare/v4.0.0-rc.7...v4.0.0-rc.8)

`2022-11-20`

**Feature**

- 新增 BackTop 回到顶部组件，注意该新组件的 API 尚未稳定，在 4.0 正式版发布前仍可能产生 breaking change [#11236](https://github.com/vant-ui/vant/issues/11236)

**Bug Fixes**

- DropdownItem: 修复使用 teleport 时无法设置 attr 的问题 [#11273](https://github.com/vant-ui/vant/issues/11273)
- List: 修复初始的 loading 值为 true 时加载错误的问题 [#11275](https://github.com/vant-ui/vant/issues/11275)
- NumberKeyboard: 修复使用 teleport 时无法设置 attr 的问题 [#11274](https://github.com/vant-ui/vant/issues/11274)

### [v4.0.0-rc.7](https://github.com/vant-ui/vant/compare/v4.0.0-rc.6...v4.0.0-rc.7)

`2022-11-13`

**New Component**

- 新增 SkeletonAvatar、SkeletonTitle、SkeletonImage、SkeletonParagraph 组件 [#11173](https://github.com/vant-ui/vant/issues/11173)

**Feature**

- ImagePreview: 新增 long-press 事件 [#11252](https://github.com/vant-ui/vant/issues/11252)
- Popover: 支持非受控模式 [#11244](https://github.com/vant-ui/vant/issues/11244)

**Bug Fixes**

- ActionSheet: 修复标题为空时取消按钮层级错误的问题 [#11213](https://github.com/vant-ui/vant/issues/11213)
- DatePicker: 在生产环境下不再抛出开发错误提示 [#11248](https://github.com/vant-ui/vant/issues/11248)
- Lazyload: 修复使用 lazy-image 时报错 h is not a function 的问题 [#11229](https://github.com/vant-ui/vant/issues/11229)
- Picker: 修复抛出 confirm 事件时 v-model 未正确更新的问题 [#11194](https://github.com/vant-ui/vant/issues/11194)
- Picker: 修复 column 为空时操作报错的问题 [#11249](https://github.com/vant-ui/vant/issues/11249)
- Uploader: 修复 show-upload 为 false 时 chooseFile 无法调用的问题 [#11218](https://github.com/vant-ui/vant/issues/11218)

### [v4.0.0-rc.6](https://github.com/vant-ui/vant/compare/v4.0.0-rc.5...v4.0.0-rc.6)

`2022-10-23`

**Feature**

- Calendar: subtitle 插槽新增 text 和 date 入参 [#11168](https://github.com/vant-ui/vant/issues/11168)
- Cell: 新增 tag 属性 [#11139](https://github.com/vant-ui/vant/issues/11139)
- ImagePreview: 新增 image 插槽 [#11133](https://github.com/vant-ui/vant/issues/11133)
- Toast: 新增 wordBreak 选项 [#11147](https://github.com/vant-ui/vant/issues/11147)

**Bug Fixes**

- CouponList: 修复 coupon 位置错误的问题 [#11153](https://github.com/vant-ui/vant/issues/11153)
- CouponList: 修复输入框样式错误的问题 [#11155](https://github.com/vant-ui/vant/issues/11155)
- Swipe: 修复在 Popup 内时个别情况下渲染错误的问题 [#11162](https://github.com/vant-ui/vant/issues/11162)

### [v4.0.0-rc.5](https://github.com/vant-ui/vant/compare/v4.0.0-rc.4...v4.0.0-rc.5)

`2022-10-07`

**Feature**

- Field: 支持将 label-position 设置为 top [#11102](https://github.com/vant-ui/vant/issues/11102)
- Loading: 新增 icon 插槽 [#11109](https://github.com/vant-ui/vant/issues/11109)
- NavBar: 新增 clickable 属性 [#11048](https://github.com/vant-ui/vant/issues/11048)
- Stepper: 新增 auto-fixed 属性 [#11071](https://github.com/vant-ui/vant/issues/11071)

**Bug Fixes**

- DatePicker: 修复日期超出 maxDate 时格式化不正确的问题 [#11122](https://github.com/vant-ui/vant/issues/11122)
- Tabs: 修复开启 scrollspy 时个别情况下标题栏滚动位置错误的问题 [#11116](https://github.com/vant-ui/vant/issues/11116)
- Tabs: 修复开启 scrollspy 时 nav-bottom 插槽遮挡内容的问题 [#11115](https://github.com/vant-ui/vant/issues/11115)

### [v4.0.0-rc.4](https://github.com/vant-ui/vant/compare/v4.0.0-rc.3...v4.0.0-rc.4)

`2022-09-25`

**Feature**

- Field: end-validate 事件新增 message 参数 [#11080](https://github.com/vant-ui/vant/issues/11080)

**Bug Fixes**

- Tabs: 修复个别情况下页面滚动位置错误的问题 [#11085](https://github.com/vant-ui/vant/issues/11085)
- Tabs: 修复初始化时菜单横向滚动位置错误的问题 [#11059](https://github.com/vant-ui/vant/issues/11059)

### [v4.0.0-rc.3](https://github.com/vant-ui/vant/compare/v4.0.0-rc.2...v4.0.0-rc.3)

`2022-09-12`

**Feature**

- ConfigProvider: 新增 ConfigProviderThemeVars 类型 [#11034](https://github.com/vant-ui/vant/issues/11034)
- Notify: 新增 z-index 属性 [#11032](https://github.com/vant-ui/vant/issues/11032)
- 移除 `@popperjs/core` 依赖，减少安装体积 1.6MB [#11030](https://github.com/vant-ui/vant/issues/11030)

**Types**

- Toast: 修复缺少全局类型定义的问题 [#11033](https://github.com/vant-ui/vant/issues/11033)

### [v4.0.0-rc.2](https://github.com/vant-ui/vant/compare/v4.0.0-rc.1...v4.0.0-rc.2)

`2022-09-11`

**Breaking Changes**

- 调整了所有 CSS 变量的挂载位置，由 `body` 节点调整回 `:root` 节点，调整后与 Vant v3 版本保持一致，以便于 v3 项目更平滑地升级到 v4 版本。 [#11026](https://github.com/vant-ui/vant/issues/11026)

**Bug Fixes**

- Dialog: 修复过渡动画异常的问题 [#11028](https://github.com/vant-ui/vant/issues/11028)
- Empty: 修复深色模式下亮度过高的问题 [#11027](https://github.com/vant-ui/vant/issues/11027)

### [v4.0.0-rc.1](https://github.com/vant-ui/vant/compare/v4.0.0-rc.0...v4.0.0-rc.1)

`2022-09-10`

**Feature**

- 导出所有组件的 props，方便进行二次封装 [#11024](https://github.com/vant-ui/vant/issues/11024)
- Dialog: message-align 属性支持设置为 justify [#11014](https://github.com/vant-ui/vant/issues/11014)
- Image: 新增 block 属性 [#11022](https://github.com/vant-ui/vant/issues/11022)
- Toast: 新增 message 插槽 [#11018](https://github.com/vant-ui/vant/issues/11018)

**Bug Fixes**

- Picker: 修复部分情况下未正确更新选中值的问题 [#11009](https://github.com/vant-ui/vant/issues/11009)
- Locale: 修复读取 i18n 文案时可能获取到 JS 原生方法的问题 [#11010](https://github.com/vant-ui/vant/issues/11010)

### [v4.0.0-rc.0](https://github.com/vant-ui/vant/compare/v3.6.2...v4.0.0-rc.0)

`2022-09-04`

**Feature**

- 新增 [PickerGroup 选择器组](#/zh-CN/picker-group) 组件

**Bug Fixes**

- DatePicker: 修复未正确更新 modelValue 的问题 [#10984](https://github.com/vant-ui/vant/issues/10984)
- DatePicker: 修复 min-date 属性未正确生效的问题 [#10985](https://github.com/vant-ui/vant/issues/10985)

### [v4.0.0-beta.1](https://github.com/vant-ui/vant/compare/v3.6.0...v4.0.0-beta.1)

`2022-08-24`

**Breaking Changes**

- Popup: 默认添加了 `box-sizing: border-box` 样式。
- Popup: 调整了 `position="center"` 时的水平居中方式，以解决弹窗宽度无法正确自适应的问题。

```less
// Vant 3
.van-popup--center {
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

// Vant 4
.van-popup--center {
  left: 0;
  right: 0;
  width: fit-content;
  max-width: calc(100vw - var(--van-padding-md) * 2);
  margin: 0 auto;
  transform: translateY(-50%);
}
```

**New Component**

- 新增 [Space 间距](#/zh-CN/space) 组件, 由 [@LadyChatterleyLover](https://github.com/LadyChatterleyLover) 贡献 [#10857](https://github.com/vant-ui/vant/issues/10857)

**Feature**

- ConfigProvider: 新增 z-index 属性，用于设置弹窗组件的 z-index [#10915](https://github.com/vant-ui/vant/issues/10915)
- Form: 新增 rule 的 validateEmpty 选项 [#10913](https://github.com/vant-ui/vant/issues/10913)
- Popup: 新增 role 和 tabindex，优化无障碍访问 [#10894](https://github.com/vant-ui/vant/issues/10894)
- TouchEmulator: 支持 .mjs 后缀 [#10888](https://github.com/vant-ui/vant/issues/10888)

**Feature**

- ConfigProvider: 新增 theme-vars-dark 和 theme-vars-light 属性 [#10939](https://github.com/vant-ui/vant/issues/10939)
- Picker: 新增 clickOption 事件 [#10865](https://github.com/vant-ui/vant/issues/10865)
- 为 scroll 事件添加了正确的 passive 标记来提升滚动性能 [#10951](https://github.com/vant-ui/vant/issues/10951)
- @vant/use: 优化 useEventListener 类型定义 [#10952](https://github.com/vant-ui/vant/issues/10952)

**Bug Fixes**

- ConfigProvider: 修复销毁时没有回收全局样式类的问题 [#10898](https://github.com/vant-ui/vant/issues/10898)
- 修复 touchstart 导致控制台出现 passive event warning 的问题 [#10954](https://github.com/vant-ui/vant/issues/10954)
- Tabs: 修复开启 swipeable 时，resize 方法无法正确生效的问题 [#10964](https://github.com/vant-ui/vant/issues/10964)
- 修复在 WebStorm 下标签无法自动补全的问题 [#10946](https://github.com/vant-ui/vant/issues/10946)
- Badge: 修复使用 show-zero 时字符串 `'0'` 不生效的问题 [#10921](https://github.com/vant-ui/vant/issues/10921)
- Calendar: 修复关闭弹窗过程中内容白屏的问题 [#10910](https://github.com/vant-ui/vant/issues/10910)
- Calendar: 修复控制台出现读取 getFullYear 异常的问题 [#10909](https://github.com/vant-ui/vant/issues/10909)
- Empty: 修复在 Tab 下嵌套使用时渲染异常的问题 [#10943](https://github.com/vant-ui/vant/issues/10943)
- Popover: 修复在 Popup 下嵌套使用时无法滚动的问题 [#10949](https://github.com/vant-ui/vant/issues/10949)
- PullRefresh: 修复 Chrome 控制台出现 passive event warning 的问题 [#10938](https://github.com/vant-ui/vant/issues/10938)
- Search: 修复 --van-search-input-height 样式变量不生效的问题 [#10911](https://github.com/vant-ui/vant/issues/10911)

### [v4.0.0-beta.0](https://github.com/vant-ui/vant/compare/v3.5.2...v4.0.0-beta.0)

`2022-07-16`

**Breaking Changes**

- Toast: 重新设计函数调用 API [#10804](https://github.com/vant-ui/vant/issues/10804)
- Dialog: 重新设计函数调用 API [#10781](https://github.com/vant-ui/vant/issues/10781)
- Notify: 重新设计函数调用 API[#10782](https://github.com/vant-ui/vant/issues/10782)
- ImagePreview: 重新设计函数调用 API [#10802](https://github.com/vant-ui/vant/issues/10802)

关于以上改动的详细描述和迁移方法，请参考 [从 v3 升级到 v4](/vant/v4/#/zh-CN/migrate-from-v3) 的 「API 调整」部分。

**Feature**

- 新增 @vant/compat 包，用于辅助代码迁移 [#10806](https://github.com/vant-ui/vant/issues/10806)
- Calendar: 新增 getSelectedDate 方法 [419a8e](https://github.com/vant-ui/vant/commit/419a8e4f0e6454b9aac30d5800318deabec099cb)
- 由于主题定制方式调整，发布到 npm 的代码中将不再包含 .less 样式源文件，从而减少 npm 包体积 [#10752](https://github.com/vant-ui/vant/issues/10752)

**Bug Fixes**

- Uploader: 修复预览图片时会展示上传失败的图片的问题 [#10790](https://github.com/vant-ui/vant/issues/10790)

### [v4.0.0-alpha.4](https://github.com/vant-ui/vant/compare/v3.5.0-beta.0...v4.0.0-alpha.4)

`2022-05-31`

**Feature**

- 适配 nuxt 3，现在 dist 目录下所有 esmodule 文件将使用 `.mjs` 文件后缀 [#10625](https://github.com/vant-ui/vant/issues/10625)

### [v4.0.0-alpha.3](https://github.com/vant-ui/vant/compare/v3.4.9...v4.0.0-alpha.3)

`2022-05-02`

**Feature**

- Form: 支持同时设置多个 validate-trigger 值 [#10544](https://github.com/vant-ui/vant/issues/10544)
- Empty: 支持在无网络的环境下离线使用，图片从 CDN 调整为内联的 SVG 图片 [#10514](https://github.com/vant-ui/vant/issues/10514) [#10515](https://github.com/vant-ui/vant/issues/10515) [#10516](https://github.com/vant-ui/vant/issues/10516)
- Loading: 优化无障碍访问 [#10568](https://github.com/vant-ui/vant/issues/10568)

**Bug Fixes**

- Search: 修复暗色模式下样式错误的问题 [#10527](https://github.com/vant-ui/vant/issues/10527)
- @vant/area-data: 修复发布到 npm 时包含 tsconfig.json 文件导致编译错误的问题 [f927f6](https://github.com/vant-ui/vant/commit/f927f6a7518cf7d08ec8abc5dd35019685c19e3a)

### [v4.0.0-alpha.2](https://github.com/vant-ui/vant/compare/v3.4.8...v4.0.0-alpha.2)

`2022-04-16`

**Feature**

- CalendarDay: 增加日期行间距 [#10441](https://github.com/vant-ui/vant/issues/10441)
- Empty: 支持单独设置 image 的宽高 [#10465](https://github.com/vant-ui/vant/issues/10465)
- Field: 新增 enterkeyhint 属性 [#10478](https://github.com/vant-ui/vant/issues/10478)
- Form: 新增 getValues 方法 [#10511](https://github.com/vant-ui/vant/issues/10511)
- Icon: 新增 qq、weibo 等图标 [#10468](https://github.com/vant-ui/vant/issues/10468)
- Locale: 新增 Danish 丹麦语 [#10513](https://github.com/vant-ui/vant/issues/10513)
- ShareSheet: 不再依赖 CDN 上的图片资源，使用 iconfont 代替 [#10469](https://github.com/vant-ui/vant/issues/10469)
- web-types.json 文件增加 event arguments 信息 [#10474](https://github.com/vant-ui/vant/issues/10474)

**Bug Fixes**

- DatetimePicker: 修复 modeValue 与选中的数据不一致的问题 [#10448](https://github.com/vant-ui/vant/issues/10448)
- Rate: 修复多行时滑动选中不正确的问题 [#10500](https://github.com/vant-ui/vant/issues/10500)

### [v4.0.0-alpha.1](https://github.com/vant-ui/vant/compare/v3.4.6...v4.0.0-alpha.1)

`2022-03-19`

**Feature**

- @vant/area-data: 新增南京市江北新区 [#10410](https://github.com/vant-ui/vant/issues/10410)
- Locale: 新增老挝语 [#10388](https://github.com/vant-ui/vant/issues/10388)

**Bug Fixes**

- Calendar: 修复暗色模式下标题颜色 [#10403](https://github.com/vant-ui/vant/issues/10403)
- Picker: 修复暗色模式下标题颜色 [#10403](https://github.com/vant-ui/vant/issues/10403)
- ConfigProvider: 修复默认设置暗色模式不生效的问题 [#10413](https://github.com/vant-ui/vant/issues/10413)
- DatePicker: 修复更新 v-model 不生效的问题 [#10415](https://github.com/vant-ui/vant/issues/10415)
- Dialog: 修复暗色模式下标题和文本颜色 [#10379](https://github.com/vant-ui/vant/issues/10379)
- IndexBar: 修复底部索引无法高亮的问题 [#10404](https://github.com/vant-ui/vant/issues/10404)

### 4.0.0-alpha.0

`2022-02-21`

**不兼容更新**

参见 [从 v3 升级到 v4](#/zh-CN/migrate-from-v3)。

**Feature**

- ConfigProvider: 新增 `theme` 属性，用于开启深色模式
- ConfigProvider: 新增 `ConfigProviderTheme` 类型

**Style**

在之前的版本中，Vant 组件有两种色彩风格，一部分采用红色作为主色调，另一部分采用蓝色。为了保持色彩规范的统一，我们在 Vant 4 中对组件的主色调进行了统一，所有组件均采用蓝色作为主色调。

以下组件的默认色值风格由红色调整为蓝色：

- AddressEdit
- AddressList
- Card
- Calendar
- Cascader
- ContactList
- ContactEdit
- CouponList
- Dialog
- DropdownMenu
- IndexBar
- Sidebar
- Steps
- Tabs
- TreeSelect

其他：

- `--van-font-bold` 的默认值由 `500` 调整为 `600`
- ActionBar: 调整 `--van-action-bar-icon-text-color` 变量的默认值为 `--van-text-color`
- AddressList: 重命名 `--van-address-list-item-radio-icon-color` 为 `--van-address-list-radio-color`
- Button: 默认圆角大小从 `2px` 调整为 `4px`
- Button: 默认按钮的边框颜色调整为 `--van-gray-4`
- Button: 调整 `font-smoothing`，默认使用粗体文字
- Cell: 只设置 `value` 时，内容不再会靠左对齐
- Card: 调整 `--van-card-background` 变量的默认值为 `--van-background`
- Card: 调整 `--van-card-price-color` 变量的默认值为 `--van-text-color`
- Card: 调整 `--van-card-desc-color` 变量的默认值为 `--van-text-color-2`
- ContactList: 重命名 `--van-contact-list-item-radio-icon-color` 为 `--van-contact-list-radio-color`
- CouponList: 重命名 `--van-coupon-corner-checkbox-icon-color` 为 `--van-coupon-checkbox-color`
- Field: 调整 `--van-field-label-color` 变量的默认值为 `--van-text-color`
- Switch: 移除 `--van-switch-border` 变量
- Switch: 调整 `--van-switch-size` 变量的默认值为 `26px`
- Switch: 调整 `--van-switch-background` 变量的默认值为 `rgba(120, 120, 128, 0.16)`
- Tabbar: 调整 `--van-tabbar-item-text-color` 变量的默认值为 `--van-text-color`
- GridItem: 调整 `--van-grid-item-text-color` 变量的默认值为 `--van-text-color`
