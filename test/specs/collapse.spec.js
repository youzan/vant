import { mount } from 'avoriaz';
import Collapse from '../components/collapse';

describe('Circle', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('basic mode', () => {
    wrapper = mount(Collapse);

    const firstTitle = wrapper.find('.van-collapse-item__title')[0];
    firstTitle.trigger('click');
    expect(wrapper.vm.active).to.eql(['first']);

    const secondTitle = wrapper.find('.van-collapse-item__title')[1];
    secondTitle.trigger('click');
    expect(wrapper.vm.active).to.eql(['first', 1]);

    firstTitle.trigger('click');
    expect(wrapper.vm.active).to.eql([1]);
  });

  it('accordion', () => {
    wrapper = mount(Collapse, {
      propsData: {
        accordion: true
      }
    });

    const firstTitle = wrapper.find('.van-collapse-item__title')[0];
    firstTitle.trigger('click');
    expect(wrapper.vm.active).to.eql('first');

    const secondTitle = wrapper.find('.van-collapse-item__title')[1];
    secondTitle.trigger('click');
    expect(wrapper.vm.active).to.eql(1);

    firstTitle.trigger('click');
    expect(wrapper.vm.active).to.eql('first');

    firstTitle.trigger('click');
    expect(wrapper.vm.active).to.eql('');
  });
});

