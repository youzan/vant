import { ref } from 'vue';

export function useToggle(defaultValue = false) {
  const state = ref(defaultValue);
  const toggle = (value = !state.value) => {
    state.value = value;
  };

  return [state, toggle] as const;
}
