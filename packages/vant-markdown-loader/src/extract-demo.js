const path = require('path');
const fs = require('fs');
const os = require('os');
const parser = require('./md-parser');

function hyphenate(str) {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
}

module.exports = function extraDemo(content) {
  const isWin = /^win/.test(os.platform());
  const markdownDir = path.dirname(this.resourcePath);
  const demoLinks = [];

  content = content.replace(
    /<demo-code([\s\S]*?)>([\s\S]*?)<\/demo-code>/g,
    function (_, attrs, link) {
      link = link.trim(); // 去换行符
      const tag = 'demo-code-' + hyphenate(path.basename(link, '.vue'));
      let fullLink;
      if (isWin) {
        fullLink = path.posix.join(...markdownDir.split(path.sep), link);
      } else {
        fullLink = path.join(markdownDir, link);
      }
      demoLinks.indexOf(fullLink) === -1 && demoLinks.push(fullLink);
      const demoContent = fs.readFileSync(fullLink, { encoding: 'utf8' });
      const demoParseredContent = parser.render(
        '```html\n' + demoContent + '\n```'
      );
      return `
        <demo-playground${attrs}
        origin-code="${escape(demoContent)}"
        code-snippet="${escape(demoParseredContent)}">
          <${tag} />
        </demo-playground>
      `;
    }
  );

  return [content, demoLinks];
};
