import React from "react";
import HeaderStyle from "./style.js";

export default function Header({ availabilityFrom, availabilityTo }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  let dateFrom =
    availabilityFrom !== ""
      ? ` desde el 
        ${new Date(availabilityFrom + "T00:00").toLocaleDateString(
          undefined,
          options
        )} 
        `
      : "";

  let dateTo =
    availabilityTo !== ""
      ? ` hasta el
        ${new Date(availabilityTo + "T00:00").toLocaleDateString(
          undefined,
          options
        )} 
        `
      : "";

  return (
    <HeaderStyle>
      <h1>Hoteles</h1>
      <span> {dateFrom} </span>
      <span> {dateTo} </span>
    </HeaderStyle>
  );
}
