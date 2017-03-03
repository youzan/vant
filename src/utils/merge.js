export default function(target, ...sources) {
  for (let i = 0; i < sources.length; i++) {
    const source = sources[i] || {};
    for (const prop in source) {
      if (source.hasOwnProperty(prop)) {
        const value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
};
