import { ref, Ref, provide, inject, computed, onUnmounted } from 'vue';

export type Parent<T = unknown> = null | {
  children: Ref<Ref<T>[]>;
};

export function useChildren(key: string) {
  const children = ref<unknown>([]);
  provide(key, { children });
  return children;
}

export function useParent<T = unknown>(key: string, child: Ref<T>) {
  const parent = inject<Parent<T>>(key, null);

  if (parent) {
    const children = parent.children.value;
    const index = computed(() => children.indexOf(child));

    children.push(child);

    onUnmounted(() => {
      children.splice(index.value, 1);
    });

    return {
      index,
      parent,
    };
  }

  return {};
}
