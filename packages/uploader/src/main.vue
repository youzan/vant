<template>
  <div class="van-uploader">
    <slot>

    </slot>
    <template v-if="disabled">
      <input type="file" @change="onValueChange" disabled="disabled" class="van-uploader__input" />
    </template>
    <template v-else>
      <input type="file" @change="onValueChange"  class="van-uploader__input" ref="input" />
    </template>
  </div>
</template>

<script>
  export default {
    name: 'van-uploader',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      beforeRead: Function,
      afterRead: Function
    },
    methods: {
      onValueChange(event) {
        if (this.disabled) {
          return;
        }
        var files = event.target.files;
        var file = files[0];
        if (!file) return;
        if (this.beforeRead && !this.beforeRead(file)) return;
        var reader = new FileReader();
        reader.onload = (e) => {
          this.afterRead && this.afterRead(
            {
              file: file,
              content: e.target.result
            });
          this.$refs.input && (this.$refs.input.value = '');
        };
        reader.readAsDataURL(file);
      }
    }
  };
</script>
