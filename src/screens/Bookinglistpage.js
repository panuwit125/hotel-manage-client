import React, { useState, useEffect } from "react";
import CardComponent from "../components/component.cardmybooking";
import { getBookingUserFunc } from "../functions/getbookinguser";

function Bookinglistpage() {
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState();

  const LoadData = async () => {
    const result = await getBookingUserFunc();
    if (result.status === 200) {
      await console.log(result.data);
      await setData(result.data);
      await setisLoading(true);
    }
  };

  useEffect(() => {
    LoadData();
  }, []);

  if (!isLoading) {
    return null;
  } else {
    return ( 
      <div className="ht-bk-container">
        <div className="ht-bk-box">
          <h1>My booking</h1>
          {data.map((booking,index)=>{
              return <CardComponent booking={booking} key={index} />
          })}
        </div>
      </div>
    );
  }
}

export default Bookinglistpage;
