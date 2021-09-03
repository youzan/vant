export function stopPropagation(event: Event) {
  event.stopPropagation();
}

export function preventDefault(event: Event, isStopPropagation?: boolean) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

export function trigger(target: Element, type: string) {
  const inputEvent = document.createEvent('HTMLEvents');
  inputEvent.initEvent(type, true, true);
  target.dispatchEvent(inputEvent);
}
