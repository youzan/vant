/**
 * 给包含`ellipsis`样式并且带有过长文本的元素自动添加`title`提示
 */
export const ellipsisTitle = {
    bind(el, binding) {
        el.__ellipsisTitleHandler = (e) => {
            // 如果判断已存在`title`属性而不添加`title`的话，会导致`<u-select>`在某些场景下`value`不变`text`变，而`title`不会更新
            const style = window.getComputedStyle(el);
            const title = binding.value || el.innerText;
            if (style.overflow === 'hidden' && style.textOverflow === 'ellipsis' && style.whiteSpace === 'nowrap' && el.scrollWidth > el.offsetWidth) {
                el.setAttribute('title', title);
            } else if (el.getAttribute('title')) {
                // 不满足配置 title 场景时，删除冗余 title
                el.removeAttribute('title');
            }
        };
        el.addEventListener('mouseenter', el.__ellipsisTitleHandler);
    },
    unbind(el) {
        el.removeEventListener('mouseenter', el.__ellipsisTitleHandler);
        delete el.__ellipsisTitleHandler;
    },
};
