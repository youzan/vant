<template>
  <transition name="van-fade">
    <div v-show="value" :class="b([style, position])">
      <!-- text only -->
      <div v-if="style === 'text'">{{ message }}</div>
      <div v-if="style === 'html'" v-html="message" />

      <!-- with icon -->
      <template v-if="style === 'default'">
        <loading v-if="type === 'loading'" color="white" :type="loadingType" />
        <icon v-else :class="b('icon')" :name="type" />
        <div v-if="isDef(message)" :class="b('text')">{{ message }}</div>
      </template>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import Popup from '../mixins/popup';

const STYLE_LIST = ['success', 'fail', 'loading'];

export default create({
  name: 'toast',

  mixins: [Popup],

  props: {
    forbidClick: Boolean,
    message: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    loadingType: {
      type: String,
      default: 'circular'
    },
    position: {
      type: String,
      default: 'middle'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      clickable: false
    };
  },

  computed: {
    style() {
      return STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type;
    }
  },

  mounted() {
    this.toggleClickale();
  },

  watch: {
    value() {
      this.toggleClickale();
    },

    forbidClick() {
      this.toggleClickale();
    }
  },

  methods: {
    toggleClickale() {
      const clickable = this.value && this.forbidClick;
      if (this.clickable !== clickable) {
        this.clickable = clickable;
        const action = clickable ? 'add' : 'remove';
        document.body.classList[action]('van-toast--unclickable');
      }
    }
  }
});
</script>
