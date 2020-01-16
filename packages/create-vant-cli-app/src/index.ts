import inquirer from 'inquirer';
import { mkdirSync, existsSync } from 'fs-extra';
import { VanGenerator } from './generator';

const PROMPTS = [
  {
    type: 'input',
    name: 'name',
    message: 'Your package name'
  }
];

export default async function run() {
  const { name } = await inquirer.prompt(PROMPTS);

  if (!existsSync(name)) {
    mkdirSync(name);
  }

  const generator = new VanGenerator(name);

  return new Promise(resolve => {
    generator.run(resolve);
  });
}

run();
