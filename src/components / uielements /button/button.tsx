import React from 'react';

import { StyledButton } from './button.style';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

export type Props = ButtonProps;

const Button: React.FC<Props> = (props: Props): JSX.Element => {
  const { children, ...otherProps } = props;

  return <StyledButton {...otherProps}>{children}</StyledButton>;
};
export default Button;
