import { defineComponent } from 'vue';

// Utils
import {
  pick,
  extend,
  truthProp,
  makeArrayProp,
  createNamespace,
} from '../utils';
import { popupSharedProps, popupSharedPropKeys } from '../popup/shared';

// Components
import { Popup } from '../popup';

export type ShareSheetOption = {
  name: string;
  icon: string;
  className?: string;
  description?: string;
};

export type ShareSheetOptions = ShareSheetOption[] | ShareSheetOption[][];

const PRESET_ICONS = [
  'qq',
  'link',
  'weibo',
  'wechat',
  'poster',
  'qrcode',
  'weapp-qrcode',
  'wechat-moments',
];

const popupKeys = [
  ...popupSharedPropKeys,
  'round',
  'closeOnPopstate',
  'safeAreaInsetBottom',
] as const;

function getIconURL(icon: string) {
  if (PRESET_ICONS.includes(icon)) {
    return `https://img.yzcdn.cn/vant/share-sheet-${icon}.png`;
  }
  return icon;
}

const [name, bem, t] = createNamespace('share-sheet');

export default defineComponent({
  name,

  props: extend({}, popupSharedProps, {
    title: String,
    round: truthProp,
    options: makeArrayProp<ShareSheetOption | ShareSheetOption[]>(),
    cancelText: String,
    description: String,
    closeOnPopstate: truthProp,
    safeAreaInsetBottom: truthProp,
  }),

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

    const renderOption = (option: ShareSheetOption, index: number) => {
      const { name, icon, className, description } = option;
      return (
        <div
          role="button"
          tabindex={0}
          class={[bem('option'), className]}
          onClick={() => onSelect(option, index)}
        >
          <img src={getIconURL(icon)} class={bem('icon')} />
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
          renderOptions(item, index !== 0)
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
        {...pick(props, popupKeys)}
      >
        {renderHeader()}
        {renderRows()}
        {renderCancelButton()}
      </Popup>
    );
  },
});
