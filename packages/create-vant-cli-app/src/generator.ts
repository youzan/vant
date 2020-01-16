import chalk from 'chalk';
import consola from 'consola';
import { join } from 'path';
import { CWD, GENERATOR_DIR } from './constant';
import Generator from 'yeoman-generator';

const TEMPLATES = join(GENERATOR_DIR, 'templates');
const PROMPTS = [
  {
    name: 'preprocessor',
    message: 'Select css preprocessor',
    type: 'list',
    choices: ['Less', 'Sass']
  }
];

export class VanGenerator extends Generator {
  inputs = {
    name: '',
    preprocessor: ''
  };

  constructor(name: string) {
    super([], {
      env: {
        cwd: join(CWD, name)
      },
      resolved: GENERATOR_DIR
    });

    this.inputs.name = name;
  }

  async prompting() {
    return this.prompt(PROMPTS).then(inputs => {
      this.inputs.preprocessor = inputs.preprocessor as string;
    });
  }

  writing() {
    consola.info(`Creating project in ${join(CWD, this.inputs.name)}\n`);

    const copy = (from: string, to?: string) => {
      this.fs.copy(join(TEMPLATES, from), this.destinationPath(to || from));
    };

    const copyTpl = (name: string, target?: string) => {
      this.fs.copyTpl(
        join(TEMPLATES, name),
        this.destinationPath(target || name),
        this.inputs
      );
    };

    copyTpl('package.json.tpl', 'package.json');
    copyTpl('vant.config.js');
    copy('babel.config.js');
    copy('gitignore.tpl', '.gitignore');
    copy('eslintignore.tpl', '.eslintignore');
    copy('src/**/*', 'src');
    copy('docs/**/*', 'docs');
  }

  install() {
    console.log();
    consola.info('Install dependencies...\n');

    process.chdir(this.inputs.name);

    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true,
      skipMessage: true
    });
  }

  end() {
    const { name } = this.inputs;

    console.log();
    consola.success(`Successfully created ${chalk.yellow(name)}.`);
    consola.success(
      `Run ${chalk.yellow(`cd ${name} && yarn dev`)} to start development!`
    );
  }
}
