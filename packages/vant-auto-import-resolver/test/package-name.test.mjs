import assert from 'node:assert/strict';
import test from 'node:test';
import { VantImports, VantResolver } from '../dist/index.js';

test('resolves components, APIs and styles from the configured package', () => {
  const options = {
    packageName: '@acme/ui',
    module: 'cjs',
    importStyle: 'less',
  };
  const resolver = VantResolver(options);

  assert.deepEqual(resolver.resolve('VanActionSheet'), {
    name: 'ActionSheet',
    from: '@acme/ui/lib',
    sideEffects: '@acme/ui/lib/action-sheet/style/less',
  });
  assert.deepEqual(resolver.resolve('showToast'), {
    name: 'showToast',
    from: '@acme/ui/lib',
    sideEffects: '@acme/ui/lib/toast/style/less',
  });
  assert.ok(VantImports(options)['@acme/ui/lib'].includes('showToast'));
});

test('uses the package name for ESM and defaults to vant', () => {
  assert.deepEqual(
    VantResolver({ packageName: '@acme/ui' }).resolve('VanButton'),
    {
      name: 'Button',
      from: '@acme/ui/es',
      sideEffects: '@acme/ui/es/button/style/index',
    },
  );
  assert.equal(VantResolver().resolve('VanButton').from, 'vant/es');
  assert.ok(VantImports()['vant/es'].includes('showToast'));
});

test('keeps the ssr and importStyle options when using a custom package', () => {
  const resolver = VantResolver({
    packageName: '@acme/ui',
    ssr: true,
    module: 'esm',
    importStyle: false,
  });

  assert.deepEqual(resolver.resolve('showDialog'), {
    name: 'showDialog',
    from: '@acme/ui/lib',
    sideEffects: undefined,
  });
});
