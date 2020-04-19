/* eslint-disable no-template-curly-in-string */
import releaseIt from 'release-it';
import { join } from 'path';

const PLUGIN_PATH = join(__dirname, '../compiler/vant-cli-release-plugin.js');

export async function release() {
  await releaseIt({
    plugins: {
      [PLUGIN_PATH]: {},
    },
    git: {
      tagName: 'v${version}',
      commitMessage: 'chore: release ${version}',
    },
  });
}
