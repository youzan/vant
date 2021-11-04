const releaseIt = require('release-it');
const { execSync } = require('child_process');

class VantCliReleasePlugin extends releaseIt.Plugin {
  async beforeRelease() {
    // log an empty line
    console.log('');

    execSync('vant-cli build', { stdio: 'inherit' });
    execSync('vant-cli changelog', { stdio: 'inherit' });
  }
}

module.exports = VantCliReleasePlugin;
