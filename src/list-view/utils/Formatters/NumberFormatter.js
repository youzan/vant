import Formatter from './Formatter';

export class NumberFormatter extends Formatter {
    constructor(pattern = '0') {
        super();
        this.pattern = pattern;
    }

    format(value, pattern) {
        pattern = pattern || this.pattern;
        if (typeof value !== 'number')
            return pattern.replace(/[0#.,]+/, value);

        const number = (pattern.match(/[0#.,]+/) || ['0'])[0];
        const parts = number.split('.');
        const fill = (parts[0].match(/0+$/) || ['0'])[0].length;
        const fixed = parts[1] ? parts[1].length : 0;
        const comma = pattern.includes(',');

        value = value.toFixed(fixed).padStart(fixed ? fill + 1 + fixed : fill, '0');
        if (comma)
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return pattern.replace(/[0#.,]+/, value);
    }

    parse(value, pattern) {
        pattern = pattern || this.pattern;

        const number = (String(value).match(/[0-9.,]+/) || ['0'])[0];
        return +number.replace(/,/g, '');
    }
}

export const numberFormatter = new NumberFormatter();

export default NumberFormatter;
