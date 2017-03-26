<style>
  @component-namespace demo {
    @b switch {
      padding: 0 15px 15px;

      @e wrapper {
        width: 33.33%;
        float: left;
        text-align: center;
      }

      @e text {
        margin: 20px 0;
      }
    }
  }
</style>

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

## Switch 开关

### 基础用法

:::demo 基础用法
```html
<div class="demo-switch__wrapper">
  <zan-switch class="some-customized-class" :checked="switchState" @change="updateState"></zan-switch>
  <div class="demo-switch__text">{{switchStateText}}</div>
</div>
<div class="demo-switch__wrapper">
  <zan-switch class="some-customized-class" :checked="true" :disabled="true"></zan-switch>
  <div class="demo-switch__text">ON, DISABLED</div>
</div>
<div class="demo-switch__wrapper">
  <zan-switch class="some-customized-class" :checked="false" :disabled="true"></zan-switch>
  <div class="demo-switch__text">OFF, DISABLED</div>
</div>
<div class="demo-switch__wrapper">
  <zan-switch class="some-customized-class" :checked="true" :loading="true"></zan-switch>
  <div class="demo-switch__text">ON, LOADING</div>
</div>
<div class="demo-switch__wrapper">
  <zan-switch class="some-customized-class" :checked="false" :loading="true"></zan-switch>
  <div class="demo-switch__text">OFF, LOADING</div>
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
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| checked | 开关状态 | `boolean`  | `false`          | `true`, `false`    |
| loading | loading状态 | `boolean`  | `false`          | `true`, `false`    |
| disabled | 禁用状态 | `boolean`  | `false`          | `true`, `false`    |
