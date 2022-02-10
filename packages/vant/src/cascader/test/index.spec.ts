import { Cascader } from '..';
import { mount, later } from '../../../test';
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
  expect(wrapper.emitted('change')![0]).toEqual([
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
  expect(wrapper.emitted('change')![1]).toEqual([
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
  expect(wrapper.emitted('finish')![0]).toEqual([
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
  expect(wrapper.emitted('close')![0]).toBeTruthy();
});

test('should not render close icon when closeable is false', () => {
  const wrapper = mount(Cascader, {
    props: {
      closeable: false,
    },
  });
  expect(wrapper.find('.van-cascader__close-icon').exists()).toBeFalsy();
});

test('should change close icon when using close-icon prop', () => {
  const wrapper = mount(Cascader, {
    props: {
      closeIcon: 'success',
    },
  });
  expect(wrapper.find('.van-cascader__close-icon').html()).toMatchSnapshot();
});

test('should render title slot correctly', () => {
  const wrapper = mount(Cascader, {
    slots: {
      title: () => 'Custom Title',
    },
  });
  expect(wrapper.find('.van-cascader__title').html()).toMatchSnapshot();
});

test('should render option slot correctly', async () => {
  const option = { value: '1', text: 'foo' };
  const wrapper = mount(Cascader, {
    props: {
      options: [option],
    },
    slots: {
      option: ({ option }) => `Custom Option ${option.text}`,
    },
  });
  await later();
  expect(wrapper.find('.van-cascader__option').html()).toMatchSnapshot();
});

test('should select correct option when value changed', async () => {
  const wrapper = mount(Cascader, {
    props: {
      options,
    },
  });

  await later();
  await wrapper.setProps({ modelValue: '330304' });
  await later();
  const selectedOptions = wrapper.findAll('.van-cascader__option--selected');
  const lastSelectedOption = selectedOptions[selectedOptions.length - 1];
  expect(lastSelectedOption.html()).toMatchSnapshot();
});

test('should reset selected options when value is set to empty', async () => {
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

test('should allow to custom field names', async () => {
  const fieldNames = {
    text: 'name',
    value: 'code',
    children: 'items',
  };
  const options = [
    {
      name: 'Zhejiang',
      code: '330000',
      items: [{ name: 'Hangzhou', code: '330100' }],
    },
  ];
  const wrapper = mount(Cascader, {
    props: {
      options,
      fieldNames,
    },
  });

  await later();
  wrapper.find('.van-cascader__option').trigger('click');

  const firstOption = options[0];
  expect(wrapper.emitted('change')![0]).toEqual([
    {
      value: firstOption.code,
      tabIndex: 0,
      selectedOptions: [firstOption],
    },
  ]);

  await later();
  wrapper
    .findAll('.van-cascader__options')[1]
    .find('.van-cascader__option')
    .trigger('click');
  const secondOption = options[0].items[0];
  expect(wrapper.emitted('change')![1]).toEqual([
    {
      value: secondOption.code,
      tabIndex: 1,
      selectedOptions: [firstOption, secondOption],
    },
  ]);
});

test('should emit clickTab event when a tab is clicked', async () => {
  const wrapper = mount(Cascader, {
    props: {
      options,
    },
  });

  await later();
  wrapper.find('.van-cascader__option').trigger('click');
  await later();
  wrapper
    .findAll('.van-cascader__options')[1]
    .find('.van-cascader__option')
    .trigger('click');
  await later();

  const tabs = wrapper.findAll('.van-tab');

  tabs[0].trigger('click');
  expect(wrapper.emitted('clickTab')![0]).toEqual([0, options[0].text]);

  tabs[1].trigger('click');
  expect(wrapper.emitted('clickTab')![1]).toEqual([
    1,
    options[0].children[0].text,
  ]);
});

test('should allow to custom the className of option', async () => {
  const wrapper = mount(Cascader, {
    props: {
      options: [{ value: '1', text: 'foo', className: 'foo' }],
    },
  });

  await later();
  const option = wrapper.find('.van-cascader__option');
  expect(option.classes()).toContain('foo');
});

test('should allow to custom the color of option', async () => {
  const wrapper = mount(Cascader, {
    props: {
      options: [{ value: '1', text: 'foo', color: 'red' }],
    },
  });

  await later();
  const option = wrapper.find('.van-cascader__option');
  expect(option.style.color).toEqual('red');
});

test('should render options-top、options-bottom slots correctly', async () => {
  const wrapper = mount(Cascader, {
    slots: {
      'options-top': ({ tabIndex }) => `Top, tab index: ${tabIndex}`,
      'options-bottom': ({ tabIndex }) => `Bottom, tab index: ${tabIndex}`,
    },
    props: {
      options,
    },
  });

  await later();
  await wrapper
    .findAll('.van-cascader__options')[0]
    .find('.van-cascader__option')
    .trigger('click');

  expect(wrapper.find('.van-tab__panel').html()).toMatchSnapshot();
});

test('should not render header when show-header prop is false', async () => {
  const wrapper = mount(Cascader, {
    props: {
      options,
      showHeader: false,
    },
  });

  const header = wrapper.find('.van-cascader__header');
  expect(header.exists()).toBeFalsy();
});
