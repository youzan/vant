import NumberKeyboard from '..';
import { mount } from '../../../test/utils';

test('click number key', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      theme: 'custom',
      closeButtonText: 'close'
    }
  });

  wrapper.findAll('.van-key').at(0).trigger('click');
  expect(wrapper.emitted('input')[0][0]).toEqual(1);

  wrapper.destroy();
});

it('click delete key', () => {
  const wrapper = mount(NumberKeyboard);
  wrapper.findAll('.van-key').at(11).trigger('click');
  expect(wrapper.emitted('delete')).toBeTruthy();
});

test('click close button', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      theme: 'custom',
      closeButtonText: 'close'
    }
  });

  wrapper.findAll('.van-key').at(12).trigger('click');
  expect(wrapper.emitted('close')).toBeTruthy();
});

test('keey-alive live cycle', () => {
  const wrapper = mount({
    template: `
      <keep-alive>
        <number-keyboard v-if="show" />
      </keep-alive>
    `,
    props: ['show'],
    components: { NumberKeyboard }
  }, {
    attachToDocument: true,
    propsData: {
      show: true
    }
  });

  expect(wrapper.vm.$el).toBeTruthy();
  wrapper.vm.show = false;
  expect(wrapper.vm.el).toBeFalsy();
});

test('listen to show/hide event when has transtion', () => {
  const wrapper = mount(NumberKeyboard);
  wrapper.vm.show = true;
  wrapper.trigger('animationend');
  wrapper.vm.show = false;
  wrapper.trigger('animationend');
  expect(wrapper.emitted('show')).toBeTruthy();
  expect(wrapper.emitted('hide')).toBeTruthy();
});

test('listen to show event when no transtion', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      transition: false
    }
  });
  wrapper.vm.show = true;
  wrapper.vm.show = false;
  expect(wrapper.emitted('show')).toBeTruthy();
  expect(wrapper.emitted('hide')).toBeTruthy();
});

test('title-left slot', () => {
  const wrapper = mount({
    template: `
      <number-keyboard show>
        <template v-slot:title-left>Custom Title Left</template>
      </number-keyboard>
    `
  }, {
    components: {
      NumberKeyboard
    }
  });

  expect(wrapper).toMatchSnapshot();
});
