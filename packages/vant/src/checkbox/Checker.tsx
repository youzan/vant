import { ref, computed, PropType, defineComponent } from 'vue';
import {
  extend,
  addUnit,
  truthProp,
  numericProp,
  unknownProp,
  makeStringProp,
  makeRequiredProp,
} from '../utils';
import { Icon } from '../icon';

export type CheckerShape = 'square' | 'round';
export type CheckerDirection = 'horizontal' | 'vertical';
export type CheckerLabelPosition = 'left' | 'right';
export type CheckerParent = {
  props: {
    disabled?: boolean;
    iconSize?: number | string;
    direction?: CheckerDirection;
    checkedColor?: string;
  };
};

export const checkerProps = {
  name: unknownProp,
  shape: makeStringProp<CheckerShape>('round'),
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
    parent: Object as PropType<CheckerParent | null>,
    checked: Boolean,
    bindGroup: truthProp,
  }),

  emits: ['click', 'toggle'],

  setup(props, { emit, slots }) {
    const iconRef = ref<HTMLElement>();

    const getParentProp = <T extends keyof CheckerParent['props']>(name: T) => {
      if (props.parent && props.bindGroup) {
        return props.parent.props[name];
      }
    };

    const disabled = computed(
      () => getParentProp('disabled') || props.disabled
    );

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
      const { bem, shape, checked } = props;
      const iconSize = props.iconSize || getParentProp('iconSize');

      return (
        <div
          ref={iconRef}
          class={bem('icon', [shape, { disabled: disabled.value, checked }])}
          style={{ fontSize: addUnit(iconSize) }}
        >
          {slots.icon ? (
            slots.icon({ checked, disabled: disabled.value })
          ) : (
            <Icon name="success" style={iconStyle.value} />
          )}
        </div>
      );
    };

    const renderLabel = () => {
      if (slots.default) {
        return (
          <span
            class={props.bem('label', [
              props.labelPosition,
              { disabled: disabled.value },
            ])}
          >
            {slots.default()}
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
          tabindex={disabled.value ? -1 : 0}
          aria-checked={props.checked}
          onClick={onClick}
        >
          {nodes}
        </div>
      );
    };
  },
});
