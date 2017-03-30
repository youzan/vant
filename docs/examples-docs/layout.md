<style>
@component-namespace demo {
  @b layout {
    .zan-row {
      padding: 0 20px;
    }
    .zan-col {
      margin-bottom: 10px;
    }
  }
}

.gray {
    height: 30px;
    background: #666;
}
.white {
    height: 30px;
    background: #fff;
}
</style>

## Layout 布局
主要提供了 zan-row 和 zan-col 两个组件来进行行列布局

### 常规用法
Layout组件提供了`24列栅格`，通过在`zan-col`上添加`span`属性设置列所占的宽度百分比（span / 24）；此外，添加`offset`属性可以设置列的偏移宽度，计算方式与span相同。

:::demo
```html
<zan-row>
  <zan-col span="8">
    <div class="gray"></div>
  </zan-col>
  <zan-col span="8">
    <div class="white"></div>
  </zan-col>
  <zan-col span="8">
    <div class="gray"></div>
  </zan-col>
</zan-row>
<zan-row>
  <zan-col offset="12" span="12">
    <div class="gray"></div>
  </zan-col>
</zan-row>
```
:::

### 在列元素之间增加间距
列元素之间默认间距为0，如果希望在列元素增加相同的间距，可以在`zan-row`上添加`gutter`属性来设置列元素之间的间距。

:::demo
```html
<zan-row gutter="10">
  <zan-col span="8">
    <div class="gray"></div>
  </zan-col>
  <zan-col span="8">
    <div class="white"></div>
  </zan-col>
  <zan-col span="8">
    <div class="gray"></div>
  </zan-col>
</zan-row>
```
:::
