import { useNavigate, useRoutes, useLocation } from 'react-router-dom';
import { routesConfig } from './router';

import { getDefaultTheme } from '../common/iframe-sync';
import { config } from 'site-mobile-shared';

import './index.less';
import { Suspense, useEffect, useState } from 'react';
import { DemoSection } from './components/DemoSection';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.top &&
      window.top.postMessage(
        {
          type: 'replacePath',
          value: location.pathname,
        },
        '*'
      );
  }, [location]);
  window.addEventListener('message', (event) => {
    if (event.data?.type !== 'replacePath') {
      return;
    }

    const path = event.data?.value || '';
    // should preserve hash for anchor
    if (path !== location.pathname) {
      navigate(path);
    }
  });
  const [theme, setTheme] = useState(getDefaultTheme());
  window.addEventListener('message', (event) => {
    if (event.data?.type !== 'updateTheme') {
      return;
    }

    const newTheme = event.data?.value || '';
    setTheme(newTheme);
  });
  useEffect(() => {
    document.documentElement.classList.remove(
      `van-doc-theme-${theme === 'dark' ? 'light' : 'dark'}`
    );
    document.documentElement.classList.add(`van-doc-theme-${theme}`);

    const { darkModeClass, lightModeClass } = config.site;
    if (darkModeClass) {
      document.documentElement.classList.toggle(
        darkModeClass,
        theme === 'dark'
      );
    }
    if (lightModeClass) {
      document.documentElement.classList.toggle(
        lightModeClass,
        theme === 'light'
      );
    }
  }, [theme]);

  const RouterEl = useRoutes(routesConfig);
  return (
    <>
      <DemoSection>
        <Suspense fallback={<h2>Loading</h2>}>{RouterEl}</Suspense>
      </DemoSection>
    </>
  );
}

export default App;
