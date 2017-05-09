import Tag from 'packages/tag';
import { mount } from 'avoriaz';

describe('Tag', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create without typeProps', () => {
    wrapper = mount(Tag);
  });

  it('create with right typeProps', () => {
    wrapper = mount(Tag, {
      propsData: {
        type: 'primary'
      }
    })
  });

  it('create with wrong typeProps', () => {
    wrapper = mount(Tag, {
      propsData: {
        type: 'wrong'
      }
    })
  });
});
