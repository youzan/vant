# ContactEdit 联系人编辑

### 介绍

编辑并保存联系人信息。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { ContactEdit } from 'vant';

const app = createApp();
app.use(ContactEdit);
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
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const editingContact = ref({
      tel: '',
      name: '',
    });
    const onSave = (contactInfo) => showToast('保存');
    const onDelete = (contactInfo) => showToast('删除');
    return {
      onSave,
      onDelete,
      editingContact,
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| contact-info | 联系人信息 | _ContactEditInfo_ | `{}` |
| is-edit | 是否为编辑联系人 | _boolean_ | `false` |
| is-saving | 是否显示保存按钮加载动画 | _boolean_ | `false` |
| is-deleting | 是否显示删除按钮加载动画 | _boolean_ | `false` |
| tel-validator | 手机号格式校验函数 | _(tel: string) => boolean_ | - |
| show-set-default | 是否显示默认联系人栏 | _boolean_ | `false` |
| set-default-label | 默认联系人栏文案 | _string_ | - |

### Events

| 事件名         | 说明                       | 回调参数          |
| -------------- | -------------------------- | ----------------- |
| save           | 点击保存按钮时触发         | content：表单内容 |
| delete         | 点击删除按钮时触发         | content：表单内容 |
| change-default | 切换是否为默认联系人时触发 | checked：是否默认 |

### ContactEditInfo 数据结构

| 键名      | 说明         | 类型                   |
| --------- | ------------ | ---------------------- |
| name      | 联系人姓名   | _string_               |
| tel       | 联系人手机号 | _string_               |
| isDefault | 是否默认     | _boolean \| undefined_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { ContactEditInfo, ContactEditProps } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                    | 默认值                    | 描述 |
| --------------------------------------- | ------------------------- | ---- |
| --van-contact-edit-padding              | _var(--van-padding-md)_   | -    |
| --van-contact-edit-fields-radius        | _var(--van-radius-md)_    | -    |
| --van-contact-edit-buttons-padding      | _var(--van-padding-xl) 0_ | -    |
| --van-contact-edit-button-margin-bottom | _var(--van-padding-sm)_   | -    |
| --van-contact-edit-button-font-size     | _var(--van-font-size-lg)_ | -    |
| --van-contact-edit-field-label-width    | _4.1em_                   | -    |
