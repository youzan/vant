import { Rate } from '..';
import { mount, triggerDrag } from '../../../test';
import type { DOMWrapper } from '@vue/test-utils';

function mockGetBoundingClientRect(items: DOMWrapper<Element>[]) {
  items.filter((icon, index) => {
    icon.element.getBoundingClientRect = () =>
      ({
        left: index * 25,
        width: 25,
      } as DOMRect);
    return true;
  });
}

test('should emit change and update:modelValue event when rate icon is clicked', async () => {
  const wrapper = mount(Rate);
  const item4 = wrapper.findAll('.van-rate__icon')[3];

  item4.trigger('click');
  expect(wrapper.emitted('change')!.length).toEqual(1);
  expect(wrapper.emitted('change')![0]).toEqual([4]);
  expect(wrapper.emitted('update:modelValue')!.length).toEqual(1);
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([4]);

  await wrapper.setProps({ modelValue: 4 });
  item4.trigger('click');
  expect(wrapper.emitted('change')!.length).toEqual(1);
  expect(wrapper.emitted('update:modelValue')!.length).toEqual(1);
});

test('should not emit change and update:modelValue event when rate is not changed', () => {
  const wrapper = mount(Rate, {
    props: {
      modelValue: 4,
    },
  });

  const item4 = wrapper.findAll('.van-rate__icon')[3];
  item4.trigger('click');
  expect(wrapper.emitted('change')).toBeFalsy();
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should not emit change or update:modelValue event when rate is disabled', () => {
  const wrapper = mount(Rate, {
    props: {
      disabled: true,
    },
  });

  const item4 = wrapper.findAll('.van-rate__item')[3];
  triggerDrag(wrapper, 100, 0);
  item4.trigger('click');

  expect(wrapper.emitted('change')).toBeFalsy();
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should emit change event when rate icon is touchmoved', () => {
  const wrapper = mount(Rate);

  const icons = wrapper.findAll('.van-rate__item');
  mockGetBoundingClientRect(icons);
  triggerDrag(wrapper, 100, 0);

  const onChange = wrapper.emitted('change');
  expect(onChange).toEqual([[1], [2], [2], [4]]);
});

test('should emit change event when rate icon is touchmoved and using allow-half prop', () => {
  const wrapper = mount(Rate, {
    props: {
      allowHalf: true,
    },
  });

  const icons = wrapper.findAll('.van-rate__item');

  mockGetBoundingClientRect(icons);
  triggerDrag(wrapper, 100, 0);

  const onChange = wrapper.emitted('change');
  expect(onChange).toEqual([[1], [1.5], [2], [4]]);
});

test('should render gutter when using gutter prop', () => {
  const wrapper = mount(Rate, {
    props: {
      gutter: 10,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should change icon size when using size prop', () => {
  const wrapper = mount(Rate, {
    props: {
      size: '2rem',
    },
  });

  expect(wrapper.find('.van-rate__icon').style.fontSize).toEqual('2rem');
});

test('should not emit change event when untouchable rate is touchmoved', () => {
  const wrapper = mount(Rate, {
    props: {
      touchable: false,
    },
  });

  triggerDrag(wrapper, 100, 0);
  expect(wrapper.emitted('change')).toBeFalsy();
});

test('should get decimal when using allow-half and readonly prop', () => {
  const wrapper = mount(Rate, {
    props: {
      allowHalf: true,
      readonly: true,
      modelValue: 3.3,
    },
  });

  const halfIcon = wrapper.find('.van-rate__icon--half');
  expect(halfIcon.style.width).toEqual('0.3em');
});

test('should render correct count when using string prop', () => {
  const wrapper = mount(Rate, {
    props: {
      count: '4',
    },
  });

  const icons = wrapper.findAll('.van-rate__item');

  expect(icons).toHaveLength(4);
});
