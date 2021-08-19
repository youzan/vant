import { join } from 'path';
import { ROOT } from '../common/constant';
import { ora, slimPath } from '../common/logger';
import { createWriteStream, readFileSync } from 'fs-extra';
import conventionalChangelog from 'conventional-changelog';

const DIST_FILE = join(ROOT, './changelog.generated.md');
const MAIN_TEMPLATE = join(__dirname, '../../template/changelog-main.hbs');
const HEADER_TEMPLATE = join(__dirname, '../../template/changelog-header.hbs');
const COMMIT_TEMPLATE = join(__dirname, '../../template/changelog-commit.hbs');

const mainTemplate = readFileSync(MAIN_TEMPLATE, 'utf-8');
const headerPartial = readFileSync(HEADER_TEMPLATE, 'utf-8');
const commitPartial = readFileSync(COMMIT_TEMPLATE, 'utf-8');

function formatType(type: string) {
  const MAP: Record<string, string> = {
    fix: 'Bug Fixes',
    feat: 'Feature',
    docs: 'Document',
    types: 'Types',
  };

  return MAP[type] || type;
}

function transform(item: any) {
  if (item.type === 'chore' || item.type === 'test') {
    return null;
  }

  item.type = formatType(item.type);

  if (item.hash) {
    item.shortHash = item.hash.slice(0, 6);
  }

  if (item.references.length) {
    item.references.forEach((ref: any) => {
      if (ref.issue && item.subject) {
        item.subject = item.subject.replace(` (#${ref.issue})`, '');
      }
    });
  }
  return item;
}

export async function changelog(): Promise<void> {
  const spinner = ora('Generating changelog...').start();

  return new Promise((resolve) => {
    conventionalChangelog(
      {
        preset: 'angular',
        releaseCount: 2,
      },
      null,
      null,
      null,
      {
        mainTemplate,
        headerPartial,
        commitPartial,
        transform,
      }
    )
      .pipe(createWriteStream(DIST_FILE))
      .on('close', () => {
        spinner.succeed(`Changelog generated at ${slimPath(DIST_FILE)}`);
        resolve();
      });
  });
}
