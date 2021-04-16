/* eslint-disable no-continue */
import { Articals } from './parser';
import { formatOptions, formatType, removeVersion, toKebabCase } from './utils';
import { VueTag } from './type';

function formatComponentName(name: string, tagPrefix: string) {
  return tagPrefix + toKebabCase(name);
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
    slots: [],
    events: [],
    attributes: [],
  };

  vueTags.push(newTag);

  return newTag;
}

export function formatter(
  vueTags: VueTag[],
  articals: Articals,
  tagPrefix = ''
) {
  if (!articals.length) {
    return;
  }

  const mainTitle = articals[0].content;
  const defaultName = mainTitle
    ? formatComponentName(mainTitle.split(' ')[0], tagPrefix)
    : '';
  const tables = articals.filter((artical) => artical.type === 'table');

  tables.forEach((item) => {
    const { table } = item;
    const prevIndex = articals.indexOf(item) - 1;
    const prevArtical = articals[prevIndex];

    if (!prevArtical || !prevArtical.content || !table || !table.body) {
      return;
    }

    const tableTitle = prevArtical.content;

    if (tableTitle.includes('Props')) {
      const name = getNameFromTableTitle(tableTitle, tagPrefix) || defaultName;
      const tag = findTag(vueTags, name);

      table.body.forEach((line) => {
        const [name, desc, type, defaultVal, options] = line;
        tag.attributes!.push({
          name: removeVersion(name),
          default: defaultVal,
          description: desc,
          options: formatOptions(options),
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
        const [name, desc] = line;
        tag.events!.push({
          name: removeVersion(name),
          description: desc,
        });
      });
      return;
    }

    if (tableTitle.includes('Slots')) {
      const name = getNameFromTableTitle(tableTitle, tagPrefix) || defaultName;
      const tag = findTag(vueTags, name);

      table.body.forEach((line) => {
        const [name, desc] = line;
        tag.slots!.push({
          name: removeVersion(name),
          description: desc,
        });
      });
    }
  });
}
