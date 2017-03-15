<template>
    <div class="zan-uploader">
        <slot>
          <div>
             <zan-button block>上传文件</zan-button>
          </div>
        </slot>
        <input type="file" @change="onValueChange"  class="zan-uploader__input" ref="input" />
    </div>
</template>

<script>
  export default {
    name: 'zan-uploader',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      beforeRead: Function,
      resultType: {
        type: String,
        default: 'dataUrl',
        validator(value) {
          return value === 'dataUrl' || value === 'text';
        }
      }
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
          this.$emit('file-readed',
            {
              name: file.name,
              type: file.type,
              size: file.size,
              content: e.target.result
            });
          this.$refs.input.value = '';
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
