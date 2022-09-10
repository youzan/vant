import { defineComponent, type PropType, type ExtractPropTypes } from 'vue';
import { useId } from '../composables/use-id';
import {
  Numeric,
  getSizeStyle,
  makeStringProp,
  createNamespace,
} from '../utils';

const [name, bem] = createNamespace('empty');

export const emptyProps = {
  image: makeStringProp('default'),
  imageSize: [Number, String, Array] as PropType<Numeric | [Numeric, Numeric]>,
  description: String,
};

export type EmptyProps = ExtractPropTypes<typeof emptyProps>;

export default defineComponent({
  name,

  props: emptyProps,

  setup(props, { slots }) {
    const renderDescription = () => {
      const description = slots.description
        ? slots.description()
        : props.description;

      if (description) {
        return <p class={bem('description')}>{description}</p>;
      }
    };

    const renderBottom = () => {
      if (slots.default) {
        return <div class={bem('bottom')}>{slots.default()}</div>;
      }
    };

    const baseId = useId();
    const getId = (num: number | string) => `${baseId}-${num}`;
    const getUrlById = (num: number | string) => `url(#${getId(num)})`;

    const renderStop = (color: string, offset: number, opacity?: number) => (
      <stop stop-color={color} offset={`${offset}%`} stop-opacity={opacity} />
    );

    const renderStops = (fromColor: string, toColor: string) => [
      renderStop(fromColor, 0),
      renderStop(toColor, 100),
    ];

    const renderShadow = (id: string) => [
      <defs>
        <radialGradient
          id={getId(id)}
          cx="50%"
          cy="54%"
          fx="50%"
          fy="54%"
          r="297%"
          gradientTransform="matrix(-.16 0 0 -.33 .58 .72)"
        >
          {renderStop('#EBEDF0', 0)}
          {renderStop('#F2F3F5', 100, 0.3)}
        </radialGradient>
      </defs>,
      <ellipse
        fill={getUrlById(id)}
        opacity=".8"
        cx="80"
        cy="140"
        rx="46"
        ry="8"
      />,
    ];

    const renderBuilding = () => [
      <defs>
        <linearGradient id={getId('a')} x1="64%" y1="100%" x2="64%">
          {renderStop('#FFF', 0, 0.5)}
          {renderStop('#F2F3F5', 100)}
        </linearGradient>
      </defs>,
      <g opacity=".8">
        <path d="M36 131V53H16v20H2v58h34z" fill={getUrlById('a')} />
        <path d="M123 15h22v14h9v77h-31V15z" fill={getUrlById('a')} />
      </g>,
    ];

    const renderCloud = () => [
      <defs>
        <linearGradient id={getId('b')} x1="64%" y1="97%" x2="64%" y2="0%">
          {renderStop('#F2F3F5', 0, 0.3)}
          {renderStop('#F2F3F5', 100)}
        </linearGradient>
      </defs>,
      <g opacity=".8">
        <path
          d="M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z"
          fill={getUrlById('b')}
        />
        <path
          d="M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z"
          fill={getUrlById('b')}
        />
      </g>,
    ];

    const renderNetwork = () => (
      <svg viewBox="0 0 160 160">
        <defs>
          <linearGradient id={getId(1)} x1="64%" y1="100%" x2="64%">
            {renderStop('#FFF', 0, 0.5)}
            {renderStop('#F2F3F5', 100)}
          </linearGradient>
          <linearGradient id={getId(2)} x1="50%" x2="50%" y2="84%">
            {renderStop('#EBEDF0', 0)}
            {renderStop('#DCDEE0', 100, 0)}
          </linearGradient>
          <linearGradient id={getId(3)} x1="100%" x2="100%" y2="100%">
            {renderStops('#EAEDF0', '#DCDEE0')}
          </linearGradient>
          <radialGradient
            id={getId(4)}
            cx="50%"
            cy="0%"
            fx="50%"
            fy="0%"
            r="100%"
            gradientTransform="matrix(0 1 -.54 0 .5 -.5)"
          >
            {renderStop('#EBEDF0', 0)}
            {renderStop('#FFF', 100, 0)}
          </radialGradient>
        </defs>
        <g fill="none">
          {renderBuilding()}
          <path fill={getUrlById(4)} d="M0 139h160v21H0z" />
          <path
            d="M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z"
            fill={getUrlById(2)}
          />
          <g opacity=".6" stroke-linecap="round" stroke-width="7">
            <path
              d="M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13"
              stroke={getUrlById(3)}
            />
            <path d="M53 36a34 34 0 0 0 0 48" stroke={getUrlById(3)} />
            <path
              d="M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13"
              stroke={getUrlById(3)}
            />
            <path d="M106 84a34 34 0 0 0 0-48" stroke={getUrlById(3)} />
          </g>
          <g transform="translate(31 105)">
            <rect fill="#EBEDF0" width="98" height="34" rx="2" />
            <rect fill="#FFF" x="9" y="8" width="80" height="18" rx="1.1" />
            <rect fill="#EBEDF0" x="15" y="12" width="18" height="6" rx="1.1" />
          </g>
        </g>
      </svg>
    );

    const renderMaterial = () => (
      <svg viewBox="0 0 160 160">
        <defs>
          <linearGradient x1="50%" x2="50%" y2="100%" id={getId(5)}>
            {renderStops('#F2F3F5', '#DCDEE0')}
          </linearGradient>
          <linearGradient x1="95%" y1="48%" x2="5.5%" y2="51%" id={getId(6)}>
            {renderStops('#EAEDF1', '#DCDEE0')}
          </linearGradient>
          <linearGradient y1="45%" x2="100%" y2="54%" id={getId(7)}>
            {renderStops('#EAEDF1', '#DCDEE0')}
          </linearGradient>
        </defs>
        {renderBuilding()}
        {renderCloud()}
        <g transform="translate(36 50)" fill="none">
          <g transform="translate(8)">
            <rect
              fill="#EBEDF0"
              opacity=".6"
              x="38"
              y="13"
              width="36"
              height="53"
              rx="2"
            />
            <rect fill={getUrlById(5)} width="64" height="66" rx="2" />
            <rect fill="#FFF" x="6" y="6" width="52" height="55" rx="1" />
            <g transform="translate(15 17)" fill={getUrlById(6)}>
              <rect width="34" height="6" rx="1" />
              <path d="M0 14h34v6H0z" />
              <rect y="28" width="34" height="6" rx="1" />
            </g>
          </g>
          <rect fill={getUrlById(7)} y="61" width="88" height="28" rx="1" />
          <rect fill="#F7F8FA" x="29" y="72" width="30" height="6" rx="1" />
        </g>
      </svg>
    );

    const renderError = () => (
      <svg viewBox="0 0 160 160">
        <defs>
          <linearGradient x1="50%" x2="50%" y2="100%" id={getId(8)}>
            {renderStops('#EAEDF1', '#DCDEE0')}
          </linearGradient>
        </defs>
        {renderBuilding()}
        {renderCloud()}
        {renderShadow('c')}
        <path
          d="m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z"
          fill={getUrlById(8)}
        />
      </svg>
    );

    const renderSearch = () => (
      <svg viewBox="0 0 160 160">
        <defs>
          <linearGradient x1="50%" y1="100%" x2="50%" id={getId(9)}>
            {renderStops('#EEE', '#D8D8D8')}
          </linearGradient>
          <linearGradient x1="100%" y1="50%" y2="50%" id={getId(10)}>
            {renderStops('#F2F3F5', '#DCDEE0')}
          </linearGradient>
          <linearGradient x1="50%" x2="50%" y2="100%" id={getId(11)}>
            {renderStops('#F2F3F5', '#DCDEE0')}
          </linearGradient>
          <linearGradient x1="50%" x2="50%" y2="100%" id={getId(12)}>
            {renderStops('#FFF', '#F7F8FA')}
          </linearGradient>
        </defs>
        {renderBuilding()}
        {renderCloud()}
        {renderShadow('d')}
        <g transform="rotate(-45 113 -4)" fill="none">
          <rect
            fill={getUrlById(9)}
            x="24"
            y="52.8"
            width="5.8"
            height="19"
            rx="1"
          />
          <rect
            fill={getUrlById(10)}
            x="22.1"
            y="67.3"
            width="9.9"
            height="28"
            rx="1"
          />
          <circle
            stroke={getUrlById(11)}
            stroke-width="8"
            cx="27"
            cy="27"
            r="27"
          />
          <circle fill={getUrlById(12)} cx="27" cy="27" r="16" />
          <path
            d="M37 7c-8 0-15 5-16 12"
            stroke={getUrlById(11)}
            stroke-width="3"
            opacity=".5"
            stroke-linecap="round"
            transform="rotate(45 29 13)"
          />
        </g>
      </svg>
    );

    const renderImage = () => {
      if (slots.image) {
        return slots.image();
      }

      const PRESET_IMAGES: Record<string, () => JSX.Element> = {
        error: renderError,
        search: renderSearch,
        network: renderNetwork,
        default: renderMaterial,
      };

      return PRESET_IMAGES[props.image]?.() || <img src={props.image} />;
    };

    return () => (
      <div class={bem()}>
        <div class={bem('image')} style={getSizeStyle(props.imageSize)}>
          {renderImage()}
        </div>
        {renderDescription()}
        {renderBottom()}
      </div>
    );
  },
});
