export function scrollToAnchor(selector) {
  let count = 0;

  const timer = setInterval(() => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
      clearInterval(timer);
    } else {
      count++;

      if (count > 10) {
        clearInterval(timer);
      }
    }
  }, 100);
}
