import ImagePreview from 'packages/image-preview';

describe('ImagePreview', () => {
  afterEach(() => {
    const el = document.querySelector('.van-image-preview');
    if (!el) return;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
    if (el.__vue__) {
      el.__vue__.$destroy();
    }
  });

  it('create a image preview', (done) => {
    ImagePreview([
      'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
      'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
    ]);

    expect(document.querySelector('.van-image-preview')).to.exist;

    setTimeout(() => {
      document.querySelector('.van-swipe-item').click();
      setTimeout(() => {
        expect(document.querySelector('.van-image-preview').__vue__.$parent.value).to.be.false;
        done();
      }, 500);
    }, 500);
  });
});
