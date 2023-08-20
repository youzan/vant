import { getCurrentInstance } from 'vue';

let current = 0;

export function useId() {
  const vm = getCurrentInstance();
  const { name = 'unknown' } = vm?.type || {};

  // keep test snapshot stable
  if (process.env.NODE_ENV === 'test') {
    return name;
  }

  return `${name}-${++current}`;
}
