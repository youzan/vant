import {
  ref,
  watchEffect,
  defineComponent,
  type PropType,
  type ExtractPropTypes,
} from 'vue';

import { truthProp, makeStringProp, createNamespace } from '../utils';

const [name, bem] = createNamespace('highlight');

export const highlightProps = {
  keywords: [String, Array] as PropType<string | string[]>,
  autoEscape: truthProp,
  sourceString: makeStringProp(''),
  caseSensitive: Boolean,
  highlightClassName: String,
};

export type HighlightProps = ExtractPropTypes<typeof highlightProps>;

export default defineComponent({
  name,

  props: highlightProps,

  setup(props) {
    const highlightedString = ref('');

    const getHighlightClasses = () =>
      props.highlightClassName
        ? props.highlightClassName + ` ${bem('tag')}`
        : `${bem('tag')}`;

    const updateHighlight = () => {
      const { keywords, sourceString, caseSensitive, autoEscape } = props;
      const flags = caseSensitive ? 'g' : 'gi';

      let _keywords = keywords;

      if (typeof keywords === 'string') {
        _keywords = [keywords];
      }

      const regexPattern = (_keywords as string[]).map((keyword) => {
        if (autoEscape) {
          return keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        return keyword;
      });

      const regex = new RegExp(`(${regexPattern.join('|')})`, flags);
      const highlighted = sourceString.replace(
        regex,
        `<span class="${getHighlightClasses()}">$1</span>`,
      );

      highlightedString.value = highlighted;
    };

    watchEffect(() => updateHighlight());

    return () => <div class={bem()} innerHTML={highlightedString.value}></div>;
  },
});
