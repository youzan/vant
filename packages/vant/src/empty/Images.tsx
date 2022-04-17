const getId = (num: number | string) => `van-empty-${num}`;
const useId = (num: number | string) => `url(#${getId(num)})`;

const renderStop = (color: string, offset: number, opacity?: number) => (
  <stop stop-color={color} offset={`${offset}%`} stop-opacity={opacity} />
);

const renderBuildingDef = () => (
  <linearGradient id={getId('a')} x1="64%" y1="100%" x2="64%">
    {renderStop('#FFF', 0, 0.5)}
    {renderStop('#F2F3F5', 100)}
  </linearGradient>
);

const renderCloudDef = () => (
  <linearGradient id={getId('b')} x1="64%" y1="97%" x2="64%" y2="0%">
    {renderStop('#F2F3F5', 0, 0.3)}
    {renderStop('#F2F3F5', 100)}
  </linearGradient>
);

const renderBuilding = () => (
  <g opacity=".8">
    <path d="M36 131V53H16v20H2v58h34z" fill={useId('a')} />
    <path d="M123 15h22v14h9v77h-31V15z" fill={useId('a')} />
  </g>
);

const renderCloud = () => (
  <g opacity=".8">
    <path
      d="M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z"
      fill={useId('b')}
    />
    <path
      d="M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z"
      fill={useId('b')}
    />
  </g>
);

export const renderNetwork = () => (
  <svg viewBox="0 0 160 160">
    <defs>
      {renderBuildingDef()}
      <linearGradient id={getId(1)} x1="64%" y1="100%" x2="64%">
        {renderStop('#FFF', 0, 0.5)}
        {renderStop('#F2F3F5', 100)}
      </linearGradient>
      <linearGradient id={getId(2)} x1="50%" x2="50%" y2="84%">
        {renderStop('#EBEDF0', 0)}
        {renderStop('#DCDEE0', 100, 0)}
      </linearGradient>
      <linearGradient id={getId(3)} x1="100%" x2="100%" y2="100%">
        {renderStop('#EAEDF0', 0)}
        {renderStop('#DCDEE0', 100)}
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
      <path fill={useId(4)} d="M0 139h160v21H0z" />
      <path
        d="M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z"
        fill={useId(2)}
      />
      <g opacity=".6" stroke-linecap="round" stroke-width="7">
        <path d="M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13" stroke={useId(3)} />
        <path d="M53 36a34 34 0 0 0 0 48" stroke={useId(3)} />
        <path d="M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13" stroke={useId(3)} />
        <path d="M106 84a34 34 0 0 0 0-48" stroke={useId(3)} />
      </g>
      <g transform="translate(31 105)">
        <rect fill="#EBEDF0" width="98" height="34" rx="2" />
        <rect fill="#FFF" x="9" y="8" width="80" height="18" rx="1.1" />
        <rect fill="#EBEDF0" x="15" y="12" width="18" height="6" rx="1.1" />
      </g>
    </g>
  </svg>
);

export const renderMaterial = () => (
  <svg viewBox="0 0 160 160">
    <defs>
      {renderBuildingDef()}
      {renderCloudDef()}
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={getId(5)}>
        {renderStop('#F2F3F5', 0)}
        {renderStop('#DCDEE0', 100)}
      </linearGradient>
      <linearGradient x1="95%" y1="48%" x2="5.5%" y2="51%" id={getId(6)}>
        {renderStop('#EAEDF1', 0)}
        {renderStop('#DCDEE0', 100)}
      </linearGradient>
      <linearGradient x1="0%" y1="45%" x2="100%" y2="54%" id={getId(7)}>
        {renderStop('#EAEDF1', 0)}
        {renderStop('#DCDEE0', 100)}
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
        <rect fill={useId(5)} width="64" height="66" rx="2" />
        <rect fill="#FFF" x="6" y="6" width="52" height="55" rx="1" />
        <g transform="translate(15 17)" fill={useId(6)}>
          <rect width="34" height="6" rx="1" />
          <path d="M0 14h34v6H0z" />
          <rect y="28" width="34" height="6" rx="1" />
        </g>
      </g>
      <rect fill={useId(7)} y="61" width="88" height="28" rx="1" />
      <rect fill="#F7F8FA" x="29" y="72" width="30" height="6" rx="1" />
    </g>
  </svg>
);
