import { ref } from 'vue';

// Utils
import { bem, createComponent } from './shared';
import { isPromise, getSizeStyle, pick } from '../utils';
import {
  toArray,
  isOversize,
  filterFiles,
  isImageFile,
  readFileContent,
} from './utils';

// Composition
import { useExpose } from '../composition/use-expose';
import { useLinkField } from '../composition/use-link-field';

// Components
import Icon from '../icon';
import PreviewItem from './PreviewItem';
import ImagePreview from '../image-preview';

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

    const onAfterRead = (items) => {
      resetInput();

      if (isOversize(items, props.maxSize)) {
        if (Array.isArray(items)) {
          const result = filterFiles(items, props.maxSize);
          items = result.valid;
          emit('oversize', result.invalid, getDetail());

          if (!items.length) {
            return;
          }
        } else {
          emit('oversize', items, getDetail());
          return;
        }
      }

      emit('update:modelValue', [...props.modelValue, ...toArray(items)]);

      if (props.afterRead) {
        props.afterRead(items, getDetail());
      }
    };

    const readFile = (files) => {
      const { maxCount, modelValue, resultType } = props;

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

          onAfterRead(fileList);
        });
      } else {
        readFileContent(files, resultType).then((content) => {
          const result = { file: files, status: '', message: '' };

          if (content) {
            result.content = content;
          }

          onAfterRead(result);
        });
      }
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

    const onClosePreview = () => {
      emit('close-preview');
    };

    const previewImage = (item) => {
      if (props.previewFullImage) {
        const imageFiles = props.modelValue.filter(isImageFile);
        const images = imageFiles.map((item) => item.content || item.url);

        imagePreview = ImagePreview({
          images,
          startPosition: imageFiles.indexOf(item),
          onClose: onClosePreview,
          ...props.previewOptions,
        });
      }
    };

    const closeImagePreview = () => {
      if (imagePreview) {
        imagePreview.close();
      }
    };

    const deleteFile = (item, index) => {
      const fileList = props.modelValue.slice(0);
      fileList.splice(index, 1);

      emit('update:modelValue', fileList);
      emit('delete', item, getDetail(index));
    };

    const renderPreviewItem = (item, index) => (
      <PreviewItem
        v-slots={{ 'preview-cover': slots['preview-cover'] }}
        item={item}
        onClick={() => {
          emit('click-preview', item, getDetail(index));
        }}
        onDelete={() => {
          deleteFile(item, index);
        }}
        onPreview={() => {
          previewImage(item);
        }}
        {...pick(props, [
          'name',
          'lazyLoad',
          'imageFit',
          'deletable',
          'previewSize',
          'beforeDelete',
        ])}
      />
    );

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
          ref={inputRef}
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

    const chooseFile = () => {
      if (inputRef.value && !props.disabled) {
        inputRef.value.click();
      }
    };

    useExpose({
      chooseFile,
      closeImagePreview,
    });

    useLinkField(() => props.modelValue);

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
