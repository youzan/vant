#!/usr/bin/env node

import consola from 'consola';
import { prompt } from 'inquirer';
import { ensureDir } from 'fs-extra';
import { VanGenerator } from './generator';

const PROMPTS = [
  {
    type: 'input',
    name: 'name',
    message: 'Your package name',
  },
];

async function run() {
  const { name } = await prompt(PROMPTS);

  try {
    await ensureDir(name);
    const generator = new VanGenerator(name);
    await generator.run();
  } catch (e) {
    consola.error(e);
  }
}

run();
