/**
 * Common Picker Props
 */

export default {
  props: {
    title: String,
    loading: Boolean,
    showToolbar: Boolean,
    cancelButtonText: String,
    confirmButtonText: String,
    visibleItemCount: {
      type: Number,
      default: 5
    },
    itemHeight: {
      type: Number,
      default: 44
    }
  }
};
