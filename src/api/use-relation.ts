import { ref, Ref, provide, inject, computed, onUnmounted } from 'vue';

export type Parent = null | {
  children: Ref<unknown[]>;
};

export function useChildren(key: string) {
  const children = ref<unknown>([]);
  provide(key, { children });
  return children;
}

export function useParent(key: string, child: unknown) {
  const parent = inject<Parent>(key, null);

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
