const vueConfig = {
    chainWebpack(config) {
        config.plugins.delete('fork-ts-checker');
    },
};

module.exports = vueConfig;
