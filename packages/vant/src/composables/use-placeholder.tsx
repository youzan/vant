import { Ref } from 'vue';
import { useHeight } from './use-height';
import type { BEM } from '../utils/create';

export function usePlaceholder(contentRef: Ref<Element | undefined>, bem: BEM) {
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
