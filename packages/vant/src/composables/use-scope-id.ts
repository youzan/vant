import { getCurrentInstance } from 'vue';

// Fix failed to get scopeId when using teleport & fragment
// https://github.com/vuejs/core/issues/2669
export const useScopeId = () => {
  const { scopeId } = getCurrentInstance()?.vnode || {};
  return scopeId ? { [scopeId]: '' } : null;
};
