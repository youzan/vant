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
    expect(wrapper.find('.van-slider__finished-portion').length).to.equal(1);
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
    const $bar = wrapper.find('.van-slider__bar')[0];
    $bar.trigger('click');

    expect(eventStub.called).to.equal(false);

    wrapper.setData({
      disabled: false
    });
    wrapper.update();
    $bar.trigger('click');

    expect(wrapper.vm.disabled).to.equal(false);
    expect(eventStub.called).to.equal(true);
  });

  it('Customized style', () => {
    const COLOR = '#123';
    wrapper = mount(Slider, {
      propsData: {
        pivotColor: COLOR,
        barColor: COLOR,
        loadedBarColor: COLOR,
        value: 50
      }
    });

    expect(wrapper.vm.barStyle.backgroundColor).to.equal(COLOR);
    expect(wrapper.vm.pivotStyle.backgroundColor).to.equal(COLOR);
    expect(wrapper.vm.finishedStyle.backgroundColor).to.equal(COLOR);
  });

  it('drag pivot', () => {
    wrapper = mount(Slider, {
      propsData: {
        value: 50
      }
    });

    const pivot = wrapper.find('.van-slider__pivot')[0];
    triggerTouch(pivot, 'touchstart', 0, 0);
    expect(wrapper.vm.startX).to.equal(0);

    triggerTouch(pivot, 'touchmove', 50, 0);
    expect(wrapper.vm.offsetX).to.equal(50);

    triggerTouch(pivot, 'touchend', 50, 0);
    expect(wrapper.vm.offsetX).to.equal(50);

    wrapper.setData({
      disabled: true
    });

    triggerTouch(pivot, 'touchstart', 0, 0);
    expect(wrapper.vm.startX).to.equal(0);
  });
});
