import Col from '..';
import Row from '../../row';
import { mount } from '../../../test';

test('Col click event', () => {
  const wrapper = mount(Col);
  wrapper.trigger('click');

  expect(wrapper.emitted('click')).toBeTruthy();
});

test('Row click event', () => {
  const wrapper = mount(Row);
  wrapper.trigger('click');

  expect(wrapper.emitted('click')).toBeTruthy();
});

test('gutter prop', () => {
  const wrapper = mount({
    template: `
      <van-row gutter="24">
        <van-col span="24">24</van-col>

        <van-col span="12">12</van-col>
        <van-col span="12">12</van-col>

        <van-col span="8">8</van-col>
        <van-col span="8">8</van-col>
        <van-col span="8">8</van-col>

        <van-col span="6">6</van-col>
        <van-col span="6">6</van-col>
        <van-col span="6">6</van-col>
        <van-col span="6">6</van-col>
        
        <van-col span="7">7</van-col>
        <van-col span="6">6</van-col>
        <van-col span="5">5</van-col>
        <van-col span="4">4</van-col>
        <van-col span="3">3</van-col>
        <van-col span="2">2</van-col>
      </van-row>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});
