import { createServer } from 'vite';
import { getViteConfigForSiteDev } from '../config/vite.site';
import { genSiteEntry } from './vant-cli-site-plugin';

async function build() {}

export async function compileSite(production = false) {
  await genSiteEntry();
  if (production) {
    await build();
  } else {
    const server = await createServer(getViteConfigForSiteDev());
    await server.listen();
  }
}
