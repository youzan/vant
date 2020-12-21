import Cascader from '..';
import { mount } from '@vue/test-utils';
import { later } from '../../../test';
import options from '../demo/area-en-US';

test('should emit change event when active option changed', async () => {
  const wrapper = mount(Cascader, {
    props: {
      options,
    },
  });

  await later();
  wrapper.find('.van-cascader__option').trigger('click');

  const firstOption = options[0];
  expect(wrapper.emitted('change')[0]).toEqual([
    {
      value: firstOption.value,
      tabIndex: 0,
      selectedOptions: [firstOption],
    },
  ]);

  await later();
  wrapper
    .findAll('.van-cascader__options')[1]
    .find('.van-cascader__option')
    .trigger('click');
  const secondOption = options[0].children[0];
  expect(wrapper.emitted('change')[1]).toEqual([
    {
      value: secondOption.value,
      tabIndex: 1,
      selectedOptions: [firstOption, secondOption],
    },
  ]);
});

test('should emit finish event when all options is selected', async () => {
  const option = { value: '1', text: 'foo' };
  const wrapper = mount(Cascader, {
    props: {
      options: [option],
    },
  });

  await later();
  wrapper.find('.van-cascader__option').trigger('click');
  expect(wrapper.emitted('finish')[0]).toEqual([
    {
      value: option.value,
      tabIndex: 0,
      selectedOptions: [option],
    },
  ]);
});

test('should emit close event when close icon is clicked', () => {
  const wrapper = mount(Cascader);
  wrapper.find('.van-cascader__close-icon').trigger('click');
  expect(wrapper.emitted('close')[0]).toBeTruthy();
});

test('should not render close icon when closeable is false', () => {
  const wrapper = mount(Cascader, {
    props: {
      closeable: false,
    },
  });
  expect(wrapper.find('.van-cascader__close-icon').exists()).toBeFalsy();
});

test('should render title slot correctly', () => {
  const wrapper = mount(Cascader, {
    slots: {
      title: () => 'Custom Title',
    },
  });
  expect(wrapper.find('.van-cascader__title').html()).toMatchSnapshot();
});

// TODO
// test('should select correct option when value changed', async () => {
//   const wrapper = mount(Cascader, {
//     props: {
//       options,
//     },
//   });

//   await later();
//   await wrapper.setProps({ modelValue: '330304' });
//   await later();
//   const selectedOptions = wrapper.findAll('.van-cascader__option--selected');
//   const lastSelectedOption = selectedOptions[selectedOptions.length - 1];
//   expect(lastSelectedOption.html()).toMatchSnapshot();
// });

test('should reset selected options when value is set to emtpy', async () => {
  const wrapper = mount(Cascader, {
    props: {
      options,
      modelValue: '330304',
    },
  });

  await wrapper.setProps({ modelValue: '' });
  expect(wrapper.find('.van-cascader__option--selected').exists()).toBeFalsy();
});

test('should update tabs when previous tab is clicked', async () => {
  const wrapper = mount(Cascader, {
    props: {
      options,
      modelValue: '330304',
    },
  });

  await later();
  wrapper.findAll('.van-cascader__option')[1].trigger('click');
  await later();
  expect(wrapper.html()).toMatchSnapshot();
});
