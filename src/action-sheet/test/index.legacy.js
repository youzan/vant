import { mount, later } from '../../../test';
import ActionSheet from '..';

test('callback events', () => {
  const callback = jest.fn();
  const onInput = jest.fn();
  const onCancel = jest.fn();
  const onSelect = jest.fn();

  const actions = [
    { name: 'Option', callback },
    { name: 'Option', disabled: true },
    { name: 'Option', loading: true },
    { name: 'Option', subname: 'Subname' },
  ];

  const wrapper = mount(ActionSheet, {
    propsData: {
      value: true,
      actions,
      cancelText: 'Cancel',
    },
    context: {
      on: {
        input: onInput,
        cancel: onCancel,
        select: onSelect,
      },
    },
  });

  const options = wrapper.findAll('.van-action-sheet__item');
  options.at(0).trigger('click');
  options.at(1).trigger('click');
  wrapper.find('.van-action-sheet__cancel').trigger('click');

  expect(callback).toHaveBeenCalled();
  expect(onCancel).toHaveBeenCalled();
  expect(onInput).toHaveBeenCalledWith(false);
  expect(onSelect).toHaveBeenCalledWith(actions[0], 0);
  expect(wrapper.html()).toMatchSnapshot();
});

test('click overlay and close', async () => {
  const onInput = jest.fn();
  const onClickOverlay = jest.fn();
  const div = document.createElement('div');

  mount({
    template: `
      <div>
        <action-sheet
          :value="true"
          :teleport="teleport"
          @input="onInput"
          @click-overlay="onClickOverlay"
        />
      </div>
    `,
    components: {
      ActionSheet,
    },
    data() {
      return {
        teleport: () => div,
      };
    },
    methods: {
      onInput,
      onClickOverlay,
    },
  });

  await later();

  div.querySelector('.van-overlay').click();
  expect(onInput).toHaveBeenCalledWith(false);
  expect(onClickOverlay).toHaveBeenCalledTimes(1);
});

test('close-on-click-action prop', () => {
  const onInput = jest.fn();
  const wrapper = mount(ActionSheet, {
    propsData: {
      value: true,
      actions: [{ name: 'Option' }],
      closeOnClickAction: true,
    },
    context: {
      on: {
        input: onInput,
      },
    },
  });

  const option = wrapper.find('.van-action-sheet__item');
  option.trigger('click');

  expect(onInput).toHaveBeenCalledWith(false);
});

test('color option', () => {
  const wrapper = mount(ActionSheet, {
    propsData: {
      value: true,
      actions: [{ name: 'Option', color: 'red' }],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('description prop', () => {
  const wrapper = mount(ActionSheet, {
    propsData: {
      value: true,
      description: 'This is a description',
      actions: [{ name: 'Option' }],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('description slot', () => {
  const wrapper = mount(ActionSheet, {
    propsData: {
      value: true,
      actions: [{ name: 'Option' }],
    },
    scopedSlots: {
      description: () => 'Custom Description',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('close-icon prop', () => {
  const wrapper = mount(ActionSheet, {
    propsData: {
      value: true,
      title: 'Title',
      closeIcon: 'cross',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('closeable prop', () => {
  const wrapper = mount(ActionSheet, {
    propsData: {
      value: true,
      title: 'Title',
      closeable: false,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
