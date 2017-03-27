<style>
@component-namespace demo {
  @b swipe {
    .zan-swipe {
      height: 200px;

      img {
        width: 100%;
      }
    }
  }
}
</style>

<script>
export default {
  methods: {
    handlePageEnd(page, index) {
      console.log(page, index);
    }
  }
};
</script>

## Swipe 轮播

### 基础用法

:::demo 基础用法
```html
<zan-swipe>
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
</zan-swipe>
```
:::

### 自动轮播

:::demo 自动轮播
```html
<zan-swipe :auto-play="true" @pagechange:end="handlePageEnd">
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
</zan-swipe>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| autoPlay | 是否自动轮播 | `boolean`  |    `false`     |    `true`, `false`      |
| showIndicators | 是否显示指示器 | `boolean`  |   `true`       |   `true`, `false`       |

### 事件

| 事件名       | 说明      | 参数 |
|-----------|-----------|-----------|
| `pagechange:end` | 每一页轮播结束后触发 | `(elem, currIndex)`：`elem`为触发页当前的DOM节点 |
