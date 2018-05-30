import Collapse from '..';
import CollapseItem from '../../collapse-item';
import { mount } from '@vue/test-utils';

const component = {
  template: `
  <collapse v-model="active" :accordion="accordion">
    <collapse-item title="a" name="first">content</collapse-item>
    <collapse-item title="b">content</collapse-item>
    <collapse-item title="c">content</collapse-item>
  </collapse>
  `,
  components: {
    Collapse,
    CollapseItem
  },
  props: {
    accordion: Boolean
  },
  data() {
    return {
      active: this.accordion ? '' : []
    };
  }
};

test('basic mode', () => {
  const wrapper = mount(component);

  const titles = wrapper.findAll('.van-collapse-item__title');
  titles.at(0).trigger('click');
  expect(wrapper.vm.active).toEqual(['first']);

  titles.at(1).trigger('click');
  expect(wrapper.vm.active).toEqual(['first', 1]);

  titles.at(0).trigger('click');
  expect(wrapper.vm.active).toEqual([1]);

  wrapper.destroy();
});

it('accordion', () => {
  const wrapper = mount(component, {
    propsData: {
      accordion: true
    }
  });

  const titles = wrapper.findAll('.van-collapse-item__title');
  titles.at(0).trigger('click');
  expect(wrapper.vm.active).toEqual('first');

  titles.at(1).trigger('click');
  expect(wrapper.vm.active).toEqual(1);

  titles.at(0).trigger('click');
  expect(wrapper.vm.active).toEqual('first');

  titles.at(0).trigger('click');
  expect(wrapper.vm.active).toEqual('');
});
