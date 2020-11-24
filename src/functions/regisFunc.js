import Axios from "axios";
import { url } from "../key";

export const regisFunc = async (
  userregis,
  passregis,
  firstregis,
  lastregis,
  emailregis,
  birdregis
) => {
  try {
    const data = {
      user_name: userregis,
      pass_word: passregis,
      first_name: firstregis,
      last_name:lastregis,
      email_user: emailregis,
      birdday_user: birdregis
    };
    const result = await Axios({
      method: "post",
      url: `${url}/signup`,
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
