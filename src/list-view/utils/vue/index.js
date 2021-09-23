import Vue from 'vue';

export const getRouteComponentOptions = function (route) {
    if (route.components.default) {
        const ctor = route.components.default._Ctor;
        let componentOptions;
        if (ctor && ctor[0]) {
            componentOptions = ctor[0].options;
        } else {
            componentOptions = Vue.extend(route.components.default).options;
        }
        return componentOptions;
    }
};
