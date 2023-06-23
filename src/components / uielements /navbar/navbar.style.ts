import styled from 'styled-components';
import { media } from '../../helper';
import Button from '../button';

export const NavbarWrapper = styled.div`
  position: fixed;
  height: 54px;
  background: #01376e;
  top: 0;
  z-index: 999;
  width: 100%;
  color: #ffffff;

  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;

  ${media.xl`
    height: 50px;
    font-size:  '16px';
  `}

  ${media.xlr`
    height: 54px;
    font-size:  '14px';
  `}

  ${media.xxl`
    height: 70px;
    font-size: '16px';
  `}
`;
export const NavbarLeft = styled.div`
  padding: 0px 20px;
  ${media.xl`
   padding: 0px 50px;
  `}
`;
export const NavbarRight = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding-right: 20px;
  font-family: 'Gudea', sans-serif;
  ${media.xl`
    padding: 0px 50px;
    gap: 30px;
  `}
`;
export const NavbarLogo = styled.img`
  width: 54px;
  height: 54px;
`;
export const SignUpButton = styled(Button)`
  border: 1px solid #0071e3;
  text-align: center;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  background-color: transparent;
  font-size: 14px;
`;
export const Title = styled.p``;
