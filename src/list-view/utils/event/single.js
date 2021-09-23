const eventsData = {};
let token = 0;

const getDataName = function (name, type) {
    return `${name}_${type}`;
};

const off = function (name, element, type, token) {
    const eventDataName = getDataName(name, type);
    const eventData = eventsData[eventDataName];
    delete eventData.data[token];
    if (!Object.keys(eventData).length) {
        delete eventsData[eventDataName];
        element.removeEventListener(type, eventData.listener, eventData.options);
    }
};

const initEvent = function (name, element, type, listener, options) {
    const eventDataName = getDataName(name, type);
    let eventData = eventsData[eventDataName];

    if (!eventData) {
        const listenerBack = listener;
        listener = function (e) {
            listenerBack(e, eventsData[eventDataName].data);
        };
        eventData = eventsData[eventDataName] = {
            listener,
            options,
            data: {},
        };
        element.addEventListener(type, listener, options);
    }
    return eventDataName;
};

/**
 * 避免多次绑定同一事件，方便添加 data
 */
export default {
    on(name, data, element, type, listener, options) {
        const eventDataName = initEvent(name, element, type, listener, options);
        token++;
        eventsData[eventDataName].data[token] = data;
        const i = token;
        return () => off(name, element, type, i);
    },
    off,
    getToken() {
        return token;
    },
};
