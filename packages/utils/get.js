export default function(object, path) {
  const keys = path.split('.');
  let result = object;

  keys.forEach(key => {
    result = result[key] || '';
  });
  return result;
}
