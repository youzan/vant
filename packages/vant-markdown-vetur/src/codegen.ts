/* eslint-disable no-continue */
import { Artical } from './md-parser';

const FLAG_REG = /(.*?)\s*(Props|Event)/i;

export type Tag = {
  attributes: Record<string, Attribute>;
  description: string;
  defaults?: Array<string>;
  subtags?: Array<string>;
};

export type Attribute = {
  description: string;
  type?: string;
  options?: Array<string>;
};

function camelCaseToKebabCase(input: string): string {
  return input.replace(
    /[A-Z]/g,
    (val, index) => (index === 0 ? '' : '-') + val.toLowerCase()
  );
}

function removeVersionTag(str: string) {
  return str.replace(/`(\w|\.)+`/g, '').trim();
}

function getDescription(td: string[], isProp: boolean) {
  const desc = td[1] ? td[1].replace('<br>', '') : '';
  const type = td[2] ? td[2].replace(/\*/g, '') : '';
  const defaultVal = td[3] ? td[3].replace(/`/g, '') : '';

  if (isProp) {
    return `${desc}, 默认值: ${defaultVal}, 类型: ${type}`;
  }

  return desc;
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
        attributes: {},
      };

      tags[key] = tag;

      const isProp = /Props/i.test(match[2]);

      table.body.forEach(td => {
        const name = removeVersionTag(td[0]);

        const attr: Attribute = {
          description: getDescription(td, isProp),
          type: isProp ? td[2].replace(/`/g, '').toLowerCase() : 'event',
        };

        tag.attributes[name] = attr;
      });
    }
  }

  return tags;
}
