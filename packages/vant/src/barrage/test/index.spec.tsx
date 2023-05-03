import { ref } from 'vue';
import { Barrage, BarrageInstance } from '..';
import { mount, trigger } from '../../../test';
import { flushPromises } from '@vue/test-utils';

test('should auto play when only list props', async () => {
  const wrapper = mount({
    render() {
      return (
        <Barrage
          barrageList={[
            '轻量',
            '可定制的',
            '移动端',
            'Vue',
            '组件库',
            'VantUI',
            '666',
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
          barrageList={[
            '轻量',
            '可定制的',
            '移动端',
            'Vue',
            '组件库',
            'VantUI',
            '666',
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
      .animationPlayState
  ).toBe('paused');

  barrage.value?.play();

  expect(
    (wrapper.find('.van-barrage__item') as HTMLSpanElement).style
      .animationPlayState
  ).toBe('running');

  barrage.value?.pause();

  expect(
    (wrapper.find('.van-barrage__item') as HTMLSpanElement).style
      .animationPlayState
  ).toBe('paused');

  barrage.value?.play();
  barrage.value?.add('Barrage');
  expect(wrapper.findAll('.van-barrage__item')).toHaveLength(8);

  trigger(
    wrapper.find('.van-barrage__item') as HTMLSpanElement,
    'animationend'
  );
  expect(wrapper.findAll('.van-barrage__item')).toHaveLength(7);
});
