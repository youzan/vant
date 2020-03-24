/* eslint-disable no-continue */
import { Artical, Articals } from './parser';
import { formatType, removeVersion, toKebabCase } from './utils';
import { VueTag } from './type';

function getComponentName(artical: Artical, tagPrefix: string) {
  if (artical.content) {
    return tagPrefix + toKebabCase(artical.content.split(' ')[0]);
  }
  return '';
}

export function formatter(articals: Articals, tagPrefix: string = '') {
  if (!articals.length) {
    return;
  }

  const tag: VueTag = {
    name: getComponentName(articals[0], tagPrefix),
    slots: [],
    events: [],
    attributes: [],
  };

  const tables = articals.filter(artical => artical.type === 'table');

  tables.forEach(item => {
    const { table } = item;
    const prevIndex = articals.indexOf(item) - 1;
    const prevArtical = articals[prevIndex];

    if (!prevArtical || !prevArtical.content || !table || !table.body) {
      return;
    }

    const tableTitle = prevArtical.content;

    if (tableTitle.includes('Props')) {
      table.body.forEach(line => {
        const [name, desc, type, defaultVal] = line;
        tag.attributes!.push({
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
      table.body.forEach(line => {
        const [name, desc] = line;
        tag.events!.push({
          name: removeVersion(name),
          description: desc,
        });
      });
      return;
    }

    if (tableTitle.includes('Slots')) {
      table.body.forEach(line => {
        const [name, desc] = line;
        tag.slots!.push({
          name: removeVersion(name),
          description: desc,
        });
      });
    }
  });

  return tag;
}
