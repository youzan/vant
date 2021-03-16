const { ESLint } = require('eslint');
const path = require('path');

const eslint = new ESLint();

async function lintProject(name) {
  const projectPath = path.resolve(__dirname, name);
  const filesToLint = path.resolve(projectPath, '**');
  const rest = await eslint.lintFiles(filesToLint);
  const ruleId = [];
  rest.forEach((res) =>
    res.messages.forEach((msg) => {
      if (ruleId.indexOf(msg.ruleId) < 0) {
        ruleId.push(msg.ruleId);
      }
    })
  );
  return ruleId;
}

test('a vue project should pass lint', async () => {
  const rest = await lintProject('vue');
  expect([
    'no-const-assign',
    '@typescript-eslint/no-unused-vars',
    'no-undef',
  ]).toEqual(rest);
});

test('a vue-tsx project should pass lint', async () => {
  const rest = await lintProject('vue-tsx');

  expect([
    '@typescript-eslint/no-unused-vars',
    'vue/no-ref-as-operand',
    '@typescript-eslint/no-empty-interface',
  ]).toEqual(rest);
});
