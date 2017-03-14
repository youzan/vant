import { createVue } from '../creater';
import Field from 'packages/field';

describe('Field', () => {
  let vm;
  afterEach(() => {
    vm && vm.destroy();
  });

  it('create', () => {
    vm = createVue(Field);
    vm.mount();

    expect(vm.el.classList.contains('zan-field')).to.true;
  });
});
