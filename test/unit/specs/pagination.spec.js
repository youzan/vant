import Vue from 'vue';
import { mount } from 'avoriaz';
import Pagination from 'packages/pagination';

describe('Pagination', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a multi Pagination', done => {
    wrapper = mount(Pagination, {
      propsData: {
        mode: 'multi',
        totalItems: 120,
        itemsPerPage: 10,
        showPageSize: 5,
        value: {
          currentPage: 2
        }
      }
    });
    expect(wrapper.hasClass('van-pagination')).to.be.true;
    expect(wrapper.find('.van-pagination__item').length).to.equal(7);
    expect(
      wrapper.find('.van-pagination__item')[0].hasClass('van-pagination__prev')
    ).to.be.true;
    expect(wrapper.vm.value.currentPage).to.equal(2);

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    wrapper.find('.van-pagination__next')[0].trigger('click');
    Vue.nextTick(() => {
      expect(eventStub.calledWith('input'));
      expect(eventStub.calledWith('change'));
      // expect(wrapper.data().currentPage).to.equal(5);
      done();
    });

    wrapper.vm.value = { currentPage: 12 };
    wrapper.update();
    Vue.nextTick(() => {
      expect(
        wrapper
          .find('.van-pagination__next')[0]
          .hasClass('van-pagination--disabled')
      ).to.be.true;
      done();
    });
  });

  it('create a multi forceEllipses Pagination', done => {
    wrapper = mount(Pagination, {
      propsData: {
        mode: 'multi',
        totalItems: 120,
        itemsPerPage: 10,
        showPageSize: 5,
        forceEllipses: true,
        value: {
          currentPage: 1
        }
      }
    });

    const ellipsesLink = wrapper.find('.van-pagination__page')[5];
    expect(ellipsesLink.element.textContent.trim()).to.equal('...');

    wrapper.vm.value = { currentPage: 7 };
    wrapper.update();
    Vue.nextTick(() => {
      // expect(wrapper.find('.van-pagination__item').length).to.equal(2);
      // expect(wrapper.data().pages.length).to.equal(2);
      const ellipsesLink = wrapper.find('.van-pagination__page')[0];
      expect(ellipsesLink.element.textContent.trim()).to.equal('...');
      done();
    });
  });

  it('create a simple Pagination', () => {
    wrapper = mount(Pagination, {
      propsData: {
        mode: 'simple',
        totalItems: 120,
        itemsPerPage: 10,
        value: {
          currentPage: 1
        }
      }
    });
    expect(wrapper.hasClass('van-pagination')).to.be.true;
    expect(wrapper.find('.van-pagination__item').length).to.equal(2);
    expect(
      wrapper.find('.van-pagination__item')[0].hasClass('van-pagination__prev')
    ).to.be.true;
  });

  it('create a empty Pagination', done => {
    wrapper = mount(Pagination, {
      propsData: {
        mode: 'multi',
        totalItems: 120,
        itemsPerPage: 10,
        showPageSize: 5,
        nextText: '下一页',
        previousText: '上一页',
        value: {
          currentPage: 2
        }
      }
    });

    expect(wrapper.find('.van-pagination__prev')[0].element.textContent.trim()).to.equal('上一页');
    expect(wrapper.find('.van-pagination__next')[0].element.textContent.trim()).to.equal('下一页');

    wrapper.vm.value = { currentPage: 18 };
    wrapper.update();
    Vue.nextTick(() => {
      expect(wrapper.find('.van-pagination__page').length).to.equal(0);
      done();
    });
  });
});
