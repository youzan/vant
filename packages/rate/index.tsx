/* eslint-disable prefer-spread */
import { use } from '../utils';
import { emit, inherit } from '../utils/functional';
import Icon from '../icon';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';

const [sfc, bem] = use('rate');

export type RateProps = {
  size: number;
  icon: string;
  count: number;
  color: string;
  value: number;
  voidIcon: string;
  voidColor: string;
  readonly?: boolean;
  disabled?: boolean;
  disabledColor: string;
};

export type RateEvents = {
  input(index: number): void;
  change(index: number): void;
}

function Rate(
  h: CreateElement,
  props: RateProps,
  slots: DefaultSlots,
  ctx: RenderContext<RateProps>
) {
  const list = [];
  for (let i = 0; i < props.count; i++) {
    list.push(i < props.value);
  }

  const onSelect = (index: number) => {
    if (!props.disabled && !props.readonly) {
      emit(ctx, 'input', index + 1);
      emit(ctx, 'change', index + 1);
    }
  };

  const onTouchMove = (event: TouchEvent) => {
    if (!document.elementFromPoint) {
      return;
    }

    event.preventDefault();
    const { clientX, clientY } = event.touches[0];
    const target = document.elementFromPoint(clientX, clientY) as HTMLElement;
    if (target && target.dataset) {
      const { index } = target.dataset;

      /* istanbul ignore else */
      if (index) {
        onSelect(+index);
      }
    }
  };

  return (
    <div class={bem()} {...inherit(ctx)} onTouchmove={onTouchMove}>
      {list.map((full, index) => (
        <Icon
          key={index}
          class={bem('item')}
          size={`${props.size}px`}
          data-index={index}
          name={full ? props.icon : props.voidIcon}
          color={
            props.disabled
              ? props.disabledColor
              : full
                ? props.color
                : props.voidColor
          }
          onClick={() => {
            onSelect(index);
          }}
        />
      ))}
    </div>
  );
}

Rate.props = {
  value: Number,
  readonly: Boolean,
  disabled: Boolean,
  size: {
    type: Number,
    default: 20
  },
  icon: {
    type: String,
    default: 'star'
  },
  voidIcon: {
    type: String,
    default: 'star-o'
  },
  color: {
    type: String,
    default: '#ffd21e'
  },
  voidColor: {
    type: String,
    default: '#c7c7c7'
  },
  disabledColor: {
    type: String,
    default: '#bdbdbd'
  },
  count: {
    type: Number,
    default: 5
  }
};

export default sfc<RateProps, RateEvents>(Rate);
