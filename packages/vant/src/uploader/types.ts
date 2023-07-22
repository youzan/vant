import type { ComponentPublicInstance } from 'vue';
import type { ImageFit } from '../image';
import type { Numeric, Interceptor } from '../utils';
import type { UploaderProps } from './Uploader';

export type UploaderResultType = 'dataUrl' | 'text' | 'file';

export type UploaderFileListItem = {
  url?: string;
  file?: File;
  objectUrl?: string;
  content?: string;
  isImage?: boolean;
  status?: '' | 'uploading' | 'done' | 'failed';
  message?: string;
  imageFit?: ImageFit;
  deletable?: boolean;
  reupload?: boolean;
  previewSize?: Numeric;
  beforeDelete?: Interceptor;
};

export type UploaderMaxSize = Numeric | ((file: File) => boolean);

export type UploaderBeforeRead = (
  file: File | File[],
  detail: {
    name: Numeric;
    index: number;
  },
) => boolean | undefined | Promise<File | File[] | undefined>;

export type UploaderAfterRead = (
  items: UploaderFileListItem | UploaderFileListItem[],
  detail: {
    name: Numeric;
    index: number;
  },
) => void;

export type UploaderExpose = {
  chooseFile: () => void;
  closeImagePreview: () => void;
};

export type UploaderInstance = ComponentPublicInstance<
  UploaderProps,
  UploaderExpose
>;

export type UploaderThemeVars = {
  uploaderSize?: string;
  uploaderIconSize?: string;
  uploaderIconColor?: string;
  uploaderTextColor?: string;
  uploaderTextFontSize?: string;
  uploaderUploadBackground?: string;
  uploaderUploadActiveColor?: string;
  uploaderDeleteColor?: string;
  uploaderDeleteIconSize?: string;
  uploaderDeleteBackground?: string;
  uploaderFileBackground?: string;
  uploaderFileIconSize?: string;
  uploaderFileIconColor?: string;
  uploaderFileNamePadding?: string;
  uploaderFileNameMarginTop?: string;
  uploaderFileNameFontSize?: string;
  uploaderFileNameTextColor?: string;
  uploaderMaskTextColor?: string;
  uploaderMaskBackground?: string;
  uploaderMaskIconSize?: string;
  uploaderMaskMessageFontSize?: string;
  uploaderMaskMessageLineHeight?: number | string;
  uploaderLoadingIconSize?: string;
  uploaderLoadingIconColor?: string;
  uploaderDisabledOpacity?: number | string;
};
