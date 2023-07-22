import { ref } from 'vue';
import { Barrage, BarrageInstance } from '..';
import { mount, trigger } from '../../../test';
import { flushPromises } from '@vue/test-utils';

test('should auto play when only list props', async () => {
  const wrapper = mount({
    render() {
      return (
        <Barrage
          modelValue={[
            { id: 100, text: '轻量' },
            { id: 101, text: '可定制的' },
            { id: 102, text: '移动端' },
            { id: 103, text: 'Vue' },
            { id: 104, text: '组件库' },
            { id: 105, text: 'VantUI' },
            { id: 106, text: '666' },
          ]}
        >
          <div class="video" style="width: 100%; height: 150px"></div>
        </Barrage>
      );
    },
  });

  await flushPromises();
  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.findAll('.van-barrage__item')).toHaveLength(7);
});

test('should not auto play use play function when use play function', async () => {
  const barrage = ref<BarrageInstance>();
  const wrapper = mount({
    render() {
      return (
        <Barrage
          ref={barrage}
          autoPlay={false}
          modelValue={[
            { id: 100, text: '轻量' },
            { id: 101, text: '可定制的' },
            { id: 102, text: '移动端' },
            { id: 103, text: 'Vue' },
            { id: 104, text: '组件库' },
            { id: 105, text: 'VantUI' },
            { id: 106, text: '666' },
          ]}
        >
          <div class="video" style="width: 100%; height: 150px"></div>
        </Barrage>
      );
    },
  });

  await flushPromises();
  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.findAll('.van-barrage__item')).toHaveLength(7);

  expect(
    (wrapper.find('.van-barrage__item') as HTMLSpanElement).style
      .animationPlayState,
  ).toBe('paused');

  barrage.value?.play();

  expect(
    (wrapper.find('.van-barrage__item') as HTMLSpanElement).style
      .animationPlayState,
  ).toBe('running');

  barrage.value?.pause();

  expect(
    (wrapper.find('.van-barrage__item') as HTMLSpanElement).style
      .animationPlayState,
  ).toBe('paused');
});

test('should emit "update:modelValue" when animationend', async () => {
  const barrage = ref<BarrageInstance>();
  const wrapper = mount({
    render() {
      return (
        <Barrage
          ref={barrage}
          autoPlay={false}
          modelValue={[
            { id: 100, text: '轻量' },
            { id: 101, text: '可定制的' },
            { id: 102, text: '移动端' },
            { id: 103, text: 'Vue' },
            { id: 104, text: '组件库' },
            { id: 105, text: 'VantUI' },
            { id: 106, text: '666' },
          ]}
          onUpdate:modelValue={(value) => this.$emit('change', value)}
        >
          <div class="video" style="width: 100%; height: 150px"></div>
        </Barrage>
      );
    },
  });

  await flushPromises();
  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.findAll('.van-barrage__item')).toHaveLength(7);

  barrage.value?.play();

  expect(
    (wrapper.find('.van-barrage__item') as HTMLSpanElement).style
      .animationPlayState,
  ).toBe('running');

  await wrapper.setProps({
    modelValue: [
      { id: 100, text: '轻量' },
      { id: 101, text: '可定制的' },
      { id: 102, text: '移动端' },
      { id: 103, text: 'Vue' },
      { id: 104, text: '组件库' },
      { id: 105, text: 'VantUI' },
      { id: 106, text: '666' },
      { id: 107, text: 'Barrage' },
    ],
  });

  expect(wrapper.findAll('.van-barrage__item')).toHaveLength(8);

  await trigger(
    wrapper.find('.van-barrage__item') as HTMLSpanElement,
    'animationend',
  );

  expect(wrapper.emitted('change')?.[0][0]).toEqual([
    { id: 101, text: '可定制的' },
    { id: 102, text: '移动端' },
    { id: 103, text: 'Vue' },
    { id: 104, text: '组件库' },
    { id: 105, text: 'VantUI' },
    { id: 106, text: '666' },
    { id: 107, text: 'Barrage' },
  ]);
});
