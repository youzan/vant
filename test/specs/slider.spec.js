import Slider from 'packages/slider';
import { mount } from 'avoriaz';
import { triggerTouch } from '../utils';

describe('Slider', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a simple slider', () => {
    wrapper = mount(Slider, {
      propsData: {
        value: 50,
        disabled: true
      }
    });

    expect(wrapper.hasClass('van-slider')).to.be.true;
    expect(wrapper.find('.van-slider__bar').length).to.equal(1);
    expect(wrapper.vm.value).to.equal(50);
    expect(wrapper.hasClass('van-slider--disabled')).to.equal(true);

    wrapper.setProps({
      value: 100
    });
    wrapper.update();

    expect(wrapper.vm.value).to.equal(100);
  });

  it('test click bar', () => {
    wrapper = mount(Slider, {
      propsData: {
        disabled: true,
        value: 50
      }
    });

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    const $bar = wrapper.find('.van-slider')[0];
    $bar.trigger('click');
    const button = wrapper.find('.van-slider__button')[0];
    triggerTouch(button, 'touchstart', 0, 0);
    expect(wrapper.vm.startX).to.equal(undefined);

    triggerTouch(button, 'touchmove', 50, 0);
    expect(wrapper.vm.offsetX).to.equal(undefined);

    triggerTouch(button, 'touchend', 50, 0);
    expect(wrapper.vm.offsetX).to.equal(undefined);

    expect(eventStub.called).to.equal(false);

    wrapper.setData({
      disabled: false
    });
    wrapper.update();
    $bar.trigger('click');

    expect(wrapper.vm.disabled).to.equal(false);
    expect(eventStub.called).to.equal(true);
  });

  it('drag button', () => {
    wrapper = mount(Slider, {
      propsData: {
        value: 50
      }
    });

    const button = wrapper.find('.van-slider__button')[0];
    triggerTouch(button, 'touchstart', 0, 0);
    expect(wrapper.vm.startX).to.equal(0);

    triggerTouch(button, 'touchmove', 50, 0);
    expect(wrapper.vm.offsetX).to.equal(50);

    triggerTouch(button, 'touchend', 50, 0);
    expect(wrapper.vm.offsetX).to.equal(50);

    wrapper.setData({
      disabled: true
    });

    triggerTouch(button, 'touchstart', 0, 0);
    expect(wrapper.vm.startX).to.equal(0);
  });
});
