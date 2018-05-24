<template>
  <div :class="b({ center: centered })">
    <div :class="b('thumb')">
      <slot name="thumb">
        <img :src="thumb" :class="b('img')" >
      </slot>
    </div>
    <div :class="b('content')">
      <slot name="title">
        <div :class="b('row')" v-if="title || isDef(price)">
          <div v-if="title" :class="b('title')">{{ title }}</div>
          <div v-if="isDef(price)" :class="b('price')">{{ currency }} {{ price }}</div>
        </div>
      </slot>
      <slot name="desc">
        <div :class="b('row')" v-if="desc || isDef(num)">
          <div v-if="desc" :class="b('desc')">{{ desc }}</div>
          <div v-if="isDef(num)" :class="b('num')">x {{ num }}</div>
        </div>
      </slot>
      <slot name="tags" />
    </div>
    <div :class="b('footer')" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'card',

  props: {
    thumb: String,
    title: String,
    desc: String,
    centered: Boolean,
    num: [Number, String],
    price: [Number, String],
    currency: {
      type: String,
      default: '¥'
    }
  }
});
</script>
