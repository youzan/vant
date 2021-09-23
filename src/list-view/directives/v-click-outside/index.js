import single from '../../utils/event/single';

const handler = function (e, data) {
    Object.values(data).forEach(({ el, binding }) => {
        if (el.contains(e.target))
            return false;
        if (binding.expression)
            binding.value(e);
    });
};

export const clickOutside = {
    bind(el, binding) {
        el['v-click-outside-off'] = single.on('v-click-outside' + new Date(), {
            el,
            binding,
        }, document, 'click', handler);
    },
    unbind(el) {
        if (el['v-click-outside-off']) {
            el['v-click-outside-off']();
            delete el['v-click-outside-off'];
        }
    },
};
