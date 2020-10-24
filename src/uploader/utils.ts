export type ResultType = 'dataUrl' | 'text' | 'file';

export function toArray<T>(item: T | T[]): T[] {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}

export function readFileContent(file: File, resultType: ResultType) {
  return new Promise((resolve) => {
    if (resultType === 'file') {
      resolve();
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      resolve((event.target as FileReader).result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}

export type FileListItem = {
  url?: string;
  file?: File;
  content?: string; // dataUrl
  isImage?: boolean;
  status?: '' | 'uploading' | 'done' | 'failed';
  message?: string;
};

export function isOversize(
  items: FileListItem | FileListItem[],
  maxSize: number | string
): boolean {
  return toArray(items).some((item) => item.file && item.file.size > maxSize);
}

export function filterFiles(items: FileListItem[], maxSize: number | string) {
  const valid: FileListItem[] = [];
  const invalid: FileListItem[] = [];

  items.forEach((item) => {
    if (item.file && item.file.size > maxSize) {
      invalid.push(item);
    } else {
      valid.push(item);
    }
  });

  return { valid, invalid };
}

const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;

export function isImageUrl(url: string): boolean {
  return IMAGE_REGEXP.test(url);
}

export function isImageFile(item: FileListItem): boolean {
  // some special urls cannot be recognized
  // user can add `isImage` flag to mark it as an image url
  if (item.isImage) {
    return true;
  }

  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  if (item.content) {
    return item.content.indexOf('data:image') === 0;
  }

  return false;
}
