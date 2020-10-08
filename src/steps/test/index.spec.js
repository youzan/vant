import { mount } from '../../../test';

test('icon slot', () => {
  const wrapper = mount({
    template: `
    <van-steps :active="1">
      <van-step>
        <template v-slot:inactive-icon>Custim Inactive Icon</template>
        A
      </van-step>
      <van-step>
        <template v-slot:active-icon>Custim Active Icon</template>
        B
      </van-step>
      <van-step>
        <template v-slot:inactive-icon>Custim Inactive Icon</template>
        C
      </van-step>
    </van-steps>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});

test('click-step event', () => {
  const onClickStep = jest.fn();
  const wrapper = mount({
    template: `
      <van-steps :active="1" @click-step="onClickStep">
        <van-step>A</van-step>
        <van-step>B</van-step>
        <van-step>C</van-step>
      </van-steps>
    `,
    methods: {
      onClickStep,
    },
  });

  wrapper.find('.van-step').trigger('click');
  expect(onClickStep).toHaveBeenCalledTimes(0);

  wrapper.find('.van-step__title').trigger('click');
  expect(onClickStep).toHaveBeenCalledWith(0);

  wrapper.findAll('.van-step__circle-container').at(2).trigger('click');
  expect(onClickStep).toHaveBeenCalledTimes(2);
  expect(onClickStep).toHaveBeenLastCalledWith(2);
});

test('inactive-color prop', () => {
  const wrapper = mount({
    template: `
    <van-steps :active="0" inactive-color="red">
      <van-step>A</van-step>
      <van-step>B</van-step>
    </van-steps>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});
