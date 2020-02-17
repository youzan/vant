import Notify from '..';
import { later } from '../../../test';

test('create a notify', async () => {
  // should not cause error when call clear before show notify
  Notify.clear();

  const notify = Notify('test');

  await later();
  expect(notify.$el.outerHTML).toMatchSnapshot();
});

test('type prop', async () => {
  const notify = Notify({
    message: 'test',
    type: 'primary',
  });

  await later();
  expect(notify.$el.outerHTML).toMatchSnapshot();
});

test('notify disappear', async () => {
  const onClose = jest.fn();
  const notify = Notify({
    message: 'test',
    color: 'red',
    background: 'blue',
    duration: 10,
    onClose,
  });

  await later();
  expect(notify.$el.outerHTML).toMatchSnapshot();

  await later(20);
  expect(notify.$el.outerHTML).toMatchSnapshot();
  expect(onClose).toHaveBeenCalledTimes(1);

  Notify({
    message: 'text2',
    duration: 0,
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

test('onClick prop', async () => {
  const onClick = jest.fn();
  const notify = Notify({
    message: 'test',
    onClick,
  });

  notify.$el.click();
  expect(onClick).toHaveBeenCalled();
});
