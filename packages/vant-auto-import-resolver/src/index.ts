export interface VantResolverOptions {
  /**
   * Package to import components, APIs and styles from.
   *
   * @default 'vant'
   */
  packageName?: string;

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

export type VantImportsOptions = Pick<
  VantResolverOptions,
  'packageName' | 'module' | 'ssr'
>;

/**
 * Button->button; ButtonGroup->button-group
 */
function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim();
  return result.split(' ').join('-').toLowerCase();
}

function getModulePath({
  packageName = 'vant',
  module,
  ssr,
}: VantImportsOptions) {
  // The deprecated ssr option takes precedence over module.
  const commonJS = ssr ?? module === 'cjs';
  return `${packageName}/${commonJS ? 'lib' : 'es'}`;
}

function getSideEffects(dirName: string, options: VantResolverOptions) {
  const { importStyle = true } = options;

  if (!importStyle) {
    return;
  }

  const from = getModulePath(options);

  if (importStyle === 'less') return `${from}/${dirName}/style/less`;

  return `${from}/${dirName}/style/index`;
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
  const from = getModulePath(options);
  const apiMap = getAPIMap();

  return {
    type: 'component' as const,

    resolve: (name: string) => {
      if (name.startsWith('Van')) {
        const partialName = name.slice(3);
        if (!options.exclude?.includes(partialName)) {
          return {
            name: partialName,
            from,
            sideEffects: getSideEffects(kebabCase(partialName), options),
          };
        }
      }

      // import API
      if (apiMap.has(name) && !options.exclude?.includes(name)) {
        const partialName = apiMap.get(name)!;
        return {
          name,
          from,
          sideEffects: getSideEffects(kebabCase(partialName), options),
        };
      }
    },
  };
}

export function VantImports(options: VantImportsOptions = {}) {
  const from = getModulePath(options);

  return {
    [from]: [...getAPIMap().keys()],
  };
}
