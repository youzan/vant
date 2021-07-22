import { ref, reactive, PropType, defineComponent } from 'vue';

// Utils
import {
  pick,
  extend,
  isPromise,
  truthProp,
  getSizeStyle,
  ComponentInstance,
} from '../utils';
import {
  bem,
  name,
  toArray,
  isOversize,
  filterFiles,
  isImageFile,
  readFileContent,
  UploaderMaxSize,
  UploaderResultType,
  UploaderFileListItem,
} from './utils';

// Composables
import { useExpose } from '../composables/use-expose';
import { useLinkField } from '../composables/use-link-field';

// Components
import { Icon } from '../icon';
import { ImagePreview, ImagePreviewOptions } from '../image-preview';
import UploaderPreviewItem from './UploaderPreviewItem';

// Types
import type { ImageFit } from '../image';
import type { Interceptor } from '../utils/interceptor';

type PromiseOrNot<T> = T | Promise<T>;

export type UploaderBeforeRead = (
  file: File | File[],
  detail: {
    name: string | number;
    index: number;
  }
) => PromiseOrNot<File | File[] | undefined>;

export type UploaderAfterRead = (
  items: UploaderFileListItem | UploaderFileListItem[],
  detail: {
    name: string | number;
    index: number;
  }
) => void;

export default defineComponent({
  name,

  props: {
    capture: String,
    multiple: Boolean,
    disabled: Boolean,
    lazyLoad: Boolean,
    uploadText: String,
    deletable: truthProp,
    afterRead: Function as PropType<UploaderAfterRead>,
    showUpload: truthProp,
    beforeRead: Function as PropType<UploaderBeforeRead>,
    beforeDelete: Function as PropType<Interceptor>,
    previewSize: [Number, String],
    previewImage: truthProp,
    previewOptions: Object as PropType<ImagePreviewOptions>,
    previewFullImage: truthProp,
    name: {
      type: [Number, String],
      default: '',
    },
    accept: {
      type: String,
      default: 'image/*',
    },
    modelValue: {
      type: Array as PropType<UploaderFileListItem[]>,
      default: () => [],
    },
    maxSize: {
      type: [Number, String, Function] as PropType<UploaderMaxSize>,
      default: Number.MAX_VALUE,
    },
    maxCount: {
      type: [Number, String],
      default: Number.MAX_VALUE,
    },
    imageFit: {
      type: String as PropType<ImageFit>,
      default: 'cover',
    },
    resultType: {
      type: String as PropType<UploaderResultType>,
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

    const onAfterRead = (
      items: UploaderFileListItem | UploaderFileListItem[]
    ) => {
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
      items = reactive(items);
      emit('update:modelValue', [...props.modelValue, ...toArray(items)]);

      if (props.afterRead) {
        props.afterRead(items, getDetail());
      }
    };

    const readFile = (files: File | File[]) => {
      const { maxCount, modelValue, resultType } = props;

      if (Array.isArray(files)) {
        const remainCount = +maxCount - modelValue.length;

        if (files.length > remainCount) {
          files = files.slice(0, remainCount);
        }

        Promise.all(
          files.map((file) => readFileContent(file, resultType))
        ).then((contents) => {
          const fileList = (files as File[]).map((file, index) => {
            const result: UploaderFileListItem = {
              file,
              status: '',
              message: '',
            };

            if (contents[index]) {
              result.content = contents[index] as string;
            }

            return result;
          });

          onAfterRead(fileList);
        });
      } else {
        readFileContent(files, resultType).then((content) => {
          const result: UploaderFileListItem = {
            file: files as File,
            status: '',
            message: '',
          };

          if (content) {
            result.content = content;
          }

          onAfterRead(result);
        });
      }
    };

    const onChange = (event: Event) => {
      const { files } = event.target as HTMLInputElement;

      if (props.disabled || !files || !files.length) {
        return;
      }

      const file =
        files.length === 1 ? files[0] : ([].slice.call(files) as File[]);

      if (props.beforeRead) {
        const response = props.beforeRead(file, getDetail());

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
                readFile(file);
              }
            })
            .catch(resetInput);
          return;
        }
      }

      readFile(file);
    };

    let imagePreview: ComponentInstance | undefined;

    const onClosePreview = () => emit('close-preview');

    const previewImage = (item: UploaderFileListItem) => {
      if (props.previewFullImage) {
        const imageFiles = props.modelValue.filter(isImageFile);
        const images = imageFiles
          .map((item) => item.content || item.url)
          .filter(Boolean) as string[];

        imagePreview = ImagePreview(
          extend(
            {
              images,
              startPosition: imageFiles.indexOf(item),
              onClose: onClosePreview,
            },
            props.previewOptions
          )
        );
      }
    };

    const closeImagePreview = () => {
      if (imagePreview) {
        imagePreview.close();
      }
    };

    const deleteFile = (item: UploaderFileListItem, index: number) => {
      const fileList = props.modelValue.slice(0);
      fileList.splice(index, 1);

      emit('update:modelValue', fileList);
      emit('delete', item, getDetail(index));
    };

    const renderPreviewItem = (item: UploaderFileListItem, index: number) => {
      const needPickData = [
        'imageFit',
        'deletable',
        'previewSize',
        'beforeDelete',
      ] as const;

      const previewData = extend(
        pick(props, needPickData),
        pick(item, needPickData, true)
      );

      return (
        <UploaderPreviewItem
          v-slots={{ 'preview-cover': slots['preview-cover'] }}
          item={item}
          index={index}
          onClick={() => emit('click-preview', item, getDetail(index))}
          onDelete={() => deleteFile(item, index)}
          onPreview={() => previewImage(item)}
          {...pick(props, ['name', 'lazyLoad'])}
          {...previewData}
        />
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
          ref={inputRef}
          type="file"
          class={bem('input')}
          accept={props.accept}
          capture={(props.capture as unknown) as boolean}
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
