import Dialog from 'packages/dialog';

describe('Dialog', () => {
  afterEach(() => {
    Dialog.close();
  });

  it('create a alert dialog', (done) => {
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
    }, 500);
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
    }, 500);
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
    }, 500);
  });
});
