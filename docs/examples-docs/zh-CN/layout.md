<style>
.demo-layout {
  .van-row {
    padding: 0 15px;
  }
  .van-col {
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 10px;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      actList: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ]
    }
  }
}
</script>

## Layout 布局

提供了`van-row`和`van-col`两个组件来进行行列布局

### 使用指南
``` javascript
import { Row, Col } from 'vant';

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
```

### 代码演示

#### 基本用法

Layout 组件提供了`24列栅格`，通过在`Col`上添加`span`属性设置列所占的宽度百分比    
此外，添加`offset`属性可以设置列的偏移宽度，计算方式与 span 相同

:::demo 基本用法
```html
<van-row>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
</van-row>

<van-row>
  <van-col span="4">span: 4</van-col>
  <van-col span="10" offset="4">offset: 4, span: 10</van-col>
</van-row>

<van-row>
  <van-col offset="12" span="12">offset: 12, span: 12</van-col>
</van-row>

<li v-for="(item,index) in actList"  :key="index" @click="toActivity(item)">
    <van-row>
        <van-col span="6">
            <img :src="item" alt="">
        </van-col>
        <van-col  span="18" class="pr" >
        </van-col>
    </van-row>
</li>
```
:::

#### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0

:::demo 在列元素之间增加间距
```html
<van-row gutter="20">
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
</van-row>
```
:::

### API

#### Row
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| gutter | 列元素之间的间距（单位为px） | `String | Number` | - | - |
| prefix | className 前缀 | `String` | `van` | - |

#### Column
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| span | 列元素宽度 | `String | Number` | - | - |
| offset | 列元素偏移距离 | `String | Number` | - | - |
| prefix | className 前缀 | `String` | `van` | - |
