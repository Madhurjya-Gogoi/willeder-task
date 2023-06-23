import React, { useState } from 'react';
import { BsFillAirplaneFill, BsBuildingsFill, BsFillPersonFill } from 'react-icons/bs';
import { MdFlightTakeoff } from 'react-icons/md';
import { AirlineImg, AirlineInfo, Card, PassengerCard, Title } from './home.style';
import Airline from '../assets/airline.png';

const CardComponent = ({ data }: any) => {
  const [isImageError, setIsImageError] = useState(false);

  const handleImageError = () => {
    setIsImageError(true);
  };

  return (
    <Card>
      {!isImageError ? (
        <AirlineImg src={data?.airline[0]?.logo} onError={handleImageError} alt="airline-image" />
      ) : (
        <AirlineImg src={Airline} alt="airline-image" style={{ objectFit: 'cover' }} />
      )}
      <AirlineInfo>
        <Title>
          <BsFillAirplaneFill />
          {data?.airline[0]?.name}
        </Title>
        <Title>
          <BsBuildingsFill />
          {data?.airline[0]?.head_quaters}
        </Title>
      </AirlineInfo>
      <PassengerCard>
        <Title isBold={true}>Passenger Information</Title>
        <Title>
          <BsFillPersonFill />
          {data?.name}
        </Title>
        <Title>
          <MdFlightTakeoff />
          Trips: {data?.trips}
        </Title>
      </PassengerCard>
    </Card>
  );
};

export default CardComponent;
