import type { Ref } from 'vue';
import type { DropdownMenuProps } from './DropdownMenu';

export type DropdownMenuDirection = 'up' | 'down';

export type DropdownMenuProvide = {
  props: DropdownMenuProps;
  offset: Ref<number>;
};
