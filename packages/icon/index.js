import { use } from '../utils';
import Info from '../info';
import isSrc from '../utils/validate/src';

const [sfc] = use('icon');

export default sfc(
  {
    props: {
      name: String,
      size: String,
      color: String,
      info: [String, Number],
      classPrefix: {
        type: String,
        default: 'van-icon'
      }
    },

    render(h, context) {
      const { props } = context;
      const urlIcon = isSrc(props.name);

      return (
        <i
          class={[
            props.classPrefix,
            urlIcon ? 'van-icon--image' : `${props.classPrefix}-${props.name}`
          ]}
          style={{
            color: props.color,
            fontSize: props.size
          }}
          {...context.data}
        >
          {context.children}
          {urlIcon && <img src={props.name} />}
          <Info info={props.info} />
        </i>
      );
    }
  },
  true
);
