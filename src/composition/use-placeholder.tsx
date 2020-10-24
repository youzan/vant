import { useHeight } from './use-height';
import type { Ref } from 'vue';
import type { BEM } from '../utils/create/bem';

export function usePlaceholder(contentRef: Ref<Element>, bem: BEM) {
  const height = useHeight(contentRef);

  return (renderContent: () => JSX.Element) => (
    <div
      class={bem('placeholder')}
      style={{ height: height.value ? `${height.value}px` : undefined }}
    >
      {renderContent()}
    </div>
  );
}
