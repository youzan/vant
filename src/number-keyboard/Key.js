import { ref } from 'vue';
import { createNamespace } from '../utils';
import { useTouch } from '../composition/use-touch';
import Loading from '../loading';
import { DeleteIcon, CollapseIcon } from './Icon';

const [createComponent, bem] = createNamespace('key');

export default createComponent({
  props: {
    type: String,
    text: [Number, String],
    color: String,
    wider: Boolean,
    large: Boolean,
    loading: Boolean,
  },

  emits: ['press'],

  setup(props, { emit, slots }) {
    const active = ref(false);
    const touch = useTouch();

    const onTouchStart = (event) => {
      touch.start(event);
      active.value = true;
    };

    const onTouchMove = (event) => {
      touch.move(event);
      if (touch.direction) {
        active.value = false;
      }
    };

    const onTouchEnd = (event) => {
      if (active.value) {
        // eliminate tap delay on safari
        event.preventDefault();
        active.value = false;
        emit('press', props.text, props.type);
      }
    };

    const renderContent = () => {
      if (props.loading) {
        return <Loading class={bem('loading-icon')} />;
      }

      const text = slots.default ? slots.default() : props.text;

      switch (props.type) {
        case 'delete':
          return text || <DeleteIcon class={bem('delete-icon')} />;
        case 'extra':
          return text || <CollapseIcon class={bem('collapse-icon')} />;
        default:
          return text;
      }
    };

    return () => (
      <div
        class={bem('wrapper', { wider: props.wider })}
        onTouchstart={onTouchStart}
        onTouchmove={onTouchMove}
        onTouchend={onTouchEnd}
        onTouchcancel={onTouchEnd}
      >
        <div
          role="button"
          tabindex="0"
          class={bem([
            props.color,
            {
              large: props.large,
              active: active.value,
              delete: props.type === 'delete',
            },
          ])}
        >
          {renderContent()}
        </div>
      </div>
    );
  },
});
