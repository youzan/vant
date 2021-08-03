# 组件描述文档验证工具

绝大部分验证规则均由 [schema.js](./schema.js) 提供，可点击查看具体详情。

## 自定义验证组件

部分验证规则是通过属性名或者属性的类型去判断的，很容易出现问题，故新版提供了 `compType`、 `compConfig` 两个属性用于自定义验证规则。下面列出了部分自定义验证组件

### dataTypeSelect

由属性名 `data-schema` 变更而来

### interfaceSelect

由属性名 `url` 变更而来

### linkTypeSelect

由属性名 `linkType` 变更而来

### linkHrefInput

由属性名 `hrefAndTo` 变更而来

### validationRulesSelect

由属性名 `rules` 变更而来

### linkInput

由属性类型 `image`、`link` 变更而来
