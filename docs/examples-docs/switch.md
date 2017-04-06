<style>
  @component-namespace demo {
    @b switch {
      .examples {
        text-align: center;
      }

      @e text {
        margin: 20px auto;
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
      switchState2: true,
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

如果你已经按照[快速上手](/vue/component/quickstart)中引入了整个`ZanUI`，以下**组件注册**就可以忽略了，因为你已经全局注册了`ZanUI`中的全部组件。

#### 全局注册

你可以在全局注册`Switch`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Switch`组件了：

```js
import Vue from 'vue';
import { Switch } from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/switch.css';

Vue.component(Switch.name, Switch);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Switch`组件，这样只能在你注册的组件中使用`Switch`：

```js
import { Switch } from '@youzan/zanui-vue';

export default {
  components: {
    'zan-switch': Switch
  }
};
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<zan-switch class="some-customized-class" v-model="switchState1"></zan-switch>
<div class="demo-switch__text">{{ switchState1 ? ' ON' : 'OFF' }}</div>


<script>
export default {
  data() {
    return {
      switchState1: true
    };
  }
};  
</script>
```
:::

:::demo 基础用法
```html
<zan-switch class="some-customized-class" v-model="switchState2" :on-change="updateState"></zan-switch>
<div class="demo-switch__text">{{ switchState2 ? ' ON' : 'OFF' }}</div>


<script>
import Dialog from 'packages/dialog';

export default {
  data() {
    return {
      switchState2: true
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

:::demo
```html
<zan-switch class="some-customized-class" v-model="switchStateTrue" :disabled="true"></zan-switch>
<div class="demo-switch__text">ON, DISABLED</div>

<zan-switch class="some-customized-class" v-model="switchStateFalse" :disabled="true"></zan-switch>
<div class="demo-switch__text">OFF, DISABLED</div>

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

:::demo
```html
<zan-switch class="some-customized-class" v-model="switchStateTrue" :loading="true"></zan-switch>
<div class="demo-switch__text">ON, LOADING</div>

<zan-switch class="some-customized-class" v-model="switchStateFalse" :loading="true"></zan-switch>
<div class="demo-switch__text">OFF, LOADING</div>

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
