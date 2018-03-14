import TreeSelect from 'packages/tree-select';
import { mount } from 'avoriaz';

describe('TreeSelect', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create an empty tree-select', () => {
    wrapper = mount(TreeSelect);
    expect(wrapper.hasStyle('height', '0px')).to.be.true;
  });

  it('create a tree-select correctly', () => {
    wrapper = mount(TreeSelect, {
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
    expect(wrapper.hasClass('van-tree-select')).to.be.true;
    expect(wrapper.hasStyle('height', '44px')).to.be.true;
    expect(wrapper.vm.maxHeight).to.equal(200);
  });

  it('interact with this component', () => {
    wrapper = mount(TreeSelect, {
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
    const secondNav = wrapper.find('.van-tree-select__nitem')[1];
    secondNav.trigger('click');
    expect(wrapper.vm.mainActiveIndex).to.equal(1);
    const target = wrapper.find('.van-tree-select__item')[0];
    target.trigger('click');
    expect(wrapper.vm.activeId).to.equal(345);
  });
});
