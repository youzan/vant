export const roundToFirst = (num) => {
    if (num >= 1) {
        const power = Math.pow(10, String(Math.round(num)).length - 1);
        return Math.round(num / power) * power;
    } else if (num > 0)
        return +num.toFixed(String(num).match(/^0\.0*/)[0].length - 1);
    else // 不解决0或负数
        return num;
};

export const getFixedCount = (num) => {
    const m = String(num).match(/\.\d+/);
    return m ? m[0].length - 1 : 0;
};
