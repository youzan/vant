import Vue from 'vue';
import Badge from 'packages/badge';
import BadgeGroup from 'packages/badge-group';
import { mount } from 'avoriaz';

Vue.component(Badge.name, Badge);
Vue.component(BadgeGroup.name, BadgeGroup);

const component = Vue.component({

});

describe('BadgeGroup', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a badge-group', () => {
    wrapper = mount(BadgeGroup);

    expect(wrapper.hasClass('zan-badge-group')).to.be.true;
    expect(wrapper.instance().activeKey).to.equal(0);
    expect(wrapper.data().badges.length).to.equal(0);
  });
});

describe('Badge', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a badge', () => {
    wrapper = mount(Badge, {
      propsData: {
        title: 'test'
      }
    });

    expect(wrapper.hasClass('zan-badge')).to.be.true;
  });
});
