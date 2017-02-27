## Popup组件

### 基础用法

```html
<div class="z-button-1">
  <z-button @click="popupShow1 = true">从下方弹出popup</z-button>
</div>
<z-popup v-model="popupShow1" position="bottom" class="z-popup-1">
  xxxx
</z-popup>

<div class="z-button-1">
  <z-button @click="popupShow2 = true">从上方方弹出popup</z-button>
</div>
<z-popup v-model="popupShow2" position="top" class="z-popup-2" :overlay="false">
  更新成功
</z-popup>

<div class="z-button-1">
  <z-button @click="popupShow3 = true">从右方弹出popup</z-button>
</div>
<z-popup v-model="popupShow3" position="right" class="z-popup-3" :overlay="false">
  <z-button @click.native="popupShow3 = false">关闭 popup</z-button>
</z-popup>

<div class="z-button-1">
  <z-button @click="popupShow4 = true">从中间弹出popup</z-button>
</div>
<z-popup v-model="popupShow4" transition="popup-fade" class="z-popup-4">
  一些内容
</z-popup>

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

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| value | 利用`v-model`绑定当前组件是否显示 | Boolean  | '' |   |
