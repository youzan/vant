import Demo from '../demo/index.vue';
import { snapshotDemo } from '../../../test/demo';
import { mockGetBoundingClientRect } from '../../../test';

let restore: () => void;

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
