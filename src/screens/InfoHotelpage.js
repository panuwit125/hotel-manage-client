import React from "react";
import { useParams } from "react-router-dom";

function InfoHotel() {
  let { hotelId } = useParams();
  return <div>Info : {hotelId}</div>;
}

export default InfoHotel;
