import { VanComponent } from './component';

export class Form extends VanComponent {
  submit(): void;

  validate(name?: string | string[]): Promise<void>;

  resetValidation(name?: string | string[]): void;

  scrollToField(name: string, options?: boolean | ScrollIntoViewOptions): void;
}
