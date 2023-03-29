import { type Ref, ref } from 'vue';
import type { BEM } from '../utils/create';
import { useRect } from '@vant/use';
import { useHeight } from './use-height';
import { useVisibilityChange } from './use-visibility-change';

export function usePlaceholder(contentRef: Ref<Element | undefined>, bem: BEM) {
  const root = ref<HTMLElement>();
  const height = useHeight(contentRef, true);

  useVisibilityChange(root, () => {
    height.value = useRect(contentRef).height;
  });

  return (renderContent: () => JSX.Element) => (
    <div
      ref={root}
      class={bem('placeholder')}
      style={{ height: height.value ? `${height.value}px` : undefined }}
    >
      {renderContent()}
    </div>
  );
}
