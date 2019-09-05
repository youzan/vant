import { createNamespace, addUnit, noop } from '../utils';
import { toArray, readFile, isOversize, isImageFile } from './utils';
import Icon from '../icon';
import Image from '../image';
import ImagePreview from '../image-preview';

const [createComponent, bem] = createNamespace('uploader');

export default createComponent({
  inheritAttrs: false,

  model: {
    prop: 'fileList'
  },

  props: {
    disabled: Boolean,
    uploadText: String,
    afterRead: Function,
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String],
    name: {
      type: [Number, String],
      default: ''
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    fileList: {
      type: Array,
      default: () => []
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    },
    maxCount: {
      type: Number,
      default: Number.MAX_VALUE
    },
    previewImage: {
      type: Boolean,
      default: true
    },
    previewFullImage: {
      type: Boolean,
      default: true
    },
    imageFit: {
      type: String,
      default: 'cover'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    }
  },

  computed: {
    detail() {
      return {
        name: this.name
      };
    },

    previewSizeWithUnit() {
      return addUnit(this.previewSize);
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
      if (this.beforeDelete) {
        const response = this.beforeDelete(file, this.detail);

        if (!response) {
          return;
        }

        if (response.then) {
          response
            .then(() => {
              this.deleteFile(file, index);
            })
            .catch(noop);
          return;
        }
      }

      this.deleteFile(file, index);
    },

    deleteFile(file, index) {
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
      if (!this.previewFullImage) {
        return;
      }

      const imageFiles = this.fileList
        .filter(item => isImageFile(item))
        .map(item => item.content || item.url);

      ImagePreview({
        images: imageFiles,
        closeOnPopstate: true,
        startPosition: imageFiles.indexOf(item.content || item.url),
        onClose: () => {
          this.$emit('close-preview');
        }
      });
    },

    onClickPreview(file) {
      this.$emit('click-preview', file, this.detail);
    },

    renderPreview() {
      if (!this.previewImage) {
        return;
      }

      return this.fileList.map((item, index) => (
        <div
          class={bem('preview')}
          onClick={() => {
            this.onClickPreview(item);
          }}
        >
          {isImageFile(item) ? (
            <Image
              fit={this.imageFit}
              src={item.content || item.url}
              class={bem('preview-image')}
              width={this.previewSize}
              height={this.previewSize}
              onClick={() => {
                this.onPreviewImage(item);
              }}
            />
          ) : (
            <div
              class={bem('file')}
              style={{
                width: this.previewSizeWithUnit,
                height: this.previewSizeWithUnit
              }}
            >
              <Icon class={bem('file-icon')} name="description" />
              <div class={[bem('file-name'), 'van-ellipsis']}>
                {item.file ? item.file.name : item.url}
              </div>
            </div>
          )}
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
        const size = this.previewSizeWithUnit;
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

  render() {
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
