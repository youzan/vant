import { mountForm, submitForm, getSimpleRules } from './shared';

test('rules prop - execute order', async () => {
  const onFailed = jest.fn();
  const wrapper = mountForm({
    template: `
      <van-form @failed="onFailed">
        <van-field name="A" :rules="rules" value="123" />
        <van-button native-type="submit" />
      </van-form>
    `,
    data() {
      return {
        rules: [
          { required: true, message: 'A' },
          { validator: val => val.length > 6, message: 'B' },
          { validator: val => val !== 'foo', message: 'C' },
        ],
      };
    },
    methods: {
      onFailed,
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'B', name: 'A' }],
    values: { A: '123' },
  });
});

test('rules prop - async validator', async () => {
  const onFailed = jest.fn();
  const wrapper = mountForm({
    template: `
      <van-form @failed="onFailed">
        <van-field name="A" :rules="rules" value="123" />
        <van-button native-type="submit" />
      </van-form>
    `,
    data() {
      return {
        rules: [
          {
            validator: () => new Promise(resolve => resolve(true)),
            message: 'should pass',
          },
          {
            validator: () => new Promise(resolve => resolve(false)),
            message: 'should fail',
          },
        ],
      };
    },
    methods: {
      onFailed,
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'should fail', name: 'A' }],
    values: { A: '123' },
  });
});

test('validate-first prop', async () => {
  const onSubmit = jest.fn();
  const onFailed = jest.fn();

  const wrapper = mountForm({
    template: `
      <van-form validate-first @submit="onSubmit" @failed="onFailed">
        <van-field name="A" :rules="rulesA" :value="value" />
        <van-field name="B" :rules="rulesB" :value="value" />
        <van-button native-type="submit" />
      </van-form>
    `,
    data() {
      return {
        ...getSimpleRules(),
        value: '',
      };
    },
    methods: {
      onSubmit,
      onFailed,
    },
  });

  await submitForm(wrapper);

  expect(wrapper).toMatchSnapshot();
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'A failed', name: 'A' }],
    values: { A: '', B: '' },
  });

  wrapper.setData({ value: 'foo' });
  await submitForm(wrapper);

  expect(onSubmit).toHaveBeenCalledWith({ A: 'foo', B: 'foo' });
});

test('colon prop', () => {
  const wrapper = mountForm({
    template: `
      <van-form colon>
        <van-field label="Label" />
        <van-field>
          <template #label>Custom Label</template>
        </van-field>
      </van-form>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});

test('label-align prop', () => {
  const wrapper = mountForm({
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
  const wrapper = mountForm({
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
  const wrapper = mountForm({
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
  const wrapper = mountForm({
    template: `
      <van-form error-message-align="right">
        <van-field error-message="Error" />
      </van-form>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});
