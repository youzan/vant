## Vant 2.0 

### Actionsheet

- [x] 重命名为`ActionSheet` 

改动原因：规范命名

### Button

- [x] 移除 `bottom-action` 属性，请使用`square`和`size`代替

改动原因：冗余属性

### Field

- [x] 移除`onIconClick`属性，请使用`click-right-icon`事件代替
- [x] `icon`属性重命名为`right-icon`
- [x] `icon`插槽重命名为`right-icon`
- [x] `click-icon`事件重命名为`click-right-icon`

改动原因：规范命名

### GoodsAction

- [x] `GoodsActionBigBtn`重命名为`GoodsActionButton`
- [x] `GoodsActionMiniBtn`重命名为`GoodsActionIcon`
- [x] `GoodsActionBigBtn`移除`primary`属性，请使用`type`属性代替

改动原因：规范命名，统一用法

### Step

- [x] 移除`icon`属性
- [x] 移除`title`属性
- [x] 移除`icon-class`属性
- [x] 移除`description`属性
- [x] 移除`message-extra`插槽

改动原因：步骤条顶部内容的通用性较低，不适合在组件内实现

### Badge

- [ ] 重命名为 SideNav

### Loading

- [x] 移除`circle`类型
- [x] 移除`gradient-circle`类型

改动原因：视觉规范变更

### Area

- [ ] 数据结构改驼峰

### SwipeCell

- [ ] 移除 left-width 属性
- [ ] 移除 right-width 属性
