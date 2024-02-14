import {
  ref,
  watch,
  computed,
  Teleport,
  Transition,
  defineComponent,
  type Slot,
  type PropType,
  type TeleportProps,
  type ExtractPropTypes,
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
  HAPTICS_FEEDBACK,
  type Numeric,
} from '../utils';

// Composables
import { useClickAway } from '@vant/use';

// Components
import NumberKeyboardKey, { KeyType } from './NumberKeyboardKey';

const [name, bem] = createNamespace('number-keyboard');

export type NumberKeyboardTheme = 'default' | 'custom';

type KeyConfig = {
  text?: Numeric;
  type?: KeyType;
  color?: string;
  wider?: boolean;
};

export const numberKeyboardProps = {
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
};

export type NumberKeyboardProps = ExtractPropTypes<typeof numberKeyboardProps>;

function shuffle(array: unknown[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export default defineComponent({
  name,

  inheritAttrs: false,

  props: numberKeyboardProps,

  emits: [
    'show',
    'hide',
    'blur',
    'input',
    'close',
    'delete',
    'update:modelValue',
  ],

  setup(props, { emit, slots, attrs }) {
    const root = ref<HTMLElement>();

    const genBasicKeys = () => {
      const keys: KeyConfig[] = Array(9)
        .fill('')
        .map((_, i) => ({ text: i + 1 }));

      if (props.randomKeyOrder) {
        shuffle(keys);
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
          { text: extraKeys[0], type: 'extra' },
        );
      } else if (extraKeys.length === 2) {
        keys.push(
          { text: extraKeys[0], type: 'extra' },
          { text: 0 },
          { text: extraKeys[1], type: 'extra' },
        );
      }

      return keys;
    };

    const keys = computed(() =>
      props.theme === 'custom' ? genCustomKeys() : genDefaultKeys(),
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
      } else if (value.length < +props.maxlength) {
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
            <button
              type="button"
              class={[bem('close'), HAPTICS_FEEDBACK]}
              onClick={onClose}
            >
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
                v-slots={{ default: slots.delete }}
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
      },
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
            onAnimationend={onAnimationEnd}
            onTouchstartPassive={stopPropagation}
            {...attrs}
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
