<template>
  <span :class="$env.VUE_APP_DESIGNER ? [$style.root, $style.rootDesigner] : $style.root" :display="display" :ellipsis="ellipsis"
    :vusion-click-enabled="$env.VUE_APP_DESIGNER">
    <span vusion-slot-name="reference" :class="$style.reference">
        <slot name="reference"></slot>
        <s-empty v-if="$env.VUE_APP_DESIGNER && !$slots.reference && !!$attrs['vusion-node-path']"></s-empty>
    </span>
    <u-popup
      ref="popup"
      :style="staticStyleVar"
      reference="prev"
      v-bind="$attrs"
      v-on="$listeners"
      :vusion-scope-id="$vnode.context.$options._scopeId">
        <slot></slot>
    </u-popup>
  </span>
</template>

<script>
import UPopupCombination from 'cloud-ui.vusion/src/components/u-popup-combination.vue/index.vue';

export default {
  name: 'van-popup-combination',
  extends: UPopupCombination,
  data() {
    return {
      tempP: null,
      staticStyleVar: '',
    }
  },
  computed: {
    // 获取静态样式中的变量
    // staticStyleVar() {
    //   const { staticStyle } = this.$vnode.data;
    //   let style = '';
    //   for (const key in staticStyle) {
    //     if (Object.prototype.hasOwnProperty.call(staticStyle, key)) {
    //       if (/^--/.test(key)) {
    //         const value = staticStyle[key];
    //         style += `${key}: ${value};`
    //       }

    //     }
    //   }
    //   return style;
    // }
  },
  mounted() {
    this.tempP = this.$slots.default;
    this.staticStyleVar = this.getStaticStyleVar(this.$vnode.data.staticStyle)
  },
  updated() {
    this.staticStyleVar = this.getStaticStyleVar(this.$vnode.data.staticStyle)
  },
  methods: {
    ifDesigner() {
      return this.$env && this.$env.VUE_APP_DESIGNER;
    },
    getStaticStyleVar(staticStyle) {
      let style = '';
      for (const key in staticStyle) {
        if (Object.prototype.hasOwnProperty.call(staticStyle, key)) {
          if (/^--/.test(key)) {
            const value = staticStyle[key];
            style += `${key}: ${value};`
          }

        }
      }
      return style;
    }
  }
};
</script>

<style module>
.root {
  display: inline-block;
  vertical-align: middle;
}

.root[display="block"] {
  display: block;
}

.root[ellipsis] {
  width: 100%;
}

.root[ellipsis] .reference {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.root[ellipsis] .reference>* {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rootDesigner {
  padding: 2px;
  border: 1px dashed #C3C3C3;
  /* min-height: 100px; */
}

.reference {
  display: inline-block;
}</style>
