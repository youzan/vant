## Contact 联系人
通过 Contact 组件可以实现联系人的展示、选择、编辑等功能。

### 使用指南
``` javascript
import { ContactCard, ContactList, ContactEdit } from 'vant';

Vue
  .use(ContactCard)
  .use(ContactList)
  .use(ContactEdit);
```

### 代码演示

#### 基础用法

```html
<!-- 联系人卡片 -->
<van-contact-card
  :type="cardType"
  :name="currentContact.name"
  :tel="currentContact.tel"
  @click="showList = true"
/>

<!-- 联系人列表 -->
<van-popup v-model="showList" position="bottom">
  <van-contact-list
    v-model="chosenContactId"
    :list="list"
    @add="onAdd"
    @edit="onEdit"
    @select="onSelect"
  />
</van-popup>

<!-- 联系人编辑 -->
<van-popup v-model="showEdit" position="bottom">
  <van-contact-edit
    :contact-info="editingContact"
    :is-edit="isEdit"
    @save="onSave"
    @delete="onDelete"
  />
</van-popup>
```

``` javascript
export default {
  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [{
        name: '张三',
        tel: '13000000000',
        id: 0
      }]
    };
  },

  computed: {
    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
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
        this.list = this.list.map(item => item.id === info.id ? info : item);
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    }
  }
};
```

#### 不可编辑

```html
<van-contact-card
  type="edit"
  name="张三"
  tel="13000000000"
  :editable="false"
/>
```

### ContactCard API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 类型，可选值为 `add` `edit` | `String` | `add` | - |
| name | 联系人姓名 | `String` | - | - |
| tel | 联系人手机号 | `String` | - | - |
| add-text | 添加时的文案提示 | `String` | `添加订单联系人信息` | - |

### ContactCard Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击时触发 | - |

### ContactList API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前选中联系人的 id | `String | Number` | - | - |
| list | 联系人列表 | `Array` | `[]` | - |
| add-text | 新建按钮文案 | `String` | `新建联系人` | - |

### ContactList Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| add | 点击新增按钮时触发 | - |
| edit | 点击编辑按钮时触发 | item: 当前联系人对象，index: 索引 |
| select | 切换选中的联系人时触发 | item: 当前联系人对象，index: 索引 |

### ContactEdit API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| contact-info | 联系人信息 | `Object` | `[]` | - |
| is-edit | 是否为编辑联系人 | `Boolean` | `false` | - |
| is-saving | 是否显示保存按钮加载动画 | `Boolean` | `false` | - |
| is-deleting | 是否显示删除按钮加载动画 | `Boolean` | `false` | - |
| tel-validator | 手机号格式校验函数 | `(tel: string) => boolean` | - | - |

### ContactEdit Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| save | 点击保存按钮时触发 | content：表单内容 |
| delete | 点击删除按钮时触发 | content：表单内容 |

### 数据格式

#### 联系人数据格式

| key | 说明 | 类型 |
|------|------|------|
| id | 每位联系人的唯一标识 | `String | Number` |
| name | 联系人姓名 | `String` |
| tel | 联系人手机号 | `String | Number` |
