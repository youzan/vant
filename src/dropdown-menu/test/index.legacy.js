import { mount, later } from '../../../test';

function renderWrapper(options = {}) {
  return mount({
    template: `
      <van-dropdown-menu :direction="direction" :close-on-click-outside="closeOnClickOutside">
        <van-dropdown-item v-model="value" :title="title" :options="options" />
        <van-dropdown-item v-model="value" :title="title" :options="options" />
      </van-dropdown-menu>
    `,
    data() {
      return {
        value: options.value || 0,
        title: options.title || '',
        direction: options.direction || 'down',
        closeOnClickOutside: options.closeOnClickOutside,
        options: [
          { text: 'A', value: 0, icon: options.icon },
          { text: 'B', value: 1, icon: options.icon },
        ],
      };
    },
  });
}

test('show dropdown item', async () => {
  const wrapper = renderWrapper();

  await later();

  const titles = wrapper.findAll('.van-dropdown-menu__title');

  titles.at(0).trigger('click');
  expect(wrapper).toMatchSnapshot();

  titles.at(1).trigger('click');
  expect(wrapper).toMatchSnapshot();

  titles.at(1).trigger('click');
  expect(wrapper).toMatchSnapshot();
});

test('render option icon', async () => {
  const wrapper = renderWrapper({
    icon: 'success',
  });

  await later();

  const titles = wrapper.findAll('.van-dropdown-menu__title');

  titles.at(0).trigger('click');
  expect(wrapper).toMatchSnapshot();
});

test('close-on-click-outside', async () => {
  const wrapper = renderWrapper({
    closeOnClickOutside: true,
  });

  await later();

  const titles = wrapper.findAll('.van-dropdown-menu__title');

  titles.at(0).trigger('click');
  document.body.click();
  expect(wrapper).toMatchSnapshot();
});

test('disable close-on-click-outside', async () => {
  const wrapper = renderWrapper({
    closeOnClickOutside: false,
  });

  await later();

  const titles = wrapper.findAll('.van-dropdown-menu__title');

  titles.at(0).trigger('click');
  document.body.click();
  expect(wrapper).toMatchSnapshot();
});

test('direction up', async () => {
  const { innerHeight } = window;
  window.innerHeight = 1000;

  const wrapper = renderWrapper({
    direction: 'up',
  });

  await later();
  expect(wrapper).toMatchSnapshot();

  const titles = wrapper.findAll('.van-dropdown-menu__title');
  titles.at(0).trigger('click');
  expect(wrapper).toMatchSnapshot();

  window.innerHeight = innerHeight;
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
      <van-dropdown-menu>
        <van-dropdown-item v-if="render" v-model="value" :options="options" />
        <van-dropdown-item v-model="value" :options="options" />
      </van-dropdown-menu>
    `,
    data() {
      return {
        value: 0,
        render: true,
        options: [
          { text: 'A', value: 0 },
          { text: 'B', value: 1 },
        ],
      };
    },
  });

  await later();
  wrapper.setData({ render: false });
  expect(wrapper).toMatchSnapshot();
});

test('disable dropdown item', async () => {
  const wrapper = mount({
    template: `
      <van-dropdown-menu>
        <van-dropdown-item disabled v-model="value" :options="options" />
      </van-dropdown-menu>
    `,
    data() {
      return {
        value: 0,
        options: [
          { text: 'A', value: 0 },
          { text: 'B', value: 1 },
        ],
      };
    },
  });

  const title = wrapper.find('.van-dropdown-menu__title');
  title.trigger('click');
  expect(wrapper).toMatchSnapshot();
});

test('change event', async () => {
  const onChange = jest.fn();

  const wrapper = mount({
    template: `
      <van-dropdown-menu>
        <van-dropdown-item v-model="value" :options="options" @change="onChange" />
        <van-dropdown-item v-model="value" :options="options" />
      </van-dropdown-menu>
    `,
    data() {
      return {
        value: 0,
        options: [
          { text: 'A', value: 0 },
          { text: 'B', value: 1 },
        ],
      };
    },
    methods: {
      onChange,
    },
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

test('toggle method', async (done) => {
  const wrapper = mount({
    template: `
      <van-dropdown-menu>
        <van-dropdown-item ref="item" />
      </van-dropdown-menu>
    `,
    async mounted() {
      // show
      this.$refs.item.toggle(true, { immediate: true });
      await later();

      const content = wrapper.find('.van-dropdown-item__content');
      expect(content.element.style.display).toEqual('');

      // hide
      this.$refs.item.toggle(false, { immediate: true });
      await later();
      expect(content.element.style.display).toEqual('none');

      done();
    },
  });
});

test('title slot', () => {
  const wrapper = mount({
    template: `
      <van-dropdown-menu>
        <van-dropdown-item>
          <template #title>
            Custom Title
          </template>
        </van-dropdown-item>
      </van-dropdown-menu>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});
