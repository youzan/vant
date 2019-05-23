import { mount, later } from '../../../test/utils';
import DropdownMenu from '..';
import DropdownItem from '../../dropdown-item';

function renderWrapper(options = {}) {
  return mount({
    template: `
      <dropdown-menu>
        <dropdown-item v-model="value" :title="title" :options="options" />
        <dropdown-item v-model="value" :title="title" :options="options" />
      </dropdown-menu>
    `,
    components: {
      DropdownItem,
      DropdownMenu
    },
    data() {
      return {
        value: options.value || 0,
        title: options.title || '',
        options: [
          { text: 'A', value: 0 },
          { text: 'B', value: 1 }
        ]
      };
    }
  });
}

test('show dropdown item', async () => {
  const wrapper = renderWrapper();

  await later();

  const titles = wrapper.findAll('.van-dropdown-menu__title');

  titles.at(0).trigger('click');
  expect(wrapper).toMatchSnapshot();

  titles.at(0).trigger('click');
  expect(wrapper).toMatchSnapshot();

  titles.at(1).trigger('click');
  expect(wrapper).toMatchSnapshot();
});

test('click option', async () => {
  const wrapper = renderWrapper();

  await later();

  const titles = wrapper.findAll('.van-dropdown-menu__title');
  titles.at(0).trigger('click');

  const options = wrapper.findAll('.van-dropdown-item .van-cell');
  options.at(1).trigger('click');

  await later();
  expect(wrapper).toMatchSnapshot();
});

test('title prop', async () => {
  const wrapper = renderWrapper({ title: 'Title' });
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('didn`t find matched option', async () => {
  const wrapper = renderWrapper({ value: -1 });
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('destroy one item', async () => {
  const wrapper = mount({
    template: `
      <dropdown-menu>
        <dropdown-item v-if="render" v-model="value" :options="options" />
        <dropdown-item v-model="value" :options="options" />
      </dropdown-menu>
    `,
    components: {
      DropdownItem,
      DropdownMenu
    },
    data() {
      return {
        value: 0,
        render: true,
        options: [
          { text: 'A', value: 0 },
          { text: 'B', value: 1 }
        ]
      };
    }
  });

  await later();
  wrapper.setData({ render: false });
  expect(wrapper).toMatchSnapshot();
});

test('disable dropdown item', async () => {
  const wrapper = mount({
    template: `
      <dropdown-menu>
        <dropdown-item disabled v-model="value" :options="options" />
      </dropdown-menu>
    `,
    components: {
      DropdownItem,
      DropdownMenu
    },
    data() {
      return {
        value: 0,
        options: [
          { text: 'A', value: 0 },
          { text: 'B', value: 1 }
        ]
      };
    }
  });

  const title = wrapper.find('.van-dropdown-menu__title');
  title.trigger('click');
  expect(wrapper).toMatchSnapshot();
});

test('change event', async () => {
  const onChange = jest.fn();

  const wrapper = mount({
    template: `
      <dropdown-menu>
        <dropdown-item v-model="value" :options="options" @change="onChange" />
        <dropdown-item v-model="value" :options="options" />
      </dropdown-menu>
    `,
    components: {
      DropdownItem,
      DropdownMenu
    },
    data() {
      return {
        value: 0,
        options: [
          { text: 'A', value: 0 },
          { text: 'B', value: 1 }
        ]
      };
    },
    methods: {
      onChange
    }
  });

  await later();

  const titles = wrapper.findAll('.van-dropdown-menu__title');
  titles.at(0).trigger('click');

  const options = wrapper.findAll('.van-dropdown-item .van-cell');
  options.at(0).trigger('click');

  expect(onChange).toHaveBeenCalledTimes(0);

  options.at(1).trigger('click');
  expect(onChange).toHaveBeenCalledWith(1);
  expect(onChange).toHaveBeenCalledTimes(1);
});
