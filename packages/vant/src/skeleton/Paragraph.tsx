import { defineComponent, ExtractPropTypes } from 'vue';

import { createNamespace, numericProp } from '../utils';

export const skeletonParagraphProps = {
  round: Boolean,
  rowWidth: numericProp,
};

export type SkeletonParagraphProps = ExtractPropTypes<
  typeof skeletonParagraphProps
>;

export const DEFAULT_ROW_WIDTH = '100%';

const [name, bem] = createNamespace('skeleton-paragraph');

export default defineComponent({
  name,

  props: skeletonParagraphProps,

  setup(props) {
    return () => (
      <div
        class={bem(['', { round: props.round }])}
        style={{ width: props.rowWidth || DEFAULT_ROW_WIDTH }}
      />
    );
  },
});
