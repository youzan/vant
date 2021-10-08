import { computed, defineComponent } from 'vue';

// Utils
import {
  addUnit,
  truthProp,
  numericProp,
  preventDefault,
  makeStringProp,
  makeNumberProp,
  makeNumericProp,
  createNamespace,
} from '../utils';

// Composables
import { useRect, useCustomFieldValue } from '@vant/use';
import { useRefs } from '../composables/use-refs';
import { useTouch } from '../composables/use-touch';

// Components
import { Icon } from '../icon';

const [name, bem] = createNamespace('rate');

type RateStatus = 'full' | 'half' | 'void';

type RateListItem = {
  value: number;
  status: RateStatus;
};

function getRateStatus(
  value: number,
  index: number,
  allowHalf: boolean,
  readonly: boolean
): RateListItem {
  if (value >= index) {
    return { status: 'full', value: 1 };
  }

  if (value + 0.5 >= index && allowHalf && !readonly) {
    return { status: 'half', value: 0.5 };
  }

  if (value + 1 >= index && allowHalf && readonly) {
    const cardinal = 10 ** 10;
    return {
      status: 'half',
      value: Math.round((value - index + 1) * cardinal) / cardinal,
    };
  }

  return { status: 'void', value: 0 };
}

export default defineComponent({
  name,

  props: {
    size: numericProp,
    icon: makeStringProp('star'),
    color: String,
    count: makeNumericProp(5),
    gutter: numericProp,
    readonly: Boolean,
    disabled: Boolean,
    voidIcon: makeStringProp('star-o'),
    allowHalf: Boolean,
    voidColor: String,
    touchable: truthProp,
    iconPrefix: String,
    modelValue: makeNumberProp(0),
    disabledColor: String,
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit }) {
    const touch = useTouch();
    const [itemRefs, setItemRefs] = useRefs();

    const untouchable = () =>
      props.readonly || props.disabled || !props.touchable;

    const list = computed<RateListItem[]>(() =>
      Array(+props.count)
        .fill('')
        .map((_, i) =>
          getRateStatus(
            props.modelValue,
            i + 1,
            props.allowHalf,
            props.readonly
          )
        )
    );

    let ranges: Array<{ left: number; score: number }>;

    const updateRanges = () => {
      const rects = itemRefs.value.map(useRect);

      ranges = [];
      rects.forEach((rect, index) => {
        if (props.allowHalf) {
          ranges.push(
            { score: index + 0.5, left: rect.left },
            { score: index + 1, left: rect.left + rect.width / 2 }
          );
        } else {
          ranges.push({ score: index + 1, left: rect.left });
        }
      });
    };

    const getScoreByPosition = (x: number) => {
      for (let i = ranges.length - 1; i > 0; i--) {
        if (x > ranges[i].left) {
          return ranges[i].score;
        }
      }
      return props.allowHalf ? 0.5 : 1;
    };

    const select = (index: number) => {
      if (!props.disabled && !props.readonly && index !== props.modelValue) {
        emit('update:modelValue', index);
        emit('change', index);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      if (untouchable()) {
        return;
      }

      touch.start(event);
      updateRanges();
    };

    const onTouchMove = (event: TouchEvent) => {
      if (untouchable()) {
        return;
      }

      touch.move(event);

      if (touch.isHorizontal()) {
        const { clientX } = event.touches[0];
        preventDefault(event);
        select(getScoreByPosition(clientX));
      }
    };

    const renderStar = (item: RateListItem, index: number) => {
      const {
        icon,
        size,
        color,
        count,
        gutter,
        voidIcon,
        disabled,
        voidColor,
        allowHalf,
        iconPrefix,
        disabledColor,
      } = props;
      const score = index + 1;
      const isFull = item.status === 'full';
      const isVoid = item.status === 'void';
      const renderHalf = allowHalf && item.value > 0 && item.value < 1;

      let style;
      if (gutter && score !== +count) {
        style = {
          paddingRight: addUnit(gutter),
        };
      }

      const onClickItem = (event: MouseEvent) => {
        updateRanges();
        select(allowHalf ? getScoreByPosition(event.clientX) : score);
      };

      return (
        <div
          key={index}
          ref={setItemRefs(index)}
          role="radio"
          style={style}
          class={bem('item')}
          tabindex={0}
          aria-setsize={+count}
          aria-posinset={score}
          aria-checked={!isVoid}
          onClick={onClickItem}
        >
          <Icon
            size={size}
            name={isFull ? icon : voidIcon}
            class={bem('icon', { disabled, full: isFull })}
            color={disabled ? disabledColor : isFull ? color : voidColor}
            classPrefix={iconPrefix}
          />
          {renderHalf && (
            <Icon
              size={size}
              style={{ width: item.value + 'em' }}
              name={isVoid ? voidIcon : icon}
              class={bem('icon', ['half', { disabled, full: !isVoid }])}
              color={disabled ? disabledColor : isVoid ? voidColor : color}
              classPrefix={iconPrefix}
            />
          )}
        </div>
      );
    };

    useCustomFieldValue(() => props.modelValue);

    return () => (
      <div
        role="radiogroup"
        class={bem({
          readonly: props.readonly,
          disabled: props.disabled,
        })}
        tabindex={0}
        onTouchstart={onTouchStart}
        onTouchmove={onTouchMove}
      >
        {list.value.map(renderStar)}
      </div>
    );
  },
});
