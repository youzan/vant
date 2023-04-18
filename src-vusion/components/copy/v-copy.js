import Vue from 'vue';
import { copy } from 'cloud-ui.vusion/src/utils/edit/clipboard';

/**
 * 给任意元素添加`<u-copy>`工具提示效果
 * @value 需要绑定的内容
 */
const directive = {
    handle(binding) {
        const data = {
            value: binding.value,
            placement: 'bottom',
            successText: '已复制',
            disabled: false,
            hideDelay: +binding.arg || 3000,
            feedback: 'tooltip',
        };

        Object.keys(binding.modifiers).forEach((key) => {
            if (/^(top|bottom|left|right)(-start|-end)?$/.test(key))
                data.placement = key;
            if (/^(tooltip|toast)?$/.test(key))
                data.feedback = key;
        });

        return data;
    },
    bind(el, binding) {
        const data = el['v-copy'] = Object.assign(el['v-copy'] || {}, directive.handle(binding));

        const UTooltip = Vue.component('UTooltip') || Vue.component('u-tooltip');
        el.tooltipVM = new UTooltip({
            propsData: {
                content: data.successText,
                trigger: 'manual',
                placement: data.placement,
                reference: el,
            },
        }).$mount();

        el.onClick = () => {
            const disabled = el.getAttribute('disabled');
            if (disabled !== null)
                return;
            const data = el['v-copy'];
            const success = copy(data.value);
            if (success) {
                if (data.feedback === 'toast') {
                    Vue.prototype.$toast.show(data.successText, data.hideDelay);
                } else {
                    el.tooltipVM.open();
                    clearTimeout(el.timeoutId);
                    el.timeoutId = setTimeout(() => {
                        el.tooltipVM.close();
                    }, data.hideDelay);
                }
            }
        };
        el.addEventListener('click', el.onClick);
    },
    update(el, binding) {
        el['v-copy'] = Object.assign(el['v-copy'] || {}, directive.handle(binding));
    },
    unbind(el, binding) {
        el.tooltipVM && el.tooltipVM.$destroy();
        el.removeEventListener('click', el.onClick);
        clearTimeout(el.timeoutId);
    },
};

export default directive;
