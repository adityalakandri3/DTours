import { axiosInstance } from "../axiosInstance/axiosInstance";
import { endPoints } from "../endPoints/endPoints";

const blogUpdate = async (updateData) => {
  try {
    const { data } = await axiosInstance.post(`${endPoints.blog.update}`, updateData);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export default blogUpdate;