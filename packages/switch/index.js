import { use } from '../utils';
import Loading from '../loading';
import { switchProps } from './shared';
import { emit, inherit } from '../utils/functional';

const [sfc, bem] = use('switch');

function Switch(h, props, slots, ctx) {
  const { value, loading, disabled, activeValue, inactiveValue } = props;

  const style = {
    fontSize: props.size,
    backgroundColor: value ? props.activeColor : props.inactiveColor
  };

  const onClick = event => {
    if (!disabled && !loading) {
      const newValue = value === activeValue ? inactiveValue : activeValue;
      emit(ctx, 'input', newValue);
      emit(ctx, 'change', newValue);
    }
  };

  return (
    <div
      class={bem({
        on: value === activeValue,
        disabled
      })}
      style={style}
      onClick={onClick}
      {...inherit(ctx)}
    >
      <div class={bem('node')}>
        {loading && <Loading class={bem('loading')} />}
      </div>
    </div>
  );
}

Switch.props = switchProps;

export default sfc(Switch);
