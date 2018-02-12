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
        value: false,
        zIndex: 100,
        overlay: false,
        lockOnScroll: true
      }
    });

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    expect(wrapper.element.style.display).to.equal('none');

    wrapper.vm.value = true;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.element.style.display).to.equal('');
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

    expect(wrapper.element.style.display).to.equal('');
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
      expect(wrapper.element.style.display).to.equal('');
      wrapper.vm.value = false;
      triggerTouch(document, 'touchstart', 0, 0);
      triggerTouch(document, 'touchmove', 0, 10);
      triggerTouch(document, 'touchmove', 0, 30);
      triggerTouch(document, 'touchmove', 0, -30);

      setTimeout(() => {
        expect(wrapper.element.style.display).to.equal('none');
        done();
      }, 500);
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

  it('treat empty string as true for boolean props', () => {
    wrapper = mount(Popup, {
      propsData: {
        overlay: '',
        lockOnScroll: '',
        closeOnClickOverlay: ''
      }
    });

    expect(wrapper.vm.lockOnScroll).to.be.true;
  });

  it('get container prop', done => {
    const testNode = document.createElement('div');
    document.body.appendChild(testNode);

    wrapper = mount(Popup, {
      propsData: {
        getContainer: () => testNode
      }
    });

    expect(wrapper.vm.$el.parentNode === testNode).to.be.true;
    wrapper.vm.getContainer = () => document.body;

    setTimeout(() => {
      expect(wrapper.vm.$el.parentNode === document.body).to.be.true;
      done();
    }, 100);
  });
});
