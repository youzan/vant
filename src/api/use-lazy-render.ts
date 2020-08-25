import { ref, Ref, watch } from 'vue';

export function useLazyRender(show: Ref<boolean>) {
  const inited = ref(show.value);

  watch(show, (value) => {
    if (value) {
      inited.value = value;
    }
  });

  return inited;
}
