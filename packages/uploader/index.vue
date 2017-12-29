<template>
  <div class="van-uploader">
    <slot />
    <input
      ref="input"
      type="file"
      class="van-uploader__input"
      v-bind="$attrs"
      :disabled="disabled"
      @change="onChange"
    >
  </div>
</template>

<script>
import { create } from '../utils';

export default create({
  name: 'van-uploader',

  inheritAttrs: false,

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
    onChange(event) {
      let { files } = event.target;
      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files, 0);
      if (!files || (this.beforeRead && !this.beforeRead(files))) {
        return;
      }

      if (Array.isArray(files)) {
        Promise.all(files.map(this.readFile)).then(contents => {
          this.onAfterRead(
            files.map((file, index) => ({
              file: files[index],
              content: contents[index]
            }))
          );
        });
      } else {
        this.readFile(files).then(content => {
          this.onAfterRead({ file: files, content });
        });
      }
    },

    readFile(file) {
      return new Promise(resolve => {
        const reader = new FileReader();

        reader.onload = event => {
          resolve(event.target.result);
        };

        if (this.resultType === 'dataUrl') {
          reader.readAsDataURL(file);
        } else if (this.resultType === 'text') {
          reader.readAsText(file);
        }
      });
    },

    onAfterRead(file) {
      this.afterRead && this.afterRead(file);
      this.$refs.input && (this.$refs.input.value = '');
    }
  }
});
</script>
