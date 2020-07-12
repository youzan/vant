# ImageCrop

### Install

```javascript
import Vue from 'vue';
import { ImageCrop } from 'vant';

Vue.use(ImageCrop);
```

## Usage

### Basic Usage

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

### Aspect Ratio

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

### Used In List

Removes an item from the list by listening for the `delete` event

```html
<van-row class="img-list">
  <div class="item" v-for="(item, index) in imgList" :key="item.id">
    <div class="item-box">
      <van-image-crop deletable v-model="item.src" @delete="rmImg(index)" />
    </div>
  </div>
  <div class="item" @click="addImg">
    <div class="item-box add">Add A Image</div>
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

### Use With Slot

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

| Attribute | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| value | image src | _string_ | - | - |
| aspect-ratio | Cut out picture width and height ratio | _number_ | `1` | - |
| crop-width | crop width，The default unit is`px` | _string \| number_ | `750` | - |
| quality | sharpness | _string \| number_ | `0.92` |  |
| deletable | Whether to display the remove button | _boolean_ | `false` | - |
| disable-crop | Whether cropping is disabled | _boolean_ | `false` | - |
| skip-crop | Select the same proportion of the image when whether to skip clipping directly used | _boolean_ | `false` | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| input | Triggered when value changed | value: base64 |
| change | Triggered when selected a file | file: File |
| delete | Triggered when click delete button | event: Event |
| cancel | Triggered when click cancel button | - |
| rotate | Triggered when click rotate button | rotateFlag: Number(rotate flag：`0`,`1`,`2`,`3` They represent four different directions ) |
| submit | Triggered when image cropped | - |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | -                         |
| delete  | Custom delete placeholder |
| cancel  | Custom cancel placeholder |
| rotate  | Custom rotate placeholder |
| submit  | Custom submit placeholder |
