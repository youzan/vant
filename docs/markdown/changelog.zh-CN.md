# 更新日志

### [v2.0.0-beta.1](https://github.com/youzan/vant/tree/v2.0.0-beta.0)

##### ActionSheet

- 新增`lock-scroll`属性

##### Accordion

- 优化无障碍访问

##### DatetimePicker

- 新增`filter`属性

##### DropdownMenu

- 新增`duration`属性

##### DropdownItem

- 新增`title-class`属性

##### Picker

- 支持惯性滚动

##### Tab

- 优化无障碍访问
- 新增`border`属性

##### Uploader

- `oversize`事件增加`detail`参数

### [v2.0.0-beta.0](https://github.com/youzan/vant/tree/v2.0.0-beta.0)
`2019-05-21`

#### 主要变动

- 增加四个新组件
- 增加数十个 API
- 优化无障碍访问
- 全新的卡片风格文档，支持文档搜索
- 所有组件支持通过`less`变量自定义样式
- 调整了部分不合理的命名，废弃少量 API

#### 新组件

在 2.0 版本中，我们按照社区反馈新增以下组件：

- `Image`图片组件
- `Skeleton`骨架屏组件
- `IndexBar`、`IndexAnchor`索引栏组件
- `DropdownMenu`、`DropdownItem`下拉菜单组件

#### 不兼容更新

在 2.0 版本中，我们对部分组件和 API 进行重命名，以更加符合业界的命名规范，同时移除了少量不常用的属性，具体改动如下：

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
- `Badge`重命名为`SlideBarItem`

##### Loading

- 移除`circle`类型
- 移除`gradient-circle`类型

##### Checkbox

- 调整为`flex`布局，可能对原有布局产生影响

##### Radio

- 调整为`flex`布局，可能对原有布局产生影响

##### Waterfall

- 移除在 1.0 版本废弃的 Waterfall 组件，请使用`List`组件代替，或使用独立的[@vant/waterfall](https://github.com/chenjiahan/vant-waterfall)包。

#### 新特性

##### ActionSheet

- 新增`close-on-click-action`属性
- 支持同时使用`title`和`actions`属性

##### Button

- 新增`loading-type`属性

##### Checkbox

- 新增`icon-size`属性

##### Field

- 新增`label-class`属性

##### GoodsActionButton

- 新增`type`属性

##### Icon

- 支持`Number`类型的`size`属性

##### Loading

- 新增`default`插槽
- 新增`vertical`属性
- 新增`text-size`属性
- 支持`Number`类型的`size`属性

##### Notify

- 新增`onClick`属性

##### NoticeBar

- 新增`left-icon`插槽
- 新增`right-icon`插槽

##### PasswordInput

- 新增`gutter`属性

##### Popup

- 新增`click`事件
- 新增`duration`属性

##### Radio

- 新增`icon-size`属性

##### Steps

- 新增`inactive-icon`属性
- 新增`inactive-icon`插槽

##### SubmitBar

- 新增`tip-icon`属性
- 新增`suffix-label`属性

##### Switch

- 加载图标颜色现在会跟随背景色变化

##### SwitchCell

- 新增`border`属性
- 新增`cell-size`属性

##### Sku

- 新增`preview-open`事件
- 新增`preview-close`事件

##### Tab

- 优化`animated`动画性能
- 修复开启`animated`后高度错误的问题

##### Tabbar

- 新增`route`属性
- 新增`border`属性
- 新增`inactive-color`属性

##### TabbarItem

- 新增`name`属性
