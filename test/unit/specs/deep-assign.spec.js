import deepAssign from 'packages/utils/deep-assign';

describe('DeepAssign', () => {
  it('basic assign', () => {
    const a = { foo: 0 };
    const b = { foo: 0, bar: 1 };
    const output = { foo: 0, bar: 1 };
    expect(deepAssign(a, b)).to.eql(output);
    expect(deepAssign(a, null)).to.eql(a);
    expect(deepAssign(a, undefined)).to.eql(a);
  });

  it('same object', () => {
    const a = { foo: 0 };
    expect(deepAssign(a, a)).to.eql(a);
  });

  it('only assign own keys', () => {
    const Test = function() {};
    Test.prototype.a = 'many';
    const test = new Test();
    test.bar = 1;
    expect(deepAssign({ foo: 1 }, test, { foo: 1, bar: 1 })).to.eql({
      foo: 1,
      bar: 1
    });
  });

  it('do not assign undefined values', () => {
    expect(deepAssign({}, { foo: undefined })).to.eql({});
  });

  it('do not assign null values', () => {
    expect(deepAssign({}, { foo: null })).to.eql({});
  });

  it('assign proprety, if proprety is null in the prototype chain', () => {
    const Unicorn = function() {};
    Unicorn.prototype.rainbows = null;
    const unicorn = new Unicorn();
    expect(deepAssign(unicorn, { rainbows: 'many' }).rainbows).to.eql('many');
  });

  it('assign proprety, if proprety is undefined in the prototype chain', () => {
    const Unicorn = function() {};
    Unicorn.prototype.rainbows = undefined;
    const unicorn = new Unicorn();
    expect(deepAssign(unicorn, { rainbows: 'many' }).rainbows).to.eql('many');
  });

  it('do not merge with a target proprety in the prototype chain', () => {
    const amountOfRainbows = { amount: 'many' };
    const Unicorn = function() {};
    Unicorn.prototype.rainbows = amountOfRainbows;
    const unicorn = deepAssign(new Unicorn(), { rainbows: 'none' });
    expect(unicorn.rainbows).to.eql('none');
    expect(unicorn.rainbows.amount).to.eql(undefined);
    expect(Unicorn.prototype.rainbows).to.eql(amountOfRainbows);
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
    expect(deepAssign(a, b)).to.eql(output);
  });
});
