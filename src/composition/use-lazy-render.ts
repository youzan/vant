import { ref, isRef, watch, WatchSource } from 'vue';

export function useLazyRender(show: WatchSource<boolean>) {
  const inited = ref(isRef(show) ? show.value : show());

  watch(show, (value) => {
    if (value) {
      inited.value = value;
    }
  });

  return inited;
}
