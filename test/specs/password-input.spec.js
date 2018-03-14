import PasswordInput from 'packages/password-input';
import { mount } from 'avoriaz';

describe('PasswordInput', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a PasswordInput', () => {
    wrapper = mount(PasswordInput, {});
    expect(wrapper.find('.van-password-input').length).to.equal(1);
  });

  it('create a PasswordInput with value && info', (done) => {
    wrapper = mount(PasswordInput, {
      propsData: {
        value: '000',
        info: '测试info'
      }
    });

    expect(wrapper.find('.van-password-input i')[2].hasStyle('visibility', 'visible')).to.be.true;
    expect(wrapper.find('.van-password-input i')[3].hasStyle('visibility', 'visible')).to.be.false;
    expect(wrapper.find('.van-password-input__info')[0].text()).to.equal('测试info');

    wrapper.vm.value = '0000';
    wrapper.vm.errorInfo = '测试errorInfo';
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.van-password-input i')[3].hasStyle('visibility', 'visible')).to.be.true;
      expect(wrapper.find('.van-password-input__info').length).to.equal(0);
      expect(wrapper.find('.van-password-input__error-info')[0].text()).to.equal('测试errorInfo');
      done();
    });
  });

  it('listen to focus event', () => {
    wrapper = mount(PasswordInput, {});

    const focus = sinon.spy();
    wrapper.vm.$on('focus', focus);
    wrapper.find('.van-password-input__security')[0].trigger('touchstart');

    expect(focus.calledOnce).to.be.true;
  });

  it('change password length', () => {
    wrapper = mount(PasswordInput, {
      propsData: {
        length: 2
      }
    });

    expect(wrapper.find('.van-password-input i').length).to.equal(2);
  });
});
