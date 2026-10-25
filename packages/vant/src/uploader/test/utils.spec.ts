import { isImageFile } from '../utils';

test('isImageFile', () => {
  expect(isImageFile({ url: 'https://a.jpg' })).toBeTruthy();
  expect(isImageFile({ url: 'https://a.jpeg' })).toBeTruthy();
  expect(isImageFile({ url: 'https://a.png' })).toBeTruthy();
  expect(isImageFile({ url: 'https://a.svg' })).toBeTruthy();
  expect(isImageFile({ url: 'https://a.gif' })).toBeTruthy();
  expect(isImageFile({ url: 'https://a.webp' })).toBeTruthy();
  expect(isImageFile({ url: 'https://a.jfif' })).toBeTruthy();
  expect(isImageFile({ url: 'https://a.bmp' })).toBeTruthy();
  expect(isImageFile({ url: 'https://a.dpg' })).toBeTruthy();
  expect(
    isImageFile({ file: new File([], 'foo.jpg', { type: 'image/jpg' }) }),
  ).toBeTruthy();
  expect(
    isImageFile({ file: new File([], 'bar.pdf', { type: 'application/pdf' }) }),
  ).toBeFalsy();
  expect(isImageFile({ content: 'data:image/xxx' })).toBeTruthy();
  expect(isImageFile({ content: 'data:application/xxx' })).toBeFalsy();
  expect(isImageFile({ isImage: true })).toBeTruthy();
  expect(isImageFile({})).toBeFalsy();
});

test.each([
  'https://example.com/photo.jpg.zip',
  'https://example.com/photo.png/notes.txt',
  'https://example.com/report.pdf?preview=photo.png',
  'https://example.com/report.pdf#photo.jpg',
])('should not infer an image from a partial extension in %s', (url) => {
  expect(isImageFile({ url })).toBeFalsy();
});

test.each([
  'https://example.com/photo.JPG',
  'https://example.com/photo.avif',
  'https://example.com/photo.png?redirect=/report.pdf',
  'https://example.com/photo.svg#icon',
  './photo.webp?width=100#preview',
])('should recognize an image extension before query or hash in %s', (url) => {
  expect(isImageFile({ url })).toBeTruthy();
});
