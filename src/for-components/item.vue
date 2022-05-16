<template>
  <div class="van-for-com-item" :style="comStyle">
    <slot :item="item"></slot>
  </div>
</template>

<script>
export default {
    name: 'van-for-components-item',
    components: {
    },
    props: {
      item: {
        type: [Object,String, Number],
      },
      colnum: {
        type: Number
      },
      equalWidth: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
      }
    },
    computed: {
      comStyle() {
        if (this.colnum && this.equalWidth) {
          const num = this.colnum;
          const width = 100 / num;
          return {
            width: width + '%'
          }
        }
        return {};
      }
    },
    watch: {
    },
    methods: {

    }
};
</script>

<style lang="less">
@import './item.less';
  // .van-for-com-item {
  //   margin-right: 10px;
  //   margin-bottom: 10px;
  // }
</style>
