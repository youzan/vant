import Notify from '..';
import { transitionStub, later } from '../../../test/utils';

transitionStub();

test('create a notify', async () => {
  // should not cause error when call clear before show notify
  Notify.clear();

  const notify = Notify('test');

  await later();
  expect(notify.$el.outerHTML).toMatchSnapshot();
});

test('notify disappear', async () => {
  const notify = Notify({
    message: 'test',
    color: 'red',
    background: 'blue',
    duration: 10
  });

  await later();
  expect(notify.$el.outerHTML).toMatchSnapshot();

  await later(20);
  expect(notify.$el.outerHTML).toMatchSnapshot();

  Notify({
    message: 'text2',
    duration: 0
  });

  await later();
  expect(notify.$el.outerHTML).toMatchSnapshot();

  Notify.clear();
  await later();
  expect(notify.$el.outerHTML).toMatchSnapshot();
});

test('set default options', () => {
  Notify.setDefaultOptions({ duration: 1000 });
  expect(Notify().duration).toEqual(1000);
  Notify.resetDefaultOptions();
  expect(Notify().duration).toEqual(3000);
  Notify.clear();
});
