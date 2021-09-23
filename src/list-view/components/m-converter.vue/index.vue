<script>
export default {
    props: {
        converter: { type: [String, Object], default: undefined },
    },
    data() {
        let currentConverter = {};
        if (this.converter) {
            if (this.converter instanceof Object)
                currentConverter = this.converter;
            else if (this.converter.startsWith('join')) {
                const m = this.converter.match(/^join(\.number)?(:.+)?$/);
                if (!m)
                    throw new Error('converter format error');
                const number = !!m[1];
                const sep = m[2] ? m[2].slice(1) : ',';
                currentConverter = {
                    get(values) {
                        if (Array.isArray(values))
                            return values.join(sep);
                    },
                    set(value) {
                        if (Array.isArray(value))
                            return value;
                        const values = value ? value.split(sep) : [];
                        return number ? values.map((i) => +i) : values;
                    },
                };
            } else if (this.converter === 'json') {
                currentConverter = {
                    get(values) {
                        return JSON.stringify(values);
                    },
                    set(value) {
                        if (Array.isArray(value))
                            return value;
                        try {
                            return JSON.parse(value || '[]');
                        } catch (err) {
                            return [];
                        }
                    },
                };
            }
        }
        return {
            currentConverter,
        };
    },
};
</script>
