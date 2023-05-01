import {
  ref,
  reactive,
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
  type: makeStringProp('png'),
  lineWidth: makeNumberProp(3),
  penColor: makeStringProp('#000'),
  tips: String,
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
    });

    let canvasRect: DOMRect;
    const isRenderCanvas = inBrowser ? hasCanvasSupport() : true;

    const touchStart = () => {
      if (!state.ctx) {
        return false;
      }

      state.ctx.beginPath();
      state.ctx.lineWidth = props.lineWidth;
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
      const mouseX = touch.clientX - (canvasRect?.left || 0);
      const mouseY = touch.clientY - (canvasRect?.top || 0);

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

    const submit = () => {
      const canvas = canvasRef.value;
      if (!canvas) {
        return;
      }

      const isEmpty = isCanvasEmpty(canvas);
      const filePath = isEmpty
        ? ''
        : canvas.toDataURL(
            `image/${props.type}`,
            props.type === 'jpg' ? 0.9 : null
          );

      emit('submit', {
        canvas: isEmpty ? null : canvas,
        filePath,
      });
    };

    const clear = () => {
      if (state.ctx) {
        state.ctx.clearRect(0, 0, state.width, state.height);
        state.ctx.closePath();
      }
      emit('clear');
    };

    onMounted(() => {
      if (isRenderCanvas) {
        state.ctx = canvasRef.value?.getContext('2d');
        state.width = wrapRef.value?.offsetWidth || 0;
        state.height = wrapRef.value?.offsetHeight || 0;
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
            {t('cancel')}
          </Button>
          <Button type="primary" size="small" onClick={submit}>
            {t('confirm')}
          </Button>
        </div>
      </div>
    );
  },
});
