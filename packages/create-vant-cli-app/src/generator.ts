import glob from 'fast-glob';
import chalk from 'chalk';
import consola from 'consola';
import { join } from 'path';
import { CWD, GENERATOR_DIR } from './constant';
import Yeoman from 'yeoman-environment';
import Generator from 'yeoman-generator';

const TEMPLATES_PATH = join(GENERATOR_DIR, 'templates');
const PROMPTS = [
  {
    name: 'preprocessor',
    message: 'Select css preprocessor',
    type: 'list',
    choices: ['Less', 'Sass'],
  },
];

export class VanGenerator extends Generator {
  inputs = {
    name: '',
    cssLang: '',
    preprocessor: '',
  };

  constructor(name: string) {
    super([], {
      env: Yeoman.createEnv([], {
        cwd: join(CWD, name),
      }),
      resolved: GENERATOR_DIR,
    });

    this.inputs.name = name;
  }

  async prompting() {
    return this.prompt<Record<string, string>>(PROMPTS).then((inputs) => {
      const preprocessor = inputs.preprocessor.toLowerCase();
      const cssLang = preprocessor === 'sass' ? 'scss' : preprocessor;

      this.inputs.cssLang = cssLang;
      this.inputs.preprocessor = preprocessor;
    });
  }

  writing() {
    consola.info(`Creating project in ${join(CWD, this.inputs.name)}\n`);

    const templateFiles = glob.sync(join(TEMPLATES_PATH, '**', '*'), {
      dot: true,
    });
    const destinationRoot = this.destinationRoot();

    console.log(templateFiles);

    templateFiles.forEach((filePath) => {
      const outputPath = filePath
        .replace('.tpl', '')
        .replace(TEMPLATES_PATH, destinationRoot);
      this.fs.copyTpl(filePath, outputPath, this.inputs);
    });
  }

  install() {
    console.log();
    consola.info('Install dependencies...\n');

    process.chdir(this.inputs.name);

    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true,
      skipMessage: true,
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
