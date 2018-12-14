<template>
  <div
    :class="b()"
    @touchmove="onTouchMove"
  >
    <icon
      v-for="(full, index) in list"
      :key="index"
      :class="b('item')"
      :size="size + 'px'"
      :data-index="index"
      :name="full ? icon : voidIcon"
      :color="disabled ? disabledColor : full ? color : voidColor"
      @click="onSelect(index)"
    />
  </div>
</template>

<script>
/* eslint-disable prefer-spread */
import create from '../utils/create';

export default create({
  name: 'rate',

  props: {
    value: Number,
    readonly: Boolean,
    disabled: Boolean,
    size: {
      type: Number,
      default: 20
    },
    icon: {
      type: String,
      default: 'star'
    },
    voidIcon: {
      type: String,
      default: 'star-o'
    },
    color: {
      type: String,
      default: '#ffd21e'
    },
    voidColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    count: {
      type: Number,
      default: 5
    }
  },

  computed: {
    list() {
      return Array.apply(null, { length: this.count }).map((value, index) => index < this.value);
    }
  },

  methods: {
    onSelect(index) {
      if (!this.disabled && !this.readonly) {
        this.$emit('input', index + 1);
        this.$emit('change', index + 1);
      }
    },

    onTouchMove(event) {
      if (!document.elementFromPoint) {
        return;
      }

      event.preventDefault();
      const { clientX, clientY } = event.touches[0];
      const target = document.elementFromPoint(clientX, clientY);
      if (target && target.dataset) {
        const { index } = target.dataset;

        /* istanbul ignore else */
        if (index) {
          this.onSelect(+index);
        }
      }
    }
  }
});
</script>
