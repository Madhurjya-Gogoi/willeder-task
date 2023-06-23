import React from 'react';

import { StyledInputField } from './inputField.style';

type InputFieldProps = {
  sizevalue?: any;
  hasBtn?: boolean;
  btnText?: string;
  hasBtnIcon?: boolean;
  btnIcon?: any;
  showBtn?: boolean;
  isFilterMenu?: boolean;
  onBtnClick?: () => void;
  disabled?: boolean;
};
type Props = InputFieldProps & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = React.forwardRef<HTMLInputElement, Props>((props: Props, ref): JSX.Element => {
  const { color = 'primary', sizevalue = 'big', onBtnClick, ...otherProps } = props;

  return <StyledInputField sizevalue={sizevalue} color={color} ref={ref} {...otherProps} />;
});

export default InputField;
