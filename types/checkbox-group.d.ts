import { VanComponent } from './component';

export type ToggleAllOptions = {
  checked?: boolean;
  skipDisabled?: boolean;
};

export class CheckboxGroup extends VanComponent {
  toggleAll(options?: boolean | ToggleAllOptions): void;
}
