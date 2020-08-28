import { Ref, ref, onMounted } from 'vue';

export const useRect = (el: Ref<Element>) => el.value.getBoundingClientRect();

export const useHeight = (el: Ref<Element>) => {
  const height = ref();

  onMounted(() => {
    height.value = useRect(el).height;
  });

  return height;
};
