import DeepSelect from 'packages/deep-select';
import { mount } from 'avoriaz';

describe('DeepSelect', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create an empty deep-select', () => {
    wrapper = mount(DeepSelect);
    expect(wrapper.hasStyle('height', '0px')).to.be.true;
  });

  it('create a deep-select correctly', () => {
    wrapper = mount(DeepSelect, {
      propsData: {
        items: [{
          text: 'A',
          children: [{
            text: 'Cc',
            id: 123
          }]
        }],
        maxHeight: 200
      }
    });
    expect(wrapper.hasClass('van-deep-select')).to.be.true;
    expect(wrapper.hasStyle('height', '44px')).to.be.true;
    expect(wrapper.propsData().maxHeight).to.equal(200);
  });

  it('interact with this component', () => {
    wrapper = mount(DeepSelect, {
      propsData: {
        items: [{
          text: 'A',
          children: [{
            text: 'Cc',
            id: 123
          }, {
            text: 'Bb',
            id: 234
          }]
        }, {
          text: 'B',
          children: [{
            text: 'Nmi',
            id: 345
          }]
        }],
        maxHeight: 220
      }
    });
    wrapper.vm.$on('navclick', index => {
      wrapper.vm.mainActiveIndex = index;
    });
    wrapper.vm.$on('itemclick', item => {
      wrapper.vm.activeId = item.id;
    });
    const secondNav = wrapper.find('.van-deep-select__nitem')[1];
    secondNav.trigger('click');
    expect(wrapper.vm.mainActiveIndex).to.equal(1);
    const target = wrapper.find('.van-deep-select__item')[0];
    target.trigger('click');
    expect(wrapper.vm.activeId).to.equal(345);
  });
});
