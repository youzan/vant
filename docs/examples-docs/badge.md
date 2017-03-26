## Badge 徽章

### 基础用法

<script>
  export default {
    data() {
      return {
        activeKey: '2'
      };
    },
    methods: {
      onItemClick(e, data) {
        this.activeKey = data.mark;
      }
    }
  };
</script>

:::demo 基础用法
```html
<zan-badge-group :active-key="activeKey">
  <zan-badge mark="0" title="热销榜" info="8" url="http://baidu.com" @click="onItemClick"></zan-badge>
  <zan-badge mark="1" title="花式寿司" info="99" @click="onItemClick"></zan-badge>
  <zan-badge mark="2" title="火炽寿司" @click="onItemClick"></zan-badge>
  <zan-badge mark="3" title="手握寿司" info="199" @click="onItemClick"></zan-badge>
</zan-badge-group>
```
:::

### z-badge-group API

| 参数       | 说明      | 类型       | 默认值       | 必须      |
|-----------|-----------|-----------|-------------|-------------|
| active-key | 激活的`badge`的索引 | `string`  | `0`但必须子badge里的mark是有`0`位索引 |           |


### z-badge API
| 参数       | 说明      | 类型       | 默认值       | 必须       |
|-----------|-----------|-----------|-------------|-------------|
| mark | badge的唯一key值 | `string`  | `''`          | `required`         |
| title | badge的文案标题 | `string`  | `''`          | `required`          |
| info | 当前badge的提示消息数量 | `string`  | `''`         |           |
| url | 跳转链接 | `string`  | 全连接直接跳转或者hash          |           |
