import { ref, nextTick } from 'vue';
import { mount } from '../../../test';
import { Checkbox } from '../../checkbox';
import { CheckboxGroup, CheckboxGroupToggleAllOptions } from '..';

test('should emit "update:modelValue" event when checkbox is clicked', async () => {
  const wrapper = mount({
    setup() {
      return {
        value: ref([]),
      };
    },
    render() {
      return (
        <CheckboxGroup v-model={this.value}>
          <Checkbox name="a" />
          <Checkbox name="b" />
        </CheckboxGroup>
      );
    },
  });

  const items = wrapper.findAll('.van-checkbox');

  await items[0].trigger('click');
  expect(wrapper.vm.value).toEqual(['a']);

  await items[1].trigger('click');
  expect(wrapper.vm.value).toEqual(['a', 'b']);

  await items[0].trigger('click');
  expect(wrapper.vm.value).toEqual(['b']);
});

test('should change icon size when using icon-size prop', () => {
  const wrapper = mount({
    render() {
      return (
        <CheckboxGroup icon-size="10rem">
          <Checkbox />
          <Checkbox icon-size="5rem" />
        </CheckboxGroup>
      );
    },
  });

  const icons = wrapper.findAll('.van-checkbox__icon');
  expect(icons[0].style.fontSize).toEqual('10rem');
  expect(icons[1].style.fontSize).toEqual('5rem');
});

test('should change checked color when using checked-color prop', () => {
  const wrapper = mount({
    render() {
      return (
        <CheckboxGroup modelValue={['a', 'b']} checkedColor="black">
          <Checkbox name="a" />
          <Checkbox name="b" checkedColor="white" />
        </CheckboxGroup>
      );
    },
  });

  const icons = wrapper.findAll('.van-icon');
  expect(icons[0].style.backgroundColor).toEqual('black');
  expect(icons[1].style.backgroundColor).toEqual('white');
});

test('should ignore Checkbox if bind-group is false', async () => {
  const wrapper = mount({
    setup() {
      const value = ref(false);
      const groupRef = ref();
      const groupValue = ref([]);
      const toggleAll = (checked?: boolean) => {
        groupRef.value.toggleAll(checked);
      };

      return {
        value,
        groupRef,
        groupValue,
        toggleAll,
      };
    },
    render() {
      return (
        <CheckboxGroup v-model={this.groupValue} ref="groupRef">
          <Checkbox v-model={this.value} name="a" bindGroup={false} />
          <Checkbox name="b" />
          <Checkbox name="c" />
        </CheckboxGroup>
      );
    },
  });

  const items = wrapper.findAll('.van-checkbox');
  items[0].trigger('click');
  expect(wrapper.vm.value).toBeTruthy();
  expect(wrapper.vm.groupValue).toEqual([]);

  wrapper.vm.toggleAll(true);
  expect(wrapper.vm.groupValue).toEqual(['b', 'c']);
});

test('should toggle all checkboxes when toggleAll method is called', async () => {
  const wrapper = mount({
    setup() {
      const value = ref(['a']);
      const groupRef = ref();
      const toggleAll = (options?: CheckboxGroupToggleAllOptions) => {
        groupRef.value.toggleAll(options);
      };

      return {
        value,
        groupRef,
        toggleAll,
      };
    },
    render() {
      return (
        <CheckboxGroup v-model={this.value} ref="groupRef">
          <Checkbox name="a" />
          <Checkbox name="b" />
          <Checkbox name="c" disabled />
        </CheckboxGroup>
      );
    },
  });

  wrapper.vm.toggleAll();
  expect(wrapper.vm.value).toEqual(['b', 'c']);

  wrapper.vm.toggleAll(false);
  expect(wrapper.vm.value).toEqual([]);

  wrapper.vm.toggleAll(true);
  await nextTick();
  expect(wrapper.vm.value).toEqual(['a', 'b', 'c']);

  wrapper.vm.toggleAll({ skipDisabled: true });
  expect(wrapper.vm.value).toEqual(['c']);

  wrapper.vm.toggleAll({ checked: true, skipDisabled: true });
  expect(wrapper.vm.value).toEqual(['a', 'b', 'c']);
});
