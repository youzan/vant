# AddressEdit 地址编辑

### 介绍

地址编辑组件，用于新建、更新、删除地址信息。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { AddressEdit } from 'vant';

const app = createApp();
app.use(AddressEdit);
```

## 代码演示

### 基础用法

```html
<van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
```

```js
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const searchResult = ref([]);

    const onSave = () => Toast('save');
    const onDelete = () => Toast('delete');
    const onChangeDetail = (val) => {
      if (val) {
        searchResult.value = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        searchResult.value = [];
      }
    };

    return {
      onSave,
      onDelete,
      areaList,
      searchResult,
      onChangeDetail,
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| area-list | 地区列表 | _object_ | - |
| area-columns-placeholder | 地区选择列占位提示文字 | _string[]_ | `[]` |
| area-placeholder | 地区输入框占位提示文字 | _string_ | `选择省 / 市 / 区` |
| address-info | 地址信息初始值 | _AddressEditInfo_ | `{}` |
| search-result | 详细地址搜索结果 | _AddressEditSearchItem[]_ | `[]` |
| show-postal | 是否显示邮政编码 | _boolean_ | `false` |
| show-delete | 是否显示删除按钮 | _boolean_ | `false` |
| show-set-default | 是否显示默认地址栏 | _boolean_ | `false` |
| show-search-result | 是否显示搜索结果 | _boolean_ | `false` |
| show-area | 是否显示地区 | _boolean_ | `true` |
| show-detail | 是否显示详细地址 | _boolean_ | `true` |
| disable-area | 是否禁用地区选择 | _boolean_ | `false` |
| save-button-text | 保存按钮文字 | _string_ | `保存` |
| delete-button-text | 删除按钮文字 | _string_ | `删除` |
| detail-rows | 详细地址输入框行数 | _number \| string_ | `1` |
| detail-maxlength | 详细地址最大长度 | _number \| string_ | `200` |
| is-saving | 是否显示保存按钮加载动画 | _boolean_ | `false` |
| is-deleting | 是否显示删除按钮加载动画 | _boolean_ | `false` |
| tel-validator | 手机号格式校验函数 | _string => boolean_ | - |
| tel-maxlength | 手机号最大长度 | _number \| string_ | - |
| postal-validator | 邮政编码格式校验函数 | _string => boolean_ | - |
| validator | 自定义校验函数 | _(key, val) => string_ | - |

### Events

| 事件名         | 说明                       | 回调参数                    |
| -------------- | -------------------------- | --------------------------- |
| save           | 点击保存按钮时触发         | content：表单内容           |
| focus          | 输入框聚焦时触发           | key: 聚焦的输入框对应的 key |
| delete         | 确认删除地址时触发         | content：表单内容           |
| select-search  | 选中搜索结果时触发         | value: 搜索结果             |
| click-area     | 点击收件地区时触发         | -                           |
| change-area    | 修改收件地区时触发         | values: 地区信息            |
| change-detail  | 修改详细地址时触发         | value: 详细地址内容         |
| change-default | 切换是否使用默认地址时触发 | value: 是否选中             |

### Slots

| 名称    | 说明                   |
| ------- | ---------------------- |
| default | 在邮政编码下方插入内容 |

### 方法

通过 ref 可以获取到 AddressEdit 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名           | 说明         | 参数                    | 返回值 |
| ---------------- | ------------ | ----------------------- | ------ |
| setAddressDetail | 设置详细地址 | _addressDetail: string_ | -      |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  AddressEditInfo,
  AddressEditProps,
  AddressEditInstance,
  AddressEditSearchItem,
} from 'vant';
```

`AddressEditInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { AddressEditInstance } from 'vant';

const addressEditRef = ref<AddressEditInstance>();

addressEditRef.value?.setAddressDetail('');
```

### AddressEditInfo 数据格式

注意：`AddressEditInfo` 仅作为初始值传入，表单最终内容可以在 save 事件中获取。

| key | 说明 | 类型 |
| --- | --- | --- |
| name | 姓名 | _string_ |
| tel | 手机号 | _string_ |
| province | 省份 | _string_ |
| city | 城市 | _string_ |
| county | 区县 | _string_ |
| addressDetail | 详细地址 | _string_ |
| areaCode | 地区编码，通过 [省市区选择](#/zh-CN/area) 获取（必填） | _string_ |
| postalCode | 邮政编码 | _string_ |
| isDefault | 是否为默认地址 | _boolean_ |

### AddressEditSearchItem 数据格式

| key     | 说明     | 类型     |
| ------- | -------- | -------- |
| name    | 地名     | _string_ |
| address | 详细地址 | _string_ |

### 省市县列表数据格式

请参考 [Area 省市区选择](#/zh-CN/area) 组件。

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-address-edit-padding | _var(--van-padding-sm)_ | - |
| --van-address-edit-buttons-padding | _var(--van-padding-xl) var(--van-padding-base)_ | - |
| --van-address-edit-button-margin-bottom | _var(--van-padding-sm)_ | - |
| --van-address-edit-button-font-size | _var(--van-font-size-lg)_ | - |
