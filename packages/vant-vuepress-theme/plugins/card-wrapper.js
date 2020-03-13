module.exports = function cardWrapper(html) {
  // @ts-ignore
  this.cacheable && this.cacheable();

  const group = html
    .replace(/<h3/g, ':::<h3')
    .replace(/<h2/g, ':::<h2')
    .replace(/<\/ContentSlotsDistributor>/, ':::</ContentSlotsDistributor>')
    .replace(/<card/g, ':::<card')
    .split(':::');

  return group
    .map(fragment => {
      if (fragment.indexOf('<h3') !== -1) {
        const title = fragment.match(/a> (.*)?<\/h3>/)[1];

        fragment = fragment.replace(/<h3(.+)<\/h3>/, () => '');

        return `<card title="${title || ''}">${fragment}</card>`;
      }

      return fragment;
    })
    .join('');
};
