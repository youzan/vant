const path = require('path');

module.exports = function extraDemo(content) {
  const demoLinks = [];

  /*
   * 提取 README 中的 demo 文件路径，例如下面的内容，就会提取为 ['./demo-link/index.vue']
   * ```demo
   * ./demo-link/index.vue
   * ```
   */
  content = content.replace(
    /<pre><code class="language-demo">([\s\S]*?)<\/code><\/pre>/g,
    function (_, link) {
      link = link.trim(); // 去换行符
      demoLinks.push(link);
      const demoFileName = path.basename(link, '.vue'); // 获取文件名
      const tag = demoFileName.replace(/\B([A-Z])/g, '-$1').toLowerCase(); // 驼峰转连字符
      return `<${tag} />`;
    }
  );

  return [content, demoLinks];
};
