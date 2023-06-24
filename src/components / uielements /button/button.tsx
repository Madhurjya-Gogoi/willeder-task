import React from 'react';

import { StyledButton } from './button.style';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  disabled?: boolean;
};

export type Props = ButtonProps;

const Button: React.FC<Props> = (props: Props): JSX.Element => {
  const { children, disabled = false, ...otherProps } = props;

  return (
    <StyledButton {...otherProps} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
export default Button;
