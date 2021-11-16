import { getCurrentInstance } from 'vue';

let current = 0;

export function useId() {
  const vm = getCurrentInstance();
  const { name = 'unknown' } = vm?.type || {};
  return `${name}-${++current}`;
}
