import { ref, PropType, defineComponent } from 'vue';

// Utils
import {
  pick,
  extend,
  truthProp,
  createNamespace,
  preventDefault,
  ComponentInstance,
} from '../utils';
import { fieldProps } from '../field/Field';

// Composables
import { useExpose } from '../composables/use-expose';

// Components
import { Field } from '../field';

const [name, bem, t] = createNamespace('search');

export type SearchShape = 'square' | 'round';

export default defineComponent({
  name,

  props: extend({}, fieldProps, {
    label: String,
    clearable: truthProp,
    actionText: String,
    background: String,
    showAction: Boolean,
    shape: {
      type: String as PropType<SearchShape>,
      default: 'square',
    },
    leftIcon: {
      type: String,
      default: 'search',
    },
  }),

  emits: ['search', 'cancel', 'update:modelValue'],

  setup(props, { emit, slots, attrs }) {
    const filedRef = ref<ComponentInstance>();

    const onCancel = () => {
      if (!slots.action) {
        emit('update:modelValue', '');
        emit('cancel');
      }
    };

    const onKeypress = (event: KeyboardEvent) => {
      const ENTER_CODE = 13;
      if (event.keyCode === ENTER_CODE) {
        preventDefault(event);
        emit('search', props.modelValue);
      }
    };

    const renderLabel = () => {
      if (slots.label || props.label) {
        return (
          <div class={bem('label')}>
            {slots.label ? slots.label() : props.label}
          </div>
        );
      }
    };

    const renderAction = () => {
      if (props.showAction) {
        const text = props.actionText || t('cancel');
        return (
          <div
            class={bem('action')}
            role="button"
            tabindex={0}
            onClick={onCancel}
          >
            {slots.action ? slots.action() : text}
          </div>
        );
      }
    };

    const blur = () => filedRef.value?.blur();
    const focus = () => filedRef.value?.focus();

    const fieldPropNames = Object.keys(fieldProps) as Array<
      keyof typeof fieldProps
    >;

    const renderField = () => {
      const fieldAttrs = extend({}, attrs, pick(props, fieldPropNames));

      const onInput = (value: string) => emit('update:modelValue', value);

      return (
        <Field
          v-slots={pick(slots, ['left-icon', 'right-icon'])}
          ref={filedRef}
          type="search"
          border={false}
          onKeypress={onKeypress}
          {...fieldAttrs}
          {...{ 'onUpdate:modelValue': onInput }}
        />
      );
    };

    useExpose({ focus, blur });

    return () => (
      <div
        class={bem({ 'show-action': props.showAction })}
        style={{ background: props.background }}
      >
        {slots.left?.()}
        <div class={bem('content', props.shape)}>
          {renderLabel()}
          {renderField()}
        </div>
        {renderAction()}
      </div>
    );
  },
});
