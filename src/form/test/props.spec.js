import { mount, later } from '../../../test';
import { mountForm } from './shared';

test('validate-first prop', async () => {
  const onFailed = jest.fn();
  const wrapper = mountForm({
    template: `
        <van-form validate-first @failed="onFailed">
          <van-field name="A" :rules="rulesA" value="" />
          <van-field name="B" :rules="rulesB" value="" />
          <van-button native-type="submit" />
        </van-form>
      `,
    data() {
      return {
        rulesA: [{ required: true, message: 'A failed' }],
        rulesB: [{ required: true, message: 'B failed' }],
      };
    },
    methods: {
      onFailed,
    },
  });

  wrapper.find('.van-button').trigger('click');
  await later();

  expect(wrapper).toMatchSnapshot();
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'A failed', name: 'A' }],
    values: { A: '', B: '' },
  });
});

test('label-align prop', () => {
  const wrapper = mount({
    template: `
      <van-form label-align="right">
        <van-field label="Label" />
        <van-field label="Label" label-align="center" />
      </van-form>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});

test('label-width prop', () => {
  const wrapper = mount({
    template: `
      <van-form label-width="5rem">
        <van-field label="Label" />
        <van-field label="Label" label-width="10vw" />
      </van-form>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});

test('input-align prop', () => {
  const wrapper = mount({
    template: `
      <van-form input-align="right">
        <van-field />
        <van-field>
          <div slot="input" />
        </van-field>
      </van-form>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});

test('error-message-align prop', () => {
  const wrapper = mount({
    template: `
      <van-form error-message-align="right">
        <van-field error-message="Error" />
      </van-form>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});
