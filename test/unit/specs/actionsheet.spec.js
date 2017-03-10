import { createVue } from '../creater';
import ActionSheet from 'packages/actionsheet';

describe('ActionSheet', () => {
  let vm;
  afterEach(() => {
    vm && vm.destroy();
  });

  it('create', () => {
    vm = createVue(ActionSheet);
    vm.mount();

    expect(vm.el.classList.contains('zan-actionsheet')).to.true;
  });
});
