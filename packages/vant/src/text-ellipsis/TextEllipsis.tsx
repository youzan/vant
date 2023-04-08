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
        const { dots, content, expandText } = props;

        let left = 0;
        let right = content.length;
        let res = -1;

        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          container.innerText = content.slice(0, mid) + dots + expandText;
          if (container.offsetHeight <= maxHeight) {
            left = mid + 1;
            res = mid;
          } else {
            right = mid - 1;
          }
        }
        return content.slice(0, res) + dots;
      };

      const container = cloneContainer();
      if (!container) return;

      const { paddingBottom, paddingTop, lineHeight } = container.style;
      const maxHeight =
        (Number(props.rows) + 0.5) * pxToNum(lineHeight) +
        pxToNum(paddingTop) +
        pxToNum(paddingBottom);
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

    watch(() => [props.content, props.rows], calcEllipsised);

    useEventListener('resize', calcEllipsised);

    return () => (
      <div ref={root} class={bem()}>
        {expanded.value ? props.content : text.value}
        {hasAction.value ? renderAction() : null}
      </div>
    );
  },
});
