module.exports = {
  presets: [
    [
      '@vant/cli/preset',
      {
        loose: process.env.BUILD_TARGET === 'package',
        enableObjectSlots: false,
      },
    ],
  ],
};
