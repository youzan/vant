import { ref, watch, computed, Teleport, Transition } from 'vue';
import { createNamespace, stopPropagation } from '../utils';
import { useClickAway } from '@vant/use';
import Key from './Key';

const [createComponent, bem] = createNamespace('number-keyboard');

export default createComponent({
  props: {
    show: Boolean,
    title: String,
    zIndex: [Number, String],
    teleport: [String, Object],
    closeButtonText: String,
    deleteButtonText: String,
    closeButtonLoading: Boolean,
    theme: {
      type: String,
      default: 'default',
    },
    modelValue: {
      type: String,
      default: '',
    },
    extraKey: {
      type: [String, Array],
      default: '',
    },
    maxlength: {
      type: [Number, String],
      default: Number.MAX_VALUE,
    },
    transition: {
      type: Boolean,
      default: true,
    },
    showDeleteKey: {
      type: Boolean,
      default: true,
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true,
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
  },

  emits: [
    'show',
    'hide',
    'blur',
    'input',
    'close',
    'delete',
    'update:modelValue',
  ],

  setup(props, { emit, slots }) {
    const root = ref();

    const genBasicKeys = () => {
      const keys = [];
      for (let i = 1; i <= 9; i++) {
        keys.push({ text: i });
      }
      return keys;
    };

    const genDefaultKeys = () => [
      ...genBasicKeys(),
      { text: props.extraKey, type: 'extra' },
      { text: 0 },
      {
        text: props.showDeleteKey ? props.deleteButtonText : '',
        type: props.showDeleteKey ? 'delete' : '',
      },
    ];

    const genCustomKeys = () => {
      const keys = genBasicKeys();
      const { extraKey } = props;
      const extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey];

      if (extraKeys.length === 1) {
        keys.push(
          { text: 0, wider: true },
          { text: extraKeys[0], type: 'extra' }
        );
      } else if (extraKeys.length === 2) {
        keys.push(
          { text: extraKeys[0], type: 'extra' },
          { text: 0 },
          { text: extraKeys[1], type: 'extra' }
        );
      }

      return keys;
    };

    const keys = computed(() =>
      props.theme === 'custom' ? genCustomKeys() : genDefaultKeys()
    );

    const onBlur = () => {
      if (props.show) {
        emit('blur');
      }
    };

    const onClose = () => {
      emit('close');
      onBlur();
    };

    const onAnimationEnd = () => {
      emit(props.show ? 'show' : 'hide');
    };

    const onPress = (text, type) => {
      if (text === '') {
        if (type === 'extra') {
          onBlur();
        }
        return;
      }

      const value = props.modelValue;

      if (type === 'delete') {
        emit('delete');
        emit('update:modelValue', value.slice(0, value.length - 1));
      } else if (type === 'close') {
        onClose();
      } else if (value.length < props.maxlength) {
        emit('input', text);
        emit('update:modelValue', value + text);
      }
    };

    const renderTitle = () => {
      const { title, theme, closeButtonText } = props;
      const leftSlot = slots['title-left'];
      const showClose = closeButtonText && theme === 'default';
      const showTitle = title || showClose || leftSlot;

      if (!showTitle) {
        return;
      }

      return (
        <div class={bem('header')}>
          {leftSlot && <span class={bem('title-left')}>{leftSlot()}</span>}
          {title && <h2 class={bem('title')}>{title}</h2>}
          {showClose && (
            <button type="button" class={bem('close')} onClick={onClose}>
              {closeButtonText}
            </button>
          )}
        </div>
      );
    };

    const renderKeys = () => {
      return keys.value.map((key) => {
        const slots = {};

        if (key.type === 'delete') {
          slots.default = slots.delete;
        }
        if (key.type === 'extra') {
          slots.default = slots['extra-key'];
        }

        return (
          <Key
            v-slots={slots}
            key={key.text}
            text={key.text}
            type={key.type}
            wider={key.wider}
            color={key.color}
            onPress={onPress}
          />
        );
      });
    };

    const renderSidebar = () => {
      if (props.theme === 'custom') {
        return (
          <div class={bem('sidebar')}>
            {props.showDeleteKey && (
              <Key
                v-slots={{ delete: slots.delete }}
                large
                text={props.deleteButtonText}
                type="delete"
                onPress={onPress}
              />
            )}
            <Key
              large
              text={props.closeButtonText}
              type="close"
              color="blue"
              loading={props.closeButtonLoading}
              onPress={onPress}
            />
          </div>
        );
      }
    };

    watch(
      () => props.show,
      (value) => {
        if (!props.transition) {
          emit(value ? 'show' : 'hide');
        }
      }
    );

    useClickAway(root, onClose, { eventName: 'touchstart' });

    return () => {
      const Title = renderTitle();
      const Content = (
        <Transition name={props.transition ? 'van-slide-up' : ''}>
          <div
            v-show={props.show}
            ref={root}
            style={{ zIndex: props.zIndex }}
            class={bem({
              unfit: !props.safeAreaInsetBottom,
              'with-title': !!Title,
            })}
            onTouchstart={stopPropagation}
            onAnimationend={onAnimationEnd}
            onWebkitAnimationEnd={onAnimationEnd}
          >
            {Title}
            <div class={bem('body')}>
              <div class={bem('keys')}>{renderKeys()}</div>
              {renderSidebar()}
            </div>
          </div>
        </Transition>
      );

      if (props.teleport) {
        return <Teleport to={props.teleport}>{Content}</Teleport>;
      }

      return Content;
    };
  },
});
