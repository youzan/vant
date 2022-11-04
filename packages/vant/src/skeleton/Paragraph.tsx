import { defineComponent, ExtractPropTypes } from 'vue';

import { createNamespace, numericProp } from '../utils';

export const DEFAULT_ROW_WIDTH = '100%';

export const skeletonParagraphProps = {
  round: Boolean,
  rowWidth: {
    type: numericProp,
    default: DEFAULT_ROW_WIDTH,
  },
};

export type SkeletonParagraphProps = ExtractPropTypes<
  typeof skeletonParagraphProps
>;

const [name, bem] = createNamespace('skeleton-paragraph');

export default defineComponent({
  name,

  props: skeletonParagraphProps,

  setup(props) {
    return () => (
      <div
        class={bem([{ round: props.round }])}
        style={{ width: props.rowWidth }}
      />
    );
  },
});
