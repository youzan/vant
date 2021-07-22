import { lockClick } from '../lock-click';

test('should allow to toggle lockClick class', () => {
  const CLASSNAME = 'van-toast--unclickable';
  expect(document.body.classList.contains(CLASSNAME)).toBeFalsy();

  lockClick(true);
  expect(document.body.classList.contains(CLASSNAME)).toBeTruthy();

  lockClick(true);
  lockClick(false);
  expect(document.body.classList.contains(CLASSNAME)).toBeTruthy();

  lockClick(false);
  lockClick(false);
  expect(document.body.classList.contains(CLASSNAME)).toBeFalsy();

  lockClick(true);
  expect(document.body.classList.contains(CLASSNAME)).toBeTruthy();

  lockClick(false);
  expect(document.body.classList.contains(CLASSNAME)).toBeFalsy();
});
