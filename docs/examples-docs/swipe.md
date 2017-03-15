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

## Swipe

### 基础用法

:::demo 基础用法
```html
<zan-swipe>
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
</zan-swipe>
```
:::

### 自动轮播

:::demo 自动轮播
```html
<zan-swipe :auto-play="true">
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
  <zan-swipe-item>
    <img src="https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg?imageView2/2/w/980/h/980/q/75/format/webp" alt="">
  </zan-swipe-item>
</zan-swipe>
```
:::
