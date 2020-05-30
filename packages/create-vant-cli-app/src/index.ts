#!/usr/bin/env node

import inquirer from 'inquirer';
import consola from 'consola';
import { ensureDir } from 'fs-extra';
import { VanGenerator } from './generator';

const PROMPTS = [
  {
    type: 'input',
    name: 'name',
    message: 'Your package name',
  },
];

export default async function run() {
  const { name } = await inquirer.prompt(PROMPTS);

  try {
    await ensureDir(name);

    const generator = new VanGenerator(name);
    generator.run();
  } catch (e) {
    consola.error(e);
  }
}

run();
