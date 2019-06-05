export function toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}

export function readFile(file, resultType) {
  return new Promise(resolve => {
    const reader = new FileReader();

    reader.onload = event => {
      resolve(event.target.result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}

export function isOversize(files, maxSize) {
  return toArray(files).some(file => file.size > maxSize);
}
