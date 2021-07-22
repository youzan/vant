import releaseIt from 'release-it';
import { build } from '../commands/build';
import { changelog } from '../commands/changelog';

class VantCliReleasePlugin extends releaseIt.Plugin {
  async beforeRelease() {
    // log an empty line
    console.log('');

    await build();
    await changelog();
  }
}

module.exports = VantCliReleasePlugin;
