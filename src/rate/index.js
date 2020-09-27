import { computed } from 'vue';

// Utils
import { addUnit, createNamespace, preventDefault } from '../utils';

// Composition
import { useRefs } from '../composition/use-refs';
import { useTouch } from '../composition/use-touch';
import { useLinkField } from '../composition/use-link-field';

// Components
import Icon from '../icon';

const [createComponent, bem] = createNamespace('rate');

function getRateStatus(value, index, allowHalf) {
  if (value >= index) {
    return 'full';
  }
  if (value + 0.5 >= index && allowHalf) {
    return 'half';
  }
  return 'void';
}

export default createComponent({
  props: {
    size: [Number, String],
    color: String,
    gutter: [Number, String],
    readonly: Boolean,
    disabled: Boolean,
    allowHalf: Boolean,
    voidColor: String,
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
    touchable: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit }) {
    let ranges;

    const touch = useTouch();
    const [itemRefs, setItemRefs] = useRefs();

    const untouchable = () =>
      props.readonly || props.disabled || !props.touchable;

    const list = computed(() => {
      const list = [];
      for (let i = 1; i <= props.count; i++) {
        list.push(getRateStatus(props.modelValue, i, props.allowHalf));
      }
      return list;
    });

    const select = (index) => {
      if (!props.disabled && !props.readonly && index !== props.modelValue) {
        emit('update:modelValue', index);
        emit('change', index);
      }
    };

    const getScoreByPosition = (x) => {
      for (let i = ranges.length - 1; i > 0; i--) {
        if (x > ranges[i].left) {
          return ranges[i].score;
        }
      }
      return props.allowHalf ? 0.5 : 1;
    };

    const onTouchStart = (event) => {
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

    const onTouchMove = (event) => {
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

    const renderStar = (status, index) => {
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
      const isFull = status === 'full';
      const isVoid = status === 'void';

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
          tabindex="0"
          aria-setsize={count}
          aria-posinset={score}
          aria-checked={String(!isVoid)}
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
        tabindex="0"
        onTouchstart={onTouchStart}
        onTouchmove={onTouchMove}
      >
        {list.value.map(renderStar)}
      </div>
    );
  },
});
