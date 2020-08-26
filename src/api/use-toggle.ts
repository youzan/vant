import { ref } from 'vue';

export function useToggle(defaultValue = false) {
  const state = ref(defaultValue);
  const setState = (value: boolean) => {
    state.value = value;
  };

  return [state, setState];
}
