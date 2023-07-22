import { defineComponent, type ExtractPropTypes } from 'vue';

// Utils
import {
  pick,
  extend,
  truthProp,
  makeArrayProp,
  createNamespace,
  HAPTICS_FEEDBACK,
} from '../utils';
import { popupSharedProps, popupSharedPropKeys } from '../popup/shared';

// Components
import { Icon } from '../icon';
import { Popup } from '../popup';

export type ShareSheetOption = {
  name: string;
  icon: string;
  className?: string;
  description?: string;
};

export type ShareSheetOptions = ShareSheetOption[] | ShareSheetOption[][];

const isImage = (name?: string) => name?.includes('/');

const popupInheritKeys = [
  ...popupSharedPropKeys,
  'round',
  'closeOnPopstate',
  'safeAreaInsetBottom',
] as const;

const iconMap: Record<string, string> = {
  qq: 'qq',
  link: 'link-o',
  weibo: 'weibo',
  qrcode: 'qr',
  poster: 'photo-o',
  wechat: 'wechat',
  'weapp-qrcode': 'miniprogram-o',
  'wechat-moments': 'wechat-moments',
};

const [name, bem, t] = createNamespace('share-sheet');

export const shareSheetProps = extend({}, popupSharedProps, {
  title: String,
  round: truthProp,
  options: makeArrayProp<ShareSheetOption | ShareSheetOption[]>(),
  cancelText: String,
  description: String,
  closeOnPopstate: truthProp,
  safeAreaInsetBottom: truthProp,
});

export type ShareSheetProps = ExtractPropTypes<typeof shareSheetProps>;

export default defineComponent({
  name,

  props: shareSheetProps,

  emits: ['cancel', 'select', 'update:show'],

  setup(props, { emit, slots }) {
    const updateShow = (value: boolean) => emit('update:show', value);

    const onCancel = () => {
      updateShow(false);
      emit('cancel');
    };

    const onSelect = (option: ShareSheetOption, index: number) =>
      emit('select', option, index);

    const renderHeader = () => {
      const title = slots.title ? slots.title() : props.title;
      const description = slots.description
        ? slots.description()
        : props.description;

      if (title || description) {
        return (
          <div class={bem('header')}>
            {title && <h2 class={bem('title')}>{title}</h2>}
            {description && (
              <span class={bem('description')}>{description}</span>
            )}
          </div>
        );
      }
    };

    const renderIcon = (icon: string) => {
      if (isImage(icon)) {
        return <img src={icon} class={bem('image-icon')} />;
      }
      return (
        <div class={bem('icon', [icon])}>
          <Icon name={iconMap[icon] || icon} />
        </div>
      );
    };

    const renderOption = (option: ShareSheetOption, index: number) => {
      const { name, icon, className, description } = option;
      return (
        <div
          role="button"
          tabindex={0}
          class={[bem('option'), className, HAPTICS_FEEDBACK]}
          onClick={() => onSelect(option, index)}
        >
          {renderIcon(icon)}
          {name && <span class={bem('name')}>{name}</span>}
          {description && (
            <span class={bem('option-description')}>{description}</span>
          )}
        </div>
      );
    };

    const renderOptions = (options: ShareSheetOption[], border?: boolean) => (
      <div class={bem('options', { border })}>{options.map(renderOption)}</div>
    );

    const renderRows = () => {
      const { options } = props;
      if (Array.isArray(options[0])) {
        return (options as ShareSheetOption[][]).map((item, index) =>
          renderOptions(item, index !== 0),
        );
      }
      return renderOptions(options as ShareSheetOption[]);
    };

    const renderCancelButton = () => {
      const cancelText = props.cancelText ?? t('cancel');
      if (slots.cancel || cancelText) {
        return (
          <button type="button" class={bem('cancel')} onClick={onCancel}>
            {slots.cancel ? slots.cancel() : cancelText}
          </button>
        );
      }
    };

    return () => (
      <Popup
        class={bem()}
        position="bottom"
        onUpdate:show={updateShow}
        {...pick(props, popupInheritKeys)}
      >
        {renderHeader()}
        {renderRows()}
        {renderCancelButton()}
      </Popup>
    );
  },
});
