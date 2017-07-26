module.exports = {
  plugins: [
    require("postcss-easy-import")(),
    require("precss")(),
    require("autoprefixer")({
      browsers: ["Android >= 4.0", "iOS >= 7"]
    })
  ]
};
