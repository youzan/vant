import { TeleportProps } from 'vue';
import { VanComponent } from './component';
import { SwipeToOptions } from './swipe';

export type ImagePreviewOptions =
  | string[]
  | {
      loop?: boolean;
      images: string[];
      maxZoom?: number;
      minZoom?: number;
      teleport?: TeleportProps['to'];
      className?: any;
      showIndex?: boolean;
      closeable?: boolean;
      closeIcon?: string;
      beforeClose?: (active: number) => boolean | Promise<boolean>;
      swipeDuration?: number;
      startPosition?: number;
      showIndicators?: boolean;
      closeOnPopstate?: boolean;
      closeIconPosition?: string;
      onClose?(): void;
      onChange?(index: number): void;
      swipeTo?(index: number, options?: SwipeToOptions): void;
    };

export class VanImagePreview {
  images: string[];

  showIndex: boolean;

  startPosition: number;
}

export interface ImagePreview {
  (options: ImagePreviewOptions, startPosition?: number): VanImagePreview;
  install(): void;
  Component: typeof VanComponent;
}

export const ImagePreview: ImagePreview;
