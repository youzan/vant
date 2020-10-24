import { ref, watch, computed, PropType, CSSProperties } from 'vue';
import { isDef, addUnit, inBrowser, createNamespace } from '../utils';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('image');

export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

export default createComponent({
  props: {
    src: String,
    alt: String,
    fit: String as PropType<ImageFit>,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    radius: [Number, String],
    lazyLoad: Boolean,
    showError: {
      type: Boolean,
      default: true,
    },
    showLoading: {
      type: Boolean,
      default: true,
    },
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

    const onLoad = (event: Event) => {
      loading.value = false;
      emit('load', event);
    };

    const onError = (event: Event) => {
      error.value = true;
      loading.value = false;
      emit('error', event);
    };

    const renderLoadingIcon = () => {
      if (slots.loading) {
        return slots.loading();
      }

      return <Icon name={props.loadingIcon} class={bem('loading-icon')} />;
    };

    const renderErrorIcon = () => {
      if (slots.error) {
        return slots.error();
      }

      return <Icon name={props.errorIcon} class={bem('error-icon')} />;
    };

    const renderPlaceholder = () => {
      if (loading.value && props.showLoading && inBrowser) {
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

    return () => (
      <div class={bem({ round: props.round })} style={style.value}>
        {renderImage()}
        {renderPlaceholder()}
        {slots.default?.()}
      </div>
    );
  },

  // TODO: lazyLoad
  // created() {
  //   const { $Lazyload } = this;

  //   if ($Lazyload && inBrowser) {
  //     $Lazyload.$on('loaded', this.onLazyLoaded);
  //     $Lazyload.$on('error', this.onLazyLoadError);
  //   }
  // },

  // beforeUnmount() {
  //   const { $Lazyload } = this;

  //   if ($Lazyload) {
  //     $Lazyload.$off('loaded', this.onLazyLoaded);
  //     $Lazyload.$off('error', this.onLazyLoadError);
  //   }
  // },

  // methods: {
  // onLazyLoaded({ el }) {
  //   if (el === this.$refs.image && this.loading) {
  //     this.onLoad();
  //   }
  // },

  // onLazyLoadError({ el }) {
  //   if (el === this.$refs.image && !this.error) {
  //     this.onError();
  //   }
  // },
  // },
});
