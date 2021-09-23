### 用法

- 继承 MParent 的组件，同时要继承 MGroupParent，补充声明分组组件的 `groupName`字段
- 在继承 MChild 的组件 Options 中，补充声明分组组件的 `groupName`字段
- 在继承 MGroup 的组件 Options 中，补充声明父组件的 `parentName`字段，补充声明父组件的 `childName`字段

父组件会将多个分组组件收集在`groupVMs`数组中，分组组件会将多个子组件收集在`itemVMs`数组中，同时将父组件标记为`parentVM`变量。这段过程发生在组件的`created`阶段。在`destroyed`阶段回收这些数据。
