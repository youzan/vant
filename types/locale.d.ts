export interface Locale {
  install(): void;
  use(lang: string, messages: Object): void;
  add(messages: Object): void;
}

export const Locale: Locale;
