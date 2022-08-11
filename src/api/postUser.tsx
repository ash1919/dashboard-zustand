import axios from "axios";
import BASE_API_URL from "../utils/env.contants.utils";

const PostUser = async (dataFormat: any) => {
  const url = `${BASE_API_URL}/update`;
  const res = await axios.post(url, dataFormat);
  console.log(res);
};
export default PostUser;
