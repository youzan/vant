import { ref, watch, WatchSource, VNode } from 'vue';

export function useLazyRender(show: WatchSource<boolean>) {
  const inited = ref(false);

  watch(
    show,
    (value) => {
      if (value) {
        inited.value = value;
      }
    },
    { immediate: true }
  );

  return (render: () => VNode) => () => (inited.value ? render() : null);
}
