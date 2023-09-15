# ContactEdit 联系人编辑

### 介绍

编辑并保存联系人信息。

### 引入

```js
import Vue from 'vue';
import { ContactEdit } from 'vant';

Vue.use(ContactEdit);
```

## 代码演示

### 基础用法

```html
<van-contact-edit
  is-edit
  show-set-default
  :contact-info="editingContact"
  set-default-label="设为默认联系人"
  @save="onSave"
  @delete="onDelete"
/>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      editingContact: {},
    };
  },
  methods: {
    onSave(contactInfo) {
      Toast('保存');
    },
    onDelete(contactInfo) {
      Toast('删除');
    },
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| contact-info | 联系人信息 | _Contact_ | `{}` |
| is-edit | 是否为编辑联系人 | _boolean_ | `false` |
| is-saving | 是否显示保存按钮加载动画 | _boolean_ | `false` |
| is-deleting | 是否显示删除按钮加载动画 | _boolean_ | `false` |
| tel-validator | 手机号格式校验函数 | _(tel: string) => boolean_ | - |
| show-set-default | 是否显示默认联系人栏 | _boolean_ | `false` |
| set-default-label | 默认联系人栏文案 | _string_ | - |

### Events

| 事件名 | 说明               | 回调参数          |
| ------ | ------------------ | ----------------- |
| save   | 点击保存按钮时触发 | content：表单内容 |
| delete | 点击删除按钮时触发 | content：表单内容 |

### Contact 数据结构

| 键名 | 说明         | 类型               |
| ---- | ------------ | ------------------ |
| name | 联系人姓名   | _string_           |
| tel  | 联系人手机号 | _number \| string_ |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                               | 默认值              | 描述 |
| ---------------------------------- | ------------------- | ---- |
| @contact-edit-padding              | `@padding-md`       | -    |
| @contact-edit-fields-radius        | `@border-radius-md` | -    |
| @contact-edit-buttons-padding      | `@padding-xl 0`     | -    |
| @contact-edit-button-margin-bottom | `@padding-sm`       | -    |
| @contact-edit-button-font-size     | `16px`              | -    |
| @contact-edit-field-label-width    | `4.1em`             | -    |
