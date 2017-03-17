import Switch from 'packages/switch';
import ZanLoading from 'packages/loading';
import { mount } from 'avoriaz';
// import { stub } from 'sinon';

describe('Switch', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create on switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        checked: true
      }
    });

    expect(wrapper.hasClass('zan-switch')).to.be.true;
    expect(wrapper.hasClass('zan-switch--on')).to.be.true;
  });

  it('create off switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        checked: false
      }
    });

    expect(wrapper.hasClass('zan-switch')).to.be.true;
    expect(wrapper.hasClass('zan-switch--off')).to.be.true;
  });

  it('create loading switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        loading: true
      }
    });
    const loading = wrapper.find(ZanLoading)[0];

    expect(wrapper.hasClass('zan-switch')).to.be.true;
    expect(loading.isVueComponent).to.be.true;
  });

  it('loading switch should be unclickable', () => {
    wrapper = mount(Switch, {
      propsData: {
        loading: true,
        checked: true
      }
    });

    expect(wrapper.hasClass('zan-switch--on')).to.be.true;
    wrapper.simulate('click');
    expect(wrapper.hasClass('zan-switch--on')).to.be.true;
  });

  it('create disabled switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        disabled: true
      }
    });

    expect(wrapper.hasClass('zan-switch')).to.be.true;
    expect(wrapper.hasClass('zan-switch--disabled')).to.be.true;
  });

  it('disabled switch should be unclickable', () => {
    wrapper = mount(Switch, {
      propsData: {
        disabled: true,
        checked: false
      }
    });

    expect(wrapper.hasClass('zan-switch--off')).to.be.true;
    wrapper.simulate('click');
    expect(wrapper.hasClass('zan-switch--off')).to.be.true;
  });

  it('click event should fire change event', () => {
    wrapper = mount(Switch, {
      propsData: {
        checked: false
      },
      methods: {

      }
    });
    const eventStub = sinon.stub(wrapper.vm, '$emit');

    expect(wrapper.hasClass('zan-switch--off')).to.be.true;
    wrapper.simulate('click');
    expect(eventStub.calledOnce).to.be.true;
    expect(eventStub.calledWith('change')).to.be.true;
  });
});
