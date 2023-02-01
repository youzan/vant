import { later, mount, triggerDrag } from '../../../test';
import { Picker } from '..';

const simpleColumn = [
  { text: '1990', value: '1990' },
  { text: '1991', value: '1991' },
  { text: '1992', value: '1992' },
  { text: '1993', value: '1993' },
  { text: '1994', value: '1994' },
  { text: '1995', value: '1995' },
];

test('should emit confirm event after clicking the confirm button', async () => {
  const wrapper = mount(Picker, {
    props: {
      showToolbar: true,
      columns: simpleColumn,
    },
  });

  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')![0]).toEqual([
    {
      selectedOptions: [{ text: '1990', value: '1990' }],
      selectedValues: ['1990'],
      selectedIndexes: [0],
    },
  ]);
});

test('should emit cancel event after clicking the cancel button', () => {
  const wrapper = mount(Picker, {
    props: {
      showToolbar: true,
      columns: simpleColumn,
    },
  });

  wrapper.find('.van-picker__cancel').trigger('click');
  expect(wrapper.emitted('cancel')![0]).toEqual([
    {
      selectedOptions: [{ text: '1990', value: '1990' }],
      selectedValues: ['1990'],
      selectedIndexes: [0],
    },
  ]);
});

test('should emit change event after draging the column', async () => {
  const wrapper = mount(Picker, {
    props: {
      columns: simpleColumn,
    },
  });

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  await wrapper.find('.van-picker-column ul').trigger('transitionend');

  expect(wrapper.emitted('change')).toEqual([
    [
      {
        columnIndex: 0,
        selectedOptions: [{ text: '1995', value: '1995' }],
        selectedValues: ['1995'],
        selectedIndexes: [5],
      },
    ],
  ]);
});

test('should emit change event when after clicking a option', async () => {
  const columns = [
    { text: 'A', value: 'A' },
    { text: 'B', value: 'B' },
  ];
  const wrapper = mount(Picker, {
    props: {
      columns,
    },
  });

  await wrapper.findAll('.van-picker-column__item')[1].trigger('click');
  expect(wrapper.emitted('change')).toEqual([
    [
      {
        columnIndex: 0,
        selectedOptions: [{ text: 'B', value: 'B' }],
        selectedValues: ['B'],
        selectedIndexes: [1],
      },
    ],
  ]);
});

test('should not emit change event if modelValue is not changed', async () => {
  const columns = [
    { text: 'A', value: 'A' },
    { text: 'B', value: 'B' },
  ];
  const wrapper = mount(Picker, {
    props: {
      modelValue: ['B'],
      columns,
    },
  });

  await wrapper.findAll('.van-picker-column__item')[1].trigger('click');
  expect(wrapper.emitted('change')).toBeFalsy();
});

test('should not emit change event when after clicking a disabled option', async () => {
  const columns = [
    { text: 'A', value: 'A' },
    { text: 'B', value: 'B', disabled: true },
  ];
  const wrapper = mount(Picker, {
    props: {
      columns,
    },
  });

  await wrapper.findAll('.van-picker-column__item')[1].trigger('click');
  expect(wrapper.emitted<[string, number]>('change')).toBeFalsy();
});

test('should emit click-option event after clicking an option', async () => {
  const wrapper = mount(Picker, {
    props: {
      showToolbar: true,
      columns: simpleColumn,
    },
  });

  await wrapper.find('.van-picker-column__item').trigger('click');
  expect(wrapper.emitted('clickOption')![0]).toEqual([
    {
      columnIndex: 0,
      currentOption: { text: '1990', value: '1990' },
      selectedOptions: [{ text: '1990', value: '1990' }],
      selectedValues: ['1990'],
      selectedIndexes: [0],
    },
  ]);
});

test('should render bottom toolbar when toolbar-position is bottom', () => {
  const wrapper = mount(Picker, {
    props: {
      showToolbar: true,
      toolbarPosition: 'bottom',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should not allow to render html text', () => {
  const wrapper = mount(Picker, {
    props: {
      allowHtml: false,
      columns: [{ text: '<div>option</div>' }],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should allow to update columns props dynamically', async () => {
  const wrapper = mount(Picker, {
    props: {
      modelValue: ['2'],
      columns: [
        { text: '1', value: '1' },
        { text: '2', value: '2' },
      ],
    },
  });

  await wrapper.setProps({
    columns: [
      { text: '2', value: '2' },
      { text: '3', value: '3' },
    ],
  });

  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[string, number]>('confirm')![0]).toEqual([
    {
      selectedOptions: [{ text: '2', value: '2' }],
      selectedValues: ['2'],
      selectedIndexes: [0],
    },
  ]);
});

test('should not reset index when columns unchanged', async () => {
  const wrapper = mount(Picker, {
    props: {
      modelValue: ['2'],
      showToolbar: true,
      columns: [
        { text: '1', value: '1' },
        { text: '2', value: '2' },
      ],
    },
  });

  await wrapper.setProps({
    columns: [
      { text: '1', value: '1' },
      { text: '2', value: '2' },
    ],
  });

  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted<[string, number]>('confirm')![0]).toEqual([
    {
      selectedOptions: [{ text: '2', value: '2' }],
      selectedValues: ['2'],
      selectedIndexes: [1],
    },
  ]);
});

test('should allow to set rem option height', async () => {
  const originGetComputedStyle = window.getComputedStyle;

  window.getComputedStyle = () => ({ fontSize: '16px' } as CSSStyleDeclaration);

  const wrapper = mount(Picker, {
    props: {
      columns: simpleColumn.slice(0, 2),
      optionHeight: '10rem',
    },
  });

  await later();
  expect(wrapper.find('.van-picker-column__item').style.height).toEqual(
    '160px'
  );

  window.getComputedStyle = originGetComputedStyle;
});

test('should not allow to change option when using readonly prop', async () => {
  const wrapper = mount(Picker, {
    props: {
      columns: simpleColumn,
      readonly: true,
    },
  });

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  await wrapper.find('.van-picker-column ul').trigger('transitionend');
  await wrapper.findAll('.van-picker-column__item')[3].trigger('click');

  expect(wrapper.emitted('change')).toBeFalsy();
});

test('should not render mask and frame when options is empty', async () => {
  const wrapper = mount(Picker, {
    props: {
      columns: [[], []],
    },
  });
  expect(wrapper.find('.van-picker__mask').exists()).toBeFalsy();
  expect(wrapper.find('.van-picker__frame').exists()).toBeFalsy();

  await wrapper.setProps({ columns: [{ values: ['foo'] }] });
  expect(wrapper.find('.van-picker__mask').exists()).toBeTruthy();
  expect(wrapper.find('.van-picker__frame').exists()).toBeTruthy();
});

test('columns-field-names responsiveness', async () => {
  const columnsOne = [
    { type: 1, name: 'Ios' },
    { type: 2, name: 'Android' },
  ];
  const columnsTwo = [
    { type: 1, serverName: 'server1' },
    { type: 2, serverName: 'server2' },
  ];
  const wrapper = mount(Picker, {
    props: {
      columns: columnsOne,
      columnsFieldNames: {
        text: 'name',
      },
    },
  });
  expect(wrapper.findAll('.van-ellipsis')[0].text()).toEqual('Ios');
  await wrapper.setProps({
    columns: columnsTwo,
    columnsFieldNames: { text: 'serverName' },
  });
  expect(wrapper.findAll('.van-ellipsis')[0].text()).toEqual('server1');
});
