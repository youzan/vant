## Switch组件

### 基础用法

```html
<div class="page-switch">
  <div class="page-switch__wrapper">
    <z-switch class="some-customized-class" :checked="switchState" :on-change="updateState"></z-switch>
    <div class="page-switch__text">{{switchStateText}}</div>
  </div>
  <div class="page-switch__wrapper">
    <z-switch class="some-customized-class" :checked="true" :disabled="true"></z-switch>
    <div class="page-switch__text">ON, DISABLED</div>
  </div>
  <div class="page-switch__wrapper">
    <z-switch class="some-customized-class" :checked="false" :disabled="true"></z-switch>
    <div class="page-switch__text">OFF, DISABLED</div>
  </div>
</div>

<script>
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
</script>
```

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| checked | 开关状态 | boolean  | false          | true, false    |
| loading | loading状态 | boolean  | false          | true, false    |
| disabled | 禁用状态 | boolean  | false          | true, false    |
| onChange | 回调 | function  | function（）{}      | -    |
