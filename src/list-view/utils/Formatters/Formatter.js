export class Formatter {
    constructor() {
        this.reversible = true;
        this.format = this.format.bind(this);
        this.parse = this.parse.bind(this);
    }

    format(value) {
        return value;
    }

    parse(value) {
        return value;
    }
}

export const noopFormatter = new Formatter();

export default Formatter;
