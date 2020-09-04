import { useHeight } from './use-rect';

export function usePlaceholder(contentRef, bem) {
  const height = useHeight(contentRef);

  return (renderContent) => (
    <div
      class={bem('placeholder')}
      style={{ height: height.value ? `${height.value}px` : null }}
    >
      {renderContent()}
    </div>
  );
}
