import { defineComponent, type ExtractPropTypes } from 'vue';

import { createNamespace, numericProp, addUnit } from '../utils';

const [name, bem] = createNamespace('skeleton-title');

export const skeletonTitleProps = {
  round: Boolean,
  titleWidth: numericProp,
};

export type SkeletonTitleProps = ExtractPropTypes<typeof skeletonTitleProps>;

export default defineComponent({
  name,

  props: skeletonTitleProps,

  setup(props) {
    return () => (
      <h3
        class={bem([{ round: props.round }])}
        style={{ width: addUnit(props.titleWidth) }}
      />
    );
  },
});
