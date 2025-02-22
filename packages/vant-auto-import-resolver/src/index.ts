export interface VantResolverOptions {
  /**
   * Whether to automatically import the corresponding styles of the components.
   *
   * @default true
   */
  importStyle?:
    | boolean
    | 'css'
    /** Compatible with Vant 2.x / 3.x */
    | 'less';

  /**
   * Set the referenced module type.
   *
   * @default 'esm'
   */
  module?: 'esm' | 'cjs';

  /**
   * @deprecated Please use `module` option instead.
   */
  ssr?: boolean;

  /**
   * exclude components or API that do not require automatic import
   *
   * @default []
   */
  exclude?: string[];
}

export type VantImportsOptions = Pick<VantResolverOptions, 'module' | 'ssr'>;

/**
 * Button->button; ButtonGroup->button-group
 */
function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim();
  return result.split(' ').join('-').toLowerCase();
}

function getModuleType(options: VantResolverOptions): string {
  const { ssr, module = 'esm' } = options;

  // compatible with the deprecated `ssr` option
  if (ssr !== undefined) {
    return ssr ? 'lib' : 'es';
  }

  return module === 'cjs' ? 'lib' : 'es';
}

function getSideEffects(dirName: string, options: VantResolverOptions) {
  const { importStyle = true } = options;

  if (!importStyle) {
    return;
  }

  const moduleType = getModuleType(options);

  if (importStyle === 'less') return `vant/${moduleType}/${dirName}/style/less`;

  return `vant/${moduleType}/${dirName}/style/index`;
}

function getAPIMap() {
  const apiMap = new Map<string, string>();

  const api = {
    dialog: [
      'showDialog',
      'closeDialog',
      'showConfirmDialog',
      'setDialogDefaultOptions',
      'resetDialogDefaultOptions',
    ],
    imagePreview: ['showImagePreview'],
    notify: [
      'showNotify',
      'closeNotify',
      'setNotifyDefaultOptions',
      'resetNotifyDefaultOptions',
    ],
    toast: [
      'showToast',
      'closeToast',
      'showFailToast',
      'showLoadingToast',
      'showSuccessToast',
      'allowMultipleToast',
      'setToastDefaultOptions',
      'resetToastDefaultOptions',
    ],
  };

  Object.entries(api).forEach(([importName, apiList]) => {
    apiList.forEach((api) => {
      apiMap.set(api, importName);
    });
  });

  return apiMap;
}

export function VantResolver(options: VantResolverOptions = {}) {
  const moduleType = getModuleType(options);
  const apiMap = getAPIMap();

  return {
    type: 'component' as const,

    resolve: (name: string) => {
      if (name.startsWith('Van')) {
        const partialName = name.slice(3);
        if (!options.exclude?.includes(partialName)) {
          return {
            name: partialName,
            from: `vant/${moduleType}`,
            sideEffects: getSideEffects(kebabCase(partialName), options)
          };
        }
      }

      // import API
      if (apiMap.has(name) && !options.exclude?.includes(name)) {
        const partialName = apiMap.get(name)!;
          return {
            name,
            from: `vant/${moduleType}`,
            sideEffects: getSideEffects(kebabCase(partialName), options),
          };
      }
    },
  };
}

export function VantImports(options: VantImportsOptions = {}) {
  const moduleType = getModuleType(options);

  return {
    [`vant/${moduleType}`]: [...getAPIMap().keys()],
  };
}
