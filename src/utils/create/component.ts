/**
 * Create a basic component with common options
 */

// function install(this: any, Vue: VueConstructor) {
//   const { name } = this;
//   Vue.component(name as string, this);
//   Vue.component(camelize(`-${name}`), this);
// }

export function createComponent(name: string) {
  return function (sfc: any) {
    sfc.name = name;
    // sfc.install = install;

    return sfc;
  };
}
