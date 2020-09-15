import { getCurrentInstance } from 'vue';

// expose public api
export function useExpose(apis: Record<string, any>) {
  const vm = (getCurrentInstance() as any).ctx;
  Object.assign(vm, apis);
}
