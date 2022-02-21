# 更新日志

### 提示

当前文档为 Vant 4 的更新日志，其他版本请参考：

- [Vant 2 更新日志](https://youzan.github.io/vant/v2/#/zh-CN/changelog)
- [Vant 3 更新日志](https://youzan.github.io/vant/v3/#/zh-CN/changelog)

### 介绍

Vant 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

**发布节奏**

- 修订号：每周发布，包含新特性和问题修复。
- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：无固定的发布时间，包含不兼容更新和重大功能更新。

## 更新内容

### 4.0.0-alpha.0

`2022-02-21`

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
