import axios from "axios";
import BASE_API_URL from "../utils/env.contants.utils";
import { _get } from "./interceptor";

const FetchUser =  () => {
 
  return  _get('/users');
};

export default FetchUser;
