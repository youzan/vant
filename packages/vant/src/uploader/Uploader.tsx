import {
  ref,
  reactive,
  defineComponent,
  onBeforeUnmount,
  type PropType,
  type ExtractPropTypes,
  nextTick,
} from 'vue';

// Utils
import {
  pick,
  extend,
  toArray,
  isPromise,
  truthProp,
  Interceptor,
  getSizeStyle,
  makeArrayProp,
  makeStringProp,
  makeNumericProp,
  type Numeric,
  type ComponentInstance,
} from '../utils';
import {
  bem,
  name,
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
import { showImagePreview, type ImagePreviewOptions } from '../image-preview';
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

export const uploaderProps = {
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
  reupload: Boolean,
  afterRead: Function as PropType<UploaderAfterRead>,
  showUpload: truthProp,
  modelValue: makeArrayProp<UploaderFileListItem>(),
  beforeRead: Function as PropType<UploaderBeforeRead>,
  beforeDelete: Function as PropType<Interceptor>,
  previewSize: [Number, String, Array] as PropType<
    Numeric | [Numeric, Numeric]
  >,
  previewImage: truthProp,
  previewOptions: Object as PropType<Partial<ImagePreviewOptions>>,
  previewFullImage: truthProp,
  maxSize: {
    type: [Number, String, Function] as PropType<UploaderMaxSize>,
    default: Infinity,
  },
};

export type UploaderProps = ExtractPropTypes<typeof uploaderProps>;

export default defineComponent({
  name,

  props: uploaderProps,

  emits: [
    'delete',
    'oversize',
    'clickUpload',
    'closePreview',
    'clickPreview',
    'clickReupload',
    'update:modelValue',
  ],

  setup(props, { emit, slots }) {
    const inputRef = ref();
    const urls: string[] = [];
    const reuploadIndex = ref(-1);
    const isReuploading = ref(false);

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
      items: UploaderFileListItem | UploaderFileListItem[],
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
      if (reuploadIndex.value > -1) {
        const arr = [...props.modelValue];
        arr.splice(reuploadIndex.value, 1, items as UploaderFileListItem);
        emit('update:modelValue', arr);
        reuploadIndex.value = -1;
      } else {
        emit('update:modelValue', [...props.modelValue, ...toArray(items)]);
      }

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
          files.map((file) => readFileContent(file, resultType)),
        ).then((contents) => {
          const fileList = (files as File[]).map((file, index) => {
            const result: UploaderFileListItem = {
              file,
              status: '',
              message: '',
              objectUrl: URL.createObjectURL(file),
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
            objectUrl: URL.createObjectURL(files as File),
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

    const onClosePreview = () => emit('closePreview');

    const previewImage = (item: UploaderFileListItem) => {
      if (props.previewFullImage) {
        const imageFiles = props.modelValue.filter(isImageFile);
        const images = imageFiles
          .map((item) => {
            if (item.objectUrl && !item.url && item.status !== 'failed') {
              item.url = item.objectUrl;
              urls.push(item.url);
            }
            return item.url;
          })
          .filter(Boolean) as string[];

        imagePreview = showImagePreview(
          extend(
            {
              images,
              startPosition: imageFiles.indexOf(item),
              onClose: onClosePreview,
            },
            props.previewOptions,
          ),
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

    const reuploadImage = (index: number) => {
      isReuploading.value = true;
      reuploadIndex.value = index;
      nextTick(() => chooseFile());
    };
    const onInputClick = () => {
      if (!isReuploading.value) {
        reuploadIndex.value = -1;
      }
      isReuploading.value = false;
    };

    const renderPreviewItem = (item: UploaderFileListItem, index: number) => {
      const needPickData = [
        'imageFit',
        'deletable',
        'reupload',
        'previewSize',
        'beforeDelete',
      ] as const;

      const previewData = extend(
        pick(props, needPickData),
        pick(item, needPickData, true),
      );

      return (
        <UploaderPreviewItem
          v-slots={pick(slots, ['preview-cover', 'preview-delete'])}
          item={item}
          index={index}
          onClick={() =>
            emit(
              props.reupload ? 'clickReupload' : 'clickPreview',
              item,
              getDetail(index),
            )
          }
          onDelete={() => deleteFile(item, index)}
          onPreview={() => previewImage(item)}
          onReupload={() => reuploadImage(index)}
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

    const onClickUpload = (event: MouseEvent) => emit('clickUpload', event);

    const renderUpload = () => {
      if (props.modelValue.length >= +props.maxCount && !props.reupload) {
        return;
      }

      const hideUploader =
        props.modelValue.length >= +props.maxCount && props.reupload;

      const Input = props.readonly ? null : (
        <input
          ref={inputRef}
          type="file"
          class={bem('input')}
          accept={props.accept}
          capture={props.capture as unknown as boolean}
          multiple={props.multiple && reuploadIndex.value === -1}
          disabled={props.disabled}
          onChange={onChange}
          onClick={onInputClick}
        />
      );

      if (slots.default) {
        return (
          <div
            v-show={!hideUploader}
            class={bem('input-wrapper')}
            onClick={onClickUpload}
          >
            {slots.default()}
            {Input}
          </div>
        );
      }

      return (
        <div
          v-show={props.showUpload && !hideUploader}
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

    onBeforeUnmount(() => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    });

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
