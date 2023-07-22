import {
  defineComponent,
  nextTick,
  onUnmounted,
  ref,
  watch,
  watchEffect,
  type ExtractPropTypes,
} from 'vue';
import {
  extend,
  truthProp,
  numericProp,
  createNamespace,
  getZIndexStyle,
  makeNumberProp,
  makeNumericProp,
  makeStringProp,
} from '../utils';

const [name, bem] = createNamespace('watermark');

export const watermarkProps = {
  gapX: makeNumberProp(0),
  gapY: makeNumberProp(0),
  image: String,
  width: makeNumberProp(100),
  height: makeNumberProp(100),
  rotate: makeNumericProp(-22),
  zIndex: numericProp,
  content: String,
  opacity: numericProp,
  fullPage: truthProp,
  textColor: makeStringProp('#dcdee0'),
};

export type WatermarkProps = ExtractPropTypes<typeof watermarkProps>;

export default defineComponent({
  name,

  props: watermarkProps,

  setup(props, { slots }) {
    const svgElRef = ref<HTMLDivElement>();

    const watermarkUrl = ref('');
    const imageBase64 = ref('');
    const renderWatermark = () => {
      const rotateStyle = {
        transformOrigin: 'center',
        transform: `rotate(${props.rotate}deg)`,
      };

      const svgInner = () => {
        if (props.image && !slots.content) {
          return (
            <image
              href={imageBase64.value}
              // Compatite for versions below Safari 12
              // More detail: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href
              // @ts-ignore
              xlink:href={imageBase64.value}
              x="0"
              y="0"
              width={props.width}
              height={props.height}
              style={rotateStyle}
            />
          );
        }

        return (
          <foreignObject x="0" y="0" width={props.width} height={props.height}>
            <div
              // @ts-ignore
              xmlns="http://www.w3.org/1999/xhtml"
              style={rotateStyle}
            >
              {slots.content ? (
                slots.content()
              ) : (
                <span style={{ color: props.textColor }}>{props.content}</span>
              )}
            </div>
          </foreignObject>
        );
      };

      const svgWidth = props.width + props.gapX;
      const svgHeight = props.height + props.gapY;

      return (
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          width={svgWidth}
          height={svgHeight}
          xmlns="http://www.w3.org/2000/svg"
          // xlink namespace for compatite image xlink attribute
          // @ts-ignore
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style={{
            padding: `0 ${props.gapX}px ${props.gapY}px 0`,
            opacity: props.opacity,
          }}
        >
          {svgInner()}
        </svg>
      );
    };

    const makeImageToBase64 = (url: string) => {
      const canvas = document.createElement('canvas');
      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.referrerPolicy = 'no-referrer';
      image.onload = () => {
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(image, 0, 0);
        imageBase64.value = canvas.toDataURL();
      };
      image.src = url;
    };

    const makeSvgToBlobUrl = (svgStr: string) => {
      // svg MIME type: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
      const svgBlob = new Blob([svgStr], {
        type: 'image/svg+xml',
      });
      return URL.createObjectURL(svgBlob);
    };

    watchEffect(() => {
      if (props.image) {
        makeImageToBase64(props.image);
      }
    });

    watch(
      () => [
        imageBase64.value,
        props.content,
        props.textColor,
        props.height,
        props.width,
        props.rotate,
        props.gapX,
        props.gapY,
      ],
      () => {
        /**
         * The path is the actual HTML rendered by renderWatermark
         * => convert the SVG string to a blob image
         * => put it in background-image.
         */
        nextTick(() => {
          if (svgElRef.value) {
            if (watermarkUrl.value) {
              URL.revokeObjectURL(watermarkUrl.value);
            }
            watermarkUrl.value = makeSvgToBlobUrl(svgElRef.value.innerHTML);
          }
        });
      },
      {
        immediate: true,
      },
    );

    onUnmounted(() => {
      if (watermarkUrl.value) {
        URL.revokeObjectURL(watermarkUrl.value);
      }
    });

    return () => {
      const style = extend(
        { backgroundImage: `url(${watermarkUrl.value})` },
        getZIndexStyle(props.zIndex),
      );

      return (
        <div class={bem({ full: props.fullPage })} style={style}>
          <div class={bem('wrapper')} ref={svgElRef}>
            {renderWatermark()}
          </div>
        </div>
      );
    };
  },
});
