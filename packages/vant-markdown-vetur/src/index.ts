import { join } from 'path';
import { mdParser } from './md-parser';
import { codegen, Tag, Attribute } from './codegen';
import {
  PathLike,
  statSync,
  mkdirSync,
  existsSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'fs';

export function parseText(input: string) {
  const ast = mdParser(input);

  return codegen(ast);
}

export type Options = {
  // 需要解析的文件夹路径
  path: PathLike;
  // 文件匹配正则
  test: RegExp;
  // 输出目录
  outputDir?: string;
  // 递归的目录最大深度
  maxDeep?: number;
  // 解析出来的组件名前缀
  tagPrefix?: string;
};

export type ParseResult = {
  tags: Record<
    string,
    {
      description: string;
      attributes: string[];
    }
  >;
  attributes: Record<string, Attribute>;
};

const defaultOptions = {
  maxDeep: Infinity,
  tagPrefix: '',
};

export function parse(options: Options) {
  options = {
    ...defaultOptions,
    ...options,
  };

  const result: ParseResult = {
    tags: {},
    attributes: {},
  };

  function putResult(componentName: string, component: Tag) {
    componentName = options.tagPrefix + componentName;
    const attributes = Object.keys(component.attributes);
    const tag = {
      description: component.description,
      attributes,
    };

    result.tags[componentName] = tag;
    attributes.forEach(key => {
      result.attributes[`${componentName}/${key}`] = component.attributes[key];
    });
  }

  function recursiveParse(options: Options, deep: number) {
    if (options.maxDeep && deep > options.maxDeep) {
      return;
    }

    deep++;
    const files = readdirSync(options.path);
    files.forEach(item => {
      const currentPath = join(options.path.toString(), item);
      const stats = statSync(currentPath);
      if (stats.isDirectory()) {
        recursiveParse(
          {
            ...options,
            path: currentPath,
          },
          deep
        );
      } else if (stats.isFile() && options.test.test(item)) {
        const file = readFileSync(currentPath);

        const tags = parseText(file.toString());

        if (tags.default) {
          // one tag
          putResult(currentPath.split('/').slice(-2)[0], tags.default);
        } else {
          Object.keys(tags).forEach(key => {
            putResult(key, tags[key]);
          });
        }
      }
    });
  }

  recursiveParse(options, 0);

  return result;
}

export function parseAndWrite(options: Options) {
  const { tags, attributes } = parse(options);

  if (!options.outputDir) {
    return;
  }

  const isExist = existsSync(options.outputDir);
  if (!isExist) {
    mkdirSync(options.outputDir);
  }

  writeFileSync(
    join(options.outputDir, 'tags.json'),
    JSON.stringify(tags, null, 2)
  );
  writeFileSync(
    join(options.outputDir, 'attributes.json'),
    JSON.stringify(attributes, null, 2)
  );
}

export default {
  parse,
  parseText,
  parseAndWrite,
};
