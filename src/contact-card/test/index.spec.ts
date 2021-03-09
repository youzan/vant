import { ContactCard } from '..';
import { mount } from '../../../test';

test('should emit click event when clicked', () => {
  const wrapper = mount(ContactCard);
  wrapper.trigger('click');
  expect(wrapper.emitted('click')!.length).toEqual(1);
});

test('should not emit click event when editable is false and clicked ', () => {
  const wrapper = mount(ContactCard, {
    props: {
      editable: false,
    },
  });

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toBeFalsy();
});
