import type { Ref } from 'vue';

export const useRect = (el: Ref<Element>) => el.value.getBoundingClientRect();

export const useWidth = (el: Ref<Element>) => useRect(el).width;

export const useHeight = (el: Ref<Element>) => useRect(el).height;
