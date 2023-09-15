import { VanComponent } from './component';

export class Calendar extends VanComponent {
  reset(date?: Date | Date[]): void;

  scrollToDate(date: Date): void;
}
