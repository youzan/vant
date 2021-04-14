import {
  ref,
  watch,
  computed,
  PropType,
  CSSProperties,
  onBeforeUnmount,
  defineComponent,
  getCurrentInstance,
} from 'vue';

// Utils
import {
  isDef,
  addUnit,
  inBrowser,
  truthProp,
  createNamespace,
  ComponentInstance,
} from '../utils';

// Components
import { Icon } from '../icon';

const [name, bem] = createNamespace('image');

export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

export default defineComponent({
  name,

  props: {
    src: String,
    alt: String,
    fit: String as PropType<ImageFit>,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    radius: [Number, String],
    lazyLoad: Boolean,
    iconSize: [Number, String],
    showError: truthProp,
    iconPrefix: String,
    showLoading: truthProp,
    errorIcon: {
      type: String,
      default: 'photo-fail',
    },
    loadingIcon: {
      type: String,
      default: 'photo',
    },
  },

  emits: ['load', 'error'],

  setup(props, { emit, slots }) {
    const error = ref(false);
    const loading = ref(true);
    const imageRef = ref<HTMLElement>();

    // TODO: types
    const { $Lazyload } = getCurrentInstance()!.proxy as ComponentInstance;

    const style = computed(() => {
      const style: CSSProperties = {};

      if (isDef(props.width)) {
        style.width = addUnit(props.width);
      }

      if (isDef(props.height)) {
        style.height = addUnit(props.height);
      }

      if (isDef(props.radius)) {
        style.overflow = 'hidden';
        style.borderRadius = addUnit(props.radius);
      }

      return style;
    });

    watch(
      () => props.src,
      () => {
        error.value = false;
        loading.value = true;
      }
    );

    const onLoad = (event?: Event) => {
      loading.value = false;
      emit('load', event);
    };

    const onError = (event?: Event) => {
      error.value = true;
      loading.value = false;
      emit('error', event);
    };

    const renderLoadingIcon = () => {
      if (slots.loading) {
        return slots.loading();
      }

      return (
        <Icon
          size={props.iconSize}
          name={props.loadingIcon}
          class={bem('loading-icon')}
          classPrefix={props.iconPrefix}
        />
      );
    };

    const renderErrorIcon = () => {
      if (slots.error) {
        return slots.error();
      }

      return (
        <Icon
          size={props.iconSize}
          name={props.errorIcon}
          class={bem('error-icon')}
          classPrefix={props.iconPrefix}
        />
      );
    };

    const renderPlaceholder = () => {
      if (loading.value && props.showLoading) {
        return <div class={bem('loading')}>{renderLoadingIcon()}</div>;
      }
      if (error.value && props.showError) {
        return <div class={bem('error')}>{renderErrorIcon()}</div>;
      }
    };

    const renderImage = () => {
      if (error.value || !props.src) {
        return;
      }

      const attrs = {
        alt: props.alt,
        class: bem('img'),
        style: {
          objectFit: props.fit,
        },
      };

      if (props.lazyLoad) {
        return <img ref={imageRef} v-lazy={props.src} {...attrs} />;
      }

      return (
        <img src={props.src} onLoad={onLoad} onError={onError} {...attrs} />
      );
    };

    const onLazyLoaded = ({ el }: { el: HTMLElement }) => {
      if (el === imageRef.value && loading.value) {
        onLoad();
      }
    };

    const onLazyLoadError = ({ el }: { el: HTMLElement }) => {
      if (el === imageRef.value && !error.value) {
        onError();
      }
    };

    if ($Lazyload && inBrowser) {
      $Lazyload.$on('loaded', onLazyLoaded);
      $Lazyload.$on('error', onLazyLoadError);

      onBeforeUnmount(() => {
        $Lazyload.$off('loaded', onLazyLoaded);
        $Lazyload.$off('error', onLazyLoadError);
      });
    }

    return () => (
      <div class={bem({ round: props.round })} style={style.value}>
        {renderImage()}
        {renderPlaceholder()}
        {slots.default?.()}
      </div>
    );
  },
});
