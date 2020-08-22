/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-ignore
import vant from '../../dist/package-entry';
import 'jest-canvas-mock';

declare global {
  interface Window {
    vant: any;
  }
}

window.vant = vant;
