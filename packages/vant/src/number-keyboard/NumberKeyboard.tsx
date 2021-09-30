import {
  ref,
  Slot,
  watch,
  computed,
  Teleport,
  PropType,
  Transition,
  TeleportProps,
  defineComponent,
} from 'vue';

// Utils
import {
  truthProp,
  numericProp,
  getZIndexStyle,
  makeStringProp,
  makeNumericProp,
  stopPropagation,
  createNamespace,
} from '../utils';

// Composables
import { useClickAway } from '@vant/use';

// Components
import NumberKeyboardKey, { KeyType } from './NumberKeyboardKey';

const [name, bem] = createNamespace('number-keyboard');

export type NumberKeyboardTheme = 'default' | 'custom';

type KeyConfig = {
  text?: number | string;
  type?: KeyType;
  color?: string;
  wider?: boolean;
};

export default defineComponent({
  name,

  props: {
    show: Boolean,
    title: String,
    theme: makeStringProp<NumberKeyboardTheme>('default'),
    zIndex: numericProp,
    teleport: [String, Object] as PropType<TeleportProps['to']>,
    maxlength: makeNumericProp(Infinity),
    modelValue: makeStringProp(''),
    transition: truthProp,
    blurOnClose: truthProp,
    showDeleteKey: truthProp,
    randomKeyOrder: Boolean,
    closeButtonText: String,
    deleteButtonText: String,
    closeButtonLoading: Boolean,
    hideOnClickOutside: truthProp,
    safeAreaInsetBottom: truthProp,
    extraKey: {
      type: [String, Array] as PropType<string | string[]>,
      default: '',
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
    const root = ref<HTMLElement>();

    const genBasicKeys = () => {
      const keys: KeyConfig[] = Array(9)
        .fill('')
        .map((_, i) => ({ text: i + 1 }));

      if (props.randomKeyOrder) {
        keys.sort(() => (Math.random() > 0.5 ? 1 : -1));
      }

      return keys;
    };

    const genDefaultKeys = (): KeyConfig[] => [
      ...genBasicKeys(),
      { text: props.extraKey as string, type: 'extra' },
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

      if (props.blurOnClose) {
        onBlur();
      }
    };

    const onAnimationEnd = () => emit(props.show ? 'show' : 'hide');

    const onPress = (text: string, type: KeyType) => {
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

    const renderKeys = () =>
      keys.value.map((key) => {
        const keySlots: Record<string, Slot | undefined> = {};

        if (key.type === 'delete') {
          keySlots.default = slots.delete;
        }
        if (key.type === 'extra') {
          keySlots.default = slots['extra-key'];
        }

        return (
          <NumberKeyboardKey
            v-slots={keySlots}
            key={key.text}
            text={key.text}
            type={key.type}
            wider={key.wider}
            color={key.color}
            onPress={onPress}
          />
        );
      });

    const renderSidebar = () => {
      if (props.theme === 'custom') {
        return (
          <div class={bem('sidebar')}>
            {props.showDeleteKey && (
              <NumberKeyboardKey
                v-slots={{ delete: slots.delete }}
                large
                text={props.deleteButtonText}
                type="delete"
                onPress={onPress}
              />
            )}
            <NumberKeyboardKey
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

    if (props.hideOnClickOutside) {
      useClickAway(root, onBlur, { eventName: 'touchstart' });
    }

    return () => {
      const Title = renderTitle();
      const Content = (
        <Transition name={props.transition ? 'van-slide-up' : ''}>
          <div
            v-show={props.show}
            ref={root}
            style={getZIndexStyle(props.zIndex)}
            class={bem({
              unfit: !props.safeAreaInsetBottom,
              'with-title': !!Title,
            })}
            onTouchstart={stopPropagation}
            onAnimationend={onAnimationEnd}
            // @ts-ignore
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
