import Vue from 'vue';
import Card from '..';
import { mount } from '../../../test/utils';

Vue.use(Card);

test('render origin-price slot', () => {
  const wrapper = mount({
    template: `
      <van-card>
        <template v-slot:origin-price>Custom Origin Price</template>
      </van-card>
    `
  });

  expect(wrapper).toMatchSnapshot();
});

test('render price & num slot', () => {
  const wrapper = mount({
    template: `
      <van-card>
        <template v-slot:num>Custom Num</template>
        <template v-slot:price>Custom Price</template>
      </van-card>
    `
  });

  expect(wrapper).toMatchSnapshot();
});

test('render bottom slot', () => {
  const wrapper = mount({
    template: `
      <van-card :price="100">
        <template v-slot:bottom>Custom Bottom</template>
      </van-card>
    `
  });

  expect(wrapper).toMatchSnapshot();
});

test('render thumb & tag slot', () => {
  const wrapper = mount({
    template: `
      <van-card>
        <template v-slot:thumb>Custom Thumb</template>
        <template v-slot:tag>Custom Tag</template>
      </van-card>
    `
  });

  expect(wrapper).toMatchSnapshot();
});

test('render title & desc slot', () => {
  const wrapper = mount({
    template: `
      <van-card>
        <template v-slot:title>Custom Title</template>
        <template v-slot:desc>Custom desc</template>
      </van-card>
    `
  });

  expect(wrapper).toMatchSnapshot();
});
