## Switch组件

### 基础用法

```html
<div class="page-switch">
  <h1 class="page-title">Switch</h1>
  <h2 class="page-sub-title">基础用法</h2>
  <div class="page-switch">
    <div class="page-switch__wrapper">
      <zan-switch class="some-customized-class" :checked="switchState" :on-change="updateState"></zan-switch>
      <div class="page-switch__text">{{switchStateText}}</div>
    </div>
    <div class="page-switch__wrapper">
      <zan-switch class="some-customized-class" :checked="true" :disabled="true"></zan-switch>
      <div class="page-switch__text">ON, DISABLED</div>
    </div>
    <div class="page-switch__wrapper">
      <zan-switch class="some-customized-class" :checked="false" :disabled="true"></zan-switch>
      <div class="page-switch__text">OFF, DISABLED</div>
    </div>
    <div class="page-switch__wrapper">
      <zan-switch class="some-customized-class" :checked="true" :loading="true"></zan-switch>
      <div class="page-switch__text">ON, LOADING</div>
    </div>
    <div class="page-switch__wrapper">
      <zan-switch class="some-customized-class" :checked="false" :loading="true"></zan-switch>
      <div class="page-switch__text">OFF, LOADING</div>
    </div>
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
