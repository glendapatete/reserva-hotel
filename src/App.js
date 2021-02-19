import React, { useState } from "react";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalsStyles.js";
import Filters from "./components/Filters";
import HotelList from "./components/HotelList";
import hotelData from "./hotelData/data";

export default function App() {
  const [country, setCountry] = useState("todos");
  const [price, setPrice] = useState(0);
  const [room, setRoom] = useState(0);
  const [availabilityFrom, setAvailabilityFrom] = useState("");
  const [availabilityTo, setAvailabilityTo] = useState("");

  const handlerCountry = (e) => {
    setCountry(e.target.value);
  };

  const handlerPrice = (e) => {
    setPrice(e.target.value);
  };

  const handlerRoom = (e) => {
    setRoom(e.target.value);
  };

  const handlerAvailabilityFrom = (e) => {
    setAvailabilityFrom(e.target.value);
  };

  const handlerAvailabilityTo = (e) => {
    setAvailabilityTo(e.target.value);
  };

  let msgError = "";

  //Filtros paises, precios y tamaño
  const hotels = () => {
    const list = hotelData
      .filter((hotel) => {
        if (country !== "todos") {
          return hotel.country.toLocaleLowerCase() === country;
        }
        return hotel;
      })
      .filter((hotel) => {
        if (price !== 0) {
          return parseInt(hotel.price) === parseInt(price);
        }
        return hotel;
      })
      .filter((hotel) => {
        if (room !== 0) {
          if (room === "pequeño") {
            return hotel.rooms <= 10;
          }
          if (room === "mediano") {
            return hotel.rooms >= 11 && hotel.rooms <= 20;
          }
          if (room === "grande") {
            return hotel.rooms > 20;
          }
        }
        return hotel;
      });
    if (list.length) {
      return list;
    } else {
      msgError = "No hay hoteles disponibles con esas características";
      return msgError;
    }
  };

  let filteredList = hotels();
  //fin filtro paises, precios y tamaño

  //Filtro de fechas
  const reservation = () => {
    if (msgError) {
      return msgError;
    }
    //Hago de mis fechas de los inputs una nueva fecha y agrego T00:00 a la fecha elegida para que no me tome la fecha anterior
    const to = new Date(availabilityTo + "T00:00");
    const from = new Date(availabilityFrom + "T00:00");

    //Verifico que no esten vacias ninguna de las dos fechas(entrada y salida)
    if (availabilityFrom !== "" && availabilityTo !== "") {
      //valido que la fecha de salida no sea menor a la de entrada, on getTime() obtengo la fecha unix
      if (to.getTime() < from.getTime()) {
        msgError =
          "La fecha de entrada no puede ser mayor a la fecha de salida.";
        return msgError;
      }

      const list = filteredList.filter((hotel) => {
        return (
          from.getTime() >= hotel.availabilityFrom &&
          to.getTime() <= hotel.availabilityTo
        );
      });

      if (list.length) {
        return list;
      } else {
        msgError = "No hay hoteles disponibles en ese rango de fecha.";
        return msgError;
      }
    }

    return filteredList;
  };
  //Fin filtro fechas
  let filtered = reservation();

  return (
    <>
      <GlobalStyle />
      <Header
        availabilityFrom={availabilityFrom}
        availabilityTo={availabilityTo}
      />
      <Filters
        country={country}
        actionCountry={handlerCountry}
        price={price}
        actionPrice={handlerPrice}
        room={room}
        actionRoom={handlerRoom}
        availabilityFrom={availabilityFrom}
        actionAvailabityFrom={handlerAvailabilityFrom}
        availabilityTo={availabilityTo}
        actionAvailabityTo={handlerAvailabilityTo}
      />
      <HotelList data={filtered} msgError={msgError} />
    </>
  );
}
