import { Link } from 'react-router-dom';

function ArrowRight() {
  return (
    <svg className="demo-home-nav__icon" viewBox="0 0 1024 1024">
      <path
        fill="#B6C3D2"
        d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"
      />
      <path
        fill="#B6C3D2"
        d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"
      />
    </svg>
  );
}

export function DemoHomeNav(props: { group: any; lang: string }) {
  const base = props.lang ? `/${props.lang}` : '';
  return (
    <div className="demo-home-nav">
      <div className="demo-home-nav__title">{props.group.title}</div>
      <div className="demo-home-nav__group">
        {props.group.items.map((navItem: any) => (
          <Link
            to={`${base}/${navItem.path}`}
            className="demo-home-nav__block"
            key={navItem.title}
          >
            {navItem.title}
            <ArrowRight />
          </Link>
        ))}
      </div>
    </div>
  );
}
