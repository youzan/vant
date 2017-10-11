<style>
.demo-swipe {
  padding-bottom: 30px;

  .van-swipe {
    cursor: pointer;

    &-item {
      color: #fff;
      height: 160px;
      font-size: 20px;
      text-align: center;
      line-height: 160px;

      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }

    img {
      width: 100%;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
      ]
    };
  }
};
</script>

## Swipe 轮播

### 使用指南
``` javascript
import { Swipe, SwipeItem } from 'vant';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<van-swipe>
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
</van-swipe>
```
:::

#### 自动轮播
通过`autoplay`属性设置自动轮播间隔

:::demo 自动轮播
```html

```
:::

#### 图片懒加载
通过`autoplay`属性设置自动轮播间隔

:::demo 自动轮播
```html

```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| autoplay | 自动轮播间隔，单位为 ms | `Number` | - | - |
| duration | 动画时长，单位为 ms | `Number` | `500` | - |
| showIndicators | 是否显示指示器 | `Boolean` | `true` | - |

### 事件

| 事件名 | 说明      | 参数 |
|-----------|-----------|-----------|
| change | 每一页轮播结束后触发 | index, 当前页的索引 |
