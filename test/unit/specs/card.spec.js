import { createVue } from '../creater';
import Card from 'packages/card';

describe('Card', () => {
  let vm;
  afterEach(() => {
    vm && vm.destroy();
  });

  it('create', () => {
    vm = createVue(Card, {
      title: 'card',
      desc: 'card',
      thumb: 'https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg'
    });
    vm.mount();

    expect(vm.el.classList.contains('zan-card')).to.true;
  });
});
