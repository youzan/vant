import { createServer, build } from 'vite';
import {
  getViteConfigForSiteDev,
  getViteConfigForSiteProd,
} from '../config/vite.site';
import { genSiteEntry } from './vant-cli-site-plugin';

export async function compileSite(production = false) {
  await genSiteEntry();
  if (production) {
    await build(getViteConfigForSiteProd());
  } else {
    const server = await createServer(getViteConfigForSiteDev());
    await server.listen();
  }
}
