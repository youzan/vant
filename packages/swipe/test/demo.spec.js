import Demo from '../demo';
import demoTest from '../../../test/demo-test';

function mockGetBoundingClientRect(vertical) {
  Element.prototype.getBoundingClientRect = jest.fn(() => ({
    width: 100,
    height: 100
  }));
}

mockGetBoundingClientRect();
demoTest(Demo);
