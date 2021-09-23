import Vue from 'vue';
const urlSearchParams = new URLSearchParams(location.search);
const message = {
    route: '',
    singleton: urlSearchParams.get('singleton'),
    postMessage(message, targetOrigin) {
        try {
            if (window.top !== window && window.top.postMessage) {
                window.top.postMessage(message, targetOrigin);
            }
        } catch (error) {
            console.error(error);
        }
    },
};
window.addEventListener('message', (event) => {
    if (window.top !== window && event.source === window.top) {
        let data = event.data;
        if (!Array.isArray(data)) {
            data = [data];
        }
        data.forEach((item) => {
            if (item && item.type) {
                Vue.set(message, item.type, item.value);
            }
        });
    }
});
message.postMessage({
    type: 'loaded',
}, '*');
export default message;
