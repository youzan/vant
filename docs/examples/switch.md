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
      console.log('changing');
      this.switchState = newState;
    },
    handleClick() {
      alert('click');
    }
  }
};
</script>
<style lang="css">
  @component-namespace page {
    @component switch {
      padding: 0 15px 15px;

      @descendent sample {
        margin: 0 15px;
      }

      @descendent text {
        margin-right: 20px;
      }
    }
  }
</style>

## Switch组件

### 基础用法

:::demo 样例代码
```html
<div class="page-switch">
  <span class="page-switch-text">Switch state: {{switchStateText}}</span>
  <o2-switch class="page-switch-sample" :checked="switchState" :on-change="updateState"></o2-switch>
  <o2-switch class="page-switch-sample" :checked="false" :disabled="true"></o2-switch>
</div>
```


```javascript
export default {
  data() {
    return {
      switchState: false
    };
  },
  computed: {
    switchStateText() {
      return this.switchState ? 'on' : 'off';
    }
  },
  methods: {
    updateState(newState) {
      console.log('changing');
      this.switchState = newState;
    }
  }
};
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| checked | 开关状态 | boolean  | false          | true,false    |
| loading | loading状态 | boolean  | false          | true,false    |
| disabled | 禁用状态 | boolean  | false          | true,false    |
| onChange | 回调 | function  | function（）{}      | -    |
