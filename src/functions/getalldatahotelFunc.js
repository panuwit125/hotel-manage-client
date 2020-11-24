import Axios from "axios";
import { url } from "../key";

export const getAllDataFunc = async () => {
  try {
    const result = Axios({
      method: "get",
      url: `${url}/getdatahotel`,
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
