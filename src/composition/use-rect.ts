import { Ref, ref, onMounted, nextTick } from 'vue';

export const useRect = (el: Ref<Element>) => el.value.getBoundingClientRect();

export const useHeight = (el: Ref<Element>) => {
  const height = ref();

  onMounted(() => {
    nextTick(() => {
      height.value = useRect(el).height;
    });
  });

  return height;
};
