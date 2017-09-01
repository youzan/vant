<style>
.demo-swipe {
  .van-swipe {
    height: 200px;

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
      autoImages: [
        'https://img.yzcdn.cn/upload_files/2017/03/09/FvkZahKoq1vkxLQFdVWeLf2UCqDz.png',
        'https://img.yzcdn.cn/upload_files/2017/03/09/Fk0rpe_svu9d5Xk3MUCWd1QeMXOu.png'
      ],
      images: [
        'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
      ]
    };
  },

  methods: {
    handlePageEnd(page, index) {
      console.log(page, index);
    }
  }
};
</script>

## Swipe 轮播

### 使用指南
``` javascript
import { Swipe } from 'vant';

Vue.component(Swipe.name, Swipe);
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<van-swipe>
  <van-swipe-item v-for="(img, index) in images" :key="index">
    <a href="https://youzan.com" target="_blank">
      <img v-lazy="img" alt="">
    </a>
  </van-swipe-item>
</van-swipe>

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
```
:::

#### 隐藏指示器

需要设置`show-indicators`属性为`false`，即会隐藏指示器。

:::demo 隐藏指示器
```html
<van-swipe :show-indicators="false">
  <van-swipe-item v-for="(img, index) in autoImages" :key="index">
    <img v-lazy="img" alt="">
  </van-swipe-item>
</van-swipe>

<script>
export default {
  data() {
    return {
      autoImages: [
        'https://img.yzcdn.cn/upload_files/2017/03/09/FvkZahKoq1vkxLQFdVWeLf2UCqDz.png',
        'https://img.yzcdn.cn/upload_files/2017/03/09/Fk0rpe_svu9d5Xk3MUCWd1QeMXOu.png'
      ]
    };
  }
};
</script>
```
:::

#### 自动轮播

需要设置`auto-play`属性为`true`，即会自动轮播。

:::demo 自动轮播
```html
<van-swipe auto-play @pagechange:end="handlePageEnd">
  <van-swipe-item v-for="(img, index) in autoImages" :key="index">
    <img v-lazy="img" alt="">
  </van-swipe-item>
</van-swipe>

<script>
export default {
  data() {
    return {
      autoImages: [
        'https://img.yzcdn.cn/upload_files/2017/03/09/FvkZahKoq1vkxLQFdVWeLf2UCqDz.png',
        'https://img.yzcdn.cn/upload_files/2017/03/09/Fk0rpe_svu9d5Xk3MUCWd1QeMXOu.png'
      ]
    };
  },

  methods: {
    handlePageEnd(page, index) {
      console.log(page, index);
    }
  }
};
</script>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| autoPlay | 是否自动轮播 | `Boolean`  |    `false`     |    `true`, `false`      |
| showIndicators | 是否显示指示器 | `Boolean`  |   `true`       |   `true`, `false`       |

### 事件

| 事件名       | 说明      | 参数 |
|-----------|-----------|-----------|
| `pagechange:end` | 每一页轮播结束后触发 | `(elem, currIndex)`：`elem`为触发页当前的DOM节点 |
