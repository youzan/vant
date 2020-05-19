import { VanComponent } from './component';

export class Picker extends VanComponent {
  getValues<T>(): T[];

  setValues<T>(values: T[]): void;

  getIndexes(): number[];

  setIndexes(indexes: number[]): void;

  getColumnValue<T>(columnIndex: number): T;

  setColumnValue<T>(columnIndex: number, value: T): void;

  getColumnIndex(columnIndex: number): number;

  setColumnIndex(columnIndex: number, optionIndex: number): void;

  getColumnValues<T>(columnIndex: number): T[];

  setColumnValues<T>(columnIndex: number, values: T[]): void;

  confirm(): void;
}
