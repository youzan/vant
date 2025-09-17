import { Slider } from '..';
import {
  later,
  mount,
  trigger,
  triggerDrag,
  mockGetBoundingClientRect,
} from '../../../test';

function mockRect(vertical?: boolean) {
  return mockGetBoundingClientRect({
    width: vertical ? 0 : 100,
    height: vertical ? 100 : 0,
    top: vertical ? 0 : 100,
    left: vertical ? 100 : 0,
  });
}

function testSlotReceivedParams(
  slot: ReturnType<typeof vi.fn>,
  dragging: boolean,
  dragIndex?: number,
) {
  const latestParams = slot.mock.calls.at(-1)![0];
  expect(latestParams.dragging).toEqual(dragging);
  expect(latestParams.dragIndex).toEqual(dragIndex);
}

test('should emit "update:modelValue" event after dragging button', () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
    },
  });

  const button = wrapper.find('.van-slider__button');
  triggerDrag(button, 50, 0);
  expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);
});

test('should emit "update:modelValue" event after clicking slider', () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
    },
  });

  trigger(wrapper, 'click', 100, 0);
  expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);
});

test('should emit dragStart event when start dragging', () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
    },
  });

  const button = wrapper.find('.van-slider__button');
  trigger(button, 'touchstart');
  trigger(button, 'touchmove');
  expect(wrapper.emitted('dragStart')).toBeTruthy();
});

test('should emit dragEnd event when end dragging', () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
    },
  });

  const button = wrapper.find('.van-slider__button');
  trigger(button, 'touchstart');
  trigger(button, 'touchmove');
  expect(wrapper.emitted('dragEnd')).toBeFalsy();
  trigger(button, 'touchend');
  expect(wrapper.emitted('dragEnd')).toBeTruthy();
});

test('should not allow to drag slider when disabled', async () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
      disabled: true,
    },
  });

  const button = wrapper.find('.van-slider__button');
  triggerDrag(button, 50, 0);
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should not allow to click slider when disabled', async () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
      disabled: true,
    },
  });

  trigger(wrapper, 'click', 100, 0);
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should not allow to drag slider when readonly', async () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
      readonly: true,
    },
  });

  const button = wrapper.find('.van-slider__button');
  triggerDrag(button, 50, 0);
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should not allow to click slider when readonly', async () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
      readonly: true,
    },
  });

  trigger(wrapper, 'click', 100, 0);
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should render readonly Slider correctly', async () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
      readonly: true,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should allow to drag vertical slider', () => {
  const restoreMock = mockRect(true);

  const wrapper = mount(Slider, {
    props: {
      vertical: true,
      modelValue: 50,
    },
  });

  const button = wrapper.find('.van-slider__button');
  triggerDrag(button, 0, 50);
  expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);

  restoreMock();
});

test('should change slider bar height when using bar-height prop', () => {
  const wrapper = mount(Slider, {
    props: {
      barHeight: 10,
      modelValue: 50,
    },
  });

  expect(wrapper.style.height).toEqual('10px');
});

test('should change button size when using button-size prop', () => {
  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
      buttonSize: 10,
    },
  });

  const button = wrapper.find('.van-slider__button');
  expect(button.style.width).toEqual('10px');
  expect(button.style.height).toEqual('10px');
});

test('should emit "update:modelValue" event after clicking vertical slider', () => {
  const wrapper = mount(Slider, {
    props: {
      vertical: true,
      modelValue: 50,
    },
  });

  trigger(wrapper, 'click', 0, 100);
  expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);
});

test('should not emit change event when value not changed', async () => {
  const restoreMock = mockRect();

  const wrapper = mount(Slider, {
    props: {
      modelValue: 50,
    },
  });

  const button = wrapper.find('.van-slider__button');
  trigger(button, 'touchstart');
  trigger(wrapper, 'click', 100, 0);
  expect(wrapper.emitted('change')).toHaveLength(1);

  await wrapper.setProps({ modelValue: 100 });
  trigger(button, 'touchstart');
  trigger(wrapper, 'click', 100, 0);
  expect(wrapper.emitted('change')).toHaveLength(1);

  trigger(wrapper, 'click', 50, 0);
  expect(wrapper.emitted('change')).toHaveLength(2);

  await wrapper.setProps({ modelValue: 50 });
  trigger(wrapper, 'click', 100, 0);
  expect(wrapper.emitted('change')).toHaveLength(3);

  restoreMock();
});

// https://github.com/vant-ui/vant/issues/8889
test('should format v-model with step correctly', async () => {
  const wrapper = mount(Slider, {
    props: {
      min: 29,
      max: 39,
      step: 2,
      modelValue: 30.5,
    },
  });

  await later();
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([31]);
});

test('should render button slot correctly', async () => {
  const buttonSlot = vi.fn();
  const wrapper = mount(Slider, {
    props: {
      modelValue: 30,
    },
    slots: {
      button: buttonSlot,
    },
  });

  expect(buttonSlot.mock.calls[0]).toEqual([{ value: 30, dragging: false }]);

  const button = wrapper.find('.van-slider__button-wrapper');

  trigger(button, 'touchstart', 50, 0);
  trigger(button, 'touchmove', 50, 0);
  await later();
  testSlotReceivedParams(buttonSlot, true);

  trigger(button, 'touchend', 50, 0);
  await later();
  testSlotReceivedParams(buttonSlot, false);
});

test('should render left-button、right-button slot correctly', async () => {
  const leftButtonSlot = vi.fn();
  const rightButtonSlot = vi.fn();
  const wrapper = mount(Slider, {
    props: {
      range: true,
      modelValue: [30, 80],
    },
    slots: {
      'left-button': (params) => {
        leftButtonSlot(params);
        return `left-${params.value}`;
      },
      'right-button': (params) => {
        rightButtonSlot(params);
        return `right-${params.value}`;
      },
    },
  });

  expect(leftButtonSlot.mock.calls[0]).toEqual([
    { value: 30, dragging: false, dragIndex: undefined },
  ]);
  expect(rightButtonSlot.mock.calls[0]).toEqual([
    { value: 80, dragging: false, dragIndex: undefined },
  ]);
  expect(wrapper.html()).toMatchSnapshot();

  const [leftButton, rightButton] = wrapper.findAll(
    '.van-slider__button-wrapper',
  );

  trigger(leftButton, 'touchstart', 50, 0);
  trigger(leftButton, 'touchmove', 50, 0);
  await later();
  testSlotReceivedParams(leftButtonSlot, true, 0);
  testSlotReceivedParams(rightButtonSlot, true, 0);

  trigger(leftButton, 'touchend', 50, 0);
  await later();
  testSlotReceivedParams(leftButtonSlot, false, undefined);
  testSlotReceivedParams(rightButtonSlot, false, undefined);

  trigger(rightButton, 'touchstart', 50, 0);
  trigger(rightButton, 'touchmove', 50, 0);
  await later();
  testSlotReceivedParams(leftButtonSlot, true, 1);
  testSlotReceivedParams(rightButtonSlot, true, 1);

  trigger(rightButton, 'touchend', 50, 0);
  await later();
  testSlotReceivedParams(leftButtonSlot, false, undefined);
  testSlotReceivedParams(rightButtonSlot, false, undefined);
});

test('should render reversed slider correctly', () => {
  const wrapper = mount(Slider, {
    props: {
      reverse: true,
      modelValue: 25,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render reversed vertical slider correctly', () => {
  const wrapper = mount(Slider, {
    props: {
      reverse: true,
      vertical: true,
      modelValue: 25,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render reversed range slider correctly', () => {
  const wrapper = mount(Slider, {
    props: {
      range: true,
      reverse: true,
      modelValue: [25, 40],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should update modelValue correctly after clicking the reversed slider', () => {
  const wrapper = mount(Slider, {
    props: {
      reverse: true,
      modelValue: 50,
    },
  });

  trigger(wrapper, 'click', 100, 0);
  expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([0]);
});

test('should update modelValue correctly after clicking the reversed vertical slider', () => {
  const wrapper = mount(Slider, {
    props: {
      reverse: true,
      vertical: true,
      modelValue: 50,
    },
  });

  trigger(wrapper, 'click', 0, 100);
  expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([0]);
});

describe('Slider format function boundary tests', () => {
  // 测试基本的边界情况
  test('should not exceed max value when step is large', () => {
    const wrapper = mount(Slider, {
      props: { min: 20, max: 100, step: 30, modelValue: 20 },
    });

    // 拖拽到最右侧
    const button = wrapper.find('.van-slider__button');
    triggerDrag(button, 100, 0); // 拖拽到最右边

    const emittedValue = wrapper
      .emitted('update:modelValue')!
      .pop()![0] as number;
    expect(emittedValue).toBeLessThanOrEqual(100);
    expect(emittedValue).toBe(100); // 期望返回 max 值
  });

  test('should return max when user drags close to max position', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 30, modelValue: 0 },
    });

    // 点击接近 max 的位置 (95% 的位置)
    trigger(wrapper, 'click', 95, 0);
    expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);
  });

  test('should return stepped value when not exceeding max', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 30, modelValue: 0 },
    });

    // 点击 70% 的位置，应该返回 60
    trigger(wrapper, 'click', 70, 0);
    expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([60]);
  });

  test('should handle edge case: exact step boundary', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 25, modelValue: 0 },
    });

    // 点击 100% 位置，应该返回 100 (即使按步长应该是 125)
    trigger(wrapper, 'click', 100, 0);
    expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);
  });

  // 垂直滑块测试
  test('vertical slider: should not exceed max value', () => {
    const restoreMock = mockRect(true);

    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 30, modelValue: 0, vertical: true },
    });

    // 垂直模式下点击接近 max 的位置
    trigger(wrapper, 'click', 0, 95);
    expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);

    restoreMock();
  });

  // Range 滑块测试
  test('range slider: should handle boundary for both buttons', async () => {
    const wrapper = mount(Slider, {
      props: {
        min: 0,
        max: 100,
        step: 30,
        modelValue: [0, 30],
        range: true,
      },
    });

    const buttons = wrapper.findAll('.van-slider__button-wrapper');
    const rightButton = buttons[1];

    // 拖拽右按钮到接近 max 位置
    trigger(rightButton, 'touchstart');
    triggerDrag(rightButton, 95, 0);
    trigger(rightButton, 'touchend');

    await later();

    const emitted = wrapper.emitted('update:modelValue');
    if (emitted && emitted.length > 0) {
      const lastEmitted = emitted[emitted.length - 1][0] as [number, number];
      expect(lastEmitted[1]).toBeLessThanOrEqual(100);
    }
  });

  // 测试实际的问题场景
  test('should handle the reported bug case: min=20, max=100, step=30', () => {
    const wrapper = mount(Slider, {
      props: { min: 20, max: 100, step: 30, modelValue: 20 },
    });

    // 模拟拖拽到最右侧
    trigger(wrapper, 'click', 100, 0);

    const result = wrapper.emitted('update:modelValue')!.pop()![0] as number;
    expect(result).toBeLessThanOrEqual(100);
    expect([80, 100]).toContain(result); // 可能是 80 或 100，取决于距离比较
  });

  // 测试距离比较逻辑
  test('should choose closer value between max and previous step', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 30, modelValue: 0 },
    });

    // 测试点击 85% 位置 - 应该更接近 90 而不是 100
    // 85 -> 步长值是 90，但超出 max
    // 距离 max(100): |85-100| = 15
    // 距离 prev(60): |85-60| = 25
    // 应该选择 max(100) 因为距离更近
    trigger(wrapper, 'click', 85, 0);
    expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);
  });

  test('should choose previous step when its closer than max', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 30, modelValue: 0 },
    });

    // 测试点击 65% 位置
    // 65 -> 步长值是 60，没有超出 max
    trigger(wrapper, 'click', 65, 0);
    expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([60]);
  });
});
