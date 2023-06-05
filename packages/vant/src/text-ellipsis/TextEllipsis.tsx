import {
  ref,
  watch,
  onMounted,
  defineComponent,
  type ExtractPropTypes,
} from 'vue';

// Composables
import { useEventListener } from '@vant/use';

// Utils
import { makeNumericProp, makeStringProp, createNamespace } from '../utils';

const [name, bem] = createNamespace('text-ellipsis');

export const textEllipsisProps = {
  rows: makeNumericProp(1),
  dots: makeStringProp('...'),
  content: makeStringProp(''),
  expandText: makeStringProp(''),
  collapseText: makeStringProp(''),
  position: makeStringProp('end'),
};

export type TextEllipsisProps = ExtractPropTypes<typeof textEllipsisProps>;

export default defineComponent({
  name,

  props: textEllipsisProps,

  emits: ['clickAction'],

  setup(props, { emit }) {
    const text = ref('');
    const expanded = ref(false);
    const hasAction = ref(false);
    const root = ref<HTMLElement>();

    const pxToNum = (value: string | null) => {
      if (!value) return 0;
      const match = value.match(/^\d*(\.\d*)?/);
      return match ? Number(match[0]) : 0;
    };

    const calcEllipsised = () => {
      const cloneContainer = () => {
        if (!root.value) return;

        const originStyle = window.getComputedStyle(root.value);
        const container = document.createElement('div');
        const styleNames: string[] = Array.prototype.slice.apply(originStyle);
        styleNames.forEach((name) => {
          container.style.setProperty(name, originStyle.getPropertyValue(name));
        });

        container.style.position = 'fixed';
        container.style.zIndex = '-9999';
        container.style.top = '-9999px';
        container.style.height = 'auto';
        container.style.minHeight = 'auto';
        container.style.maxHeight = 'auto';

        container.innerText = props.content;
        document.body.appendChild(container);
        return container;
      };

      const calcEllipsisText = (
        container: HTMLDivElement,
        maxHeight: number
      ) => {
        const calcEllipse = () => {
          // 结尾长度
          const end = props.content.length;

          // 计算省略底部或者头部文本
          const tail = (left: number, right: number): string => {
            const end = props.content.length;
            if (right - left <= 1) {
              if (props.position === 'end') {
                return props.content.slice(0, left) + props.dots;
              }
              return props.dots + props.content.slice(right, end);
            }
            const middle = Math.round((left + right) >> 1);

            // 设置截取位置
            if (props.position === 'end') {
              container.innerText = props.content.slice(0, middle);
            } else {
              container.innerText = props.content.slice(middle, end);
            }

            // 截取之后的高度还是达不到要求的高度
            if (container.offsetHeight > maxHeight) {
              if (props.position === 'end') {
                return tail(left, middle);
              }
              return tail(middle, right);
            }
            if (props.position === 'end') {
              return tail(middle, right);
            }
            return tail(left, middle);
          };
          container.innerText = tail(0, end);
        };
        const middleTail = (
          leftPart: [number, number],
          rightPart: [number, number]
        ): string => {
          const end = props.content.length;
          if (
            leftPart[1] - leftPart[0] <= 1 &&
            rightPart[1] - rightPart[0] <= 1
          ) {
            return (
              props.content.slice(0, leftPart[1]) +
              props.dots +
              props.dots +
              props.content.slice(rightPart[1], end)
            );
          }
          const leftMiddle = Math.floor((leftPart[0] + leftPart[1]) >> 1);
          const rightMiddle = Math.ceil((rightPart[0] + rightPart[1]) >> 1);
          container.innerText =
            props.content.slice(0, leftMiddle) +
            props.dots +
            props.expandText +
            props.dots +
            props.content.slice(rightMiddle, end);
          if (container.offsetHeight >= maxHeight) {
            return middleTail(
              [leftPart[0], leftMiddle],
              [rightMiddle, rightPart[1]]
            );
          }
          return middleTail(
            [leftMiddle, leftPart[1]],
            [rightPart[0], rightMiddle]
          );
        };
        const end = props.content.length;
        const middle = (0 + end) >> 1;
        props.position === 'middle'
          ? (container.innerText = middleTail([0, middle], [middle, end]))
          : calcEllipse();
        return container.innerText;
      };

      // 计算折叠文本
      const container = cloneContainer();
      if (!container) return;
      const { paddingBottom, paddingTop, lineHeight } = container.style;
      const maxHeight = Math.ceil(
        (Number(props.rows) + 0.5) * pxToNum(lineHeight) +
          pxToNum(paddingTop) +
          pxToNum(paddingBottom)
      );
      if (maxHeight < container.offsetHeight) {
        hasAction.value = true;
        text.value = calcEllipsisText(container, maxHeight);
      } else {
        hasAction.value = false;
        text.value = props.content;
      }

      document.body.removeChild(container);
    };

    const onClickAction = (event: MouseEvent) => {
      expanded.value = !expanded.value;
      emit('clickAction', event);
    };

    const renderAction = () => (
      <span class={bem('action')} onClick={onClickAction}>
        {expanded.value ? props.collapseText : props.expandText}
      </span>
    );

    onMounted(calcEllipsised);

    watch(() => [props.content, props.rows, props.position], calcEllipsised);

    useEventListener('resize', calcEllipsised);

    return () => (
      <div ref={root} class={bem()}>
        {expanded.value ? props.content : text.value}
        {hasAction.value ? renderAction() : null}
      </div>
    );
  },
});
