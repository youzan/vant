import { join } from 'path';
import { ROOT } from '../common/constant';
import { logger } from '../common/logger';
import { createWriteStream } from 'fs-extra';
// @ts-ignore
import conventionalChangelog from 'conventional-changelog';

const file = join(ROOT, './changelog.generated.md');

const mainTemplate = `{{> header}}

{{#each commitGroups}}

{{#if title}}
**{{title}}**

{{/if}}
{{#each commits}}
{{> commit root=@root}}
{{/each}}
{{/each}}
{{> footer}}`;

const headerPartial = `### [v{{version}}]({{~@root.repoUrl}}/compare/{{previousTag}}...{{currentTag}})
\`{{date}}\``;

const commitPartial = `*{{#if scope}} {{scope}}:
{{~/if}} {{#if subject}}
  {{~subject}}
{{~else}}
  {{~header}}
{{~/if}}
{{#if references~}},
  {{~#each references}} [{{~this.repository}}#{{this.issue}}]({{~@root.repoUrl}}/{{~@root.issue}}/{{this.issue}}) {{/each}}
{{~else}}, [{{shortHash}}]({{~@root.repoUrl}}/{{~@root.commit}}/{{hash}})
{{~/if}}

`;

function formatType(type: string) {
  const MAP: Record<string, string> = {
    fix: 'Bug Fixes',
    feat: 'Feature',
    docs: 'Document',
    types: 'Types'
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
      if (ref.issue) {
        item.subject = item.subject.replace(` (#${ref.issue})`, '');
      }
    });
  }
  return item;
}

export function changelog() {
  logger.start('Generating changelog...');

  conventionalChangelog(
    {
      preset: 'angular',
      releaseCount: 2
    },
    null,
    null,
    null,
    {
      mainTemplate,
      headerPartial,
      commitPartial,
      transform
    }
  )
    .pipe(createWriteStream(file))
    .on('close', () => {
      logger.success(`Generated changelog at ${file}`);
    });
}
