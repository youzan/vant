<template>
  <div class="van-uploader">
    <slot></slot>
    <input
      ref="input"
      type="file"
      class="van-uploader__input"
      v-bind="$attrs"
      :disabled="disabled"
      @change="onValueChange"
    />
  </div>
</template>

<script>
export default {
  name: 'van-uploader',

  props: {
    disabled: Boolean,
    beforeRead: Function,
    afterRead: Function,
    resultType: {
      type: String,
      default: 'dataUrl'
    }
  },

  methods: {
    onValueChange(event) {
      if (this.disabled) {
        return;
      }

      const file = event.target.files[0];
      if (!file || (this.beforeRead && !this.beforeRead(file))) {
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        this.afterRead && this.afterRead({
          file,
          content: e.target.result
        });
        this.$refs.input && (this.$refs.input.value = '');
      };

      if (this.resultType === 'dataUrl') {
        reader.readAsDataURL(file);
      } else if (this.resultType === 'text') {
        reader.readAsText(file);
      }
    }
  }
};
</script>
