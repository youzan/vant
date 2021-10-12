import { ref, defineComponent, ExtractPropTypes } from 'vue';

// Utils
import {
  pick,
  extend,
  truthProp,
  preventDefault,
  makeStringProp,
  createNamespace,
} from '../utils';
import { fieldSharedProps } from '../field/Field';

// Composables
import { useExpose } from '../composables/use-expose';

// Components
import { Field, FieldInstance } from '../field';

// Types
import type { SearchShape } from './types';

const [name, bem, t] = createNamespace('search');

const props = extend({}, fieldSharedProps, {
  label: String,
  shape: makeStringProp<SearchShape>('square'),
  leftIcon: makeStringProp('search'),
  clearable: truthProp,
  actionText: String,
  background: String,
  showAction: Boolean,
});

export type SearchProps = ExtractPropTypes<typeof props>;

export default defineComponent({
  name,

  props,

  emits: ['search', 'cancel', 'update:modelValue'],

  setup(props, { emit, slots, attrs }) {
    const filedRef = ref<FieldInstance>();

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
          <label class={bem('label')} for={props.id}>
            {slots.label ? slots.label() : props.label}
          </label>
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

    const fieldPropNames = Object.keys(fieldSharedProps) as Array<
      keyof typeof fieldSharedProps
    >;

    const renderField = () => {
      const fieldAttrs = extend({}, attrs, pick(props, fieldPropNames));

      const onInput = (value: string) => emit('update:modelValue', value);

      return (
        <Field
          v-slots={pick(slots, ['left-icon', 'right-icon'])}
          ref={filedRef}
          type="search"
          class={bem('field')}
          border={false}
          onKeypress={onKeypress}
          onUpdate:modelValue={onInput}
          {...fieldAttrs}
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
