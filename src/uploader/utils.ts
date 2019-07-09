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

export function isImageDataUrl(dataUrl: string): boolean {
  return dataUrl.indexOf('data:image') === 0;
}
