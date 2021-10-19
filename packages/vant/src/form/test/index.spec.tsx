import { Form } from '..';
import { Field } from '../../field';
import { later, mount } from '../../../test';
import { submitForm } from './shared';

test('should not reset validation after blurred when validate-trigger is onChange', async () => {
  const validator = (val: string) => val.length > 4;
  const wrapper = mount({
    data() {
      return {
        value: '',
      };
    },
    render() {
      return (
        <Form validateTrigger="onChange">
          <Field
            v-model={this.value}
            name="username"
            rules={[{ validator, message: 'msg' }]}
          />
        </Form>
      );
    },
  });

  const input = wrapper.find('input');
  input.element.value = '1';
  await input.trigger('input');
  await later();

  expect(wrapper.find('.van-field__error-message').exists()).toBeTruthy();

  await input.trigger('blur');
  expect(wrapper.find('.van-field__error-message').exists()).toBeTruthy();
});

test('should render correctly when dynamically add/remove fields', async () => {
  const onSubmit = jest.fn();
  const wrapper = mount({
    render() {
      return (
        <Form onSubmit={onSubmit}>
          {this.list.map((item) => (
            <Field key={item} name={item} modelValue="" />
          ))}
        </Form>
      );
    },
    data() {
      return { list: ['A'] };
    },
  });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: '' });

  await wrapper.setData({ list: ['A', 'B'] });
  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: '', B: '' });

  await wrapper.setData({ list: ['B'] });
  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ B: '' });
});

test('should validate first correctly when dynamically add field', async () => {
  const onFailed = jest.fn();
  const wrapper = mount({
    render() {
      return (
        <Form validateFirst onFailed={onFailed}>
          {this.show && (
            <Field
              name="A"
              rules={[{ required: true, message: 'A' }]}
              modelValue=""
            />
          )}
          <Field
            name="B"
            rules={[{ required: true, message: 'B' }]}
            modelValue=""
          />
        </Form>
      );
    },
    data() {
      return {
        show: false,
      };
    },
  });

  await submitForm(wrapper);
  expect(onFailed.mock.calls[0][0].errors[0].name).toEqual('B');

  await wrapper.setData({ show: true });
  await submitForm(wrapper);
  expect(onFailed.mock.calls[1][0].errors[0].name).toEqual('A');
});
