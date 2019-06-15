# 更新日志

### [v2.0.1](https://github.com/youzan/vant/tree/v2.0.1)
`2019-06-15`

**Improvements**

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

- 移除在 1.0 版本废弃的 Waterfall 组件，请使用`List`组件代替，或使用独立的[@vant/waterfall](https://github.com/chenjiahan/vant-waterfall)包。

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
