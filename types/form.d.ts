import { VanComponent } from './component';

export class Form extends VanComponent {
  submit(): void;

  validate(name?: string): Promise<void>;

  resetValidation(name?: string): void;

  scrollToField(name: string, options?: boolean | ScrollIntoViewOptions): void;
}
