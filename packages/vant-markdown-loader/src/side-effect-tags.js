module.exports = function sideEffectTags(content) {
  const styles = [];

  // 从模版中移除 script 标签
  content = content.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g, '');

  // 从模版中移除 style 标签，并收集到 styles 数组中，以转移为 .vue 文件 的 style 标签
  content = content.replace(/<style[\s\S]*?>([\s\S]*?)<\/style>/g, (_, css) => {
    styles.push(`<style scoped>${css}</style>`);
    return '';
  });

  return [content, styles];
};
