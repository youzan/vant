import onlineSvgIcon from './index.vue';

const OnlineSvgIcon = {
    install(Vue) {
        Vue.component('onlineSvgIcon', onlineSvgIcon);
    }
}

const simpleColor = (svg) => {
    const temp1 = svg.replace(/(fill=)("([\s\S]*?)")/g, (p1, p2) => {
        return `${p2}"currentColor"`;
    });
    const temp2 = temp1.replace(/(fill:)(([\s\S]*?);)/g, (p1, p2) => {
        return p2+'currentColor;';
    });
    return temp2;
}

const stoB = (str, type="image/svg+xml") => {
    return new Blob([str], {type})
}

const ie11 = () => !!window.MSInputMethodContext && !!document.documentMode;

export  { onlineSvgIcon, simpleColor, stoB, ie11 };

export default OnlineSvgIcon;