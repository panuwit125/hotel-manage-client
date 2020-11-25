import Axios from "axios";
import { url } from "../key";

export const searchFunc = async (text) => {
  try {
    console.log(text);
    const result = Axios({
      method: "get",
      url: `${url}/search/${text}`,
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
