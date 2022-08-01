import axios from "axios";
import BASE_API_URL from "../utils/env.contants.utils";

const FetchUser = async () => {
  const url = `${BASE_API_URL}/fetchusers`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch(err) {
    return err;
  }
};

export default FetchUser;
