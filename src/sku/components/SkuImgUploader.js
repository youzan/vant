// Utils
import { createNamespace } from '../../utils';

// Components
import Uploader from '../../uploader';

const namespace = createNamespace('sku-img-uploader');
const createComponent = namespace[0];
const t = namespace[2];

export default createComponent({
  props: {
    value: String,
    uploadImg: Function,
    customUpload: Function,
    maxSize: {
      type: Number,
      default: 6,
    },
  },

  data() {
    return {
      fileList: [],
    };
  },

  watch: {
    value(val) {
      if (val) {
        this.fileList = [{ url: val, isImage: true }];
      } else {
        this.fileList = [];
      }
    },
  },

  methods: {
    afterReadFile(file) {
      file.status = 'uploading';
      file.message = t('uploading');
      this.uploadImg(file.file, file.content)
        .then((img) => {
          file.status = 'done';
          this.$emit('input', img);
        })
        .catch(() => {
          file.status = 'failed';
          file.message = t('fail');
        });
    },

    onOversize() {
      this.$toast(t('oversize', this.maxSize));
    },

    onDelete() {
      this.$emit('input', '');
    },

    onClickUpload() {
      if (this.customUpload) {
        this.customUpload().then((url) => {
          this.fileList.push({ url });
          this.$emit('input', url);
        });
      }
    },
  },

  render() {
    return (
      <Uploader
        vModel={this.fileList}
        maxCount={1}
        readonly={!!this.customUpload}
        maxSize={this.maxSize * 1024 * 1024}
        afterRead={this.afterReadFile}
        onOversize={this.onOversize}
        onDelete={this.onDelete}
        onClick-upload={this.onClickUpload}
      />
    );
  },
});
