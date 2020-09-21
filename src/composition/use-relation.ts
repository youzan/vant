import { inject, computed, onUnmounted } from 'vue';

type Parent = { children: unknown[] };

type Child<T> = T extends { children: (infer U)[] } ? U : never;

export function useParent<P extends Parent>(
  key: string,
  child = {} as Child<P>
) {
  const parent = inject<P | null>(key, null);

  if (parent) {
    const { children } = parent;
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
