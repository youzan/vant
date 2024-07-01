import { getCurrentInstance, inject } from 'vue';

const initial = { current: 0 };
const ID_INJECTION_KEY = 'van-id-injection';

export function useId() {
  const vm = getCurrentInstance();
  const idInjection = getCurrentInstance()
    ? inject(ID_INJECTION_KEY, initial)
    : initial;
  const { name = 'unknown' } = vm?.type || {};

  // keep test snapshot stable
  if (process.env.NODE_ENV === 'test') {
    return name;
  }

  if (typeof window === 'undefined' && !inject(ID_INJECTION_KEY)) {
    console.warn(
      '[vant useId] Looks like you are using server rendering, we suggest injecting an initial value for the ID. eg: app.provide("van-id-injection", { current: 0 })',
    );
  }

  return `${name}-${++idInjection.current}`;
}
