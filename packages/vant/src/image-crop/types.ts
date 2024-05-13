import type { ComponentPublicInstance } from 'vue';
import type { ImageCropProps } from './ImageCrop';

export type ImageCropTouchPoint = null | Touch;

export type ImageCropSize = {
  width: number;
  height: number;
};

export type ImageCropRectArea = {
  width: number;
  height: number;
  left: number;
  top: number;
};

export type ImageCropState = {
  visible: boolean; // 显示裁切屏幕
  url: string; // 图片地址
  rotateFlag: number; // 旋转方向 0 1 2 3 分别代表4个不同的方向
  fileType?: string;
  top: number; // 初始移动Y
  left: number; // 初始移动X
  point1?: Touch; // 触控点1
  point2?: Touch; // 触控点2
  readonly screenView: ImageCropSize; // 屏幕
  readonly cropArea: ImageCropRectArea; // 裁剪区
  readonly targetImage: HTMLImageElement; // 容器图片
  readonly fileSize: ImageCropRectArea; // 裁剪图片
  readonly fileInitSize: ImageCropSize; // 图片初始大小
  readonly fileRealitySize: ImageCropSize; // 图片真实大小
};

export type ImageCropExpose = {
  reset: () => void;
  setImage: (img: File) => void;
};

export type ImageCropInstance = ComponentPublicInstance<
  ImageCropProps,
  ImageCropExpose
>;

export type ImageCropThemeVars = {
  imageCropDeleteTextColor?: string;
};
