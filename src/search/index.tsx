import { ref, PropType, CSSProperties } from 'vue';

// Utils
import { pick, createNamespace, preventDefault } from '../utils';

// Composition
import { useExpose } from '../composables/use-expose';

// Components
import Field from '../field';

// Types
import type { FieldClearTrigger } from '../field/types';

const [createComponent, bem, t] = createNamespace('search');

export type SearchShape = 'square' | 'round';

export default createComponent({
  inheritAttrs: false,

  props: {
    label: String,
    rightIcon: String,
    modelValue: String,
    actionText: String,
    background: String,
    showAction: Boolean,
    clearTrigger: String as PropType<FieldClearTrigger>,
    shape: {
      type: String as PropType<SearchShape>,
      default: 'square',
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    leftIcon: {
      type: String,
      default: 'search',
    },
  },

  emits: ['update:modelValue', 'search', 'cancel'],

  setup(props, { emit, slots, attrs }) {
    const filedRef = ref();

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

    const focus = () => {
      if (filedRef.value) {
        filedRef.value.focus();
      }
    };

    const blur = () => {
      if (filedRef.value) {
        filedRef.value.blur();
      }
    };

    const fieldPropNames = [
      'leftIcon',
      'rightIcon',
      'clearable',
      'modelValue',
      'clearTrigger',
    ] as const;

    const renderField = () => {
      const fieldAttrs = {
        ...attrs,
        ...pick(props, fieldPropNames),
        style: null,
        class: null,
      };

      const onInput = (value: string) => {
        emit('update:modelValue', value);
      };

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
        class={[bem({ 'show-action': props.showAction }), attrs.class]}
        style={{
          background: props.background,
          ...(attrs.style as CSSProperties),
        }}
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
