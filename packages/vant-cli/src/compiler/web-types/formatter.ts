/* eslint-disable no-continue */
import { Articles } from './parser.js';
import { formatType, removeVersion, toKebabCase } from './utils.js';
import { VueEventArgument, VueTag } from './type.js';

function formatComponentName(name: string, tagPrefix: string) {
  return tagPrefix + toKebabCase(name);
}

/**
 * format arguments of events
 * input  = value: { foo: foo or 1, bar: bar or 2 }, value2: { one: 1 and 1, two: 2 and 2 }, foo: bar
 * output = [{ name: 'value', type: '{ foo: foo or 1, bar: bar or 2 }' }, { name: 'value2', type: '{ one: 1 and 1, two: 2 and 2 }'}, { name: 'foo', type: 'bar' }]
 */
function formatArguments(input: string): VueEventArgument[] {
  if (input === '-') return [];
  const args: VueEventArgument[] = [];
  const items = [];
  input = formatType(input);
  while (input.length > 0) {
    if (/(?!_)\w/.test(input[0])) {
      const val = input.match(/(\w|\s|\p{P}|\||\[|\]|>|<)+/)![0] || '';
      input = input.substring(val.length);
      items.push(val);
    } else if (input[0] === '{') {
      const val = input.match(/\{[^}]+\}/)![0] || '';
      input = input.substring(val.length);
      items.push(val);
    } else if ([':', ',', '_', ' '].includes(input[0])) {
      input = input.substring(1);
    } else {
      const matched = input.match(/( |'|\||\w)+/);

      if (matched?.length && matched[0]) {
        const val = matched[0];
        input = input.substring(val.length);
        items.push(val);
      } else {
        input = '';
      }
    }
  }

  for (let i = 0; i < items.length; i += 2) {
    args.push({
      name: items[i],
      type: items[i + 1],
    });
  }

  return args;
}

function getNameFromTableTitle(tableTitle: string, tagPrefix: string) {
  tableTitle = tableTitle.trim();
  if (tableTitle.includes(' ')) {
    return formatComponentName(tableTitle, tagPrefix).split(' ')[0];
  }
}

function findTag(vueTags: VueTag[], name: string) {
  const matched = vueTags.find((item) => item.name === name);

  if (matched) {
    return matched;
  }

  const newTag: VueTag = {
    name,
  };

  vueTags.push(newTag);

  return newTag;
}

export function formatter(
  vueTags: VueTag[],
  articles: Articles,
  tagPrefix = '',
) {
  if (!articles.length) {
    return;
  }

  const mainTitle = articles[0].content;
  const defaultName = mainTitle
    ? formatComponentName(mainTitle.split(' ')[0], tagPrefix)
    : '';
  const tables = articles.filter((article) => article.type === 'table');

  tables.forEach((item) => {
    const { table } = item;
    const prevIndex = articles.indexOf(item) - 1;
    const prevArticle = articles[prevIndex];

    if (!prevArticle || !prevArticle.content || !table || !table.body) {
      return;
    }

    const tableTitle = prevArticle.content;

    if (tableTitle.includes('Props')) {
      const name = getNameFromTableTitle(tableTitle, tagPrefix) || defaultName;
      const tag = findTag(vueTags, name);

      table.body.forEach((line) => {
        const [name, desc, type, defaultVal] = line;

        if (!tag.attributes) {
          tag.attributes = [];
        }

        tag.attributes.push({
          name: removeVersion(name),
          default: defaultVal,
          description: desc,
          value: {
            type: formatType(type),
            kind: 'expression',
          },
        });
      });
      return;
    }

    if (tableTitle.includes('Events')) {
      const name = getNameFromTableTitle(tableTitle, tagPrefix) || defaultName;
      const tag = findTag(vueTags, name);

      table.body.forEach((line) => {
        const [name, desc, args] = line;

        if (!tag.events) {
          tag.events = [];
        }

        tag.events.push({
          name: removeVersion(name),
          description: desc,
          arguments: formatArguments(args),
        });
      });
      return;
    }

    if (tableTitle.includes('Slots')) {
      const name = getNameFromTableTitle(tableTitle, tagPrefix) || defaultName;
      const tag = findTag(vueTags, name);

      table.body.forEach((line) => {
        const [name, desc] = line;

        if (!tag.slots) {
          tag.slots = [];
        }

        tag.slots.push({
          name: removeVersion(name),
          description: desc,
        });
      });
    }
  });
}
