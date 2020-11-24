import Axios from "axios";
import { url } from "../key";

export const insertHotel = async (
  name,
  detail,
  image1,
  image2,
  image3,
  price,
  mapX,
  mapY,
  province,
  country,
  numberroom
) => {
  try {
    const postData = async (
      name,
      detail,
      image1,
      image2,
      image3,
      price,
      mapX,
      mapY,
      province,
      country,
      numberroom
    ) => {
      const data = {
        name_hotel: name,
        detail_hotel: detail,
        image1_hotel: image1,
        image2_hotel: image2,
        image3_hotel: image3,
        price_hotel: price,
        map_point1_hotel: mapX,
        map_point2_hotel: mapY,
        province_hotel: province,
        country_hotel: country,
        numberofroom_hotel: numberroom,
      };
      const result = await Axios({
        method: "post",
        url: `${url}/inserthotel`,
        data,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
        .then((data) => {
          console.log(data);
          return data;
        })
        .catch((error) => {
          console.log(error.response);
          return error.response;
        });
      return result;
    };
    const result = await postData(
      name,
      detail,
      image1,
      image2,
      image3,
      price,
      mapX,
      mapY,
      province,
      country,
      numberroom
    );
    return result;
  } catch {
    return 500;
  }
};
