import Popup from 'packages/popup';
import { mount } from 'avoriaz';
import { triggerTouch } from '../utils';

describe('Popup', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a popup', () => {
    wrapper = mount(Popup, {
      propsData: {
        position: 'bottom'
      }
    });

    expect(wrapper.hasClass('van-popup')).to.be.true;
    expect(wrapper.instance().currentTransition).to.equal('popup-slide-bottom');
  });

  it('create a show popup', (done) => {
    wrapper = mount(Popup, {
      propsData: {
        value: false
      }
    });

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    expect(wrapper.data().currentValue).to.be.false;

    wrapper.vm.value = true;
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.data().currentValue).to.be.true;
      expect(eventStub.calledWith('input'));
      done();
    });
  });

  it('toggle popup show', () => {
    wrapper = mount(Popup, {
      propsData: {
        value: true
      }
    });

    expect(wrapper.data().currentValue).to.be.true;
  });

  it('create a popup-fade transition popup', () => {
    wrapper = mount(Popup, {
      propsData: {
        transition: 'popup-fade'
      }
    });

    expect(wrapper.hasClass('van-popup')).to.be.true;
    expect(wrapper.instance().currentTransition).to.equal('popup-fade');
  });

  it('popup prevent scroll', (done) => {
    wrapper = mount(Popup, {
      propsData: {
        preventScroll: true,
        value: true
      }
    });

    expect(wrapper.hasClass('van-popup')).to.be.true;

    setTimeout(() => {
      expect(wrapper.data().currentValue).to.be.true;
      wrapper.vm.value = false;
      triggerTouch(document, 'touchstart', 0, 0);
      triggerTouch(document, 'touchmove', 0, 10);
      triggerTouch(document, 'touchmove', 0, 30);
      triggerTouch(document, 'touchmove', 0, -30);

      setTimeout(() => {
        expect(wrapper.data().currentValue).to.be.false;
        done();
      }, 300);
    }, 300);
  });

  it('popup modal', (done) => {
    wrapper = mount(Popup, {
      propsData: {
        preventScroll: true,
        value: true
      }
    });

    wrapper.vm.$on('input', val => {
      wrapper.vm.value = val;
    });

    expect(wrapper.hasClass('van-popup')).to.be.true;

    const modal = document.querySelector('.van-modal');

    setTimeout(() => {
      triggerTouch(modal, 'touchstart', 0, 0);
      triggerTouch(modal, 'touchmove', 0, 10);
      triggerTouch(modal, 'touchmove', 0, 30);
      triggerTouch(modal, 'touchmove', 0, -30);
      expect(modal).to.exist;

      modal.click();
      setTimeout(() => {
        expect(wrapper.data().currentValue).to.be.false;
        done();
      }, 300);
    }, 300);
  });
});
