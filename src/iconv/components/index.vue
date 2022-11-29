<template>
  <div class="online-svg-wrap" ref="wrap">
      <div class="icon" :style="genStyle"  v-if="purecss"></div>
      <object class="iconob" type="image/svg+xml" :data="database64" v-if="!purecss"></object>
  </div>
</template>

<script>
import {fetch as fetchPolyfill} from 'whatwg-fetch'

export default {
  name: 'onlineSvgIcon',
  props: {
    purecss: {
      type: Boolean,
      default: true
    },
    url: String
  },
  data() {
    return {
      svg: '',
      database64: '',
      observerwh: null,
    }
  },
  computed: {
    genStyle() {
        if (!this.svg || !this.purecss) return {};
        const mode = this.svg.includes('currentColor')
          ? 'mask'
          : 'background-img'

        const uri = `url("data:image/svg+xml;utf8,${this.encodeSvg(this.svg)}")`

        // monochrome
        if (mode === 'mask' && this.purecss) {
          return {
            'background-color': 'currentColor',
            height: '1em',
            width: '1em',
            'mask-image': `${uri} no-repeat`,
            '-webkit-mask-image': `${uri}`,
            'mask-repeat': 'no-repeat',
            '-webkit-mask-repeat': 'no-repeat',
            'mask-size': '100% 100%',
            '-webkit-mask-size': '100% 100%',
          }
        }
        // colored
        else {
          return {
            'background-image': `${uri}`,
            'background-repeat': 'no-repeat',
            'background-size': '100% 100%',
            'background-color': 'transparent',
            height: '1em',
            width: '1em',
          }
        }
      },
  },
  watch: {
    'url'() {
      this.getSvg();
    }
  },
  async mounted() {
    await this.getSvg();
    if (!this.purecss) {
      this.observerwh = new MutationObserver(this.pwd);
      this.observerwh.observe(this.$refs.wrap, {
          attributes: true,
      });
    }
  },
  methods: {
    pwd() {
      this.up64vg();
    },
    async getSvg() {
      if (!this.url) return;
      const res = await fetchPolyfill(this.url, {
        mode: 'cors'
      });
      const text = await res.text();
      this.svg = text;
      this.up64vg();
    },
    up64vg() {
      if (this.purecss) return;
      const color = window.getComputedStyle(this.$refs.wrap).color;
      let tepsvg = this.svg;
      tepsvg = tepsvg.replace('currentColor', color);
      this.database64 = `data:image/svg+xml;base64,${(window.btoa(unescape(encodeURIComponent(tepsvg))))}`;
    },
    encodeSvg(svgString) {
        return svgString.replace('<svg',(~svgString.indexOf('xmlns')?'<svg':'<svg xmlns="http://www.w3.org/2000/svg"'))
        //
        //   Encode (may need a few extra replacements)
        //
        .replace(/"/g, '\'')
        .replace(/%/g, '%25')
        .replace(/#/g, '%23')       
        .replace(/{/g, '%7B')
        .replace(/}/g, '%7D')         
        .replace(/</g, '%3C')
        .replace(/>/g, '%3E')

        .replace(/\s+/g,' ');
      }
  },
  destroyed() {
    this.observerwh && this.observerwh.disconnect();
  },
}
</script>
<style scoped>
.online-svg-wrap {
  display: inline-block;
}
.iconob {
  display: block;
  width: 1em;
  height: 1em;
}
</style>
