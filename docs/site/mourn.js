const now = new Date();

if (now.getFullYear() === 2020 && now.getMonth() === 3 && now.getDate() === 4) {
  const filter = `
    html{
      filter: grayscale(100%);
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
    }
  `;
  document.head.insertAdjacentHTML('beforeend', `<style>${filter}</style>`);
}
