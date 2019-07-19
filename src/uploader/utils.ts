export function toArray<T>(item: T | T[]): T[] {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}

export function readFile(file: File, resultType: string) {
  return new Promise(resolve => {
    const reader = new FileReader();

    reader.onload = event => {
      resolve((event.target as FileReader).result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}

export function isOversize(files: File | File[], maxSize: number): boolean {
  return toArray(files).some(file => file.size > maxSize);
}

export type FileListItem = {
  url?: string;
  file?: File;
  content?: string; // dataUrl
};

const IMAGE_EXT = ['jpeg', 'jpg', 'gif', 'png', 'svg'];

export function isImageUrl(url: string): boolean {
  return IMAGE_EXT.some(ext => url.indexOf(`.${ext}`) !== -1);
}

export function isImageFile(item: FileListItem): boolean {
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
