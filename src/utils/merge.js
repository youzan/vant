export default function(target, ...sources) {
  for (let i = 0; i < sources.length; i++) {
    let source = sources[i] || {};
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
};
