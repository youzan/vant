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
  createNamespace,
  makeNumberProp,
  makeNumericProp,
  makeStringProp,
} from '../utils';

const [name, bem] = createNamespace('watermark');

export const watermarkProps = {
  width: makeNumberProp(100),
  height: makeNumberProp(100),
  rotate: makeNumericProp(-22),
  zIndex: makeNumberProp(1),
  content: String,
  image: String,
  fullPage: Boolean,
  gapX: makeNumberProp(0),
  gapY: makeNumberProp(0),
  fontColor: makeStringProp('#323233'),
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
      const svgInner = () => {
        if (props.image) {
          return (
            <image
              href={imageBase64.value}
              x="0"
              y="0"
              width={props.width}
              height={props.height}
              style={{
                transformOrigin: 'center',
                transform: `rotate(${props.rotate}deg)`,
              }}
            ></image>
          );
        }

        return (
          <foreignObject x="0" y="0" width={props.width} height={props.height}>
            <div
              // @ts-ignore
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                transform: `rotate(${props.rotate}deg)`,
              }}
            >
              {props.content ? (
                <span
                  style={{
                    color: props.fontColor,
                  }}
                >
                  {props.content}
                </span>
              ) : (
                slots?.default?.()
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
          style={{
            padding: `0 ${props.gapX}px ${props.gapY}px 0`,
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
      const svgBlob = new Blob([svgStr], {
        type: 'image/svg+xml;charset=utf-8',
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
        props.fontColor,
        props.height,
        props.width,
        props.rotate,
        props.gapX,
        props.gapY,
      ],
      () => {
        // 路径为 renderWatermark渲染的实际HTML => SVG字符串转换为blob图片 => 放到background-image中。
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
      }
    );

    onUnmounted(() => {
      if (watermarkUrl.value) {
        URL.revokeObjectURL(watermarkUrl.value);
      }
    });

    return () => (
      <div
        class={bem()}
        style={{
          position: props.fullPage ? 'fixed' : 'absolute',
          backgroundImage: `url(${watermarkUrl.value})`,
          zIndex: props.zIndex,
        }}
      >
        <div style={{ display: 'none' }} ref={svgElRef}>
          {renderWatermark()}
        </div>
      </div>
    );
  },
});
