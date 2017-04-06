import Button from 'packages/button';
import ZanLoading from 'packages/loading';
import { mount } from 'avoriaz';

describe('Button', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a simple button', () => {
    wrapper = mount(Button);

    expect(wrapper.hasClass('zan-button')).to.be.true;
    expect(wrapper.hasClass('zan-button--default')).to.be.true;
    expect(wrapper.hasClass('zan-button--normal')).to.be.true;

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    wrapper.simulate('click');

    expect(eventStub.calledOnce).to.be.true;
    expect(eventStub.calledWith('click')).to.be.true;
  });

  it('create a primary button', () => {
    wrapper = mount(Button, {
      propsData: {
        type: 'primary'
      }
    });

    expect(wrapper.hasClass('zan-button')).to.be.true;
    expect(wrapper.hasClass('zan-button--primary')).to.be.true;
  });

  it('create a danger button', () => {
    wrapper = mount(Button, {
      propsData: {
        type: 'danger'
      }
    });

    expect(wrapper.hasClass('zan-button')).to.be.true;
    expect(wrapper.hasClass('zan-button--danger')).to.be.true;
  });

  it('create a large button', () => {
    wrapper = mount(Button, {
      propsData: {
        size: 'large'
      }
    });

    expect(wrapper.hasClass('zan-button')).to.be.true;
    expect(wrapper.hasClass('zan-button--large')).to.be.true;
  });

  it('create a small button', () => {
    wrapper = mount(Button, {
      propsData: {
        size: 'small'
      }
    });

    expect(wrapper.hasClass('zan-button')).to.be.true;
    expect(wrapper.hasClass('zan-button--small')).to.be.true;
  });

  it('create a mini button', () => {
    wrapper = mount(Button, {
      propsData: {
        size: 'mini'
      }
    });

    expect(wrapper.hasClass('zan-button')).to.be.true;
    expect(wrapper.hasClass('zan-button--mini')).to.be.true;
  });

  it('create a block button', () => {
    wrapper = mount(Button, {
      propsData: {
        block: true
      }
    });

    expect(wrapper.hasClass('zan-button')).to.be.true;
    expect(wrapper.hasClass('zan-button--block')).to.be.true;
  });

  it('create a bottom action button', () => {
    wrapper = mount(Button, {
      propsData: {
        bottomAction: true
      }
    });

    expect(wrapper.hasClass('zan-button')).to.be.true;
    expect(wrapper.hasClass('zan-button--bottom-action')).to.be.true;
  });

  it('create a disabled button', () => {
    wrapper = mount(Button, {
      propsData: {
        disabled: true
      }
    });

    expect(wrapper.hasClass('zan-button')).to.be.true;
    expect(wrapper.hasClass('zan-button--disabled')).to.be.true;

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    wrapper.simulate('click');

    expect(eventStub.called).to.be.false;
  });

  it('create a loading button', () => {
    wrapper = mount(Button, {
      propsData: {
        loading: true
      }
    });
    const loading = wrapper.find(ZanLoading)[0];

    expect(wrapper.hasClass('zan-button')).to.be.true;
    expect(loading.isVueComponent).to.be.true;

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    wrapper.simulate('click');

    expect(eventStub.called).to.be.false;
  });
});
