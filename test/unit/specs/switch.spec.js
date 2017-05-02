import Switch from 'packages/switch';
import Vue from 'vue';
import VanLoading from 'packages/loading';
import { mount } from 'avoriaz';

describe('Switch', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create on switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        value: true
      }
    });

    expect(wrapper.hasClass('van-switch')).to.be.true;
    expect(wrapper.hasClass('van-switch--on')).to.be.true;
  });

  it('create off switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        value: false
      }
    });

    expect(wrapper.hasClass('van-switch')).to.be.true;
    expect(wrapper.hasClass('van-switch--off')).to.be.true;
  });

  it('create loading switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        loading: true
      }
    });
    const loading = wrapper.find(VanLoading)[0];

    expect(wrapper.hasClass('van-switch')).to.be.true;
    expect(loading.isVueComponent).to.be.true;
  });

  it('loading switch should be unclickable', () => {
    wrapper = mount(Switch, {
      propsData: {
        loading: true,
        value: true
      }
    });

    expect(wrapper.hasClass('van-switch--on')).to.be.true;
    wrapper.simulate('click');
    expect(wrapper.hasClass('van-switch--on')).to.be.true;
  });

  it('create disabled switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        disabled: true
      }
    });

    expect(wrapper.hasClass('van-switch')).to.be.true;
    expect(wrapper.hasClass('van-switch--disabled')).to.be.true;
  });

  it('disabled switch should be unclickable', () => {
    wrapper = mount(Switch, {
      propsData: {
        disabled: true,
        value: false
      }
    });

    expect(wrapper.hasClass('van-switch--off')).to.be.true;
    wrapper.simulate('click');
    expect(wrapper.hasClass('van-switch--off')).to.be.true;
  });

  it('click should toggle the switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        value: false
      }
    });

    expect(wrapper.hasClass('van-switch--off')).to.be.true;
    wrapper.simulate('click');
    expect(wrapper.hasClass('van-switch--on')).to.be.true;
  });

  it('click should call callback function', () => {
    const stub = sinon.stub();
    wrapper = mount(Switch, {
      propsData: {
        value: false,
        onChange: stub
      }
    });

    expect(wrapper.hasClass('van-switch--off')).to.be.true;
    wrapper.simulate('click');
    expect(wrapper.hasClass('van-switch--off')).to.be.true;
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith(true));
  });

  it('toggle switch value from v-model', function(done) {
    wrapper = mount(Switch, {
      propsData: {
        value: false
      }
    });
    const eventStub = sinon.stub(wrapper.vm, '$emit');

    expect(wrapper.hasClass('van-switch--off')).to.be.true;
    wrapper.vm.value = true;
    wrapper.update();
    Vue.nextTick(() => {
      expect(wrapper.hasClass('van-switch--on')).to.be.true;
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('input'));
      done();
    });
  });
});
