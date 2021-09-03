import type { ComponentPublicInstance } from 'vue';
import type { SearchProps } from './Search';

export type SearchShape = 'square' | 'round';

export type SearchExpose = {
  focus: () => void;
  blur: () => void;
};

export type SearchInstance = ComponentPublicInstance<SearchProps, SearchExpose>;
