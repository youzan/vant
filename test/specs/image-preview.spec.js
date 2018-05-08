import Vue from 'vue';
import { mount } from 'avoriaz';
import { triggerTouch } from '../utils';
import ImagePreview from 'packages/image-preview';
import ImagePreviewVue from 'packages/image-preview/image-preview';

const images = [
  'https://img.yzcdn.cn/upload_files/2017/03/15/FkubrzN7AgGwLlTeb1E89-T_ZjBg.png',
  'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
  'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
];

describe('ImagePreview', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('call ImagePreview Function', (done) => {
    ImagePreview(images);
    Vue.nextTick(() => {
      expect(document.querySelectorAll('.van-image-preview img').length).to.equal(3);
      ImagePreview(images.slice(0, 2));

      Vue.nextTick(() => {
        expect(document.querySelectorAll('.van-image-preview img').length).to.equal(2);
        done();
      });
    });
  });

  it('create a ImagePreview Component', (done) => {
    wrapper = mount(ImagePreviewVue);
    wrapper.vm.images = images;
    wrapper.vm.value = true;
    wrapper.vm.$on('input', val => {
      wrapper.vm.value = val;
    });

    expect(wrapper.hasClass('van-image-preview')).to.be.true;

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('img').length).to.equal(3);
      triggerTouch(wrapper, 'touchstart', 0, 0);
      triggerTouch(wrapper, 'touchmove', 100, 100);
      triggerTouch(wrapper, 'touchend', 0, 0);
      expect(wrapper.vm.value).to.be.true;

      // triggerTouch(wrapper, 'touchstart', 0, 0);
      // triggerTouch(wrapper, 'touchmove', 0, 0);
      // triggerTouch(wrapper, 'touchend', 0, 0);
      // expect(wrapper.vm.value).to.be.false;
      done();
    });
  });

  it('register component', () => {
    Vue.use(ImagePreview);
    expect(!!Vue.component('van-image-preview')).to.be.true;
  });
});
