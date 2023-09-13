import {
  ExtractPropTypes,
  computed,
  defineComponent,
  nextTick,
  watch,
} from 'vue';
import { createNamespace } from '../utils';
import { slugify } from 'transliteration';

const [name, bem] = createNamespace('block');

export const blockProps = {
  card: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
};

export type BlockProps = ExtractPropTypes<typeof blockProps>;

export default defineComponent({
  name,

  props: blockProps,

  setup(props, { slots }) {
    const slugifyTitle = computed(() => (slugify ? slugify(props.title) : ''));

    watch(
      () => slugifyTitle.value,
      (val) => {
        if (val) {
          nextTick(() => {
            let hash = '';
            if (top) {
              hash = top.location.hash.split('#').pop() as string;
            } else {
              hash = location.hash.split('#').pop() as string;
            }
            const target = document.getElementById(val);
            if (target && val === hash) {
              target.scrollIntoView(true);
            }
          });
        }
      },
    );

    return () => (
      <div class={bem()}>
        {props.title ? (
          <h2 class={bem('title')} id={slugifyTitle.value}>
            {props.title}
          </h2>
        ) : null}
        {props.card ? (
          <div class={bem('card')}>{slots.default?.()}</div>
        ) : (
          slots.default?.()
        )}
      </div>
    );
  },
});
