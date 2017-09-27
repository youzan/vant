<script>
export default {
  data() {
    return {

    };
  }
};
</script>

## Contact 联系人

### 使用指南
``` javascript
import { ContactCard, ContactList, ContactEdit } from 'vant';

Vue.component(ContactCard.name, ContactCard);
Vue.component(ContactList.name, ContactList);
Vue.component(ContactEdit.name, ContactEdit);
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<van-contact-card></van-contact-card>
<van-contact-card type="edit" ></van-contact-card>
```

``` javascript
export default {
  data() {
    return {

    };
  }
};
```
:::

### Contact API
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 类型，分为添加和编辑两种样式 | `String` | `add` | `edit` |
| addText | 添加时的文案提示 | `String` | `添加订单联系人信息` | - |
| username | 联系人姓名 | `String` | - | - |
| tel | 联系人手机号 | `String` | - | - |
