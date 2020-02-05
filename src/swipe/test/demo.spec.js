import Demo from '../demo';
import { snapshotDemo } from '../../../test/demo';
import { mockGetBoundingClientRect } from '../../../test';

let restore;

snapshotDemo(Demo, {
  beforeTest: () => {
    restore = mockGetBoundingClientRect({
      width: 100,
      height: 100,
    });
  },
  afterTest: () => {
    restore();
  },
});
