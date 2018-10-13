<template>
  <div :class="b({ center: centered })">
    <a :href="thumbLink" :class="b('thumb')">
      <slot name="thumb">
        <img :src="thumb" :class="b('img')">
      </slot>
      <van-tag
        v-if="tag"
        mark
        type="danger"
        :class="b('tag')"
      >
        {{ tag }}
      </van-tag>
    </a>
    <div :class="b('content')">
      <div :class="b('left')">
        <slot name="title">
          <div v-if="title" :class="b('title')">{{ title }}</div>
        </slot>
        <slot name="desc">
          <div v-if="desc" :class="[b('desc'), 'van-ellipsis']">{{ desc }}</div>
        </slot>
        <slot name="tags" />
      </div>
      <div :class="b('right')">
        <div v-if="isDef(price)">{{ currency }} {{ price }}</div>
        <div v-if="isDef(originPrice)" :class="b('origin-price')">{{ currency }} {{ originPrice }}</div>
        <div v-if="isDef(num)" :class="b('num')">x {{ num }}</div>
      </div>
    </div>
    <div :class="b('footer')" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import VanTag from '../tag';
import create from '../utils/create';

export default create({
  name: 'card',

  components: {
    VanTag
  },

  props: {
    tag: String,
    desc: String,
    thumb: String,
    title: String,
    centered: Boolean,
    num: [Number, String],
    price: [Number, String],
    originPrice: [Number, String],
    currency: {
      type: String,
      default: '¥'
    },
    thumbLink: {
      type: String,
      default: 'javascript:;'
    }
  }
});
</script>
