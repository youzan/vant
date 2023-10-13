import {
  computed,
  ref,
  onMounted,
  defineComponent,
  type ExtractPropTypes,
} from 'vue';
import {
  inBrowser,
  makeNumberProp,
  makeStringProp,
  createNamespace,
  preventDefault,
} from '../utils';
import { useRect } from '@vant/use';
import { Button } from '../button';

const [name, bem, t] = createNamespace('signature');

export const signatureProps = {
  tips: String,
  type: makeStringProp('png'),
  penColor: makeStringProp('#000'),
  lineWidth: makeNumberProp(3),
  clearButtonText: String,
  backgroundColor: makeStringProp(''),
  confirmButtonText: String,
};

export type SignatureProps = ExtractPropTypes<typeof signatureProps>;

const hasCanvasSupport = () => {
  const canvas = document.createElement('canvas');
  return !!canvas.getContext?.('2d');
};

export default defineComponent({
  name,

  props: signatureProps,

  emits: ['submit', 'clear', 'start', 'end', 'signing'],

  setup(props, { emit }) {
    const canvasRef = ref<HTMLCanvasElement>();
    const wrapRef = ref<HTMLElement>();
    const ctx = computed(() => {
      if (!canvasRef.value) return null;
      return canvasRef.value.getContext('2d');
    });
    const isRenderCanvas = inBrowser ? hasCanvasSupport() : true;
    const ratio = inBrowser ? window.devicePixelRatio : 1;

    let canvasWidth = 0;
    let canvasHeight = 0;
    let canvasRect: DOMRect;

    const touchStart = () => {
      if (!ctx.value) {
        return false;
      }

      ctx.value.beginPath();
      ctx.value.lineWidth = props.lineWidth * ratio;
      ctx.value.strokeStyle = props.penColor;
      canvasRect = useRect(canvasRef);

      emit('start');
    };

    const touchMove = (event: TouchEvent) => {
      if (!ctx.value) {
        return false;
      }

      preventDefault(event);

      const touch = event.touches[0];
      const mouseX = (touch.clientX - (canvasRect?.left || 0)) * ratio;
      const mouseY = (touch.clientY - (canvasRect?.top || 0)) * ratio;

      ctx.value.lineCap = 'round';
      ctx.value.lineJoin = 'round';
      ctx.value.lineTo(mouseX, mouseY);
      ctx.value.stroke();

      emit('signing', event);
    };

    const touchEnd = (event: TouchEvent) => {
      preventDefault(event);
      emit('end');
    };

    const isCanvasEmpty = (canvas: HTMLCanvasElement) => {
      const empty = document.createElement('canvas');
      empty.width = canvas.width;
      empty.height = canvas.height;
      if (props.backgroundColor) {
        const emptyCtx = empty.getContext('2d');
        setCanvasBgColor(emptyCtx);
      }
      return canvas.toDataURL() === empty.toDataURL();
    };

    const setCanvasBgColor = (
      ctx: CanvasRenderingContext2D | null | undefined,
    ) => {
      if (ctx && props.backgroundColor) {
        ctx.fillStyle = props.backgroundColor;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      }
    };

    const submit = () => {
      const canvas = canvasRef.value;
      if (!canvas) {
        return;
      }

      const isEmpty = isCanvasEmpty(canvas);

      const image: string = isEmpty
        ? ''
        : (
            {
              jpg: (): string => canvas.toDataURL('image/jpeg', 0.8),
              jpeg: (): string => canvas.toDataURL('image/jpeg', 0.8),
            }[props.type] as () => string
          )?.() || canvas.toDataURL(`image/${props.type}`);

      emit('submit', {
        image,
        canvas,
      });
    };

    const clear = () => {
      if (ctx.value) {
        ctx.value.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.value.closePath();
        setCanvasBgColor(ctx.value);
      }
      emit('clear');
    };

    onMounted(() => {
      if (isRenderCanvas && canvasRef.value) {
        const canvas = canvasRef.value;
        canvasWidth = canvas.width = (wrapRef.value?.offsetWidth || 0) * ratio;
        canvasHeight = canvas.height =
          (wrapRef.value?.offsetHeight || 0) * ratio;
        setCanvasBgColor(ctx.value);
      }
    });

    return () => (
      <div class={bem()}>
        <div class={bem('content')} ref={wrapRef}>
          {isRenderCanvas ? (
            <canvas
              ref={canvasRef}
              onTouchstartPassive={touchStart}
              onTouchmove={touchMove}
              onTouchend={touchEnd}
            />
          ) : (
            <p>{props.tips}</p>
          )}
        </div>
        <div class={bem('footer')}>
          <Button size="small" onClick={clear}>
            {props.clearButtonText || t('clear')}
          </Button>
          <Button type="primary" size="small" onClick={submit}>
            {props.confirmButtonText || t('confirm')}
          </Button>
        </div>
      </div>
    );
  },
});
