export interface IFluentProps {
  size?: number;
  color?: IconColorScheme | string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export enum IconColorScheme {
  primaryText = "#334155",
  secondaryText = "#94a3b8",
  primary = "#5f5af7",
  secondary = "#deddf1",
  error = "#ff2c56",
  background = "#ffffff",
  divider = "#b5c2d1"
}

export function ArrowRightAltIcon({
  size = 24,
  color = 'black',
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size+`px`}
      height={size+`px`}
      viewBox={`0 96 960 960`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      className={className}
    >
      <path
      d='m558.739 827.566-56.566-55.001 159.521-158.956H148.13v-79.218h513.564L501.173 373.87l56.566-54.436L812.87 574 558.739 827.566Z'
      fill={color}
      />
    </svg>
  );
}

export function FaceInsideFaceIcon({
  size = 24,
  color = 'black',
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size+`px`}
      height={size+`px`}
      viewBox={`0 0 256 256`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      className={className}
    >
      <path
      d='M1219 2259 c-35 -13 -56 -61 -43 -97 9 -25 14 -27 64 -27 l55 0 9 48
      c15 75 -16 102 -85 76z'
      fill={color}
      />
      <path
      d='M1580 2254 c-15 -17 -17 -55 -6 -97 6 -25 10 -27 61 -27 51 0 56 2
      66 26 13 37 -5 88 -37 103 -35 15 -69 14 -84 -5z'
      fill={color}
      />
      <path
      d='M1377 1628 c-21 -7 -30 -20 -39 -53 -8 -30 -18 -45 -32 -49 -12 -3
      -176 -6 -366 -6 -399 -2 -429 -5 -447 -40 -10 -19 -12 -122 -11 -460 3 -498
      -3 -466 98 -517 l55 -28 225 5 c202 4 228 7 258 25 60 36 76 75 77 188 l0 100
      -45 15 c-191 63 -249 266 -112 394 43 41 135 88 148 76 2 -3 7 -58 11 -122 5
      -102 8 -116 24 -116 30 0 104 37 143 70 62 55 68 76 74 252 l5 158 98 0 c90 0
      99 2 99 19 0 27 -39 71 -76 87 -38 16 -146 17 -187 2z'
      fill={color}
      />
      <path
      d='M1625 1336 c-23 -17 -23 -81 1 -107 21 -23 71 -25 102 -3 28 20 31
      83 4 107 -22 20 -81 22 -107 3z'
      fill={color}
      />
      <path
      d='M2020 1323 c-15 -19 -19 -35 -15 -53 22 -88 145 -83 145 7 0 70 -86
      101 -130 46z'
      fill={color}
      />
      <path
      d='M1760 667 c0 -8 10 -29 23 -48 18 -27 34 -37 77 -48 82 -21 141 -9
      185 37 61 62 52 67 -128 70 -128 2 -157 0 -157 -11z'
      fill={color}
      />
    </svg>
  );
}

