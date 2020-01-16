import chalk from 'chalk';
import { join } from 'path';
import { consola, slimPath } from '../common/logger';
import { CWD, GENERATOR_DIR } from '../common/constant';
import Generator from 'yeoman-generator';

const TEMPLATES = join(GENERATOR_DIR, 'templates');
const PROMPTS = [
  {
    type: 'input',
    name: 'name',
    message: 'Your package name'
  }
];

export class VantCliGenerator extends Generator {
  inputs = {
    name: ''
  };

  async prompting() {
    return this.prompt(PROMPTS).then(inputs => {
      this.inputs = inputs as any;
    });
  }

  writing() {
    consola.info(`Creating project in ${slimPath(CWD)}\n`);

    const copy = (from: string, to?: string) => {
      this.fs.copy(join(TEMPLATES, from), this.destinationPath(to || from));
    };

    const copyTpl = (name: string) => {
      this.fs.copyTpl(
        join(TEMPLATES, name),
        this.destinationPath(name),
        this.inputs
      );
    };

    copy('.gitignore');
    copy('.eslintignore');
    copy('babel.config.js');
    copy('src/**/*', 'src');
    copy('docs/**/*', 'docs');
    copyTpl('package.json');
    copyTpl('vant.config.js');
  }

  install() {
    console.log();
    consola.info('Install dependencies...\n');

    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true,
      skipMessage: true
    });
  }

  end() {
    console.log();
    consola.success(
      `Successfully created project ${chalk.yellow(this.inputs.name)}.`
    );
    consola.success(
      `Now you can run ${chalk.yellow('yarn dev')} to start development!`
    );
  }
}
