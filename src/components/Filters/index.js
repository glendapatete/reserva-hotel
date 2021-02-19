import React from "react";
import { FilterStyle, Select, Input, inputIcon } from "./style";
import {
  faSignInAlt,
  faSignOutAlt,
  faGlobe,
  faDollarSign,
  faBed
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Filters({
  country,
  actionCountry,
  price,
  actionPrice,
  room,
  actionRoom,
  availabilityFrom,
  actionAvailabityFrom,
  availabilityTo,
  actionAvailabityTo
}) {
  //Obetengo la fecha con formato yyyy-mm-dd para que tome el input date como fecha minima de entrada la fecha de hoy
  const date = new Date();
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();
  dd = dd < 10 ? `0${dd}` : dd;
  mm = mm < 10 ? `0${mm}` : mm;
  const today = `${yyyy}-${mm}-${dd}`;

  return (
    <FilterStyle>
      <span>
        <FontAwesomeIcon icon={faSignInAlt} />
        <Input
          type="date"
          name="availabilityFrom"
          onChange={actionAvailabityFrom}
          value={availabilityFrom}
          min={today}
        />
      </span>
      <span>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <Input
          type="date"
          name="availabilityTo"
          onChange={actionAvailabityTo}
          value={availabilityTo}
          min={today}
        />
      </span>
      <span>
        <FontAwesomeIcon icon={faGlobe} />
        <Select value={country} onChange={actionCountry}>
          <option value="todos">Todos los paises</option>
          <option value="argentina">Argentina</option>
          <option value="brasil">Brasil</option>
          <option value="chile">Chile</option>
          <option value="uruguay">Uruguay</option>
        </Select>
      </span>
      <span>
        <FontAwesomeIcon icon={faDollarSign} />
        <Select value={price} onChange={actionPrice}>
          <option value={0}>Cualquier precio</option>
          <option value={1}>$</option>
          <option value={2}>$$</option>
          <option value={3}>$$$</option>
          <option value={4}>$$$$</option>
        </Select>
      </span>
      <span>
        <FontAwesomeIcon icon={faBed} />
        <Select value={room} onChange={actionRoom}>
          <option value={0}>Cualquier tamaño</option>
          <option value="pequeño">Hotel pequeño</option>
          <option value="mediano">Hotel mediano</option>
          <option value="grande">Hotel grande</option>
        </Select>
      </span>
    </FilterStyle>
  );
}
