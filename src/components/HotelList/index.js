import React from "react";
import ShowHotel from "../ShowHotel";
import Container from "./style";
export default function HotelList({ data, msgError }) {
  if (!msgError) {
    return (
      <Container>
        {data.map(function (item, index) {
          return (
            <ShowHotel
              photo={item.photo}
              name={item.name}
              description={item.description}
              fecha={item.fechaCreada}
              city={item.city}
              country={item.country}
              rooms={item.rooms}
              price={item.price}
              availabilityFrom={item.availabilityFrom}
              availabilityTo={item.availabilityTo}
              key={index}
            />
          );
        })}
      </Container>
    );
  } else {
    return <Container>{msgError}</Container>;
  }
}
