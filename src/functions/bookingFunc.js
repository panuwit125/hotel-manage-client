import Axios from "axios";
import { url } from "../key";

export const validateAvailableHotel = async (
  dateBefore,
  dateAfter,
  hotel_id,
  numberroom,
) => {
  try {
    const data = {
      check_in: dateBefore,
      check_out: dateAfter,
      hotel_id: hotel_id,
      numberroom: numberroom,
    };
    console.log(data)
    const validate = (data) => {
      const result = Axios({
        method: "post",
        url: `${url}/validatebooking`,
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
    const result = validate(data);
    return result;
  } catch {
    return 500;
  }
};

export const comfirmbookingHotel = async (
    dateBefore,
    dateAfter,
    hotel_id,
    numberroom,
    price,
    adult
  ) => {
    try {
      const data = {
        check_in: dateBefore,
        check_out: dateAfter,
        hotel_id: hotel_id,
        numberroom: numberroom,
        price_booking:price,
        booking_adult:adult
      };
      console.log(data)
      const save = (data) => {
        const result = Axios({
          method: "post",
          url: `${url}/savebooking`,
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
      const result = save(data);
      return result;
    } catch {
      return 500;
    }
  };
  
