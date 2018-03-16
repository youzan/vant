import ContactCard from 'packages/contact-card';
import ContactList from 'packages/contact-list';
import ContactEdit from 'packages/contact-edit';
import { mount } from 'avoriaz';

describe('ContactCard', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a ContactCard', () => {
    wrapper = mount(ContactCard);
    expect(wrapper.hasClass('van-contact-card')).to.be.true;
  });

  it('create a add ContactCard', done => {
    wrapper = mount(ContactCard, {
      propsData: {
        type: 'add'
      }
    });

    expect(wrapper.hasClass('van-contact-card')).to.be.true;
    expect(wrapper.find('.van-contact-card__text')[0].text()).to.equal('添加订单联系人信息');

    wrapper.vm.addText = '测试文案';
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.van-contact-card__text')[0].text()).to.equal('测试文案');
      done();
    });
  });

  it('create a edit ContactCard', () => {
    wrapper = mount(ContactCard, {
      propsData: {
        type: 'edit',
        tel: '13000000000',
        name: '测试姓名'
      }
    });

    expect(wrapper.hasClass('van-contact-card')).to.be.true;
    expect(wrapper.find('.van-contact-card__text div')[0].text()).to.equal('联系人：测试姓名');
    expect(wrapper.find('.van-contact-card__text div')[1].text()).to.equal('联系电话：13000000000');

    const spy = sinon.spy();
    wrapper.vm.$on('click', spy);
    wrapper.trigger('click');
    expect(spy.calledOnce).to.be.true;

    wrapper.vm.editable = false;
    const spy2 = sinon.spy();
    wrapper.vm.$on('click', spy2);
    wrapper.trigger('click');
    expect(spy2.calledOnce).to.be.false;
  });
});

describe('ContactList', () => {
  const list = [
    {
      id: '1',
      name: '张三',
      tel: '13000000000'
    },
    {
      id: '2',
      name: '李四',
      tel: '1310000000'
    },
    {
      id: '3',
      name: '王五',
      tel: '1320000000'
    }
  ];

  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a ContactList', () => {
    wrapper = mount(ContactList);
    expect(wrapper.hasClass('van-contact-list')).to.be.true;
  });

  it('create a ContactList with three items', () => {
    wrapper = mount(ContactList, {
      propsData: {
        value: '1',
        list
      }
    });
    expect(wrapper.find('.van-cell').length).to.equal(4);
    expect(wrapper.find('.van-icon-checked').length).to.equal(1);
  });

  it('listen to add & edit event', (done) => {
    wrapper = mount(ContactList, {
      propsData: {
        list
      }
    });

    const add = sinon.spy();
    wrapper.vm.$on('add', add);
    wrapper.find('.van-contact-list__add')[0].trigger('click');
    expect(add.calledOnce).to.be.true;

    wrapper.vm.$on('edit', (item, index) => {
      expect(index).to.equal(0);
      done();
    });
    wrapper.find('.van-contact-list__edit')[0].trigger('click');
  });

  it('listen to select event', (done) => {
    wrapper = mount(ContactList, {
      propsData: {
        value: '1',
        list
      }
    });

    wrapper.vm.$on('select', (item, index) => {
      expect(item.id).to.equal('3');
      done();
    });
    wrapper.find('.van-radio')[2].trigger('click');
  });
});

describe('ContactEdit', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a ContactEdit', () => {
    wrapper = mount(ContactEdit);
    expect(wrapper.hasClass('van-contact-edit')).to.be.true;
    expect(wrapper.find('.van-field__control')[0].element.value).to.equal('');
    expect(wrapper.find('.van-field__control')[1].element.value).to.equal('');
  });

  it('create a ContactEdit with props', () => {
    const contactInfo = {
      name: '测试',
      tel: '123123213'
    };

    wrapper = mount(ContactEdit, {
      propsData: {
        contactInfo
      }
    });

    expect(wrapper.find('.van-field__control')[0].element.value).to.equal(contactInfo.name);
    expect(wrapper.find('.van-field__control')[1].element.value).to.equal(contactInfo.tel);
  });

  it('save contactInfo', () => {
    const contactInfo = {
      name: '',
      tel: '123123213'
    };

    wrapper = mount(ContactEdit, {
      propsData: {
        contactInfo
      }
    });

    const saveSpy = sinon.spy();
    wrapper.vm.$on('save', saveSpy);

    const saveButton = wrapper.find('.van-button')[0];

    // name empty
    wrapper.vm.data.name = '';
    saveButton.trigger('click');
    expect(wrapper.vm.errorInfo['name']).to.be.true;
    wrapper.find('.van-field__control')[0].trigger('focus');
    expect(wrapper.vm.errorInfo['name']).to.be.false;

    // name too long
    wrapper.vm.data.name = '111111111111111111111111111';
    saveButton.trigger('click');
    expect(wrapper.vm.errorInfo['name']).to.be.true;
    wrapper.find('.van-field__control')[0].trigger('focus');
    expect(wrapper.vm.errorInfo['name']).to.be.false;

    // tel empty
    wrapper.vm.data.name = '123';
    wrapper.vm.data.tel = '';
    saveButton.trigger('click');
    expect(wrapper.vm.errorInfo['tel']).to.be.true;
    wrapper.find('.van-field__control')[1].trigger('focus');
    expect(wrapper.vm.errorInfo['tel']).to.be.false;

    // tel invalid
    wrapper.vm.data.tel = 'abc';
    saveButton.trigger('click');
    expect(wrapper.vm.errorInfo['tel']).to.be.true;
    wrapper.find('.van-field__control')[1].trigger('focus');
    expect(wrapper.vm.errorInfo['tel']).to.be.false;

    // saving
    wrapper.vm.data.tel = '13000000000';
    saveButton.trigger('click');
    wrapper.vm.isSaving = true;
    saveButton.trigger('click');
    expect(saveSpy.calledOnce).to.be.true;
  });

  it('delete', done => {
    wrapper = mount(ContactEdit, {
      attachToDocument: true,
      propsData: {
        isDeleting: true,
        isEdit: true,
        contactInfo: {
          id: '123'
        }
      }
    });

    const deleteButton = wrapper.find('.van-button')[1];
    deleteButton.trigger('click');
    wrapper.vm.onDeleteContact();

    setTimeout(() => {
      wrapper.vm.isDeleting = false;
      wrapper.vm.$nextTick(() => {
        deleteButton.trigger('click');
        setTimeout(() => {
          expect(document.querySelectorAll('.van-dialog').length).to.equal(1);

          wrapper.vm.$on('delete', () => {
            done();
          });
          document.querySelector('.van-dialog__confirm').click();
        }, 300);
      });
    }, 300);
  });

  it('watch contactInfo', done => {
    const contactInfo = {
      name: '123'
    };

    wrapper = mount(ContactEdit, {
      propsData: {
        contactInfo: {}
      }
    });

    wrapper.setProps({ contactInfo });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.data.name).to.equal('123');
      done();
    });
  });
});
