// import Dialog from 'packages/dialog';
import DialogComponent from 'packages/dialog/src/dialog.vue';
import { mount } from 'avoriaz';

describe('Dialog', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a dialog component', () => {
    let called = false;
    wrapper = mount(DialogComponent);
    wrapper.vm.callback = () => {
      called = true;
    };

    expect(wrapper.hasClass('van-dialog-wrapper')).to.be.true;
    expect(wrapper.data().confirmButtonText).to.equal('确认');

    const confirmBtn = wrapper.find('.van-dialog__confirm')[0];
    confirmBtn.simulate('click');

    expect(wrapper.vm.value).to.be.false;
    expect(called).to.be.true;
  });
});
