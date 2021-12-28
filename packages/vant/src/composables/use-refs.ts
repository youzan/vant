import { ref, Ref, onBeforeUpdate } from 'vue';

export function useRefs<T = Element>() {
  const refs = ref([]) as Ref<T[]>;
  const cache: Array<(el: unknown) => void> = [];

  onBeforeUpdate(() => {
    refs.value = [];
  });

  const setRefs = (index: number) => {
    if (!cache[index]) {
      cache[index] = (el: unknown) => {
        refs.value[index] = el as T;
      };
    }
    return cache[index];
  };

  return [refs, setRefs] as const;
}
