import { later, mount, triggerDrag } from '../../../test';
import { Picker, type PickerOption, type PickerConfirmEventParams } from '..';
import { computed, ref } from 'vue';

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

test('should work correctly when dragging the column and changing columns prop', async () => {
  const columnsOne = [
    { text: '1990', value: '1990' },
    { text: '1991', value: '1991' },
  ];
  const columnsTwo = [{ text: '1993', value: '1993' }];
  const wrapper = mount(Picker, {
    props: {
      columns: columnsOne,
    },
  });

  triggerDrag(wrapper.findAll('.van-picker-column')[0], 0, -100);
  await wrapper.setProps({
    columns: columnsTwo,
  });
  await wrapper.find('.van-picker__confirm').trigger('click');

  expect(wrapper.emitted<[string, number]>('confirm')![0]).toEqual([
    {
      selectedOptions: [{ text: '1993', value: '1993' }],
      selectedValues: ['1993'],
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

test('should emit scroll-into event after draging the column', async () => {
  const wrapper = mount(Picker, {
    props: {
      columns: simpleColumn,
    },
  });

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  await wrapper.find('.van-picker-column ul').trigger('transitionend');

  expect(wrapper.emitted('scrollInto')).toEqual([
    [{ columnIndex: 0, currentOption: { text: '1992', value: '1992' } }],
  ]);
});

test('should emit scroll-into event after clicking an option', async () => {
  const wrapper = mount(Picker, {
    props: {
      showToolbar: true,
      columns: simpleColumn,
    },
  });

  await wrapper.find('.van-picker-column__item').trigger('click');
  expect(wrapper.emitted('scrollInto')![0]).toEqual([
    {
      columnIndex: 0,
      currentOption: { text: '1990', value: '1990' },
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

  window.getComputedStyle = () => ({ fontSize: '16px' }) as CSSStyleDeclaration;

  const wrapper = mount(Picker, {
    props: {
      columns: simpleColumn.slice(0, 2),
      optionHeight: '10rem',
    },
  });

  await later();
  expect(wrapper.find('.van-picker-column__item').style.height).toEqual(
    '160px',
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

test('should be displayed correctly whhen the component is reused', async () => {
  const wrapper = mount(Picker, {
    props: {
      showToolbar: true,
      columns: [
        [
          { text: '1990', value: '1990' },
          { text: '1991', value: '1991' },
          { text: '1992', value: '1992' },
          { text: '1993', value: '1993' },
          { text: '1994', value: '1994' },
          { text: '1995', value: '1995' },
        ],
        [
          { text: '01', value: '01' },
          { text: '02', value: '02' },
          { text: '03', value: '03' },
          { text: '04', value: '04' },
        ],
      ],
    },
  });

  await wrapper.setProps({ modelValue: ['1990', '01'] });
  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![0][0]
      .selectedValues,
  ).toEqual(['1990', '01']);

  await wrapper.setProps({ modelValue: ['1992', '03'] });
  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![1][0]
      .selectedValues,
  ).toEqual(['1992', '03']);

  // Test the scenario when a component is assigned multiple times in multiple columns
  // https://github.com/youzan/vant/issues/11644
  await wrapper.setProps({ modelValue: ['1990', '01'] });
  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![2][0]
      .selectedValues,
  ).toEqual(['1990', '01']);

  await wrapper.setProps({ modelValue: ['1992', '03'] });
  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(
    wrapper.emitted<[PickerConfirmEventParams]>('confirm')![3][0]
      .selectedValues,
  ).toEqual(['1992', '03']);
});

test('should allow to skip rendering confirm and cancel buttons', async () => {
  const wrapper = mount(Picker, {
    props: {
      confirmButtonText: '',
      cancelButtonText: '',
    },
  });

  expect(wrapper.find('.van-picker__confirm').exists()).toBeFalsy();
  expect(wrapper.find('.van-picker__cancel').exists()).toBeFalsy();
});

test('should render empty slot when options is empty', async () => {
  const wrapper = mount(Picker, {
    props: {
      loading: true,
      columns: [[], []],
    },
    slots: {
      empty: () => <div>empty content</div>,
    },
  });

  expect(wrapper.html()).not.toContain('empty content');

  await wrapper.setProps({ loading: false });
  expect(wrapper.html()).toContain('empty content');

  await wrapper.setProps({ columns: [{ values: ['foo'] }] });
  expect(wrapper.html()).not.toContain('empty content');
});

test('should emit correct values when clicking confirm button during column scrolling', async () => {
  const columnsOne: PickerOption[] = [
    { text: 'Beijing', value: 'Beijing' },
    { text: 'Shanghai', value: 'Shanghai' },
  ];
  const columnsTwo: Record<string, PickerOption[]> = {
    Beijing: [
      { text: 'Dongcheng', value: 'Dongcheng' },
      { text: 'Xicheng', value: 'Xicheng' },
      { text: 'Chaoyang', value: 'Chaoyang' },
      { text: 'Haidian', value: 'Haidian' },
    ],
    Shanghai: [
      { text: 'Huangpu', value: 'Huangpu' },
      { text: 'Xuhui', value: 'Xuhui' },
      { text: 'Changning', value: 'Changning' },
      { text: 'Pudong', value: 'Pudong' },
    ],
  };
  const currentValues = ref(['Beijing', 'Dongcheng']);
  const wrapper = mount({
    setup() {
      const columns = computed(() => [
        columnsOne,
        columnsTwo[currentValues.value[0]],
      ]);
      return () => (
        <Picker v-model={currentValues.value} columns={columns.value} />
      );
    },
  });
  const picker = wrapper.findComponent(Picker);
  // Scroll to select "Shanghai"
  triggerDrag(picker.findAll('.van-picker-column')[0], 0, -100);
  // Trigger confirm immediately without waiting for scroll animation to complete
  await picker.find('.van-picker__confirm').trigger('click');
  expect(picker.emitted('confirm')![0]).toEqual([
    {
      selectedOptions: [
        { text: 'Shanghai', value: 'Shanghai' },
        { text: 'Huangpu', value: 'Huangpu' },
      ],
      selectedValues: ['Shanghai', 'Huangpu'],
      selectedIndexes: [1, 0],
    },
  ]);
});

// https://github.com/youzan/vant/issues/13423
test('should emit default values when clear modelValue', async () => {
  const columns = [
    { text: '1', value: '1' },
    { text: '2', value: '2' },
  ];
  const wrapper = mount({
    setup() {
      const modelValue = ref(['1']);
      return () => (
        <>
          <button
            class="clear-button"
            onClick={() => (modelValue.value = [])}
          />
          <Picker v-model={modelValue.value} columns={columns} />
        </>
      );
    },
  });
  const button = wrapper.find('.clear-button');
  await button.trigger('click');
  const picker = wrapper.findComponent(Picker);
  await picker.find('.van-picker__confirm').trigger('click');
  expect(picker.emitted('confirm')![0]).toEqual([
    {
      selectedOptions: [{ text: '1', value: '1' }],
      selectedValues: ['1'],
      selectedIndexes: [0],
    },
  ]);
});
