import { ref, Ref, provide, inject, computed } from 'vue';

export type Parent = null | {
  children: Ref<unknown[]>;
};

export function useParent(key: string) {
  const children = ref<unknown>([]);

  provide(key, { children });

  return {
    children,
  };
}

export function useChildren(key: string, child: unknown) {
  const parent = inject<Parent>(key, null);
  const children = parent?.children;
  const index = computed(() => children?.value.indexOf(child));

  if (parent) {
    parent.children.value.push(child);
  }

  return {
    index,
    children,
  };
}
