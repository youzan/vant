import { ref, nextTick } from 'vue';
import { mount } from '../../../test';
import { Checkbox } from '../../checkbox';
import { CheckboxGroup, CheckboxGroupToggleAllOptions } from '..';

const disabledClass = 'van-checkbox--disabled';

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

test('should limit the number of checked items when using max prop', async () => {
  const wrapper = mount({
    setup() {
      const groupValue = ref(['a']);

      return {
        groupValue,
      };
    },
    render() {
      return (
        <CheckboxGroup v-model={this.groupValue} max={2}>
          <Checkbox name="a" />
          <Checkbox name="b" />
          <Checkbox name="c" />
          <Checkbox name="d" />
        </CheckboxGroup>
      );
    },
  });

  const items = wrapper.findAll('.van-checkbox');
  await items[1].trigger('click');
  expect(wrapper.vm.groupValue).toEqual(['a', 'b']);
  expect(items[2].classes()).toContain(disabledClass);

  await items[2].trigger('click');
  expect(wrapper.vm.groupValue).toEqual(['a', 'b']);

  await items[1].trigger('click');
  expect(items[2].classes()).not.toContain(disabledClass);
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

test('should render shape correctly when using shape prop', () => {
  const wrapper = mount({
    setup() {
      const groupValue = ref([]);

      return {
        groupValue,
      };
    },
    render() {
      return (
        <CheckboxGroup modelValue={this.groupValue} shape="square">
          <Checkbox name="a" />
          <Checkbox name="b" shape="round" />
        </CheckboxGroup>
      );
    },
  });

  const shapeClass = 'van-checkbox__icon--square';
  const shapeClass1 = 'van-checkbox__icon--round';
  const iconBoxs = wrapper.findAll('.van-checkbox__icon');
  expect(iconBoxs[0].classes()).toContain(shapeClass);
  expect(iconBoxs[1].classes()).toContain(shapeClass1);
});
