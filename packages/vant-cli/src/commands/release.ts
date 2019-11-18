/* eslint-disable no-template-curly-in-string */
import { build } from './build';
// @ts-ignore
import releaseIt from 'release-it';

export async function release() {
  await build();
  await releaseIt({
    git: {
      tagName: 'v${version}',
      commitMessage: 'chore: release ${version}'
    }
  });
}
