/**
 * 按照一定的规则进行匹配
 */
export function DOMChecker(wrapper, rules) {
  const { text, count, src, style, noStyle, value } = rules;

  if (text) {
    Object.keys(text).forEach(key => {
      expect(wrapper.find(key)[0].text().trim()).to.equal(text[key]);
    });
  }

  if (count) {
    Object.keys(count).forEach(key => {
      expect(wrapper.find(key).length).to.equal(count[key]);
    });
  }

  if (src) {
    Object.keys(src).forEach(key => {
      expect(wrapper.find(key)[0].element.src).to.equal(src[key]);
    });
  }

  if (value) {
    Object.keys(value).forEach(key => {
      expect(wrapper.find(key)[0].element.value).to.equal(value[key]);
    });
  }

  if (style) {
    Object.keys(style).forEach(key => {
      Object.keys(style[key]).forEach(prop => {
        expect(wrapper.find(key)[0].hasStyle(prop, style[key][prop])).to.equal(true);
      });
    });
  }

  if (noStyle) {
    Object.keys(noStyle).forEach(key => {
      Object.keys(noStyle[key]).forEach(prop => {
        expect(wrapper.find(key)[0].hasStyle(prop, noStyle[key][prop])).to.equal(false);
      });
    });
  }
}
