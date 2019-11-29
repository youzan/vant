/* eslint-disable no-template-curly-in-string */
// @ts-ignore
import releaseIt from 'release-it';
import { build } from './build';

export async function release() {
  await build();
  await releaseIt({
    git: {
      tagName: 'v${version}',
      commitMessage: 'chore: release ${version}'
    }
  });
}
