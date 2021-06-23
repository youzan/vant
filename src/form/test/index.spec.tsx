import { Form } from '..';
import { Field } from '../../field';
import { mountForm } from './shared';
import { later } from '../../../test';

test('should not reset validation after blurred when validate-trigger is onChange', async () => {
  const validator = (val: string) => val.length > 4;
  const wrapper = mountForm({
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
