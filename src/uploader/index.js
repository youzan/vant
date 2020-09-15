import { ref } from 'vue';

// Utils
import { callInterceptor } from '../utils/interceptor';
import { isDef, isPromise, getSizeStyle, createNamespace } from '../utils';
import { toArray, isOversize, isImageFile, readFileContent } from './utils';

// Composition
import { usePublicApi } from '../composition/use-public-api';
import { useParentField } from '../composition/use-parent-field';

// Components
import Icon from '../icon';
import Image from '../image';
import Loading from '../loading';
import ImagePreview from '../image-preview';

const [createComponent, bem] = createNamespace('uploader');

export default createComponent({
  props: {
    capture: String,
    multiple: Boolean,
    disabled: Boolean,
    lazyLoad: Boolean,
    uploadText: String,
    afterRead: Function,
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String],
    previewOptions: Object,
    name: {
      type: [Number, String],
      default: '',
    },
    accept: {
      type: String,
      default: 'image/*',
    },
    modelValue: {
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

  emits: [
    'delete',
    'oversize',
    'close-preview',
    'click-preview',
    'update:modelValue',
  ],

  setup(props, { emit, slots }) {
    const inputRef = ref();

    const getDetail = (index = props.modelValue.length) => ({
      name: props.name,
      index,
    });

    const resetInput = () => {
      if (inputRef.value) {
        inputRef.value.value = '';
      }
    };

    const onAfterRead = (files, oversize) => {
      resetInput();

      let validFiles = files;

      if (oversize) {
        let oversizeFiles = files;
        if (Array.isArray(files)) {
          oversizeFiles = [];
          validFiles = [];
          files.forEach((item) => {
            if (item.file) {
              if (item.file.size > props.maxSize) {
                oversizeFiles.push(item);
              } else {
                validFiles.push(item);
              }
            }
          });
        } else {
          validFiles = null;
        }
        emit('oversize', oversizeFiles, getDetail());
      }

      const isValidFiles = Array.isArray(validFiles)
        ? Boolean(validFiles.length)
        : Boolean(validFiles);

      if (isValidFiles) {
        emit('update:modelValue', [
          ...props.modelValue,
          ...toArray(validFiles),
        ]);

        if (props.afterRead) {
          props.afterRead(validFiles, getDetail());
        }
      }
    };

    const readFile = (files) => {
      const { maxSize, maxCount, modelValue, resultType } = props;
      const oversize = isOversize(files, maxSize);

      if (Array.isArray(files)) {
        const remainCount = maxCount - modelValue.length;

        if (files.length > remainCount) {
          files = files.slice(0, remainCount);
        }

        Promise.all(
          files.map((file) => readFileContent(file, resultType))
        ).then((contents) => {
          const fileList = files.map((file, index) => {
            const result = { file, status: '', message: '' };

            if (contents[index]) {
              result.content = contents[index];
            }

            return result;
          });

          onAfterRead(fileList, oversize);
        });
      } else {
        readFileContent(files, resultType).then((content) => {
          const result = { file: files, status: '', message: '' };

          if (content) {
            result.content = content;
          }

          onAfterRead(result, oversize);
        });
      }
    };

    const deleteFile = (file, index) => {
      const fileList = props.modelValue.slice(0);
      fileList.splice(index, 1);

      emit('update:modelValue', fileList);
      emit('delete', file, getDetail(index));
    };

    const onDelete = (file, index) => {
      callInterceptor({
        interceptor: props.beforeDelete,
        args: [file, getDetail(index)],
        done() {
          deleteFile(file, index);
        },
      });
    };

    const onChange = (event) => {
      let { files } = event.target;

      if (props.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files);

      if (props.beforeRead) {
        const response = props.beforeRead(files, getDetail());

        if (!response) {
          resetInput();
          return;
        }

        if (isPromise(response)) {
          response
            .then((data) => {
              if (data) {
                readFile(data);
              } else {
                readFile(files);
              }
            })
            .catch(resetInput);
        }
      } else {
        readFile(files);
      }
    };

    let imagePreview;

    const onPreviewImage = (item) => {
      if (props.previewFullImage) {
        const imageFiles = props.modelValue.filter((item) => isImageFile(item));
        const imageContents = imageFiles.map(
          (item) => item.content || item.url
        );

        imagePreview = ImagePreview({
          images: imageContents,
          startPosition: imageFiles.indexOf(item),
          onClose: () => {
            emit('close-preview');
          },
          ...props.previewOptions,
        });
      }
    };

    const closeImagePreview = () => {
      if (imagePreview) {
        imagePreview.close();
      }
    };

    const chooseFile = () => {
      if (inputRef.value && !props.disabled) {
        inputRef.value.click();
      }
    };

    const renderPreviewMask = (item) => {
      const { status, message } = item;

      if (status === 'uploading' || status === 'failed') {
        const MaskIcon =
          status === 'failed' ? (
            <Icon name="close" class={bem('mask-icon')} />
          ) : (
            <Loading class={bem('loading')} />
          );

        const showMessage = isDef(message) && message !== '';

        return (
          <div class={bem('mask')}>
            {MaskIcon}
            {showMessage && <div class={bem('mask-message')}>{message}</div>}
          </div>
        );
      }
    };

    const renderPreviewItem = (item, index) => {
      const showDelete = item.status !== 'uploading' && props.deletable;

      const DeleteIcon = showDelete && (
        <div
          class={bem('preview-delete')}
          onClick={(event) => {
            event.stopPropagation();
            onDelete(item, index);
          }}
        >
          <Icon name="cross" class={bem('preview-delete-icon')} />
        </div>
      );

      const PreviewCover = slots['preview-cover'] && (
        <div class={bem('preview-cover')}>
          {slots['preview-cover']({
            index,
            ...item,
          })}
        </div>
      );

      const Preview = isImageFile(item) ? (
        <Image
          fit={props.imageFit}
          src={item.content || item.url}
          class={bem('preview-image')}
          width={props.previewSize}
          height={props.previewSize}
          lazyLoad={props.lazyLoad}
          onClick={() => {
            onPreviewImage(item);
          }}
        >
          {PreviewCover}
        </Image>
      ) : (
        <div class={bem('file')} style={getSizeStyle(props.previewSize)}>
          <Icon class={bem('file-icon')} name="description" />
          <div class={[bem('file-name'), 'van-ellipsis']}>
            {item.file ? item.file.name : item.url}
          </div>
          {PreviewCover}
        </div>
      );

      return (
        <div
          class={bem('preview')}
          onClick={() => {
            emit('click-preview', item, getDetail(index));
          }}
        >
          {Preview}
          {renderPreviewMask(item)}
          {DeleteIcon}
        </div>
      );
    };

    const renderPreviewList = () => {
      if (props.previewImage) {
        return props.modelValue.map(renderPreviewItem);
      }
    };

    const renderUpload = () => {
      if (props.modelValue.length >= props.maxCount || !props.showUpload) {
        return;
      }

      const Input = (
        <input
          ref="input"
          type="file"
          class={bem('input')}
          accept={props.accept}
          capture={props.capture}
          multiple={props.multiple}
          disabled={props.disabled}
          onChange={onChange}
        />
      );

      if (slots.default) {
        return (
          <div class={bem('input-wrapper')}>
            {slots.default()}
            {Input}
          </div>
        );
      }

      return (
        <div class={bem('upload')} style={getSizeStyle(props.previewSize)}>
          <Icon name={props.uploadIcon} class={bem('upload-icon')} />
          {props.uploadText && (
            <span class={bem('upload-text')}>{props.uploadText}</span>
          )}
          {Input}
        </div>
      );
    };

    usePublicApi({
      chooseFile,
      closeImagePreview,
    });

    useParentField(() => props.modelValue);

    return () => (
      <div class={bem()}>
        <div class={bem('wrapper', { disabled: props.disabled })}>
          {renderPreviewList()}
          {renderUpload()}
        </div>
      </div>
    );
  },
});
