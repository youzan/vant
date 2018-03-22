import List from 'packages/list';
import { mount } from 'avoriaz';

describe('List', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('load event', done => {
    wrapper = mount(List);

    const spy = sinon.spy();
    wrapper.vm.$on('load', spy);
    wrapper.vm.$on('input', val => {
      wrapper.vm.loading = val;
    });

    expect(spy.calledOnce).to.be.false;
    wrapper.vm.$nextTick(() => {
      expect(spy.calledOnce).to.be.true;
      done();
    });
  });

  it('finished', done => {
    wrapper = mount(List, {
      propsData: {
        finished: true
      }
    });

    const spy = sinon.spy();
    wrapper.vm.$on('load', spy);

    wrapper.vm.$nextTick(() => {
      expect(spy.calledOnce).to.be.false;

      wrapper.vm.finished = false;

      setTimeout(() => {
        expect(spy.calledOnce).to.be.true;
        done();
      }, 50);
    });
  });

  it('immediate check false', done => {
    wrapper = mount(List, {
      propsData: {
        immediateCheck: false
      }
    });

    const spy = sinon.spy();
    wrapper.vm.$on('load', spy);
    wrapper.vm.$on('input', val => {
      wrapper.vm.loading = val;
    });

    expect(spy.calledOnce).to.be.false;
    wrapper.vm.$nextTick(() => {
      expect(spy.calledOnce).to.be.false;
      done();
    });
  });
});
