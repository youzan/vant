<style>
@component-namespace demo {
  @b popup {
    .zan-popup-1 {
      width: 100%;
      height: 200px;
      box-sizing: border-box;
      padding: 20px;
    }

    .zan-popup-2 {
      line-height: 50px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.701961);
      color: #fff;
    }

    .zan-popup-3 {
      width: 100%;
      height: 100%;
    }

    .zan-popup-4 {
      width: 60%;
      height: 200px;
    }

    .zan-button {
      margin: 15px;
    }
  }
}
</style>

<script>
import MobileComputed from 'components/mobile-computed';

export default {
  mixins: [MobileComputed],

  data() {
    return {
      popupShow1: false,
      popupShow2: false,
      popupShow3: false,
      popupShow4: false
    }
  },

  watch: {
    popupShow2(val) {
      if (val) {
        setTimeout(() => {
          this.popupShow2 = false;
        }, 2000);
      }
    }
  }
};
</script>

## Popup组件

### 基础用法

:::demo 基础用法
```html
<div class="zan-row">
  <zan-button @click="popupShow1 = true;">从下方弹出popup</zan-button>
</div>
<zan-popup v-model="popupShow1" position="bottom" class="zan-popup-1">
  更新成功
</zan-popup>

<div class="zan-row">
  <zan-button @click="popupShow2 = true">从上方方弹出popup</zan-button>
</div>
<zan-popup v-model="popupShow2" position="top" class="zan-popup-2" :overlay="false">
  更新成功
</zan-popup>

<div class="zan-row">
  <zan-button @click="popupShow3 = true">从右方弹出popup</zan-button>
</div>
<zan-popup v-model="popupShow3" position="right" class="zan-popup-3" :overlay="false">
  <zan-button @click.native="popupShow3 = false">关闭 popup</zan-button>
</zan-popup>

<div class="zan-row">
  <zan-button @click="popupShow4 = true">从中间弹出popup</zan-button>
</div>
<zan-popup v-model="popupShow4" class="zan-popup-4">
  从中间弹出popup
</zan-popup>

<script>
export default {
  data() {
    return {
      popupShow1: false,
      popupShow2: false,
      popupShow3: false,
      popupShow4: false
    }
  },

  watch: {
    popupShow2(val) {
      if (val) {
        setTimeout(() => {
          this.popupShow2 = false;
        }, 2000);
      }
    }
  }
};
</script>

```
:::

点击以下按钮查看手机端效果：

<zan-button @click="mobileShow = true">点击查看手机端效果</zan-button>
<mobile-popup v-model="mobileShow" :url="mobileUrl"></mobile-popup>

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| value | 利用`v-model`绑定当前组件是否显示 | Boolean  | '' |   |
