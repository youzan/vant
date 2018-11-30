/**
 * Common Cell Props
 */

export default {
  props: {
    icon: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    titleClass: String,
    valueClass: String,
    labelClass: String,
    value: [String, Number],
    label: [String, Number],
    title: [String, Number],
    border: {
      type: Boolean,
      default: true
    }
  }
};
