import styled from 'styled-components';

export const StyledButton = styled.button`
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
`;
