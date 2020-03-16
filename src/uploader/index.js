// Utils
import { createNamespace, addUnit, noop, isPromise } from '../utils';
import { toArray, readFile, isOversize, isImageFile } from './utils';

// Mixins
import { FieldMixin } from '../mixins/field';

// Components
import Icon from '../icon';
import Image from '../image';
import Loading from '../loading';
import ImagePreview from '../image-preview';

const [createComponent, bem] = createNamespace('uploader');

export default createComponent({
  inheritAttrs: false,

  mixins: [FieldMixin],

  model: {
    prop: 'fileList',
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
      default: '',
    },
    accept: {
      type: String,
      default: 'image/*',
    },
    fileList: {
      type: Array,
      default: () => [],
    },
    maxSize: {
      type: [Number, String],
      default: Number.MAX_VALUE,
    },
    maxCount: {
      type: [Number, String],
      default: Number.MAX_VALUE,
    },
    deletable: {
      type: Boolean,
      default: true,
    },
    showUpload: {
      type: Boolean,
      default: true,
    },
    previewImage: {
      type: Boolean,
      default: true,
    },
    previewFullImage: {
      type: Boolean,
      default: true,
    },
    imageFit: {
      type: String,
      default: 'cover',
    },
    resultType: {
      type: String,
      default: 'dataUrl',
    },
    uploadIcon: {
      type: String,
      default: 'photograph',
    },
  },

  computed: {
    previewSizeWithUnit() {
      return addUnit(this.previewSize);
    },

    // for form
    value() {
      return this.fileList;
    },
  },

  methods: {
    getDetail(index = this.fileList.length) {
      return {
        name: this.name,
        index,
      };
    },

    onChange(event) {
      let { files } = event.target;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files);

      if (this.beforeRead) {
        const response = this.beforeRead(files, this.getDetail());

        if (!response) {
          this.resetInput();
          return;
        }

        if (isPromise(response)) {
          response
            .then(data => {
              if (data) {
                this.readFile(data);
              } else {
                this.readFile(files);
              }
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

        Promise.all(files.map(file => readFile(file, this.resultType))).then(
          contents => {
            const fileList = files.map((file, index) => {
              const result = { file, status: '' };

              if (contents[index]) {
                result.content = contents[index];
              }

              return result;
            });

            this.onAfterRead(fileList, oversize);
          }
        );
      } else {
        readFile(files, this.resultType).then(content => {
          const result = { file: files, status: '' };

          if (content) {
            result.content = content;
          }

          this.onAfterRead(result, oversize);
        });
      }
    },

    onAfterRead(files, oversize) {
      this.resetInput();

      if (oversize) {
        this.$emit('oversize', files, this.getDetail());
        return;
      }

      this.$emit('input', [...this.fileList, ...toArray(files)]);

      if (this.afterRead) {
        this.afterRead(files, this.getDetail());
      }
    },

    onDelete(file, index) {
      if (this.beforeDelete) {
        const response = this.beforeDelete(file, this.getDetail(index));

        if (!response) {
          return;
        }

        if (isPromise(response)) {
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
      this.$emit('delete', file, this.getDetail(index));
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

      const imageFiles = this.fileList.filter(item => isImageFile(item));
      const imageContents = imageFiles.map(item => item.content || item.url);

      this.imagePreview = ImagePreview({
        images: imageContents,
        closeOnPopstate: true,
        startPosition: imageFiles.indexOf(item),
        onClose: () => {
          this.$emit('close-preview');
        },
      });
    },

    // @exposed-api
    closeImagePreview() {
      if (this.imagePreview) {
        this.imagePreview.close();
      }
    },

    // @exposed-api
    chooseFile() {
      if (this.disabled) {
        return;
      }
      /* istanbul ignore else */
      if (this.$refs.input) {
        this.$refs.input.click();
      }
    },

    genPreviewMask(item) {
      const { status } = item;

      if (status === 'uploading' || status === 'failed') {
        const MaskIcon =
          status === 'failed' ? (
            <Icon name="warning-o" class={bem('mask-icon')} />
          ) : (
            <Loading class={bem('loading')} />
          );

        return (
          <div class={bem('mask')}>
            {MaskIcon}
            {item.message && (
              <div class={bem('mask-message')}>{item.message}</div>
            )}
          </div>
        );
      }
    },

    genPreviewItem(item, index) {
      const showDelete = item.status !== 'uploading' && this.deletable;

      const DeleteIcon = showDelete && (
        <Icon
          name="clear"
          class={bem('preview-delete')}
          onClick={event => {
            event.stopPropagation();
            this.onDelete(item, index);
          }}
        />
      );

      const Preview = isImageFile(item) ? (
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
            height: this.previewSizeWithUnit,
          }}
        >
          <Icon class={bem('file-icon')} name="description" />
          <div class={[bem('file-name'), 'van-ellipsis']}>
            {item.file ? item.file.name : item.url}
          </div>
        </div>
      );

      return (
        <div
          class={bem('preview')}
          onClick={() => {
            this.$emit('click-preview', item, this.getDetail(index));
          }}
        >
          {Preview}
          {this.genPreviewMask(item)}
          {DeleteIcon}
        </div>
      );
    },

    genPreviewList() {
      if (this.previewImage) {
        return this.fileList.map(this.genPreviewItem);
      }
    },

    genUpload() {
      if (this.fileList.length >= this.maxCount || !this.showUpload) {
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
          height: size,
        };
      }

      return (
        <div class={bem('upload')} style={style}>
          <Icon name={this.uploadIcon} class={bem('upload-icon')} />
          {this.uploadText && (
            <span class={bem('upload-text')}>{this.uploadText}</span>
          )}
          {Input}
        </div>
      );
    },
  },

  render() {
    return (
      <div class={bem()}>
        <div class={bem('wrapper', { disabled: this.disabled })}>
          {this.genPreviewList()}
          {this.genUpload()}
        </div>
      </div>
    );
  },
});
