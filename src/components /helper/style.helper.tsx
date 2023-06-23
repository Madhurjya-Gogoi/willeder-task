import { css } from 'styled-components';


type ScreenSizes = {
  [key: string]: number;
};

// screen size for responsiveness
export const screenSizes: ScreenSizes = {
  xxs: 0,
  xs: 375,
  sm: 428,
  md: 743,
  lg: 1023,
  xl: 1280,
  xlr: 1440,
  xxl: 1680,
  vxxl: 1920,
};

type MediaQueriesType = {
  [key: string]: string;
};

const mediaQueries: MediaQueriesType = {
  xxs: `(min-width: ${screenSizes.xxs}px)`,
  xs: `(min-width: ${screenSizes.xs}px)`,
  sm: `(min-width: ${screenSizes.sm}px)`,
  md: `(min-width: ${screenSizes.md}px)`,
  lg: `(min-width: ${screenSizes.lg}px)`,
  xl: `(min-width: ${screenSizes.xl}px)`,
  xlr: `(min-width: ${screenSizes.xlr}px)`,
  xxl: `(min-width: ${screenSizes.xxl}px)`,
  vxxl: `(min-width: ${screenSizes.vxxl}px)`,
};

type FirstArg = any;
type ExtraArgs = string[];
type ArgType = [FirstArg, ...ExtraArgs];

export const media: any = Object.keys(mediaQueries).reduce((acc, segment) => {
  const styledMediaFunction = (...args: ArgType) => css`
    @media ${mediaQueries[segment]} {
      ${css(...args)};
    }
  `;
  return {
    ...acc,
    [segment]: styledMediaFunction,
  };
}, {});


