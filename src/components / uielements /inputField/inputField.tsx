import React from 'react';

import { StyledInputField } from './inputField.style';

type InputFieldProps = {
  sizevalue?: any;
  isFilterMenu?: boolean;
  onBtnClick?: () => void;
  disabled?: boolean;
  isError?: boolean;
};
type Props = InputFieldProps & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = React.forwardRef<HTMLInputElement, Props>((props: Props, ref): JSX.Element => {
  const { color = 'primary', sizevalue = 'big', onBtnClick, ...otherProps } = props;

  return <StyledInputField sizevalue={sizevalue} color={color} ref={ref} {...otherProps} />;
});

export default InputField;
