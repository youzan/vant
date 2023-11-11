import { ref, computed, defineComponent, type PropType } from 'vue';
import {
  extend,
  addUnit,
  truthProp,
  numericProp,
  unknownProp,
  makeRequiredProp,
  type Numeric,
} from '../utils';
import { Icon } from '../icon';

import type { RadioShape } from '../radio';

export type CheckerShape = 'square' | 'round';
export type CheckerDirection = 'horizontal' | 'vertical';
export type CheckerLabelPosition = 'left' | 'right';
export type CheckerParent = {
  props: {
    max?: Numeric;
    shape?: CheckerShape | RadioShape;
    disabled?: boolean;
    iconSize?: Numeric;
    direction?: CheckerDirection;
    modelValue?: unknown | unknown[];
    checkedColor?: string;
  };
};

export const checkerProps = {
  name: unknownProp,
  disabled: Boolean,
  iconSize: numericProp,
  modelValue: unknownProp,
  checkedColor: String,
  labelPosition: String as PropType<CheckerLabelPosition>,
  labelDisabled: Boolean,
};

export default defineComponent({
  props: extend({}, checkerProps, {
    bem: makeRequiredProp(Function),
    role: String,
    shape: String as PropType<CheckerShape | RadioShape>,
    parent: Object as PropType<CheckerParent | null>,
    checked: Boolean,
    bindGroup: truthProp,
    indeterminate: {
      type: Boolean as PropType<boolean | null>,
      default: null,
    },
  }),

  emits: ['click', 'toggle'],

  setup(props, { emit, slots }) {
    const iconRef = ref<HTMLElement>();

    const getParentProp = <T extends keyof CheckerParent['props']>(name: T) => {
      if (props.parent && props.bindGroup) {
        return props.parent.props[name];
      }
    };

    const disabled = computed(() => {
      if (props.parent && props.bindGroup) {
        const disabled = getParentProp('disabled') || props.disabled;

        if (props.role === 'checkbox') {
          const checkedCount = (getParentProp('modelValue') as unknown[])
            .length;
          const max = getParentProp('max');
          const overlimit = max && checkedCount >= +max;

          return disabled || (overlimit && !props.checked);
        }

        return disabled;
      }

      return props.disabled;
    });

    const direction = computed(() => getParentProp('direction'));

    const iconStyle = computed(() => {
      const checkedColor = props.checkedColor || getParentProp('checkedColor');

      if (checkedColor && props.checked && !disabled.value) {
        return {
          borderColor: checkedColor,
          backgroundColor: checkedColor,
        };
      }
    });

    const shape = computed(() => {
      return props.shape || getParentProp('shape') || 'round';
    });

    const onClick = (event: MouseEvent) => {
      const { target } = event;
      const icon = iconRef.value;
      const iconClicked = icon === target || icon?.contains(target as Node);

      if (!disabled.value && (iconClicked || !props.labelDisabled)) {
        emit('toggle');
      }
      emit('click', event);
    };

    const renderIcon = () => {
      const { bem, checked, indeterminate } = props;
      const iconSize = props.iconSize || getParentProp('iconSize');

      return (
        <div
          ref={iconRef}
          class={bem('icon', [
            shape.value,
            { disabled: disabled.value, checked, indeterminate },
          ])}
          style={
            shape.value !== 'dot'
              ? { fontSize: addUnit(iconSize) }
              : {
                  width: addUnit(iconSize),
                  height: addUnit(iconSize),
                  borderColor: iconStyle.value?.borderColor,
                }
          }
        >
          {slots.icon ? (
            slots.icon({ checked, disabled: disabled.value })
          ) : shape.value !== 'dot' ? (
            <Icon
              name={indeterminate ? 'minus' : 'success'}
              style={iconStyle.value}
            />
          ) : (
            <div
              class={bem('icon--dot__icon')}
              style={{ backgroundColor: iconStyle.value?.backgroundColor }}
            ></div>
          )}
        </div>
      );
    };

    const renderLabel = () => {
      const { checked } = props;

      if (slots.default) {
        return (
          <span
            class={props.bem('label', [
              props.labelPosition,
              { disabled: disabled.value },
            ])}
          >
            {slots.default({ checked, disabled: disabled.value })}
          </span>
        );
      }
    };

    return () => {
      const nodes: (JSX.Element | undefined)[] =
        props.labelPosition === 'left'
          ? [renderLabel(), renderIcon()]
          : [renderIcon(), renderLabel()];

      return (
        <div
          role={props.role}
          class={props.bem([
            {
              disabled: disabled.value,
              'label-disabled': props.labelDisabled,
            },
            direction.value,
          ])}
          tabindex={disabled.value ? undefined : 0}
          aria-checked={props.checked}
          onClick={onClick}
        >
          {nodes}
        </div>
      );
    };
  },
});
