import { use } from '../utils';
import { BLUE, GRAY_DARK } from '../utils/color';
import { switchProps, SharedSwitchProps } from './shared';
import { emit, inherit } from '../utils/functional';
import Loading from '../loading';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type SwitchEvents = {
  onChange?(checked: boolean): void;
};

const [sfc, bem] = use('switch');

function Switch(
  h: CreateElement,
  props: SharedSwitchProps,
  slots: DefaultSlots,
  ctx: RenderContext<SharedSwitchProps>
) {
  const {
    size,
    value,
    loading,
    disabled,
    activeColor,
    activeValue,
    inactiveColor,
    inactiveValue
  } = props;

  const checked = value === activeValue;

  const switchStyle = {
    fontSize: size,
    backgroundColor: value ? activeColor : inactiveColor
  };

  const loadingColor = value ? activeColor || BLUE : inactiveColor || GRAY_DARK;

  function onClick() {
    if (!disabled && !loading) {
      const newValue = checked ? inactiveValue : activeValue;
      emit(ctx, 'input', newValue);
      emit(ctx, 'change', newValue);
    }
  }

  return (
    <div
      class={bem({
        on: checked,
        disabled
      })}
      role="switch"
      style={switchStyle}
      aria-checked={String(checked)}
      onClick={onClick}
      {...inherit(ctx)}
    >
      <div class={bem('node')}>
        {loading && <Loading class={bem('loading')} color={loadingColor} />}
      </div>
    </div>
  );
}

Switch.props = switchProps;

export default sfc<SharedSwitchProps, SwitchEvents>(Switch);
