import { use } from '../../utils';
import Icon from '../../icon';
import Loading from '../../loading';
import Uploader from '../../uploader';

const [sfc, bem] = use('sku-img-uploader');

export default sfc({
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
      paddingImg: ''
    };
  },

  computed: {
    imgList() {
      return this.value && !this.paddingImg ? [this.value] : [];
    }
  },

  methods: {
    afterReadFile(file) {
      // 上传文件
      this.paddingImg = file.content;
      this.uploadImg(file.file, file.content)
        .then(img => {
          this.$emit('input', img);
          this.$nextTick(() => {
            this.paddingImg = '';
          });
        })
        .catch(() => {
          this.paddingImg = '';
        });
    },

    onOversize() {
      this.$toast(`最大可上传图片为${this.maxSize}MB，请尝试压缩图片尺寸`);
    }
  },

  render(h) {
    const { imgList, paddingImg } = this;

    const ImageList = (paddingImg || imgList.length > 0) && (
      <div class="van-clearfix">
        {imgList.map(img => (
          <div class={bem('img')}>
            <img src={img} />
            <Icon
              name="clear"
              class={bem('delete')}
              onClick={() => {
                this.$emit('input', '');
              }}
            />
          </div>
        ))}
        {paddingImg && (
          <div class={bem('img')}>
            <img src={paddingImg} />
            <Loading type="spinner" class={bem('uploading')} />
          </div>
        )}
      </div>
    );

    return (
      <div class={bem()}>
        <Uploader
          disabled={!!paddingImg}
          afterRead={this.afterReadFile}
          maxSize={this.maxSize * 1024 * 1024}
          onOversize={this.onOversize}
        >
          <div class={bem('header')}>
            {paddingImg ? (
              <div>正在上传...</div>
            ) : (
              [
                <Icon name="photograph" />,
                <span class="label">{this.value ? '重拍' : '拍照'} 或 </span>,
                <Icon name="photo" />,
                <span class="label">{this.value ? '重新选择照片' : '选择照片'}</span>
              ]
            )}
          </div>
        </Uploader>
        {ImageList}
      </div>
    );
  }
});
