<style>
.demo-switch {
  .van-switch {
    float: left;
    margin: 0 15px;
  }

  &__text {
    display: inline-block;
    line-height: 32px;
    float: left;
    font-size: 14px;
    color: #333;
  }
}
</style>

<script>
import Dialog from 'packages/dialog';

export default {
  data() {
    return {
      switchState1: true,
      switchState2: false,
      switchStateTrue: true,
      switchStateFalse: false
    };
  },
  methods: {
    updateState(newState) {
      const state = newState ? '打开' : '关闭';
      Dialog.confirm({
        title: '提醒',
        message: '是否' + state + '开关？'
      }).then((action) => {
        this.switchState2 = newState;
      }, (error) => {});
    }
  }
};  
</script>

## Switch 开关

### 使用指南
``` javascript
import { Switch } from 'vant';

Vue.component(Switch.name, Switch);
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<van-row>
  <van-col span="12">
    <van-switch class="some-customized-class" v-model="switchState1"></van-switch>
    <div class="demo-switch__text">{{ switchState1 ? ' 打开' : '关闭' }}</div>
  </van-col>
  <van-col span="12">
    <van-switch class="some-customized-class" v-model="switchState2" :on-change="updateState"></van-switch>
    <div class="demo-switch__text">{{ switchState2 ? ' 打开' : '关闭' }}</div>
  </van-col>
</van-row>



<script>
export default {
  data() {
    return {
      switchState1: true,
      switchState2: false
    };
  },
  methods: {
    updateState(newState) {
      const state = newState ? '打开' : '关闭';
      Dialog.confirm({
        title: '提醒',
        message: '是否' + state + '开关？'
      }).then((action) => {
        this.switchState2 = newState;
      }, (error) => {
      });
    }
  }
};  
</script>
```
:::

#### 禁用状态

设置`disabled`属性为`true`，此时开关不可点击。

:::demo 禁用状态
```html
<van-row>
  <van-col span="12">
    <van-switch class="some-customized-class" v-model="switchStateTrue" disabled></van-switch>
    <div class="demo-switch__text">打开</div>
  </van-col>
  <van-col span="12">
    <van-switch class="some-customized-class" v-model="switchStateFalse" disabled></van-switch>
    <div class="demo-switch__text">关闭</div>
  </van-col>
</van-row>

<script>
export default {
  data() {
    return {
      switchStateTrue: true,
      switchStateFalse: false
    };
  }
};  
</script>
```
:::

#### loading状态

设置`loading`属性为`true`，此时开关为加载状态，一般用于点击开关时正在向后端发送请求，此时正在loading，请求成功后，结束loading。

:::demo loading状态
```html
<van-row>
  <van-col span="12">
    <van-switch class="some-customized-class" v-model="switchStateTrue" loading></van-switch>
    <div class="demo-switch__text">打开</div>
  </van-col>
  <van-col span="12">
    <van-switch class="some-customized-class" v-model="switchStateFalse" loading></van-switch>
    <div class="demo-switch__text">关闭</div>
  </van-col>
</van-row>

<script>
export default {
  data() {
    return {
      switchStateTrue: true,
      switchStateFalse: false
    };
  }
};  
</script>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 开关状态 | `boolean`  | `false`          | `true`, `false`    |
| loading | loading状态 | `boolean`  | `false`          | `true`, `false`    |
| disabled | 禁用状态 | `boolean`  | `false`          | `true`, `false`    |
| onChange | 开关状态切换回调(默认则改变开关状态) | `function`  | -          | - |
