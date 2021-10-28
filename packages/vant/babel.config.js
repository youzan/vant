module.exports = {
  presets: [
    [
      '@vant/cli/preset.cjs',
      {
        loose: process.env.BUILD_TARGET === 'package',
        enableObjectSlots: false,
      },
    ],
  ],
};
