const prefix = 'van-empty-network-';

export default {
  render() {
    const genStop = (color: string, offset: number, opacity?: number) => (
      <stop stop-color={color} offset={`${offset}%`} stop-opacity={opacity} />
    );

    return (
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id={`${prefix}1`}
            x1="64.022%"
            y1="100%"
            x2="64.022%"
            y2="0%"
          >
            {genStop('#FFF', 0, 0.5)}
            {genStop('#F2F3F5', 100)}
          </linearGradient>
          <linearGradient
            id={`${prefix}2`}
            x1="50%"
            y1="0%"
            x2="50%"
            y2="84.459%"
          >
            {genStop('#EBEDF0', 0)}
            {genStop('#DCDEE0', 100, 0)}
          </linearGradient>
          <linearGradient
            id={`${prefix}3`}
            x1="100%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            {genStop('#EAEDF0', 0)}
            {genStop('#DCDEE0', 100)}
          </linearGradient>
          <linearGradient
            id={`${prefix}4`}
            x1="100%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            {genStop('#EAEDF0', 0)}
            {genStop('#DCDEE0', 100)}
          </linearGradient>
          <linearGradient
            id={`${prefix}5`}
            x1="0%"
            y1="43.982%"
            x2="100%"
            y2="54.703%"
          >
            {genStop('#EAEDF0', 0)}
            {genStop('#DCDEE0', 100)}
          </linearGradient>
          <linearGradient
            id={`${prefix}6`}
            x1="94.535%"
            y1="43.837%"
            x2="5.465%"
            y2="54.948%"
          >
            {genStop('#EAEDF0', 0)}
            {genStop('#DCDEE0', 100)}
          </linearGradient>
          <radialGradient
            id={`${prefix}7`}
            cx="50%"
            cy="0%"
            fx="50%"
            fy="0%"
            r="100%"
            gradientTransform="matrix(0 1 -.54835 0 .5 -.5)"
          >
            {genStop('#EBEDF0', 0)}
            {genStop('#FFF', 100, 0)}
          </radialGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <g opacity=".8">
            <path
              d="M0 124V46h20v20h14v58H0z"
              fill={`url(#${prefix}1)`}
              transform="matrix(-1 0 0 1 36 7)"
            />
            <path
              d="M121 8h22.231v14H152v77.37h-31V8z"
              fill={`url(#${prefix}1)`}
              transform="translate(2 7)"
            />
          </g>
          <path fill={`url(#${prefix}7)`} d="M0 139h160v21H0z" />
          <path
            d="M37 18a7 7 0 013 13.326v26.742c0 1.23-.997 2.227-2.227 2.227h-1.546A2.227 2.227 0 0134 58.068V31.326A7 7 0 0137 18z"
            fill={`url(#${prefix}2)`}
            fill-rule="nonzero"
            transform="translate(43 36)"
          />
          <g opacity=".6" stroke-linecap="round" stroke-width="7">
            <path
              d="M20.875 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12"
              stroke={`url(#${prefix}3)`}
              transform="translate(43 36)"
            />
            <path
              d="M9.849 0C3.756 6.225 0 14.747 0 24.146c0 9.398 3.756 17.92 9.849 24.145"
              stroke={`url(#${prefix}3)`}
              transform="translate(43 36)"
            />
            <path
              d="M57.625 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12"
              stroke={`url(#${prefix}4)`}
              transform="rotate(-180 76.483 42.257)"
            />
            <path
              d="M73.216 0c-6.093 6.225-9.849 14.747-9.849 24.146 0 9.398 3.756 17.92 9.849 24.145"
              stroke={`url(#${prefix}4)`}
              transform="rotate(-180 89.791 42.146)"
            />
          </g>
          <g transform="translate(31 105)" fill-rule="nonzero">
            <rect fill={`url(#${prefix}5)`} width="98" height="34" rx="2" />
            <rect fill="#FFF" x="9" y="8" width="80" height="18" rx="1.114" />
            <rect
              fill={`url(#${prefix}6)`}
              x="15"
              y="12"
              width="18"
              height="6"
              rx="1.114"
            />
          </g>
        </g>
      </svg>
    );
  },
};
