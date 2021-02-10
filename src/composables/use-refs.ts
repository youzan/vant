import { ref, Ref, onBeforeUpdate } from 'vue';

export function useRefs<T = Element>() {
  const refs = ref([]) as Ref<T[]>;

  onBeforeUpdate(() => {
    refs.value = [];
  });

  const setRefs = (index: number) => (el: unknown) => {
    refs.value[index] = el as T;
  };

  return [refs, setRefs] as const;
}
