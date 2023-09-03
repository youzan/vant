export interface VantResolverOptions {
  /**
   * import style css or less along with components
   *
   * @default true
   */
  importStyle?: boolean | 'css' | 'less';

  /**
   * use lib
   *
   * @default false
   */
  ssr?: boolean;
}

/**
 * Button->button; ButtonGroup->button-group
 */
function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim();
  return result.split(' ').join('-').toLowerCase();
}

function getModuleType(ssr: boolean): string {
  return ssr ? 'lib' : 'es';
}

function getSideEffects(dirName: string, options: VantResolverOptions) {
  const { importStyle = true, ssr = false } = options;
  if (!importStyle) return;

  const moduleType = getModuleType(ssr);

  if (importStyle === 'less') return `vant/${moduleType}/${dirName}/style/less`;

  return `vant/${moduleType}/${dirName}/style/index`;
}

export function VantResolver(options: VantResolverOptions = {}) {
  const { ssr = false } = options;

  const moduleType = getModuleType(ssr);

  return {
    type: 'component' as const,
    resolve: (name: string) => {
      if (name.startsWith('Van')) {
        const partialName = name.slice(3);
        return {
          name: partialName,
          from: `vant/${moduleType}`,
          sideEffects: getSideEffects(kebabCase(partialName), options),
        };
      }
    },
  };
}
