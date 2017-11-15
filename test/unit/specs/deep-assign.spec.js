import deepAssign from 'packages/utils/deep-assign';

it('basic assign', () => {
  const a = { foo: 0 };
  const b = { bar: 0 };
  const c = { foo: 0, bar: 1 };
  const output = { foo: 0, bar: 1 };
  expect(deepAssign(a, b, c)).toEqual(output);
  expect(deepAssign(a, null, undefined)).toEqual(a);
  expect(deepAssign(a, null, undefined, b, c)).toEqual(output);
});

test('same object', () => {
  const a = { foo: 0 };
  expect(deepAssign(a, a)).toEqual(a);
});

it('only assign own keys', () => {
  const Test = function() {};
  Test.prototype.a = 'many';
  const test = new Test();
  test.bar = 1;
  expect(deepAssign({ foo: 1 }, test, { foo: 1, bar: 1 })).toEqual({
    foo: 1,
    bar: 1
  });
});

it('do not assign undefined values', () => {
  expect(deepAssign({}, { foo: undefined })).toEqual({});
});

it('do not assign null values', () => {
  expect(deepAssign({}, { foo: null })).toEqual({});
});

it('assign proprety, if proprety is null in the prototype chain', () => {
  const Unicorn = function() {};
  Unicorn.prototype.rainbows = null;
  const unicorn = new Unicorn();
  expect(deepAssign(unicorn, { rainbows: 'many' }).rainbows).toEqual('many');
});

it('assign proprety, if proprety is undefined in the prototype chain', () => {
  const Unicorn = function() {};
  Unicorn.prototype.rainbows = undefined;
  const unicorn = new Unicorn();
  expect(deepAssign(unicorn, { rainbows: 'many' }).rainbows).toEqual('many');
});

test('do not merge with a target proprety in the prototype chain', () => {
  const amountOfRainbows = { amount: 'many' };
  const Unicorn = function() {};
  Unicorn.prototype.rainbows = amountOfRainbows;
  const unicorn = deepAssign(new Unicorn(), { rainbows: 'none' });
  expect(unicorn.rainbows).toEqual('none');
  expect(unicorn.rainbows.amount).toEqual(undefined);
  expect(Unicorn.prototype.rainbows).toEqual(amountOfRainbows);
});

it('deep assign', () => {
  const a = {
    foo: {
      foo: {
        foo: true
      },
      bar: {
        bar: false
      }
    }
  };
  const b = {
    foo: {
      foo: {
        foo: false,
        bar: true
      },
      bar: null
    },
    bar: true
  };
  const output = {
    foo: {
      foo: {
        foo: false,
        bar: true
      },
      bar: {
        bar: false
      }
    },
    bar: true
  };
  expect(deepAssign(a, b)).toEqual(output);
});
