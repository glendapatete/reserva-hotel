import React from "react";
import Title from "../Title";
import Button from "../Button";
import Tag from "../Tags";
import Image from "../Images";
import { HotelContainer, HotelInfo, Flex } from "./style";
import {
  faBed,
  faMapMarker,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";

export default function ShowHotel({
  name,
  description,
  price,
  city,
  rooms,
  photo,
  country
}) {
  return (
    <HotelContainer>
      <Image img={photo} />
      <HotelInfo>
        <Title title={name} />
        <p>{description}</p>
        <Tag title={city + ", " + country} icon={faMapMarker} />
        <Flex>
          <Tag title={rooms + " Habitaciones"} icon={faBed} />
          <Tag title={price} icon={faDollarSign} type="price" />
        </Flex>
      </HotelInfo>
      <Button title="Reservar" />
    </HotelContainer>
  );
}
