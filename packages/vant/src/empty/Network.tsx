const prefix = 'van-empty-network-';
const renderStop = (color: string, offset: number, opacity?: number) => (
  <stop stop-color={color} offset={`${offset}%`} stop-opacity={opacity} />
);

export const Network = (
  <svg viewBox="0 0 160 160">
    <defs>
      <linearGradient id={`${prefix}1`} x1="64%" y1="100%" x2="64%">
        {renderStop('#FFF', 0, 0.5)}
        {renderStop('#F2F3F5', 100)}
      </linearGradient>
      <linearGradient id={`${prefix}2`} x1="50%" x2="50%" y2="84%">
        {renderStop('#EBEDF0', 0)}
        {renderStop('#DCDEE0', 100, 0)}
      </linearGradient>
      <linearGradient id={`${prefix}3`} x1="100%" x2="100%" y2="100%">
        {renderStop('#EAEDF0', 0)}
        {renderStop('#DCDEE0', 100)}
      </linearGradient>
      <radialGradient
        id={`${prefix}4`}
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
      <g opacity=".8">
        <path d="M36 131V53H16v20H2v58h34z" fill={`url(#${prefix}1)`} />
        <path d="M123 15h22v14h9v77h-31V15z" fill={`url(#${prefix}1)`} />
      </g>
      <path fill={`url(#${prefix}4)`} d="M0 139h160v21H0z" />
      <path
        d="M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z"
        fill={`url(#${prefix}2)`}
      />
      <g opacity=".6" stroke-linecap="round" stroke-width="7">
        <path
          d="M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13"
          stroke={`url(#${prefix}3)`}
        />
        <path d="M53 36a34 34 0 0 0 0 48" stroke={`url(#${prefix}3)`} />
        <path
          d="M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13"
          stroke={`url(#${prefix}3)`}
        />
        <path d="M106 84a34 34 0 0 0 0-48" stroke={`url(#${prefix}3)`} />
      </g>
      <g transform="translate(31 105)">
        <rect fill="#EBEDF0" width="98" height="34" rx="2" />
        <rect fill="#FFF" x="9" y="8" width="80" height="18" rx="1.1" />
        <rect fill="#EBEDF0" x="15" y="12" width="18" height="6" rx="1.1" />
      </g>
    </g>
  </svg>
);
