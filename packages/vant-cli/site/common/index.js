const ua = navigator.userAgent.toLowerCase();
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);

export function decamelize(str, sep = '-') {
  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
    .replace(/([A-Z])([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
    .toLowerCase();
}

// from https://30secondsofcode.org
export function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  const selection = document.getSelection();

  if (!selection) {
    return;
  }

  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    selection.removeAllRanges();
    selection.addRange(selected);
  }
}

export { isMobile };
