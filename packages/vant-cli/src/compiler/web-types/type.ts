import { PathLike } from 'node:fs';

export type VueSlot = {
  name: string;
  description: string;
};

export type VueEventArgument = {
  name: string;
  type: string;
};

export type VueEvent = {
  name: string;
  description?: string;
  arguments?: VueEventArgument[];
};

export type VueAttribute = {
  name: string;
  default: string;
  description: string;
  value: {
    kind: 'expression';
    type: string;
  };
};

export type VueTag = {
  name: string;
  slots?: VueSlot[];
  events?: VueEvent[];
  attributes?: VueAttribute[];
  description?: string;
};

export type Options = {
  name: string;
  path: PathLike;
  test: RegExp;
  version: string;
  outputDir?: string;
  tagPrefix?: string;
};
