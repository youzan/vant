import assert from 'node:assert/strict';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { replaceScriptImportExt } from '../lib/compiler/get-deps.js';

const filePath = fileURLToPath(import.meta.url);

for (const ext of ['.mjs', '.cjs']) {
  test(`preserves dotted package specifiers in ${ext} output`, () => {
    const source = [
      "import { Application } from 'pixi.js';",
      "export { helper } from '@scope/pkg/utils.js';",
      "const editor = import('editor.vue');",
      "import Button from './Button.vue';",
      "import '../setup';",
    ].join('\n');

    assert.equal(
      replaceScriptImportExt(source, filePath, ext),
      [
        "import { Application } from 'pixi.js';",
        "export { helper } from '@scope/pkg/utils.js';",
        "const editor = import('editor.vue');",
        `import Button from './Button${ext}';`,
        `import '../setup${ext}';`,
      ].join('\n'),
    );
  });
}
