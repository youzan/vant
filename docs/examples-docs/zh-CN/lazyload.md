<style>
.demo-lazyload {
  padding: 15px;

  img,
  div[lazy] {
    padding: 15px;
    width: 100%;
    height: 250px;
    margin: 10px 0 0;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-size: 315px 250px;
    background-position: 15px;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
}
</style>

<script>
export default {
  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ],
      backgroundImageList: [
        'https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/138c32d4384b5e4a78dc4e1ba58e6a80.jpg'
      ],
      componentImageList: [
        'https://img.yzcdn.cn/public_files/2017/09/05/100a7845756a70af2df513bdd1307d0e.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/8a4f5be8289cb3a7434fc19a3de780a2.jpg'
      ]
    };
  },

  methods: {
    handleComponentShow() {
      console.log('component show');
    }
  }
}
</script>

## Lazyload 图片懒加载

### 使用指南

`Lazyload`是`Vue`指令，所以需要使用它必须将它注册到`Vue`的指令中。

```js
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload, options);
```

### 代码演示

#### 基础用法
将`v-lazy`指令的值设置为你需要懒加载的图片

:::demo 基础用法
```html
<img v-for="img in imageList" v-lazy="img">
```

```javascript
export default {
  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    };
  }
}
```
:::

#### 背景图懒加载

和图片懒加载不同，背景图懒加载需要使用`v-lazy:background-image`，值设置为背景图片的地址，需要注意的是必须声明容器高度。

:::demo 背景图懒加载
```html
<div v-for="img in backgroundImageList" v-lazy:background-image="img" />
```

```javascript
export default {
  data() {
    return {
      backgroundImageList: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    };
  }
}
```
:::

#### 懒加载模块

懒加载模块需要使用到`lazy-component`，将需要懒加载的内容放在`lazy-component`中即可。

:::demo 懒加载模块
```html
<lazy-component>
  <img v-for="img in componentImageList" v-lazy="img">
</lazy-component>
```

```javascript
export default {
  data() {
    return {
      componentImageList: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    };
  }
}
```
:::

### Options

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| loading | 加载时的图片 | `String` | - | - |
| error | 错误时的图片 | `String` | - | - |
| preload | 预加载高度的比例 | `String` | - | - |
| attempt | 尝试次数 | `Number` | `3` |   |
| listenEvents | 监听的事件 | `Array`  | `scroll`等 | - |
| adapter | 适配器 | `Object` | - | - |
| filter | 图片url过滤 | `Object` | - | - |
| lazyComponent | 是否能懒加载模块 | `Boolean` | `false` | - |

更多内容请参照：[ vue-lazyload 官方文档](https://github.com/hilongjw/vue-lazyload)
