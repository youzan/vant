import { mount } from '../../../test';

test('radio-group change', () => {
  const wrapper = mount({
    template: `
      <van-radio-group v-model="result" @change="$emit('change', $event)">
        <van-radio
          v-for="item in list"
          :key="item"
          :name="item"
          :disabled="item === 'd'"
        >
          label
        </van-radio>
      </van-radio-group>
    `,
    data() {
      return {
        result: 'a',
        list: ['a', 'b', 'c', 'd'],
      };
    },
  });

  const icons = wrapper.findAll('.van-radio__icon');
  const labels = wrapper.findAll('.van-radio__label');

  icons.at(2).trigger('click');
  expect(wrapper.vm.result).toEqual('c');
  expect(wrapper.emitted('change')[0][0]).toEqual('c');

  labels.at(1).trigger('click');
  expect(wrapper.vm.result).toEqual('b');
  expect(wrapper.emitted('change')[1][0]).toEqual('b');

  icons.at(3).trigger('click');
  labels.at(3).trigger('click');
  expect(wrapper.vm.result).toEqual('b');
});

test('radio group disabled', () => {
  const wrapper = mount({
    template: `
      <van-radio-group v-model="result" disabled @change="$emit('change', $event)">
        <van-radio
          v-for="item in list"
          :key="item"
          :name="item"
        >
          label
        </van-radio>
      </van-radio-group>
    `,
    data() {
      return {
        result: 'a',
        list: ['a', 'b', 'c', 'd'],
      };
    },
  });

  const icons = wrapper.findAll('.van-radio__icon');
  icons.at(2).trigger('click');

  expect(wrapper.emitted('change')).toBeFalsy();
});

test('icon-size prop', () => {
  const wrapper = mount({
    template: `
      <van-radio-group icon-size="10rem">
        <van-radio>label</van-radio>
        <van-radio icon-size="5rem">label</van-radio>
      </van-radio-group>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('checked-color prop', () => {
  const wrapper = mount({
    template: `
      <van-radio-group checked-color="black">
        <van-radio :value="true">label</van-radio>
        <van-radio :value="true" checked-color="white">label</van-radio>
      </van-radio-group>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});
