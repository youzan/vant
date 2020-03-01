import { deepClone } from '../deep-clone';
import { deepAssign } from '../deep-assign';
import { isDef, get } from '..';
import { raf, cancelRaf } from '../dom/raf';
import { later } from '../../../test';
import { isEmail } from '../validate/email';
import { isMobile } from '../validate/mobile';
import { isNumeric } from '../validate/number';
import { isAndroid } from '../validate/system';
import { camelize } from '../format/string';

test('deepClone', () => {
  const a = { foo: 0 };
  const b = { foo: 0, bar: 1 };
  const fn = () => {};
  const arr = [a, b];
  expect(deepClone(a)).toEqual(a);
  expect(deepClone(b)).toEqual(b);
  expect(deepClone(fn)).toEqual(fn);
  expect(deepClone(arr)).toEqual(arr);
  expect(deepClone(undefined)).toEqual(undefined);
  expect(deepClone(1)).toEqual(1);
});

test('deepAssign', () => {
  const fn = () => {};

  expect(deepAssign({}, { foo: null })).toEqual({});
  expect(deepAssign({}, { foo: undefined })).toEqual({});
  expect(deepAssign({ fn: null }, { fn })).toEqual({ fn });
  expect(deepAssign({ foo: 0 }, { bar: 1 })).toEqual({ foo: 0, bar: 1 });
  expect(
    deepAssign({ foo: { bar: false } }, { foo: { bar: true, foo: false } })
  ).toEqual({
    foo: {
      bar: true,
      foo: false,
    },
  });
});

test('isDef', () => {
  expect(isDef(null)).toBeFalsy();
  expect(isDef(undefined)).toBeFalsy();
  expect(isDef(1)).toBeTruthy();
  expect(isDef('1')).toBeTruthy();
  expect(isDef({})).toBeTruthy();
  expect(isDef(() => {})).toBeTruthy();
});

test('camelize', () => {
  expect(camelize('ab')).toEqual('ab');
  expect(camelize('a-b')).toEqual('aB');
  expect(camelize('a-b-c-d')).toEqual('aBCD');
  expect(camelize('a-b-')).toEqual('aB-');
  expect(camelize('-a-b')).toEqual('AB');
  expect(camelize('-')).toEqual('-');
});

test('get', () => {
  expect(get({ a: 1 }, 'a')).toEqual(1);
  expect(get({ a: { b: 2 } }, 'a.b')).toEqual(2);
  expect(get({ a: { b: 2 } }, 'a.b.c')).toEqual('');
});

test('isAndroid', () => {
  expect(isAndroid()).toBeFalsy();
});

test('raf', async () => {
  const spy = jest.fn();
  raf(spy);

  await later(50);
  expect(spy).toHaveBeenCalledTimes(1);
  cancelRaf(1);
});

test('isEmail', () => {
  expect(isEmail('abc@gmail.com')).toBeTruthy();
  expect(isEmail('abc@@gmail.com')).toBeFalsy();
  expect(isEmail('@gmail.com')).toBeFalsy();
  expect(isEmail('abc@')).toBeFalsy();
});

test('isMobile', () => {
  expect(isMobile('13000000000')).toBeTruthy();
  expect(isMobile('+8613000000000')).toBeTruthy();
  expect(isMobile('8613000000000')).toBeTruthy();
  expect(isMobile('1300000000')).toBeFalsy();
  expect(isMobile('abc')).toBeFalsy();
});

test('isNumeric', () => {
  expect(isNumeric('1')).toBeTruthy();
  expect(isNumeric('1.2')).toBeTruthy();
  expect(isNumeric('1..2')).toBeFalsy();
  expect(isNumeric('abc')).toBeFalsy();
  expect(isNumeric('1b2')).toBeFalsy();
});
