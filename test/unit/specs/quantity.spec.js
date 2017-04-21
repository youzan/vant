import Quantity from 'packages/quantity';
import { mount } from 'avoriaz';

describe('Quantity', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a quantity', () => {
    wrapper = mount(Quantity, {
      propsData: {
        defaultValue: 1
      }
    });

    expect(wrapper.hasClass('van-quantity')).to.be.true;
    expect(wrapper.data().currentValue).to.equal(1);

    const plusButton = wrapper.find('.van-quantity__plus')[0];
    plusButton.simulate('click');

    expect(wrapper.data().currentValue).to.equal(2);

    const minusButton = wrapper.find('.van-quantity__minus')[0];
    minusButton.simulate('click');
    expect(wrapper.data().currentValue).to.equal(1);
  });

  it('create a disabled quantity', (done) => {
    wrapper = mount(Quantity, {
      propsData: {
        disabled: true
      }
    });

    expect(wrapper.hasClass('van-quantity')).to.be.true;
    const minusButton = wrapper.find('.van-quantity__minus')[0];
    expect(minusButton.hasClass('van-quantity__minus--disabled')).to.be.true;

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    minusButton.simulate('click');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledWith('overlimit'));
      done();
    });

    const plusButton = wrapper.find('.van-quantity__plus')[0];
    expect(plusButton.hasClass('van-quantity__plus--disabled')).to.be.true;

    plusButton.simulate('click');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledWith('overlimit'));
      done();
    });
  });

  it('update quantity value use v-model', (done) => {
    wrapper = mount(Quantity, {
      propsData: {
        value: 1
      }
    });

    expect(wrapper.hasClass('van-quantity')).to.be.true;
    const eventStub = sinon.stub(wrapper.vm, '$emit');

    wrapper.vm.value = 2;
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledWith('input'));
      expect(eventStub.calledWith('change'));
      done();
    });
  });

  it('correct value when value is not correct', (done) => {
    wrapper = mount(Quantity, {
      propsData: {
        value: 50,
        max: 30
      }
    });

    expect(wrapper.hasClass('van-quantity')).to.be.true;
    expect(wrapper.vm.currentValue).to.equal(30);
    const eventStub = sinon.stub(wrapper.vm, '$emit');

    wrapper.vm.value = 30;
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.currentValue).to.equal(30);
      expect(eventStub.calledWith('input'));
      done();
    });
  });

  it('handle when input change', (done) => {
    wrapper = mount(Quantity, {
      propsData: {
        value: 1
      }
    });

    const input = wrapper.find('.van-quantity__input')[0];
    input.element.value = 2;
    input.simulate('input');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.data().currentValue).to.equal(2);
      done();
    });
  });
});
