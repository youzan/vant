<script>
export default {
  data() {
    return {
      switchState: true
    };
  },
  computed: {
    switchStateText() {
      return this.switchState ? 'ON' : 'OFF';
    }
  },
  methods: {
    updateState(newState) {
      this.switchState = newState;
    }
  }
};
</script>
<style lang="css">
  @component-namespace page {
    @component switch {
      padding: 0 15px 15px;

      @descendent wrapper {
        margin: 30px;
        width: 100px;
        float: left;
        text-align: center;
      }

      @descendent text {
        margin: 20px 0;
      }
    }
  }
</style>

## Switch组件

### 基础用法

:::demo 样例代码
```html
<div class="page-switch">
  <div class="page-switch__wrapper">
    <o2-switch class="some-customized-class" :checked="switchState" :on-change="updateState"></o2-switch>
    <div class="page-switch__text">{{switchStateText}}</div>
  </div>
  <div class="page-switch__wrapper">
    <o2-switch class="some-customized-class" :checked="true" :disabled="true"></o2-switch>
    <div class="page-switch__text">ON, DISABLED</div>
  </div>
  <div class="page-switch__wrapper">
    <o2-switch class="some-customized-class" :checked="false" :disabled="true"></o2-switch>
    <div class="page-switch__text">OFF, DISABLED</div>
  </div>
</div>
```


```javascript
export default {
  data() {
    return {
      switchState: true
    };
  },
  computed: {
    switchStateText() {
      return this.switchState ? ' ON' : 'OFF';
    }
  },
  methods: {
    updateState(newState) {
      this.switchState = newState;
    }
  }
};
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| checked | 开关状态 | boolean  | false          | true, false    |
| loading | loading状态 | boolean  | false          | true, false    |
| disabled | 禁用状态 | boolean  | false          | true, false    |
| onChange | 回调 | function  | function（）{}      | -    |
