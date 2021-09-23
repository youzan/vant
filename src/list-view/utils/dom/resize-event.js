import ResizeObserver from 'resize-observer-polyfill';

const resizeHandler = function (entries) {
    for (const entry of entries) {
        const listeners = entry.target.__resizeListeners__ || [];
        listeners.forEach((listener) => listener());
    }
};

export const addResizeListener = function (element, listener) {
    if (!element.__resizeListeners__) {
        element.__resizeListeners__ = [];
        element.__ro__ = new ResizeObserver(resizeHandler);
        element.__ro__.observe(element);
    }
    element.__resizeListeners__.push(listener);
};

/* istanbul ignore next */
export const removeResizeListener = function (element, listener) {
    if (!element || !element.__resizeListeners__)
        return;
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(listener), 1);
    if (!element.__resizeListeners__.length) {
        element.__ro__.disconnect();
    }
};
