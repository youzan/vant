import { createNamespace } from '../../utils';
import Icon from '../../icon';
import Loading from '../../loading';
import Uploader from '../../uploader';

const [createComponent, bem, t] = createNamespace('sku-img-uploader');

export default createComponent({
  props: {
    value: String,
    uploadImg: Function,
    maxSize: {
      type: Number,
      default: 6
    }
  },

  data() {
    return {
      // 正在上传的图片 base64
      paddingImg: '',
      uploadFail: false
    };
  },

  methods: {
    afterReadFile(file) {
      // 上传文件
      this.paddingImg = file.content;
      this.uploadFail = false;
      this.uploadImg(file.file, file.content)
        .then(img => {
          this.$emit('input', img);
          this.$nextTick(() => {
            this.paddingImg = '';
          });
        })
        .catch(() => {
          this.uploadFail = true;
        });
    },

    onOversize() {
      this.$toast(t('oversize', this.maxSize));
    },

    renderUploader(content, disabled = false) {
      return (
        <Uploader
          class={bem('uploader')}
          disabled={disabled}
          afterRead={this.afterReadFile}
          maxSize={this.maxSize * 1024 * 1024}
          onOversize={this.onOversize}
        >
          <div class={bem('img')}>
            {content}
          </div>
        </Uploader>
      );
    },

    renderMask() {
      return (
        <div class={bem('mask')}>
          {this.uploadFail
            ? (
              [
                <Icon name="warning-o" size="20px" />,
                <div class={bem('warn-text')} domPropsInnerHTML={t('fail')} />
              ]
            ) : (
              <Loading type="spinner" size="20px" color="white" />
            )}
        </div>
      );
    }
  },

  render() {
    return (
      <div class={bem()}>
        {this.value && this.renderUploader(
          [
            <img src={this.value} />,
            <Icon
              name="clear"
              class={bem('delete')}
              onClick={() => {
                this.$emit('input', '');
              }}
            />
          ],
          true
        )}

        {this.paddingImg && this.renderUploader(
          [
            <img src={this.paddingImg} />,
            this.renderMask()
          ],
          !this.uploadFail
        )}

        {!this.value && !this.paddingImg && this.renderUploader(
          <div class={bem('trigger')}>
            <Icon name="photograph" size="22px" />
          </div>
        )}
      </div>
    );
  }
});
