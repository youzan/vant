import Vue from 'vue';
import Popup from 'packages/popup';
import { mount } from 'avoriaz';

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

    expect(wrapper.hasClass('zan-popup')).to.be.true;
    expect(wrapper.instance().currentTransition).to.equal('popup-slide-bottom');
  });

  it('create a show popup', () => {
    wrapper = mount(Popup, {
      propsData: {
        value: true
      }
    });

    expect(wrapper.data().currentValue).to.be.true;

    const eventStub = sinon.stub(wrapper.vm, '$emit');

    wrapper.vm.value = false;
    wrapper.update();
    Vue.nextTick(() => {
      expect(wrapper.data().currentValue).to.be.true;
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('input'));
      done();
    });
  });
});
