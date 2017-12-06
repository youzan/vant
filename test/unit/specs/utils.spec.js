import deepClone from 'packages/utils/deep-clone';
import { isAndroid, isDef, camelize, get } from 'packages/utils';
import { raf, cancel } from 'packages/utils/raf';

describe('Utils', () => {
  it('deepClone', () => {
    const a = { foo: 0 };
    const b = { foo: 0, bar: 1 };
    const fn = () => {};
    const arr = [a, b];
    expect(deepClone(a)).to.eql(a);
    expect(deepClone(b)).to.eql(b);
    expect(deepClone(fn)).to.eql(fn);
    expect(deepClone(arr)).to.eql(arr);
    expect(deepClone(undefined)).to.eql(undefined);
    expect(deepClone(1)).to.eql(1);
  });

  it('isDef', () => {
    expect(isDef(null)).to.be.false;
    expect(isDef(undefined)).to.be.false;
    expect(isDef(1)).to.be.true;
    expect(isDef('1')).to.be.true;
    expect(isDef({})).to.be.true;
    expect(isDef(() => {})).to.be.true;
  });

  it('camelize', () => {
    expect(camelize('ab')).to.equal('ab');
    expect(camelize('a-b')).to.equal('aB');
    expect(camelize('a-b-c-d')).to.equal('aBCD');
    expect(camelize('a-b-')).to.equal('aB-');
    expect(camelize('-a-b')).to.equal('AB');
    expect(camelize('-')).to.equal('-');
  });

  it('get', () => {
    expect(get({ a: 1 }, 'a')).to.equal(1);
    expect(get({ a: { b: 2 }}, 'a.b')).to.equal(2);
    expect(get({ a: { b: 2 }}, 'a.b.c')).to.equal('');
  });

  it('isAndroid', () => {
    expect(isAndroid()).to.be.false;
  });

  it('raf', (done) => {
    const spy = sinon.spy();
    raf(spy);

    setTimeout(() => {
      expect(spy.calledOnce).to.be.true;
      cancel(1);
      done();
    }, 50);
  });
});
