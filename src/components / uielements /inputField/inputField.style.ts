import styled, { css } from 'styled-components';

import { media } from '../../helper';

const fontSettings: any = {
  small: {
    size: '9px',
    spacing: '0.3px',
  },
  normal: {
    size: '10px',
    spacing: '0.3px',
  },
  big: {
    size: '16px',
    spacing: '0px',
  },
};

const xlrFontSettings: any = {
  small: {
    size: '12px',
    spacing: '0.3px',
  },
  normal: {
    size: '14px',
    spacing: '0.42px',
  },
  big: {
    size: '16px',
    spacing: '0px',
  },
};

const xxlFontSettings: any = {
  small: {
    size: '11px',
    spacing: '0.3px',
  },
  normal: {
    size: '16px',
    spacing: '0.42px',
  },
  big: {
    size: '16px',
    spacing: '0px',
  },
};

const vxxlFontSettings: any = {
  small: {
    size: '14px',
    spacing: '0.3px',
  },
  normal: {
    size: '16px',
    spacing: '0.42px',
  },
  big: {
    size: '16px',
    spacing: '0px',
  },
};

const sizes: any = {
  small: '30px',
  normal: '40px',
  big: '40px',
};

const xlrSizes: any = {
  small: '40px',
  normal: '40px',
  big: '40px',
};

const xxlSizes: any = {
  small: '40px',
  normal: '50px',
  big: '60px',
};

const vxxlSizes: any = {
  small: '40px',
  normal: '50px',
  big: '60px',
};

type Props = {
  sizevalue: string;
  disabled?: boolean;
};
export const StyledInputField = styled.input<Props>`
  outline: none;
  box-sizing: border-box;
  font-family: 'Gudea', sans-serif;
  padding: 11px 10px;
  border-radius: 5px;
  height: ${(props: Props) => sizes[props.sizevalue]};
  ${(props: Props) =>
    css`
      height: ${sizes[props.sizevalue]};
      font-size: ${fontSettings[props.sizevalue].size};
      letter-spacing: ${fontSettings[props.sizevalue].spacing};
    `}

  ${(props: Props) => media.sm`
    height: ${sizes[props.sizevalue]};
    padding: 11px 10px;
  `}

  ${(props: Props) => media.xlr`
  height: ${xlrSizes[props.sizevalue]};
  font-size: ${xlrFontSettings[props.sizevalue].size};
  letter-spacing: ${xlrFontSettings[props.sizevalue].spacing};
  padding: 11px 10px;
  `}

  ${(props: Props) => media.xxl`
  height: ${xxlSizes[props.sizevalue]};
  font-size: ${xxlFontSettings[props.sizevalue].size};
  letter-spacing: ${xxlFontSettings[props.sizevalue].spacing};
  padding:  '30px'  '40px';
  `}

  ${(props: Props) => media.vxxl`
  height: ${vxxlSizes[props.sizevalue]};
  font-size: ${vxxlFontSettings[props.sizevalue].size};
  letter-spacing: ${vxxlFontSettings[props.sizevalue].spacing};
  padding: 30px 40px;
  `}
  
  width: 100%;

  border: 0.5px solid #0171e2;
  background: #ffffff;
  color: black;

  &:hover,
  &:focus {
    border-color: #0171e2;
    box-shadow: rgba(0, 113, 227, 0.15) 0px 0px 30px;
  }

  &::placeholder {
    font-size: ${fontSettings['big'].size};
    color: #a9a9a9;
    opacity: 0.35;
  }
`;
