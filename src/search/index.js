// Utils
import { createNamespace } from '../utils';
import { preventDefault } from '../utils/dom/event';

// Components
import Field from '../field';

const [createComponent, bem, t] = createNamespace('search');

export default createComponent({
  inheritAttrs: false,

  props: {
    label: String,
    rightIcon: String,
    modelValue: String,
    actionText: String,
    background: String,
    showAction: Boolean,
    clearTrigger: String,
    shape: {
      type: String,
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

  emits: ['search', 'cancel', 'keypress'],

  setup(props, { emit, slots }) {
    return function () {
      function Label() {
        if (slots.label || props.label) {
          return (
            <div class={bem('label')}>
              {slots.label ? slots.label() : props.label}
            </div>
          );
        }
      }

      function Action() {
        if (!props.showAction) {
          return;
        }

        function onCancel() {
          if (slots.action) {
            return;
          }

          emit('update:modelValue', '');
          emit('cancel');
        }

        return (
          <div
            class={bem('action')}
            role="button"
            tabindex="0"
            onClick={onCancel}
          >
            {slots.action ? slots.action() : props.actionText || t('cancel')}
          </div>
        );
      }

      const fieldData = {
        ...this.$attrs,
        onKeypress(event) {
          // press enter
          if (event.keyCode === 13) {
            preventDefault(event);
            emit('search', props.modelValue);
          }
          emit('keypress', event);
        },
      };

      return (
        <div
          class={bem({ 'show-action': props.showAction })}
          style={{ background: props.background }}
        >
          {slots.left?.()}
          <div class={bem('content', props.shape)}>
            {Label()}
            <Field
              v-slots={{
                'left-icon': slots['left-icon'],
                'right-icon': slots['right-icon'],
              }}
              type="search"
              border={false}
              leftIcon={props.leftIcon}
              rightIcon={props.rightIcon}
              clearable={props.clearable}
              modelValue={props.modelValue}
              clearTrigger={props.clearTrigger}
              {...fieldData}
            />
          </div>
          {Action()}
        </div>
      );
    };
  },
});
