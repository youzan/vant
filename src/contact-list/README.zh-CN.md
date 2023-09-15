# ContactList 联系人列表

### 介绍

展示联系人列表。

### 引入

```js
import Vue from 'vue';
import { ContactList } from 'vant';

Vue.use(ContactList);
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
import { Toast } from 'vant';

export default {
  data() {
    return {
      chosenContactId: '1',
      list: [
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
      ],
    };
  },
  methods: {
    onAdd() {
      Toast('新增');
    },
    onEdit(contact) {
      Toast('编辑' + contact.id);
    },
    onSelect(contact) {
      Toast('选择' + contact.id);
    },
  },
};
```

## API

### Props

| 参数             | 说明                | 类型               | 默认值       |
| ---------------- | ------------------- | ------------------ | ------------ |
| v-model          | 当前选中联系人的 id | _number \| string_ | -            |
| list             | 联系人列表          | _Contact[]_        | `[]`         |
| add-text         | 新建按钮文案        | _string_           | `新建联系人` |
| default-tag-text | 默认联系人标签文案  | _string_           | -            |

### Events

| 事件名 | 说明                   | 回调参数                          |
| ------ | ---------------------- | --------------------------------- |
| add    | 点击新增按钮时触发     | -                                 |
| edit   | 点击编辑按钮时触发     | _contact: Contact，index: number_ |
| select | 切换选中的联系人时触发 | _contact: Contact，index: number_ |

### Contact 数据结构

| 键名      | 说明                 | 类型               |
| --------- | -------------------- | ------------------ |
| id        | 每位联系人的唯一标识 | _number \| string_ |
| name      | 联系人姓名           | _string_           |
| tel       | 联系人手机号         | _number \| string_ |
| isDefault | 是否为默认联系人     | _boolean_          |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                             | 默认值        | 描述 |
| -------------------------------- | ------------- | ---- |
| @contact-list-edit-icon-size     | `16px`        | -    |
| @contact-list-add-button-z-index | `999`         | -    |
| @contact-list-item-padding       | `@padding-md` | -    |
