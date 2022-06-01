<template>
  <div class="van-gallery">
     <div class="swiper mySwiper swiperbig" ref="swiperbig">
        <div class="swiper-wrapper swiper-wrapper-big">
            <div class="swiper-slide swiper-slide-big" v-for="(item, index) in options" :key="index">
                <img :src="getUrl(item)" class="swiper-slide-big-image">
            </div>
        </div>
    </div>
    <div class="pagi" v-if="total">
      {{index}}/{{total}}
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.min.css';

export default {
    name: 'van-gallery',
    components: {
    },
    props: {
      dataSource: {
            type: [Array, Object, Function],
            default: () => [],
        },
        num: {
            type: Number,
            default: 5,
        },
        arrow: {
            type: Boolean,
            default: true,
        },
        pattern: {
            type: String,
            default: 'big',
        },
    },
    data() {
      return {
        options: [],
        swiper: null,
        total: 5,
        index: 1,
        bigOption: {
          observeParents: true,
        }
      }
    },
    computed: {
    },
    mounted() {
    },
    watch: {
      dataSource: {
        deep: true,
        handler: 'update',
        immediate: true
      },
    },
    methods: {
      ifDesigner() {
        return this.$env && this.$env.VUE_APP_DESIGNER;
      },
      getUrl(item) {
          const type = typeof item === 'object';
          if (type) {
              return item.url;
          }
          return item;
      },
      fromValue(value) {
        const reg = /^([^\[\]]+)(\,([^\[\]]+)){0,}$/g;
        if (typeof value === 'string' && reg.test(value)) {
            return value.split(',');
        }
        try {
          if (value === null || value === undefined) return [];
          if(typeof value === 'string') return JSON.parse(value || '[]');
          if(typeof value === 'object') return value;
        } catch (err) {
            return [];
        }
      },
      async update() {
        if (typeof (this.dataSource) === 'function') {
            try {
                const res = await this.dataSource({
                    page: 1,
                    size: 1000,
                });
                this.options = (res.content);
            } catch (error) {
                console.error(error);
            }
        } else {
            this.options = (this.fromValue(this.dataSource));
        }
        this.renderSwiper();
      },
      renderSwiper() {
            const that = this;
            this.swiperbig && this.swiperbig.destroy();
            this.$nextTick(() => {
                this[`swiper${this.pattern}`] = new Swiper(this.$refs[`swiper${this.pattern}`], this[`${this.pattern}Option`]);
                that.index = that[`swiper${this.pattern}`].activeIndex + 1;
                that.total = that.options.length;
                this[`swiper${this.pattern}`].on('slideChange', function (swiper) {
                  console.log('slide changed',swiper, swiper.activeIndex);
                  that.index = swiper.activeIndex + 1;
                });
            });
        },
    }
};
</script>

<style lang="less">
@import './gallery.less';
</style>
