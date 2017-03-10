import { createVue } from '../creater';
import Checkbox from 'packages/checkbox';

describe('Checkbox', () => {
  let vm;
  afterEach(() => {
    vm && vm.destroy();
  });

  it('create', () => {
    vm = createVue(Checkbox);
    vm.mount();

    expect(vm.el.classList.contains('zan-checkbox')).to.true;
  });
});
