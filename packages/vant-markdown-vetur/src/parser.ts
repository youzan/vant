/* eslint-disable no-cond-assign */
const TITLE_REG = /^(#+)\s+([^\n]*)/;
const TABLE_REG = /^\|.+\r?\n\|\s*-+/;
const TD_REG = /\s*`[^`]+`\s*|([^|`]+)/g;
const TABLE_SPLIT_LINE_REG = /^\|\s*-/;

type TableContent = {
  head: string[];
  body: string[][];
};

export type Artical = {
  type: string;
  content?: string;
  table?: TableContent;
  level?: number;
};

export type Articals = Artical[];

function readLine(input: string) {
  const end = input.indexOf('\n');

  return input.substr(0, end !== -1 ? end : input.length);
}

function splitTableLine(line: string) {
  line = line.replace('\\|', 'JOIN');

  const items = line.split('|').map((item) => item.trim().replace('JOIN', '|'));

  // remove pipe character on both sides
  items.pop();
  items.shift();

  return items;
}

function tableParse(input: string) {
  let start = 0;
  let isHead = true;

  const end = input.length;
  const table: TableContent = {
    head: [],
    body: [],
  };

  while (start < end) {
    const target = input.substr(start);
    const line = readLine(target);

    if (!/^\|/.test(target)) {
      break;
    }

    if (TABLE_SPLIT_LINE_REG.test(target)) {
      isHead = false;
    } else if (!isHead && line.includes('|')) {
      const matched = line.trim().match(TD_REG);

      if (matched) {
        table.body.push(splitTableLine(line));
      }
    }

    start += line.length + 1;
  }

  return {
    table,
    usedLength: start,
  };
}

export function mdParser(input: string): Articals {
  const artical = [];
  let start = 0;
  const end = input.length;

  while (start < end) {
    const target = input.substr(start);

    let match;
    if ((match = TITLE_REG.exec(target))) {
      artical.push({
        type: 'title',
        content: match[2],
        level: match[1].length,
      });

      start += match.index + match[0].length;
    } else if ((match = TABLE_REG.exec(target))) {
      const { table, usedLength } = tableParse(target.substr(match.index));
      artical.push({
        type: 'table',
        table,
      });

      start += match.index + usedLength;
    } else {
      start += readLine(target).length + 1;
    }
  }

  return artical;
}
