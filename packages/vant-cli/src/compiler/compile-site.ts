import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { get } from 'lodash';
import { getPortPromise } from 'portfinder';
import { getSiteDevConfig } from '../config/webpack.site.dev';
import { getSitePrdConfig } from '../config/webpack.site.prd';

async function runDevServer(
  port: number,
  config: ReturnType<typeof getSiteDevConfig>
) {
  const host = get(config.devServer, 'host', 'localhost');
  const server = new WebpackDevServer(
    {
      ...config.devServer,
      port,
      host,
    },
    webpack(config)
  );

  await server.start();
}

async function watch() {
  const config = getSiteDevConfig();
  const port = await getPortPromise({
    port: config.devServer.port,
  });
  await runDevServer(port, config);
}

function build() {
  return new Promise<void>((resolve, reject) => {
    const config = getSitePrdConfig();

    webpack(config, (err, stats) => {
      if (err || (stats && stats.hasErrors())) {
        reject();
      } else {
        resolve();
      }
    });
  });
}

export async function compileSite(production = false) {
  if (production) {
    await build();
  } else {
    await watch();
  }
}
