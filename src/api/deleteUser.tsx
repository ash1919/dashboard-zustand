import { _delete } from "./interceptor";

const DeleteUser = (id: string | number) => {
  return _delete(`user/${id}`);
};

export default DeleteUser;
