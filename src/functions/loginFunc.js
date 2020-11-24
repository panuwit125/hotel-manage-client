import Axios from "axios";
import { url } from "../key";

export const loginFunc = async (userlogin, passlogin) => {
  try {
    const data = {
      user_name: userlogin,
      pass_word: passlogin,
    };
    const result = await Axios({
      method: "post",
      url: `${url}/signin`,
      data,
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
