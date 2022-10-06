import { css } from 'styled-components';

export const boxSize = (width = '1rem', height = width) => css`
  width: ${width};
  height: ${height};
`;

export const flexBox = (
  justify = 'flex-start',
  align = 'flex-start',
  direct = 'row',
  wrap = 'nowrap'
) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direct};
  flex-wrap: ${wrap};
`;

export const flexCenter = (pos: 'cen' | 'hor' | 'ver' = 'cen') => css`
  display: flex;

  ${pos === 'cen' &&
  css`
    align-items: center;
    justify-content: center;
  `}
  ${pos === 'ver' &&
  css`
    align-items: center;
  `}
  ${pos === 'hor' &&
  css`
    justify-content: center;
  `}
`;
