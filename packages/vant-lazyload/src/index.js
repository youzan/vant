import Lazy from './lazy';
import LazyComponent from './lazy-component';
import LazyContainer from './lazy-container';
import LazyImage from './lazy-image';

export const Lazyload = {
  /*
   * install function
   * @param  {App} app
   * @param  {object} options lazyload options
   */
  install(app, options = {}) {
    const LazyClass = Lazy();
    const lazy = new LazyClass(options);
    const lazyContainer = new LazyContainer({ lazy });

    app.config.globalProperties.$Lazyload = lazy;

    if (options.lazyComponent) {
      app.component('LazyComponent', LazyComponent(lazy));
    }

    if (options.lazyImage) {
      app.component('LazyImage', LazyImage(lazy));
    }

    app.directive('lazy', {
      beforeMount: lazy.add.bind(lazy),
      updated: lazy.update.bind(lazy),
      unmounted: lazy.remove.bind(lazy),
    });

    app.directive('lazy-container', {
      beforeMount: lazyContainer.bind.bind(lazyContainer),
      updated: lazyContainer.update.bind(lazyContainer),
      unmounted: lazyContainer.unbind.bind(lazyContainer),
    });
  },
};
