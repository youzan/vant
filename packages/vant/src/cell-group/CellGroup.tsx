import { defineComponent, type ExtractPropTypes } from 'vue';
import { truthProp, createNamespace, BORDER_TOP_BOTTOM } from '../utils';
import { useScopeId } from '../composables/use-scope-id';

const [name, bem] = createNamespace('cell-group');

export const cellGroupProps = {
  title: String,
  inset: Boolean,
  border: truthProp,
};

export type CellGroupProps = ExtractPropTypes<typeof cellGroupProps>;

export default defineComponent({
  name,

  inheritAttrs: false,

  props: cellGroupProps,

  setup(props, { slots, attrs }) {
    const renderGroup = () => (
      <div
        class={[
          bem({ inset: props.inset }),
          { [BORDER_TOP_BOTTOM]: props.border && !props.inset },
        ]}
        {...attrs}
        {...useScopeId()}
      >
        {slots.default?.()}
      </div>
    );

    const renderTitle = () => (
      <div class={bem('title', { inset: props.inset })}>
        {slots.title ? slots.title() : props.title}
      </div>
    );

    return () => {
      if (props.title || slots.title) {
        return (
          <>
            {renderTitle()}
            {renderGroup()}
          </>
        );
      }

      return renderGroup();
    };
  },
});
