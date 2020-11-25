import Axios from "axios";
import { url } from "../key";

export const getBookingUserFunc = async () => {
  try {
    const result = await Axios({
      method: "get",
      url: `${url}/getbooking`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((error) => {
        return error.response;
      });
    return result;
  } catch {
    return 500;
  }
};
