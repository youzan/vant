import { deepClone } from '../deep-clone';
import { isAndroid, isDef, camelize, get } from '..';
import { raf, cancel } from '../raf';
import { later } from '../../../test/utils';
import { isSrc } from '../validate/src';
import { isEmail } from '../validate/email';
import { isMobile } from '../validate/mobile';
import { isNumber } from '../validate/number';

test('deepClone', () => {
  const a = { foo: 0 };
  const b = { foo: 0, bar: 1 };
  const fn = () => { };
  const arr = [a, b];
  expect(deepClone(a)).toEqual(a);
  expect(deepClone(b)).toEqual(b);
  expect(deepClone(fn)).toEqual(fn);
  expect(deepClone(arr)).toEqual(arr);
  expect(deepClone(undefined)).toEqual(undefined);
  expect(deepClone(1)).toEqual(1);
});

test('isDef', () => {
  expect(isDef(null)).toBeFalsy();
  expect(isDef(undefined)).toBeFalsy();
  expect(isDef(1)).toBeTruthy();
  expect(isDef('1')).toBeTruthy();
  expect(isDef({})).toBeTruthy();
  expect(isDef(() => { })).toBeTruthy();
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
  cancel(1);
});

test('is-email', () => {
  expect(isEmail('abc@gmail.com')).toBeTruthy();
  expect(isEmail('abc@@gmail.com')).toBeFalsy();
  expect(isEmail('@gmail.com')).toBeFalsy();
  expect(isEmail('abc@')).toBeFalsy();
});

test('is-mobile', () => {
  expect(isMobile('13000000000')).toBeTruthy();
  expect(isMobile('+8613000000000')).toBeTruthy();
  expect(isMobile('8613000000000')).toBeTruthy();
  expect(isMobile('1300000000')).toBeFalsy();
  expect(isMobile('abc')).toBeFalsy();
});

test('is-number', () => {
  expect(isNumber('1')).toBeTruthy();
  expect(isNumber('abc')).toBeFalsy();
  expect(isNumber('1b2')).toBeFalsy();
});

test('is-src', () => {
  expect(isSrc('http://img.cdn.com')).toBeTruthy();
  expect(isSrc('https://img.cdn.com')).toBeTruthy();
  expect(isSrc('//img.cdn.com')).toBeTruthy();
  expect(isSrc('data:image/jpeg;base64,/9j/4AAQSkZ')).toBeTruthy();
  expect(isSrc('img.cdn.com')).toBeFalsy();
  expect(isSrc('name')).toBeFalsy();
  expect(isSrc('')).toBeFalsy();
});
