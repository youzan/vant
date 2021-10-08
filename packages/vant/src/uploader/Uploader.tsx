import {
  ref,
  reactive,
  PropType,
  defineComponent,
  ExtractPropTypes,
} from 'vue';

// Utils
import {
  pick,
  extend,
  isPromise,
  truthProp,
  numericProp,
  Interceptor,
  getSizeStyle,
  makeArrayProp,
  makeStringProp,
  makeNumericProp,
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
} from './utils';

// Composables
import { useCustomFieldValue } from '@vant/use';
import { useExpose } from '../composables/use-expose';

// Components
import { Icon } from '../icon';
import { ImagePreview, ImagePreviewOptions } from '../image-preview';
import UploaderPreviewItem from './UploaderPreviewItem';

// Types
import type { ImageFit } from '../image';
import type {
  UploaderExpose,
  UploaderMaxSize,
  UploaderAfterRead,
  UploaderBeforeRead,
  UploaderResultType,
  UploaderFileListItem,
} from './types';

const props = {
  name: makeNumericProp(''),
  accept: makeStringProp('image/*'),
  capture: String,
  multiple: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  lazyLoad: Boolean,
  maxCount: makeNumericProp(Infinity),
  imageFit: makeStringProp<ImageFit>('cover'),
  resultType: makeStringProp<UploaderResultType>('dataUrl'),
  uploadIcon: makeStringProp('photograph'),
  uploadText: String,
  deletable: truthProp,
  afterRead: Function as PropType<UploaderAfterRead>,
  showUpload: truthProp,
  modelValue: makeArrayProp<UploaderFileListItem>(),
  beforeRead: Function as PropType<UploaderBeforeRead>,
  beforeDelete: Function as PropType<Interceptor>,
  previewSize: numericProp,
  previewImage: truthProp,
  previewOptions: Object as PropType<ImagePreviewOptions>,
  previewFullImage: truthProp,
  maxSize: {
    type: [Number, String, Function] as PropType<UploaderMaxSize>,
    default: Infinity,
  },
};

export type UploaderProps = ExtractPropTypes<typeof props>;

export default defineComponent({
  name,

  props,

  emits: [
    'delete',
    'oversize',
    'click-upload',
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

    const onClickUpload = (event: MouseEvent) => emit('click-upload', event);

    const renderUpload = () => {
      if (props.modelValue.length >= props.maxCount || !props.showUpload) {
        return;
      }

      const Input = props.readonly ? null : (
        <input
          ref={inputRef}
          type="file"
          class={bem('input')}
          accept={props.accept}
          capture={props.capture as unknown as boolean}
          multiple={props.multiple}
          disabled={props.disabled}
          onChange={onChange}
        />
      );

      if (slots.default) {
        return (
          <div class={bem('input-wrapper')} onClick={onClickUpload}>
            {slots.default()}
            {Input}
          </div>
        );
      }

      return (
        <div
          class={bem('upload', { readonly: props.readonly })}
          style={getSizeStyle(props.previewSize)}
          onClick={onClickUpload}
        >
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

    useExpose<UploaderExpose>({
      chooseFile,
      closeImagePreview,
    });
    useCustomFieldValue(() => props.modelValue);

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
