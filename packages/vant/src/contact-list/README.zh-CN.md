# ContactList 联系人列表

### 介绍

展示联系人列表。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { ContactList } from 'vant';

const app = createApp();
app.use(ContactList);
```

## 代码演示

### 基础用法

```html
<van-contact-list
  v-model="chosenContactId"
  :list="list"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
  @select="onSelect"
/>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const chosenContactId = ref('1');
    const list = ref([
      {
        id: '1',
        name: '张三',
        tel: '13000000000',
        isDefault: true,
      },
      {
        id: '2',
        name: '李四',
        tel: '1310000000',
      },
    ]);

    const onAdd = () => showToast('新增');
    const onEdit = (contact) => showToast('编辑' + contact.id);
    const onSelect = (contact) => showToast('选择' + contact.id);

    return {
      list,
      onAdd,
      onEdit,
      onSelect,
      chosenContactId,
    };
  },
};
```

## API

### Props

| 参数             | 说明                | 类型                | 默认值       |
| ---------------- | ------------------- | ------------------- | ------------ |
| v-model          | 当前选中联系人的 id | _number \| string_  | -            |
| list             | 联系人列表          | _ContactListItem[]_ | `[]`         |
| add-text         | 新建按钮文案        | _string_            | `新建联系人` |
| default-tag-text | 默认联系人标签文案  | _string_            | -            |

### Events

| 事件名 | 说明                   | 回调参数                                  |
| ------ | ---------------------- | ----------------------------------------- |
| add    | 点击新增按钮时触发     | -                                         |
| edit   | 点击编辑按钮时触发     | _contact: ContactListItem，index: number_ |
| select | 切换选中的联系人时触发 | _contact: ContactListItem，index: number_ |

### ContactListItem 数据结构

| 键名      | 说明                 | 类型                   |
| --------- | -------------------- | ---------------------- |
| id        | 每位联系人的唯一标识 | _number \| string_     |
| name      | 联系人姓名           | _string_               |
| tel       | 联系人手机号         | _number \| string_     |
| isDefault | 是否为默认联系人     | _boolean \| undefined_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { ContactListItem, ContactListProps } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-contact-list-padding | _var(--van-padding-sm) var(--van-padding-sm) 80px_ | - |
| --van-contact-list-edit-icon-size | _16px_ | - |
| --van-contact-list-add-button-z-index | _999_ | - |
| --van-contact-list-radio-color | _var(--van-primary-color)_ | - |
| --van-contact-list-item-padding | _var(--van-padding-md)_ | - |
