<template>
  <div
    :class="[
      b({
        center,
        required,
        [size]: size,
        borderless: !border,
        clickable: isLink || clickable
      })
    ]"
    @click="onClick"
  >
    <slot name="icon">
      <icon
        v-if="icon"
        :class="b('left-icon')"
        :name="icon"
      />
    </slot>
    <div
      v-if="isDef(title) || $slots.title"
      :class="[b('title'), titleClass]"
    >
      <slot name="title">
        <span v-text="title" />
        <div
          v-if="label"
          v-text="label"
          :class="[b('label'), labelClass]"
        />
      </slot>
    </div>
    <div
      v-if="isDef(value) || $slots.default"
      :class="[b('value', { alone: !$slots.title && !title }), valueClass]"
    >
      <slot>
        <span v-text="value" />
      </slot>
    </div>
    <slot name="right-icon">
      <icon
        v-if="isLink"
        :class="b('right-icon')"
        :name="arrowIcon"
      />
    </slot>
    <slot name="extra" />
  </div>
</template>

<script>
import Icon from '../icon';
import CellMixin from '../mixins/cell';
import RouterLink from '../mixins/router-link';
import create from '../utils/create-basic';

export default create({
  name: 'cell',

  components: {
    Icon
  },

  mixins: [CellMixin, RouterLink],

  props: {
    size: String,
    clickable: Boolean,
    arrowDirection: String
  },

  computed: {
    arrowIcon() {
      return this.arrowDirection ? `arrow-${this.arrowDirection}` : 'arrow';
    }
  },

  methods: {
    onClick() {
      this.$emit('click');
      this.routerLink();
    }
  }
});
</script>
