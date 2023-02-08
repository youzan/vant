export function isObject (value: unknown): value is Record<any, any> {
  return value !== null && typeof value === 'object'
}

export function toArray<T extends any | any[]> (
  value: T
): T extends any[] ? T : T[] {
  return Array.isArray(value) ? value : ([value] as any)
}

export function toRegExp (arr: string[], flags?: string): RegExp {
  return new RegExp(`\\b(${arr.join('|')})\\b`, flags)
}

export function genSideEffectsImport (value: string): string {
  return `import '${value}';`
}

export function camelize (value: string): string {
  return value.replace(/(^|-)(\w)/g, (a, b, c) => c.toUpperCase())
}

export function hyphenate (value: string): string {
  return value.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}
