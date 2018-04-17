import Vue from 'vue';
import Dialog from 'packages/dialog';

describe('Dialog', () => {
  afterEach(() => {
    Dialog.close();
  });

  it('create a alert dialog', (done) => {
    Dialog.close();
    Dialog.alert({
      title: 'title',
      message: 'message'
    }).then((action) => {
      expect(action).to.equal('confirm');
      done();
    });

    setTimeout(() => {
      expect(document.querySelector('.van-dialog')).to.exist;
      expect(document.querySelector('.van-dialog__cancel').style.display).to.equal('none');
      document.querySelector('.van-dialog__confirm').click();
    }, 300);
  });

  it('create a confirm dialog', (done) => {
    Dialog.confirm({
      title: 'title',
      message: 'message'
    }).catch((action) => {
      expect(action).to.equal('cancel');
      done();
    });

    expect(document.querySelector('.van-dialog')).to.exist;

    setTimeout(() => {
      document.querySelector('.van-dialog__cancel').click();
    }, 300);
  });

  it('create a confirm dialog with callback', (done) => {
    Dialog.confirm({
      callback: (action) => {
        expect(action).to.equal('cancel');
        done();
      }
    });

    setTimeout(() => {
      document.querySelector('.van-dialog__cancel').click();
    }, 300);
  });

  it('set default options', () => {
    Dialog.setDefaultOptions({
      title: 'default title'
    });
    expect(Dialog.currentOptions.title).to.equal('default title');
    Dialog.resetDefaultOptions();
    expect(Dialog.currentOptions.title).to.equal('');
  });

  it('register component', () => {
    Vue.use(Dialog);
    expect(!!Vue.component('van-dialog')).to.be.true;
  });

  it('before close', (done) => {
    Dialog.confirm({
      beforeClose(action, dialogDone) {
        setTimeout(() => {
          dialogDone();
          setTimeout(() => {
            expect(document.querySelector('.van-dialog').style.display).to.equal('none');
            done();
          }, 300);
        });
      }
    });

    setTimeout(() => {
      document.querySelector('.van-dialog__confirm').click();
      expect(document.querySelector('.van-dialog').style.display).to.equal('');
    }, 300);
  });
});
