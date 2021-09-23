import { select } from '../../utils/edit';

export const focus = {
    inserted(el, binding) {
        if (!!binding.value || binding.value === undefined)
            el.focus();
        if (binding.value === 'select')
            select(el);
    },
};
