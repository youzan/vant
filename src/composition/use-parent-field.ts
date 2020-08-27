import { watch, inject, WatchSource, getCurrentInstance } from 'vue';
import { FIELD_KEY } from '../field';

export function useParentField(watchSource: WatchSource) {
  const field = inject(FIELD_KEY, null) as any;

  if (field && !field.children) {
    field.children = getCurrentInstance()!.proxy;

    watch(watchSource, () => {
      if (field) {
        field.resetValidation();
        field.validateWithTrigger('onChange');
      }
    });
  }
}
