import { get, noop } from '../basic';
import { deepClone } from '../deep-clone';
import { deepAssign } from '../deep-assign';
import { isDef, isMobile, isNumeric } from '../validate';
import { addUnit, unitToPx, camelize, formatNumber } from '../format';

test('deepClone', () => {
  const a = { foo: 0 };
  const b = { foo: 0, bar: 1 };
  const c = null;
  const arr = [a, b];
  expect(deepClone(a)).toEqual(a);
  expect(deepClone(b)).toEqual(b);
  expect(deepClone(c)).toEqual(c);
  expect(deepClone(noop)).toEqual(noop);
  expect(deepClone(arr)).toEqual(arr);
});

test('deepAssign', () => {
  expect(deepAssign({}, { foo: null })).toEqual({});
  expect(deepAssign({}, { foo: undefined })).toEqual({});
  expect(deepAssign({ noop: null }, { noop })).toEqual({ noop });
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
  expect(isDef(noop)).toBeTruthy();
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

test('isMobile', () => {
  expect(isMobile('13000000000')).toBeTruthy();
  expect(isMobile('+8613000000000')).toBeTruthy();
  expect(isMobile('8613000000000')).toBeTruthy();
  expect(isMobile('1300000000')).toBeFalsy();
  expect(isMobile('abc')).toBeFalsy();
});

test('isNumeric', () => {
  expect(isNumeric(1)).toBeTruthy();
  expect(isNumeric('1')).toBeTruthy();
  expect(isNumeric('1.2')).toBeTruthy();
  expect(isNumeric('1..2')).toBeFalsy();
  expect(isNumeric('abc')).toBeFalsy();
  expect(isNumeric('1b2')).toBeFalsy();
});

test('formatNumber', () => {
  // with dot
  expect(formatNumber('abc')).toEqual('');
  expect(formatNumber('1.2')).toEqual('1.2');
  expect(formatNumber('abc1.2')).toEqual('1.2');
  expect(formatNumber('123.4.')).toEqual('123.4');

  // without dot
  expect(formatNumber('1.2', false)).toEqual('1');
  expect(formatNumber('abc1.2', false)).toEqual('1');
  expect(formatNumber('123.4.', false)).toEqual('123');

  // minus
  expect(formatNumber('-1.2', false)).toEqual('-1');
  expect(formatNumber('-1.2', false, false)).toEqual('1');
  expect(formatNumber('-1.2', true)).toEqual('-1.2');
  expect(formatNumber('-1.2-', true)).toEqual('-1.2');
  expect(formatNumber('123-')).toEqual('123');
});

test('addUnit', () => {
  expect(addUnit(0)).toEqual('0px');
  expect(addUnit(10)).toEqual('10px');
  expect(addUnit('1%')).toEqual('1%');
  expect(addUnit('1px')).toEqual('1px');
  expect(addUnit('1vw')).toEqual('1vw');
  expect(addUnit('1vh')).toEqual('1vh');
  expect(addUnit('1rem')).toEqual('1rem');
});

test('unitToPx', () => {
  const mockedStyle = { fontSize: '16px' } as CSSStyleDeclaration;
  const spy = jest
    .spyOn(window, 'getComputedStyle')
    .mockReturnValue(mockedStyle);

  Object.defineProperty(window, 'innerWidth', { value: 100 });
  Object.defineProperty(window, 'innerHeight', { value: 200 });

  expect(unitToPx(0)).toEqual(0);
  expect(unitToPx(10)).toEqual(10);
  expect(unitToPx('10px')).toEqual(10);
  expect(unitToPx('0rem')).toEqual(0);
  expect(unitToPx('10rem')).toEqual(160);
  expect(unitToPx('10vw')).toEqual(10);
  expect(unitToPx('10vh')).toEqual(20);

  spy.mockRestore();
});
