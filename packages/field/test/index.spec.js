import Field from '..';
import { mount, later } from '../../../test/utils';

test('input event', () => {
  const wrapper = mount(Field);
  const input = wrapper.find('input');

  input.element.value = '1';
  input.trigger('input');
  expect(wrapper.emitted('input')[0][0]).toEqual('1');
});

test('click icon event', () => {
  const onIconClick = jest.fn();
  const wrapper = mount(Field, {
    propsData: {
      value: 'a',
      leftIcon: 'contact',
      rightIcon: 'search',
      onIconClick
    }
  });

  wrapper.find('.van-field__left-icon').trigger('click');
  wrapper.find('.van-field__right-icon').trigger('click');
  expect(wrapper.emitted('click-icon')).toBeTruthy();
  expect(wrapper.emitted('click-left-icon')).toBeTruthy();
  expect(wrapper.emitted('click-right-icon')).toBeTruthy();
  expect(onIconClick).toHaveBeenCalled();
});

test('keypress event', () => {
  const wrapper = mount(Field, {
    propsData: {
      value: '',
      type: 'number'
    }
  });

  const fn = jest.fn();
  const { calls } = fn.mock;
  const press = keyCode => wrapper.vm.onKeypress({
    keyCode,
    preventDefault: fn
  });

  press(0);
  expect(calls.length).toBe(1);

  press(50);
  expect(calls.length).toBe(1);

  wrapper.setProps({ value: '0.1' });
  press(46);
  expect(calls.length).toBe(2);

  wrapper.setProps({ type: 'text' });
  press(0);
  expect(calls.length).toBe(2);
});

test('render textarea', async () => {
  const wrapper = mount(Field, {
    propsData: {
      type: 'textarea',
      autosize: true
    }
  });

  await later();
  expect(wrapper).toMatchSnapshot();
});

test('autosize textarea field', () => {
  const wrapper = mount(Field, {
    propsData: {
      type: 'textarea',
      autosize: {}
    }
  });

  const value = '1'.repeat(20);
  const textarea = wrapper.find('.van-field__control');

  wrapper.setProps({ value });
  expect(textarea.element.value).toEqual(value);
});

test('autosize object', async () => {
  const wrapper = mount(Field, {
    propsData: {
      type: 'textarea',
      autosize: {
        maxHeight: 100,
        minHeight: 50
      }
    }
  });

  const textarea = wrapper.find('.van-field__control');

  await later();
  expect(textarea.element.style.height).toEqual(('50px'));
});

test('blur method', () => {
  const fn = jest.fn();
  const wrapper = mount(Field);

  wrapper.vm.$on('blur', fn);
  wrapper.find('input').element.focus();
  wrapper.vm.blur();

  expect(fn).toHaveBeenCalledTimes(1);
});

test('focus method', () => {
  const fn = jest.fn();
  const wrapper = mount(Field);

  wrapper.vm.$on('focus', fn);
  wrapper.vm.focus();

  expect(fn).toHaveBeenCalledTimes(1);
});

test('maxlength', async () => {
  const wrapper = mount(Field, {
    attrs: {
      maxlength: 3
    },
    propsData: {
      value: 1234,
      type: 'number'
    }
  });

  const input = wrapper.find('input');
  expect(input.element.value).toEqual('123');

  input.element.value = 1234;
  await later();
  input.trigger('input');

  expect(input.element.value).toEqual('123');
  expect(wrapper.emitted('input')[0][0]).toEqual('123');
});

test('clearable', () => {
  const wrapper = mount(Field, {
    propsData: {
      value: 'test',
      clearable: true
    }
  });

  expect(wrapper).toMatchSnapshot();
  const input = wrapper.find('input');
  input.trigger('focus');
  expect(wrapper).toMatchSnapshot();

  wrapper.find('.van-field__clear').trigger('touchstart');
  expect(wrapper.emitted('input')[0][0]).toEqual('');
  expect(wrapper.emitted('clear')).toBeTruthy();
});

test('render label slot', () => {
  const wrapper = mount({
    template: `
      <field label="Default Label">
        <template v-slot:label>Custom Label</template>
      </field>
    `,
    components: {
      Field
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('render right icon with icon prop for old version', () => {
  const wrapper = mount(Field, {
    propsData: {
      icon: 'success'
    }
  });
  expect(wrapper).toMatchSnapshot();
});

test('size prop', () => {
  const wrapper = mount(Field, {
    propsData: {
      size: 'large'
    }
  });
  expect(wrapper).toMatchSnapshot();
});
