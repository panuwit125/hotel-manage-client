import React, { useState, useEffect } from "react";
import CardComponent from "../components/component.cardhotel";
import { searchFunc } from "../functions/searchFunc";
import { useParams } from "react-router-dom";

function SearchPage() {
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState();
  let { searchid } = useParams();

  useEffect(() => {
    const loadingdata = async () => {
      const result = await searchFunc(searchid);
      if (result.status === 200) {
        console.log(result.data.result);
        await setData(result.data.result);
        await setisLoading(true);
      }
    };
    setisLoading(false);
    loadingdata();
  }, [searchid]);

  if (!isLoading) {
    return null;
  } else {
    console.log(data);
    return (
      <div className="ht-hp-container">
        {data.length === 0
          ? null
          : data.map((hotel, index) => {
              console.log(hotel);
              return <CardComponent hotel={hotel} key={index} />;
            })}
      </div>
    );
  }
}

export default SearchPage;
