import styled from 'styled-components';
import { View } from '../ uielements /view';
import { Button } from '../ uielements ';
import { media } from '../helper';

export const LoginContaner = styled(View)`
  display: grid;
  justify-content: center;
  background: red;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Form = styled.div`
  overflow-y: inherit;
  width: auto;
  max-width: 700px;
  padding: 20px 20px 100px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 30px #0071e329;
  border: 1px solid #2485e6;
  opacity: 1;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
`;
export const FormLabel = styled.p`
  font-weight: bold;
  font-size: 20px;
  font-family: 'Gudea', sans-serif;
`;

export const FormGroup = styled.div`
  display: grid;
  gap: 5px;
  line-height: 0%;
`;
export const Title = styled.p`
  font-family: 'Gudea', sans-serif;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  > span {
    color: #ff453a;
  }
`;
export const LoginButton = styled(Button)`
  position: absolute;
  bottom: 0px;
  left: 0;
  border-radius: 0px !important;
  font-size: 16px;
  font-family: 'Gudea', sans-serif;
`;
export const ContentLink = styled.p`
  position: absolute;
  padding: 0px 20px;
  font-family: 'Gudea', sans-serif;
  > span {
    color: #0071e3;
    cursor: pointer;
  }
`;
export const RightContentLink = styled.p`
  position: absolute;
  left: 0;
  margin-top: 50px;
  padding: 0px 20px;
  font-family: 'Gudea', sans-serif;
  > span {
    color: #0071e3;
    cursor: pointer;
  }
  ${media.md`
    position: absolute;
    left: unset;
    right: 0;
    margin-top: 20px;
  `};
`;
export const InfoBox = styled.div`
  border: 1px solid #4fff4f;
  background-color: #f7fdf9;
  border-radius: 5px;
  padding: 20px;
  font-size: 14px;
  color: #757575;
  font-family: 'Gudea', sans-serif;
  margin-top: 20px;
`;
