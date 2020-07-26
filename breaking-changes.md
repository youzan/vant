# 不兼容更新

## v-model API 变更

以下改动是为了适配 Vue 3 的 v-model API 用法变更：

- Tabs: `v-model` 重命名为 `v-model:active`
- Popup: `v-model` 重命名为 `v-model:show`
- Circle: `v-model` 重命名为 `v-model:currentRate`
- Dialog: `v-model` 重命名为 `v-model:show`
- ShareSheet: `v-model` 重命名为 `v-model:show`
- ActionSheet: `v-model` 重命名为 `v-model:show`
- List: `v-model` 重命名为 `v-model:loading`，`error.sync` 重命名为 `v-model:error`
- Field: v-model 对应的属性 `value` 重命名为 `modelValue`，事件由 `input` 重命名为 `update:modelValue`
- Switch: v-model 对应的属性 `value` 重命名为 `modelValue`，事件由 `input` 重命名为 `update:modelValue`
- Sidebar: v-model 对应的属性 `activeKey` 重命名为 `modelValue`，事件由 `input` 重命名为 `update:modelValue`
- TreeSelect: `active-id.sync` 重命名为 `v-model:active-id`
- TreeSelect: `main-active-index.sync` 重命名为 `v-model:main-active-index`

## API 命名调整

以下改动是为了规范 API 命名：

- TreeSelect: `navclick` 事件重命名为 `click-nav`
- TreeSelect: `itemclick` 事件重命名为 `click-item`

### 重命名徽标属性

在之前的版本中，我们通过 info 属性来展示图标右上角的徽标信息，为了表达更符合社区的命名习惯，我们将这个属性重命名为 badge，影响以下组件：

- Tab
- Icon
- GridItem
- TreeSelect
- TabbarItem
- SidebarItem
- GoodsActionIcon

同时内部使用的 Info 组件也会重命名为 Badge。

## 废弃个别组件

- SwitchCell: 移除此组件，可以直接使用 Cell 和 Switch 组件代替
