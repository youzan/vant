## Vant 2.0 改动一览

## 不兼容更新

在 2.0 版本中，我们对组件和 API 进行重命名，以更加符合业界的命名规范，同时移除了少量不常用的属性，具体改动如下：

### Actionsheet

- [x] 重命名为`ActionSheet`

### Button

- [x] 移除`bottom-action`属性，请使用`square`和`size`代替

### Field

- [x] 移除`on-icon-click`属性，请使用`click-right-icon`事件代替
- [x] `icon`属性重命名为`right-icon`
- [x] `icon`插槽重命名为`right-icon`
- [x] `click-icon`事件重命名为`click-right-icon`

### GoodsAction

- [x] `GoodsActionBigBtn`重命名为`GoodsActionButton`
- [x] `GoodsActionMiniBtn`重命名为`GoodsActionIcon`
- [x] `GoodsActionBigBtn`移除`primary`属性，请使用`type`属性代替

### Step

- [x] 移除`icon`属性
- [x] 移除`title`属性
- [x] 移除`icon-class`属性
- [x] 移除`description`属性
- [x] 移除`message-extra`插槽

### Badge

- [ ] 重命名为`SideNav`

### Loading

- [x] 移除`circle`类型
- [x] 移除`gradient-circle`类型

## 新特性

TODO
