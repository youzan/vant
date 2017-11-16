const camelizeRE = /-(\w)/g;
export default function(str) {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
}
