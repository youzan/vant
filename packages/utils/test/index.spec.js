import deepClone from '../deep-clone';
import { isAndroid, isDef, camelize, get } from '..';
import { raf, cancel } from '../raf';
import { later } from '../../../test/utils';

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
  expect(get({ a: { b: 2 }}, 'a.b')).toEqual(2);
  expect(get({ a: { b: 2 }}, 'a.b.c')).toEqual('');
});

test('isAndroid', () => {
  expect(isAndroid()).toBeFalsy();
});

test('raf', async() => {
  const spy = jest.fn();
  raf(spy);

  await later(50);
  expect(spy.mock.calls.length).toBe(1);
  cancel(1);
});
