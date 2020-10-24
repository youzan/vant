// Utils
import { createNamespace, pick } from '../utils';

// Components
import Popup, { popupSharedProps } from '../popup';

const PRESET_ICONS = ['qq', 'weibo', 'wechat', 'link', 'qrcode', 'poster'];

function getIconURL(icon) {
  if (PRESET_ICONS.indexOf(icon) !== -1) {
    return `https://img.yzcdn.cn/vant/share-icon-${icon}.png`;
  }
  return icon;
}

const [createComponent, bem, t] = createNamespace('share-sheet');

export default createComponent({
  props: {
    ...popupSharedProps,
    title: String,
    cancelText: String,
    description: String,
    options: {
      type: Array,
      default: () => [],
    },
    closeOnPopstate: {
      type: Boolean,
      default: true,
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['cancel', 'select', 'update:show'],

  setup(props, { emit, slots }) {
    const toggle = (value) => {
      emit('update:show', value);
    };

    const onCancel = () => {
      toggle(false);
      emit('cancel');
    };

    const onSelect = (option, index) => {
      emit('select', option, index);
    };

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

    const renderOption = (option, index) => {
      const { name, icon, className, description } = option;
      return (
        <div
          role="button"
          tabindex="0"
          class={[bem('option'), className]}
          onClick={() => {
            onSelect(option, index);
          }}
        >
          <img src={getIconURL(icon)} class={bem('icon')} />
          {name && <span class={bem('name')}>{name}</span>}
          {description && (
            <span class={bem('option-description')}>{description}</span>
          )}
        </div>
      );
    };

    const renderOptions = (options, border) => (
      <div class={bem('options', { border })}>{options.map(renderOption)}</div>
    );

    const renderRows = () => {
      const { options } = props;
      if (Array.isArray(options[0])) {
        return options.map((item, index) => renderOptions(item, index !== 0));
      }
      return renderOptions(options);
    };

    const renderCancelText = () => {
      const text = props.cancelText ?? t('cancel');
      if (text) {
        return (
          <button type="button" class={bem('cancel')} onClick={onCancel}>
            {text}
          </button>
        );
      }
    };

    return () => (
      <Popup
        round
        class={bem()}
        position="bottom"
        {...{
          ...pick(props, [
            'show',
            'overlay',
            'duration',
            'teleport',
            'lazyRender',
            'lockScroll',
            'closeOnPopstate',
            'closeOnClickOverlay',
            'safeAreaInsetBottom',
          ]),
          'onUpdate:show': toggle,
        }}
      >
        {renderHeader()}
        {renderRows()}
        {renderCancelText()}
      </Popup>
    );
  },
});
