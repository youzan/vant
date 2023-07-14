# AddressList 地址列表

### 介绍

展示地址信息列表。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { AddressList } from 'vant';

const app = createApp();
app.use(AddressList);
```

## 代码演示

### 基础用法

```html
<van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  disabled-text="以下地址超出配送范围"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const chosenAddressId = ref('1');
    const list = [
      {
        id: '1',
        name: '张三',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        isDefault: true,
      },
      {
        id: '2',
        name: '李四',
        tel: '1310000000',
        address: '浙江省杭州市拱墅区莫干山路 50 号',
      },
    ];
    const disabledList = [
      {
        id: '3',
        name: '王五',
        tel: '1320000000',
        address: '浙江省杭州市滨江区江南大道 15 号',
      },
    ];

    const onAdd = () => showToast('新增地址');
    const onEdit = (item, index) => showToast('编辑地址:' + index);

    return {
      list,
      onAdd,
      onEdit,
      disabledList,
      chosenAddressId,
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中地址的 id | _number \| string_ | - |
| list | 地址列表 | _AddressListAddress[]_ | `[]` |
| disabled-list | 不可配送地址列表 | _AddressListAddress[]_ | `[]` |
| disabled-text | 不可配送提示文案 | _string_ | - |
| switchable | 是否允许切换地址 | _boolean_ | `true` |
| show-add-button | 是否显示底部按钮 | _boolean_ | `true` |
| add-button-text | 底部按钮文字 | _string_ | `新增地址` |
| default-tag-text | 默认地址标签文字 | _string_ | - |
| right-icon `v4.5.0` | 右侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_ | `edit` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| add | 点击新增按钮时触发 | - |
| edit | 点击编辑按钮时触发 | _item: AddressListAddress, index: number_ |
| select | 切换选中的地址时触发 | _item: AddressListAddress, index: number_ |
| edit-disabled | 编辑不可配送的地址时触发 | _item: AddressListAddress, index: number_ |
| select-disabled | 选中不可配送的地址时触发 | _item: AddressListAddress, index: number_ |
| click-item | 点击任意地址时触发 | _item: AddressListAddress, index: number_ |

### AddressListAddress 数据结构

| 键名      | 说明               | 类型               |
| --------- | ------------------ | ------------------ |
| id        | 每条地址的唯一标识 | _number \| string_ |
| name      | 姓名               | _string_           |
| tel       | 手机号             | _number \| string_ |
| address   | 详细地址           | _string_           |
| isDefault | 是否为默认地址     | _boolean_          |

### Slots

| 名称        | 说明                 | 参数                       |
| ----------- | -------------------- | -------------------------- |
| default     | 在列表下方插入内容   | -                          |
| top         | 在顶部插入内容       | -                          |
| item-bottom | 在列表项底部插入内容 | _item: AddressListAddress_ |
| tag         | 自定义列表项标签内容 | _item: AddressListAddress_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { AddressListProps, AddressListAddress } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-address-list-padding | _var(--van-padding-sm) var(--van-padding-sm) 80px_ | - |
| --van-address-list-disabled-text-color | _var(--van-text-color-2)_ | - |
| --van-address-list-disabled-text-padding | _var(--van-padding-base) \* 5 0 var(--van-padding-md)_ | - |
| --van-address-list-disabled-text-font-size | _var(--van-font-size-md)_ | - |
| --van-address-list-disabled-text-line-height | _var(--van-line-height-md)_ | - |
| --van-address-list-add-button-z-index | _999_ | - |
| --van-address-list-item-padding | _var(--van-padding-sm)_ | - |
| --van-address-list-item-text-color | _var(--van-text-color)_ | - |
| --van-address-list-item-disabled-text-color | _var(--van-text-color-3)_ | - |
| --van-address-list-item-font-size | _13px_ | - |
| --van-address-list-item-line-height | _var(--van-line-height-sm)_ | - |
| --van-address-list-radio-color | _var(--van-primary-color)_ | - |
| --van-address-list-edit-icon-size | _20px_ | - |
