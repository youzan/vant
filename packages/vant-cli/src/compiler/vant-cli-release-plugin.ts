import { Plugin } from 'release-it';
import { execSync } from 'child_process';

class VantCliReleasePlugin extends Plugin {
  async beforeRelease() {
    // log an empty line
    console.log('');

    execSync('vant-cli build', { stdio: 'inherit' });
    execSync('vant-cli changelog', { stdio: 'inherit' });
  }
}

export default VantCliReleasePlugin;
