import NumberKeyboard from 'packages/number-keyboard';
import { mount } from 'avoriaz';
import { triggerTouch } from '../utils';

function mockKeyDown(wrapper, keyIndex) {
  const customEvent = document.createEvent('CustomEvent');
  customEvent.initCustomEvent('touchstart', true, true, {});
  Object.defineProperty(customEvent, 'target', {
    value: {
      dataset: {
        key: keyIndex
      }
    }
  });
  wrapper.element.dispatchEvent(customEvent);
}

describe('NumberKeyboard', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a NumberKeyboard', () => {
    wrapper = mount(NumberKeyboard, {});
    expect(wrapper.hasClass('van-number-keyboard')).to.be.true;
  });

  it('click a keyboard key', (done) => {
    wrapper = mount(NumberKeyboard, {});

    // just for coverage
    wrapper.vm.handler(true);

    wrapper.vm.$on('input', value => {
      expect(value).to.equal(1);
      expect(wrapper.vm.active).to.equal(0);

      triggerTouch(wrapper, 'touchend');
      expect(wrapper.vm.active).to.equal(-1);
      done();
    });

    mockKeyDown(wrapper, 9);
    mockKeyDown(wrapper, NaN);
    mockKeyDown(wrapper, 0);
  });

  it('click delete key', (done) => {
    wrapper = mount(NumberKeyboard, {});

    const deleteSpy = sinon.spy();
    wrapper.vm.$on('delete', deleteSpy);

    mockKeyDown(wrapper, 11);
    wrapper.vm.$nextTick(() => {
      expect(deleteSpy.calledOnce).to.be.true;
      done();
    });
  });

  it('blur keyboard', (done) => {
    wrapper = mount(NumberKeyboard, {
      attachToDocument: true
    });

    const blur = sinon.spy();
    wrapper.vm.$on('blur', blur);

    triggerTouch(document.body, 'touchstart');
    wrapper.vm.$nextTick(() => {
      expect(blur.calledOnce).to.be.true;
      done();
    });
  });

  it('listen to show event when has transtion', (done) => {
    wrapper = mount(NumberKeyboard, {
      attachToDocument: true
    });

    const show = sinon.spy();
    wrapper.vm.$on('show', show);
    wrapper.vm.show = true;

    setTimeout(() => {
      expect(show.calledOnce).to.be.true;
      done();
    }, 800);
  });

  it('listen to show event when no transtion', (done) => {
    wrapper = mount(NumberKeyboard, {
      attachToDocument: true,
      propsData: {
        transition: false
      }
    });

    const show = sinon.spy();
    wrapper.vm.$on('show', show);
    wrapper.vm.show = true;

    wrapper.vm.$nextTick(() => {
      expect(show.calledOnce).to.be.true;
      done();
    });
  });

  it('listen to hide event when has transtion', (done) => {
    wrapper = mount(NumberKeyboard, {
      attachToDocument: true,
      propsData: {
        show: true
      }
    });

    const hide = sinon.spy();
    wrapper.vm.$on('hide', hide);
    wrapper.vm.show = false;

    setTimeout(() => {
      expect(hide.calledOnce).to.be.true;
      done();
    }, 800);
  });

  it('listen to hide event when no transtion', (done) => {
    wrapper = mount(NumberKeyboard, {
      attachToDocument: true,
      propsData: {
        show: true,
        transition: false
      }
    });

    const hide = sinon.spy();
    wrapper.vm.$on('hide', hide);
    wrapper.vm.show = false;

    wrapper.vm.$nextTick(() => {
      expect(hide.calledOnce).to.be.true;
      done();
    });
  });
});
