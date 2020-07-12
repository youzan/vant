# ImageCrop 图片裁剪

### 介绍

对图片进行拖拽裁剪，通过设置目标的清晰度、宽高比和最大宽度像素等属性，返回新的图片 base64 值。

### 引入

```javascript
import Vue from 'vue';
import { ImageCrop } from 'vant';

Vue.use(ImageCrop);
```

## 代码演示

### 基础用法

`v-model` 绑定字符串或空值即可(一般绑定图片 url 或 base64 作为显示, 回传裁剪后的图片 base64 值)。

`deletable` 是否显示删除按钮，可重置已裁剪的内容，点击后会首先触发 `delete` 事件。

```html
<van-image-crop class="image_1" v-model="image1" deletable />
```

```js
data() {
  return {
    image1: null
  };
}
```

```css
.image_1 {
  border: 1px dotted #4fc08d;
  height: 100vw;
}
```

### 调整比例

`aspect-ratio` 属性可以设置裁剪比例，默认宽高 1 比 1。

> 这里小猫图片的**高宽比**是 55 / 80 = 0.6875

```html
<van-image-crop
  v-model="image2"
  :aspect-ratio="80 / 55"
  style="height: 68.75vw;"
/>
```

```js
data() {
  return {
    image2: 'https://img.yzcdn.cn/vant/cat.jpeg'
  };
}
```

### 列表中使用

通过监听`delete`事件移除列表中某一项。

```html
<van-row class="img-list">
  <div class="item" v-for="(item, index) in imgList" :key="item.id">
    <div class="item-box">
      <van-image-crop deletable v-model="item.src" @delete="rmImg(index)" />
    </div>
  </div>
  <div class="item" @click="addImg">
    <div class="item-box add">添加图片</div>
  </div>
</van-row>
```

```js
data() {
  return {
    imgList: []
  };
},
methods: {
  addImg() {
    this.imgList.push({ id: Date.now(), src: '' });
  },
  rmImg(index) {
    this.imgList.splice(index, 1);
  }
}
```

```less
.img-list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  .item {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    min-width: 33.33%;
    max-width: 33.33%;
    font-size: 14px;
    vertical-align: middle;
    border: 1px dotted #4fc08d;

    &::after {
      display: block;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      content: '';
    }

    .item-box {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }

  .add {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
```

### 使用 Slot

```html
<van-image-crop class="image_1" v-model="image3" deletable>
  <div
    style="height: 100%; display: flex; justify-content: center; align-items: center"
  >
    点击选择要裁剪的图片
  </div>
  <template v-slot:delete>
    <span>移除</span>
  </template>
  <template v-slot:cancel>
    cancel
  </template>
  <template v-slot:rotate>
    rotate
  </template>
  <template v-slot:submit>
    submit
  </template>
</van-image-crop>
```

```js
data() {
  return {
    image3: null
  };
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value | 图片 src | _string_ | - | - |
| aspect-ratio | 图片裁剪宽高比例 | _number_ | `1` | - |
| crop-width | 宽度，默认单位为`px` | _string \| number_ | `750` | - |
| quality | 清晰度 | _string \| number_ | `0.92` |  |
| deletable | 是否显示移除按钮 | _boolean_ | `false` | - |
| disable-crop | 是否禁用裁剪 | _boolean_ | `false` | - |
| skip-crop | 选择的图片比例一致时是否跳过裁剪直接使用 | _boolean_ | `false` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 绑定值变化时触发 | value: base64 |
| change | 选择图片时触发 | file: File |
| delete | 点击移除按钮时触发 | event: Event |
| cancel | 取消裁剪时触发 | - |
| rotate | 点击旋转按钮时触发 | rotateFlag: Number(旋转标识：`0`,`1`,`2`,`3` 分别代表 4 个不同的方向) |
| submit | 裁剪完成时触发 | - |

### Slots

| 名称    | 说明                       |
| ------- | -------------------------- |
| default | -                          |
| delete  | 自定义删除的提示内容       |
| cancel  | 自定义取消按钮的提示内容   |
| rotate  | 自定义旋转按钮的提示内容   |
| submit  | 自定义确定按钮时的提示内容 |
