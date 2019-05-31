import { mount } from '../../../test/utils';
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
      cancelText: 'Cancel'
    },
    context: {
      on: {
        input: onInput,
        cancel: onCancel,
        select: onSelect
      }
    }
  });

  const options = wrapper.findAll('.van-action-sheet__item');
  options.at(0).trigger('click');
  options.at(1).trigger('click');
  wrapper.find('.van-action-sheet__cancel').trigger('click');

  expect(callback).toHaveBeenCalled();
  expect(onCancel).toHaveBeenCalled();
  expect(onInput).toHaveBeenCalledWith(false);
  expect(onSelect).toHaveBeenCalledWith(actions[0], 0);
  expect(wrapper).toMatchSnapshot();
});

test('click overlay and close', () => {
  const onInput = jest.fn();
  const div = document.createElement('div');

  mount({
    template: `
      <div>
        <action-sheet
          :value="true"
          :get-container="getContainer"
          @input="onInput"
        />
      </div>
    `,
    components: {
      ActionSheet
    },
    data() {
      return {
        getContainer: () => div
      };
    },
    methods: {
      onInput
    }
  });

  div.querySelector('.van-overlay').click();
  expect(onInput).toHaveBeenCalledWith(false);
});

test('disable lazy-render', () => {
  const wrapper = mount(ActionSheet, {
    propsData: {
      lazyRender: false,
      actions: [
        { name: 'Option' },
        { name: 'Option' }
      ],
      cancelText: 'Cancel'
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('render title and default slot', () => {
  const wrapper = mount(ActionSheet, {
    propsData: {
      title: 'Title'
    },
    scopedSlots: {
      default() {
        return 'Default';
      }
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('get container', () => {
  const wrapper = mount(ActionSheet, {
    propsData: {
      value: true,
      getContainer: 'body'
    }
  });

  expect(wrapper.vm.$el.parentNode).toEqual(document.body);
});

test('close-on-click-action prop', () => {
  const onInput = jest.fn();
  const wrapper = mount(ActionSheet, {
    propsData: {
      value: true,
      actions: [{ name: 'Option' }],
      closeOnClickAction: true
    },
    context: {
      on: {
        input: onInput
      }
    }
  });

  const option = wrapper.find('.van-action-sheet__item');
  option.trigger('click');

  expect(onInput).toHaveBeenCalledWith(false);
});
