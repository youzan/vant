import { createNamespace, suffixPx } from '../utils';
import { toArray, readFile, isOversize } from './utils';
import Icon from '../icon';
import Image from '../image';
import ImagePreview from '../image-preview';

const [createComponent, bem] = createNamespace('uploader');

function isImageDataUrl(dataUrl) {
  return dataUrl.indexOf('data:image') === 0;
}

export default createComponent({
  inheritAttrs: false,

  model: {
    prop: 'fileList'
  },

  props: {
    fileList: Array,
    disabled: Boolean,
    uploadText: String,
    afterRead: Function,
    beforeRead: Function,
    previewSize: [Number, String],
    name: {
      type: [String, Number],
      default: ''
    },
    previewImage: {
      type: Boolean,
      default: true
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    },
    maxCount: {
      type: Number,
      default: Number.MAX_VALUE
    }
  },

  computed: {
    detail() {
      return {
        name: this.name
      };
    }
  },

  methods: {
    onChange(event) {
      let { files } = event.target;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files);

      if (this.beforeRead) {
        const response = this.beforeRead(files, this.detail);

        if (!response) {
          this.resetInput();
          return;
        }

        if (response.then) {
          response
            .then(() => {
              this.readFile(files);
            })
            .catch(this.resetInput);

          return;
        }
      }

      this.readFile(files);
    },

    readFile(files) {
      const oversize = isOversize(files, this.maxSize);

      if (Array.isArray(files)) {
        const maxCount = this.maxCount - this.fileList.length;

        if (files.length > maxCount) {
          files = files.slice(0, maxCount);
        }

        Promise.all(files.map(file => readFile(file, this.resultType))).then(contents => {
          const fileList = files.map((file, index) => ({
            file,
            content: contents[index]
          }));

          this.onAfterRead(fileList, oversize);
        });
      } else {
        readFile(files, this.resultType).then(content => {
          this.onAfterRead({ file: files, content }, oversize);
        });
      }
    },

    onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files, this.detail);
        return;
      }

      this.resetInput();
      this.$emit('input', [...this.fileList, ...toArray(files)]);

      if (this.afterRead) {
        this.afterRead(files, this.detail);
      }
    },

    onDelete(file, index) {
      const fileList = this.fileList.slice(0);
      fileList.splice(index, 1);

      this.$emit('input', fileList);
      this.$emit('delete', file);
    },

    resetInput() {
      /* istanbul ignore else */
      if (this.$refs.input) {
        this.$refs.input.value = '';
      }
    },

    onPreviewImage(item) {
      const imageFiles = this.fileList
        .map(item => item.content)
        .filter(content => isImageDataUrl(content));

      ImagePreview({
        images: imageFiles,
        startPosition: imageFiles.indexOf(item.content)
      });
    },

    renderPreview() {
      if (!this.previewImage) {
        return;
      }

      return this.fileList.map((item, index) => (
        <div class={bem('preview')}>
          <Image
            fit="cover"
            src={item.content}
            class={bem('preview-image')}
            width={this.previewSize}
            height={this.previewSize}
            scopedSlots={{
              error() {
                return [
                  <Icon class={bem('file-icon')} name="description" />,
                  <div class={[bem('file-name'), 'van-ellipsis']}>{item.file.name}</div>
                ];
              }
            }}
            onClick={() => {
              if (isImageDataUrl(item.content)) {
                this.onPreviewImage(item);
              }
            }}
          />
          <Icon
            name="delete"
            class={bem('preview-delete')}
            onClick={() => {
              this.onDelete(item, index);
            }}
          />
        </div>
      ));
    },

    renderUpload() {
      if (this.fileList.length >= this.maxCount) {
        return;
      }

      const slot = this.slots();

      const Input = (
        <input
          {...{ attrs: this.$attrs }}
          ref="input"
          type="file"
          accept={this.accept}
          class={bem('input')}
          disabled={this.disabled}
          onChange={this.onChange}
        />
      );

      if (slot) {
        return (
          <div class={bem('input-wrapper')}>
            {slot}
            {Input}
          </div>
        );
      }

      let style;
      if (this.previewSize) {
        const size = suffixPx(this.previewSize);
        style = {
          width: size,
          height: size
        };
      }

      return (
        <div class={bem('upload')} style={style}>
          <Icon name="plus" class={bem('upload-icon')} />
          {this.uploadText && <span class={bem('upload-text')}>{this.uploadText}</span>}
          {Input}
        </div>
      );
    }
  },

  render(h) {
    return (
      <div class={bem()}>
        <div class={bem('wrapper')}>
          {this.renderPreview()}
          {this.renderUpload()}
        </div>
      </div>
    );
  }
});
