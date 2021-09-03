import type { ComponentPublicInstance } from 'vue';
import type { ImageFit } from '../image';
import type { Interceptor } from '../utils';
import type { UploaderProps } from './Uploader';

export type UploaderResultType = 'dataUrl' | 'text' | 'file';

export type UploaderFileListItem = {
  url?: string;
  file?: File;
  content?: string;
  isImage?: boolean;
  status?: '' | 'uploading' | 'done' | 'failed';
  message?: string;
  imageFit?: ImageFit;
  deletable?: boolean;
  previewSize?: number | string;
  beforeDelete?: Interceptor;
};

export type UploaderMaxSize = number | string | ((file: File) => boolean);

type PromiseOrNot<T> = T | Promise<T>;

export type UploaderBeforeRead = (
  file: File | File[],
  detail: {
    name: string | number;
    index: number;
  }
) => PromiseOrNot<File | File[] | undefined>;

export type UploaderAfterRead = (
  items: UploaderFileListItem | UploaderFileListItem[],
  detail: {
    name: string | number;
    index: number;
  }
) => void;

export type UploaderExpose = {
  chooseFile: () => void;
  closeImagePreview: () => void;
};

export type UploaderInstance = ComponentPublicInstance<
  UploaderProps,
  UploaderExpose
>;
