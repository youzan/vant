import ContactCard from '..';
import { mount } from '../../../test';

test('should emit click event after clicking the ContactCard', () => {
  const click = jest.fn();
  const wrapper = mount(ContactCard, {
    context: {
      on: {
        click,
      },
    },
  });

  wrapper.trigger('click');
  expect(click).toHaveBeenCalledTimes(1);
});

test('should not emit click event after clicking the uneditable ContactCard', () => {
  const click = jest.fn();
  const wrapper = mount(ContactCard, {
    propsData: {
      editable: false,
    },
    context: {
      on: {
        click,
      },
    },
  });

  wrapper.trigger('click');
  expect(click).toHaveBeenCalledTimes(0);
});
