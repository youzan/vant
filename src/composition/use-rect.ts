import { Ref, ref, unref, onMounted, nextTick } from 'vue';

export const useRect = (element: Element | Ref<Element>) => {
  return unref(element).getBoundingClientRect();
};

export const useHeight = (element: Element | Ref<Element>) => {
  const height = ref();

  onMounted(() => {
    nextTick(() => {
      height.value = useRect(element).height;
    });
  });

  return height;
};
