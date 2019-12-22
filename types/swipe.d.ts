import { VanComponent } from './component';

export type SwipeToOptions = {
  immediate?: boolean;
};

export class Swipe extends VanComponent {
  swipeTo(index: number, options?: SwipeToOptions): void;

  resize(): void;
}
