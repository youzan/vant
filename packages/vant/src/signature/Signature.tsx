import {
  defineComponent,
  reactive,
  ref,
  onMounted,
  type ExtractPropTypes,
} from 'vue';
import {
  createNamespace,
  unknownProp,
  makeNumberProp,
  makeStringProp,
} from '../utils';
import { Button } from '../button';

const [name, bem] = createNamespace('signature');

export const signatureProps = {
  type: makeStringProp('png'),
  penColor: String,
  className: unknownProp,
  lineWidth: makeNumberProp(3),
  tips: makeStringProp('当前浏览器不支持Canvas，无法使用本控件'),
};

export type SignatureProps = ExtractPropTypes<typeof signatureProps>;

export default defineComponent({
  name,

  props: signatureProps,

  emits: ['submit', 'clear', 'start', 'end', 'signing'],

  setup(props, { emit }) {
    const canvasRef: any = ref<HTMLElement | null>(null);
    const wrapRef: any = ref<HTMLElement | null>(null);

    const state = reactive({
      width: 0,
      height: 0,
      ctx: null as any,
      isSupportTouch: 'ontouchstart' in window,
    });

    const hasCanvasSupport = () => {
      const canvas = document.createElement('canvas');
      return !!(canvas.getContext && canvas.getContext('2d'));
    };

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
        const coverPos = canvasRef.value.getBoundingClientRect();
        mouseX = evt.clientX - coverPos.left;
        mouseY = evt.clientY - coverPos.top;
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
      const _canvas = isEmpty ? '未绘制签名' : canvas;
      const _filePath = isEmpty
        ? ''
        : canvas.toDataURL(
            `image/${props.type}`,
            props.type === 'jpg' ? 0.9 : undefined
          );
      emit('submit', _canvas, _filePath);
    };

    const clear = () => {
      state.ctx.clearRect(0, 0, state.width, state.height);
      state.ctx.closePath();
      emit('clear');
    };

    onMounted(() => {
      if (hasCanvasSupport()) {
        state.ctx = canvasRef.value.getContext('2d');
        state.width = wrapRef.value.offsetWidth;
        state.height = wrapRef.value.offsetHeight;
      }
    });

    return () => (
      <div class={[bem(), props.className]}>
        <div class={bem('content')} ref={wrapRef}>
          {(hasCanvasSupport() && (
            <canvas
              ref={canvasRef}
              width={state.width}
              height={state.height}
              onTouchstartPassive={touchStart}
              onTouchmovePassive={touchMove}
              onTouchend={touchEnd}
            />
          )) || <p>{props.tips}</p>}
        </div>
        <div class={bem('footer')}>
          <Button size="small" onClick={clear}>
            取消
          </Button>
          <Button type="primary" size="small" onClick={submit}>
            完成
          </Button>
        </div>
      </div>
    );
  },
});
