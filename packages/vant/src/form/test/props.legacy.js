import { later, mockScrollIntoView } from '../../../test';
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
          { validator: (val) => val.length > 6, message: 'B' },
          { validator: (val) => val !== 'foo', message: 'C' },
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

test('rules prop - pattern', async () => {
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
        rules: [{ pattern: /\d{6}/, message: 'foo' }],
      };
    },
    methods: {
      onFailed,
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: '123' },
  });
});

test('rules prop - message function', async () => {
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
        rules: [{ pattern: /\d{6}/, message: (val) => val }],
      };
    },
    methods: {
      onFailed,
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: '123', name: 'A' }],
    values: { A: '123' },
  });
});

test('rules prop - formatter', async () => {
  const onFailed = jest.fn();
  const wrapper = mountForm({
    template: `
      <van-form @failed="onFailed">
        <van-field name="A" :rules="rules" value=" " />
        <van-button native-type="submit" />
      </van-form>
    `,
    data() {
      return {
        rules: [
          {
            message: 'foo',
            required: true,
            formatter: (val, rule) => {
              expect(rule.message).toEqual('foo');
              return val.trim();
            },
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
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: ' ' },
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
            validator: (value, rule) => {
              expect(value).toEqual('123');
              expect(typeof rule).toEqual('object');
              return new Promise((resolve) => resolve(true));
            },
            message: 'should pass',
          },
          {
            validator: () => new Promise((resolve) => resolve(false)),
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

  expect(wrapper.html()).toMatchSnapshot();
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
  expect(wrapper.html()).toMatchSnapshot();
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
  expect(wrapper.html()).toMatchSnapshot();
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
  expect(wrapper.html()).toMatchSnapshot();
});

test('input-align prop', () => {
  const wrapper = mountForm({
    template: `
      <van-form input-align="right">
        <van-field />
        <van-field>
          <template #input>
            <div />
          </template>
        </van-field>
      </van-form>
    `,
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('error-message-align prop', () => {
  const wrapper = mountForm({
    template: `
      <van-form error-message-align="right">
        <van-field error-message="Error" />
      </van-form>
    `,
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('validate-trigger - onBlur', async () => {
  const wrapper = mountForm({
    template: `
      <van-form ref="form">
        <van-field name="A" :rules="rulesA" value="" />
      </van-form>
    `,
    data: getSimpleRules,
  });

  const input = wrapper.find('input');

  input.trigger('input');
  await later();
  expect(wrapper.contains('.van-field__error-message')).toBeFalsy();

  input.trigger('blur');
  await later();
  expect(wrapper.contains('.van-field__error-message')).toBeTruthy();
});

test('validate-trigger - onChange', async () => {
  const wrapper = mountForm({
    template: `
      <van-form validate-trigger="onChange" ref="form">
        <van-field v-model="value" name="A" :rules="rulesA" />
      </van-form>
    `,
    data() {
      return {
        ...getSimpleRules(),
        value: '',
      };
    },
  });

  const input = wrapper.find('input');

  input.trigger('blur');
  await later();
  expect(wrapper.contains('.van-field__error-message')).toBeFalsy();

  wrapper.setData({ value: '1' });
  await later();
  expect(wrapper.contains('.van-field__error-message')).toBeFalsy();

  wrapper.setData({ value: '' });
  await later();
  expect(wrapper.contains('.van-field__error-message')).toBeTruthy();
});

test('validate-trigger - custom trigger in rules', async () => {
  const wrapper = mountForm({
    template: `
      <van-form validate-trigger="none" ref="form">
        <van-field name="A" :rules="rulesA" :value="valueA" />
        <van-field name="B" :rules="rulesB" :value="valueB" />
      </van-form>
    `,
    data() {
      return {
        valueA: '',
        valueB: '',
        rulesA: [
          {
            message: 'A',
            required: true,
            trigger: 'onChange',
          },
        ],
        rulesB: [
          {
            message: 'B',
            required: true,
            trigger: 'onBlur',
          },
        ],
      };
    },
  });

  const inputs = wrapper.findAll('input');

  inputs[0].trigger('blur');
  wrapper.setData({ valueB: '1' });
  await later();
  wrapper.setData({ valueB: '' });
  await later();
  expect(wrapper.contains('.van-field__error-message')).toBeFalsy();

  inputs[1].trigger('blur');
  wrapper.setData({ valueA: '1' });
  await later();
  wrapper.setData({ valueA: '' });
  await later();
  expect(
    wrapper.element.querySelectorAll('.van-field__error-message').length
  ).toEqual(2);
});

test('scroll-to-error prop', async () => {
  const fn = mockScrollIntoView();
  const wrapper = mountForm({
    template: `
      <van-form scroll-to-error>
        <van-field name="A" :rules="rulesA" value="" />
        <van-button native-type="submit" />
      </van-form>
    `,
    data: getSimpleRules,
  });

  await submitForm(wrapper);

  expect(fn).toHaveBeenCalledTimes(1);
});

test('show-error-message prop', async () => {
  const wrapper = mountForm({
    template: `
      <van-form :show-error-message="showErrorMessage">
        <van-field name="A" :rules="rulesA" value="" />
        <van-button native-type="submit" />
      </van-form>
    `,
    data() {
      return {
        ...getSimpleRules(),
        showErrorMessage: false,
      };
    },
  });

  await submitForm(wrapper);
  expect(wrapper.contains('.van-field__error-message')).toBeFalsy();

  wrapper.setData({ showErrorMessage: true });

  await submitForm(wrapper);
  expect(wrapper.contains('.van-field__error-message')).toBeTruthy();
});

test('show-error prop', async () => {
  const wrapper = mountForm({
    template: `
      <van-form :show-error="showError">
        <van-field name="A" :rules="rulesA" value="" />
        <van-button native-type="submit" />
      </van-form>
    `,
    data() {
      return {
        ...getSimpleRules(),
        showError: false,
      };
    },
  });

  await submitForm(wrapper);
  expect(wrapper.contains('.van-field--error')).toBeFalsy();

  wrapper.setData({ showError: true });

  await submitForm(wrapper);
  expect(wrapper.contains('.van-field--error')).toBeTruthy();
});
