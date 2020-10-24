import chalk from 'chalk';
import address from 'address';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { get } from 'lodash';
import { getPort } from 'portfinder';
import { GREEN } from '../common/constant';
import { getSiteDevConfig } from '../config/webpack.site.dev';
import { getSitePrdConfig } from '../config/webpack.site.prd';

function logServerInfo(port: number) {
  const local = `http://localhost:${port}/`;
  const network = `http://${address.ip()}:${port}/`;

  console.log('\n  Site running at:\n');
  console.log(`  ${chalk.bold('Local')}:    ${chalk.hex(GREEN)(local)} `);
  console.log(`  ${chalk.bold('Network')}:  ${chalk.hex(GREEN)(network)}`);
}

function runDevServer(
  port: number,
  config: ReturnType<typeof getSiteDevConfig>
) {
  const server = new WebpackDevServer(webpack(config), config.devServer);

  // this is a hack to disable wds status log
  (server as any).showStatus = function () {};

  const host = get(config.devServer, 'host', 'localhost');
  server.listen(port, host, (err?: Error) => {
    if (err) {
      console.log(err);
    }
  });
}

function watch() {
  const config = getSiteDevConfig();

  getPort(
    {
      port: config.devServer!.port,
    },
    (err, port) => {
      if (err) {
        console.log(err);
        return;
      }

      logServerInfo(port);
      runDevServer(port, config);
    }
  );
}

function build() {
  return new Promise((resolve, reject) => {
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
    watch();
  }
}
