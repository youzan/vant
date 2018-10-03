## AddressEdit 地址编辑

### 使用指南
``` javascript
import { AddressEdit } from 'vant';

Vue.use(AddressEdit);
```

### 代码演示

#### 基础用法

```html
<van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
```

```javascript
export default {
  data() {
    return {
      areaList,
      searchResult: []
    }
  },

  methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| area-list | 地区列表 | `Object` | - |
| address-info | 收货人信息初始值 | `Object` | `{}` |
| search-result | 详细地址搜索结果 | `Array` | `[]` |
| show-postal | 是否显示邮政编码 | `Boolean` | `false` |
| show-delete | 是否显示删除按钮 | `Boolean` | `false` |
| show-set-default | 是否显示默认地址栏 | `Boolean` | `false` |
| show-search-result | 是否显示搜索结果 | `Boolean` | `false` |
| save-button-text | 保存按钮文字 | `String` | `保存` |
| delete-button-text | 删除按钮文字 | `String` | `删除` |
| is-saving | 是否显示保存按钮加载动画 | `Boolean` | `false` |
| is-deleting | 是否显示删除按钮加载动画 | `Boolean` | `false` |
| tel-validator | 手机号格式校验函数 | `(tel: string) => boolean` | - |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| save | 点击保存按钮时触发 | content：表单内容 |
| focus | 输入框聚焦时触发 | key: 聚焦的输入框对应的 key |
| delete | 确认删除地址时触发 | content：表单内容 |
| cancel-delete | 取消删除地址时触发 | content：表单内容 |
| select-search | 选中搜索结果时触发 | value: 搜索结果 |
| change-area | 修改收件地区时触发 | values: 地区信息 |
| change-detail | 修改详细地址时触发 | value: 详细地址内容 |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 在邮政编码下方插入内容 |

### 数据格式

#### addressInfo 数据格式

注意：addressInfo 仅作为初始值传入，表单最终内容可以在 save 事件中获取

| key | 说明 | 类型 |
|-----------|-----------|-----------|
| id | 每条地址的唯一标识 | `String | Number` |
| name | 收货人姓名 | `String` |
| tel | 收货人手机号 | `String` |
| province | 省份 | `String` |
| city | 城市 | `String` |
| county | 区县 | `String` |
| addressDetail | 详细地址 | `String` |
| areaCode | 地区编码，通过省市区选择获取 | `String` |
| postalCode | 邮政编码 | `String` |
| isDefault | 是否为默认地址 | `Boolean` |

#### searchResult 数据格式

| key | 说明 | 类型 |
|-----------|-----------|-----------|
| name | 地名 | `String` |
| address | 详细地址 | `String` |

#### 省市县列表数据格式
请参考 [Area](#/zh-CN/area) 组件。

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
| 1.3.2 | improvement | 优化地区展示
| 1.3.2 | bugfix | 修复详细地址下边框未展示的问题
| 1.2.1 | improvement | 样式升级
| 1.2.0 | breaking change | 采用驼峰命名的数据结构
| 1.2.0 | bugfix | 修复删除按钮展示逻辑
| 1.1.14 | bugfix | 修复格式化字符串时报错的问题
| 1.1.11 | improvement | 优化事件触发顺序
| 1.1.8 | feature | 支持配置按钮文字
| 1.1.8 | improvement | 简化内部代码结构
| 1.1.6 | bugfix | 修复省市区弹层样式错误的问题
| 1.1.5 | improvement | 优化空值校验
| 1.1.4 | improvement | 适配小屏手机
| 1.1.3 | feature | 新增 cancel-delete 事件
| 1.0.2 | bugfix | 修复初始化时省市区未正确选中的问题
| 1.0.0 | feature | 新增 show-delete 属性
| 1.0.0 | bugfix | 修复在数据变更时未正确选中省市区的问题
