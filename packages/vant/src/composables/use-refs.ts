import { ref, Ref } from 'vue';

export function useRefs<T = Element>() {
  const refs = ref([]) as Ref<T[]>;
  const cache: Array<(el: unknown) => void> = [];

  const setRefs = (index: number) => {
    if (!cache[index]) {
      cache[index] = (el: unknown) => {
        if (el) {
          refs.value[index] = el as T;
        } else {
          delete refs.value[index];
        }
      };
    }
    return cache[index];
  };

  return [refs, setRefs] as const;
}
