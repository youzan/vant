import { later, mount } from '../../../test';
import { reactive, ref, onMounted } from 'vue';
import DropdownItem from '../../dropdown-item';
import DropdownMenu, { DropdownMenuDirection } from '..';

function renderWrapper(
  options: {
    value?: number;
    title?: string;
    direction?: DropdownMenuDirection | undefined;
    closeOnClickOutside?: boolean;
    icon?: string;
  } = {}
) {
  return mount({
    setup() {
      const state = reactive({
        value: options.value || 0,
        title: options.title || '',
        direction: options.direction || 'down',
        closeOnClickOutside: !!options.closeOnClickOutside,
        options: [
          { text: 'A', value: 0, icon: options.icon },
          { text: 'B', value: 1, icon: options.icon },
        ],
      });

      return () => (
        <DropdownMenu
          direction={state.direction}
          closeOnClickOutside={state.closeOnClickOutside}
        >
          <DropdownItem
            modelValue={state.value}
            title={state.title}
            options={state.options}
          />
          <DropdownItem
            modelValue={state.value}
            title={state.title}
            options={state.options}
          />
        </DropdownMenu>
      );
    },
  });
}

test('show dropdown item', async () => {
  const wrapper = renderWrapper();

  await later();

  const titles = wrapper.findAll('.van-dropdown-menu__title');

  await titles[0].trigger('click');
  expect(wrapper.html()).toMatchSnapshot();

  await titles[1].trigger('click');
  expect(wrapper.html()).toMatchSnapshot();

  await titles[1].trigger('click');
  expect(wrapper.html()).toMatchSnapshot();
});

test('render option icon', async () => {
  const wrapper = renderWrapper({
    icon: 'success',
  });

  await later();

  const titles = wrapper.findAll('.van-dropdown-menu__title');

  await titles[0].trigger('click');
  expect(wrapper.html()).toMatchSnapshot();
});

test('close-on-click-outside', async () => {
  const wrapper = renderWrapper({
    closeOnClickOutside: true,
  });

  await later();

  const titles = wrapper.findAll('.van-dropdown-menu__title');

  await titles[0].trigger('click');

  document.body.click();
  await later();

  expect(wrapper.html()).toMatchSnapshot();
});

test('disable close-on-click-outside', async () => {
  const wrapper = renderWrapper({
    closeOnClickOutside: false,
  });

  await later();

  const titles = wrapper.findAll('.van-dropdown-menu__title');

  await titles[0].trigger('click');
  document.body.click();
  await later();

  expect(wrapper.html()).toMatchSnapshot();
});

test('direction up', async () => {
  const wrapper = renderWrapper({
    direction: 'up',
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();

  const titles = wrapper.findAll('.van-dropdown-menu__title');
  await titles[0].trigger('click');
  expect(wrapper.html()).toMatchSnapshot();
});

test('click option', async () => {
  const wrapper = renderWrapper();

  await later();

  const titles = wrapper.findAll('.van-dropdown-menu__title');
  await titles[0].trigger('click');

  const options = wrapper.findAll('.van-dropdown-item .van-cell');
  await options[1].trigger('click');

  await later();
  expect(wrapper.html()).toMatchSnapshot();
});

test('title prop', async () => {
  const wrapper = renderWrapper({ title: 'Title' });
  await later();

  expect(wrapper.html()).toMatchSnapshot();
});

test('destroy one item', async () => {
  const wrapper = mount({
    props: {
      render: {
        type: Boolean,
        default: true,
      },
    },
    setup(props) {
      const options = [
        { text: 'A', value: 0 },
        { text: 'B', value: 1 },
      ];
      const value = 0;

      return () => (
        <DropdownMenu>
          {props.render && (
            <DropdownItem modelValue={value} options={options} />
          )}
          <DropdownItem modelValue={value} options={options} />
        </DropdownMenu>
      );
    },
  });

  await later();
  await wrapper.setProps({ render: false });
  expect(wrapper.html()).toMatchSnapshot();
});

test('disable dropdown item', async () => {
  const wrapper = mount({
    setup() {
      const options = [
        { text: 'A', value: 0 },
        { text: 'B', value: 1 },
      ];

      return () => (
        <DropdownMenu>
          <DropdownItem disabled modelValue={0} options={options} />
        </DropdownMenu>
      );
    },
  });

  await later();
  const title = wrapper.find('.van-dropdown-menu__title');
  await title.trigger('click');
  expect(wrapper.html()).toMatchSnapshot();
});

test('change event', async () => {
  const onChange = jest.fn();

  const wrapper = mount({
    setup() {
      const options = [
        { text: 'A', value: 0 },
        { text: 'B', value: 1 },
      ];

      return () => (
        <DropdownMenu>
          <DropdownItem modelValue={0} options={options} onChange={onChange} />
          <DropdownItem modelValue={0} options={options} />
        </DropdownMenu>
      );
    },
  });

  await later();

  const titles = wrapper.findAll('.van-dropdown-menu__title');
  await titles[0].trigger('click');

  const options = wrapper.findAll('.van-dropdown-item .van-cell');
  await options[0].trigger('click');

  expect(onChange).toHaveBeenCalledTimes(0);

  await options[1].trigger('click');
  expect(onChange).toHaveBeenCalledWith(1);
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('toggle method', (done) => {
  const wrapper = mount({
    setup() {
      const item = ref();

      onMounted(async () => {
        // show
        item.value.toggle(true, { immediate: true });
        await later();

        expect(
          wrapper.find('.van-dropdown-item__content').style.display
        ).toEqual('');

        // hide
        item.value.toggle(false, { immediate: true });
        await later();
        expect(
          wrapper.find('.van-dropdown-item__content').style.display
        ).toEqual('none');

        done();
      });

      return () => (
        <DropdownMenu>
          <DropdownItem ref={item} />
        </DropdownMenu>
      );
    },
  });
});

test('title slot', async () => {
  const wrapper = mount({
    setup() {
      return () => (
        <DropdownMenu>
          <DropdownItem>{{ title: () => 'Custom Title' }}</DropdownItem>
        </DropdownMenu>
      );
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
});
