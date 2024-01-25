import { ref } from 'vue';
import { mount } from '../../../test';
import { RollingText } from '../../rolling-text';
import { RollingTextGroup } from '../index';
import { RollingTextGroupInstance } from '../types';

test('should start rolling after calling the start method', async () => {
  const wrapper = mount({
    render() {
      return (
        <RollingTextGroup>
          <RollingText startNum={0} targetNum={1} autoStart={false} />
          <RollingText startNum={0} targetNum={2} autoStart={false} />
          <RollingText startNum={0} targetNum={3} autoStart={false} />
          <RollingText startNum={0} targetNum={4} autoStart={false} />
        </RollingTextGroup>
      );
    },
  });
  // const instance = wrapper.vm;

  // instance.start();
  // await later();
  // expect(wrapper.find(itemWrapperClass).classes()).toContain(animationClass);
});
