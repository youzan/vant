# Contact 联系人

### 介绍

通过 Contact 组件可以实现联系人的展示、选择、编辑等功能。

### 引入

```js
import { createApp } from 'vue';
import { ContactCard, ContactList, ContactEdit } from 'vant';

const app = createApp();
app.use(ContactCard);
app.use(ContactList);
app.use(ContactEdit);
```

## 代码演示

### 基础用法

```html
<!-- 联系人卡片 -->
<van-contact-card
  :type="cardType"
  :name="currentContact.name"
  :tel="currentContact.tel"
  @click="showList = true"
/>

<!-- 联系人列表 -->
<van-popup v-model:show="showList" position="bottom">
  <van-contact-list
    v-model="chosenContactId"
    :list="list"
    @add="onAdd"
    @edit="onEdit"
    @select="onSelect"
  />
</van-popup>

<!-- 联系人编辑 -->
<van-popup v-model:show="showEdit" position="bottom">
  <van-contact-edit
    :contact-info="editingContact"
    :is-edit="isEdit"
    @save="onSave"
    @delete="onDelete"
  />
</van-popup>
```

```js
export default {
  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [
        {
          name: '张三',
          tel: '13000000000',
          id: 0,
        },
      ],
    };
  },

  computed: {
    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter((item) => item.id === id)[0] : {};
    },
  },

  methods: {
    // 添加联系人
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    // 编辑联系人
    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },

    // 选中联系人
    onSelect() {
      this.showList = false;
    },

    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      this.showList = false;

      if (this.isEdit) {
        this.list = this.list.map((item) =>
          item.id === info.id ? info : item
        );
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter((item) => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    },
  },
};
```

### 不可编辑

```html
<van-contact-card type="edit" name="张三" tel="13000000000" :editable="false" />
```

## API

### ContactCard Props

| 参数     | 说明                        | 类型     | 默认值               |
| -------- | --------------------------- | -------- | -------------------- |
| type     | 类型，可选值为 `add` `edit` | _string_ | `add`                |
| name     | 联系人姓名                  | _string_ | -                    |
| tel      | 联系人手机号                | _string_ | -                    |
| add-text | 添加时的文案提示            | _string_ | `添加订单联系人信息` |

### ContactCard Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| click  | 点击时触发 | _event: Event_ |

### ContactList Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中联系人的 id | _number \| string_ | - |
| list | 联系人列表 | _Contact[]_ | `[]` |
| add-text | 新建按钮文案 | _string_ | `新建联系人` |
| default-tag-text `v2.3.0` | 默认联系人标签文案 | _string_ | - |

### ContactList Events

| 事件名 | 说明                   | 回调参数                          |
| ------ | ---------------------- | --------------------------------- |
| add    | 点击新增按钮时触发     | -                                 |
| edit   | 点击编辑按钮时触发     | item: 当前联系人对象，index: 索引 |
| select | 切换选中的联系人时触发 | item: 当前联系人对象，index: 索引 |

### ContactEdit Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| contact-info | 联系人信息 | _object_ | `[]` |
| is-edit | 是否为编辑联系人 | _boolean_ | `false` |
| is-saving | 是否显示保存按钮加载动画 | _boolean_ | `false` |
| is-deleting | 是否显示删除按钮加载动画 | _boolean_ | `false` |
| tel-validator | 手机号格式校验函数 | _(tel: string) => boolean_ | - |
| show-set-default `v2.3.0` | 是否显示默认联系人栏 | _boolean_ | `false` |
| set-default-label `v2.3.0` | 默认联系人栏文案 | _string_ | - |

### ContactEdit Events

| 事件名 | 说明               | 回调参数          |
| ------ | ------------------ | ----------------- |
| save   | 点击保存按钮时触发 | content：表单内容 |
| delete | 点击删除按钮时触发 | content：表单内容 |

### Contact 数据结构

| 键名      | 说明                 | 类型               |
| --------- | -------------------- | ------------------ |
| id        | 每位联系人的唯一标识 | _number \| string_ |
| name      | 联系人姓名           | _string_           |
| tel       | 联系人手机号         | _number \| string_ |
| isDefault | 是否为默认联系人     | _boolean_          |
