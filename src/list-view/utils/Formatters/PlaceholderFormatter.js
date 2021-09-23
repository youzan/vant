import Formatter from './Formatter';

export class PlaceholderFormatter extends Formatter {
    constructor(placeholder = '-') {
        super();
        this.reversible = false;
        this.placeholder = placeholder;
    }

    format(value, placeholder) {
        placeholder = placeholder || this.placeholder;

        if (typeof value === 'object' || Array.isArray(value))
            return this.placeholder;
        else if (typeof value === 'number' && isNaN(value))
            return this.placeholder;
        else if (value === '' || value === undefined)
            return this.placeholder;
        else
            return value;
    }

    parse(value, placeholder) {
        placeholder = placeholder || this.placeholder;
        console.warn('[cloud-ui]', 'Parsed value may not be correct because PlaceholderFormatter is not reversible.');

        if (value === this.placeholder)
            return '';
        else
            return value;
    }
}

export const placeholderFormatter = new PlaceholderFormatter();

export default PlaceholderFormatter;
