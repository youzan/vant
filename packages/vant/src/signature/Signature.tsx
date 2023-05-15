import {
  ref,
  reactive,
  onMounted,
  nextTick,
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

    const state = reactive({
      width: 0,
      height: 0,
      ctx: null as CanvasRenderingContext2D | null | undefined,
      ratio: inBrowser ? window.devicePixelRatio : 1,
    });

    let canvasRect: DOMRect;
    const isRenderCanvas = inBrowser ? hasCanvasSupport() : true;

    const touchStart = () => {
      if (!state.ctx) {
        return false;
      }

      state.ctx.beginPath();
      state.ctx.lineWidth = props.lineWidth * state.ratio;
      state.ctx.strokeStyle = props.penColor;
      canvasRect = useRect(canvasRef);

      emit('start');
    };

    const touchMove = (event: TouchEvent) => {
      if (!state.ctx) {
        return false;
      }

      preventDefault(event);

      const touch = event.touches[0];
      const mouseX = (touch.clientX - (canvasRect?.left || 0)) * state.ratio;
      const mouseY = (touch.clientY - (canvasRect?.top || 0)) * state.ratio;

      state.ctx.lineCap = 'round';
      state.ctx.lineJoin = 'round';
      state.ctx?.lineTo(mouseX, mouseY);
      state.ctx?.stroke();

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
      return canvas.toDataURL() === empty.toDataURL();
    };

    const setCanvasBgColor = () => {
      if (state.ctx && props.backgroundColor) {
        state.ctx.fillStyle = props.backgroundColor;
        state.ctx.fillRect(0, 0, state.width, state.height);
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
      if (state.ctx) {
        state.ctx.clearRect(0, 0, state.width, state.height);
        state.ctx.closePath();
        setCanvasBgColor();
      }
      emit('clear');
    };

    onMounted(() => {
      if (isRenderCanvas) {
        state.ctx = canvasRef.value?.getContext('2d');
        state.width = (wrapRef.value?.offsetWidth || 0) * state.ratio;
        state.height = (wrapRef.value?.offsetHeight || 0) * state.ratio;

        // ensure canvas is rendered
        nextTick(() => {
          setCanvasBgColor();
        });
      }
    });

    return () => (
      <div class={bem()}>
        <div class={bem('content')} ref={wrapRef}>
          {isRenderCanvas ? (
            <canvas
              ref={canvasRef}
              width={state.width}
              height={state.height}
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
