import { mount, later } from '../../../test';

// this case will throw wierd error in index.spec.js
// so separate it
test('insert tab dynamically', async () => {
  const wrapper = mount({
    template: `
      <van-tabs v-model="active">
        <van-tab title="1">1</van-tab>
        <div v-if="insert">
          <van-tab title="2">2</van-tab>
        </div>
        <van-tab title="3">3</van-tab>
      </van-tabs>
    `,
    data() {
      return {
        insert: false,
        active: 1,
      };
    },
  });

  await later();
  wrapper.setData({ insert: true });
  expect(wrapper).toMatchSnapshot();
});

// this case will throw wierd error in index.spec.js
// so separate it
test('insert tab with child component', async () => {
  const wrapper = mount({
    template: `
      <van-tabs v-model="active">
        <van-tab title="1">1</van-tab>
        <my-tab />
        <van-tab title="3">3</van-tab>
      </van-tabs>
    `,
    components: {
      'my-tab': {
        template: `<van-tab title="2">2</van-tab>`,
      },
    },
  });

  await later();
  expect(wrapper).toMatchSnapshot();
});
