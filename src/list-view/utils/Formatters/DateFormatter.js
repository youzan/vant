import Formatter from './Formatter';

/**
 * @TODO: use moment or some other library
 */

const fix = (num, length = 2) => String(num).padStart(length, '0');

const replacers = {
    yyyy(date) {
        if (process.env.NODE_ENV === 'development') {
            console.warn('[cloud-ui] Please use YYYY instead of yyyy');
        }
        return date.getFullYear();
    },
    YYYY(date) { return date.getFullYear(); },
    MM(date) { return fix(date.getMonth() + 1); },
    dd(date) {
        if (process.env.NODE_ENV === 'development') {
            console.warn('[cloud-ui] Please use DD instead of dd');
        }
        return fix(date.getDate());
    },
    QQ(date) { return `Q${Math.ceil((date.getMonth() + 1)/3)}`},
    DD(date) { return fix(date.getDate()); },
    HH(date) { return fix(date.getHours()); },
    mm(date) { return fix(date.getMinutes()); },
    ss(date) { return fix(date.getSeconds()); },
    ms(date) { return fix(date.getMilliseconds(), 3); },
};
const trunk = new RegExp(Object.keys(replacers).join('|'), 'g');

export class DateFormatter extends Formatter {
    constructor(pattern = 'YYYY-MM-DD HH:mm:ss') {
        super();
        this.pattern = pattern;
    }

    format(value, pattern) {
        pattern = pattern || this.pattern;

        if (value && !isNaN(value))
            value = +value;
        const date = new Date(value);
        if (String(date) === 'Invalid Date')
            return value;

        return pattern.replace(trunk, (cap) => replacers[cap] ? replacers[cap](date) : '');
    }

    parse(value, pattern) {
        pattern = pattern || this.pattern;

        return new Date(value);
    }
}

export const dateFormatter = new DateFormatter();

export default DateFormatter;
