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
});
