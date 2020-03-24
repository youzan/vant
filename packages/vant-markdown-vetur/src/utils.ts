// myName -> my-name
export function toKebabCase(input: string): string {
  return input.replace(
    /[A-Z]/g,
    (val, index) => (index === 0 ? '' : '-') + val.toLowerCase()
  );
}

// name `v2.0.0` -> name
export function removeVersion(str: string) {
  return str.replace(/`(\w|\.)+`/g, '').trim();
}

// *boolean* -> boolean
export function formatType(type: string) {
  return type.replace(/\*/g, '');
}

export function normalizePath(path: string): string {
  return path.replace(/\\/g, '/');
}
