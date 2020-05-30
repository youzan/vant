import { PathLike } from 'fs';

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

export type VeturTag = {
  description?: string;
  attributes: string[];
};

export type VeturTags = Record<string, VeturTag>;

export type VeturAttribute = {
  type: string;
  description: string;
};

export type VeturAttributes = Record<string, VeturAttribute>;

export type VeturResult = {
  tags: VeturTags;
  attributes: VeturAttributes;
};

export type Options = {
  name: string;
  path: PathLike;
  test: RegExp;
  version: string;
  outputDir?: string;
  tagPrefix?: string;
};
