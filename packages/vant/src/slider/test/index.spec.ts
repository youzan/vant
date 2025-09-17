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

describe('Slider steppedValue boundary tests for patch coverage', () => {
  // -------- 水平 slider --------
  test('horizontal: steppedValue > max -> return max', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 10, modelValue: 50 },
    });
    trigger(wrapper, 'click', 150, 0); // value 超过 max
    expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);
  });

  test('horizontal: steppedValue > max but closer to prev step -> return prev', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 10, modelValue: 50 },
    });
    trigger(wrapper, 'click', 95, 0); // value 超 max，但接近 90
    expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([90]);
  });

  test('horizontal: steppedValue == max -> return max', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 10, modelValue: 50 },
    });
    trigger(wrapper, 'click', 100, 0); // value == max
    expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);
  });

  // -------- 垂直 slider --------
  test('vertical: steppedValue > max -> return max', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 10, modelValue: 50, vertical: true },
    });
    trigger(wrapper, 'click', 0, 150);
    expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);
  });

  test('vertical: steppedValue > max but closer to prev step -> return prev', () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 10, modelValue: 50, vertical: true },
    });
    trigger(wrapper, 'click', 0, 95);
    expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([90]);
  });

  // -------- range slider --------
  test('range slider: right button > max -> snap to max', async () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 10, modelValue: [20, 50], range: true },
    });
    const rightButton = wrapper.findAll('.van-slider__button-wrapper')[1];
    trigger(rightButton, 'touchstart', 0, 50);
    trigger(rightButton, 'touchmove', 0, 150);
    await later();
    const emitted = wrapper.emitted('update:modelValue')!.pop()!;
    expect(emitted[1]).toBe(100);
  });

  test('range slider: left button snaps to step', async () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100, step: 10, modelValue: [25, 50], range: true },
    });
    const leftButton = wrapper.findAll('.van-slider__button-wrapper')[0];
    trigger(leftButton, 'touchstart', 0, 25);
    trigger(leftButton, 'touchmove', 0, 28); // 接近 30
    await later();
    const emitted = wrapper.emitted('update:modelValue')!.pop()!;
    expect(emitted[0]).toBe(30);
  });

  // -------- reverse + vertical + range --------
  test('reverse + vertical range: right button > max -> snap to max', async () => {
    const wrapper = mount(Slider, {
      props: {
        min: 0,
        max: 100,
        step: 10,
        modelValue: [20, 50],
        range: true,
        reverse: true,
        vertical: true,
      },
    });
    const rightButton = wrapper.findAll('.van-slider__button-wrapper')[1];
    trigger(rightButton, 'touchstart', 0, 50);
    trigger(rightButton, 'touchmove', 0, 150);
    await later();
    const emitted = wrapper.emitted('update:modelValue')!.pop()!;
    expect(emitted[1]).toBe(100);
  });
});
