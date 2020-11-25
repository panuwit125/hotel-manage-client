import Axios from "axios";
import { url } from "../key";

export const getDataFunc = async (param) => {
  try {
    const result = Axios({
      method: "get",
      url: `${url}/getdatahotel/${param}`,
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
  } catch {
    return 500;
  }
};

export const getDataBookingFunc = async (name) => {
  try {
    console.log(name)
    const result = Axios({
      method: "get",
      url: `${url}/getdatahotel/booking/${name}`,
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
  } catch {
    return 500;
  }
};
