import Demo from '../demo';
import demoTest from '../../../test/demo-test';
import { mockGetBoundingClientRect } from '../../../test/utils';

let restore;

demoTest(Demo, {
  hookBeforeTest: () => {
    restore = mockGetBoundingClientRect({
      width: 100,
      height: 100
    });
  },
  hookAfterTest: () => {
    restore();
  }
});
