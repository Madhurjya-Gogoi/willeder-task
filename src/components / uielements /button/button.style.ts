import styled, { css } from 'styled-components';

type IStyledButton = {
  disabled?: boolean;
};
export const StyledButton = styled.button<IStyledButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0.5px;
  transition: opacity 0.3s;
  background-color: #246bb4;
  color: #fff;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  font-family: 'Gudea', sans-serif;
  &.focused,
  &:hover {
    color: #ffffff;
    cursor: pointer;
    border-color: #0071e3;
    background: #0071e3;
  }
  ${(props) =>
    props.disabled &&
    css`
      background: #a5cdf5 !important;
      border: none !important;
    `}
`;
