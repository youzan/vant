import { createNamespace } from '../utils';

import { SignProps } from './shared';

// Mixins
import { FieldMixin } from '../mixins/field';

const [createComponent, bem] = createNamespace('signature');

export default createComponent({
  mixins: [FieldMixin],

  props: SignProps,

  computed: {},

  data() {
    return {
      canvas: null,
      ctx: null,
      isDrawing: false,
      lastX: 0,
      lastY: 0,
    };
  },
  watch: {
    value(val) {
      if (val) {
        this.loadImage(val);
      } else {
        this.redraw();
      }
    },
    lineColor(val) {
      this.ctx.strokeStyle = val;
    },
    lineWidth(val) {
      this.ctx.lineWidth = val;
    },
  },

  mounted() {
    // 获取Canvas元素
    const canvas = document.querySelector('.van-signature__node');
    const ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.ctx = ctx;

    const {parentNode} = canvas;
    const rect = parentNode.getBoundingClientRect();
    const style = getComputedStyle(parentNode);
    const width =
      rect.width -
      parseFloat(style.paddingLeft) -
      parseFloat(style.paddingRight) -
      parseFloat(style.borderLeftWidth) -
      parseFloat(style.borderRightWidth);
    const height =
      rect.height -
      parseFloat(style.paddingTop) -
      parseFloat(style.paddingBottom) -
      parseFloat(style.borderTopWidth) -
      parseFloat(style.borderBottomWidth);

    // 设置高清Canvas
    const ratio = window.devicePixelRatio || 1;
    this.canvas.width = width * ratio;
    this.canvas.height = height * ratio;
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';
    this.ctx.scale(ratio, ratio);

    // 设置绘图样式
    this.ctx.strokeStyle = this.lineColor;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    // 事件监听
    this.canvas.addEventListener('mousedown', this.startDrawing);
    this.canvas.addEventListener('mousemove', this.draw);
    this.canvas.addEventListener('mouseup', this.stopDrawing);
    this.canvas.addEventListener('mouseout', this.leaveDrawing);

    // 触摸事件支持
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.startDrawing({
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
    });
    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.draw({
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
    });
    this.canvas.addEventListener('touchend', this.stopDrawing);
  },

  methods: {
    draw(e) {
      if (!this.isDrawing) return;
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();

      [this.lastX, this.lastY] = [x, y];
    },
    startDrawing(e) {
      if (this.disabled) return;
      this.isDrawing = true;
      const rect = this.canvas.getBoundingClientRect();
      [this.lastX, this.lastY] = [e.clientX - rect.left, e.clientY - rect.top];
    },
    stopDrawing() {
      this.isDrawing = false;
      const image = this.canvas.toDataURL();
      if (!this.disabled) {
        this.$emit('input', image);
      }
    },
    leaveDrawing() {
      this.isDrawing = false;
    },
    redraw() {
      // 清空画布
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    loadImage(imageData) {
      if (imageData) {
        const img = new Image();
        img.src = imageData;
        img.onload = () => {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.ctx.drawImage(img, 0, 0);
        };
      }
    },
  },

  render() {
    const { value, disabled } = this;

    return (
      <div
        class={bem({
          on: value,
          disabled,
        })}
      >
        <canvas class={bem('node')}></canvas>
      </div>
    );
  },
});
