import { VanComponent } from './component';

export class Picker extends VanComponent {
  getValues<T = string>(): T[];

  setValues<T = string>(values: T[]): void;

  getIndexes(): number[];

  setIndexes(indexes: number[]): void;

  getColumnValue<T = string>(columnIndex: number): T;

  setColumnValue<T = string>(columnIndex: number, value: T): void;

  getColumnIndex(columnIndex: number): number;

  setColumnIndex(columnIndex: number, optionIndex: number): void;

  getColumnValues<T = string>(columnIndex: number): T[];

  setColumnValues<T = string>(columnIndex: number, values: T[]): void;

  confirm(): void;
}
