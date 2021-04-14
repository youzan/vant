import { computed, defineComponent } from 'vue';

// Utils
import { addUnit, truthProp, createNamespace, preventDefault } from '../utils';

// Composables
import { useRefs } from '../composables/use-refs';
import { useTouch } from '../composables/use-touch';
import { useLinkField } from '../composables/use-link-field';

// Components
import { Icon } from '../icon';

const [name, bem] = createNamespace('rate');

type RateStatus = 'full' | 'half' | 'void';

type RateListItem = {
  status: RateStatus;
  value: number;
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
    size: [Number, String],
    color: String,
    gutter: [Number, String],
    readonly: Boolean,
    disabled: Boolean,
    allowHalf: Boolean,
    voidColor: String,
    touchable: truthProp,
    iconPrefix: String,
    disabledColor: String,
    modelValue: {
      type: Number,
      default: 0,
    },
    icon: {
      type: String,
      default: 'star',
    },
    voidIcon: {
      type: String,
      default: 'star-o',
    },
    count: {
      type: [Number, String],
      default: 5,
    },
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit }) {
    let ranges: Array<{ left: number; score: number }>;

    const touch = useTouch();
    const [itemRefs, setItemRefs] = useRefs();

    const untouchable = () =>
      props.readonly || props.disabled || !props.touchable;

    const list = computed<RateListItem[]>(() =>
      Array(props.count)
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

    const select = (index: number) => {
      if (!props.disabled && !props.readonly && index !== props.modelValue) {
        emit('update:modelValue', index);
        emit('change', index);
      }
    };

    const getScoreByPosition = (x: number) => {
      for (let i = ranges.length - 1; i > 0; i--) {
        if (x > ranges[i].left) {
          return ranges[i].score;
        }
      }
      return props.allowHalf ? 0.5 : 1;
    };

    const onTouchStart = (event: TouchEvent) => {
      if (untouchable()) {
        return;
      }

      touch.start(event);

      const rects = itemRefs.value.map((item) => item.getBoundingClientRect());

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

      let style;
      if (gutter && score !== +count) {
        style = {
          paddingRight: addUnit(gutter),
        };
      }

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
        >
          <Icon
            size={size}
            name={isFull ? icon : voidIcon}
            class={bem('icon', { disabled, full: isFull })}
            color={disabled ? disabledColor : isFull ? color : voidColor}
            classPrefix={iconPrefix}
            data-score={score}
            onClick={() => {
              select(score);
            }}
          />
          {allowHalf && (
            <Icon
              size={size}
              style={{ width: item.value + 'em' }}
              name={isVoid ? voidIcon : icon}
              class={bem('icon', ['half', { disabled, full: !isVoid }])}
              color={disabled ? disabledColor : isVoid ? voidColor : color}
              classPrefix={iconPrefix}
              data-score={score - 0.5}
              onClick={() => {
                select(score - 0.5);
              }}
            />
          )}
        </div>
      );
    };

    useLinkField(() => props.modelValue);

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
