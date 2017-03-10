import { createVue } from '../creater';
import CellGroup from 'packages/cell-group';

describe('Cell', () => {
  let vm;
  afterEach(() => {
    vm && vm.destroy();
  });

  it('cell group create', () => {
    vm = createVue(CellGroup);
    vm.mount();

    expect(vm.el.classList.contains('zan-cell-group')).to.true;
  });
});
