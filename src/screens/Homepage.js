import React, { useState, useEffect } from "react";
import CardComponent from "../components/component.cardhotel";
import { getAllDataFunc } from "../functions/getalldatahotelFunc";

function Homepage() {
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState();

  const loadingdata = async () => {
    const result = await getAllDataFunc();
    if (result.status === 200) {
      await setData(result.data);
      await setisLoading(true);
    }
  };

  useEffect(() => {
    loadingdata();
  }, []);

  if (!isLoading) {
    return null;
  } else {
    console.log(data);
    return (
      <div className="ht-hp-container">
        {data.map((hotel, index) => {
          return <CardComponent hotel={hotel} key={index} />;
        })}
      </div>
    );
  }
}

export default Homepage;
