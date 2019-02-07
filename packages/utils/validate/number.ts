export default function number(value: string): boolean {
  return /^\d+$/.test(value);
}
