import Icon from 'packages/icon';
import { mount } from 'avoriaz';

describe('Icon', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a icon', () => {
    wrapper = mount(Icon, {
      propsData: {
        name: 'arrow'
      }
    });

    expect(wrapper.hasClass('van-icon')).to.be.true;
    expect(wrapper.hasClass('van-icon-arrow')).to.be.true;
  });

  it('emit a click event', () => {
    wrapper = mount(Icon, {
      propsData: {
        name: 'arrow'
      }
    });

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    wrapper.simulate('click');

    expect(eventStub.calledOnce).to.be.true;
    expect(eventStub.calledWith('click')).to.be.true;
  });
});
