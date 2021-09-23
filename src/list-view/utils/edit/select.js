/**
 * https://github.com/zenorocha/select/blob/master/src/select.js
 */

export function select(el) {
    let selectedText;

    if (el.nodeName === 'SELECT') {
        el.focus();

        selectedText = el.value;
    } else if (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA') {
        const readonly = el.hasAttribute('readonly');

        if (!readonly) {
            el.setAttribute('readonly', '');
        }

        el.select();
        el.setSelectionRange(0, el.value.length);

        if (!readonly) {
            el.removeAttribute('readonly');
        }

        selectedText = el.value;
    } else {
        if (el.hasAttribute('contenteditable')) {
            el.focus();
        }

        const selection = window.getSelection();
        const range = document.createRange();

        range.selectNodeContents(el);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

export default select;
