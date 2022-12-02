import { decamelize } from '../../common';

export function DemoSection(props: { children: any }) {
  const demoName = decamelize('button');
  return (
    <section className={`van-doc-demo-section ${demoName}`}>
      {props.children}
    </section>
  );
}
