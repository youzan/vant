import Dialog from 'packages/dialog';

describe('Dialog', () => {
  afterEach(() => {
    const el = document.querySelector('.van-dialog-wrapper');
    if (!el) return;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
    Dialog.close();
    if (el.__vue__) {
      el.__vue__.$destroy();
    }
  });

  it('create a alert dialog', (done) => {
    Dialog.alert({
      title: 'title',
      message: 'message'
    }).then((action) => {
      expect(action).to.equal('confirm');
      done();
    });

    expect(document.querySelector('.van-dialog-wrapper')).to.exist;
    expect(document.querySelector('.van-dialog__cancel').style.display).to.equal('none');

    setTimeout(() => {
      document.querySelector('.van-dialog__confirm').click();
    }, 500);
  });

  it('create a confirm dialog', () => {
    Dialog.confirm({
      title: 'title',
      message: 'message'
    });

    expect(document.querySelector('.van-dialog-wrapper')).to.exist;
  });

  it('create a dialog with callback', () => {
    Dialog.alert({
      title: 'title',
      message: 'message',
      callback: () => {
      }
    });

    expect(document.querySelector('.van-dialog-wrapper')).to.exist;
  });
});
