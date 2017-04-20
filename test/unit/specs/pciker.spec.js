import Picker from 'packages/picker';
import { mount } from 'avoriaz';

describe('Picker', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a empty picker and emit a cencel event', (done) => {
    wrapper = mount(Picker, {
      propsData: {
        showToolbar: true
      }
    });

    expect(wrapper.hasClass('van-picker')).to.be.true;
    expect(wrapper.contains('.van-picker__toolbar')).to.be.true;
    expect(wrapper.computed().values().length).to.equal(0);

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    const cancelBtn = wrapper.find('.van-picker__cancel')[0];
    cancelBtn.simulate('click');

    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('cancel'));
      done();
    });
  });

  it('create a empty picker and emit a confirm event', (done) => {
    wrapper = mount(Picker, {
      propsData: {
        showToolbar: true
      }
    });

    expect(wrapper.hasClass('van-picker')).to.be.true;
    expect(wrapper.contains('.van-picker__toolbar')).to.be.true;

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    const cancelBtn = wrapper.find('.van-picker__confirm')[0];
    cancelBtn.simulate('click');

    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('confirm'));
      done();
    });
  });
});
