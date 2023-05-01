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
} from '../utils';
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
      isSupportTouch: 'ontouchstart' in window,
    });

    const isRenderCanvas = inBrowser ? hasCanvasSupport() : true;

    const touchMove = (event: TouchEvent) => {
      if (!state.ctx) {
        return false;
      }

      const evt = event.changedTouches
        ? event.changedTouches[0]
        : event.targetTouches[0];

      emit('signing', evt);
      let mouseX = evt.clientX;
      let mouseY = evt.clientY;

      if (!state.isSupportTouch) {
        const coverPos = canvasRef.value?.getBoundingClientRect();
        mouseX = evt.clientX - (coverPos?.left || 0);
        mouseY = evt.clientY - (coverPos?.top || 0);
      }

      state.ctx.lineCap = 'round';
      state.ctx.lineJoin = 'round';
      state.ctx?.lineTo(mouseX, mouseY);
      state.ctx?.stroke();
    };

    const touchEnd = (event: { preventDefault: () => void }) => {
      event.preventDefault();
      emit('end');
    };

    const touchStart = () => {
      if (!state.ctx) {
        return false;
      }
      emit('start');
      state.ctx.beginPath();
      state.ctx.lineWidth = props.lineWidth;
      state.ctx.strokeStyle = props.penColor;
    };

    const isCanvasEmpty = (canvas: HTMLCanvasElement) => {
      const empty: HTMLCanvasElement = document.createElement('canvas');
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
              onTouchmovePassive={touchMove}
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
