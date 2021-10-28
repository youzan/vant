import releaseIt from 'release-it';
import { build } from '../commands/build.js';
import { changelog } from '../commands/changelog.js';

class VantCliReleasePlugin extends releaseIt.Plugin {
  async beforeRelease() {
    // log an empty line
    console.log('');

    await build();
    await changelog();
  }
}

module.exports = VantCliReleasePlugin;
