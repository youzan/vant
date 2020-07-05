import { createBEM } from '../create/bem';

test('bem', () => {
  const bem = createBEM('button');

  expect(bem()).toEqual('button');

  expect(bem('text')).toEqual('button__text');

  expect(bem({ disabled: false })).toEqual('button');

  expect(bem({ disabled: true })).toEqual('button button--disabled');

  expect(bem('text', { disabled: true })).toEqual(
    'button__text button__text--disabled'
  );

  expect(bem(['disabled', 'primary'])).toEqual(
    'button button--disabled button--primary'
  );

  expect(bem([])).toEqual('button');

  expect(bem(null)).toEqual('button');

  expect(bem([null])).toEqual('button');

  expect(bem(['disabled', ''])).toEqual('button button--disabled');

  expect(bem(['disabled', undefined])).toEqual('button button--disabled');

  expect(bem('text', ['disabled', 'primary'])).toEqual(
    'button__text button__text--disabled button__text--primary'
  );

  expect(bem('text', [{ disabled: true }, 'primary'])).toEqual(
    'button__text button__text--disabled button__text--primary'
  );
});
