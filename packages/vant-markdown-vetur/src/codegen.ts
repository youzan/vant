/* eslint-disable no-continue */
import { Artical } from './md-parser';

const FLAG_REG = /(.*?)\s*(Props|Event)/i;

export type Tag = {
  attributes: Record<string, Attribute>;
  description: string;
  defaults?: Array<string>;
  subtags?: Array<string>;
}

export type Attribute = {
  description: string;
  type?: string;
  options?: Array<string>;
}

function camelCaseToKebabCase(input: string): string {
  return input.replace(
    /[A-Z]/g,
    (val, index) => (index === 0 ? '' : '-') + val.toLowerCase()
  );
}

export function codegen(artical: Artical) {
  const tags: Record<string, Tag> = {};
  let tagDescription = '';

  for (let i = 0, len = artical.length; i < len; i++) {
    const item = artical[i];
    if (item.type === 'title' && item.level === 2) {
      if (item.content) {
        tagDescription = item.content;
      }
    } else if (item.type === 'table') {
      const before = artical[i - 1];
      if (!before || !before.content) {
        continue;
      }

      const { table } = item;
      const match = FLAG_REG.exec(before.content);

      if (!match || !table) {
        continue;
      }

      const key = camelCaseToKebabCase(match[1] || 'default');
      const tag: Tag = tags[key] || {
        description: tagDescription,
        attributes: {}
      };

      tags[key] = tag;

      const isProp = /Props/i.test(match[2]);

      table.body.forEach(td => {
        const attrName = td[0];

        const attr: Attribute = {
          description: `${td[1]}, ${
            isProp ? 'default: ' + td[3].replace(/`/g, '') : 'params: ' + td[2]
          }`,
          type: isProp ? td[2].replace(/`/g, '').toLowerCase() : 'event'
        };

        tag.attributes[attrName] = attr;
      });
    }
  }

  return tags;
}
