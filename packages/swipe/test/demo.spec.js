import Demo from '../demo';
import demoTest from '../../../test/demo-test';
import { mockGetBoundingClientRect } from '../../../test/utils';

const restoreMock = mockGetBoundingClientRect({
  width: 100,
  height: 100
});

demoTest(Demo);
restoreMock();
