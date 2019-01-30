import Radio from '..';
import RadioGroup from '../../radio-group';
import { mount } from '../../../test/utils';

test('radio-group change', () => {
  const wrapper = mount({
    template: `
      <radio-group v-model="result" @change="$emit('change', $event)">
        <radio
          v-for="item in list"
          :key="item"
          :name="item"
          :disabled="item === 'd'"
        >
          label
        </radio>
      </radio-group>
    `,
    components: {
      Radio,
      RadioGroup
    },
    data() {
      return {
        result: 'a',
        list: ['a', 'b', 'c', 'd']
      };
    }
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
