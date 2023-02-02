import { _patch } from "./interceptor";

const PostUser = async (id: string | number, dataFormat: any) => {
  return _patch(`user/${id}`, dataFormat);
};
export default PostUser;
