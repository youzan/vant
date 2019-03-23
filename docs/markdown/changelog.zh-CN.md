## 更新日志

## [v1.6.11](https://github.com/youzan/vant/tree/v1.6.11)
`2019-03-22`

**Improvements**

- Icon: 更新店铺相关图标 [\#3044](https://github.com/youzan/vant/pull/3044)
- Radio: 新增 click 事件 [\#2990](https://github.com/youzan/vant/pull/2990)
- Checkbox: 新增 click 事件 [\#2990](https://github.com/youzan/vant/pull/2990)
- Button: 新增 hairline 属性 [\#3031](https://github.com/youzan/vant/pull/3031)
- Button: 新增 touchstart 属性 [\#3039](https://github.com/youzan/vant/pull/3039)
- Dialog: 新增 getContainer 选项 [\#3040](https://github.com/youzan/vant/pull/3040)
- NoticeBar: 新增 wrapable 属性 [\#2992](https://github.com/youzan/vant/pull/2992)
- Field: 新增 error-message-align 属性 [\#3016](https://github.com/youzan/vant/pull/3016)
- Sku: 支持在初始化时设置选中商品数量 [\#3045](https://github.com/youzan/vant/pull/3045)
- Actionsheet: 支持同时设置默认插槽和 cancel-text [\#3021](https://github.com/youzan/vant/pull/3021)

**Bug Fixes**

- 修复 Swipe 在部分浏览器上文字模糊的问题 [\#3030](https://github.com/youzan/vant/pull/3030)
- 修复 Steps 垂直方向 active-icon 样式错误的问题 [\#3007](https://github.com/youzan/vant/pull/3007)
- 修复 Toast 在某些情况下遮罩层无法被清除的问题 [\#3025](https://github.com/youzan/vant/pull/3025)
- 修复 Dialog 使用 getContainer 属性时遮罩层位置错误的问题 [\#3041](https://github.com/youzan/vant/pull/3041)
- 修复 Collapse 在渲染较慢的情况下可能出现高度为 0 的问题 [\#2993](https://github.com/youzan/vant/pull/2993)


## [v1.6.10](https://github.com/youzan/vant/tree/v1.6.10)
`2019-03-17`

**Improvements**

- Icon: 新增 tag 属性 [\#2986](https://github.com/youzan/vant/pull/2986)
- Cell: 新增 label 插槽 [\#2956](https://github.com/youzan/vant/pull/2956)
- Toast: 新增 onClose 属性 [\#2964](https://github.com/youzan/vant/pull/2964)
- AddressEdit: 新增 setAddressDetail 方法 [\#2984](https://github.com/youzan/vant/pull/2984)

**Bug Fixes**

- 修复 List 子元素 scoped 样式无法生效的问题 [\#2983](https://github.com/youzan/vant/pull/2983)
- 修复 Steps 设置为 vertical 时样式错误的问题 [\#2981](https://github.com/youzan/vant/pull/2981)
- 修复 Coupon 单独传入 value-desc 属性时不展示的问题 [\#2980](https://github.com/youzan/vant/pull/2980)
- 修复 Uploader 使用 before-read 属性后重复上传同个文件不触发事件的问题 [\#2971](https://github.com/youzan/vant/pull/2971)


## [v1.6.9](https://github.com/youzan/vant/tree/v1.6.9)
`2019-03-11`

**Improvements**

- Field: 新增 size 属性 [\#2936](https://github.com/youzan/vant/pull/2936)
- Collapse: 新增 size 属性 [\#2946](https://github.com/youzan/vant/pull/2946)
- Collapse: 新增 border 属性 [\#2933](https://github.com/youzan/vant/pull/2933)
- CellGroup: 新增 title 属性 [\#2928](https://github.com/youzan/vant/pull/2928)
- Steps: 新增 active-icon 属性 [\#2934](https://github.com/youzan/vant/pull/2934)
- Picker: 新增 default-index 属性 [\#2935](https://github.com/youzan/vant/pull/2935)
- Actionsheet: 新增 index 作为 select 事件的回调参数 [\#2917](https://github.com/youzan/vant/pull/2917)

**Bug Fixes**

- 修复 Card origin-price 插槽未生效的问题 [\#2927](https://github.com/youzan/vant/pull/2927)
- 修复 Swipe change 事件触发时机错误的问题 [\#2909](https://github.com/youzan/vant/pull/2909)


## [v1.6.8](https://github.com/youzan/vant/tree/v1.6.8)
`2019-03-02`

**Improvements**

- CouponList: 优化列表为空的样式 [\#2878](https://github.com/youzan/vant/pull/2878)
- 支持在函数式组件上使用 ref 属性 [\#2863](https://github.com/youzan/vant/pull/2863)

**Bug Fixes**

- 修复 Field label 插槽未生效的问题 [\#2872](https://github.com/youzan/vant/pull/2872)
- 修复 Icon new 图标无法展示的问题 [\#2887](https://github.com/youzan/vant/pull/2887)
- 修复 AddressList 使用 switchable 属性时的样式错误 [\#2886](https://github.com/youzan/vant/pull/2886)
- 修复 Tab 使用 offset-top 属性时切换标签未滚动到正确位置的问题 [\#2873](https://github.com/youzan/vant/pull/2873)


## [v1.6.7](https://github.com/youzan/vant/tree/v1.6.7)
`2019-02-26`

**Improvements**

- Button: 新增 loading-size 属性 [\#2854](https://github.com/youzan/vant/pull/2854)
- Stepper: 新增 focus 事件 [\#2841](https://github.com/youzan/vant/pull/2841)
- Sku: 支持自定义 Stepper 库存信息 [\#2839](https://github.com/youzan/vant/pull/2839)
- Icon: 优化部分图标的圆角线条 [\#2856](https://github.com/youzan/vant/pull/2856)

**Bug Fixes**

- 修复 Actionsheet lazy-render 属性不生效的问题 [\#2840](https://github.com/youzan/vant/pull/2840)
- 修复 Actionsheet get-container 属性不生效的问题 [\#2853](https://github.com/youzan/vant/pull/2853)
- 修复 Tab 初始化时导航栏未自动滚动到当前标签位置的问题 [\#2857](https://github.com/youzan/vant/pull/2857)
- 修复 Checkbox 与 Cell 组件嵌套用法在 Vue 2.6+ 上的兼容问题 [\#2855](https://github.com/youzan/vant/pull/2855)
- 修复 CouponList 不可用券列表为空时展示错误的问题 [\#2845](https://github.com/youzan/vant/pull/2845)


## [v1.6.6](https://github.com/youzan/vant/tree/v1.6.6)
`2019-02-24`

**Improvements**

- Button: 新增 info 类型 [\#2831](https://github.com/youzan/vant/pull/2831)
- Picker: 新增 title 插槽 [\#2811](https://github.com/youzan/vant/pull/2811)
- Tab: 新增 lazy-render 属性 [\#2800](https://github.com/youzan/vant/pull/2800)
- Tab: 新增 nav-left、nav-right 插槽 [\#2828](https://github.com/youzan/vant/pull/2828)
- PasswordInput: 新增 mask 属性 [\#2796](https://github.com/youzan/vant/pull/2796)
- Stepper: 样式升级 [\#2790](https://github.com/youzan/vant/pull/2790)
- Search: 样式升级, 新增 shape、label 属性 [\#2788](https://github.com/youzan/vant/pull/2788)
- Dialog: 支持在 message 中使用换行符 [\#2799](https://github.com/youzan/vant/pull/2799)
- Notify: 支持在 message 中使用换行符 [\#2798](https://github.com/youzan/vant/pull/2798)

**Bug Fixes**

- 修复 Cell title-class 类型定义错误 [\#2780](https://github.com/youzan/vant/pull/2780)
- 修复 Tab 在 card 类型中嵌套 line 类型时样式错误的问题 [\#2825](https://github.com/youzan/vant/pull/2825)


## [v1.6.5](https://github.com/youzan/vant/tree/v1.6.5)
`2019-02-17`

**Improvements**

- Button: 新增 url、to、replace 属性 [\#2754](https://github.com/youzan/vant/pull/2754)
- Tabs: 新增 background 属性 [\#2772](https://github.com/youzan/vant/pull/2772)
- Tabs: 新增 title-active-color、title-inactive-color 属性 [\#2773](https://github.com/youzan/vant/pull/2773)
- CouponCell: 重构为函数式组件 [\#2759](https://github.com/youzan/vant/pull/2759)
- AddressList: 重构为函数式组件 [\#2757](https://github.com/youzan/vant/pull/2757)
- Sku: 部分重构为函数式组件 [\#2756](https://github.com/youzan/vant/pull/2756)

**Bug Fixes**

- 修复 Collapse title 插槽不生效的问题 [\#2753](https://github.com/youzan/vant/pull/2753)
- 修复 Panel 使用 v-slot 不生效的问题 [\#2752](https://github.com/youzan/vant/pull/2752)


## [v1.6.4](https://github.com/youzan/vant/tree/v1.6.4)
`2019-02-14`

**Bug Fixes**

- 修复 Sku 购买事件错误地触发为加入购物车事件的问题 [\#2741](https://github.com/youzan/vant/pull/2741)


## [v1.6.3](https://github.com/youzan/vant/tree/v1.6.3)
`2019-02-14`

**Improvements**

- Toast: 新增 getContainer 属性 [\#2724](https://github.com/youzan/vant/pull/2724)
- Button: 新增 loading-text 属性 [\#2732](https://github.com/youzan/vant/pull/2732)
- Coupon: 新增 value-desc、unit-desc 属性 [\#2710](https://github.com/youzan/vant/pull/2710)
- Card: 重构为函数式组件 [\#2740](https://github.com/youzan/vant/pull/2740)
- Cell: 重构为函数式组件 [\#2729](https://github.com/youzan/vant/pull/2729)
- Switch: 重构为函数式组件 [\#2736](https://github.com/youzan/vant/pull/2736)
- GoodsAction: 重构为函数式组件 [\#2730](https://github.com/youzan/vant/pull/2730)

**Bug Fixes**

- 修复 Field 左侧内容较多时右侧按钮样式错误的问题 [\#2713](https://github.com/youzan/vant/pull/2713)
- 修复 Field 设置为 datetime-local 类型时在 iOS 下高度错误的问题 [\#2720](https://github.com/youzan/vant/pull/2720)
- 修复 Sku 在 iOS 12 下点击区域可能出现偏移的问题 [\#2722](https://github.com/youzan/vant/pull/2722)
- 修复 SwipeCell left-width 设置为 0 时渲染错误的问题 [\#2737](https://github.com/youzan/vant/pull/2737)
- 修复函数式组件传入多个同名事件导致错误的问题 [\#2717](https://github.com/youzan/vant/pull/2717)


## [v1.6.2](https://github.com/youzan/vant/tree/v1.6.2)
`2019-02-10`

**Improvements**

- Tag: 新增 click 事件 [\#2693](https://github.com/youzan/vant/pull/2693)
- Swipe: 新增 click 事件 [\#2690](https://github.com/youzan/vant/pull/2690)
- NoticeBar: 新增 close 事件 [\#2692](https://github.com/youzan/vant/pull/2692)
- PullRefresh: 新增 success-text、success-duration 属性 [\#2709](https://github.com/youzan/vant/pull/2709)
- 针对 Vue 2.6 优化插槽渲染效率  [\#2688](https://github.com/youzan/vant/pull/2688)

**Bug Fixes**

- 修复函数式组件未继承标签属性的问题 [\#2706](https://github.com/youzan/vant/pull/2706)
- 修复 Swipe 内懒加载图片无法正确加载的问题 [\#2708](https://github.com/youzan/vant/pull/2708)
- 修复 Collpase 在特定情况下高度计算错误的问题 [\#2702](https://github.com/youzan/vant/pull/2702)
- 修复 Dialog 点击蒙层时无法触发 beforeClose 属性的问题 [\#2707](https://github.com/youzan/vant/pull/2707)
- 修复 AddressList 在禁用状态下样式错误的问题 [\#2687](https://github.com/youzan/vant/pull/2687)
- 修复 AddressEdit 在 Vue 2.6 版本下无法选择推荐地址的问题 [\#2689](https://github.com/youzan/vant/pull/2689)


## [v1.6.1](https://github.com/youzan/vant/tree/v1.6.1)
`2019-02-05`

**Improvements**

- 修复函数式组件无法继承指令和原生事件的问题 [\#2686](https://github.com/youzan/vant/pull/2686)


## [v1.6.0](https://github.com/youzan/vant/tree/v1.6.0)
`2019-02-04`

**Breaking changes**

- Radio: 重写了组件结构，现在提供和 Checkbox 一致的 UI 和 DOM 结构 [\#2651](https://github.com/youzan/vant/pull/2651)

**Improvements**

- 使用 JSX 重写了所有组件
- 部分组件现在是函数式组件了，渲染性能更佳
- Card: 新增 tag 插槽 [\#2636](https://github.com/youzan/vant/pull/2636)
- Radio: 新增 icon 插槽 [\#2651](https://github.com/youzan/vant/pull/2651)
- Radio: 新增 shape 属性 [\#2651](https://github.com/youzan/vant/pull/2651)
- Icon: 新增 weapp-nav 图标 [\#2682](https://github.com/youzan/vant/pull/2682)
- Toast: 新增 className 属性 [\#2680](https://github.com/youzan/vant/pull/2680)
- Notify: 新增 className 属性 [\#2681](https://github.com/youzan/vant/pull/2681)
- Popup: 新增 open/close 事件 [\#2649](https://github.com/youzan/vant/pull/2649)
- Popup: 新增 opened/closed 事件 [\#2650](https://github.com/youzan/vant/pull/2650)

**Bug Fixes**

- 修复 SwipeCell 左侧内容滑动距离过大的问题 [\#2633](https://github.com/youzan/vant/pull/2633)
- 修复 ContactList 列表内容较多时按钮位置错误的问题 [\#2634](https://github.com/youzan/vant/pull/2634)
- 修复 Toast clear 方法在 multiple 模式下可能报错的问题 [\#2635](https://github.com/youzan/vant/pull/2635)
- 修复 Popup 使用 get-container 属性后销毁时可能报错的问题 [\#2679](https://github.com/youzan/vant/pull/2679)


## [v1.5.7](https://github.com/youzan/vant/tree/v1.5.7)
`2019-01-24`

**Improvements**

- 新增 live 图标
- 新增 lock 图标
- 新增 audio 图标
- 新增 column 图标
- 新增 replay 图标
- 新增 shrink 图标
- 新增 graphic 图标
- 新增 invition 图标
- 新增 ascending 图标
- 新增 descending 图标
- 新增 play-circle 图标
- 新增 stop-circle 图标
- 新增 pause-circle 图标
- 新增 play-circle-o 图标
- 新增 stop-circle-o 图标
- 新增 pause-circle-o 图标
- Field: 新增 click-left-icon 事件 [\#2605](https://github.com/youzan/vant/pull/2605)

## [v1.5.6](https://github.com/youzan/vant/tree/v1.5.6)
`2019-01-22`

**Improvements**

- Card: 新增 origin-price slot [\#2588](https://github.com/youzan/vant/pull/2588)
- Switch: 新增 active-value、inactive-value 属性 [\#2590](https://github.com/youzan/vant/pull/2590)
- SwitchCell: 新增 active-value、inactive-value 属性 [\#2591](https://github.com/youzan/vant/pull/2591)

**Bug Fixes**

- 修复 Card centered 属性不生效的问题 [\#2589](https://github.com/youzan/vant/pull/2589)
- 修复 Icon name 属性传入 URL 不生效的问题 [\#2585](https://github.com/youzan/vant/pull/2585)


## [v1.5.5](https://github.com/youzan/vant/tree/v1.5.5)
`2019-01-21`

**Bug Fixes**

- 修复 Field type 属性不生效的问题 [\#2579](https://github.com/youzan/vant/pull/2579)


## [v1.5.4](https://github.com/youzan/vant/tree/v1.5.4)
`2019-01-20`

**Bug Fixes**

- 修复缺少 @vue/babel-helper-vue-jsx-merge-props 依赖的问题 [\#2474](https://github.com/youzan/vant/issues/2474)


## [v1.5.3](https://github.com/youzan/vant/tree/v1.5.3)
`2019-01-20`

**Improvements**

- List: 新增 error-text 属性 [\#2568](https://github.com/youzan/vant/pull/2568)
- Coupon: 新增 condition 属性 [\#2551](https://github.com/youzan/vant/pull/2551)
- ImagePreview: 新增 lazyLoad 属性 [\#2569](https://github.com/youzan/vant/pull/2569)
- NavBar: 新增样式相关 Less 变量 [\#2570](https://github.com/youzan/vant/pull/2570)
- Dialog: 默认开启 lazy-render [\#2495](https://github.com/youzan/vant/pull/2495)
- Toast: 支持在 message 中使用换行符 [\#2496](https://github.com/youzan/vant/pull/2496)
- Area: 新增 confirm-button-text、cancel-button-text 属性 [\#2556](https://github.com/youzan/vant/pull/2556)

**Bug Fixes**

- 修复 Card 价格区域样式 [\#2549](https://github.com/youzan/vant/pull/2549)
- 修复 Radio 未选中状态图标颜色错误 [\#2484](https://github.com/youzan/vant/pull/2484)
- 修复 Radio label-position 类型定义错误 [\#2485](https://github.com/youzan/vant/pull/2485)
- 修复 Dialog 按钮点击事件触发时机错误 [\#2571](https://github.com/youzan/vant/pull/2571)


## [v1.5.2](https://github.com/youzan/vant/tree/v1.5.2)
`2019-01-10`

**Improvements**

- Color: 基础绿色调整为微信绿 [\#2479](https://github.com/youzan/vant/pull/2479)
- Icon: 新增 cart-circle 图标 [\#2480](https://github.com/youzan/vant/pull/2480)
- Coupon: 新增 description 属性 [\#2458](https://github.com/youzan/vant/pull/2458)
- ImagePreview: 新增 className 属性 [\#2433](https://github.com/youzan/vant/pull/2433)
- Sku: 支持隐藏已售罄的规格 [\#2472](https://github.com/youzan/vant/pull/2472)

**Bug Fixes**

- 修复 Icon 部分图标的线条应使用圆角的问题 [\#2437](https://github.com/youzan/vant/pull/2437)
- 修复 DatetimePicker time 类型 v-model 变化后未触发更新的问题 [\#2427](https://github.com/youzan/vant/pull/2427)
- 修复 SubmitBar 未传 price 时无法隐藏价格和文本的问题 [\#2469](https://github.com/youzan/vant/pull/2469)
- 修复 Swipe 在使用 swipeTo 时可能导致轮播空白的问题 [\#2471](https://github.com/youzan/vant/pull/2471)
- 修复 Stepper 输入框为空且最小值为 0 时无法自动设置默认值的问题 [\#2470](https://github.com/youzan/vant/pull/2470)
- 修复 Tab 首次渲染时会触发底部条动画的问题 [\#2459](https://github.com/youzan/vant/pull/2459)


## [v1.5.1](https://github.com/youzan/vant/tree/v1.5.1)
`2019-01-01`

**Improvements**

- Card: 新增 price、num 插槽 [\#2416](https://github.com/youzan/vant/pull/2416)
- Slider: 新增 button 插槽 [\#2373](https://github.com/youzan/vant/pull/2373)
- Slider: 新增 active-color、inactive-color 属性 [\#2374](https://github.com/youzan/vant/pull/2374)
- Tabbar: 新增 active-color 属性 [\#2372](https://github.com/youzan/vant/pull/2372)
- Sku: 新增 sku-selected 事件 [\#2386](https://github.com/youzan/vant/pull/2386)

**Bug Fixes**

- 修复 Card 描述过长时的样式问题 [\#2414](https://github.com/youzan/vant/pull/2414)
- 修复 ContactList 未注册依赖的 button 组件的问题 [\#2415](https://github.com/youzan/vant/pull/2415)
- 修复 Icon 在 file 协议网页下无法展示的问题 [\#2385](https://github.com/youzan/vant/pull/2385)


## [v1.5.0](https://github.com/youzan/vant/tree/v1.5.0)
`2018-12-22`

**Breaking changes**

在 1.5.0 版本中，我们统一图标规范并重绘了所有图标，同时增加约 100 个新图标。对于同一个图标，我们会提供`实底`和`线框`两种风格，以星星图标为例，`star`表示实底风格的星星，`star-o`表示线框风格的星星。

<img width="375" height="124" src="//img.yzcdn.cn/vant/icon-style-1222.png">

同时我们也对原有图标做了一定调整，具体改动如下：

- 移除 edit-data
- 移除 pending-deliver
- 移除 pending-evaluate
- 移除 points-mall
- 移除 exchange-record
- 重命名 warn 为 info
- 重命名 check 为 circle
- 重命名 add2 为 add-square
- 重命名 question2 为 question
- 重命名 password-view 为 eye
- 重命名 password-not-view 为 closed-eye
- 重命名 value-card 为 balance-o
- 重命名 receive-gift 为 gift
- 重命名 pending-orders 为 orders-o
- 重命名 gift-card-pay 为 gift-card

同时我们对下列组件的样式细节进行了优化：

- Cell 单元格
- Card 卡片
- Checkbox 复选框
- Collapse 折叠面板
- Tab 标签页
- Toast 轻提示
- Switch 开关
- Swipe 轮播
- TreeSelect 分类选择

**Improvements**

- 支持通过 vetur 插件实现组件标签/属性名的提示和自动补全 [\#2261](https://github.com/youzan/vant/pull/2261)
- 支持通过大驼峰格式的标签名使用组件 [\#2296](https://github.com/youzan/vant/pull/2296)
- Tab: 新增 ellipsis 属性 [\#2299](https://github.com/youzan/vant/pull/2299)
- Tab: 新增 line-height 属性 [\#2357](https://github.com/youzan/vant/pull/2357)
- Tag: 新增 text-color 属性 [\#2277](https://github.com/youzan/vant/pull/2277)
- Card: 新增 lazy-load 属性 [\#2301](https://github.com/youzan/vant/pull/2301)
- Coupon: 新增 currency 属性 [\#2274](https://github.com/youzan/vant/pull/2274) [\#2256](https://github.com/youzan/vant/pull/2256)
- Dialog: 新增 message-align 属性 [\#2259](https://github.com/youzan/vant/pull/2259)
- Stepper: 新增 async-change 属性 [\#2318](https://github.com/youzan/vant/pull/2318)
- SwitchCell: 新增 active-color、inactive-color 属性 [\#2273](https://github.com/youzan/vant/pull/2273)
- NoticeBar: 支持使用内置图标 [\#2305](https://github.com/youzan/vant/pull/2305)
- TreeSelect: 支持禁用左侧栏选项 [\#2308](https://github.com/youzan/vant/pull/2308)

**Bug Fixes**

- 修复 Dialog 在部分低端机型上文字模糊的问题 [\#2300](https://github.com/youzan/vant/pull/2300)
- 修复 Checkbox 文字高度错误的问题 [\#2293](https://github.com/youzan/vant/pull/2293)
- 修复 Field 使用 maxlength 属性后中文输入法截断的问题 [\#2295](https://github.com/youzan/vant/pull/2295)
- 修复 Swipe 包裹在 keep-alive 组件内时未重新初始化的问题 [\#2297](https://github.com/youzan/vant/pull/2297)
- 修复 Swipe 在边界情况下可能报错的问题 [\#2253](https://github.com/youzan/vant/pull/2253)
- 修复 Swipe 事件冒泡导致无法嵌套使用的问题 [\#2355](https://github.com/youzan/vant/pull/2355)
- 修复 Tab 在使用 animated 属性时标签内容无法展示的问题 [\#2238](https://github.com/youzan/vant/pull/2238) [\#2322](https://github.com/youzan/vant/pull/2322)
- 修复 Tab 在禁用所有选项时报错的问题 [\#2356](https://github.com/youzan/vant/pull/2356)
- 修复 Tab 在使用 color 属性时下划线初始颜色错误的问题 [\#2344](https://github.com/youzan/vant/pull/2344)
- 修复 Tabbar 提示位置错误的问题 [\#2257](https://github.com/youzan/vant/pull/2257)
- 修复 Toast 实例上缺少 clear 方法类型定义的问题 [\#2354](https://github.com/youzan/vant/pull/2354)
- 修复 dev 命令在 node 10 环境下报错的问题 [\#2251](https://github.com/youzan/vant/pull/2251)
- 修复 dev 命令在 windows 环境下报错的问题 [\#2229](https://github.com/youzan/vant/pull/2229)


## [v1.4.8](https://github.com/youzan/vant/tree/v1.4.8)
`2018-12-05`

**Improvements**

- Sku: 新增 hide-quota-text 属性 [\#2216](https://github.com/youzan/vant/pull/2216)
- ImagePreview: 新增 asyncClose 属性 [\#2198](https://github.com/youzan/vant/pull/2198)
- ImagePreview: 新增 onClose 回调参数 [\#2197](https://github.com/youzan/vant/pull/2197)
- ImagePreview: 新增淡入淡出动画效果 [\#2196](https://github.com/youzan/vant/pull/2196)

**Bug Fixes**

- 修复 Notify TS 类型定义错误 [\#2210](https://github.com/youzan/vant/pull/2210)
- 修复 Dialog 通过函数调用时默认值错误 [\#2208](https://github.com/youzan/vant/pull/2208)
- 修复 ImagePreview 指示器颜色错误 [\#2187](https://github.com/youzan/vant/pull/2187)


## [v1.4.7](https://github.com/youzan/vant/tree/v1.4.7)
`2018-11-27`

**Improvements**

- 新增 Notify 消息通知组件 [\#2135](https://github.com/youzan/vant/pull/2135)
- Cell: 新增 title-class、value-class、label-class 属性 [\#2138](https://github.com/youzan/vant/pull/2138)
- Icon: 增加更多基础图标 [\#2159](https://github.com/youzan/vant/pull/2159) [\#2169](https://github.com/youzan/vant/pull/2169)
- Icon: 支持传入图片链接作为图标展示 [\#2149](https://github.com/youzan/vant/pull/2149)
- List: 新增 finished-text 属性 [\#2131](https://github.com/youzan/vant/pull/2131)
- Rate: 新增 icon、void-icon 属性 [\#2148](https://github.com/youzan/vant/pull/2148)
- NavBar: 新增 border 属性 [\#2143](https://github.com/youzan/vant/pull/2143)
- Style: 新增多个内置 transition 动画 [\#2163](https://github.com/youzan/vant/pull/2163)
- CouponCell: 移除了默认外边框 [\#2145](https://github.com/youzan/vant/pull/2145)
- CDN 服务商更换为 jsdelivr，以提供更快的国内访问速度 [\#2167](https://github.com/youzan/vant/pull/2167)

**Bug Fixes**

- 修复 ImagePreview 页码出现 NaN 的问题 [\#2146](https://github.com/youzan/vant/pull/2146)
- 修复 Toast 在 iOS 设备上文字错误换行的问题 [\#2142](https://github.com/youzan/vant/pull/2142)
- 修复 GoodsAction 部分样式代码重复的问题 [\#2140](https://github.com/youzan/vant/pull/2140)
- 修复 DatetimePicker 设置了 minDate 时初始 value 错误的问题 [\#2137](https://github.com/youzan/vant/pull/2137)

PS: 不小心跳过了 1.4.6 版本  ^_^

## [v1.4.5](https://github.com/youzan/vant/tree/v1.4.5)
`2018-11-23`

**Improvements**

- Tab: 新增 animated 属性 [\#2126](https://github.com/youzan/vant/pull/2126)
- Tab: 更新标题栏样式 [\#2120](https://github.com/youzan/vant/pull/2120)
- Badge: 更新提示样式 [\#2122](https://github.com/youzan/vant/pull/2122)
- Radio: 新增 checked-color 属性 [\#2129](https://github.com/youzan/vant/pull/2129)
- Swipe: 新增 indica为r-color 属性 [\#2110](https://github.com/youzan/vant/pull/2110)
- TreeSelect: 支持禁用选项 [\#2107](https://github.com/youzan/vant/pull/2107)

**Bug Fixes**

- 修复 Tab swipe-threshold 属性小于 4 时不生效的问题 [\#2128](https://github.com/youzan/vant/pull/2128)


## [v1.4.4](https://github.com/youzan/vant/tree/v1.4.4)
`2018-11-18`

**Improvements**

- Cell: 新增 size 属性 [\#2086](https://github.com/youzan/vant/pull/2086)
- Icon: 新增 star、star-o 图标 [\#2092](https://github.com/youzan/vant/pull/2092)
- ImagePreview: 新增 loop 属性 [\#2103](https://github.com/youzan/vant/pull/2103)
- Rate: 更新星星图标样式 [\#2093](https://github.com/youzan/vant/pull/2093)
- Dialog: 内容超过屏幕高度时展示滚动条 [\#2104](https://github.com/youzan/vant/pull/2104)

**Bug Fixes**

- 修复 Sku mobile 类型留言缺少 placeholder 的问题 [\#2098](https://github.com/youzan/vant/pull/2098)
- 修复 Tab line-width 传入 0 时不生效的问题 [\#2081](https://github.com/youzan/vant/pull/2081)
- 修复 Tab 在 sticky 模式下切换标签未自动滚动到顶部的问题 [\#2105](https://github.com/youzan/vant/pull/2105)
- 修复 Toast 最大宽度错误的问题 [\#2074](https://github.com/youzan/vant/pull/2074)
- 修复 Steps CSS 选择器优先级错误 [\#2072](https://github.com/youzan/vant/pull/2072)


## [v1.4.3](https://github.com/youzan/vant/tree/v1.4.3)
`2018-11-10`

**Improvements**

- Checkbox: 新增 checked-color 属性 [\#2057](https://github.com/youzan/vant/pull/2057)
- NumberKeyboard: 新增 close-but为n-text 属性 [\#2051](https://github.com/youzan/vant/pull/2051)
- Swipe: 优化手势操作体验 [\#2039](https://github.com/youzan/vant/pull/2039)
- 文档：重新对组件进行了分类 [\#2032](https://github.com/youzan/vant/pull/2032)

**Bug Fixes**

- 修复 Circle 在部分安卓手机上样式错误的问题 [\#2062](https://github.com/youzan/vant/pull/2062)
- 修复 DatetimePicker time 类型且使用 formatter 时获取当前值错误的问题 [\#2059](https://github.com/youzan/vant/pull/2059)
- 修复 Tab 可以通过手势切换到禁用项的问题 [\#2064](https://github.com/youzan/vant/pull/2064)


## [v1.4.2](https://github.com/youzan/vant/tree/v1.4.2)
`2018-11-04`

**Breaking changes**

- 优化引入样式的文件路径（仅影响手动引入样式的方式）详见[快速上手](#/zh-CN/quickstart). [\#2021](https://github.com/youzan/vant/pull/2021)
- 支持基于 Less 变量的定制主题方式，不再支持原先的定制主题方式，详见[定制主题](#/en-US/theme). [\#2027](https://github.com/youzan/vant/pull/2027)

**Improvements**

- Sku: 支持预览商品图片 [\#2019](https://github.com/youzan/vant/pull/2019)
- i18n: 支持土耳其语 [\#1998](https://github.com/youzan/vant/pull/1998)
- i18n: 支持繁体中文（台） [\#1999](https://github.com/youzan/vant/pull/1999)
- Icon: 新增 question2 图标 [\#2005](https://github.com/youzan/vant/pull/2005)
- Badge: 新增 change 事件 [\#2017](https://github.com/youzan/vant/pull/2017)
- Switch: 新增 active-color 属性 [\#2013](https://github.com/youzan/vant/pull/2013)
- Switch: 新增 inactive-color 属性 [\#2013](https://github.com/youzan/vant/pull/2013)
- Radio: 选中态颜色调整为蓝色 [\#2018](https://github.com/youzan/vant/pull/2018)
- Checkbox: 选中态颜色调整为蓝色 [\#2018](https://github.com/youzan/vant/pull/2018)


## [v1.3.10](https://github.com/youzan/vant/tree/v1.3.10)
`2018-10-29`

**Improvements**

- Field: 新增 focus 方法 [\#1987](https://github.com/youzan/vant/pull/1987)
- Search: 新增 left-icon 插槽 [\#1974](https://github.com/youzan/vant/pull/1974)
- CouponCell: 新增 border 属性 [\#1993](https://github.com/youzan/vant/pull/1993)
- CouponCell: 优化优惠金额展示规则 [\#1976](https://github.com/youzan/vant/pull/1976)
- ImagePreview: 新增 showIndica为rs 属性 [\#1992](https://github.com/youzan/vant/pull/1992)
- GoodsAction: 新增 loading、disabled 属性 [\#1994](https://github.com/youzan/vant/pull/1994)

**Bug Fixes**

- 修复 Swipe height 属性不生效的问题 [\#1982](https://github.com/youzan/vant/pull/1982)
- 修复 Toast 在多实例模式下未正确销毁导致无法点击的问题 [\#1991](https://github.com/youzan/vant/pull/1991)


## [v1.3.9](https://github.com/youzan/vant/tree/v1.3.9)
`2018-10-24`

**Improvements**

- Field: 新增 left-icon 插槽 [\#1973](https://github.com/youzan/vant/pull/1973)
- Toast: 优化多实例模式下的 DOM 节点回收 [\#1959](https://github.com/youzan/vant/pull/1959)
- AddressEdit: 新增 valida为r 属性 [\#1971](https://github.com/youzan/vant/pull/1971)
- AddressEdit: 新增 change-default 事件 [\#1972](https://github.com/youzan/vant/pull/1972)

**Bug Fixes**

- 修复 ImagePreview 页码索引显示错误的问题 [\#1961](https://github.com/youzan/vant/pull/1961)
- 修复 Sku 在部分浏览器下键盘弹出时遮挡输入框的问题 [\#1965](https://github.com/youzan/vant/pull/1965)


## [v1.3.8](https://github.com/youzan/vant/tree/v1.3.8)
`2018-10-17`

**Improvements**

- Tag: 新增 size 属性 [\#1949](https://github.com/youzan/vant/pull/1949)
- Tag: 新增 color 属性 [\#1946](https://github.com/youzan/vant/pull/1946)
- Tag: 新增 round 属性 [\#1947](https://github.com/youzan/vant/pull/1947)
- Panel: 新增 icon 属性 [\#1942](https://github.com/youzan/vant/pull/1942)
- Field: 新增 clear 事件 [\#1944](https://github.com/youzan/vant/pull/1944)
- Icon: 新增 cart-o 图标 [\#1932](https://github.com/youzan/vant/pull/1932)
- Rate: 支持手势滑动修改评分 [\#1951](https://github.com/youzan/vant/pull/1951)
- AddressList: 新增 switchable 属性 [\#1938](https://github.com/youzan/vant/pull/1938)

**Bug Fixes**

- 修复 Card 描述过长时文字溢出的问题 [\#1935](https://github.com/youzan/vant/pull/1935)
- 修复 SubmitBar 按钮文字过大时显示不全的问题 [\#1940](https://github.com/youzan/vant/pull/1940)


## [v1.3.7](https://github.com/youzan/vant/tree/v1.3.7)
`2018-10-12`

**Improvements**

- Swipe: 新增 indica为r 插槽 [\#1923](https://github.com/youzan/vant/pull/1923)
- AddressEdit: 优化清除按钮颜色 [\#1919](https://github.com/youzan/vant/pull/1919)

**Bug Fixes**

- 修复 Toast 在 SSR 时未返回实例的问题 [\#1927](https://github.com/youzan/vant/pull/1927)
- 修复 Tab 所有标签禁用时默认标签错误的问题 [\#1926](https://github.com/youzan/vant/pull/1926)
- 修复 SubmitBar 文字颜色


## [v1.3.6](https://github.com/youzan/vant/tree/v1.3.6)
`2018-10-11`

**Improvements**

- Card: 新增 origin-price 属性，优化内部结构 [\#1916](https://github.com/youzan/vant/pull/1916)

**Bug Fixes**

- 修复 Toast 设置 forbidClick 后出现点击高亮背景色的问题 [\#1914](https://github.com/youzan/vant/pull/1914)


## [v1.3.5](https://github.com/youzan/vant/tree/v1.3.5)
`2018-10-10`

**Improvements**

- Tab: 样式升级 [\#1908](https://github.com/youzan/vant/pull/1908)
- Badge: 样式升级 [\#1907](https://github.com/youzan/vant/pull/1907)
- Dialog: 样式升级 [\#1906](https://github.com/youzan/vant/pull/1906)
- NoticeBar: 样式升级 [\#1893](https://github.com/youzan/vant/pull/1893)
- Collapse: 新增 disabled 属性 [\#1892](https://github.com/youzan/vant/pull/1892)
- TreeSelect: 新增 height 属性 [\#1905](https://github.com/youzan/vant/pull/1905)
- ImagePreview: 支持手势缩放图片 [\#1895](https://github.com/youzan/vant/pull/1895)

**Bug Fixes**

- 修复 Toast 在 SSR 时报错的问题 [\#1910](https://github.com/youzan/vant/pull/1910)
- 修复 Swipe 多指触控时可能导致展示错误的问题 [\#1890](https://github.com/youzan/vant/pull/1890)


## [v1.3.4](https://github.com/youzan/vant/tree/v1.3.4)
`2018-10-02`

**Improvements**

- But为n: 新增 round 属性 [\#1885](https://github.com/youzan/vant/pull/1885)
- But为n: 优化禁用态样式 [\#1886](https://github.com/youzan/vant/pull/1886)
- Card: 新增 tag 属性 [\#1878](https://github.com/youzan/vant/pull/1878)
- Card: 新增 thumb-link 属性 [\#1879](https://github.com/youzan/vant/pull/1879)
- ImagePreview: 新增 show-index 属性 [\#1889](https://github.com/youzan/vant/pull/1889)
- Picker: 优化样式 [\#1887](https://github.com/youzan/vant/pull/1887)
- SwipeCell: 新增 disabled 属性 [\#1884](https://github.com/youzan/vant/pull/1884)

**Bug Fixes**

- 修复 Toast 类型定义错误 [\#1859](https://github.com/youzan/vant/pull/1859)


## [v1.3.3](https://github.com/youzan/vant/tree/v1.3.3)
`2018-09-23`

**Improvements**

- SwipeCell: 新增 click 事件 [\#1848](https://github.com/youzan/vant/pull/1848)
- Locale: 优化错误处理 [\#1835](https://github.com/youzan/vant/pull/1835)
- 文档: 增加单个组件的更新日志 [\#1816](https://github.com/youzan/vant/pull/1816)

**Bug Fixes**

- 修复 DatetimePicker 时间范围变化时未正确更新 value 的问题 [\#1825](https://github.com/youzan/vant/pull/1825)
- 修复 Field 类型为 number 时 maxlength 属性不生效的问题 [\#1839](https://github.com/youzan/vant/pull/1839)
- 修复 PullRefresh 在部分情况下提示 preventDefault 警告的问题 [\#1819](https://github.com/youzan/vant/pull/1819)
- 修复 Tag 边框颜色错误的问题 [\#1834](https://github.com/youzan/vant/pull/1834)


## [v1.3.2](https://github.com/youzan/vant/tree/v1.3.2)
`2018-09-14`

**Improvements**

- AddressEdit: 优化地区展示 [\#1785](https://github.com/youzan/vant/pull/1785)
- Dialog: 更新按钮颜色 [\#1774](https://github.com/youzan/vant/pull/1774)
- List: 新增 loading 插槽 [\#1804](https://github.com/youzan/vant/pull/1804)
- Tab: 优化点击反馈 [\#1775](https://github.com/youzan/vant/pull/1775)
- 更新组件边框色值 [\#1773](https://github.com/youzan/vant/pull/1773)

**Bug Fixes**

- 修复 hairline 在 Chrome 69 下有时无法展示的问题 [\#1776](https://github.com/youzan/vant/pull/1776) [\#1805](https://github.com/youzan/vant/pull/1805)
- 修复 AddressEdit 详细地址下边框未展示的问题 [\#1800](https://github.com/youzan/vant/pull/1800)
- 修复 AddressList 详细地址未完全展示的问题 [\#1786](https://github.com/youzan/vant/pull/1786)
- 修复 Dialog 缺少 className 类型定义的问题 [\#1799](https://github.com/youzan/vant/pull/1799)


## [v1.3.1](https://github.com/youzan/vant/tree/v1.3.1)
`2018-09-07`

**Improvements**

- 增加 vue-cli 3 使用介绍 [\#1754](https://github.com/youzan/vant/pull/1754)

**Bug Fixes**

- 修复 But为n 加载图标颜色错误的问题 [\#1768](https://github.com/youzan/vant/pull/1768)
- 修复 ImagePreview 类型定义错误 [\#1767](https://github.com/youzan/vant/pull/1767)
- 修复 Tab 使用 card 主题时 color 属性不生效的问题 [\#1763](https://github.com/youzan/vant/pull/1763)
- 修复 webpack 1 无法引入 babel-runtime 的问题 [\#1753](https://github.com/youzan/vant/pull/1753)


## [v1.3.0](https://github.com/youzan/vant/tree/v1.3.0)
`2018-08-31`

**Breaking changes**

- 升级至 babel 7, 同时组件库不再默认内置 Promise 兼容库 [\#1712](https://github.com/youzan/vant/pull/1712)
- 考虑到可维护性和实际需求，Sku 组件不再支持 i18n 国际化 [\#1734](https://github.com/youzan/vant/pull/1734)

**Improvements**

- 升级至 precss 3.0 [\#1696](https://github.com/youzan/vant/pull/1696)
- AddressList: 支持禁用地址 [\#1729](https://github.com/youzan/vant/pull/1729)
- Contact: 样式升级 [\#1693](https://github.com/youzan/vant/pull/1693)
- Popup: 优化动画时长 [\#1694](https://github.com/youzan/vant/pull/1694)
- Popup: get-container 属性支持传入 CSS 选择器 [\#1699](https://github.com/youzan/vant/pull/1699)
- Rate: 新增 readonly 属性 [\#1731](https://github.com/youzan/vant/pull/1731)
- Sku: 支持自定义 valida为r [\#1732](https://github.com/youzan/vant/pull/1732)
- Sku: 增加对手机号留言的格式校验 [\#1732](https://github.com/youzan/vant/pull/1732)
- Tab: 新增 scroll 事件 [\#1730](https://github.com/youzan/vant/pull/1730)
- Loading: 支持配置为任意颜色 [\#1717](https://github.com/youzan/vant/pull/1717)

**Bug Fixes**

- 修复打包后版本号错误的问题 [\#1703](https://github.com/youzan/vant/pull/1703)
- 修复 DatetimePicker 使用 minMinute 属性时初始值错误的问题 [\#1724](https://github.com/youzan/vant/pull/1724)
- 修复 Swipe 在特定手势下可能出现位置错误的问题 [\#1723](https://github.com/youzan/vant/pull/1723)
- 修复 Tab 能通过手势滑动至禁用标签的问题 [\#1704](https://github.com/youzan/vant/pull/1704)
- 修复 Tabbar 使用 icon 插槽时 info 属性不生效的问题 [\#1705](https://github.com/youzan/vant/pull/1705)


## [v1.2.1](https://github.com/youzan/vant/tree/v1.2.1)
`2018-08-24`

**Improvements**

- AddressEdit: 样式升级 [\#1676](https://github.com/youzan/vant/pull/1676)
- ContactEdit: 样式升级 [\#1677](https://github.com/youzan/vant/pull/1677)
- Collapse: 增加多个 props 和插槽 [\#1671](https://github.com/youzan/vant/pull/1671)
- Field: 优化清除按钮颜色 [\#1678](https://github.com/youzan/vant/pull/1678)
- Icon: 新增 class-prefix 属性 [\#1688](https://github.com/youzan/vant/pull/1688)
- Swipe: 支持自定义 item 高度、宽度 [\#1664](https://github.com/youzan/vant/pull/1664)

**Bug Fixes**

- 修复 Stepper 初始值不能为 0 的问题 [\#1687](https://github.com/youzan/vant/pull/1687)
- 修复 Tab 使用 color 属性时下划线样式错误的问题 [\#1686](https://github.com/youzan/vant/pull/1686)
- 修复 share 图标加粗时样式错误的问题 [\#1670](https://github.com/youzan/vant/pull/1670)
- 修复 Popup 使用 get-conntainer 属性时不能被正确销毁的问题 [\#1665](https://github.com/youzan/vant/pull/1665)


## [v1.2.0](https://github.com/youzan/vant/tree/v1.2.0)
`2018-08-20`

**Breaking changes**

- AddressEdit: 采用驼峰命名的数据结构 [\#1644](https://github.com/youzan/vant/pull/1644)
- Coupon: 采用驼峰命名的数据结构 [\#1643](https://github.com/youzan/vant/pull/1643)
- CellSwipe: 规范命名为 SwipeCell [\#1652](https://github.com/youzan/vant/pull/1652)

**Improvements**

- Area: 更新省市区数据 [\#1653](https://github.com/youzan/vant/pull/1653)
- AddressList: 样式优化升级 [\#1628](https://github.com/youzan/vant/pull/1628)
- Coupon: 样式优化升级 [\#1636](https://github.com/youzan/vant/pull/1636)
- SubmitBar: 样式优化升级 [\#1631](https://github.com/youzan/vant/pull/1631)
- But为n: 新增 square 属性 [\#1627](https://github.com/youzan/vant/pull/1627)
- Icon: 新增 aim 图标 [\#1655](https://github.com/youzan/vant/pull/1655)
- Icon: 更新 edit 图标 [\#1635](https://github.com/youzan/vant/pull/1635)
- Radio: 优化样式 [\#1626](https://github.com/youzan/vant/pull/1626)
- Tab : 支持自定义颜色 [\#1622](https://github.com/youzan/vant/pull/1622)
- Tabbar: 优化 DOM 结构 [\#1640](https://github.com/youzan/vant/pull/1640)

**Bug Fixes**

- 修复 AddressEdit 删除按钮展示逻辑 [\#1648](https://github.com/youzan/vant/pull/1648)
- 修复 Icon size 属性不生效的问题 [\#1634](https://github.com/youzan/vant/pull/1634)


## [v1.1.16](https://github.com/youzan/vant/tree/v1.1.16)
`2018-08-10`

**Improvements**

- Actionsheet: 新增 select 事件 [\#1594](https://github.com/youzan/vant/pull/1594)
- ImagePreview: 支持传入 onClose 回调函数 [\#1589](https://github.com/youzan/vant/pull/1589)
- List: 新增 check 方法 [\#1590](https://github.com/youzan/vant/pull/1590)
- Search: 优化样式结构 [\#1603](https://github.com/youzan/vant/pull/1603)

**Bug Fixes**

- 修复 Actionsheet 选项加载中时仍然有点击态的问题 [\#1587](https://github.com/youzan/vant/pull/1587)
- 修复 DatetimePicker 使用 formatter 时默认值错误的问题 [\#1591](https://github.com/youzan/vant/pull/1591)


## [v1.1.15](https://github.com/youzan/vant/tree/v1.1.15)
`2018-08-03`

**Improvements**

- But为n: 新增 warning 类型 [\#1558](https://github.com/youzan/vant/pull/1558)
- SwipeCell: 新增 open 方法 [\#1546](https://github.com/youzan/vant/pull/1546)
- DatetimePicker: 支持限制分钟范围 [\#1583](https://github.com/youzan/vant/pull/1583)
- Icon: 新增 size 属性 [\#1555](https://github.com/youzan/vant/pull/1555)
- Stepper: 优化禁用态样式 [\#1560](https://github.com/youzan/vant/pull/1560)
- Stepper: 优化输入体验 [\#1534](https://github.com/youzan/vant/pull/1534)
- Tab: 支持定义 sticky 时距离顶部的高度 [\#1519](https://github.com/youzan/vant/pull/1519)

**Bug Fixes**

- 修复 But为n 在浏览器文字缩放时样式错误的问题 [\#1545](https://github.com/youzan/vant/pull/1545)
- 修复 Field date 类型在 iOS 设备下显示错误的问题 [\#1586](https://github.com/youzan/vant/pull/1586)
- 修复 van-clearfix 样式类未生效的问题 [\#1559](https://github.com/youzan/vant/pull/1559)
- 修复 Tabbar 点击当前标签时依然会触发 change 事件的问题 [\#1571](https://github.com/youzan/vant/pull/1571)

## [v1.1.14](https://github.com/youzan/vant/tree/v1.1.14)
`2018-07-19`

**Improvements**

- Collapse: 增加切换动画 [\#1500](https://github.com/youzan/vant/pull/1500)
- CouponCell: 优化文案 [\#1499](https://github.com/youzan/vant/pull/1499)
- Stepper: 优化输入体验  [\#1484](https://github.com/youzan/vant/pull/1484)
- Tab: 新增 change 事件 [\#1503](https://github.com/youzan/vant/pull/1503)
- DatetimePicker: 支持自定义选项文字 [\#1497](https://github.com/youzan/vant/pull/1497)

**Bug Fixes**
- 修复 Field 行高错误 [\#1486](https://github.com/youzan/vant/pull/1486)
- 修复 AddressEdit 格式化字符串时报错的问题 [\#1487](https://github.com/youzan/vant/pull/1487)
- 修复 Progress 与 Collapse 嵌套使用时无法正确渲染的问题 [\#1513](https://github.com/youzan/vant/pull/1513)
- 修复 Stepper integer 属性在 Android 上无法生效的问题 [\#1482](https://github.com/youzan/vant/pull/1482)
- 修复 Tab 在路由切换时标签位置错误的问题 [\#1512](https://github.com/youzan/vant/pull/1512)
- 修复 Tab sticky 属性在局部滚动元素下无法生效的问题 [\#1496](https://github.com/youzan/vant/pull/1496)


## [v1.1.13](https://github.com/youzan/vant/tree/v1.1.13)
`2018-07-13`

**Improvements**

- But为n: 新增 plain 属性 [\#1444](https://github.com/youzan/vant/pull/1444)
- Toast: 完善 TS 类型定义 [\#1468](https://github.com/youzan/vant/pull/1468)
- Dialog: 完善 TS 类型定义 [\#1467](https://github.com/youzan/vant/pull/1467)
- Radio: 新增 label-position 属性 [\#1446](https://github.com/youzan/vant/pull/1446)
- Radio: 新增 label-disabled 属性 [\#1445](https://github.com/youzan/vant/pull/1445)
- Search: 点击搜索按钮后收起键盘 [\#1448](https://github.com/youzan/vant/pull/1448)

**Bug Fixes**

- 修复 Swipe 多指触控时导致空白的问题 [\#1478](https://github.com/youzan/vant/pull/1478)
- 修复 ImagePreview startPosition 属性不生效的问题 [\#1456](https://github.com/youzan/vant/pull/1456)
- 修复 Picker 在部分安卓机型下选项高度错误的问题 [\#1449](https://github.com/youzan/vant/pull/1449)
- 修复 vue-lazyload 1.2.6 版本出现不兼容更新的问题，暂时降级至 1.2.3 版本 [\#1481](https://github.com/youzan/vant/pull/1481)


## [v1.1.12](https://github.com/youzan/vant/tree/v1.1.12)
`2018-07-06`

**Improvements**

- Area: 新增 reset 方法 [\#1427](https://github.com/youzan/vant/pull/1427)
- Checkbox: 支持自定义图标 [\#1414](https://github.com/youzan/vant/pull/1414)
- Checkbox: 优化与 Cell 搭配使用的方式 [\#1430](https://github.com/youzan/vant/pull/1430)
- Swipe: 屏幕滚动时不会左右滑动 [\#1425](https://github.com/youzan/vant/pull/1425)
- Swipe: 屏幕大小变化时自动调整宽度 [\#1413](https://github.com/youzan/vant/pull/1413)

**Bug Fixes**

- 修复 Progress 文字为空时样式错误的问题 [\#1411](https://github.com/youzan/vant/pull/1411)
- 修复 Tab 同时进行插入和删除时顺序错误的问题 [\#1429](https://github.com/youzan/vant/pull/1429)
- 修复 Vue.use 方法 TypeScript 类型错误 [\#1410](https://github.com/youzan/vant/pull/1410)
- 修复 style 依赖丢失 [\#1426](https://github.com/youzan/vant/pull/1426)


## [v1.1.11](https://github.com/youzan/vant/tree/v1.1.11)
`2018-07-04`

**Improvements**

- Actionsheet: 支持 lazy-render [\#1365](https://github.com/youzan/vant/pull/1365)
- AddressEdit: 优化事件触发顺序 [\#1402](https://github.com/youzan/vant/pull/1402)
- SwitchCell: 新增 size 属性 [\#1371](https://github.com/youzan/vant/pull/1371)
- Checkbox: 新增 label-position 属性 [\#1394](https://github.com/youzan/vant/pull/1394)
- Picker: 优化渲染性能 [\#1391](https://github.com/youzan/vant/pull/1391)
- Tab: 更新 card 风格样式 [\#1364](https://github.com/youzan/vant/pull/1364)
- Document: 完善 Dialog before-close 用法 [\#1383](https://github.com/youzan/vant/pull/1383)

**Bug Fixes**

- 修复 Area city_list 为空时报错的问题 [\#1374](https://github.com/youzan/vant/pull/1374)
- 修复 DatetimePicker change 事件回调参数不正确的问题 [\#1370](https://github.com/youzan/vant/pull/1370)
- 修复 Field readonly 状态下在 safari 上出现光标的问题 [\#1399](https://github.com/youzan/vant/pull/1399)
- 修复 Field readonly 状态下仍然会显示清除按钮的问题 [\#1395](https://github.com/youzan/vant/pull/1395)
- 修复 Tab 动态渲染时顺序错误的问题 [\#1372](https://github.com/youzan/vant/pull/1372)


## [v1.1.10](https://github.com/youzan/vant/tree/v1.1.10)
`2018-06-28`

**Breaking changes**

- Icon: 移除 birthday-privilege、member-day-privilege、balance-details [\#1331](https://github.com/youzan/vant/pull/1331)

**Improvements**

- Cell: 新增 arrow-direction 属性 [\#1323](https://github.com/youzan/vant/pull/1323)
- Field: 新增 is-link 属性 [\#1347](https://github.com/youzan/vant/pull/1347)
- Field: 新增 input-align 属性 [\#1352](https://github.com/youzan/vant/pull/1352)
- Field: 新增 label-align 属性 [\#1353](https://github.com/youzan/vant/pull/1353)
- Icon: 新增 idcard 图标 [\#1331](https://github.com/youzan/vant/pull/1331)
- Sku: 新增 stepper-change 事件 [\#1349](https://github.com/youzan/vant/pull/1349)
- PullRefresh: 新增 disabled 属性 [\#1336](https://github.com/youzan/vant/pull/1336)

**Bug Fixes**

- 修复 List 不可见时依旧会触发 load 事件的问题 [\#1345](https://github.com/youzan/vant/pull/1345)
- 修复 Sku 图片截断问题 [\#1334](https://github.com/youzan/vant/pull/1334)


## [v1.1.9](https://github.com/youzan/vant/tree/v1.1.9)
`2018-06-22`

**Improvements**

- Actionsheet: 支持禁用选项 [\#1293](https://github.com/youzan/vant/pull/1293)
- Field: 支持展示清除控件 [\#1309](https://github.com/youzan/vant/pull/1309)
- Layout: 支持 Flex 布局 [\#1305](https://github.com/youzan/vant/pull/1305)
- Locale: 新增 TS 类型定义 [\#1294](https://github.com/youzan/vant/pull/1294)
- Tabbar: 新增 z-index 属性 [\#1310](https://github.com/youzan/vant/pull/1310)
- Stepper: 输入框失焦且内容为空时，自动补全为最小值 [\#1316](https://github.com/youzan/vant/pull/1316)

**Bug Fixes**

- 修复 DatetimePicker visible-item-count 属性拼写错误 [\#1312](https://github.com/youzan/vant/pull/1312)
- 修复 Tab 在屏幕尺寸变化时未重新渲染的问题 [\#1304](https://github.com/youzan/vant/pull/1304)


## [v1.1.8](https://github.com/youzan/vant/tree/v1.1.8)
`2018-06-14`

**Improvements**

- AddressEdit: 支持配置按钮文字 [\#1287](https://github.com/youzan/vant/pull/1287)
- AddressEdit: 简化内部代码结构 [\#1274](https://github.com/youzan/vant/pull/1274)
- Area: 优化默认选项 [\#1272](https://github.com/youzan/vant/pull/1272)
- Dialog: 支持单独传入 title 属性 [\#1270](https://github.com/youzan/vant/pull/1270)
- Field: 新增 blur 方法 [\#1264](https://github.com/youzan/vant/pull/1264)
- Field: 更新右侧按钮默认颜色 [\#1262](https://github.com/youzan/vant/pull/1262)
- Sku: 限制留言最大长度 [\#1271](https://github.com/youzan/vant/pull/1271)
- Build: 新增 stylelint 格式校验 [\#1280](https://github.com/youzan/vant/pull/1280)
- Document: 新增示例源码链接 [\#1266](https://github.com/youzan/vant/pull/1266)
- Document: 新增代码风格指引 [\#1245](https://github.com/youzan/vant/pull/1245)

**Bug Fixes**

- 修复 Actionsheet 在 rem 布局下标题文字大小错误的问题 [\#1267](https://github.com/youzan/vant/pull/1267)
- 修复 CheckboxGroup v-model 类型检查错误 [\#1254](https://github.com/youzan/vant/pull/1254)
- 修复 Tab 标题长度变化时底部条未重新渲染的问题 [\#1260](https://github.com/youzan/vant/pull/1260)
- 修复 Popup 内容过高时超出屏幕可视范围的问题 [\#1256](https://github.com/youzan/vant/pull/1256)


## [v1.1.7](https://github.com/youzan/vant/tree/v1.1.7)
`2018-06-06`

**Improvements**

- Dialog: 支持 className 定制 [\#1224](https://github.com/youzan/vant/pull/1224)
- Dialog: 优化内容为空时的样式 [\#1233](https://github.com/youzan/vant/pull/1233)
- Field: 支持 v-model.number [\#1221](https://github.com/youzan/vant/pull/1221)
- Swipe: 新增 swipeTo 方法 [\#1222](https://github.com/youzan/vant/pull/1222)
- Document: 新增 ts-import-plugin 指引 [\#1230](https://github.com/youzan/vant/pull/1230)


## [v1.1.6](https://github.com/youzan/vant/tree/v1.1.6)
`2018-06-01`

**Improvements**

- Dialog: 新增 get-container 属性 [\#1176](https://github.com/youzan/vant/pull/1176)
- Dialog: beforeClose 支持通过回调参数控制关闭动作 [\#1166](https://github.com/youzan/vant/pull/1166)
- Icon: 更新 wechat 图标 [\#1156](https://github.com/youzan/vant/pull/1156)
- Picker: 支持 html 类型的选项 [\#1213](https://github.com/youzan/vant/pull/1213)
- SubmitBar: 优化渲染结构 [\#1184](https://github.com/youzan/vant/pull/1184)
- Test: 增加大量单元测试用例 [\#1202](https://github.com/youzan/vant/pull/1202)
- Doc: 完善快速上手文档 [\#1187](https://github.com/youzan/vant/pull/1187)

**Bug Fixes**

- 修复 Tab title 插槽渲染无法更新的问题 [\#1212](https://github.com/youzan/vant/pull/1212)
- 修复 AddressEdit 省市区弹层样式错误的问题 [\#1211](https://github.com/youzan/vant/pull/1211)


## [v1.1.5](https://github.com/youzan/vant/tree/v1.1.5)
`2018-05-24`

**Improvements**

- Rate: 新增 change 事件 [\#1102](https://github.com/youzan/vant/pull/1102)
- Popup: 新增 lazyRender 属性 [\#1138](https://github.com/youzan/vant/pull/1138)
- NumberKeyboard: 新增 close 事件 [\#1127](https://github.com/youzan/vant/pull/1127)
- Sku: 优化错误提示 [\#1100](https://github.com/youzan/vantpull/1100)
- Dialog: 优化按钮文字选中 [\#1148](https://github.com/youzan/vant/pull/1148)
- Picker: 优化未选中项的颜色 [\#1142](https://github.com/youzan/vant/pull/1142)
- AddressEdit: 优化空值校验 [\#1150](https://github.com/youzan/vant/pull/1150)
- TreeSelect: 支持 string 类型 id [\#1126](https://github.com/youzan/vant/pull/1126)
- Utils: 移除未使用的 scroll 方法 [\#1112](https://github.com/youzan/vant/pull/1112)

**Bug Fixes**

- 修复 Toast 使用 forbidClick 属性时导致其他弹层的蒙层失效的问题 [\#1154](https://github.com/youzan/vant/pull/1154)
- 修复 Field 在 safari 上不正确的 margin [\#1147](https://github.com/youzan/vant/pull/1147)
- 修复 Progress 文字超出边界的问题 [\#1135](https://github.com/youzan/vant/pull/1135)


## [v1.1.4](https://github.com/youzan/vant/tree/v1.1.4)
`2018-05-18`

**Improvements**

- AddressEdit: 适配小屏手机 [\#1082](https://github.com/youzan/vant/pull/1082)
- Cell: 支持 number 类型的 title、value [\#1073](https://github.com/youzan/vant/pull/1073)
- Field: 新增 left-icon 属性 [\#1092](https://github.com/youzan/vant/pull/1092)
- Progress: 支持渐变色 [\#1098](https://github.com/youzan/vant/pull/1098)
- Build: 升级 webpack-serve [\#1056](https://github.com/youzan/vant/pull/1056)
- 调整示例的目录结构 [\#1052](https://github.com/youzan/vant/pull/1052)
- 调整文档的目录结构 [\#1066](https://github.com/youzan/vant/pull/1066)
- 使用 Jest 重构单元测试 [\#1051](https://github.com/youzan/vant/pull/1051)

**Bug Fixes**

- 修复 DatetimePicker 初始值错误的问题 [\#1093](https://github.com/youzan/vant/pull/1093)
- 修复 GoodsAction info 长度超过三位数时显示错误 [\#1074](https://github.com/youzan/vant/pull/1074)
- 修复 icon 样式模板错误 [\#1091](https://github.com/youzan/vant/pull/1091)


## [v1.1.3](https://github.com/youzan/vant/tree/v1.1.3)
`2018-05-12`

**Improvements**

- AddressEdit: 新增 cancel-delete 事件 [\#1047](https://github.com/youzan/vant/pull/1047)
- Field: 新增 label 插槽 [\#1048](https://github.com/youzan/vant/pull/1048)
- Icon: 更新 search 图标 [\#1025](https://github.com/youzan/vant/pull/1025)
- Icon: 新增 color 属性 [\#1031](https://github.com/youzan/vant/pull/1031)
- ImagePreview: 优化点击检测 [\#1042](https://github.com/youzan/vant/pull/1042)
- NoticeBar: 优化 ref 检测 [\#1037](https://github.com/youzan/vant/pull/1037)
- Search: 样式更新 [\#1027](https://github.com/youzan/vant/pull/1027)
- Toast: 新增 loadingType 选项 [\#1049](https://github.com/youzan/vant/pull/1049)

**Bug Fixes**

- 修复 Cell 默认宽度 [\#1029](https://github.com/youzan/vant/pull/1029)
- 修复 ImagePreview 只有一张图片时无法关闭的问题 [\#1046](https://github.com/youzan/vant/pull/1046)


## [v1.1.2](https://github.com/youzan/vant/tree/v1.1.2)
`2018-05-08`

**Improvements**

- 新增 Rate 评分组件 [\#901](https://github.com/youzan/vant/pull/901) [\#1002](https://github.com/youzan/vant/pull/1002) [\#1010](https://github.com/youzan/vant/pull/1010) [\#1011](https://github.com/youzan/vant/pull/1011)
- Area: 新增 change 事件 [\#1019](https://github.com/youzan/vant/pull/1019)
- But为n: 更新边框样式 [\#998](https://github.com/youzan/vant/pull/998)
- Locale: 新增错误提示 [\#1012](https://github.com/youzan/vant/pull/1012)
- Stepper: 更新禁用状态样式 [\#997](https://github.com/youzan/vant/pull/997)
- 优化组件 watch 写法 [\#1001](https://github.com/youzan/vant/pull/1001)
- 优化文档 API 展示 [\#990](https://github.com/youzan/vant/pull/990) [\#991](https://github.com/youzan/vant/pull/991)

**Bug Fixes**

- 修复 Search 错误展示边框的问题 [\#1000](https://github.com/youzan/vant/pull/1000)
- 修复 Tab 初始化时的渲染问题 [\#978](https://github.com/youzan/vant/pull/978) ([jerryni](https://github.com/jerryni))
- 修复 Stepper integer 属性拼写错误 [\#992](https://github.com/youzan/vant/pull/992)


## [v1.1.1](https://github.com/youzan/vant/tree/v1.1.1)
`2018-05-04`

**Improvements**

* Contact: 优化背景图 [\#972](https://github.com/youzan/vant/pull/972)
* List: 新增 loading-text 属性 [\#948](https://github.com/youzan/vant/pull/948)
* Swipe: 优化轮播性能 [\#985](https://github.com/youzan/vant/pull/985)
* Swipe: 新增 为uchable 属性 [\#975](https://github.com/youzan/vant/pull/975)
* Swipe: 新增 vertical 属性，支持垂直布局 [\#938](https://github.com/youzan/vant/pull/938)
* Slider: 增加滑动触摸区域 [\#977](https://github.com/youzan/vant/pull/977)
* Stepper: 新增 interger 属性 [\#951](https://github.com/youzan/vant/pull/951)
* Tab: 新增 line-width 属性 [\#988](https://github.com/youzan/vant/pull/988)

**Bug Fixes**
* 修复 ImagePreview offset 计算错误[\#980](https://github.com/youzan/vant/pull/980)
* 修复 Search 在 iOS 下文字被遮挡的问题 [\#974](https://github.com/youzan/vant/pull/974)


## [v1.1.0](https://github.com/youzan/vant/tree/v1.1.0)
`2018-04-25`

**Improvements**

* 新增 Slider 滑块组件 [\#897](https://github.com/youzan/vant/pull/897) [\#915](https://github.com/youzan/vant/pull/915)
* 新增 BEM mixin，规范 BEM 命名格式 [\#921](https://github.com/youzan/vant/pull/921) [\#924](https://github.com/youzan/vant/pull/924) [\#932](https://github.com/youzan/vant/pull/932) [\#934](https://github.com/youzan/vant/pull/934)
* Cell: 优化 flex 结构 [\#919](https://github.com/youzan/vant/pull/919)
* Panel: 优化结构，使用 Cell 代替部分样式 [\#927](https://github.com/youzan/vant/pull/927)
* Build: 升级至 vue-loader 15 [\#937](https://github.com/youzan/vant/pull/937)
* Build: 使用 ChromeHeadless 代替 Phan为mJS 作为测试运行环境 [\#913](https://github.com/youzan/vant/pull/913)
* Build: 使用 MiniCssExtractPlugin 代替 ExtractTextPlugin [\#936](https://github.com/youzan/vant/pull/936)
* Build: 增加针对 webpack4 优化的 sideEffects 配置 [\#926](https://github.com/youzan/vant/pull/926)
* 文档: 新增 rem 指引 [\#928](https://github.com/youzan/vant/pull/928)
* 文档: 移除 Loading circle 类型，不推荐使用 [\#941](https://github.com/youzan/vant/pull/941)

**Bug Fixes**

* 修复 Uploader 在安卓下无法上传图片的问题 [\#929](https://github.com/youzan/vant/pull/929)
* 修复 Checkbox 内容为空时渲染了空 label 元素的问题 [\#920](https://github.com/youzan/vant/pull/920)
* 修复 Dialog TS 类型定义错误 [\#918](https://github.com/youzan/vant/pull/918)
* 修复 Popup 多层级关闭时未正确移除 lock-scroll 导致无法滚动的问题 [\#912](https://github.com/youzan/vant/pull/912)
* 修复 Picker 在系统字体大小缩放时布局错乱的问题 [\#916](https://github.com/youzan/vant/pull/916)


## [v1.0.8](https://github.com/youzan/vant/tree/v1.0.8)
`2018-04-20`

**Improvements**
- 新增 git hook, 提交代码时进行格式校验 [\#883](https://github.com/youzan/vant/pull/883)

**Bug Fixes**
- 修复构建结果中未完全使用 es module 的问题 [\#885](https://github.com/youzan/vant/pull/885)
- 修复 Cell 文字垂直不对齐的问题 [\#893](https://github.com/youzan/vant/pull/893)
- 修复 Field number 类型无法输入负数的问题 [\#889](https://github.com/youzan/vant/pull/889)
- 修复 Popup lock-scroll 属性在 iOS 下无效的问题 [\#891](https://github.com/youzan/vant/pull/891)


## [v1.0.7](https://github.com/youzan/vant/tree/v1.0.7)
`2018-04-17`

**Bug Fixes**

* 修复构建结果 lib 目录下样式丢失的问题

## [v1.0.6](https://github.com/youzan/vant/tree/v1.0.6)
`2018-04-17`

**Improvements**

* 支持 ES module 引入 [\#875](https://github.com/youzan/vant/pull/875)
* Dialog: 新增 before-close 属性, 支持异步关闭 [\#854](https://github.com/youzan/vant/pull/854) [\#881](https://github.com/youzan/vant/pull/881)
* SubmitBar: 支持自定义金额符号 [\#876](https://github.com/youzan/vant/pull/876)
* Tab: 支持 v-model 绑定当前 active 标签 [\#879](https://github.com/youzan/vant/pull/879)

**Bug Fixes**

* 修复 DatetimePicker change 事件参数错误 [\#878](https://github.com/youzan/vant/pull/878)

## [v1.0.5](https://github.com/youzan/vant/tree/v1.0.5)
`2018-04-13`

**Improvements**

- 抽象 为uch 通用 mixin [\#869](https://github.com/youzan/vant/pull/869)
- Tabbar: 支持 Number 类型的 info [\#845](https://github.com/youzan/vant/pull/845)
- Radio: name 属性支持任意类型 [\#863](https://github.com/youzan/vant/pull/863)

**Bug Fixes**

- 修复 NavBar 标题长度未限制的问题 [\#867](https://github.com/youzan/vant/pull/867)
- 修复 But为n loading 状态下无法水平对齐的问题 [\#858](https://github.com/youzan/vant/pull/858)
- 修复 SwipeCell 在垂直滑动时也会触发 Swipe 的问题 [\#866](https://github.com/youzan/vant/pull/866)
- 修复 ImagePreview close 方法失效的问题 [\#864](https://github.com/youzan/vant/pull/864)
- 修复 SubmitBar 字体大小继承错误的问题 [\#857](https://github.com/youzan/vant/pull/857)
- 修复 SwitchCell 文字未垂直居中的问题 [\#852](https://github.com/youzan/vant/pull/852)
- 修复 Swipe 为uch 事件冒泡问题 [\#846](https://github.com/youzan/vant/pull/846)


## [v1.0.4](https://github.com/youzan/vant/tree/v1.0.4)
`2018-04-10`

**Improvements**

- Actionsheet: 新增 cancel 事件 [\#796](https://github.com/youzan/vant/pull/796)
- Actionsheet: 增加最大高度限制 [\#777](https://github.com/youzan/vant/pull/777)
- DatetimePicker: 支持所有 picker 组件配置 [\#788](https://github.com/youzan/vant/pull/788)
- SubmitBar: 统一文字大小 [\#774](https://github.com/youzan/vant/pull/774)
- i18n: 支持 zh-HK 语言 [\#812](https://github.com/youzan/vant/pull/812)

**Bug Fixes**

- 修复 But为n 加载状态下可点击的问题 [\#779](https://github.com/youzan/vant/pull/779)
- 修复 Dialog 未初始化时 close 方法报错的问题 [\#841](https://github.com/youzan/vant/pull/841)
- 修复 Popup 多层弹出时 lockScroll 失效的问题 [\#842](https://github.com/youzan/vant/pull/842)
- 修复 SubmitBar 金额保留位数错误的问题 [\#820](https://github.com/youzan/vant/pull/820)
- 修复 Sku row 行高错误 [\#840](https://github.com/youzan/vant/pull/840)


## [v1.0.3](https://github.com/youzan/vant/tree/v1.0.3)
`2018-03-26`

**Improvements**

- Cell: 新增 center 属性 [\#771](https://github.com/youzan/vant/pull/771)
- Cell: 布局方式由 table 升级为 flex-box [\#770](https://github.com/youzan/vant/pull/770)
- Field: 新增 but为n 插槽，支持插入按钮 [\#772](https://github.com/youzan/vant/pull/772)
- Tab: click 事件回调新增 title 参数 [\#761](https://github.com/youzan/vant/pull/761)

**Bug Fixes**
- 修复 Tag 文字在部分安卓手机上未垂直居中的问题 [\#773](https://github.com/youzan/vant/pull/773)
- 修复 Toast 蒙层在某些情况下无法收起的问题 [\#762](https://github.com/youzan/vant/pull/762)

## [v1.0.2](https://github.com/youzan/vant/tree/v1.0.2)
`2018-03-22`

**Improvements**

* DatetimePicker: 新增 show-为olbar 属性以及 month-year 类型 [\#736](https://github.com/youzan/vant/pull/736)
* NavBar: 移除顶部 border [\#744](https://github.com/youzan/vant/pull/744)
* NoticeBar: 修正内边距 [\#737](https://github.com/youzan/vant/pull/737)
* Doc: 新增自定义图标指引 [\#754](https://github.com/youzan/vant/pull/754)

**Bug Fixes**

* 修复 AddressEdit 初始化时省市区未正确选中的问题 [\#748](https://github.com/youzan/vant/pull/748)
* 修复 List 隐藏时依然会触发 load 事件的问题 [\#751](https://github.com/youzan/vant/pull/751)
* 修复 Sku 默认选中不生效的问题 [\#752](https://github.com/youzan/vant/pull/752)
* 修复 Toast 蒙层被其他元素遮挡的问题 [\#740](https://github.com/youzan/vant/pull/740)
* 修复 Tab 内容无法点击的问题 [\#749](https://github.com/youzan/vant/pull/749)


## [v1.0.1](https://github.com/youzan/vant/tree/v1.0.1)
`2018-03-19`

**Bug Fixes**

* 修复 create 模块循环引用导致某些情况下编译错误的问题 [\#728](https://github.com/youzan/vant/pull/728)


## [v1.0.0](https://github.com/youzan/vant/tree/v1.0.0)
`2018-03-19`

**Breaking changes**

* 新增 List 组件 [\#682](https://github.com/youzan/vant/pull/682)
* 新增 Collapse 组件 [\#674](https://github.com/youzan/vant/pull/674)
* 构建: 升级至 webpack 4，优化构建配置 [\#693](https://github.com/youzan/vant/pull/693)
* Popup: 新增 lock-scroll 属性，废弃 lock-on-scroll、prevent-scroll 属性 [\#688](https://github.com/youzan/vant/pull/688)
* Waterfall 组件不再维护，推荐使用 List 组件代替 [\#683](https://github.com/youzan/vant/pull/683)

**Improvements**

* AddressEdit: 新增 show-delete 属性 [\#716](https://github.com/youzan/vant/pull/716)
* SwipeCell: 优化 Swipe 动画流畅度 [\#685](https://github.com/youzan/vant/pull/685)
* Field: 支持配置 au为size 最大/最小高度 [\#718](https://github.com/youzan/vant/pull/718)
* Locale: 精简 i18n 配置文档 [\#701](https://github.com/youzan/vant/pull/701)
* PullRefresh: 支持手动触发 loading 动画 [\#684](https://github.com/youzan/vant/pull/684)
* Switch: 新增 size 属性，支持自定义尺寸 [\#723](https://github.com/youzan/vant/pull/723)
* Sku: 新增头部金额插槽 [\#705](https://github.com/youzan/vant/pull/705)
* Sku: 优化 DOM 结构 [\#704](https://github.com/youzan/vant/pull/704)
* Tab: 支持通过滑动手势进行切换 [\#694](https://github.com/youzan/vant/pull/694) [\#695](https://github.com/youzan/vant/pull/695)
* Tag: 调整标签样式 [\#689](https://github.com/youzan/vant/pull/689)
* Toast: 支持通过 Vue.use 注册 [\#690](https://github.com/youzan/vant/pull/690)


**Bug Fixes**

* 修复 Actionsheet 下边框未展示的问题 [\#686](https://github.com/youzan/vant/pull/686)
* 修复 AddressEdit 在数据变更时未正确选中省市区的问题 [\#680](https://github.com/youzan/vant/pull/680)
* 修复 Stepper value 溢出的问题 [\#691](https://github.com/youzan/vant/issues/691)
* 修复 Badge 选中时字体粗细 [\#687](https://github.com/youzan/vant/pull/687)

## [v0.12.14](https://github.com/youzan/vant/tree/v0.12.14)
`2018-03-09`

**Bug Fixes**
* Area: 修复 area-list 更新时未正确选中省市区的问题 [\#678](https://github.com/youzan/vant/pull/678)


## [v0.12.13](https://github.com/youzan/vant/tree/v0.12.13)
`2018-03-09`

**Improvements**

* AddressEdit: 支持自定义手机号校验函数 [\#673](https://github.com/youzan/vant/pull/673)
* Sku: 新增 close-on-click-overlay 属性 [\#676](https://github.com/youzan/vant/pull/676)

**Bug Fixes**
* 修复 CouponList 文字截断的问题 [\#675](https://github.com/youzan/vant/pull/675)


## [v0.12.12](https://github.com/youzan/vant/tree/v0.12.12)
`2018-03-06`

**Improvements**

* Swipe: 新增 loop 属性，支持禁用循环滚动 [\#670](https://github.com/youzan/vant/pull/670)
* Document: 新增 change 事件示例 [\#666](https://github.com/youzan/vant/pull/666)
* 更新静态资源 CDN 域名 [\#652](https://github.com/youzan/vant/pull/652)

**Bug Fixes**

* 修复 Field 在 safari 下禁用态颜色过浅的问题 [\#669](https://github.com/youzan/vant/pull/669)
* 修复 Swipe au为play 设置为 0 时不会立刻取消的问题 [\#660](https://github.com/youzan/vant/pull/660)

## [v0.12.11](https://github.com/youzan/vant/tree/v0.12.11)
`2018-02-27`

**Improvements**

* Checkbox: 新增 label-disabled 属性，支持禁用 label 点击 [\#644](https://github.com/youzan/vant/pull/644)
* Popup: 新增 click-overlay 事件 [\#647](https://github.com/youzan/vant/pull/647)
* Icon: 新增 warn 图标 [\#651](https://github.com/youzan/vant/pull/651)
* Icon: 新增 info-o 图标, 优化 checked & underway 图标 [\#648](https://github.com/youzan/vant/pull/648)

**Bug Fixes**

* 修复 But为n loading 样式未居中的问题 [\#645](https://github.com/youzan/vant/pull/645)

## [v0.12.10](https://github.com/youzan/vant/tree/v0.12.10)
`2018-02-12`

**Improvements**

* 新增内置样式文档 [\#633](https://github.com/youzan/vant/pull/633)
* Checkbox: 优化 DOM 结构 [\#636](https://github.com/youzan/vant/pull/636)
* Checkbox: 支持设置最大可选数 [\#631](https://github.com/youzan/vant/pull/631)

**Bug Fixes**

*  Stepper: 修复清空输入框时 change 事件未正确触发的问题 [\#635](https://github.com/youzan/vant/pull/635)

## [v0.12.9](https://github.com/youzan/vant/tree/v0.12.9)
`2018-02-08`

**Improvements**

* PullRefresh: 新增 refersh 事件 [\#625](https://github.com/youzan/vant/pull/625)
* Circle: 优化线条圆角 [\#624](https://github.com/youzan/vant/pull/624)
* Picker: 新增 loading 属性 [\#619](https://github.com/youzan/vant/pull/619)
* Loading: 新增 size 属性 [\#620](https://github.com/youzan/vant/pull/620)
* Loading: 新增 circular 类型 [\#618](https://github.com/youzan/vant/pull/618)
* Loading: 默认类型调整为 circular [\#623](https://github.com/youzan/vant/pull/623)

**Bug Fixes**
* 修复 Sku message 更新时未重新渲染的问题 [\#627](https://github.com/youzan/vant/pull/627)


## [v0.12.8](https://github.com/youzan/vant/tree/v0.12.8)
`2018-02-07`

**Improvements**
* 新增 Circle 组件 [\#608](https://github.com/youzan/vant/pull/608)
* Tab: 新增 title 插槽 [\#603](https://github.com/youzan/vant/pull/603)
* Toast: 加深背景色 [\#601](https://github.com/youzan/vant/pull/601)
* Popup: 新增 getContaienr 属性 [\#611](https://github.com/youzan/vant/pull/611)
* Sku: 支持图片上传 [\#612](https://github.com/youzan/vant/pull/612)
* Sku: 支持自定义 Stepper [\#600](https://github.com/youzan/vant/pull/600)

**Bug Fixes**
* 修复 Picker 在部分设备下的样式问题 [\#609](https://github.com/youzan/vant/pull/609)
* 修复 TreeSelect 箭头位置错误 [\#605](https://github.com/youzan/vant/pull/605)


## [v0.12.7](https://github.com/youzan/vant/tree/v0.12.7)
`2018-01-31`

**Improvements**
* Area: 新增 item-height、visible-item-count 属性 [\#591](https://github.com/youzan/vant/pull/591)
* Dialog: 支持以组件形式调用 [\#593](https://github.com/youzan/vant/pull/593)
* Toast: 支持同时弹出多个 Toast [\#586](https://github.com/youzan/vant/pull/586)
* Sku: 新增 getSkuData 方法 [\#585](https://github.com/youzan/vant/pull/585)

**Bug Fixes**
* 修复 Field label 多行时样式错误的问题 [\#583](https://github.com/youzan/vant/pull/583)


## [v0.12.6](https://github.com/youzan/vant/tree/v0.12.6)
`2018-01-25`

**Improvements**

- AddressEdit: 增加默认插槽 [\#573](https://github.com/youzan/vant/pull/573)
- Uploader: 新增 maxSize 属性 [\#575](https://github.com/youzan/vant/pull/575)
- Sku: 新增 sku-body-为p 插槽、resetSelectedSkuOnHide 属性 [\#568](https://github.com/youzan/vant/pull/568)

**Bug Fixes**

- 修复 Toast 文案换行 [\#567](https://github.com/youzan/vant/pull/567)
- 修复 Sku 限购情况下，未超出限购数时的错误文案显示 [\#568](https://github.com/youzan/vant/pull/568)
- 修复 Tab active 在初始化时未生效的问题 [\#572](https://github.com/youzan/vant/pull/572)


## [v0.12.5](https://github.com/youzan/vant/tree/v0.12.5)
`2018-01-23`

**Improvements**

* But为n: 新增 text 属性 [\#563](https://github.com/youzan/vant/pull/563)
* CouponList: 支持 v-model、exchangeBut为nLoading、exchangeMinLength [\#556](https://github.com/youzan/vant/pull/556) [\#566](https://github.com/youzan/vant/pull/566)
* Icon: 更新 share 图标 [\#562](https://github.com/youzan/vant/pull/562)
* Sku: 优化渲染性能 [\#550](https://github.com/youzan/vant/pull/550)

**Bug Fixes**
* Area: 修复未选中省份时市区展示错误的问题 [\#560](https://github.com/youzan/vant/pull/560)
* Cell: 修复 required 样式错误的问题 [\#553](https://github.com/youzan/vant/pull/553)


## [v0.12.4](https://github.com/youzan/vant/tree/v0.12.4)
`2018-01-18`

**Improvements**

* Picker: 新增 confirmBut为nText、cancelBut为nText 属性 [\#548](https://github.com/youzan/vant/pull/548)
* Toast: 新增 setDefaultOptions 方法 [\#541](https://github.com/youzan/vant/pull/541)
* Dialog: 新增 setDefaultOptions 方法 [\#539](https://github.com/youzan/vant/pull/539)

**Bug Fixes**

* Stepper: 修改 value 值时不触发 change 事件 [\#546](https://github.com/youzan/vant/pull/546)
* Picker: 修复 visibleItemCount 属性拼写错误 [\#549](https://github.com/youzan/vant/pull/549)

## [v0.12.3](https://github.com/youzan/vant/tree/v0.12.3)

`2018-01-12`

**Improvements**

* NavBar: 新增 zIndex 属性 [\#525](https://github.com/youzan/vant/pull/525)
* Cell: 调整右侧箭头位置 [\#531](https://github.com/youzan/vant/pull/531)

**Bug Fixes**

* 修复 Area 传空 AreaList 时报错的问题 [\#520](https://github.com/youzan/vant/pull/520)
* 修复 AddressEdit 的 setAreaCode 方法失效的问题 [\#524](https://github.com/youzan/vant/pull/524)
* 修复 Picker 点击选项时无法触发 change 事件的问题 [\#532](https://github.com/youzan/vant/pull/532)
* 修复 PullRefresh 在横向滑动时也会触发的问题 [\#521](https://github.com/youzan/vant/pull/521)

## [v0.12.2](https://github.com/youzan/vant/tree/v0.12.2)

`2018-01-08`

**Bug Fixes**

* Swipe: 使用 translate2d 代替 translate3d, 避免 iOS11 下的 crash 问题 [\#518](https://github.com/youzan/vant/pull/518)
* Picker: change 事件只在用户操作后触发 [\#517](https://github.com/youzan/vant/pull/517)
* NoticeBar: 修复 text 属性变化时未重新计算的问题 [\#515](https://github.com/youzan/vant/pull/515)
* AddressEdit: 修复搜索结果样式错误 [\#514](https://github.com/youzan/vant/pull/514)

## [v0.12.1](https://github.com/youzan/vant/tree/v0.12.1)

`2018-01-05`

**Improvements**

* But为n: 调整 small 按钮内边距 [\#511](https://github.com/youzan/vant/pull/511)

**Bug Fixes**

* 修复 Cell 标题为空时 icon 属性无法生效的问题 [\#508](https://github.com/youzan/vant/pull/508)
* 修复 Cell 内边框宽度错误的问题 [\#506](https://github.com/youzan/vant/pull/506)
* 修复 CouponList 行高错误的问题 [\#507](https://github.com/youzan/vant/pull/507)
* 修复 CouponList 输入框样式错误 [\#502](https://github.com/youzan/vant/pull/502)
* 修复 Radio 图标无法点击的问题 [\#505](https://github.com/youzan/vant/pull/505)

## [v0.12.0](https://github.com/youzan/vant/tree/v0.12.0)

`2017-12-29`

**Breaking changes**

* Cell: CellGroup 左内边距移至 Cell 内, 新增 'border'、'clickable' 属性 [\#497](https://github.com/youzan/vant/pull/497)
* 调整编码规范, 使用官方推荐的 kebab-case 属性命名 [\#482](https://github.com/youzan/vant/pull/482)

**Improvements**

* Field: 新增 error-message 属性 [\#492](https://github.com/youzan/vant/pull/492)
* Document: 更新到新版文档样式 [\#490](https://github.com/youzan/vant/pull/490)

**Bug Fixes**

* 修复 Tab 使用 sticky 时高度计算错误的问题 [\#493](https://github.com/youzan/vant/pull/493)
* 修复组件使用 $attrs 时继承的问题 [\#488](https://github.com/youzan/vant/pull/488)

## [v0.11.15](https://github.com/youzan/vant/tree/v0.11.15)

`2017-12-25`

**Improvements**

* Uploader: 支持多文件上传 [\#480](https://github.com/youzan/vant/pull/480)
* NumberKeyboard: 增加一种键盘样式 [\#472](https://github.com/youzan/vant/pull/472)
* Icon: 更新 search 图标样式 [\#474](https://github.com/youzan/vant/pull/474)
* 支持 passive 事件 [\#478](https://github.com/youzan/vant/pull/478)

**Bug Fixes**

* 修复 popup 销毁时未解绑事件的问题 [\#477](https://github.com/youzan/vant/pull/477)
* 修复使用 popup mixin 的组件未设定 props 类型的问题 [\#468](https://github.com/youzan/vant/pull/468)
* 修复 package.json 配置中未包含 types 目录的问题 [\#462](https://github.com/youzan/vant/pull/462)

## [v0.11.14](https://github.com/youzan/vant/tree/v0.11.14)

`2017-12-21`

**Improvements**

* NumberKeyboard: 新增 hideOnClickOutside & closeBut为nText 属性 [\#458](https://github.com/youzan/vant/pull/458)
* Area: 优化性能 [\#457](https://github.com/youzan/vant/pull/457)
* 优化代码格式检查命令 [\#455](https://github.com/youzan/vant/pull/455) [\#453](https://github.com/youzan/vant/pull/453)

**Bug Fixes**

* 修复全局引入样式时 Cell 箭头错位的问题

## [v0.11.13](https://github.com/youzan/vant/tree/v0.11.13)

`2017-12-19`

**Improvements**

* Area: 新增 'title' prop [\#450](https://github.com/youzan/vant/pull/450)
* Icon: 新增 'info' prop [\#447](https://github.com/youzan/vant/pull/447)
* Picker: 优化性能 [\#450](https://github.com/youzan/vant/pull/450)
* Search: 支持 input 原生事件 [\#451](https://github.com/youzan/vant/pull/451)
* GoodsAction: 新增 'info' 属性，支持路由跳转 [\#448](https://github.com/youzan/vant/pull/448)
* Area & Sku: 支持多语言切换 [\#439](https://github.com/youzan/vant/pull/439) [\#440](https://github.com/youzan/vant/pull/440)

**Bug Fixes**

* 修复 GoodsAction 在小屏下文字显示不全的问题 [\#446](https://github.com/youzan/vant/pull/446)

## [v0.11.12](https://github.com/youzan/vant/tree/v0.11.12)

`2017-12-15`

**Improvements**

* ContactCard: 新增 'editable' 属性 [\#435](https://github.com/youzan/vant/pull/435)
* Coupon: 支持英文语言 [\#431](https://github.com/youzan/vant/pull/431)

**Bug Fixes**

* 修复 Popup preventScroll 属性失效的问题 [\#429](https://github.com/youzan/vant/pull/429)
* 修复 Picker 滑动时未禁止页面滚动的问题 [\#432](https://github.com/youzan/vant/pull/432)
* 修复 Picker 底部区域无法滑动的问题 [\#433](https://github.com/youzan/vant/pull/433)
* 修复 PullRefresh 顶部内容遮挡的问题 [\#436](https://github.com/youzan/vant/pull/436)

## [v0.11.11](https://github.com/youzan/vant/tree/v0.11.11)

`2017-12-13`

**Improvements**

* Field: 支持 input 标签原生事件 [\#421](https://github.com/youzan/vant/pull/421)
* Search: 支持 input 标签原生属性 [\#418](https://github.com/youzan/vant/pull/418)
* CellGroup: 新增 'border' 属性 [\#420](https://github.com/youzan/vant/pull/420)
* AddressEdit: 新增 focus、change-area、select-search 事件 [\#426](https://github.com/youzan/vant/pull/426)
* Badge、CouponList、ContactCard: 增加点击反馈 [\#419](https://github.com/youzan/vant/pull/419)

**Bug Fixes**

* 修复 Checkbox 在 CheckboxGroup 内时 disabled 属性无法生效的问题 [\#425](https://github.com/youzan/vant/pull/425)
* 修复 AddressEdit 搜索结果展示错误 [\#417](https://github.com/youzan/vant/pull/417)

## [v0.11.10](https://github.com/youzan/vant/tree/v0.11.10)

`2017-12-12`

**Improvements**

* 支持通过 Vue.use 来全局注册组件 [\#401](https://github.com/youzan/vant/pull/401)
* 统一组件间的 fade 动画，优化过渡效果 [\#410](https://github.com/youzan/vant/pull/410)

**Bug Fixes**

* Icon: 修复 'shopping-cart' 图标高度不居中的问题 [\#415](https://github.com/youzan/vant/pull/415)

## [v0.11.9](https://github.com/youzan/vant/tree/v0.11.9)

`2017-12-11`

**Improvements**

* Icon: 新增 share & arrow-left 图标 [\#407](https://github.com/youzan/vant/pull/407)
* Icon: 支持使用本地字体文件 [\#408](https://github.com/youzan/vant/pull/408)

**Bug Fixes**

* 修复 raf SSR 报错的问题 [\#405](https://github.com/youzan/vant/pull/405)
* 修复 NoticeBar animationend 事件兼容问题 [\#402](https://github.com/youzan/vant/pull/402)

## [v0.11.8](https://github.com/youzan/vant/tree/v0.11.8)

`2017-12-08`

**Improvements**

* Icon: 新增两个图标 [\#396](https://github.com/youzan/vant/pull/396)
* But为n: 调整默认按钮边框颜色 [\#392](https://github.com/youzan/vant/pull/392)

**Bug Fixes**

* Tab: 修复 safari 下的滚动条问题 [\#390](https://github.com/youzan/vant/pull/390)
* Tab: 修复 active 标签不能自动居中的问题 [\#394](https://github.com/youzan/vant/pull/394)

## [v0.11.7](https://github.com/youzan/vant/tree/v0.11.7)

`2017-12-07`

**Improvements**

* Tab: 传入 sticky 属性且切换标签时，自动滚动至顶部 [\#389](https://github.com/youzan/vant/pull/389) [chenjiahan](https://github.com/chenjiahan)

**Bug Fixes**

* 修复 Tab 初始标签滚动位置 [\#389](https://github.com/youzan/vant/pull/389) [chenjiahan](https://github.com/chenjiahan)

## [v0.11.6](https://github.com/youzan/vant/tree/v0.11.6)

`2017-12-07`

**Improvements**

* Picker: 支持点击切换选项、禁用选项 [\#370](https://github.com/youzan/vant/pull/370)
* Tab: 新增 sticky 属性 [\#382](https://github.com/youzan/vant/pull/382)
* Tab: 优化动画流畅度 [\#379](https://github.com/youzan/vant/pull/379)

**Bug Fixes**

* 修复 Popup overlayClass 类型错误 [\#374](https://github.com/youzan/vant/pull/374)
* 修复 Field number 类型输入值过滤 [\#386](https://github.com/youzan/vant/pull/386)
* 修复 Icon 'new' 显示问题 [\#381](https://github.com/youzan/vant/pull/381)
* 修复 Sku 按钮圆角问题 [\#378](https://github.com/youzan/vant/pull/378)
* 修复 Radio & Checkbox 禁用态样式 [\#383](https://github.com/youzan/vant/pull/383)
* 修复 Field disabled 在安卓下的显示问题 [\#388](https://github.com/youzan/vant/pull/388)

## [v0.11.5](https://github.com/youzan/vant/tree/v0.11.5)

`2017-12-04`

**Improvements**

* Coupon：调整 Cell 右侧文案 [\#371](https://github.com/youzan/vant/pull/371)
* GoodsAction: 支持国际化 [\#367](https://github.com/youzan/vant/pull/367)
* 增加 Props 命名规范相关文档 [\#366](https://github.com/youzan/vant/pull/366)

**Bug Fixes**

* 修复 Tab 删除时未自动切换 active 值的问题 [\#372](https://github.com/youzan/vant/pull/372)

## [v0.11.4](https://github.com/youzan/vant/tree/v0.11.4)

`2017-11-30`

**Improvements**

* 新增类型定义文件，增强对 TypeScript 支持 [\#361](https://github.com/youzan/vant/pull/361)
* Toast/Dialog 自动挂载至 Vue.pro为type, 支持 this.$为ast 等方式调用 [\#363](https://github.com/youzan/vant/pull/363)

## [v0.11.3](https://github.com/youzan/vant/tree/v0.11.3)

`2017-11-28`

**Breaking changes**

* NavBar: 规范事件命名, 由 'clickLeft' 改为 'click-left' [\#354](https://github.com/youzan/vant/pull/354)

**Improvements**

* SwipeCell: 新增 onClose 属性，支持异步控制 [\#356](https://github.com/youzan/vant/pull/356)
* Uploader: 支持继承原生属性 [\#357](https://github.com/youzan/vant/pull/357)
* 优化本地构建速度 [\#355](https://github.com/youzan/vant/pull/355)

## [v0.11.2](https://github.com/youzan/vant/tree/v0.11.2)

`2017-11-24`

**Improvements**

* Icon: 增加 7 个新图标 [\#351](https://github.com/youzan/vant/pull/351)

## [v0.11.1](https://github.com/youzan/vant/tree/v0.11.1)

`2017-11-24`

**Improvements**

* Actionsheet: 更新关闭按钮样式 [\#340](https://github.com/youzan/vant/pull/340)
* Popup: 新增 overlayClass、overlayStyle 属性 [\#349](https://github.com/youzan/vant/pull/349) [\#343](https://github.com/youzan/vant/pull/343)
* Icon: 调整 unicode，避免展示特殊字符 [\#330](https://github.com/youzan/vant/pull/330)
* ImagePreview: 支持手动关闭 [\#346](https://github.com/youzan/vant/pull/346)
* Tabbar: 支持通过 slot-scope 判断 active 状态 [\#347](https://github.com/youzan/vant/pull/347)
* SubmitBar: 新增左侧内容插槽 [\#345](https://github.com/youzan/vant/pull/345)
* 优化组件 staticClass 渲染效率 [\#337](https://github.com/youzan/vant/pull/337)
* 优化文字截取相关样式 [\#334](https://github.com/youzan/vant/pull/334)
* 优化按钮 css layer 及 GPU 开销 [\#336](https://github.com/youzan/vant/pull/336)

**Bug Fixes**

* 修复 SSR 过程中报错的问题 [\#344](https://github.com/youzan/vant/pull/344)
* 修复 DateTimePicker 接受非法参数时卡死的问题 [\#333](https://github.com/youzan/vant/pull/333)

## [v0.11.0](https://github.com/youzan/vant/tree/v0.11.0)

`2017-11-17`

**Breaking changes**

* 组件支持国际化 [\#310](https://github.com/youzan/vant/pull/310)
* 移除部分无用的 props 及有效性检测 [\#323](https://github.com/youzan/vant/pull/323)

**Improvements**

* 新增 Pagination 组件 [\#327](https://github.com/youzan/vant/pull/327) [\#328](https://github.com/youzan/vant/pull/328)
* 新增 Locale 组件 [\#310](https://github.com/youzan/vant/pull/310)
* 新增国际化文档 [\#321](https://github.com/youzan/vant/pull/321)
* Icon: add-o 图标更正为圆角 [\#326](https://github.com/youzan/vant/pull/326)

## [v0.10.9](https://github.com/youzan/vant/tree/v0.10.9)

`2017-11-15`

**Improvements**

* Icon: 增加几个新 icons [\#315](https://github.com/youzan/vant/pull/315)

**Bug Fixes**

* Search: 修复 box-sizing 错误 [\#312](https://github.com/youzan/vant/pull/312)

## [v0.10.8](https://github.com/youzan/vant/tree/v0.10.8)

`2017-11-11`

**Improvements**

* Tabbar: 支持 vue-router [\#305](https://github.com/youzan/vant/pull/305)
* Stepper: 新增 plus & minus 事件 [\#294](https://github.com/youzan/vant/pull/294)
* Progress: 新增 showPivot 属性 [\#300](https://github.com/youzan/vant/pull/300)
* Loading: 新增 spinner 类型 [\#297](https://github.com/youzan/vant/pull/297)
* Toast: 新增 mask 选项 [\#296](https://github.com/youzan/vant/pull/296)
* 新增 Tab 英文文档 [\#308](https://github.com/youzan/vant/pull/308)
* 新增 Toast 英文文档 [\#307](https://github.com/youzan/vant/pull/307)

**Bug Fixes**

* 修复 npm run dist 在 windows 下报错的问题 [\#301](https://github.com/youzan/vant/pull/301)

## [v0.10.7](https://github.com/youzan/vant/tree/v0.10.7)

`2017-11-08`

**Improvements**

* 修正了所有图标尺寸，保持大小统一 [\#292](https://github.com/youzan/vant/pull/292)
* ImagePreview 支持自定义初始位置 [\#286](https://github.com/youzan/vant/pull/286)

**Bug Fixes**

* 修复 Sku 滚动锁定问题 [\#291](https://github.com/youzan/vant/pull/291)
* 修复 Steps 超过四项时样式错误 [\#287](https://github.com/youzan/vant/pull/287)

## [v0.10.6](https://github.com/youzan/vant/tree/v0.10.6)

`2017-11-06`

**Improvements**

* 新增 Swipe initialSwipe 属性 [\#279](https://github.com/youzan/vant/pull/279)

**Bug Fixes**

* 修复 Dialog 按钮文字未重置的问题 [\#278](https://github.com/youzan/vant/pull/278)
* 修复 Tab 动态生成问题 [\#284](https://github.com/youzan/vant/pull/284)
* 修复 NoticeBar 在页面返回时文字消失的问题 [\#280](https://github.com/youzan/vant/pull/280)

## [v0.10.5](https://github.com/youzan/vant/tree/v0.10.5)

`2017-10-30`

**Improvements**

* Cell 支持 vue-router 路由跳转 [\#268](https://github.com/youzan/vant/pull/268)

**Bug Fixes**

* 修复 Tabbar 使用 icon 插槽时 info prop 失效的问题 [\#269](https://github.com/youzan/vant/pull/269)
* 修复 Uploader input 类型错误 [\#265](https://github.com/youzan/vant/pull/265)

## [v0.10.4](https://github.com/youzan/vant/tree/v0.10.4)

`2017-10-26`

**Improvements**

* 新增多个图标 [\#253](https://github.com/youzan/vant/pull/253)
* 新增定制主题文档 [\#251](https://github.com/youzan/vant/pull/251)
* 新增多个组件的按钮点击态提示 [\#248](https://github.com/youzan/vant/pull/248)
* NoticeBar：增加多个 props [\#254](https://github.com/youzan/vant/pull/254)

**Bug Fixes**

* 修复 Swipe 在某些情况下宽度计算错误的问题 [\#258](https://github.com/youzan/vant/pull/258)
* 修复 PullRefreash 父元素可滚动时无法正常运行的问题 [\#247](https://github.com/youzan/vant/pull/247)
* 修复 CouponList 空列表样式一直存在的问题 [\#246](https://github.com/youzan/vant/pull/246)

## [v0.10.3](https://github.com/youzan/vant/tree/v0.10.3)

`2017-10-25`

**Improvements**

* 新增 Tabbar info 属性 [\#245](https://github.com/youzan/vant/pull/245)
* 新增 Toast position 属性 [\#244](https://github.com/youzan/vant/pull/244)
* 新增 Coupon showExchangeBar 属性 [\#243](https://github.com/youzan/vant/pull/243)
* 新增高阶组件英文文档 [\#236](https://github.com/youzan/vant/pull/236)
* 新增示例页面文档 [\#237](https://github.com/youzan/vant/pull/237)

**Bug Fixes**

* 修复 Address & Contact 列表底部遮挡问题 [\#230](https://github.com/youzan/vant/pull/230)
* 修复 popup 被依赖时未自动引入样式的问题 [\#231](https://github.com/youzan/vant/pull/231)
* 修复 PullRefresh 为uchcancel 事件名拼写错误 [\#239](https://github.com/youzan/vant/pull/239)

## [v0.10.2](https://github.com/youzan/vant/tree/v0.10.2)

`2017-10-20`

**Improvements**

* Sku: sku-group 插槽增加 event bus [\#226](https://github.com/youzan/vant/pull/226)
* 新增基础英文文档 [\#220](https://github.com/youzan/vant/pull/220)

**Bug Fixes**

* 修复组件间样式依赖分析遗漏的问题 [\#224](https://github.com/youzan/vant/pull/224)

## [v0.10.1](https://github.com/youzan/vant/tree/v0.10.1)

`2017-10-18`

**Improvements**

* 升级 Vue 依赖至 2.5.0 版本
* 新增 Tabs swipeThreshold 属性 [\#206](https://github.com/youzan/vant/pull/206)

**Bug Fixes**

* 修复 Swipe 组件 destroyed 时未清除 au为play timer 的问题 [\#218](https://github.com/youzan/vant/pull/218)
* 修复 Tab 组件插槽 text 文本换行问题 [\#217](https://github.com/youzan/vant/pull/217)
* 修复 TreeSelect 依赖路径错误 [\#216](https://github.com/youzan/vant/pull/216)
* 修复 Checkbox 在微信浏览器下的边框渲染错误 [\#214](https://github.com/youzan/vant/pull/214)
* 修复 Popup modal 层在某些情况下无法展示的问题 [\#211](https://github.com/youzan/vant/pull/211)
* 修复 Waterfall 重复绑定事件的问题

## [v0.10.0](https://github.com/youzan/vant/tree/v0.10.0)

`2017-10-13`

**Breaking changes**

* 移除 style 中对 reset.css 的默认引用 [\#192](https://github.com/youzan/vant/issues/192) [\#196](https://github.com/youzan/vant/pull/196)
* 重写 Swipe 组件，调整部分 API [#174](https://github.com/youzan/vant/issues/174) [#180](https://github.com/youzan/vant/issues/180) [\#194](https://github.com/youzan/vant/pull/194) [\#200](https://github.com/youzan/vant/pull/200)
* 优化 Search 组件，修改原有结构 [\#198](https://github.com/youzan/vant/pull/198)

**Improvements**

* 新增 Tabbar 组件 [#157](https://github.com/youzan/vant/issues/157) [\#204](https://github.com/youzan/vant/pull/204)
* 新增表单相关组件英文文档 [\#199](https://github.com/youzan/vant/pull/199)
* 优化 Sku 样式 [\#205](https://github.com/youzan/vant/pull/205)

**Bug Fixes**

* 修复 ImagePreview 图片加载过程中跳动的问题 [\#201](https://github.com/youzan/vant/pull/201)
* 修复 Field 组件 type 为 textarea 且 display none 时高度计算错误的问题 [\#181](https://github.com/youzan/vant/issues/181)

## [v0.9.12](https://github.com/youzan/vant/tree/v0.9.12)

`2017-10-11`

**Bug Fixes**

* 修复 Search 样式问题 [\#191](https://github.com/youzan/vant/pull/191)

## [v0.9.11](https://github.com/youzan/vant/tree/v0.9.11)

`2017-10-11`

**Improvements**

* 新增 Contribute 相关文档 [\#182](https://github.com/youzan/vant/pull/182)

**Bug Fixes**

* 修正 AddressEdit 组件姓名字段的键名为 name [\#187](https://github.com/youzan/vant/pull/187)
* 修复 Field type 为 textarea 且 display none 时高度计算错误的问题 [\#188](https://github.com/youzan/vant/pull/188)
* 修复 windows 下项目编译失败的问题 [\#185](https://github.com/youzan/vant/pull/182)

## [v0.9.10](https://github.com/youzan/vant/tree/v0.9.10)

`2017-10-09`

**Improvements**

* 新增 Contact 组件 [\#160](https://github.com/youzan/vant/pull/160)
* 新增 AddressEdit 组件 [\#147](https://github.com/youzan/vant/pull/147)
* 新增英文文档支持 [\#170](https://github.com/youzan/vant/pull/170)
* 去除 zan-utils 依赖 [\#168](https://github.com/youzan/vant/pull/168)
* 去除 transition 中冗余的兼容代码 [\#162](https://github.com/youzan/vant/pull/162)
* 使用 clean-css 代替 gulp-cssmin

**Bug Fixes**

* 修复 Tab props 修改后未同步至父组件的问题 [\#148](https://github.com/youzan/vant/pull/148)
* 修复 But为n active 状态下边框样式问题 [\#150](https://github.com/youzan/vant/issues/150)
* 修复 Stepper 组件输入框样式错误 [\#159](https://github.com/youzan/vant/pull/159)
* 修复 Waterfall 未显示时 disable 属性无法生效的问题 [\#166](https://github.com/youzan/vant/pull/166)
* 修复 style 构建过程中未编译 calc 属性的问题
* 修复 MacOS 下 npm run dev 报错的问题 [\#152](https://github.com/youzan/vant/issues/152)
* 修复文档在部分低版本浏览器路由失效的问题 [\#158](https://github.com/youzan/vant/pull/158)
* 修复文档中遗漏 SwipeItem 组件引入方式的问题 [\#167](https://github.com/youzan/vant/pull/167)

## [v0.9.9](https://github.com/youzan/vant/tree/v0.9.9)

`2017-09-26`

**Improvements**

* Sku：支持禁用 Stepper [\#146](https://github.com/youzan/vant/pull/146)

**Bug Fixes**

* 修复 packages.json 中 license 标注错误 [\#144](https://github.com/youzan/vant/pull/144)
* 修复 Waterfall 滚动计算错误的问题 [\#145](https://github.com/youzan/vant/pull/145)

## [v0.9.8](https://github.com/youzan/vant/tree/v0.9.8)

`2017-09-24`

**Improvements**

* 新增 AddressList 组件 [\#138](https://github.com/youzan/vant/pull/138)
* 优化 changelog 结构 [\#140](https://github.com/youzan/vant/pull/140)

**Bug Fixes**

* 修复 Sku 留言渲染错误 [\#142](https://github.com/youzan/vant/pull/142)

## [v0.9.7](https://github.com/youzan/vant/tree/v0.9.7)

`2017-09-21`

**Improvements**

* Checkbox: 支持 shape 属性 [\#137](https://github.com/youzan/vant/pull/137)

## [v0.9.6](https://github.com/youzan/vant/tree/v0.9.6)

`2017-09-20`

**Improvements**

* Sku：移除大部分 Lodash 函数 [\#135](https://github.com/youzan/vant/pull/135)
* Icon：增加会员余额图标 [\#133](https://github.com/youzan/vant/pull/133)

**Bug Fixes**

* 修复 ImagePreview 滑动后无法展示图片的问题 [\#126](https://github.com/youzan/vant/issues/126)
* 修复 reset.css 编译失败的问题 [\#136](https://github.com/youzan/vant/pull/136)

## [v0.9.4](https://github.com/youzan/vant/tree/v0.9.4)

`2017-09-15`

**Improvements**

* Icon: 增加已完成图标 [\#129](https://github.com/youzan/vant/pull/129)

**Bug Fixes**

* 修复 But为n 同时使用 disabled 和 bot为mAction 属性时颜色错误的问题 [\#131](https://github.com/youzan/vant/pull/131)
* 修复 But为n 不可用状态下 acitive 背景色错误的问题 [\#132](https://github.com/youzan/vant/pull/132)

## [v0.9.3](https://github.com/youzan/vant/tree/v0.9.3)

`2017-09-13`

**Improvements**

* 新增 PasswordInput 组件 [\#124](https://github.com/youzan/vant/pull/124)
* 新增 NumberKeyboard 组件 [\#122](https://github.com/youzan/vant/pull/122)
* 新增文档底部 issue 入口 [\#127](https://github.com/youzan/vant/issues/127)

**Bug Fixes**

* 修复部分组件样式依赖 reset.css 的问题 [\#128](https://github.com/youzan/vant/pull/128)

## [v0.9.2](https://github.com/youzan/vant/tree/v0.9.2)

`2017-09-08`

**Breaking changes**

* 内置 van-hairline 类，用于添加 0.5px 边框 [\#110](https://github.com/youzan/vant/pull/110)
* Quantity：重命名为 Stepper [\#120](https://github.com/youzan/vant/pull/120)
* PayOrder 重命名为 SubmitBar [\#120](https://github.com/youzan/vant/pull/120)
* DeepSelect: 重命名为 TreeSelect [\#120](https://github.com/youzan/vant/pull/120)
* OrderCoupon: 拆分为 CouponList 和 CouponCell 组件 [\#120](https://github.com/youzan/vant/pull/120)

**Bug Fixes**

* 修复 Tabs 动画过渡效果 [\#111](https://github.com/youzan/vant/pull/111)
* 修复 Swipe 页数为一时指示器未隐藏的问题 [\#106](https://github.com/youzan/vant/pull/106)
* 修复 Toast 背景色值错误的问题 [\#118](https://github.com/youzan/vant/pull/118)
* 修复自动引入组件样式时未引入内部依赖组件样式的问题 [\#115](https://github.com/youzan/vant/pull/115)

**Improvements**

* 新增 Sku 组件 [\#123](https://github.com/youzan/vant/pull/123)
* 新增 Area 组件 [\#113](https://github.com/youzan/vant/pull/113)
* 新增 NavBar 组件 [\#121](https://github.com/youzan/vant/pull/121)
* 新增 PullRefresh 组件 [\#117](https://github.com/youzan/vant/pull/117)
* 新增 OrderCoupon 组件 [\#108](https://github.com/youzan/vant/pull/108)
* 优化文档加载速度 [\#107](https://github.com/youzan/vant/pull/107)
* 优化 Popup 文档 [\#109](https://github.com/youzan/vant/pull/109)
* Card：支持 num 和 price 属性 [\#112](https://github.com/youzan/vant/pull/112)
* Toast: 支持 loading 和 text 属性同时使用，优化渲染性能 [\#114](https://github.com/youzan/vant/pull/114)
* Toast：布局方式改为 Flex 布局 [\#114](https://github.com/youzan/vant/pull/114)

## [v0.8.8](https://github.com/youzan/vant/tree/v0.8.8)

`2017-09-01`

**Improvements**

* 新增 DeepSelect 组件 [\#103](https://github.com/youzan/vant/pull/103)
* 新增 GoodsAction 组件 [\#102](https://github.com/youzan/vant/pull/102)
* 新增 OrderGoods 组件 [\#99](https://github.com/youzan/vant/pull/99)
* 新增 PayOrder 组件 [\#98](https://github.com/youzan/vant/pull/98)
* 优化 Step、Loading、Tag、Badge 文档 [\#101](https://github.com/youzan/vant/pull/101)
* Checkbox: 支持 change 事件 [\#104](https://github.com/youzan/vant/pull/104)

**Bug Fixes**

* 修复 make init 命令报错的问题 [\#97](https://github.com/youzan/vant/pull/97)

## [v0.8.7](https://github.com/youzan/vant/tree/v0.8.7)

`2017-08-29`

**Improvements**

* 新增 NoticeBar 组件 [\#94](https://github.com/youzan/vant/pull/94)
* 新增 CellSwitch 组件 [\#95](https://github.com/youzan/vant/pull/95)
* Dialog: 支持通过组件的方式进行调用 [\#93](https://github.com/youzan/vant/pull/93)
* Progress: 简化 DOM 结构 [\#90](https://github.com/youzan/vant/pull/90)
* SwipeCell: 性能优化，补充单元测试 [\#91](https://github.com/youzan/vant/pull/91)

## [v0.8.6](https://github.com/youzan/vant/tree/v0.8.6)

`2017-08-24`

**Improvements**

* 去除对 merge 和 class 操作方法的依赖 [\#88](https://github.com/youzan/vant/pull/88)
* 目录结构简化，去除 index.js 文件 [\#87](https://github.com/youzan/vant/pull/87)
* But为n: 精简部分样式 [\#86](https://github.com/youzan/vant/pull/86)
* Layout: 文档优化 [\#85](https://github.com/youzan/vant/pull/85)

**Bug Fixes**

* 修复 DatetimePicker 初始值错误的问题 [\#89](https://github.com/youzan/vant/pull/89)

## [v0.8.5](https://github.com/youzan/vant/tree/v0.8.5)

`2017-08-21`

**Breaking changes**

* 优化单个组件构建方式, 减少文件体积 [\#74](https://github.com/youzan/vant/pull/74)

**Improvements**

* 新增文档组件使用指南 [\#83](https://github.com/youzan/vant/pull/83)
* 新增文档加载动效 [\#83](https://github.com/youzan/vant/pull/83)
* Field：新增 icon 插槽 [\#76](https://github.com/youzan/vant/pull/76)

**Bug Fixes**

* 修复 Popup 默认开启 preventScroll 导致无法局部滚动的问题 [\#84](https://github.com/youzan/vant/pull/84)
* 修复 Field au为size 高度错误的问题 [\#78](https://github.com/youzan/vant/pull/78)
* 修复 Dialog z-index 错误的问题 [\#77](https://github.com/youzan/vant/pull/77)

## [v0.7.8](https://github.com/youzan/vant/tree/v0.7.8)

`2017-08-10`

**Improvements**

* 新增 README 英文文档 [\#66](https://github.com/youzan/vant/pull/66)
* 新增 babel-plugin-import 使用教程 [\#71](https://github.com/youzan/vant/pull/71)
* 新增多个 Icon 类型 [\#69](https://github.com/youzan/vant/pull/69)

**Bug Fixes**

* 修复 Swipe 组件报错的问题 [\#70](https://github.com/youzan/vant/pull/70)
* 修复 DatetimePicker cancel 事件无法触发的问题 [\#45](https://github.com/youzan/vant/issues/45)
* 修复 utils 编译时未转成 ES5 的问题 [\#67](https://github.com/youzan/vant/pull/67)

## [v0.7.2](https://github.com/youzan/vant/tree/v0.7.2)

`2017-07-31`

**Breaking changes**

* 文档站点样式改版 [\#55](https://github.com/youzan/vant/pull/55)
* 支持 babel-plugin-import [\#62](https://github.com/youzan/vant/pull/62)

**Bug Fixes**

* 修复 Popup 多层级 modal 未插入到正确的位置的问题 [\#63](https://github.com/youzan/vant/pull/63)
* 修复 Tabs 组件为空报错的问题 [\#61](https://github.com/youzan/vant/pull/61)

**Improvements**

* Switch：增加过渡动画效果 [\#59](https://github.com/youzan/vant/pull/59) [BosenY](https://github.com/BosenY)
* Card：支持 centered 属性 [\#54](https://github.com/youzan/vant/pull/54)

## [v0.6.6](https://github.com/youzan/vant/tree/v0.6.6)

`2017-07-15`

**Improvements**

* Tabs：支持滑动 [\#52](https://github.com/youzan/vant/pull/52)
* Steps：新增 direction 和 activeColor 属性，支持竖向展示 [\#49](https://github.com/youzan/vant/pull/49)
* Card：支持 thumb 插槽 [\#48](https://github.com/youzan/vant/pull/48)
* Field：支持 blur 事件，新增 icon 插槽 [\#53](https://github.com/youzan/vant/pull/53)

## [v0.6.2](https://github.com/youzan/vant/tree/v0.6.2)

`2017-06-26`

**Improvements**

* Field 组件：支持 time 类型 [\#43](https://github.com/youzan/vant/pull/43)

**Bug Fixes**

* 修复 Toast 样式问题 [\#42](https://github.com/youzan/vant/pull/42)
* 修复人民币符号在 iOS 下显示问题 [\#44](https://github.com/youzan/vant/pull/44)

## [v0.6.0](https://github.com/youzan/vant/tree/v0.6.0)

`2017-06-15`

**Improvements**

* 支持 SSR [\#40](https://github.com/youzan/vant/pull/40)
* 新增多个 Icon 类型 [\#40](https://github.com/youzan/vant/pull/40)
* 新增 SwipeCell 组件 [\#39](https://github.com/youzan/vant/pull/39)
* 新增 Search 组件微杂志样式 [\#38](https://github.com/youzan/vant/pull/38)

## [v0.5.8](https://github.com/youzan/vant/tree/v0.5.8)

`2017-05-25`

**Improvements**

* 新增多个 Icon 类型 [\#29](https://github.com/youzan/vant/pull/29)
* 新增打包后的 amd 模块名称 [\#28](https://github.com/youzan/vant/pull/28)
* 移除 postcss-reset 插件 [\#35](https://github.com/youzan/vant/pull/35)
* Picker：支持 title 属性 [\#30](https://github.com/youzan/vant/pull/30)

**Bug Fixes**

* 修复长按图片后隐藏的问题 [\#32](https://github.com/youzan/vant/pull/32)

## [v0.5.4](https://github.com/youzan/vant/tree/v0.5.4)

`2017-05-09`

**Bug Fixes**

* 修复 Cell 同时设置 title 和 label 时 value 不居中的问题 [\#26](https://github.com/youzan/vant/pull/26)
* 修复 Popup zIndex 类型错误 [\#24](https://github.com/youzan/vant/pull/24)
* 修复 Picker 状态更新错误 [\#23](https://github.com/youzan/vant/pull/23)

**Improvements**

* 新增 reset.css [\#27](https://github.com/youzan/vant/pull/27)
* Cell: 新增 right-icon 插槽 [\#27](https://github.com/youzan/vant/pull/27)

## [v0.5.2](https://github.com/youzan/vant/tree/v0.5.2)

`2017-04-26`

**Improvements**

* 新增 Picker 组件测试用例 [\#20](https://github.com/youzan/vant/pull/20)
* 新增 Col & Row 组件测试用例 [\#16](https://github.com/youzan/vant/pull/16)
* 新增 Uploader 单元测试 [\#9](https://github.com/youzan/vant/pull/9)

**Bug Fixes**

* 修复 Webpack 打包错误 [\#21](https://github.com/youzan/vant/pull/21)
* 修复 Toast 关闭时未移除 Dom 节点的问题 [\#19](https://github.com/youzan/vant/pull/19)
* 修复组件样式问题 [\#5](https://github.com/youzan/vant/pull/5)
