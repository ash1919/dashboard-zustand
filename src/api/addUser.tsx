import { _post } from "./interceptor";

const AddUser = (userData: any) => {
  return _post(`user/create`, userData);
};

export default AddUser;
