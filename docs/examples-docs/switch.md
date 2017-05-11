<style>
  @component-namespace demo {
    @b switch {
      .van-switch {
        float: left;
        margin: 0 15px;
      }

      @e text {
        display: inline-block;
        line-height: 32px;
        float: left;
        font-size: 14px;
        color: #333;
      }
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

如果你已经按照快速上手中引入了整个`vant`，以下**组件注册**就可以忽略了，因为你已经全局注册了`vant`中的全部组件。

#### 全局注册

你可以在全局注册`Switch`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Switch`组件了：

```js
import Vue from 'vue';
import { Switch } from 'vant';
import 'vant/lib/vant-css/switch.css';

Vue.component(Switch.name, Switch);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Switch`组件，这样只能在你注册的组件中使用`Switch`：

```js
import { Switch } from 'vant';
import 'vant/lib/vant-css/switch.css';

export default {
  components: {
    'van-switch': Switch
  }
};
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
    <van-switch class="some-customized-class" v-model="switchStateTrue" :disabled="true"></van-switch>
    <div class="demo-switch__text">打开</div>
  </van-col>
  <van-col span="12">
    <van-switch class="some-customized-class" v-model="switchStateFalse" :disabled="true"></van-switch>
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
    <van-switch class="some-customized-class" v-model="switchStateTrue" :loading="true"></van-switch>
    <div class="demo-switch__text">打开</div>
  </van-col>
  <van-col span="12">
    <van-switch class="some-customized-class" v-model="switchStateFalse" :loading="true"></van-switch>
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
