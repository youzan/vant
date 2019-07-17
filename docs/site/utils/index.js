function iframeReady(iframe, callback) {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  const interval = () => {
    if (iframe.contentWindow.changePath) {
      callback();
    } else {
      setTimeout(() => {
        interval();
      }, 50);
    }
  };

  if (doc.readyState === 'complete') {
    interval();
  } else {
    iframe.onload = interval;
  }
}

const ua = navigator.userAgent.toLowerCase();
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);

function importAll(map, r) {
  r.keys().forEach(key => {
    map[key] = r(key);
  });
}

export {
  isMobile,
  importAll,
  iframeReady
};
