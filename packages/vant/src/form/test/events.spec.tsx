import { mount } from '../../../test';
import { submitForm, mountSimpleRulesForm } from './shared';
import { Form } from '..';
import { Field } from '../../field';

test('should emit submit event when submitting form', async () => {
  const onSubmit = jest.fn();
  const wrapper = mount({
    render() {
      return (
        <Form onSubmit={onSubmit}>
          <Field name="A" modelValue="bar" />
        </Form>
      );
    },
  });

  await submitForm(wrapper);

  expect(onSubmit).toHaveBeenCalledWith({ A: 'bar' });
});

test('should emit failed event when validating failed', async () => {
  const onFailed = jest.fn();
  const { form } = mountSimpleRulesForm({
    methods: {
      onFailed,
    },
  });

  await submitForm(form);

  expect(form.html()).toMatchSnapshot();
  expect(onFailed).toHaveBeenCalledWith({
    errors: [
      { name: 'A', message: 'A failed' },
      { name: 'B', message: 'B failed' },
    ],
    values: { A: '', B: '' },
  });
});

test('should emit failed event correctly when rule message is empty', async () => {
  const onFailed = jest.fn();
  const wrapper = mount({
    render() {
      return (
        <Form ref="form" onFailed={onFailed}>
          <Field name="A" rules={this.rulesA} modelValue="" />
        </Form>
      );
    },
    data() {
      return {
        rulesA: [{ required: true }],
      };
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ name: 'A', message: '' }],
    values: { A: '' },
  });
});
