import { ref } from 'vue';
import { later, mount } from '../../../test';
import { Picker, PickerConfirmEventParams } from '../../picker';
import { PickerGroup } from '..';

test('should emit confirm event after clicking the confirm button', async () => {
  const value1 = ref(['1']);
  const value2 = ref(['2']);
  const value3 = ref(['3']);

  const wrapper = mount({
    setup(props, { emit }) {
      const onConfirm = (params: PickerConfirmEventParams) => {
        emit('confirm', params);
      };

      return () => (
        <PickerGroup
          title="Title"
          tabs={['Tab1', 'Tab2', 'Tab3']}
          onConfirm={onConfirm}
        >
          <Picker
            v-model={value1.value}
            columns={[{ text: '1', value: '1' }]}
          />
          <Picker
            v-model={value2.value}
            columns={[{ text: '2', value: '2' }]}
          />
          <Picker
            v-model={value3.value}
            columns={[{ text: '3', value: '3' }]}
          />
        </PickerGroup>
      );
    },
  });

  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')![0]).toEqual([
    [
      {
        selectedIndexes: [0],
        selectedOptions: [{ text: '1', value: '1' }],
        selectedValues: ['1'],
      },
      {
        selectedIndexes: [0],
        selectedOptions: [{ text: '2', value: '2' }],
        selectedValues: ['2'],
      },
      {
        selectedIndexes: [0],
        selectedOptions: [{ text: '3', value: '3' }],
        selectedValues: ['3'],
      },
    ],
  ]);
});

test('should switch to next step when click confirm button', async () => {
  const value1 = ref(['1']);
  const value2 = ref(['2']);

  const wrapper = mount({
    setup(props, { emit }) {
      const onConfirm = (params: PickerConfirmEventParams) => {
        emit('confirm', params);
      };

      return () => (
        <PickerGroup
          title="Title"
          tabs={['Tab1', 'Tab2']}
          nextStepText="Next Step"
          onConfirm={onConfirm}
        >
          <Picker
            v-model={value1.value}
            columns={[{ text: '1', value: '1' }]}
          />
          <Picker
            v-model={value2.value}
            columns={[{ text: '2', value: '2' }]}
          />
        </PickerGroup>
      );
    },
  });

  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')).toBeFalsy();

  await wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')![0]).toEqual([
    [
      {
        selectedIndexes: [0],
        selectedOptions: [{ text: '1', value: '1' }],
        selectedValues: ['1'],
      },
      {
        selectedIndexes: [0],
        selectedOptions: [{ text: '2', value: '2' }],
        selectedValues: ['2'],
      },
    ],
  ]);
});

test('support controlled mode to set active-tab', async () => {
  const value1 = ref(['1']);
  const value2 = ref(['2']);
  const activeTab = ref(0);

  const wrapper = mount({
    render() {
      return (
        <PickerGroup
          activeTab={activeTab.value}
          title="Title"
          tabs={['Tab1', 'Tab2']}
        >
          <Picker
            v-model={value1.value}
            columns={[{ text: '1', value: '1' }]}
          />
          <Picker
            v-model={value2.value}
            columns={[{ text: '2', value: '2' }]}
          />
        </PickerGroup>
      );
    },
  });

  await later();
  const tabs = wrapper.findAll('.van-tab');
  expect(tabs[0]?.classes()).toContain('van-tab--active');

  activeTab.value = 1;
  await later();
  expect(tabs[1]?.classes()).toContain('van-tab--active');
});
