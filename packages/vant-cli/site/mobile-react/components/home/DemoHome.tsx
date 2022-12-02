import { config } from 'site-mobile-shared';
import { DemoHomeNav } from './DemoHomeNav';

import './index.less';

export default function DemoHome(props: any) {
  const { locales } = config.site;
  let configSite = config.site;
  if (locales) {
    configSite = locales[props.lang];
  }

  return (
    <div className="demo-home">
      <h1
        className={`demo-home__title ${
          configSite.title || 'demo-home__title--small'
        }`}
      >
        <img src={configSite.logo} />
        <span>{configSite.title}</span>
      </h1>
      {configSite && (
        <h2 className="demo-home__desc">{configSite.description}</h2>
      )}
      {configSite.nav.map((group: any, index: number) => (
        <DemoHomeNav key={index} group={group} lang={props.lang} />
      ))}
    </div>
  );
}
