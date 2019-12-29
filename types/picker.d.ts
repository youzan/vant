import { VanComponent } from './component';

export class Picker extends VanComponent {
  getValues(): string[];

  setValues(values: string[]): void;

  getIndexes(): number[];

  setIndexes(indexes: number[]): void;

  getColumnValue(columnIndex: number): string;

  setColumnValue(columnIndex: number, value: string): void;

  getColumnIndex(columnIndex: number): number;

  setColumnIndex(columnIndex: number, optionIndex: number): void;

  getColumnValues(columnIndex: number): string[];

  setColumnValues(columnIndex: number, values: string[]): void;

  confirm(): void;
}
