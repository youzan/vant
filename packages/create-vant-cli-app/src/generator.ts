import fs from 'fs-extra';
import glob from 'fast-glob';
import color from 'picocolors';
import consola from 'consola';
import { prompt } from 'enquirer';
import { sep, join } from 'node:path';
import { CWD, GENERATOR_DIR } from './constant';

const PROMPTS = [
  {
    name: 'vueVersion',
    message: 'Select Vue version',
    type: 'select',
    choices: [
      {
        name: 'vue2',
        message: 'Vue 2',
      },
      {
        name: 'vue3',
        message: 'Vue 3',
      },
    ],
  },
  {
    name: 'preprocessor',
    message: 'Select css preprocessor',
    type: 'select',
    choices: ['Less', 'Sass'],
  },
];

export class VanGenerator {
  outputDir = '';

  inputs = {
    name: '',
    cssLang: '',
    vueVersion: '',
    preprocessor: '',
  };

  constructor(name: string) {
    this.inputs.name = name;
    this.outputDir = join(CWD, name);
  }

  async run() {
    await this.prompting();
    this.writing();
    this.end();
  }

  async prompting() {
    return prompt<Record<string, string>>(PROMPTS).then((inputs) => {
      const preprocessor = inputs.preprocessor.toLowerCase();
      const cssLang = preprocessor === 'sass' ? 'scss' : preprocessor;

      this.inputs.cssLang = cssLang;
      this.inputs.vueVersion = inputs.vueVersion;
      this.inputs.preprocessor = preprocessor;
    });
  }

  writing() {
    console.log();
    consola.info(`Creating project in ${color.green(this.outputDir)}\n`);

    // see https://github.com/mrmlnc/fast-glob#how-to-write-patterns-on-windows
    const templatePath = join(GENERATOR_DIR, this.inputs.vueVersion).replace(
      /\\/g,
      '/'
    );

    const templateFiles = glob.sync(
      join(templatePath, '**', '*').replace(/\\/g, '/'),
      {
        dot: true,
      }
    );

    templateFiles.forEach((filePath) => {
      const outputPath = filePath
        .replace('.tpl', '')
        .replace(templatePath, this.outputDir);
      this.copyTpl(filePath, outputPath, this.inputs);
    });
  }

  copyTpl(from: string, to: string, args: Record<string, any>) {
    fs.copySync(from, to);
    let content = fs.readFileSync(to, 'utf-8');

    Object.keys(args).forEach((key) => {
      const regexp = new RegExp(`<%= ${key} %>`, 'g');
      content = content.replace(regexp, args[key]);
    });

    fs.writeFileSync(to, content);

    const name = to.replace(this.outputDir + sep, '');
    consola.success(`${color.green('create')} ${name}`);
  }

  end() {
    const { name } = this.inputs;

    console.log();
    consola.success(`Successfully created ${color.yellow(name)}.`);
    consola.success(
      `Run ${color.yellow(
        `cd ${name} && git init && yarn && yarn dev`
      )} to start development!`
    );
  }
}
