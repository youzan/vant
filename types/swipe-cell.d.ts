import { VanComponent } from './component';

export class SwipeCell extends VanComponent {
  open(position: 'left' | 'right'): void;

  close(): void;
}
