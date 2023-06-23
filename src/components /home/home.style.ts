import styled, { css } from 'styled-components';
import { media } from '../helper';

export const HomeContent = styled.div``;
export const HomeWrapper = styled.div`
  flex: auto;
  border-radius: 0px;
  max-height: calc(100vh - 70px);
  margin-top: 54px;
  display: grid;
  grid-template-columns: 1fr;
  height: fit-content;
  gap: 20px;
  padding: 20px;

  ${media.sm`
    grid-template-columns: repeat(2, 1fr);
  `};
  ${media.lg`
    grid-template-columns: repeat(3, 1fr);
  `};
  ${media.xl`
    margin-top: 50px;
    max-height: calc(100vh - 50px);
    grid-template-columns: repeat(4, 1fr);
  `};
  ${media.xlr`
    margin-top: 54px;
    max-height: calc(100vh - 54px);
  `};
  ${media.xxl`
    margin-top: 70px;
    max-height: calc(100vh - 70px);
  `};
`;
export const Card = styled.div`
  border: 0.5px solid #0171e2;
  border-radius: 5px;
  box-shadow: rgba(0, 113, 227, 0.15) 0px 0px 30px;
  overflow: hidden;
`;
export const PassengerCard = styled.div`
  padding: 0px 10px;
`;
export const AirlineInfo = styled.div`
  padding: 0px 10px;
`;
export const AirlineImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;
type ITitle = {
  isBold?: boolean;
};
export const Title = styled.p<ITitle>`
  line-height: 10px;
  font-family: 'Gudea', sans-serif;
  display: flex;
  gap: 10px;
  align-items: center;
  ${(props: ITitle) =>
    props.isBold &&
    css`
      font-weight: 700;
    `}
`;
export const CardRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 0px 10px;
`;
