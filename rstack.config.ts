// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';

define.lint(({ js, ts }) => [
  js.configs.recommended,
  ts.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: ['./packages/*/tsconfig.json'],
      },
    },
    rules: {
      'no-undef': 'off',
      'no-useless-assignment': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]);

define.fmt({
  singleQuote: true,
  proseWrap: 'never',
});

define.staged({
  '*.md': 'rs fmt',
  '*.{ts,tsx,js,vue,less}': 'rs fmt',
  '*.{ts,tsx,js,mjs,cjs}': 'rs lint --fix',
});
