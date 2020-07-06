# 不兼容更新

## 重命名徽标属性

在之前的版本中，我们通过 info 属性来展示图标右上角的徽标信息，为了表达更符合社区的命名习惯，我们将这个属性重命名为 badge，影响以下组件：

- Tab
- Icon
- GridItem
- TreeSelect
- TabbarItem
- SidebarItem
- GoodsActionIcon

同时内部使用的 Info 组件也会重命名为 Badge。

## v-model API 变更

- Popup: `v-model` 调整为 `v-model:show`
- Switch: v-model 对应的属性名和事件名由 `value/input` 调整为 `modelValue/update:modelValue`

## 废弃个别组件

- SwitchCell: 移除此组件，可以直接使用 Cell 和 Switch 组件代替
