import { useNavigate } from 'react-router-dom';

export default function DemoNav(props: { name: string; lang: string }) {
  const navigate = useNavigate();
  const title = props.name;
  const path =
    'M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z';
  function onBack() {
    if (history.length > 1) {
      history.back();
    } else {
      const routePath = props.lang ? `/${props.lang}/` : '/';
      navigate(routePath);
    }
  }
  return (
    title && (
      <div className="demo-nav">
        <div className="demo-nav__title">{title}</div>
        <svg
          className="demo-nav__back"
          viewBox="0 0 1000 1000"
          onClick={onBack}
        >
          <path fill="#969799" fillRule="evenodd" d={path} />
        </svg>
      </div>
    )
  );
}
