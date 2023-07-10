import { ref } from 'vue';
import { mount } from '../../../test';
import { Radio } from '../../radio';
import { RadioGroup } from '../index';

test('should emit "update:modelValue" and "change" event when radio is clicked', async () => {
  const wrapper = mount({
    emits: ['change'],
    setup(props, { emit }) {
      return {
        result: ref('a'),
        list: ['a', 'b', 'c', 'd'],
        emit,
        change(value: string) {
          emit('change', value);
        },
      };
    },
    render() {
      return (
        <RadioGroup
          onChange={(value) => this.emit('change', value)}
          v-model={this.result}
        >
          {this.list.map((item) => (
            <Radio key={item} name={item} disabled={item === 'd'}>
              {item}
            </Radio>
          ))}
        </RadioGroup>
      );
    },
  });

  const icons = wrapper.findAll('.van-radio__icon');
  const labels = wrapper.findAll('.van-radio__label');

  await icons[2].trigger('click');
  expect(wrapper.vm.result).toEqual('c');
  expect(wrapper.emitted('change')![0]).toEqual(['c']);

  await labels[1].trigger('click');
  expect(wrapper.vm.result).toEqual('b');
  expect(wrapper.emitted('change')![1]).toEqual(['b']);

  await icons[3].trigger('click');
  await labels[3].trigger('click');
  expect(wrapper.vm.result).toEqual('b');
});

test('should not emit "change" event when radio group is disabled and radio is clicked', async () => {
  const wrapper = mount({
    emits: ['change'],
    setup(props, { emit }) {
      return {
        result: ref('a'),
        list: ['a', 'b', 'c', 'd'],
        emit,
      };
    },
    render() {
      return (
        <RadioGroup
          v-model={this.result}
          disabled
          onChange={(value) => this.emit('change', value)}
        >
          {this.list.map((item) => (
            <Radio key={item} name={item}>
              label
            </Radio>
          ))}
        </RadioGroup>
      );
    },
  });

  const icons = wrapper.findAll('.van-radio__icon');
  await icons[2].trigger('click');
  expect(wrapper.emitted('change')).toBeFalsy();
});

test('should change icon size when using icon-size prop', () => {
  const wrapper = mount({
    render() {
      return (
        <RadioGroup iconSize="10rem">
          <Radio />
          <Radio iconSize="5rem" />
        </RadioGroup>
      );
    },
  });

  const icons = wrapper.findAll('.van-radio__icon');
  expect(icons[0].style.fontSize).toEqual('10rem');
  expect(icons[1].style.fontSize).toEqual('5rem');
});

test('should change checked color when using checked-color prop', () => {
  const wrapper = mount({
    render() {
      return (
        <RadioGroup checkedColor="black">
          <Radio modelValue={true} />
          <Radio modelValue={true} checkedColor="white" />
        </RadioGroup>
      );
    },
  });

  const icons = wrapper.findAll('.van-icon');
  expect(icons[0].style.backgroundColor).toEqual('black');
  expect(icons[1].style.backgroundColor).toEqual('white');
});

test('should render shape correctly when using shape prop', () => {
  const wrapper = mount({
    render() {
      return (
        <RadioGroup shape="dot">
          <Radio modelValue={true} />
          <Radio modelValue={true} shape="round" />
        </RadioGroup>
      );
    },
  });

  const shapeClass = 'van-radio__icon--dot';
  // The priority of the sub component shape prop is higher than parent component
  const shapeClass1 = 'van-radio__icon--round';
  const iconBoxs = wrapper.findAll('.van-radio__icon');
  expect(iconBoxs[0].classes()).toContain(shapeClass);
  expect(iconBoxs[1].classes()).toContain(shapeClass1);
});
