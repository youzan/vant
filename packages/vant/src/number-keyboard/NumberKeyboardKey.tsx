import { ref, defineComponent, type PropType } from 'vue';
import { numericProp, createNamespace, preventDefault } from '../utils';
import { useTouch } from '../composables/use-touch';
import { Loading } from '../loading';

const [name, bem] = createNamespace('key');

const CollapseIcon = (
  <svg class={bem('collapse-icon')} viewBox="0 0 30 24">
    <path
      d="M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z"
      fill="currentColor"
    />
  </svg>
);

const DeleteIcon = (
  <svg class={bem('delete-icon')} viewBox="0 0 32 22">
    <path
      d="M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z"
      fill="currentColor"
    />
  </svg>
);

export type KeyType = '' | 'delete' | 'extra' | 'close';

export default defineComponent({
  name,

  props: {
    type: String as PropType<KeyType>,
    text: numericProp,
    color: String,
    wider: Boolean,
    large: Boolean,
    loading: Boolean,
  },

  emits: ['press'],

  setup(props, { emit, slots }) {
    const active = ref(false);
    const touch = useTouch();

    const onTouchStart = (event: TouchEvent) => {
      touch.start(event);
      active.value = true;
    };

    const onTouchMove = (event: TouchEvent) => {
      touch.move(event);

      if (touch.direction.value) {
        active.value = false;
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (active.value) {
        // eliminate tap delay on safari
        // see: https://github.com/vant-ui/vant/issues/6836
        if (!slots.default) {
          preventDefault(event);
        }
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
          return text || DeleteIcon;
        case 'extra':
          return text || CollapseIcon;
        default:
          return text;
      }
    };

    return () => (
      <div
        class={bem('wrapper', { wider: props.wider })}
        onTouchstartPassive={onTouchStart}
        onTouchmovePassive={onTouchMove}
        onTouchend={onTouchEnd}
        onTouchcancel={onTouchEnd}
      >
        <div
          role="button"
          tabindex={0}
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
