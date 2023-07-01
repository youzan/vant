import { defineComponent, type PropType } from 'vue';

// Utils
import { t, bem, isImageFile } from './utils';
import {
  isDef,
  extend,
  numericProp,
  getSizeStyle,
  callInterceptor,
  makeRequiredProp,
  type Numeric,
  type Interceptor,
} from '../utils';

// Components
import { Icon } from '../icon';
import { Image, ImageFit } from '../image';
import { Loading } from '../loading';

// Types
import type { UploaderFileListItem } from './types';

export default defineComponent({
  props: {
    name: numericProp,
    item: makeRequiredProp<PropType<UploaderFileListItem>>(Object),
    index: Number,
    imageFit: String as PropType<ImageFit>,
    lazyLoad: Boolean,
    deletable: Boolean,
    reupload: Boolean,
    previewSize: [Number, String, Array] as PropType<
      Numeric | [Numeric, Numeric]
    >,
    beforeDelete: Function as PropType<Interceptor>,
  },

  emits: ['delete', 'preview', 'reupload'],

  setup(props, { emit, slots }) {
    const renderMask = () => {
      const { status, message } = props.item;

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

    const onDelete = (event: MouseEvent) => {
      const { name, item, index, beforeDelete } = props;
      event.stopPropagation();
      callInterceptor(beforeDelete, {
        args: [item, { name, index }],
        done: () => emit('delete'),
      });
    };

    const onPreview = () => emit('preview');

    const onReupload = () => emit('reupload');

    const renderDeleteIcon = () => {
      if (props.deletable && props.item.status !== 'uploading') {
        const slot = slots['preview-delete'];
        return (
          <div
            role="button"
            class={bem('preview-delete', { shadow: !slot })}
            tabindex={0}
            aria-label={t('delete')}
            onClick={onDelete}
          >
            {slot ? (
              slot()
            ) : (
              <Icon name="cross" class={bem('preview-delete-icon')} />
            )}
          </div>
        );
      }
    };

    const renderCover = () => {
      if (slots['preview-cover']) {
        const { index, item } = props;
        return (
          <div class={bem('preview-cover')}>
            {slots['preview-cover'](extend({ index }, item))}
          </div>
        );
      }
    };

    const renderPreview = () => {
      const { item, lazyLoad, imageFit, previewSize, reupload } = props;

      if (isImageFile(item)) {
        return (
          <Image
            v-slots={{ default: renderCover }}
            fit={imageFit}
            src={item.objectUrl || item.content || item.url}
            class={bem('preview-image')}
            width={Array.isArray(previewSize) ? previewSize[0] : previewSize}
            height={Array.isArray(previewSize) ? previewSize[1] : previewSize}
            lazyLoad={lazyLoad}
            onClick={reupload ? onReupload : onPreview}
          />
        );
      }

      return (
        <div class={bem('file')} style={getSizeStyle(props.previewSize)}>
          <Icon class={bem('file-icon')} name="description" />
          <div class={[bem('file-name'), 'van-ellipsis']}>
            {item.file ? item.file.name : item.url}
          </div>
          {renderCover()}
        </div>
      );
    };

    return () => (
      <div class={bem('preview')}>
        {renderPreview()}
        {renderMask()}
        {renderDeleteIcon()}
      </div>
    );
  },
});
