export function removeNode(el: Node) {
  const parent = el.parentNode;

  if (parent) {
    parent.removeChild(el);
  }
}
