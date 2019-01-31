/**
 * Common Switch Props
 */

export default {
  props: {
    value: null,
    loading: Boolean,
    disabled: Boolean,
    activeValue: {
      type: null,
      default: true
    },
    inactiveValue: {
      type: null,
      default: false
    },
    size: {
      type: String,
      default: '30px'
    }
  }
};
