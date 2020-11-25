import React, { useState, useEffect } from "react";
import Axios from "axios";
import { getDataBookingFunc } from "../functions/getdatahotelFunc";
import moment from 'moment'

function CardMybookingComponent({ booking }) {
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(false);

  const loadData = async (url) => {
    console.log(url);
    const result = await getDataBookingFunc(url);
    if (result.status === 200) {
      setData(result.data);
      setisLoading(true);
    }
  };

  useEffect(() => {
    console.log(booking)
    loadData(booking.hotel_id);
  }, []);

  if (!isLoading) {
    return null;
  } else {
    return (
      <div className="ht-cmbc-box">
        <div className="ht-cmbc-detail">
          <h2>Name : {data.name_hotel}</h2>
          <h3>Check-in : {moment(booking.booking_check_in).format("DD MMMM YYYY")}</h3>
          <h3>Check-out : {moment(booking.booking_check_out).format("DD MMMM YYYY")}</h3>
          <h3>Price : {booking.booking_price}</h3>
          <h3>Adult : {booking.booking_adult}</h3>
        </div>
        <div className="ht-cmbc-img">
          <img
            src={data.image1_hotel}
            className="ht-cmbc-img-1"
          />
        </div>
      </div>
    );
  }
}

export default CardMybookingComponent;
